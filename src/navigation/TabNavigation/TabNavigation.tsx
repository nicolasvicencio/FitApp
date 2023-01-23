import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { HomeStack } from "../HomeStack";
import { LogStack } from "../LogStack";
import { SettingsScreen } from "../../screens";
import global from "../../styles/Styles";
import { TabBarIcon, TabBarPrincipalButton } from "../../components";
import { NewRoutineStack } from "../NewRoutineStack";
import { SettingsStack } from "../SettingsStack";
import { ChartsStack } from "../ChartsStack";

const Tabs = createBottomTabNavigator();
export default function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: "#11998e",
        tabBarShowLabel: false,
        tabBarStyle: global.tab,
      }}
    >
      <Tabs.Screen
        name="Work Out"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title={"Work Out"}
              iconName={"dumbbell"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Log"
        component={LogStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title={"Log"}
              iconName={"calendar-alt"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="New Routine"
        component={NewRoutineStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="plus" size={24} color="#fff" />
          ),
          tabBarButton: (props) => <TabBarPrincipalButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="Progress"
        component={ChartsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title={"Progress"}
              iconName={"chart-line"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} title={"Settings"} iconName={"cog"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
