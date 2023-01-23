import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Spinner } from '../../components'

import global from '../../styles/Styles'
import { EvilIcons } from "@expo/vector-icons";


type Props = {
	route: any
	navigation: any
}

const ExercisesScreen = ({route, navigation}: Props) => {
	const [exercises] = useFetch(
    `https://wger.de/api/v2/exercise/?category=${route.params.category}&language=2&limit=100`
  );

	if (!exercises ) return <Spinner />
	return (
    <View>
      <View style={global.inputContainer}>
        <TextInput style={global.input}>
          <EvilIcons name="search" size={24} color="black" />
        </TextInput>
      </View>
      <FlatList
        data={exercises.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
					onPress={() => navigation.navigate('Exercise Detail', {id: item.id})}
					>
            <Text style={global.listItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default ExercisesScreen