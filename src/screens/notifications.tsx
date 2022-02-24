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
import NotificationType, {
  NotificationStatus,
} from "../utils/notifications.enum";
import moment from "moment";

type notificationsScreenProp = StackNavigationProp<
  RootStackParamList,
  "Notifications"
>;

export default function Notification() {
  const currentUser = Platform.OS === "ios" ? users[0] : users[2];
  const notifications = currentUser.notifications || [];

  const navigation = useNavigation<notificationsScreenProp>();

  const getNotification = (notification: any) => {
    const { type, sender, status, date_time, id } = notification;
    const personalInfo = users.find((x) => x.id === sender)?.personal_info || {
      first_name: "",
      last_name: "",
    };
    const { first_name, last_name } = personalInfo;
    const fullName = `${first_name} ${last_name}`;

    const notificationTypes = {
      contact_request: {
        subtitle: "sent you a contact request",
        icon: "user-plus",
        type: "feather",
      },
      birthday: {
        subtitle: "has a birthday today",
        icon: "gift",
        type: "feather",
      },
      contact_shared: {
        subtitle: "shared a contact with you",
        icon: "user-plus",
        type: "feather",
      },
      contact_share_request: {
        subtitle: "wants to share your contact with someone",
        icon: "user-plus",
        type: "feather",
      },
    };

    const date = moment(new Date(date_time)).fromNow();

    return {
      id,
      ...notificationTypes[type as NotificationType],
      senderName: fullName,
      date,
      status: status as NotificationStatus,
    };
  };

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
            Notifications
          </Text>
          <Text style={{ fontSize: 18, color: "#020122" }}>
            You have {notifications.length} notifications
          </Text>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: "#8A84E2",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            notifications.forEach((notification) => {
              notification.status = NotificationStatus.Read;
            });
          }}
        >
          <Icon name="ios-checkmark-done" type="ionicon" color="#020122" />
          <Text style={{ fontSize: 12, color: "#020122", marginLeft: 5 }}>
            Mark all as read
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{
          flex: 1,
          flexDirection: "column",
          paddingHorizontal: 15,
          marginTop: 10,
        }}
        data={notifications.sort((x, y) => {
          return x.date_time > y.date_time ? -1 : 1;
        })}
        keyExtractor={(item) => item?.id ?? ""}
        renderItem={({ item, index }) => {
          const notification = getNotification(item);
          return (
            <TouchableOpacity
              style={{
                backgroundColor:
                  notification.status === NotificationStatus.Unread ? "#8A84E2" : "#B0B0E2",
                padding: 15,
                borderRadius: 15,
                marginTop: index != 0 ? 15 : 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
              }}
              onPress={() => {
                if (notification.status === NotificationStatus.Unread) {
                  (notifications.find((x) => x.id === item.id) as any).status = NotificationStatus.Read;
                  (users.find((x) => x.id === currentUser.id) as any).notifications = notifications;
                  currentUser.notifications = notifications;
                }
              }}
            >
              <Icon
                name={notification.icon}
                type={notification.type}
                color="#F9F8F8"
                size={30}
                style={{ marginRight: 10 }}
              />
              <View
                style={{
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "#F9F8F8",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {notification.senderName}
                </Text>
                <Text
                  style={{
                    color: "#F9F8F8",
                    fontSize: 18,
                  }}
                >
                  {notification.subtitle}
                </Text>
              </View>
              <Text
                style={{
                  color: "#F9F8F8",
                  fontSize: 12,
                  position: "absolute",
                  right: 0,
                  top: 0,
                  marginRight: 10,
                  marginTop: 10,
                }}
              >
                {notification.date}
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
