import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import global from "../../styles/Styles";
import { COLORS } from "../../styles/Styles";

type Props = {
  navigation: any;
};

const NewRoutineScreen = ({ navigation }: Props) => {
  const [exercises, setExercises] = useState([]);

  return (
    <View style={global.container}>
      <Text style={global.title}>New Routine</Text>
      <View style={global.inputContainer}>
        <Text style={global.label}>Name</Text>
        <TextInput style={global.input} />
      </View>
      <View style={global.inputContainer}>
        <Text style={global.label}>Exercises</Text>
        <TouchableOpacity
          style={global.button}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={global.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewRoutineScreen;
