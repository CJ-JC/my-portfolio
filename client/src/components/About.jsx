import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profil_img from "../../public/my-profil.png";

const ServiceCard = ({ index, title, icon }) => (
    // <Tilt className='xs:w-[250px] w-full'>
    <div className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </div>
    // </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Qui suis-je ?</p>
                <h2 className={styles.sectionHeadText}>À propos de moi.</h2>
            </motion.div>

            <section className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between space-x-3">
                <motion.div variants={fadeIn("", "", 0.1, 1)} className="md:w-1/2 text-justify grid gap-4 text-secondary text-[17px] leading-[30px]">
                    <p>Salut, moi c'est Cherley, développeur web passionné, diplômé d’un Master en développement web. Je crée des sites performants, intuitifs et centrés utilisateur.</p>
                    <p>
                        Fort de plusieurs expériences sur des projets complexes, j'ai développé une solide expertise avec des technologies comme Symfony et ReactJS. <br />
                        Mon objectif : relever des défis techniques avec des solutions innovantes.
                    </p>
                    <p>Ce portfolio est un aperçu de mes compétences et de mon parcours. J'espère que vous y trouverez une bonne vision de mon travail. Si vous souhaitez discuter de vos projets ou envisager une collaboration, n’hésitez pas à me contacter !</p>
                </motion.div>

                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img src={profil_img} alt="photo de profil" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-l shadow-lg shadow-cyan-500/50 from-slate-900 to-slate-750 object-cover" />
                </div>
            </section>
        </>
    );
};

export default SectionWrapper(About, "about");
