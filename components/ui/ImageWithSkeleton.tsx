'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

interface ImageWithSkeletonProps extends ImageProps {
  wrapperClassName?: string;
}

export function ImageWithSkeleton({
  wrapperClassName = '',
  className = '',
  alt,
  onLoad,
  ...rest
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton pulse */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray" />
      )}

      <Image
        alt={alt}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={(e) => {
          setLoaded(true);
          if (onLoad) {
            onLoad(e);
          }
        }}
        {...rest}
      />
    </div>
  );
}
