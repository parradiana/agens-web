'use client';

import { useContactModal } from '@/lib/contact-modal-context';

export function FooterContactButton({ label }: { label: string }) {
  const { openModal } = useContactModal();

  return (
    <div className="flex flex-col w-full">
      <div className="h-[1px] w-full bg-white mb-0" />
      <button
        onClick={openModal}
        className="text-[20px] leading-[23px] font-normal hover:underline transition-all text-left text-white"
      >
        {label}
      </button>
    </div>
  );
}
