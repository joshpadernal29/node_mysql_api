// import nodemailer from 'nodemailer';
// import config from "../config.json";

// export default async function sendEmail({ to, subject, html, from = config.emailFrom }: any) {
//     const transporter = nodemailer.createTransport(config.smtpOptions);
//     await transporter.sendMail({ from, to, subject, html });
// }

// ethreal
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export default async function sendEmail({ to, subject, html, from = process.env.EMAIL_FROM }: any) {
    const transporter = nodemailer.createTransport({
        host: process.env.ETHEREAL_HOST,
        port: Number(process.env.ETHEREAL_PORT),
        auth: {
            user: process.env.ETHEREAL_USER,
            pass: process.env.ETHEREAL_PASS,
        },
    });

    const info = await transporter.sendMail({ from, to, subject, html });
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
}
