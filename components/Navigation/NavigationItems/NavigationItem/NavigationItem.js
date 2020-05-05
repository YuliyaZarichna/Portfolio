import classes from './NavigationItem.module.css'
import Link from 'next/link'

const navigationItem = (props) => {
    return (
        <Link href={props.link} >
            <div className={classes.NavigationItem}>
                <a className={props.active ? classes.active : null}>{props.children}</a>
            </div>
        </Link>
    )
}

export default navigationItem;