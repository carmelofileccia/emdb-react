
import styles from "./style.module.scss"

export const Alert = (props)=>{
const visible = props.visible || false;
const content = props.content || "Testo da visualizzare";
const delContent = props.content === "scheda rimossa con successo!";
const classes =[
    styles.alert, 
    visible ? styles.visible : "",
    delContent ? styles.visibleRed :"",
    ]

    return (
        <div className={classes.join(" ")}>
            <p>{content}</p>
        </div>
    )
}