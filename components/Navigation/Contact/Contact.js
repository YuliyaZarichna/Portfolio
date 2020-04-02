import classes from './Contact.module.css'
import Link from 'next/link';

const contact = () => {
    return (
        <Link href="/" >
            <a className={classes.Contact}>Contact</a>
        </Link>
    )
}

export default contact;