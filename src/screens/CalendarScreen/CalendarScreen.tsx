import { View, Text } from "react-native";
import React from "react";
import { CalendarList } from "react-native-calendars";
import global from "../../styles/Styles";

type Props = {};

const CalendarScreen = (props: Props) => {
  return (
    <View >
      <CalendarList
        onVisibleMonthsChange={(months) => {
          console.log("now these months are visible", months);
        }}
        pastScrollRange={10}
        futureScrollRange={0}
        scrollEnabled={true}
        showScrollIndicator={false}
      />
    </View>
  );
};

export default CalendarScreen;
