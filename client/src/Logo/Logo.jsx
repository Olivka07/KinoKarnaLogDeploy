import styles from './Logo.module.css'
const Logo = (props) => {

    const {text = ''} = props;
    return(
        <div className={styles.myclass2}>
            {text}
        </div>
    )
}

export {Logo};