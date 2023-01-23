import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import global from "../../styles/Styles";
import useFetch from "../../hooks/useFetch";
import { Spinner } from "../../components";

type Props = {
  navigation: any;
};

type Category = {
  id: number;
  name: string;
};

type Response = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[] | [];
};

const CategoriesScreen = ({ navigation }: Props) => {
  const [categories]  = useFetch("https://wger.de/api/v2/exercisecategory/");

  if (!categories || categories.length < 1) return <Spinner />;
  return (
    <View>
      <FlatList
        data={categories.results}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate("Exercises", { category: item.id })
            }
          >
            <Text style={global.listItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
