
import classes from "./style.module.css";
import person from "./../../../assets/profilePicture.png"
const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.header_nav}>
                <div className={classes.header_nav_box}></div>
                <div className={classes.header_nav_profile}>
                    <div className={classes.header_nav_profile_text_container}>
                        <p className={"text-medium"}>Анна Ерошина</p>
                        <p className={"text-light"}>anEra.maneger@yandex.ru</p>
                    </div>
                    <div className={classes.header_nav_profile_img_container}>
                        <img src={person} alt=""/>
                    </div>

                </div>
            </nav>

        </header>
    );
};

export default Header;