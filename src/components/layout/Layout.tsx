import {Suspense} from 'react';
import Header from "./header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer.tsx";
import classes from "./style.module.css";
import NavBar from "./navbar/NavBar.tsx";

const Layout = () => {
    return (
        <div className={classes.layoutS}>
            <NavBar/>
            <div className={classes.page_wrapper}>
                <Header/>
                <div className={classes.page}>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Outlet/>
                    </Suspense>
                </div>

                <Footer/>
            </div>

        </div>
    );
};

export default Layout;