import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import global from "../../styles/Styles";
import routines from "../../api";
import { RoutineCard } from "../../components";
import * as SQLite from 'expo-sqlite'

type Exercise = {
  name: string;
  series: number;
};
type Routine = {
  id: number;
  title: string;
  exercises: Exercise[];
};

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  const db = SQLite.openDatabase('Local.Database.db')
  
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS "Exercise" (
  "_id"	INTEGER,
	"exercise_id"	INTEGER NOT NULL,
	"routine_id"	INTEGER NOT NULL,
	"series"	INTEGER NOT NULL,
	"type_id"	TEXT,
	FOREIGN KEY("routine_id") REFERENCES "Routine"("_id"),
	FOREIGN KEY("type_id") REFERENCES "Type"("_id"),
	PRIMARY KEY("_id" AUTOINCREMENT)
)`);
    })
  }, [])


  return (
    <View style={global.container}>
      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RoutineCard key={item.id} routine={item} />}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("New Routine")}>
        <LinearGradient
          colors={["#11998e", "#38ef7d"]}
          style={global.flotantButton}
        >
          <Text style={global.flotantButtonText}>+</Text>
        </LinearGradient>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;
