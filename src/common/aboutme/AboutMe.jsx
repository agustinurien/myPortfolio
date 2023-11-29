import "../aboutme/aboutme.css"
import foto from "../../assets/yo2.png"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const AboutMe = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const controls = useAnimation();

    useEffect(() => {
        console.log(isInView)
        if (isInView) {
            controls.start("visible")
        }

    }, [isInView])

    return (
        <section className="fondo3">
            <h1 className="abMe">About me.</h1>
            <div className="ccAM">

                <section className="contenedorAM">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, height: 0 },
                            visible: {
                                opacity: 1, height: "fit-content"
                            },
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.9, delay: 0 }}
                        ref={ref}
                        className="miHistoria">
                        <motion.img
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1

                                },
                            }
                            }
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="imagenFotoMia" src={foto} alt="" />

                        <div className="parrafos">
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1, y: 0,
                                        color: "#fff"
                                    },
                                }
                                }
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="textoAm">
                                My journey began with a passion for studying animation, fueled by a significant need for financial support. To address this challenge, I made the strategic decision to delve into web development. Starting with the fundamentals of HTML and CSS, I gradually immersed myself in the world of coding.</motion.p>
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1, y: 0,
                                        color: "#fff"
                                    },
                                }
                                }
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                className="textoAm">As I delved into JavaScript, a newfound interest blossomed. Eager to enhance both aesthetics and functionality, I further expanded my skill set by studying React, SQL, and Framer Motion. This comprehensive approach allowed me to not only create visually appealing web pages but also to optimize their performance and user experience. Through this transformative journey, I've not only gained proficiency in web development but also discovered a profound satisfaction in shaping digital experiences.</motion.p>
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1, y: 0,
                                        color: "#fff"
                                    },
                                }
                                }
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className="textoAm">Looking ahead, I envision leveraging this coding expertise as a stepping stone to finding the courage and financial means to pursue my original dream of studying fine arts. While coding has captured my professional focus, I plan to embrace the world of visual arts as a cherished hobby, enriching my life with a harmonious blend of technology and creativity. This journey has not only opened doors to a promising career but has also illuminated a path towards a fulfilling balance between the realms of coding and artistic expression.</motion.p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </section>
    )
}

export default AboutMe
