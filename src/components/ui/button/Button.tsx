import React, {FC} from 'react';
interface ButtonProps {
    children:React.ReactChild| React.ReactNode
    onClick?: any
    disabled?:boolean

}
const Button:FC<ButtonProps> = ({children,...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button;