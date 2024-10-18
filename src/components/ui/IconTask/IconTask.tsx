import React from 'react';

interface IconTaskProps {
    children: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
}

const IconTask: React.FC<IconTaskProps> = ({ children, isSelected, onClick }) => {
    return (
        <label
            className={`w-[45px] p-2 rounded-xl text-center cursor-pointer ${isSelected ? 'bg-yellow02' : 'bg-lightSilver'
                }`}
            onClick={() => onClick()}
        >
            <input type="radio" name="options" value={String(children)} className="hidden" />
            {children}
        </label>
    );
};

export default IconTask;