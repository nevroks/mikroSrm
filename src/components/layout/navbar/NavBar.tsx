import React, {useState} from 'react';
import classes from "./style.module.css";
import Button from "../../ui/button/Button.tsx";
import PopUp from "../../ui/popup/PopUp.tsx";
import AddFunnelForm from "../../forms/addfunnelform/addFunnelForm.tsx";
import FunnelList from "../../funnel/FunnelList.tsx";

const NavBar = () => {
    const [isPopUpShown,setIsPopUpShown]=useState(false)
    return (
        <nav className={classes.navbar}>
            {isPopUpShown&&<PopUp type={"popUp"} offerFunc={setIsPopUpShown}>
                <AddFunnelForm/>
            </PopUp>}
            <Button onClick={()=>setIsPopUpShown(true)}>Создать воронку</Button>
            <FunnelList/>
        </nav>
    );
};

export default NavBar;