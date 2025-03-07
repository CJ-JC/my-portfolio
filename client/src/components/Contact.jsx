import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from "axios";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const BASE_URL = import.meta.env.VITE_API_URL;

    const [inputs, setInputs] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");

        try {
            await axios.post(`${BASE_URL}/api/send-email`, { ...inputs });

            setInputs({
                fullname: "",
                email: "",
                message: "",
            });
            setSuccessMessage("Votre message a été envoyé avec succès !");
        } catch (error) {
            console.log({ content: error.response?.data || "Une erreur est survenue" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <p className={styles.sectionSubText}>Prise de contact</p>
            <h3 className={styles.sectionHeadText}>Discuter ensemble.</h3>
            <div className="container mx-auto">
                <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                    <form className="mx-auto my-4 w-full lg:w-5/12" onSubmit={sendEmail}>
                        {successMessage && <p className="my-4 text-green-500 text-sm">{successMessage}</p>}
                        <div className="mb-8 flex flex-col justify-center w-full gap-4 md:flex-row">
                            <div className="w-full">
                                <label htmlFor="fullname" className="block mb-2 text-sm font-medium dark:text-white">
                                    Nom complet
                                </label>
                                <input type="text" id="fullname" value={inputs.fullname} name="fullname" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Votre nom" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">
                                    E-mail
                                </label>
                                <input type="email" id="email" value={inputs.email} name="email" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Votre email" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">
                                Message
                            </label>
                            <textarea id="message" value={inputs.message} name="message" onChange={handleInputChange} rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Votre message"></textarea>
                        </div>
                        <button type="submit" className="text-black mt-4 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                            {loading ? "Envoi en cours..." : "Envoyer le message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Contact, "contact");
