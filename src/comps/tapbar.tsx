import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Icon } from "react-native-elements";
import Screens from "../utils/screens.enum";
import {
  Home,
  Profile,
  Groups,
  Security,
  Settings,
  Notifications,
  AddGroup,
  AddContact,
} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const defaultAvatar = "../../assets/default_user_avatar.png";

const tabs = [
  {
    title: Screens.Settings,
    icon: "settings",
    type: "feather",
  },
  {
    title: Screens.Groups,
    icon: "users",
    type: "feather",
  },
  {
    title: Screens.Home,
    icon: "home",
    type: "feather",
  },
  {
    title: Screens.Security,
    icon: "shield",
    type: "feather",
  },
];

export default function Tapbar(props: {
  user: any;
}) {
  const { user } = props;
  const { avatar } = user.user_info;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return route.name === "Profile" ? (
            <Image
              source={avatar ? { uri: avatar } : require(defaultAvatar)}
              resizeMode="cover"
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: color,
              }}
            />
          ) : (
            <Icon
              name={tabs.find((x) => x.title === route.name)?.icon as string}
              type="feather"
              color={color}
              size={28}
            />
          );
        },
        tabBarActiveTintColor: "#8A84E2",
        tabBarInactiveTintColor: "#020122",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginTop: 10,
          borderTopWidth: 0,
          backgroundColor: "#F9F8F8",
        },
      })}
    >
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Groups">
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainGroups" component={Groups} />
            <Stack.Screen name="AddGroup" component={AddGroup} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Home">
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainHome" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="AddContact" component={AddContact} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Security" component={Security} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}