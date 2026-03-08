import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { VIDEO_LOADING_GIF } from '@/lib/assets';

interface WorkCardProps {
  slug: string;
  brand: string;
  title: string;
  portadaUrl?: string;
  viewMoreLabel: string;
}

export function WorkCard({
  slug,
  brand,
  title,
  portadaUrl,
  viewMoreLabel,
}: WorkCardProps) {
  return (
    <article>
      <Link
        href={{ pathname: '/trabajos/[id]', params: { id: slug } }}
        className="flex flex-col gap-4 overflow-hidden md:flex-row md:items-end md:gap-5"
      >
        {/* Portada image */}
        <div
          className="relative aspect-[10/3] w-full overflow-hidden bg-cover bg-center md:w-[667px] md:shrink-0"
          style={{ backgroundImage: `url(${VIDEO_LOADING_GIF})` }}
        >
          {portadaUrl ? (
            <Image
              src={portadaUrl}
              alt={`${brand} — ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 667px"
            />
          ) : (
            <div className="size-full bg-gray" />
          )}
        </div>

        {/* Brand + title */}
        <div className="flex flex-1 flex-col gap-1 md:gap-[15px]">
          <span className="font-secondary text-xl font-semibold text-black md:text-[30px]">
            [{brand}]
          </span>
          <h2 className="break-words font-sans text-2xl leading-[1.05] font-normal text-black md:text-[45px] md:leading-[47px]">
            {title}
          </h2>
        </div>

        {/* CTA */}
        <span className="shrink-0 self-start font-sans text-base font-normal lowercase text-black transition-all hover:underline hover:underline-offset-2 md:self-end md:text-xl md:leading-[23px]">
          {viewMoreLabel}.
        </span>
      </Link>
    </article>
  );
}
