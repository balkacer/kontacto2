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
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/navigation.utils";
import Screens from "../utils/screens.enum";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
  const currentUser = Platform.OS === "ios" ? users[0] : users[2];
  const { first_name } = currentUser.personal_info;

  const navigation = useNavigation<homeScreenProp>();
  
  const notifications = currentUser.notifications.filter(
    (x) => x.status === "unread"
  ).length;

  const btns = [
    {
      title: Screens.Notifications,
      icon: "bell",
      type: "feather",
      haveDot: notifications > 0,
    },
    {
      title: Screens.AddContact,
      icon: "user-plus",
      type: "feather",
      haveDot: false,
    },
  ];

  const currentUserContacts = currentUser.contacts.map((contact_id) => {
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
            Hello, {first_name}
          </Text>
          <Text style={{ fontSize: 18, color: "#020122" }}>
            These are your contacts
          </Text>
        </View>
        <View style={{ flexDirection: "row", position: "relative" }}>
          {btns.map((btn, index) => {
            return (
              <View
                key={index}
                style={{
                  position: "relative",
                  marginLeft: index === 0 ? 0 : 35,
                }}
              >
                <Icon
                  key={index}
                  name={btn.icon}
                  type={btn.type}
                  color="#020122"
                  style={{}}
                  size={28}
                  onPress={() => {
                    navigation.navigate(btn.title);
                  }}
                />
                {btn.haveDot && (
                  <View
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 1,
                      borderRadius: 5,
                      backgroundColor: "#FF0000",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 15,
                      height: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFF",
                        fontSize: 10,
                        fontWeight: "bold",
                        margin: "auto",
                      }}
                    >
                      {notifications}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
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
                navigation.navigate(Screens.Profile, undefined);
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
