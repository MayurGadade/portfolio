// // app/api/contact/route.js

// import nodemailer from 'nodemailer';
// import { render } from '@react-email/render';

// export async function POST(request: Request) {
//   const { name, email, message } = await request.json();

//   console.log("name email message",name, email, message);
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const emailHtml = render(<Constactmail name={name} email={email} message={message} />);

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_TO,
//     subject: `New contact from ${name}`,
//     text: message,
//     html: emailHtml,
    
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return new Response(JSON.stringify({ message: 'Error sending email' }), {
//       status: 500,
//     });
//   }
// }

// app/api/contact/route.tsx

import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    await sendEmail({ name, email, message });
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
