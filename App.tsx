import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { users } from "./src/mocks";
import { Tapbar } from "./src/comps";

export default function App() {
  const currentUser = users[0];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F9F8F8",
      }}
    >
      <NavigationContainer>
        <Tapbar user={currentUser} />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
