import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AchievementsScreen from "../screens/AchievementsScreen";
import MoviesScreen from "../screens/MoviesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AchievementStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Achievements"
        component={AchievementsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const MovieStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Moves" component={MoviesScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    switch (route.name) {
      case "Achievement":
        iconName = "list";
        break;
      case "Movie":
        iconName = "youtube";
        break;
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Achievement" component={AchievementStack} />
        <Tab.Screen name="Movie" component={MovieStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
