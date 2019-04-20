import React from 'react';
import Chart from 'chart.js';
import Theme from './../../theme';

export default class ChartComponent extends React.Component {
    render () {
        return <canvas id="chart" height="100" width="400" >A</canvas>
    }
    componentDidMount () {
        Chart.defaults.global.defaultFontColor = Theme.color.text;
        var ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        defaults: {global : {defaultFontColor : Theme.color.text}},
        // The data for our dataset
        data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Earned Money',
            backgroundColor: 'rgba(255, 110, 67, 0.5)',
            borderColor: 'rgb(253, 95, 49)',
            data: [0, 10, 5, 2, 20, 35, 45]            }, 
            {
                label: 'Paid Money',
                backgroundColor: 'rgba(95, 255, 67, 0.5)',
                borderColor: 'rgb(0, 255, 0)',
                data: [0, 30, 15, 5, 25, 30, 10]
            }, 
            {
                label: 'Saved Money',
                backgroundColor: 'rgb(67, 207, 255, 0.5)',
                borderColor: 'rgb(0, 0, 255)',
                data: [40, 45, 35, 25, 15, 40, 20]
            }]
        },

        // Configuration options go here
        options: {}
        });
    }
}
