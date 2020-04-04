import classes from './About.module.css'
import Link from 'next/link';

const about = () => {
    return (
        <div className={classes.Triangle}>
            <Link href="/about" >
                <a className={classes.About}>About</a>
            </Link>
        </div>
    )
}

export default about;