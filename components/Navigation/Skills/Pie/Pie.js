import classes from './Pie.module.css'
import React, { Component } from 'react'
import { ResponsivePie } from '@nivo/pie'
import { motion, useMotionValue } from "framer-motion"


const data = [
    {
        "id": "React.js",
        "label": "React.js",
        "value": 222,
        "experience": "Learn in intership"
    },
    {
        "id": "React-Native",
        "label": "React-Nativea",
        "value": 280,
        "experience": "Bacheror thesis"
    },
    {
        "id": "CSS",
        "label": "CSS",
        "value": 265,
        "experience": "Learn in intership"
    },
    {
        "id": "HTML",
        "label": "HTML",
        "value": 250,
        "experience": "Learn in intership"
    }, {
        "id": "Node.js",
        "label": "Node.js",
        "value": 200,
        "experience": "Learn in intership"
    }, {
        "id": "MySQL",
        "label": "MySQL",
        "value": 190,
        "experience": "Learn in intership"
    }, {
        "id": "MongoDB",
        "label": "MongoDB",
        "value": 250,
        "experience": "Learn in intership"
    }, {
        "id": "Rest",
        "label": "Rest",
        "value": 265,
        "experience": "Learn in intership"
    }, {
        "id": "JS",
        "label": "JS",
        "value": 100,
        "experience": "Learn in intership"
    }]

const colors = {
    "React.js": '#141414',
    'React-Native': 'red',
    'CSS': '#141414',
    'HTML': '#999999',
    'Rest': 'red',
    'Node.js': '#F20D0D',
    'MongoDB': '#404040',
    'MySQL': 'black',
    'JS': '#999999'

}
const getColor = data => colors[data.id]

const themeSettings = {
    fontFamily: 'Merienda',
    fontSize: 16,
};

class Pie extends Component {

    state = {
        slicesLabels: true,
        radialLabels: false,
        skill: null
    }
    componentDidMount() {
        if (window.innerWidth < 1025) {
            this.setState({
                slicesLabels: false,
                radialLabels: true
            })
        }
        else {
            this.setState({
                slicesLabels: true,
                radialLabels: false
            })
        }
        window.addEventListener("resize", this.handleSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleSize)
    }

    handleSize = () => {
        if (window.innerWidth < 1025) {
            this.setState({
                slicesLabels: false,
                radialLabels: true
            })
        }
        else if (window.innerWidth > 1024) {
            this.setState({
                slicesLabels: true,
                radialLabels: false
            })
        }
    }

    clickHandler = (data) => {
        this.setState({
            skill: (
                <div className={classes.SkillsCard}>
                    <ul className={classes.SkillsList}>
                        <li>
                            {data.id}
                        </li>
                        <li>
                            {data.experience}
                        </li>
                    </ul>
                </div>

            )
        })
    }


    render() {
        console.log("skill", this.state.skill)

        return (
            <div>
                {/*   <motion.svg
                    whileHover="hover"
                > */}
                <div className={classes.Pie}>
                    <ResponsivePie
                        animate={themeSettings.animate == false ? themeSettings.animate : true}
                        data={data}
                        margin={{ top: 40, right: 50, bottom: 40, left: 80 }}
                        pixelRatio={1}
                        innerRadius={0.15}
                        padAngle={4}
                        cornerRadius={10}
                        colors={getColor}
                        borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextXOffset={6}
                        radialLabelsTextColor="white"
                        radialLabelsLinkOffset={0}
                        radialLabelsLinkDiagonalLength={16}
                        radialLabelsLinkHorizontalLength={24}
                        radialLabelsLinkStrokeWidth={1}
                        // radialLabelsLinkColor={{ from: 'color' }}
                        radialLabelsLinkColor="white"
                        slicesLabelsSkipAngle={10}
                        slicesLabelsTextColor="white"
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        sliceLabel="id"
                        enableRadialLabels={this.state.radialLabels}
                        enableSlicesLabels={this.state.slicesLabels}
                        //enableRadialLabels={false}
                        //enableSlicesLabels={true}
                        isInteractive={false}
                        onClick={this.clickHandler}
                        theme={themeSettings}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'MySQL'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'React-Native'
                                },
                                id: 'dots'
                            }
                        ]}
                    />
                </div>
                <div>
                    {this.state.skill}
                </div>
                {/* </motion.svg> */}


            </div>
        )
    }
}
export default Pie;