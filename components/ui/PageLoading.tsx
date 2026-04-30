import Image from 'next/image';

export function PageLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <Image
        src="/loading/video-loading.gif"
        alt="Loading"
        width={800}
        height={800}
        unoptimized
        priority
      />
    </div>
  );
}
