interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> { }

const LabelTask = ({ children, ...props }: Props) => {
    return (
        <label className="text-[14px] text-lightGray capitalize cursor-pointer"
            {...props}
        >
            {children}
        </label>
    )
}

export default LabelTask
