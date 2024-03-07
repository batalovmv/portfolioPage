import { useEffect } from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { animated, config, useSpring } from "react-spring";
const activeLink = 'nav-list__link nav-list__link--active';
const normalLink = 'nav-list__link';
const AnimatedLink = ({ name, to }: any) => {
    const [props, set] = useSpring(() => ({
        width: '0%',
        opacity: 0,
        config: config.gentle,
    }));

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    useEffect(() => {
        set({ width: match ? '100%' : '0%', opacity: match ? 1 : 0 });
    }, [match, set]);

    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onMouseEnter={() => set({ width: '100%', opacity: 1 })}
            onMouseLeave={() => {
                if (!match) {
                    set({ width: '0%', opacity: 0 });
                }
            }}
            style={{ position: 'relative' }}
        >
            {name}
            <animated.div
                className="nav-list__link--active"
                style={{
                    ...props,
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    background: 'var(--accent)',
                    height: '2px',
                }}
            />
        </NavLink>
    );
};

export default AnimatedLink;