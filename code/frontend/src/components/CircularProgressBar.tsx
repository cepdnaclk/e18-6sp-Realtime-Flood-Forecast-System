import { Progress } from "antd";
import { FC } from "react";

interface CircularProgressBarProps {
  waterLevel: number;
}

const CircularProgressBar: FC<CircularProgressBarProps> = ({ waterLevel }) => {
  const getColor = (waterLevel: number) => {
    if (waterLevel >= 90) {
      return "#ff4d4f"; // Red color for danger
    } else if (waterLevel >= 30) {
      return "#aef359"; // Green color for favorable weather
    }
    return "#d6967a"; // Default brown color for dry season
  };

  const color = getColor(waterLevel);

  return (
    <div style={{ textAlign: "center" }}>
      <Progress
        type="circle"
        percent={waterLevel}
        strokeColor={color}
      />
      <h3 style={{ marginTop: "1rem", color }}>Water Level: {waterLevel}%</h3>
    </div>
  );
};

export default CircularProgressBar;


