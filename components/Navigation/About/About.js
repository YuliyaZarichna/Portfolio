import classes from './About.module.css'
import Link from 'next/link';

const about = () => {
    return (
        <Link href="/about" >
            <a className={classes.About}>About</a>
        </Link>
    )
}

export default about;