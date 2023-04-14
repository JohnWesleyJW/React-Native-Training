import {
  Image,
  Platform,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from "react-native";

export default function ReactLogo() {
  return (
    <TouchableHighlight onPress={() => console.log("React icon is beautiful")}>
      <Image
        source={require("../assets/react-logo.png")}
        style={styles.reactLogoStyle}
      />
    </TouchableHighlight>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  reactLogoStyle: {
    width: windowWidth,
    height: 150,
  },
});
