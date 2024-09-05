import {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import classes from "./style.module.css";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder: string,
}

const Input: FC<InputProps> = ({placeholder, ...props}) => {
    return (
        <input className={classes.input} {...props} placeholder={placeholder}/>
    );
};

export default Input;