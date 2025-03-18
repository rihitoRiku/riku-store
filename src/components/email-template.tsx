// components/email-template.tsx
import React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>New message from {firstName}!</h1>
    <p>From: {email}</p>
    <p>Message: {message}</p>
  </div>
);