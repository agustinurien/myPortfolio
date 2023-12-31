import { GitHub } from '@mui/icons-material'
import '../projects/projects.css'
import { AiFillHtml5 } from 'react-icons/ai';
import '../projects/projects.css'
import { FaReact } from 'react-icons/fa';
import { DiCss3, DiJavascript1, DiPython } from 'react-icons/di';
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect } from 'react';
import { useRef } from 'react';
import { BiLogoFirebase } from 'react-icons/bi';
import { SiFramer } from "react-icons/si";
import { Link } from 'react-router-dom';


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

    return (
        <section className='fondo2'>
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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum dolores. </p>
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
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='proyectoIndividual'>
                    <div className='box'>
                        <motion.div
                            whileHover={whileHoverAnim}
                            initial={{ y: 50 }}
                            className='boxImage guille'>

                        </motion.div>
                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    Price-Calculator
                                </h2>
                                <a className='ahref' href="https://github.com/agustinurien/PriceCalculator"><GitHub /></a>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum dolores. </p>
                            <div className='iconos'>
                                <AiFillHtml5 className="icon" />
                                <DiCss3 className="icon" />
                                <DiJavascript1 className="icon" />
                                <FaReact className="icon" />
                                <BiLogoFirebase className="icon" />
                                <DiPython className="icon" />
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
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='proyectoIndividual'>
                    <div className='box'>
                        <motion.div
                            whileHover={whileHoverAnim}
                            initial={{ y: 50 }}
                            className='boxImage port'>
                            <Link to="https://my-portfolio-ten-pi-60.vercel.app/">
                                <div className="link">

                                </div>
                            </Link>

                        </motion.div>
                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    My-Portfolio
                                </h2>
                                <a className='ahref' href="https://github.com/agustinurien/myPortfolio"><GitHub /></a>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum dolores. </p>
                            <div className='iconos'>
                                <AiFillHtml5 className="icon" />
                                <DiCss3 className="icon" />
                                <DiJavascript1 className="icon" />
                                <FaReact className="icon" />
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

                        </motion.div>
                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    Valores Humanos
                                </h2>
                                <a href="https://github.com/agustinurien/myPortfolio"><GitHub /></a>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum dolores. </p>
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

                        </motion.div>
                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    Atsco-Trading
                                </h2>
                                <a className='ahref' href="https://github.com/agustinurien/paginaComercioExterior"><GitHub /></a>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum dolores. </p>
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
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='proyectoIndividual'>
                    <div className='box'>
                        <motion.div
                            whileHover={whileHoverAnim}
                            initial={{ y: 50 }}
                            className='boxImage'>

                        </motion.div>
                        <div className='contenedorInfo'>
                            <div className='tituloGit'>
                                <h2>
                                    E-commerce
                                </h2>
                                <GitHub />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum dolores. </p>
                            <div className='iconos'>
                                <AiFillHtml5 className="icon" />
                                <DiCss3 className="icon" />
                                <DiJavascript1 className="icon" />
                                <FaReact className="icon" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </section>
        </section>
    )
}

export default Projects
