import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { EvilIcons } from "@expo/vector-icons";
import global from '../../styles/Styles';


type Props = {}

const SearchInput = (props: Props) => {
	return (
    <View style={global.inputContainer}>
      <TextInput style={global.input}>
        <EvilIcons name="search" size={24} color="black" />
      </TextInput>
    </View>
  );
}

export default SearchInput