import styles from './Header.module.css'
const Header = (props) => {

    const {text = ''} = props;
    return(
        
        <div className={styles.neonshadow}>
            {text}
        </div>
        
    )
}

export {Header};