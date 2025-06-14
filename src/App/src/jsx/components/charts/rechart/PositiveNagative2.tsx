import { BarChart, Bar, ResponsiveContainer } from "recharts";

interface dataTypes {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
const data: dataTypes[] = [
  {
    name: "Page A",
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -2000,
    pv: -2500,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: -2400,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function NagetivePositive() {
  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 2.0}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <Bar dataKey="pv" fill="#709fba" />
        <Bar dataKey="uv" fill="#e23428" />
        <Bar dataKey="amt" fill="var(--primary)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
