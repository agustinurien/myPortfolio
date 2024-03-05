import { Email, Instagram, LocalPhone, LocationOn, Twitter } from "@mui/icons-material"
import "../footer/footer.css"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Lottie from "react-lottie"


import stars from "../../assets/stars.json"
import stars2 from "../../assets/stars2.json"

const stars2Data = { loop: true, autoplay: true, animationData: stars2 }
const starsData = { loop: true, autoplay: true, animationData: stars }
const Footer = () => {

    const notifySuccess = () => toast.success("Message sent!");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jyggrg8', 'template_f1rbdvb', form.current, {
            publicKey: '9kc7Ztm86wijQM7vx',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setValorEmail("");
                    setValorMessage("");
                    setValorName("");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const [valorName, setValorName] = useState("")
    const [valorEmail, setValorEmail] = useState("")
    const [valorMessage, setValorMessage] = useState("")

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const controls = useAnimation();

    const triggerAnimation = () => {
        controls.start("animation1")
        controls.start("change")
    }
    const trigger2Animation = () => {
        controls.start("animation2")
        controls.start("change2")
    }

    useEffect(() => {
        if (isInView) {

            controls.start("visible")
        }

    }, [isInView])

    return (
        <section>
            <section
                id="cont"
                ref={ref}
                className="footer">

                <div className="contenedorFoto">

                    <motion.div className="contenedorFotoAnim"
                        variants={{
                            hidden: { scaleX: 1, transformOrigin: "right" },
                            visible: { scaleX: 0, transformOrigin: "left" },
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >

                    </motion.div>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <motion.section

                        variants={{
                            hidden: { opacity: 0, height: 0 },
                            visible: { opacity: 1, height: 515 }

                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="formContact" action="/procesar-formulario" method="post">


                        <div

                            className="camposC">
                            <motion.h3
                                variants={{
                                    hidden: { opacity: 0, x: 100 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >Ask me anything.</motion.h3>
                            <motion.input
                                variants={{
                                    hidden: { opacity: 0, y: 100 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                onChange={(e) => setValorName(e.target.value)}
                                value={valorName}
                                name="user_name"
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                type="text" placeholder="Name..." />

                            <motion.input
                                variants={{
                                    hidden: { opacity: 0, y: 100 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                onChange={(e) => setValorEmail(e.target.value)}
                                value={valorEmail}
                                name="user_email"
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                type="text" placeholder="Email..." />


                            <motion.textarea
                                variants={{
                                    hidden: { opacity: 0, y: 100 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                onChange={(e) => setValorMessage(e.target.value)}
                                value={valorMessage}
                                name="message"
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="textArea" placeholder="Message..." />
                        </div>
                        <motion.div
                            whileHover={() => trigger2Animation()}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="contenedorBoton">

                            <motion.div
                                className="hover"
                                variants={{
                                    hiddenHover: { y: -45, scaleY: 0, },
                                    animation1: { scaleY: 1, transformOrigin: "bottom" },
                                    animation2: { scaleY: 0, transformOrigin: "top" }
                                }}
                                initial="hiddenHover"
                                animate={controls}
                                transition={{ type: "tween", duration: 0.25 }}
                            ></motion.div>

                            <motion.button
                                variants={{
                                    hidden: { color: "black", y: -45 },
                                    change: { color: "#fff" },
                                    change2: { color: "#000" }
                                }}
                                type="submit"
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0, delay: 0 }}
                                whileHover={() => triggerAnimation()}

                                onClick={notifySuccess}
                                disabled={valorEmail === "" || valorMessage === "" || valorName === ""}
                                className="botonEnviar2">Send</motion.button>


                        </motion.div>
                    </motion.section>
                </form>

            </section >


            <motion.section
                ref={ref}
                className="contacto">

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="contenedorL">
                    <h4>LOCATION.</h4>
                    <span className="datosSpan"><LocationOn fontSize="inherit" /> Buenos Aires, Argentina</span>
                </motion.div>

                <div className="stars">
                    <Lottie options={starsData} width={300} height={300} />
                </div>
                <motion.div
                    initial={{ x: 200 }}
                    className="stars">
                    <Lottie options={stars2Data} width={300} height={300} />
                </motion.div>

                <motion.div
                    initial={{ x: 500 }}
                    className="stars">
                    <Lottie options={stars2Data} width={280} height={280} />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="contenedorC">
                    <h4>CONTACT.</h4>
                    <span className="datosSpan"><Email fontSize="inherit" /> agus.urien2@gmail.com</span>
                    <span className="datosSpan"><LocalPhone fontSize="inherit" /> 11 4149-1827</span>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="contenedorC">
                    <h4>SOCIAL.</h4>
                    <div className="sociales">
                        <a className="ahref" href="https://www.instagram.com/agustin_urien/"><Instagram /></a>
                        <Twitter />
                    </div>
                </motion.div>

            </motion.section>

            <ToastContainer

                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />

        </section>
    )
}

export default Footer
