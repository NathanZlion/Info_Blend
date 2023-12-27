import { createTransport } from "nodemailer";
import { config as configDotenv } from "dotenv";
import SMTPConnection from "nodemailer/lib/smtp-connection";

configDotenv(); 


// trasporter to send email
const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: +process.env.EMAIL_PORT!,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
} as SMTPConnection.Options);


/**
 * Send email
 * @param {string} recipientEmailAddress - email address of recipient
 * @param {string} emailBodyHtml - the email to be sent
 * @returns {Promise<void>}
 */

export const sendEmail = async (
    recipientEmailAddress: string,
    emailSubject: string,
    emailBodyHtml: String,
): Promise<void> => {

    const info = await transporter.sendMail({
        from: `"Infoblender (no-reply) 👻" ${process.env.EMAIL_USER}`,
        to: `${recipientEmailAddress}`,
        subject: emailSubject,
        html: emailBodyHtml as string,
    });

    if (info.messageId) {
        console.log("Message sent: %s", info.messageId);
    } else {
        throw new Error("Message not sent");
    }
}
