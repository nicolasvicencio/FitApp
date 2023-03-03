import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { SearchInput, Spinner } from '../../components'

import global from '../../styles/Styles'


type Props = {
	route: any
	navigation: any
}

const ExercisesScreen = ({route, navigation}: Props) => {
	const [exercises]: any = useFetch(
    `https://wger.de/api/v2/exercise/?category=${route.params.category}&language=2&limit=100`
  );

	if (!exercises ) return <Spinner />
	return (
    <View>
      <SearchInput />
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