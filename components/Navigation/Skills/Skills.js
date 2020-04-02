import classes from './Skills.module.css'
import Link from 'next/link';

const skills = () => {
    return (
        <Link href="/Skills" >
            <a className={classes.Skills}>Skills</a>
        </Link>
    )
}

export default skills;