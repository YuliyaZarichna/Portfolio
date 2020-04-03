import classes from './Home.module.css'
import Navigation from '../Navigation/Navigation'
import Quote from './Quotes/Quotes'
import logo from '../../assets/images/logo.png'

const home = () => {
    return (
        <div className={classes.Home}>

            <Navigation />
            <div className={classes.Content}>
                <div className={classes.Title}>
                    <img src={logo} className={classes.Logo} alt='logo' />
                    <h1 className={classes.Welcome}>Welcome</h1>
                </div>
                <div className={classes.Description}>
                    Student of International Media and Computing,
                    at the University of Applied Science (HTW) in Berlin.
                    Passionate about building web prototypes and applications.
                </div>

                <div className={classes.socialMedia}>
                    <p>Stay In Touch:</p>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/yuliya-zarichna/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/yuliya-zarichna/">Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={classes.Quote}>
                <Quote />
            </div>

        </div>

    )
}

export default home;