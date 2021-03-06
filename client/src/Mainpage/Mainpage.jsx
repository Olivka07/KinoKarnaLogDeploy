import styles from './Mainpage.module.css'
const Mainpage = (props) => {

    const {text = ''} = props;
    return(
        <div>
        <div className={styles.image}>
            <h1>KINOKARNALOG</h1>
            <h3>Добро пожаловать на  наш сайт! <br/>
            KinoKarnaLog - это интернет-сервис, позволяющий пользователям смотреть фильмы и сериалы в онлайн режиме.
            Характерной чертой, отличающей данный онлайн-кинотеатр от его аналогов, <br/>
            является лаконичность, удобство в использовании, бесплатный доступ к предоставленным фильмам. 
            <br/>
            Для навигации по сайту используйте Navbar, расположенный в левой части экрана. <br/>
            При переходе на любой жанр открывается страница с фильмами, на данный момент в которой содержатся минимум три фильма.
            К каждому фильму имеется постер, краткое описание фильма и ссылка на трейлер к нему. <br/></h3>
        </div>

        
        </div>
    )
}

export {Mainpage};