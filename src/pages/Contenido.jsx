import { Download, GitHub, LinkedIn } from "@mui/icons-material"
import "../pages/contenido.css"
import { motion } from "framer-motion"
import Experiencia from "../common/experiencia/Experiencia"
import Projects from "../common/projects/Projects"
import Languaje from "../common/languaje/Languaje"
import AboutMe from "../common/aboutme/AboutMe"
import cvPdf from '../cv/cv-AgustinUrien.pdf';
import logo from '../assets/logo.svg';
import { Helmet } from "react-helmet-async"

const Contenido = () => {

    <Helmet>
        <link rel="preload" as="image" href="../assets/logo.svg" />
    </Helmet>

    const downloadPdf = async () => {
        try {
            const response = await fetch(cvPdf);
            console.log('Response:', response);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'cv-AgustinUrien.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    const whileHover = {
        scale: 1.2,
        transition: {
            duration: 0.5,
            delay: 0
        }
    };
    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://my-portfolio-ten-pi-60.vercel.app/" />
                <title>Agustin Urien, Front-end | Portfolio</title>
                <meta name="description" content="Take a look at an astonishing and skillful front-end developer portfolio with amazing animations." />
            </Helmet>
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

                        }}> I am a Front-End Developer specializing in crafting visually captivating websites that delight users. With a seamless blend of technical mastery and artistic innovation, I create user-friendly digital experiences that leave a lasting impression. </motion.p>
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
                            className="L"
                            title="Linkedin"
                            href="https://www.linkedin.com/in/agustin-urien-210b07240/">
                            <LinkedIn fontSize="inherit" />

                        </motion.a>
                        <motion.a
                            whileHover={whileHover}
                            initial={{ x: -75, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                color: "#000"
                            }}
                            title="Github"
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
                    <img
                        className="logoImg"
                        src={logo} alt="logoAgustinUrien" />
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
