import { GitHub } from '@mui/icons-material'
import '../projects/projects.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { DiCss3, DiJavascript1, DiPython } from 'react-icons/di';
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { BiLogoFirebase } from 'react-icons/bi';
import { SiFramer } from "react-icons/si";
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Projects = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const controls = useAnimation();

    const whileHoverAnim = {
        rotate: 3.5,
        transition: {
            duration: 0.3,
            delay: 0
        },
        y: 20,

    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }

    }, [isInView])



    const triggerAnimation = () => {
        controls.start("close")


    }
    const openWindow = () => {
        controls.start("openWindow")

    }

    const [open, setOpen] = useState("")

    return (
        <section
            id='proj'
            className='fondo2'>
            <motion.h2
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }
                }
                ref={ref}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="proy">Projects.</motion.h2 >

            <section className='contenedorProyectos'>

                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='proyectoIndividual'>
                    <div className='box'>
                        <motion.div
                            onClick={() => openWindow()}
                            whileHover={whileHoverAnim}
                            initial={{ y: 50 }}
                            className='boxImage spoticopy'>

                        </motion.div>
                        <motion.div

                            className='window'
                            variants={{
                                close: { opacity: 0, y: 0 },
                                openWindow: { opacity: 1, y: -144 }
                            }}
                            initial="close"
                            animate={controls}
                            transition={{ duration: 0.25, delay: 0 }}
                            onMouseOut={() => triggerAnimation()}
                        >
                            <h3 style={{ margin: 0, lineHeight: 2, padding: 35 }}>The website is not done yet. We are still in the process of development and refinement. Stay tuned for updates!</h3>
                        </motion.div>

                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    Publicify
                                </h2>
                                <a className='ahref' href="https://github.com/agustinurien/Publicify"><GitHub /></a>
                            </div>

                            <div className='desplegar'>
                                <p>A platform inspired by Spotify, redefined to foster a collaborative community spirit. </p>
                                <button

                                    onClick={() => setOpen("ps")}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: 0,
                                        fontSize: 20
                                    }}><IoIosArrowDown />
                                </button>
                            </div>

                            {
                                open === "ps" &&
                                <motion.div
                                    initial={{ y: -58, x: -10, width: 365, height: 0, opacity: 0 }}
                                    animate={{
                                        height: 150,
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.3, delay: 0 }}

                                    className='projectTexts'>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.25, delay: 0.2 }}
                                    >
                                        Users are empowered to create, edit, and contribute to playlists, transforming music curation into a communal endeavor. Developed with the aim of testing the dynamics of cooperation and respect within a digital community. <br /> <br /> Publicify invites individuals to participate in friendly competition, showcasing their prowess in crafting the ultimate playlists. As a work in progress, Publicify promises an immersive experience. <br /> <br /> Join us as we embark on this exciting journey to uncover the power of collective creativity.
                                    </motion.p>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            height: 30,
                                            alignItems: "center"

                                        }}
                                    >
                                        <motion.button
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}

                                            transition={{ duration: 0.2, delay: 0.1 }}
                                            onClick={() => setOpen("")}

                                            style={{
                                                backgroundColor: "transparent",
                                                border: 0,
                                                fontSize: 15,
                                                marginTop: 12,
                                                marginBottom: 12,
                                                color: "gray"

                                            }}><IoIosArrowUp />
                                        </motion.button>
                                    </div>





                                </motion.div>
                            }
                            <div className='iconos'>
                                <AiFillHtml5 className="icon" />
                                <DiCss3 className="icon" />
                                <DiJavascript1 className="icon" />
                                <FaReact className="icon" />
                                <BiLogoFirebase className="icon" />
                                <SiFramer className="icon2" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='proyectoIndividual'>
                    <div className='box'>


                        <motion.div
                            whileHover={whileHoverAnim}
                            initial={{ y: 50 }}
                            className='boxImage ps4'>
                            <Link to="https://proyecto-react-xi.vercel.app/">
                                <div className="link">

                                </div>
                            </Link>

                        </motion.div>

                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    E-commerce
                                </h2>
                                <a className='ahref' href="https://github.com/agustinurien/proyecto-react"><GitHub /></a>
                            </div>
                            <div className='desplegar'>
                                <p> Playstation shop. The website allows users to browse through and buy PlayStation products </p>
                                <button

                                    onClick={() => setOpen("ec")}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: 0,
                                        fontSize: 20
                                    }}><IoIosArrowDown />
                                </button>
                            </div>

                            {
                                open === "ec" &&
                                <motion.div
                                    initial={{ y: -58, x: -10, width: 365, height: 0, opacity: 0 }}
                                    animate={{
                                        height: 150,
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.3, delay: 0 }}

                                    className='projectTexts'>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.25, delay: 0.2 }}
                                    >
                                        Inventory management is automated, dynamically adjusting stock levels upon each purchase. The website is designed responsively for optimal performance. It provides users with a seamless interface for browsing, selecting, and purchasing products online, ensuring efficient inventory tracking and a smooth user experience.
                                    </motion.p>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            height: 30,
                                            alignItems: "center"

                                        }}
                                    >
                                        <motion.button
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}

                                            transition={{ duration: 0.2, delay: 0.1 }}
                                            onClick={() => setOpen("")}

                                            style={{
                                                backgroundColor: "transparent",
                                                border: 0,
                                                fontSize: 15,
                                                marginTop: 12,
                                                marginBottom: 12,
                                                color: "gray"

                                            }}><IoIosArrowUp />
                                        </motion.button>
                                    </div>





                                </motion.div>
                            }

                            <motion.div

                                className='iconos'>
                                <AiFillHtml5 className="icon" />
                                <DiCss3 className="icon" />
                                <DiJavascript1 className="icon" />
                                <FaReact className="icon" />
                                <BiLogoFirebase className="icon" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='proyectoIndividual'>
                    <div className='box'>
                        <motion.div

                            whileHover={whileHoverAnim}
                            initial={{ y: 50 }}
                            className='boxImage guille'
                        >
                            <Link to="https://price-calculator2.vercel.app/">
                                <div className="link">

                                </div>
                            </Link>
                        </motion.div>


                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    Price-Calculator
                                </h2>
                                <a className='ahref' href="https://github.com/agustinurien/PriceCalculator"><GitHub /></a>
                            </div>
                            <div className='desplegar'>
                                <p>I spearheaded the development of a sophisticated software toolset tailored for a specific team. </p>
                                <button

                                    onClick={() => setOpen("pc")}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: 0,
                                        fontSize: 20
                                    }}><IoIosArrowDown />
                                </button>
                            </div>

                            {
                                open === "pc" &&
                                <motion.div
                                    initial={{ y: -58, x: -10, width: 365, height: 0, opacity: 0 }}
                                    animate={{
                                        height: 150,
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.3, delay: 0 }}

                                    className='projectTexts'>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.25, delay: 0.2 }}
                                    >
                                        This tool, integrated with Python and a
                                        database system, automates pricing strategies by mapping
                                        product data from Excel files and calculating selling prices based on
                                        desired profit margins for different markets.It features secure login capabilities for authorized personnel to
                                        adjust market commissions and manage user permissions. <br /> <br />Upon
                                        pricing completion, users can download updated product data in
                                        Excel format, facilitating streamlined operations and enhancing market competitiveness for AlClick.

                                    </motion.p>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            height: 30,
                                            alignItems: "center"

                                        }}
                                    >
                                        <motion.button
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}

                                            transition={{ duration: 0.2, delay: 0.1 }}
                                            onClick={() => setOpen("")}

                                            style={{
                                                backgroundColor: "transparent",
                                                border: 0,
                                                fontSize: 15,
                                                marginTop: 12,
                                                marginBottom: 12,
                                                color: "gray"

                                            }}><IoIosArrowUp />
                                        </motion.button>
                                    </div>





                                </motion.div>
                            }

                            <div className='iconos'>
                                <AiFillHtml5 className="icon" />
                                <DiCss3 className="icon" />
                                <DiJavascript1 className="icon" />
                                <FaReact className="icon" />
                                <BiLogoFirebase className="icon" />
                                <DiPython className="icon" />
                                <SiFramer className="icon2" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='proyectoIndividual'>
                    <div className='box'>
                        <motion.div
                            whileHover={whileHoverAnim}
                            initial={{ y: 50 }}
                            className='boxImage valores'>

                            <Link to="https://valores-humanos.vercel.app/">
                                <div className="link">

                                </div>
                            </Link>

                        </motion.div>
                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    Valores Humanos
                                </h2>
                                <a className='ahref' href="https://github.com/agustinurien/valoresHumanos"><GitHub /></a>
                            </div>
                            <div className='desplegar'>
                                <p>Freelance project, a platform offering a variety of 12 different psychological tests. </p>
                                <button

                                    onClick={() => setOpen("vh")}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: 0,
                                        fontSize: 20
                                    }}><IoIosArrowDown />
                                </button>
                            </div>

                            {
                                open === "vh" &&
                                <motion.div
                                    initial={{ y: -58, x: -10, width: 365, height: 0, opacity: 0 }}
                                    animate={{
                                        height: 135,
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.3, delay: 0 }}

                                    className='projectTexts'>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.25, delay: 0.2 }}
                                    >
                                        Each psychological test is designed cohesively with the overall website aesthetic, ensuring a consistent and pleasant user experience. The tests include various interactive elements such as images and multiple-choice questions, seamlessly integrated into the overall design.
                                    </motion.p>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            height: 30,
                                            alignItems: "center"

                                        }}
                                    >
                                        <motion.button
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}

                                            transition={{ duration: 0.2, delay: 0.1 }}
                                            onClick={() => setOpen("")}

                                            style={{
                                                backgroundColor: "transparent",
                                                border: 0,
                                                fontSize: 15,
                                                marginTop: 12,
                                                marginBottom: 12,
                                                color: "gray"

                                            }}><IoIosArrowUp />
                                        </motion.button>
                                    </div>





                                </motion.div>
                            }
                            <div className='iconos'>
                                <AiFillHtml5 className="icon" />
                                <DiCss3 className="icon" />
                                <DiJavascript1 className="icon" />

                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='proyectoIndividual'>
                    <div className='box'>
                        <motion.div
                            whileHover={whileHoverAnim}
                            initial={{ y: 50 }}
                            className='boxImage rorro'>
                            <Link to="https://astcotrading.com/">
                                <div className="link">

                                </div>
                            </Link>

                        </motion.div>
                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    Atsco-Trading
                                </h2>
                                <a className='ahref' href="https://github.com/agustinurien/paginaComercioExterior"><GitHub /></a>
                            </div>
                            <div className='desplegar'>
                                <p>Landing page that embodies sophistication and efficiency, incorporating key elements </p>
                                <button

                                    onClick={() => setOpen("at")}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: 0,
                                        fontSize: 20
                                    }}><IoIosArrowDown />
                                </button>
                            </div>

                            {
                                open === "at" &&
                                <motion.div
                                    initial={{ y: -58, x: -10, width: 365, height: 0, opacity: 0 }}
                                    animate={{
                                        height: 150,
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.3, delay: 0 }}

                                    className='projectTexts'>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.25, delay: 0.2 }}
                                    >
                                        Integrates a contact information section alongside dynamic language localization, enabling smooth transition between English and Chinese. This enhances accessibility and fosters meaningful engagement with our exterior commerce businesses' diverse clientele, ensuring seamless communication and user experience.
                                    </motion.p>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            height: 30,
                                            alignItems: "center"

                                        }}
                                    >
                                        <motion.button
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}

                                            transition={{ duration: 0.2, delay: 0.1 }}
                                            onClick={() => setOpen("")}

                                            style={{
                                                backgroundColor: "transparent",
                                                border: 0,
                                                fontSize: 15,
                                                marginTop: 12,
                                                marginBottom: 12,
                                                color: "gray"

                                            }}><IoIosArrowUp />
                                        </motion.button>
                                    </div>





                                </motion.div>
                            }
                            <div className='iconos'>
                                <AiFillHtml5 className="icon" />
                                <DiCss3 className="icon" />
                                <DiJavascript1 className="icon" />

                            </div>
                        </div>
                    </div>
                </motion.div>



            </section>
        </section >
    )
}

export default Projects
