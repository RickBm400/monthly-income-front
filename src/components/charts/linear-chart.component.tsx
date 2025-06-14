import { Chart } from "primereact/chart";
import { setGradientBackground } from "./utils";
import { useEffect, useState } from "react";

export default function LineChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
      datasets: [
        {
          label: "Income",
          data: [28, 90, 40, 19, 86, 27, 90, 0],
          fill: true,
          tension: 0.4,
          borderColor: "#68AE62",
          backgroundColor: (contex: any) => {
            const colorsbg = ["#68AE6230", "#68AE6205"];
            return setGradientBackground({ colors: colorsbg, context: contex });
          },
        },
        {
          label: "Outcome",
          data: [20, 10, 79, 7, 8, 27, 60, 8],
          fill: true,
          tension: 0.4,
          borderColor: "#C35B5B",
          backgroundColor: (contex: any) => {
            const colorsbg = ["#C35B5B30", "#C35B5B05"];
            return setGradientBackground({ colors: colorsbg, context: contex });
          },
        },
      ],
    };

    setChartData(data);
    setChartOptions({
      maintainAspectRatio: false,
      responsive: true,
      resizeDelay: 0,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    });
  }, []);

  return (
    <div className="h-full w-full">
      <Chart
        type="line"
        className="basis-0 grow"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        data={chartData}
        options={chartOptions}
      ></Chart>
    </div>
  );
}
