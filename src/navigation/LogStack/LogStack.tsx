import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarScreen } from "../../screens";
import global from "../../styles/Styles";

const StackLog = createNativeStackNavigator();
export default function LogStack() {
  return (
    <StackLog.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerBackground: () => (
          <LinearGradient
            colors={["#11998e", "#38ef7d"]}
            style={global.background}
          />
        ),
      }}
    >
      <StackLog.Group>
        <StackLog.Screen name="Calendar" component={CalendarScreen} />
      </StackLog.Group>
    </StackLog.Navigator>
  );
}