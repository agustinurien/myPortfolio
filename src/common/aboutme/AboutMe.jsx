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
                                    hidden: { opacity: 0, y: 75 },
                                    visible: {
                                        opacity: 1, y: 0,
                                        color: "#fff"
                                    },
                                }
                                }
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="textoAm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nihil debitis, possimus eius ea modi qui, nemo iste, voluptas distinctio perferendis neque! Non, consequuntur molestiae impedit facilis sit aliquid <minus className="lorem"></minus>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque vel minima? Corrupti beatae, molestias alias quasi, impedit perspiciatis, sit maiores soluta pariatur libero repellat itaque earum repudiandae amet sunt!</motion.p>
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: {
                                        opacity: 1, y: 0,
                                        color: "#fff"
                                    },
                                }
                                }
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="textoAm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nihil debitis, possimus eius ea modi qui, nemo iste, voluptas distinctio perferendis neque! Non, consequuntur molestiae impedit facilis sit aliquid <minus className="lorem"></minus>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque vel minima? Corrupti beatae, molestias alias quasi, impedit perspiciatis, sit maiores soluta pariatur libero repellat itaque earum repudiandae amet sunt!</motion.p>
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: {
                                        opacity: 1, y: 0,
                                        color: "#fff"
                                    },
                                }
                                }
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="textoAm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nihil debitis, possimus eius ea modi qui, nemo iste, voluptas distinctio perferendis neque! Non, consequuntur molestiae impedit facilis sit aliquid <minus className="lorem"></minus>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque vel minima? Corrupti beatae, molestias alias quasi, impedit perspiciatis, sit maiores soluta pariatur libero repellat itaque earum repudiandae amet sunt!</motion.p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </section>
    )
}

export default AboutMe
