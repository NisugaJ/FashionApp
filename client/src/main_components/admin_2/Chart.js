import React from "react"
import { useTheme } from "@material-ui/core/styles"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts"
import Title from "./Title"

// Generate Sales Data
function createData(time, amount) {
  return { time, amount }
}

const data = [
  createData("Jan w1", 20),
  createData("Jan w2", 30),
  createData("Jan w3", 60),
  createData("Jan w4", 80),
  createData("Feb w1", 150),
  createData("15:00", 200),
  createData("18:00", 240),
  createData("21:00", 240),
  createData("24:00", undefined)
]

export default function Chart() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>Candidate Submissions</Title>
      <LineChart
        data={data}
        margin={{
          top: 16,
          right: 16,
          bottom: 0,
          left: 24
        }}
      >
        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
        <YAxis stroke={theme.palette.text.secondary}>
          Submissions
            <Label
            angle={270}
            position="right"
            style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
          ></Label>
        </YAxis>
        <Line
          type="monotone"
          dataKey="amount"
          stroke={theme.palette.primary.main}
          dot={false}
        />
      </LineChart>
    </React.Fragment>
  )
}
