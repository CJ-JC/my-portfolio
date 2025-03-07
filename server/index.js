import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

function sendEmail({ email, fullname, message }) {
    return new Promise((resolve, reject) => {
        // Regex pour valider l'email
        const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const trimEmail = email?.trim().toLowerCase().replace(/\s+/g, "");
        const isValidEmail = emailRegexp.test(trimEmail);

        // Vérification des champs obligatoires
        if (!email || !fullname || !message) {
            return reject({ message: "Tous les champs sont obligatoires." });
        }

        // Vérification de la validité de l'email
        if (!isValidEmail) {
            return reject({ message: "L'email est invalide" });
        }

        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || "587", 10),
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const emailHTML = `
            <h4>Un message depuis le portfolio ${fullname}</h4>
            <p>${message}</p>
            <p>Répondre à : <a href="mailto:${email}">${email}</a></p>
        `;

        const mail_configs = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_FROM,
            subject: `Un message depuis le portfolio ${fullname}`,
            text: message,
            html: emailHTML,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.error(error);
                return reject({ message: "Une erreur s'est produite lors de l'envoi de l'email." });
            }
            return resolve({ message: "Votre message a été envoyé avec succès." });
        });
    });
}

app.post("/api/send-email", async (req, res) => {
    sendEmail(req.body)
        .then((response) => res.json({ success: true, message: response.message }))
        .catch((error) => res.status(500).json({ success: false, message: error.message || "Erreur inconnue" }));
});

app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
