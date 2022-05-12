import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import React, {useContext, useEffect, useState} from 'react'


const Navbar = (props) => {

    const auth = useContext(AuthContext)
    const {text = ''} = props;
    const logoutHandler = async () => {
        try {
          console.log('Click','Click')
          auth.logout()
        } catch (e) {}
      }
    return(
    <div className={styles.myclass}>
        <Link  className={styles.myclass2} to="/main" >KinoKarnaLog</Link>
        <Link className={styles.myclass1} to="/main">Главная</Link>
        <Link id="1" className={styles.myclass1} to="/comedy">Комедии</Link>
        <Link  id="2" className={styles.myclass1} to="/boeviki">Боевики</Link>
        <Link  id="3" className={styles.myclass1} to="/drama">Драмы</Link>
        <Link  id="4" className={styles.myclass1} to="/fairytales">Сказки</Link>
        <Link  id="5" className={styles.myclass1} to="/fantasy">Фэнтези</Link>
        <Link  id="6" className={styles.myclass1} to="/fears">Ужасы</Link>
        <Link  id="7" className={styles.myclass1} to="/melodrama">Мелодрамы</Link>
        <Link  id="8" className={styles.myclass1} to="/musicl">Мюзиклы</Link>
        <Link  id="9" className={styles.myclass1} to="/romantik">Романы</Link>
        <Link  id="10" className={styles.myclass1} to="/science">Наука</Link>
        <Link  id="11" className={styles.myclass1} to="/sport">Спорт</Link>
        <Link  id="12" className={styles.myclass1} to="/trillers">Триллеры</Link>
        <Link  id="13" className={styles.myclass1} to="/animefilm">Аниме</Link>
        <Link  id="14" className={styles.myclass1} to="/historychronicles">Исторические хроники</Link>
        <br></br>
        < a className={styles.myclass1} href="http://127.0.0.1:5000/about">Описание фильмов</a>
        <br></br>
        <Link  id="15" className={styles.myclass1} to="/about">О нас</Link>
        
        <button 
        className={styles.myclass3}
        onClick={logoutHandler}
      >
        Выйти
      </button>
    </div>
    )
}

export {Navbar};