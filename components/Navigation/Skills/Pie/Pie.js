import classes from './Pie.module.css'
import React, { Component } from 'react'
import { ResponsivePie } from '@nivo/pie'
import { motion, MotionContext } from "framer-motion"



const data = [
    {
        "id": "React.js",
        "label": "elixir",
        "value": 222,
        "color": "hsl(0, 0%, 8%)"
    },
    {
        "id": "React-Native",
        "label": "java",
        "value": 280,
        "color": "hsl(30, 70%, 50%)"
    },
    {
        "id": "CSS",
        "label": "stylus",
        "value": 265,
        "color": "hsl(48, 70%, 50%)"
    },
    {
        "id": "HTML",
        "label": "java",
        "value": 250,
        "color": "hsl(300, 70%, 50%)"
    }, {
        "id": "Node.js",
        "label": "java",
        "value": 200,
        "color": "hsl(300, 70%, 50%)"
    }, {
        "id": "MySQL",
        "label": "java",
        "value": 190,
        "color": "hsl(300, 70%, 50%)"
    }, {
        "id": "MongoDB",
        "label": "java",
        "value": 250,
        "color": "hsl(300, 70%, 50%)"
    }, {
        "id": "Rest",
        "label": "stylus",
        "value": 265,
        "color": "hsl(48, 70%, 50%)"
    }, {
        "id": "JS",
        "label": "stylus",
        "value": 100,
        "color": "hsl(48, 70%, 50%)"
    }]
const clickHandler = () => {
    console.log("click");
}
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
    fontSize: 18,
};

class Pie extends Component {

    state = {
        slicesLabels: true,
        radialLabels: false
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
        console.log("handle size")
        if (window.innerWidth < 1025) {
            this.setState({
                slicesLabels: false,
                radialLabels: true
            })
            console.log("width", window.innerWidth)
        }
        else if (window.innerWidth > 1024) {
            this.setState({
                slicesLabels: true,
                radialLabels: false
            })
        }
    }

    render() {

        return (
            /*   <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2 }}
              > */
            <div className={classes.Pie}>
                <ResponsivePie
                    animate={themeSettings.animate == false ? themeSettings.animate : true}
                    data={data}
                    margin={{ top: 40, right: 100, bottom: 40, left: 80 }}
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
                    /*  radialLabelsLinkColor={{ from: 'color' }} */
                    radialLabelsLinkColor="white"
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="white"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    sliceLabel="id"
                    enableRadialLabels={this.state.radialLabels}
                    enableSlicesLabels={this.state.slicesLabels}
                    /*      enableRadialLabels={false}
                            enableSlicesLabels={true} */
                    isInteractive={false}
                    onClick={clickHandler}
                    theme={themeSettings}
                />
            </div>
            /*  </motion.div> */
        )
    }
}
export default Pie;