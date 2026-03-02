'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';

export function ContactForm() {
  const t = useTranslations('ContactPage');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <p>{t('form.success')}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">{t('form.name')}</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div>
        <label htmlFor="company">{t('form.company')}</label>
        <input id="company" name="company" type="text" />
      </div>
      <div>
        <label htmlFor="email">{t('form.email')}</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="subject">{t('form.subject')}</label>
        <input id="subject" name="subject" type="text" />
      </div>
      <div>
        <label htmlFor="message">{t('form.message')}</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('form.sending') : t('form.submit')}
      </button>
      {status === 'error' && <p>{t('form.error')}</p>}
    </form>
  );
}
