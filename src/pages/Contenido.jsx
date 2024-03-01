import { Download, GitHub, LinkedIn } from "@mui/icons-material"
import "../pages/contenido.css"
import { motion, useTime, useTransform } from "framer-motion"
import Experiencia from "../common/experiencia/Experiencia"
import Projects from "../common/projects/Projects"
import Languaje from "../common/languaje/Languaje"
import AboutMe from "../common/aboutme/AboutMe"

import cvPdf from '../cv/cv-AgustinUrien.pdf';
import logo from '../assets/logo.svg';

const Contenido = () => {

    const downloadPdf = async () => {
        try {
            // Fetch the PDF file
            const response = await fetch(cvPdf);
            console.log('Response:', response);
            const blob = await response.blob();

            // Create a URL for the blob object
            const url = URL.createObjectURL(blob);

            // Create a link element
            const link = document.createElement('a');

            // Set the href attribute of the link to the URL of the blob
            link.href = url;

            // Set the download attribute of the link to the desired file name
            link.download = 'cv-AgustinUrien.pdf';

            // Append the link to the document body
            document.body.appendChild(link);

            // Trigger a click event on the link
            link.click();

            // Remove the link from the document body
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

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
                        className="brief"
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        animate={{
                            opacity: 1,

                        }}> I'm a Front-End Developer specializing in crafting visually captivating websites that captivate and delight users. With a seamless blend of technical mastery and artistic innovation, I create user-friendly digital experiences that leave a lasting impression. </motion.p>
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
                            onClick={() => downloadPdf()}
                            whileHover={{ scale: 1.08, delay: 0, color: "#fff" }}
                            initial={{ x: -75, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                color: "#000"
                            }}


                        ><Download

                            />Download CV</motion.button>

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
                    <img
                        className="logoImg"
                        src={logo} alt="" />
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
