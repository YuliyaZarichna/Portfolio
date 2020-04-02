import classes from './Navigation.module.css'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'

const navigation = () => {
    return (
        <div className={classes.NavigationItems}>
            <About />
            <Skills />
            <Contact />
        </div>

    )
}

export default navigation;