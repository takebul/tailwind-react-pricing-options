import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Student 1",
    physics: 78,
    chemistry: 82,
    math: 90,
  },
  {
    id: 2,
    name: "Student 2",
    physics: 65,
    chemistry: 70,
    math: 75,
  },
  {
    id: 3,
    name: "Student 3",
    physics: 88,
    chemistry: 91,
    math: 85,
  },
  {
    id: 4,
    name: "Student 4",
    physics: 72,
    chemistry: 68,
    math: 74,
  },
  {
    id: 5,
    name: "Student 5",
    physics: 95,
    chemistry: 89,
    math: 93,
  },
  {
    id: 6,
    name: "Student 6",
    physics: 60,
    chemistry: 65,
    math: 70,
  },
  {
    id: 7,
    name: "Student 7",
    physics: 83,
    chemistry: 78,
    math: 80,
  },
  {
    id: 8,
    name: "Student 8",
    physics: 77,
    chemistry: 85,
    math: 88,
  },
  {
    id: 9,
    name: "Student 9",
    physics: 69,
    chemistry: 73,
    math: 71,
  },
  {
    id: 10,
    name: "Student 10",
    physics: 92,
    chemistry: 94,
    math: 96,
  },
];

const ResultsChart = () => {
  return (
    <div>
          <LineChart width={800} height={500} data={resultData}>
              <XAxis dataKey={'name'}></XAxis>
              <YAxis></YAxis>
              <Line dataKey="math"></Line>
              <Line dataKey={'chemistry'} stroke="red"></Line>
      </LineChart>
      
      <BarChart width={800} height={'70vh'} data={resultData}>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey='name'></XAxis>
        <XAxis dataKey={'physics'}></XAxis>
        <XAxis dataKey={'math'}></XAxis>
        <YAxis></YAxis>
        <Tooltip content={'name'}></Tooltip>
        <Legend></Legend>
        <Bar dataKey={'name'} barSize={20} fill="red"></Bar>
      </BarChart>
          
    </div>
  );
};

export default ResultsChart;
