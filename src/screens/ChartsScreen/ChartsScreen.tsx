import { View, Text } from "react-native";
import React from "react";
import global from "../../styles/Styles";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { COLORS } from "../../utils/colors";
type Props = {};

const ChartsScreen = (props: Props) => {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => COLORS.primary, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `#222`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={global.container}>
      <Text style={global.title}>Progression</Text>
      <LineChart
        data={data}
        width={screenWidth - 40 }
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default ChartsScreen;
