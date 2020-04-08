import classes from './Skills.module.css'
import Link from 'next/link';

const skills = () => {
    return (
        <div className={classes.Triangle}>
            <Link href="/skills" >
                <a className={classes.Skills}>Skills</a>
            </Link>
        </div>
    )
}

export default skills;