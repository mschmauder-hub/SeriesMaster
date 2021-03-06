import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverScreen from "../Screens/DiscoverScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SettingsScreen from "../Screens/SettingsScreen";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

function DiscoverStack() {
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
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default DiscoverStack;
