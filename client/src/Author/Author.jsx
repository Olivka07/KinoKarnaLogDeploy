import styles from './Author.module.css'
const Author = (props) => {

    const {name_author = ''} = props;
    const {desc_author = ''} = props;
    const {ref_img = ''} = props;
    const {ref_author = ''} = props;
    return(
        <div className={styles.check}>
        <li>
            <article>
            <div className={styles.head_text}>{name_author}</div>
            </article>
            <p className={styles.desc} >
            < a href={ref_author}>
            <img className={styles.scale} alt="" align="left" src={ref_img}></img>
                </a>   
                {desc_author}
            </p>
        </li> 
        <hr></hr>
        </div>
       
        
    )
}

export {Author};