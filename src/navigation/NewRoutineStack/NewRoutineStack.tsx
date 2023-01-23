import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CategoriesScreen, ExerciseDetailsScreen, ExercisesScreen, NewRoutineScreen } from '../../screens';
import { LinearGradient } from 'expo-linear-gradient';
import global from '../../styles/Styles';


const Stack = createNativeStackNavigator()
function NewRoutineStack() {
	return (
    <Stack.Navigator
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
      <Stack.Group>
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

export default NewRoutineStack