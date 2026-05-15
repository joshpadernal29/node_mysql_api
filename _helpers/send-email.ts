// import nodemailer from 'nodemailer';
// import config from "../config.json";

// export default async function sendEmail({ to, subject, html, from = config.emailFrom }: any) {
//     const transporter = nodemailer.createTransport(config.smtpOptions);
//     await transporter.sendMail({ from, to, subject, html });
// }

// ethreal 
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();

// export default async function sendEmail({ to, subject, html, from = process.env.EMAIL_FROM }: any) {
//     const transporter = nodemailer.createTransport({
//         host: process.env.ETHEREAL_HOST,
//         port: Number(process.env.ETHEREAL_PORT),
//         auth: {
//             user: process.env.ETHEREAL_USER,
//             pass: process.env.ETHEREAL_PASS,
//         },
//     });

//     const info = await transporter.sendMail({ from, to, subject, html });
//     console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
// }


// Mailtrap (Uncomment in case ethreal not working)
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: Number(process.env.MAILTRAP_PORT),
    secure: false,
    auth: {
        user: process.env.MAILTRAP_USER!,
        pass: process.env.MAILTRAP_PASS!,
    },
});

interface SendEmailParams {
    to: string;
    subject: string;
    html: string;
    from?: string;
}

export default async function sendEmail({
    to,
    subject,
    html,
    from = process.env.EMAIL_FROM,
}: SendEmailParams) {
    try {
        const info = await transporter.sendMail({
            from,
            to,
            subject,
            html,
        });

        console.log('Email sent:', info.messageId);

    } catch (error) {
        console.error('Email sending failed:', error);
    }
}
