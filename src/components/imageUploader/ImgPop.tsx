import { FC, forwardRef, useContext, useEffect, useRef, useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    Crop,
    PixelCrop,
  } from 'react-image-crop'

const ImgPop: FC<any> = ({imgSrc, setCompletedCrop, imgRef}) => {
  const [open, setOpen] = useState(true);

  const [crop, setCrop] = useState<Crop>()

  // const [completedCrop, setCompletedCrop] = useState<PixelCrop>()

  const [aspect, setAspect] = useState<number | undefined>(16 / 9)


// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
const centerAspectCrop = (
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
  ) => {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    )
  }

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    // imgRef.current = null;
    // setCompletedCrop(null)
    setOpen(false);
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crop Image</DialogTitle>
        <DialogContent>          
          <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            // style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button onClick={handleClose} color = "primary" >Crop</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImgPop;
