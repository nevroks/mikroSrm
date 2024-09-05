import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children:React.ReactChild| React.ReactNode

}
const Button:FC<ButtonProps> = ({children,...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button;