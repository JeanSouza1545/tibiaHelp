import logo from '@/Media/logo.png'
import { IoLogInOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

import style from './generalheader.module.css'

const GeneralHeader = () => {
    return(
        <div className={style.generalHeaderContainer}>
            <Link to={'/'} className={style.logoContainer}>
                <img className={style.logoImg} src={logo} alt="Logo TibiaHelp"/>
            </Link>
            <div className={style.optionContainer}>
                <button className={style.userButton}>
                    <IoLogInOutline size={20} /> Login
                </button>
            </div>
        </div>
    )
}

export default GeneralHeader