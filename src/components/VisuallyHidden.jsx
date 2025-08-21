import React from 'react';

export default function VisuallyHidden({ children, as: Component = 'span', ...props }) {
    const style = {
        border: 0,
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
    };

    return (
        <Component style={style} {...props}>
            {children}
        </Component>
    );
}