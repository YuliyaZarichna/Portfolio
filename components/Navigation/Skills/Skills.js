import classes from './Skills.module.css'
import Link from 'next/link';

const skills = () => {
    return (
        <Link href="/" >
            <a className={classes.Skills}>Skills</a>
        </Link>
    )
}

export default skills;