// lib/sendMail.ts
import React from 'react'; // Add this line

import nodemailer from 'nodemailer';
// import { render } from '@react-email/render';
import Contactmail from '@/components/Contactmail';
import { render } from '@react-email/components';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const emailTepm={
  emailComponent: Contactmail
}

export const sendEmail = async ({ name, email, message }: ContactFormData) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailHtml = await render(React.createElement(emailTepm.emailComponent, { name, email, message }));
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `New contact from ${name}`,
    html: emailHtml,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};
