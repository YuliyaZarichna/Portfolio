import classes from './Pie.module.css'
import React from 'react'
import { ResponsivePieCanvas } from '@nivo/pie'

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
        "value": 596,
        "color": "hsl(30, 70%, 50%)"
    },
    {
        "id": "CSS",
        "label": "stylus",
        "value": 365,
        "color": "hsl(48, 70%, 50%)"
    },
    {
        "id": "HTML",
        "label": "java",
        "value": 596,
        "color": "hsl(300, 70%, 50%)"
    },
    {
        "id": "Rest",
        "label": "stylus",
        "value": 365,
        "color": "hsl(48, 70%, 50%)"
    }]
const clickHandler = () => {
    console.log("click");
}
const colors = {
    "React.js": '#141414',
    'React-Native': 'red',
    'CSS': '#141414',
    'HTML': '#E6E6E6',
    'Rest': 'red'

}
const getColor = data => colors[data.id]

const themeSettings = {
    fontFamily: 'Merienda',
    fontSize: 18,
};



const pie = () => {
    return (
        <div style={{ height: '20em', width: '20em' }}>
            <ResponsivePieCanvas
                animate={themeSettings.animate == false ? themeSettings.animate : true}
                data={data}
                margin={{ top: 40, right: 100, bottom: 40, left: 80 }}
                pixelRatio={1}
                innerRadius={0.05}
                padAngle={1}
                cornerRadius={45}
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
                enableRadialLabels={true}
                enableSlicesLabels={false}
                /*         enableRadialLabels={false}
                        enableSlicesLabels={true} */
                isInteractive={false}
                onClick={clickHandler}
                theme={themeSettings}
            />
        </div>
    )
}
export default pie;