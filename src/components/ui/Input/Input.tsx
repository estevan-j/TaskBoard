interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = ({ ...props }: InputProps) => {
    return (
        <input className="border-light-silver  border-2 rounded-xl pr-4 pl-4 pt-2 pb-2 focus:border-blue01-500" {...props} />
    )
}


export default Input
