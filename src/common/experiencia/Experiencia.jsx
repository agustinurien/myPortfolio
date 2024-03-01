import { motion, useAnimation, useInView } from "framer-motion"
import "../experiencia/experiencia.css"
import { useEffect, useRef } from "react"




const Experiencia = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const controls = useAnimation();

    const whileHoverProp = {
        scale: 1.01,
        transition: {
            duration: 0.3,
            delay: 0
        }
    };

    useEffect(() => {
        console.log(isInView)
        if (isInView) {
            controls.start("visible")
        }

    }, [isInView])


    return (
        <motion.section ref={ref}>

            <motion.h2
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }
                }
                ref={ref}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="exp">Experience.</motion.h2 >
            <div className="contenedorTotalE">

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }
                    }
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="centrar"
                >
                    <motion.div
                        whileHover={whileHoverProp}
                        ref={ref}
                        className="contenedorEX"
                        transition={{ duration: 0.5, delay: 0 }}>
                        <div className="cargo">
                            <h2>First Landing page</h2>
                            <span>FREELANCE</span>
                        </div>
                        <div className="contenedorTextoEx">
                            <p>As an independent professional, I spent a year collaborating with
                                exterior commerce businesses, focusing on technical solutions. This
                                included developing a customized landing page, handling
                                language localization challenges like transitioning to Chinese, and
                                integrating a seamless contact form. Throughout the project, I
                                provided ongoing technical support, ensuring the smooth operation
                                of their digital presence.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }
                    }
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="centrar"
                >
                    <motion.div
                        whileHover={whileHoverProp}
                        ref={ref}
                        className="contenedorEX"
                        transition={{ duration: 0.5, delay: 0 }}>
                        <div className="cargo">
                            <h2>Valores Humanos - Tests</h2>
                            <span>FREELANCE</span>
                        </div>
                        <div className="contenedorTextoEx">

                            <p>
                                I worked collaboratively within a team environment, where effective
                                communication was paramount. My role primarily involved
                                designing and implementing various psychological tests aimed at
                                evaluating candidates for recruitment purposes. Working within the
                                framework established by the company, I adhered to strict
                                guidelines and protocols to ensure the integrity and confidentiality
                                of the assessment process. My ability to communicate effectively
                                within the team facilitated seamless coordination and alignment of
                                objectives, ultimately contributing to the successful execution of our
                                recruitment initiatives.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }
                    }
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="centrar"
                >
                    <motion.div
                        whileHover={whileHoverProp}
                        ref={ref}
                        className="contenedorEX"
                        transition={{ duration: 0.5, delay: 0 }}>
                        <div className="cargo">
                            <h2>First Software</h2>
                            <span>FULL TIME</span>
                        </div>
                        <div className="contenedorTextoEx">

                            <p>In my freelance capacity, I developed a robust Toolset software for AlClick, an emerging player in the industry. Fueled by React, Python, and Framer Motion, the software not only met but exceeded expectations. Its seamless functionality and engaging user interface prompted AlClick to extend a full-time developer role to me. Now, as the sole developer in their ranks, I continue to contribute innovative solutions that elevate the company's digital presence and user experience. This transition from freelancer to a key member of the development team is a testament to the impactful synergy of skills and vision.</p>
                        </div>
                    </motion.div>
                </motion.div>



            </div>
        </motion.section>
    )
}

export default Experiencia
