import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Voici</p>
                <h2 className={`${styles.sectionHeadText}`}>Mes compétences.</h2>
            </motion.div>

            <div className="flex mt-3 flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <p className="text-center text-white text-sm">{technology.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
