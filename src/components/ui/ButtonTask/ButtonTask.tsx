import React from 'react';

interface ButtonTaskProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: string;
}

const ButtonTask: React.FC<ButtonTaskProps> = ({ children, backgroundColor, ...props }) => {
    return (
        <button
            className="w-[25%] text-white rounded-[20px] p-2 flex items-center gap-2 justify-center"
            style={{ backgroundColor }}
            {...props}
        >
            {children}
        </button>
    );
}

export default ButtonTask;