import global from "../../styles/Styles";
import { COLORS } from "../../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { CategoriesScreen, ExerciseDetailsScreen, ExercisesScreen, HomeScreen, NewRoutineScreen } from "../../screens";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerBackground: () => (
          <LinearGradient
            colors={[COLORS.primary, COLORS.primary]} //"#38ef7d"
            style={global.background}
          />
        ),
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Routines" }}
        />
        <Stack.Screen name="New Routine" component={NewRoutineScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
        <Stack.Screen
          name="Exercise Detail"
          component={ExerciseDetailsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
