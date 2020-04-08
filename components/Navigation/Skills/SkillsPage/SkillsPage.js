import classes from './SkillsPage.module.css'
import React from 'react'
import Pie from '../Pie/Pie'

const skillsPage = () => {
    return (
        <div className={classes.Main}>
            <div className={classes.Content}>
                <h1 className={classes.Title}>Skills</h1>

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
            <div className={classes.Pie}>
                <Pie />
            </div>
        </div>
    )
}

export default skillsPage;