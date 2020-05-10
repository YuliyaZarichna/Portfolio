import classes from './NavigationItems.module.css'
import logo from '../../../assets/images/logoS.png'
import Link from 'next/link'
import NavigationItem from './NavigationItem/NavigationItem'



const navigationItems = () => {
    return (
        <div className={classes.SideBar}>
            <div className={classes.Shape}>
                <Link href="/">
                    <a>
                        <img src={logo} className={classes.Logo} alt='logo' />
                    </a>
                </Link>
            </div>
            <div className={classes.NavigationItems}>
                <NavigationItem link="/about" > About</NavigationItem>
                <NavigationItem link="/skills" > Skills</NavigationItem>
                <NavigationItem link="/" > Contact</NavigationItem>
            </div>
        </div>

    )
}

export default navigationItems;