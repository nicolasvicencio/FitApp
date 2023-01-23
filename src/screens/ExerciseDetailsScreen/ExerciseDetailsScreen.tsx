import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { ModalComponent, Spinner } from "../../components";
import global from "../../styles/Styles";


type Props = {
  route: any;
  navigation: any;
};

export interface ExerciseDetail {
  id?: number;
  name?: string;
  aliases?: any[];
  uuid?: string;
  exercise_base_id?: number;
  description?: string;
  creation_date?: Date;
  category?: Category;
  muscles?: Muscle[];
  muscles_secondary?: Muscle[];
  equipment?: Category[];
  language?: Language;
  license?: Language;
  license_author?: string;
  images?: any[];
  videos?: any[];
  comments?: Comment[];
  variations?: number[];
  author_history?: string[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  exercise: number;
  comment: string;
}

export interface Language {
  id: number;
  short_name: string;
  full_name: string;
  url?: string;
}

export interface Muscle {
  id: number;
  name: string;
  name_en: string;
  is_front: boolean;
  image_url_main: string;
  image_url_secondary: string;
}

const ExerciseDetailsScreen = ({ route, navigation }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [series, setSeries] = useState(0)
  const [details] : ExerciseDetail =  useFetch(
    `https://wger.de/api/v2/exerciseinfo/${route.params.id}`
  );

  function removeTags(str: string) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  if (!details) return <Spinner />;
  return (
    <ScrollView style={global.container}>
      <Text style={global.title}>{details.name}</Text>
      <View >
        <View style={global.cardImageContainer}>
          {details.images.length >= 1 &&
            details.images.map((el: any) => (
              <Image style={global.cardImage} source={{ uri: el.image }} />
            ))}
        </View>
        <View>
          <Text style={global.label}>Description: </Text>
          <Text style={global.text}>{removeTags(details.description)}</Text>
        </View>
        {details.muscles.length >= 1 && (
          <View>
            <Text style={global.label}>Muscles: </Text>
            {details.muscles.map((el: Muscle) => (
              <Text> - {el.name}</Text>))}
            </View>
        )
      }
        {details.muscles_secondary.length >= 1 && (
          <View>
            <Text style={global.label}>Secondary Muscles: </Text>
            {details.muscles_secondary.map((el: Muscle) => (
              <Text> - {el.name}</Text>
            ))}
          </View>
        )}
        <TouchableOpacity
          style={global.button}
          onPress={() => setIsActive(true)}
        >
          <Text style={global.buttonText}>Add</Text>
        </TouchableOpacity>
        {isActive && <ModalComponent data={details} isActive={isActive} setIsActive={setIsActive} setSeries={setSeries} series={series}/>}
      </View>
    </ScrollView>
  );
};

export default ExerciseDetailsScreen;
