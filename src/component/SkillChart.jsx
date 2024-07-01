import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const SkillChart = ({ chartData }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        chartContainerRef.current.resize();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div style={{ width: "90%", height: "400px" }} ref={chartContainerRef}>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: "Proficiency Level (%)",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Skills",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default SkillChart;
