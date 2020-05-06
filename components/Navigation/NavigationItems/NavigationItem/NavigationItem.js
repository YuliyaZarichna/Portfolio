import classes from './NavigationItem.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigationItem = (props) => {
    const router = useRouter()
    const style = {
        marginRight: 10,
        color: router.pathname === props.link ? 'red' : 'black',
    }
    const handleClick = e => {
        e.preventDefault()
        router.push(props.link)
    }

    return (
        <Link href={props.link} >
            <div>
                <a
                    onClick={handleClick}
                    className={classes.NavigationItem}
                    style={style}
                >
                    {props.children}
                </a>
            </div>
        </Link>
    )
}

export default navigationItem;