// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Using 'any' type assertion for the react property
    const emailOptions: any = {
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.NEXT_PUBLIC_RESEND_EMAIL!],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({
        firstName: body.username,
        email: body.email,
        message: body.message,
      }) as any,
    };

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}