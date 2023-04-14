import { useState } from "react";
import { Pressable } from "react-native";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SearchLang() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibilty, setVisibility] = useState(false);
  const items = [
    { label: "Bengali", value: 0 },
    { label: "English", value: 1 },
    { label: "Hindi", value: 2 },
    { label: "Kannada", value: 3 },
    { label: "Malayalam", value: 4 },
    { label: "Tamil", value: 5 },
    { label: "Telugu", value: 6 },
  ];
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().startsWith(searchTerm)
  );
  const handleVisibility = (trueOrFalse) => {
    setVisibility(trueOrFalse);
  };
  return (
    <View id="searchLang" style={{ paddingTop: 40 }}>
      {/* <Pressable onPress={() => setVisibility(!visibilty)}> */}
      <View
        // onPress={() => setVisibility(!visibilty)}
        // pointerEvents="none"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <TextInput
          placeholderTextColor={"green"}
          placeholder="search..."
          style={{
            backgroundColor: "black",
            color: "blue",
            fontSize: 25,
            flex: 1,
          }}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          onPressIn={() => setVisibility(!visibilty)}
        ></TextInput>
        <Button
          title="v"
          color="blue"
          onPress={() => setVisibility(!visibilty)}
        />
      </View>
      {/* </Pressable> */}
      {visibilty && (
        <View style={{ backgroundColor: "red" }}>
          {/* filteredItems.length > 0 && */}
          {filteredItems.map((item) => (
            <Text key={item.value} style={{ color: "white", fontSize: 30 }}>
              {item.label}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}
