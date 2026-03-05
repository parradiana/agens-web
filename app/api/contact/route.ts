import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_EMAIL_TO;
    if (!to) {
      console.error('CONTACT_EMAIL_TO is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: 'Agens Web <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: subject || `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Asunto:</strong> ${subject}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 },
    );
  }
}
