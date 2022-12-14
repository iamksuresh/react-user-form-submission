// tslint:disable jsx-no-lambda
/**
 * Upload image and read as dataURL
 * Use cropper library for cropping the image
 * Cropper image is used as avatar
 */
import React, { useState, useRef, FC, useEffect } from 'react';

import { Crop, PixelCrop } from 'react-image-crop';
import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from '../../hooks/useDebounceEffect';

import 'react-image-crop/dist/ReactCrop.css';
import ImgPop from './ImgPop';
import { Avatar, Button } from '@mui/material';
import { CommonEnum } from '../../enum/CommonEnum';
import { ImageUploadService } from '../../services/ImageUploadService';

const ImageUploader: FC<any> = () => {
  const [imgSrc, setImgSrc] = useState('');
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const uploaderRef = useRef<HTMLInputElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () => setImgSrc(reader?.result?.toString() || ''));
      reader.readAsDataURL(e.target.files[0]);
      setSelectedFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (selectedFile) {
      ImgUpload();
    }
  }, [selectedFile]);

  const ImgUpload = async () => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append('selectedFile', selectedFile);
      await ImageUploadService.uploadImage(formData);
    }
  };

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop, scale, rotate);
      }
    },
    100,
    [completedCrop, scale, rotate],
  );

  return (
    <div className="imageUploader">
      <div className="Crop-Controls">
        {imgRef.current === null && (
          <>
            <Button
              onClick={() => uploaderRef?.current?.click()}
              color="primary"
              variant="contained"
            >
              {CommonEnum.UPLOAD_IMAGE}
            </Button>

            <input
              style={{
                display: 'none',
                opacity: 40,
                width: 200,
                height: 100,
                top: '30px',
                position: 'relative',
              }}
              type="file"
              accept="image/*"
              onChange={onSelectFile}
              ref={uploaderRef}
            />
          </>
        )}
      </div>
      {Boolean(imgSrc) && (
        <ImgPop imgSrc={imgSrc} setCompletedCrop={setCompletedCrop} imgRef={imgRef} />
      )}
      <div>
        {Boolean(completedCrop) && (
          <>
            <Avatar alt="Upload Profile Pic" sx={{ width: 130, height: 130 }}>
              <canvas
                ref={previewCanvasRef}
                style={{
                  objectFit: 'contain',
                  width: '120px',
                  height: '120px',
                }}
              />
            </Avatar>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
