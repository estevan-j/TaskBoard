import React from 'react';

interface StatusProps {
    children: React.ReactNode;
    isSelected: boolean;
    type: string;
    color: string;
    onClick: () => void;
}

const Status = ({ children, isSelected, type, color, onClick }: StatusProps) => {
    const borderClass = isSelected ? 'border-blue01' : 'border-lightSilver';
    const iconSrc = `/${type}.svg`;
    const doneIcon = isSelected ? (
        <span className='bg-blue01 rounded-xl'>
            <img src='/Done.svg' />
        </span>
    ) : null;

    return (
        <label onClick={onClick} className={`w-[200px] h-[45px] flex items-center gap-2 border-2 rounded-xl p-[4px] text-start ${borderClass}`}>
            <div className={`h-full w-[15%] bg-${color} rounded-xl flex items-center justify-center`}>
                <img src={iconSrc} />
            </div>
            <span className='flex-grow'>{children}</span>
            {doneIcon}
        </label>
    );
};

export default Status;