import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // data processing for the chart
    const marksChartData = marksData.map((studentData) => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            biology: studentData.marks.biology,
            math: studentData.marks.math
        }

        const avg = (student.physics + student.chemistry + student.math + student.biology) / 4;
        student.avg = avg;

        return student;
    })

    console.log(marksChartData);


    return (
        <div>
            <BarChart width={1200} height={300} data={marksChartData} responsive>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="avg" fill = "yellow"></Bar>
                <Bar dataKey="chemistry" fill = "blue"></Bar>
                <Bar dataKey="physics" fill = "red"></Bar>
                <Bar dataKey="biology" fill = "green"></Bar>
                <Bar dataKey="math" fill = "purple"></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;