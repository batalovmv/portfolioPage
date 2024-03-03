
import particlesConfig from './config/particles-config';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";



const Background = () => {
      const isDarkMode = document.body.classList.contains('dark');
    const [darkMode, setDarkMode] = useState(isDarkMode);
    const [bgColor, setBgColor] = useState(isDarkMode ? '#000000' : '#ffffff');
    const [textColor, setTextColor] = useState(isDarkMode ? '#ffffff' : '#000000');


    useEffect(() => {
        const updateMode = () => {
            const isDark = document.body.classList.contains('dark');
            setDarkMode(isDark);
            setBgColor(isDark ? '#000000' : '#ffffff');
            setTextColor(isDark ? '#ffffff' : '#000000');
        };

        // Инициализация частиц
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            console.log('darkMode', darkMode);
            updateMode();
        });

        // Отслеживаем изменение классов у body
        const observer = new MutationObserver(updateMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        // Очищаем observer при размонтировании компонента
        return () => observer.disconnect();
    }, []);


    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(document.body.classList.contains('dark'));
        if (darkMode === true) {
            setBgColor('#000000')
            setTextColor('#ffffff')
        } else {
            setBgColor('#ffffff')
            setTextColor('#000000')
        }

    };

   
    const particlesConfig: ISourceOptions = useMemo(() => ({
        background: {
            color: {
                value: bgColor,
            },
        },
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: textColor,
            },
            links: {
                color: textColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true, 
       
    }), [bgColor, textColor]);
 
        return (
            <Particles
                className="tsparticles"
                particlesLoaded={particlesLoaded}
                options={particlesConfig}
            />
        );
  
 
  
}

export default Background