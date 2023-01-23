import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../utils/colors";

type Props =  {
	focused: any,
	title: string,
	iconName: string
}


export default function({focused, title, iconName}: Props) {
  const color = focused ? COLORS.primary : "#999";
	return (
    <View style={styles.container}>
      <FontAwesome5
        name={iconName}
        size={24}
        color={color}
      />
      <Text style={[styles.text, {color: color}]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
		
  },
});