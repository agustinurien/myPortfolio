import "../header/header.css"
import { motion, useScroll } from "framer-motion"
import { Link } from "react-scroll";
import Lottie from "react-lottie"


import stars from "../../assets/stars.json"
import stars2 from "../../assets/stars2.json"
const stars2Data = { loop: true, autoplay: true, animationData: stars2 }
const starsData = { loop: true, autoplay: true, animationData: stars }

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
                <motion.div
                    initial={{ x: 0 }}
                    className="stars">
                    <Lottie options={starsData} width={100} height={100} />
                </motion.div>
                <motion.div
                    initial={{ x: -200 }}
                    className="stars">
                    <Lottie options={stars2Data} width={100} height={100} />
                </motion.div>
                <motion.div
                    initial={{ x: -500 }}
                    className="stars">
                    <Lottie options={stars2Data} width={100} height={100} />
                </motion.div>
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

                        >
                            <a href="/" style={{ textDecoration: "none", color: "white" }}>
                                Home
                            </a>
                        </motion.li>

                        <motion.li
                            style={{ zIndex: 2 }}
                            className="liS"
                            variants={{
                                hidden: { opacity: 0, x: -75 },
                            }
                            }
                            initial="hidden"
                            animate={{
                                opacity: 1, x: 0,
                                color: "#fff"
                            }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                        ><Link
                            activeClass="active"
                            to="proj"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                                <button>Projects</button>
                            </Link></motion.li>

                        <motion.li
                            style={{ zIndex: 2 }}
                            className="liS"
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
                        ><Link
                            activeClass="active"
                            to="abme"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                                <button>About me</button>
                            </Link></motion.li>

                        <motion.li
                            style={{ zIndex: 2 }}
                            className="liS"
                            variants={{
                                hidden: { opacity: 0, x: -75 },
                            }
                            }
                            initial="hidden"
                            animate={{
                                opacity: 1, x: 0,
                                color: "#fff"
                            }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                        ><Link
                            activeClass="active"
                            to="skill"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                                <button>Skills</button>
                            </Link></motion.li>

                        <motion.li
                            style={{ zIndex: 2 }}
                            className="liS"
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
                        ><Link
                            activeClass="active"
                            to="cont"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                                <button>Contact</button>
                            </Link></motion.li>

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
