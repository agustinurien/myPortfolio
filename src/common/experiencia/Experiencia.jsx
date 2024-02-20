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
                className="exp">Experiencia.</motion.h2 >
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
                        <p>I undertook the creation of a bespoke landing page for a client seeking a succinct representation of their company's essence. Melding HTML, CSS, and JavaScript, I crafted an intuitive and visually captivating platform that distilled the client's core identity.</p>
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
                        <p>
                            In my debut as a web developer, I created a dynamic website for "Valores Humanos," integrating HTML, CSS, and JavaScript. This platform hosts 12 tailored exercises and tests, streamlining the company's recruitment process. The site reflects my commitment to seamless user experiences and bespoke solutions, laying the groundwork for future collaborative successes.</p>
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
                        <p>In my freelance capacity, I developed a robust Toolset software for AlClick, an emerging player in the industry. Fueled by React, Python, and Framer Motion, the software not only met but exceeded expectations. Its seamless functionality and engaging user interface prompted AlClick to extend a full-time developer role to me. Now, as the sole developer in their ranks, I continue to contribute innovative solutions that elevate the company's digital presence and user experience. This transition from freelancer to a key member of the development team is a testament to the impactful synergy of skills and vision.</p>
                    </motion.div>
                </motion.div>



            </div>
        </motion.section>
    )
}

export default Experiencia
