import { Resend } from "resend";
import dotenv from "dotenv"
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const getEmail = async (req, res) => {
    try {
        const { name, email, message } = req.body

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "priyaalgayakwad3@gmail.com",
            subject: `New Message from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `
        })
        return res.status(200).json({message:"Email Sent Successfully",success:true})
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error", success: false })
    }

}