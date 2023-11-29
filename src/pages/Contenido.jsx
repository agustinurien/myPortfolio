import { Download, GitHub, LinkedIn } from "@mui/icons-material"
import "../pages/contenido.css"
import { motion, useTime, useTransform } from "framer-motion"
import Experiencia from "../common/experiencia/Experiencia"
import Projects from "../common/projects/Projects"
import Languaje from "../common/languaje/Languaje"
import AboutMe from "../common/aboutme/AboutMe"





const Contenido = () => {

    const time = useTime();
    const rotate = useTransform(time, [0, 15000], [0, 360], { clamp: false });

    const whileHover = {
        scale: 1.2,
        transition: {
            duration: 0.5,
            delay: 0
        }
    };
    return (
        <>
            <div
                className="contenedor-main">
                <section className="seccionInfo">

                    <motion.h1
                        initial={{ y: -75, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            color: "#000"
                        }} className="titulo">Agustin Urien.</motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        animate={{
                            opacity: 1,
                            color: "#000"
                        }}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
                    <div className="buttons">
                        <motion.a
                            whileHover={whileHover}
                            initial={{ x: -75, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                color: "#000"
                            }}
                            className="L" href="https://www.linkedin.com/in/agustin-urien-210b07240/"><LinkedIn fontSize="inherit" /></motion.a>
                        <motion.a
                            whileHover={whileHover}
                            initial={{ x: -75, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                color: "#000"
                            }}
                            href="https://github.com/agustinurien"><GitHub fontSize="inherit" /></motion.a>
                        <motion.button
                            whileHover={{ scale: 1.08, delay: 0, color: "#fff" }}
                            initial={{ x: -75, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                color: "#000"
                            }}

                        ><Download />Download CV</motion.button>

                    </div>
                </section>

                <motion.section

                    initial={{
                        scale: 0.5

                    }}
                    transition={{ duration: 0.5 }}
                    animate={{
                        scale: 1
                    }}
                    className="contenedorImagen">
                    <motion.div
                        initial={{ y: 175 }}
                        className="contenidoLogo">

                    </motion.div>
                    <motion.svg
                        style={{ rotate }}
                        animate={{
                            scale: 1.5
                        }}
                        className="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000" d="M61.2,-60.8C75.9,-46.6,82,-23.3,80,-2.1C77.9,19.2,67.7,38.3,53,54.9C38.3,71.5,19.2,85.4,-1.9,87.3C-23,89.2,-45.9,79,-60.4,62.5C-75,45.9,-81,23,-78.9,2.1C-76.8,-18.7,-66.5,-37.5,-52,-51.7C-37.5,-66,-18.7,-75.8,2.3,-78C23.3,-80.3,46.6,-75.1,61.2,-60.8Z" transform="translate(100 100)" />
                    </motion.svg>


                </motion.section>

            </div >
            <Experiencia />
            <Projects />
            <AboutMe />
            <Languaje />
        </>
    )
}

export default Contenido
