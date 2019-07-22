import React from 'react';
import '../About/About.css';
import { useSpring, animated } from 'react-spring';


const About = () => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
        return (
         <div className="About">
             <div>
                <animated.div
                    className="card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                />
             </div>
             <div className="AboutContent">
                <h1>Passionate about Android and Web development</h1>
                <p>I'm a Fullstack Developer based in the Philippines. I am a dreamer and a fanatic of all digital things. 
                   I like to create something beautiful looking, using my imagination. I prefer aesthetics over 
                   functionalities, when it comes to web design.
                </p>
                <p>
                   I have a Bachelor Degree in Information Technology from The Fisher Valley Taguig City and obtained several awards in my field.
                </p>
                <p>
                   I am flexible, open-minded, observant and willing to work under pressure. I am open to new opportunities and willing to do everything to accomplish the goal.
                </p>
             </div>
         </div>
    )

};

export default About;