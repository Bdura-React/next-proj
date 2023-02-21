import Link from 'next/link'
import classes from './button.module.css'

function Button(props) {
    return (
        // <Link href={props.link}>
        //     <a className={classes.btn}>{props.children}</a>
        // </Link>

        <Link href={props.link} className={classes.btn}>{props.children}</Link>
    )
}

export default Button;
