'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import { ContactFormEmailTemplate } from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email',
        };
    }

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message',
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Eric Kim <hello@ericdwkim.io>',
            to: 'ericdwkim.io@gmail.com',
            subject: `${senderEmail}: Portfolio contact form message`,
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmailTemplate, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};