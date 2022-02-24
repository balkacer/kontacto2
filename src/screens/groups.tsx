import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { users } from "../mocks";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/navigation.utils";
import Screens from "../utils/screens.enum";

type groupsScreenProp = StackNavigationProp<RootStackParamList, "Groups">;

export default function Groups() {
  const currentUser = Platform.OS === "ios" ? users[0] : users[2];

  const navigation = useNavigation<groupsScreenProp>();

  const btns = [
    {
      title: Screens.AddGroup,
      icon: "plus",
      type: "feather",
      haveDot: false,
    },
  ];

  const currentUserGroups = currentUser.groups;
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
            Groups
          </Text>
          <Text style={{ fontSize: 18, color: "#020122" }}>
            These are your contact groups
          </Text>
        </View>
        <View style={{ flexDirection: "row", position: "relative" }}>
          {btns.map((btn, index) => {
            return (
              <View
                key={index}
                style={{
                  position: "relative",
                  marginLeft: 20,
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
                      backgroundColor: "#F9F8F8",
                    }}
                  >
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        margin: 2,
                        borderRadius: 5,
                        backgroundColor: "#FF0000",
                      }}
                    ></View>
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
          paddingHorizontal: 15,
          marginTop: 10,
        }}
        data={currentUserGroups}
        keyExtractor={(item) => item?.id ?? ""}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: "#8A84E2",
                padding: 30,
                marginTop: index != 0 ? 15 : 0,
                borderRadius: 15,
                alignItems: "flex-start",
                width: "100%",
              }}
              onPress={() => {
                console.log(item);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: 15,
                }}
              >
                <Text
                  style={{
                    color: "#F9F8F8",
                    fontWeight: "bold",
                    fontSize: 36,
                  }}
                >
                  {item?.name}
                </Text>
                <View
                  style={{
                    borderRadius: 50,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: "#F9F8F8",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#020122",
                      fontWeight: "bold",
                    }}
                  >
                    {item?.contacts.length}
                  </Text>
                </View>
              </View>
              <Text style={{ color: "#020122", fontSize: 18 }}>
                {item?.description}
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
