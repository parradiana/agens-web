'use client';

import { useEffect, useState } from 'react';
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

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
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
              {/* Background */}
              <div className="absolute inset-0 bg-black" aria-hidden="true" />

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
