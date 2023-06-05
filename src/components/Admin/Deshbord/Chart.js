import React from 'react'
import {
    Chart as ChartJs,
    BarController,
    PointElement,
    LineElement,
    Title,
    Tooltip, ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,

} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2'
ChartJs.register(

    BarController,
    PointElement,
    LineElement,
    Title,
    Tooltip, ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
);

export const LineChart = () => {
    const labels = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
    const Option = {
        responsive: true,
        Plugins: {
            Legend: {
                position: 'bottom'
            },
            title: {
                display: true, text: 'Yealy Views'
            }
        }
    };
    const data = {
        labels,
        datasets: [
            {
                label: "Views",
                data: [1, 2, 3, 4, 2, 34, 33, 2],
                borderColor: "red",
                backgroundColor: "pink"
            }
        ]
    }

    return (
        <Line option={Option} data={data} />
    )
}
export const LineChartUsers = () => {
    const labels =['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
    const Option = {
        responsive: true,
        Plugins: {
            Legend: {
                position: 'bottom'
            },
            title: {
                display: true, text: 'Yealy Views'
            }
        }
    };
    const data = {
        labels,
        datasets: [
            {
                label: "Users",
                data: [1, 2, 34, 4, 2, 34, 33, 2],
                borderColor: 'rgb(0, 2, 9)',
                backgroundColor: 'rgb(99,4,34)',
                tension: 0.1,
                fill: false,


            }
        ]
    }

    return (
        <Line option={Option} data={data} />
    )
}

export const DoughnutChart = () => {
    const labels = ["Subscribed", "Not Subscribed"];
    const data = {
        labels,
        datasets: [
            {
                label: "Subscribe",
                data: [1, 6],
                borderColor: ["rgb(67,23,232)", 'rgb(214,34,128)'],
                backgroundColor: ["rgba(67,23,232,0.3)", 'rgba(214,34,128,0.3)'],
                borderWidth: 2
            }
        ]
    }
    return (
        <Doughnut data={data} />
    )

}

// export const GetLastYearsMonths = () => {


//     const labels = [];
//     const Months = ['January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December'];
//     const CurruntMonth = new Date().getMonth();
//     const remaine = 11 - CurruntMonth;
//     for (let i = CurruntMonth; i < Months.length; i--) {
//         const element = Months[i];
//         labels.unshift(element);
//         if (i === 0) break
//         console.log(labels)
//         // for (let i = 11; i > remaine; i--) {
//         //     const element = Months[i];
//         //     labels.unshift(element)
//         //     if (i === CurruntMonth) break
//         // }
//         // console.log(labels)
//     }
//     // return labels
// }
// // GetLastYearsMonths() 