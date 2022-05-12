import styles from './Film.module.css'
const Film = (props) => {

    const {text_head = ''} = props;
    const {ref_video = ''} = props;
    const {ref_img = ''} = props;
    const {text_desc = ''} = props;
    return(
        <div className={styles.check}>
<li  >
          
            <article>
            <div className={styles.head_text}>{text_head}</div>
            </article>
            <p className={styles.desc} >
            < a href={ref_video}>
            <img className={styles.scale} alt="" align="left" src={ref_img}></img>
                </a>   
                {text_desc}
            </p>
        </li> 
        <hr></hr>
        </div>
       
        
    )
}

export {Film};