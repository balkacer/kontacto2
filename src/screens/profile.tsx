import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { users } from "../mocks";

const defaultAvatar = "../../assets/default_user_avatar.png";

export default function Profile(props: {user: any}) {
  const { user } = props;
  const currentUser = user || users[0];
  const { first_name, last_name } = currentUser.personal_info;
  const { avatar } = currentUser.user_info;

  return (
    <ImageBackground
      source={avatar ? { uri: avatar } : require(defaultAvatar)}
      resizeMode="cover"
      blurRadius={10}
      style={styles.container}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: "#F9F8F8",
          marginTop: Dimensions.get("window").height / 5,
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log("Image");
          }}
          style={{
            marginTop: -50,
          }}
        >
          <Image
            source={avatar ? { uri: avatar } : require(defaultAvatar)}
            resizeMode="cover"
            style={{
              width: 100,
              height: 100,
              borderColor: "#8A84E2",
              borderWidth: 2,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
            marginTop: 10,
            color: "#020122",
            textShadowColor: "#FFFFFF",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
            marginRight: 10,
          }}
        >
          {first_name} {last_name}
        </Text>
        <Text style={{ fontSize: 18, color: "#020122" }}>
          {currentUser.address.city}, {currentUser.address.state}
        </Text>
        <Text style={{ fontSize: 14, color: "#020122" }}>
          {currentUser.user_info.bio}
        </Text>

        <View style={{ marginTop: 20, flex: 1, width: "100%" }}>
          <Text
            style={{
              fontSize: 24,
              color: "#020122",
              fontWeight: "bold",
              alignSelf: "flex-start",
              marginBottom: 10,
            }}
          >
            User Info
          </Text>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              width: "100%",
              padding: 10,
            }}
            style={{
              backgroundColor: "#EDF2F4",
              width: "100%",
              flex: 1,
              borderRadius: 20,
            }}
          >
            {currentUser.contact_info.map((info: any, index: number) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Icon name={info.type} type="entypo" size={20} />
                  <Text
                    style={{ fontSize: 18, color: "#8A84E2", marginLeft: 10 }}
                  >
                    {info.value}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8F8",
  },
});
