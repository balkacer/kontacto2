import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { users } from "../mocks";

export default function Security() {
  const currentUser = Platform.OS === "ios" ? users[0] : users[2];

  const currentUserContacts = currentUser.observers.map((contact_id) => {
    return users.find((user) => user.id === contact_id);
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingBottom: 20,
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 5,
              fontSize: 28,
              color: "#020122",
            }}
          >
            Security
          </Text>
          <Text style={{ fontSize: 18, color: "#020122" }}>
            These users have you as a contact
          </Text>
        </View>
      </View>
      <FlatList
        style={{
          flex: 1,
          flexDirection: "column",
          paddingHorizontal: 15,
          marginTop: 10,
        }}
        data={currentUserContacts}
        keyExtractor={(item) => item?.id ?? ""}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: "#8A84E2",
                padding: 15,
                borderRadius: 15,
                marginTop: index != 0 ? 15 : 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onPress={() => {
                console.log(item);
              }}
            >
              <Text
                style={{
                  color: "#F9F8F8",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {item?.personal_info.first_name} {item?.personal_info.last_name}
              </Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: Platform.OS === "ios" ? 30 : 15,
    backgroundColor: "#F9F8F8",
  },
});
