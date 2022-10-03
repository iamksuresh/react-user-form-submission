import React from 'react';
import { FallbackProps } from 'react-error-boundary';

/**
 * ErrorFallback component
 * Render component when app crashes or return errors
 */
export default function ErrorFallback({
  error,
}: FallbackProps) {
  return (
    <div>
      <strong>Error!</strong>
      <div>Error Message and Stack</div>
      {error && (
        <div>
          <strong>Error:</strong> {error.toString()}
        </div>
      )}
      
    </div>
  );
}
