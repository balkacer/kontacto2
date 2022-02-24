import { Image } from "react-native";

export default function Flag(props: { country: string, flagWidth: string | number }) {
  const { country, flagWidth } = props;
  return (
    <Image
      source={{ uri: `https://flagcdn.com/h20/${country}.png` }}
      style={{
        width: flagWidth,
        height: flagWidth,
        borderColor: "#8A84E2",
        borderRadius: +flagWidth / 2,
      }}
    />
  );
}