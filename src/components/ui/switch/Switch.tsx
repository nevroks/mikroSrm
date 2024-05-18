import React from 'react';
import classes from "./style.module.css";
import f from "./../../../assets/icons/switchIco.png"
const Switch = () => {
    return (
        <label className={classes.switch}>
            <input type="checkbox"/>
            <span className={classes.slider}></span>
        </label>
    );
};

export default Switch;