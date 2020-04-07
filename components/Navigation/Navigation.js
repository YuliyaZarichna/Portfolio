import classes from './Navigation.module.css'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import logo from '../../assets/images/logo2.png'
import Link from 'next/link'

const navigation = () => {
    return (
        <div className={classes.SideBar}>
            <Link href="/">
                <a>
                    <img src={logo} className={classes.Logo} alt='logo' />
                </a>
            </Link>
            <div className={classes.NavigationItems}>
                <About />
                <Skills />
                <Contact />
            </div>
        </div>

    )
}

export default navigation;