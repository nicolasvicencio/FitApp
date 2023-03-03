import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Category = {
  id: number;
  name: string;
};

type Props = {
	data: Category[]
}

const ListItem = (props: Props) => {
	return (
    <TouchableOpacity
      key={item.id}
      onPress={() => navigation.navigate("Exercises", { category: item.id })}
    >
      <Text style={global.listItem}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default ListItem