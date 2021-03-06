import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import DetailsScreen from "../Screens/DetailsScreen";
import MyShowsScreen from "../Screens/MyShowsScreen";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "../Screens/SettingsScreen";

const Stack = createStackNavigator();

function MyShowsStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
          borderBottomColor: colors.grey,
        },
        headerTintColor: colors.primary,
        headerTitleAlign: "center",
        // eslint-disable-next-line react/display-name
        headerRight: () => (
          <MaterialCommunityIcons
            name="menu"
            color={colors.primary}
            size={22}
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate("Settings")}
          />
        ),
      }}
    >
      <Stack.Screen name="MyShows" component={MyShowsScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default MyShowsStack;
