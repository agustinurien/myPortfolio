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
                            <h2>Front-end Developer</h2>
                            <span>FREELANCE</span>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores delectus consequatur sit quam explicabo maxime ab,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores delectus consequatur sit quam explicabo maxime ab,Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
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
                            <h2>Front-end Developer</h2>
                            <span>FREELANCE</span>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores delectus consequatur sit quam explicabo maxime ab,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores delectus consequatur sit quam explicabo maxime ab,Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
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
                            <h2>Front-end Developer</h2>
                            <span>FREELANCE</span>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores delectus consequatur sit quam explicabo maxime ab,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores delectus consequatur sit quam explicabo maxime ab,Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
                    </motion.div>
                </motion.div>



            </div>
        </motion.section>
    )
}

export default Experiencia
