import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, url, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="bg-tertiary flex justify-between flex-col p-5 min-h-[500px] rounded-2xl sm:w-[360px] w-full transition duration-500 ease-in-out hover:scale-105">
                    <div className="relative w-full h-[230px]">
                        <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
                        {source_code_link && (
                            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                                <div onClick={() => window.open(source_code_link, "_blank")} className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                    <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-3">
                        <h3 className="text-white font-bold text-[22px]">{name}</h3>
                        <p className="mt-2 text-secondary text-[14px] text-justify">{description}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Ce sont là</p>
                <h2 className={`${styles.sectionHeadText}`}>Mes Créations et Contributions.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Les projets suivants présentent mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers des dépôts de code et des démonstrations en direct. Il reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer des projets de manière efficace.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
