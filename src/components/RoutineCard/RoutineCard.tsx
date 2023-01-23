import { View, Text } from "react-native";
import React from "react";
import global from "../../styles/Styles";

type Props = {
  routine: Routine;
};

type Exercise = {
  name: string;
  series: number;
};

type Routine = {
  title: string;
  exercises: Exercise[];
};

const RoutineCard = ({ routine }: Props) => {
  return (
    <View style={[global.card, global.shadow]}>
      <Text style={global.cardTitle}>{routine.title}</Text>
      {routine.exercises.map((el: Exercise) => (
        <View key={el.name} style={global.cardBody}>
          <Text>{el.name}</Text>
          <Text>{el.series}</Text>
        </View>
      ))}
    </View>
  );
};

export default RoutineCard;
