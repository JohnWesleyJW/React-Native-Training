import { Alert, Button, SafeAreaView } from "react-native";

export default function AlertBox() {
  return (
    <SafeAreaView>
      <Button
        title="Click Alert.alert"
        color="green"
        //onPress={() => alert("button clicked")}
        onPress={() =>
          Alert.alert("myTitle", "myMessage", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("no") },
          ])
        }
      />
      {/* Alert.prompt is deprecated now 
  works only in IOS*/}
      {/* <Button
    title="Click Alert.prompt"
    onPress={() =>
      Alert.prompt("MyTitle", "Enter your name", (text) =>
        console.log(text)
      )
    }
  /> */}
    </SafeAreaView>
  );
}
