import { Image, TouchableOpacity } from "react-native";

export default function ReactNativeBenefits() {
  return (
    <TouchableOpacity onPress={() => console.log("picsum image tapped")}>
      <Image
        // blurRadius={10}
        fadeDuration={1000}
        source={{
          width: 430,
          height: 300,
          uri: "https://www.aceinfoway.com/blog/wp-content/uploads/2022/04/Factors-to-keep-in-mind-while-choosing-a-framework.jpg",
        }}
      />
    </TouchableOpacity>
  );
}
