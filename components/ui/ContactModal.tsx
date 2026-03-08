'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useContactModal } from '@/lib/contact-modal-context';

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const t = useTranslations('ContactPage');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeModal]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset form status when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
    }
  }, [isOpen]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          company: formData.get('company'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });
      if (!res.ok) {
        throw new Error();
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Modal wrapper — click outside to close */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-[912px] max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* SVG background */}
              <svg
                viewBox="0 0 912 811"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <path d="M912 810.5H0V66.5H863L912 0V810.5Z" fill="black" />
                <g clipPath="url(#modal-clip)">
                  <path d="M339.808 258.18H462.831L394.706 378.389L431.483 457.95H431.191L359.639 588.898H359.517L465.142 810.5H381.416L370.531 788.437H247.509L315.634 668.226L278.963 588.898H278.952L278.958 588.886L278.856 588.666H279.08L351.427 457.95H350.933L245.197 236.117H328.923L339.808 258.18Z" fill="#101010" />
                  <path d="M472.977 610.73H595.999L527.875 730.94L564.652 810.5H484.102L378.366 588.666H462.093L472.977 610.73Z" fill="#101010" />
                  <path d="M232.097 753.13H148.369L137.485 731.066H14.4624L82.5879 610.857L45.8107 531.297H126.36L232.097 753.13Z" fill="#101010" />
                  <path d="M200.165 469.618H323.189L255.063 589.828L291.84 669.388H211.291L105.554 447.554H189.281L200.165 469.618Z" fill="#101010" />
                  <path d="M595.999 599.525H512.273L501.388 577.462H378.366L446.492 457.252L409.713 377.692H490.264L595.999 599.525Z" fill="#101010" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M150.542 316.013H150.715L150.622 316.179L150.715 316.375H150.511L82.5899 436.223L119.368 515.783H38.8177L-66.7457 294.311H-66.9199L-66.8245 294.146L-66.9199 293.949H-66.7135L1.20657 174.101L-35.5706 94.5405H44.9788L150.542 316.013ZM27.6933 316.013H66.8095L56.1042 294.311H16.987L27.6933 316.013Z" fill="#101010" />
                  <path d="M125.72 36.5635H248.743L180.618 156.774L227.72 258.12L323.188 458.412H239.461L228.576 436.349H105.554L173.68 316.139L127.148 215.991L31.1089 14.5H114.835L125.72 36.5635Z" fill="#101010" />
                </g>
                <defs>
                  <clipPath id="modal-clip">
                    <rect width="596" height="744" fill="white" transform="translate(0 66.5)" />
                  </clipPath>
                </defs>
              </svg>

              {/* Close button */}
              <button
                onClick={closeModal}
                aria-label="Cerrar"
                className="absolute right-[30px] top-[20px] z-20 text-white transition-opacity hover:opacity-60 md:right-[50px] md:top-[30px]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Scrollable content */}
              <div className="relative z-10 h-full max-h-[90vh] overflow-y-auto px-[30px] pb-[60px] pt-[100px] md:px-[50px] md:py-[70px]">
                {status === 'success' ? (
                  <div className="flex min-h-[300px] flex-col items-center justify-center gap-8 text-center">
                    <p className="font-sans text-[20px] text-white">{t('form.success')}</p>
                    <button
                      onClick={closeModal}
                      className="border-2 border-white px-12 py-3 font-sans text-[18px] text-white transition-opacity hover:opacity-70"
                    >
                      CERRAR
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
                    {/* Nombre y apellido */}
                    <div className="flex flex-col gap-[4px]">
                      <label htmlFor="modal-name" className="font-sans text-[20px] uppercase text-white md:text-[25px]">
                        {t('form.name')}:
                      </label>
                      <input
                        id="modal-name"
                        name="name"
                        type="text"
                        required
                        className="w-full border-b border-white bg-transparent py-1 font-sans text-[18px] text-white outline-none placeholder:text-white/40"
                      />
                    </div>

                    {/* Empresa */}
                    <div className="flex flex-col gap-[4px]">
                      <label htmlFor="modal-company" className="font-sans text-[20px] uppercase text-white md:text-[25px]">
                        {t('form.company')}:
                      </label>
                      <input
                        id="modal-company"
                        name="company"
                        type="text"
                        className="w-full border-b border-white bg-transparent py-1 font-sans text-[18px] text-white outline-none placeholder:text-white/40"
                      />
                    </div>

                    {/* Mail */}
                    <div className="flex flex-col gap-[4px]">
                      <label htmlFor="modal-email" className="font-sans text-[20px] uppercase text-white md:text-[25px]">
                        {t('form.email')}:
                      </label>
                      <input
                        id="modal-email"
                        name="email"
                        type="email"
                        required
                        className="w-full border-b border-white bg-transparent py-1 font-sans text-[18px] text-white outline-none placeholder:text-white/40"
                      />
                    </div>

                    {/* Asunto */}
                    <div className="flex flex-col gap-[4px]">
                      <label htmlFor="modal-subject" className="font-sans text-[20px] uppercase text-white md:text-[25px]">
                        {t('form.subject')}:
                      </label>
                      <input
                        id="modal-subject"
                        name="subject"
                        type="text"
                        className="w-full border-b border-white bg-transparent py-1 font-sans text-[18px] text-white outline-none placeholder:text-white/40"
                      />
                    </div>

                    {/* Mensaje */}
                    <div className="flex flex-col gap-[4px]">
                      <label htmlFor="modal-message" className="font-sans text-[20px] uppercase text-white md:text-[25px]">
                        {t('form.message')}:
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        rows={5}
                        required
                        className="w-full resize-none border-b border-white bg-transparent py-1 font-sans text-[18px] text-white outline-none placeholder:text-white/40"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="font-sans text-[14px] text-red-400">{t('form.error')}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="mt-6 w-full border-2 border-white py-3 font-sans text-[25px] lowercase tracking-wide text-white transition-opacity disabled:opacity-50 hover:opacity-70 md:text-[31px]"
                    >
                      {status === 'sending' ? t('form.sending') : t('form.submit')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
