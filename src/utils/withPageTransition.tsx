import { ComponentType } from 'react';
import { animated, useSpring } from 'react-spring';

const withPageTransition = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithTransition = (props: P) => {
    const springProps = useSpring({
      from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
      to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    });

    return (
      <animated.div style={springProps}>
        <WrappedComponent {...props} />
      </animated.div>
    );
  };

  return ComponentWithTransition;
};

export default withPageTransition;
