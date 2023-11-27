import { FaReact } from "react-icons/fa"
import "../languaje/language.css"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiIllustrator, DiJavascript1, DiPython, DiWordpress } from "react-icons/di"
import { BsFillDatabaseFill, BsGit } from "react-icons/bs"
import { BiLogoFirebase } from "react-icons/bi"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { SiFramer } from "react-icons/si";


const Languaje = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const controls = useAnimation();

    const hoverLanguage = {
        scale: 1.05,
        transition: {
            duration: 0.5,
            delay: 0
        }
    }


    const start = (icon) => {
        controls.start(icon)
    }
    const back = () => {
        controls.start("default")
    }

    useEffect(() => {
        if (isInView) {
            controls.start("visible")

        }
    }, [isInView])

    return (
        <section className="fondo4">
            <motion.h2
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }
                }
                initial="hidden"
                animate={controls}
                ref={ref}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="skills">Skills.</motion.h2 >

            <div className="contenedorLanguage">

                <section className="language">

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL html"
                            onMouseOver={() => start("html")}
                            onMouseOut={() => back()}>

                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    html: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}>
                                <AiFillHtml5 className="iconL" />
                            </motion.div>
                            <span>HTML</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >


                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL css"
                            onMouseOver={() => start("css")}
                            onMouseOut={() => back()}>
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    css: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}>
                                <DiCss3 className="iconL" />
                            </motion.div>
                            <span>CSS</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >


                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL js"
                            onMouseOver={() => start("js")}
                            onMouseOut={() => back()}>
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    js: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}>
                                <DiJavascript1 className="iconL" />
                            </motion.div>
                            <span>JavaScript</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >


                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL react"
                            onMouseOver={() => start("react")}
                            onMouseOut={() => back()}
                        >
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    react: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}
                            >
                                <FaReact className="iconL" />
                            </motion.div>
                            <span>React</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >


                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL py"
                            onMouseOver={() => start("python")}
                            onMouseOut={() => back()}
                        >
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    python: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}
                            >
                                <DiPython className="iconL" />
                            </motion.div>
                            <span>Python</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >


                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL git"
                            onMouseOver={() => start("git")}
                            onMouseOut={() => back()}
                        >
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    git: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}
                            >
                                <BsGit className="iconL git" />
                            </motion.div>
                            <span>Git</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >


                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL sql"
                            onMouseOver={() => start("sql")}
                            onMouseOut={() => back()}
                        >
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    sql: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}
                            >
                                <BsFillDatabaseFill className="iconL sql" />
                            </motion.div>
                            <span>SQL</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >


                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL wp"
                            onMouseOver={() => start("wp")}
                            onMouseOut={() => back()}
                        >
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    wp: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}
                            >
                                <DiWordpress className="iconL" />
                            </motion.div>
                            <span>WordPress</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >


                        <motion.div
                            whileHover={hoverLanguage}
                            className="boxL fb"
                            onMouseOver={() => start("fb")}
                            onMouseOut={() => back()}
                        >
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    fb: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}
                            >
                                <BiLogoFirebase className="iconL" />
                            </motion.div>
                            <span>FireBase</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }
                        }
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >


                        <motion.div

                            whileHover={hoverLanguage}
                            className="boxL ill"
                            onMouseOver={() => start("ill")}
                            onMouseOut={() => back()}
                        >
                            <motion.div
                                variants={{
                                    default: { scale: 1 },
                                    ill: { scale: 1.3 }
                                }
                                }
                                animate={controls}
                                transition={{ duration: 0.3, delay: 0 }}
                            >
                                <SiFramer className="iconL frame" />
                            </motion.div>
                            <span>Framer-Motion</span>
                        </motion.div>
                    </motion.div>

                </section >
            </div>

        </section>
    )
}

export default Languaje
