import { Fragment } from "react";

import HeaderCartButton from './HeaderCartButton';
import image1 from '../../assets/growups1.png';
import classes from "./Header.module.css";

const Header = (props) => {
    return (
<Fragment>
        <header className={classes.header}>
            <h2>GTU crops</h2>
            <div className={classes.headerRight} >
            <HeaderCartButton onClick={props.onShowCart} />
            </div>
         
        </header>
        <div className={classes['main-image']}>
            <img src={image1} alt="crops" />
        </div>
    </Fragment>
    ) 
};

export default Header;