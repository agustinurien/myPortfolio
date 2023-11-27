import "../header/header.css"
import { motion, useScroll } from "framer-motion"
const Header = () => {
    const { scrollYProgress } = useScroll()
    return (
        <section
            className="headerContent"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 2
            }}
        >
            <div
                className="contenidoHeader">
                <nav>
                    <ul>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, x: -75 },
                            }
                            }
                            initial="hidden"
                            animate={{
                                opacity: 1, x: 0,
                                color: "#fff"
                            }}
                            transition={{ duration: 0.5, delay: 0.5 }}

                        >Home</motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, x: -75 },
                            }
                            }
                            initial="hidden"
                            animate={{
                                opacity: 1, x: 0,
                                color: "#fff"
                            }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >About me</motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, x: -75 },
                            }
                            }
                            initial="hidden"
                            animate={{
                                opacity: 1, x: 0,
                                color: "#fff"
                            }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >Projects</motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, x: -75 },
                            }
                            }
                            initial="hidden"
                            animate={{
                                opacity: 1, x: 0,
                                color: "#fff"
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >Skills</motion.li>
                    </ul>
                </nav>
            </div>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "left"
                }}
                className="progressBar">

            </motion.div>
        </section>
    )
}

export default Header
