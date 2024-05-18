import React, {useState} from 'react';
import classes from "./style.module.css";
import Button from "../../ui/button/Button.tsx";
import PopUp from "../../ui/popup/PopUp.tsx";
import AddFunnelForm from "../../forms/addfunnelform/addFunnelForm.tsx";
import FunnelList from "../../funnel/FunnelList.tsx";
import logo from "./../../../assets/logo.svg"
import Switch from "../../ui/switch/Switch.tsx";
import cn from 'classnames';

const NavBar = () => {
    const [isPopUpShown,setIsPopUpShown]=useState(false)
    return (
        <nav className={classes.navbar}>
            {isPopUpShown&&<PopUp type={"popUp"} offerFunc={setIsPopUpShown}>
                <AddFunnelForm/>
            </PopUp>}
            <div className={classes.navbar_header}>
                <img src={logo} alt=""/>
                <Switch/>
            </div>
            <div className={classes.navbar_modules}>
                <p className={cn("text-semi-light", `${classes.navbar_modules_text}`)}>Модули</p>
                <Button onClick={() => setIsPopUpShown(true)}>Создать воронку</Button>
                <FunnelList/>
            </div>

        </nav>
    );
};

export default NavBar;