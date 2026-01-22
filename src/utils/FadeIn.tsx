import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  });

  useEffect(() => {
    const current = ref.current;
    if (!current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Когда элемент входит во вьюпорт, устанавливаем isVisible в true
        if (entry.isIntersecting) {
          setVisible(true);
          // Опционально, отключаем наблюдение после первого обнаружения
          observer.unobserve(current);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // настройте значение, чтобы элемент начинал загружаться, когда он на 10% виден
      }
    );

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return (
    <animated.div style={props} ref={ref}>
      {children}
    </animated.div>
  );
};

export default FadeIn;
