import Image from 'next/image';
import { VIDEO_LOADING_GIF } from '@/lib/assets';

export function PageLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <Image
        src={VIDEO_LOADING_GIF}
        alt="Loading"
        width={800}
        height={800}
        unoptimized
        priority
      />
    </div>
  );
}
