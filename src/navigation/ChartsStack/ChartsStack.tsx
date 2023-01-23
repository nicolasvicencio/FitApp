import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { ChartsScreen } from "../../screens";
import global from "../../styles/Styles";


const Stack = createNativeStackNavigator()

export default function () {
	return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerBackground: () => (
          <LinearGradient
            colors={["#11998e", "#fff"]} //"#38ef7d"
            style={global.background}
          />
        ),
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Charts" component={ChartsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}