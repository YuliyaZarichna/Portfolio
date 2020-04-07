import Link from 'next/link';
import classes from './AboutPage.module.css'
import foto from '../../../../assets/images/pass.jpg'


const aboutPage = () => {
    return (
        <div className={classes.Main}>
            <div className={classes.TitleContent}>
                <div className={classes.Title}>
                    <h1 className={classes.Greeting}>Hi there,</h1>
                    <p className={classes.Name}>I am Yuliya</p>
                </div>
                <img className={classes.Foto} src={foto} alt="face" />
            </div>
            <div className={classes.Description}>
                <h4 className={classes.About}>About me</h4>
                <p className={classes.Text}>Currently I`m about to finish my bachelor’s degree in “International Media and Computing”,
                at HTW Berlin. Studying courses such as Data Structure, Software Engineering,
                Web Development and Database helped me to gain a good understanding of the programming
                and I earned the first experience with HTML, CSS, and JavaScript.
                During my Software Engineering courses, I also learned about software testing
                and quality assurance.
                <br />
                    <br />
                As a part of my studies, I accomplished a compulsory internship for 19 weeks in
                IAV automotive engineering. There I worked on the web application which automates
                the testing process and keeps track of it. I developed front-end of this application
                using React.js and back-end with Node.js, Express.js, MongoDB technologies.
                </p>
            </div>
        </div>
    )
}

export default aboutPage;