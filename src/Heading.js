import { TouchableNativeFeedback, View, Text } from "react-native";

export default function Heading() {
  const handleHeadingPress = () => console.log("Let's learn React Native");
  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        alignItems: "center",
        padding: 10,
      }}
    >
      {/* TouchableNativeFeedback - works on android only*/}

      <TouchableNativeFeedback>
        <Text
          style={{ fontSize: 25, color: "white", fontWeight: "bold" }}
          numberOfLines={1}
          onPress={handleHeadingPress}
        >
          React Native Tutorial
          {/* numberOfLines - Used to truncate the text to a certain number of lines */}
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. */}
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
}
