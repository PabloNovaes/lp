import emailjs from 'emailjs-com';

type MailProps = {
    name: string;
    email: string;
    subject: string;
    content: string;
}

export const sendMail = async ({ content, email, name, subject }: MailProps) => {
    try {
        await emailjs.send('service_mz10oef', 'template_tpzlfgr', {
            name: name,
            message: content,
            reply_to: email,
            title: subject
        }, 'fpSHc_Bg051BzMRPj')
    } catch (err) {
        console.log(err);

    }
}