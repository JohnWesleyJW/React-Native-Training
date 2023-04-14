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

export default function SearchFlatList() {
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
  //   const filteredItems = items.filter((item) =>
  //     item.label.toLowerCase().startsWith(searchTerm.toLowerCase())
  //   );
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  const handleVisibility = (trueOrFalse) => {
    setVisibility(trueOrFalse);
  };
  return (
    <View style={{ paddingTop: 50 }}>
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
      {visibilty && (
        <View
          style={{
            position: "relative",
            // top: 30,
            zindex: 999,
          }}
        >
          <FlatList
            style={{
              backgroundColor: "red",
              //position: "relative",
              // top: 30,
              // zindex: 999,
            }}
            // data={filteredItems.length > 0 ? filteredItems : items}
            data={filteredItems}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item, index }) => (
              <TouchableWithoutFeedback
              // onPress={() => handleValueChange(item.label, index)}
              >
                <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
                  {item.label}
                </Text>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      )}
      <View
        style={{
          position: "relative",
          zindex: 1,
          height: 300,
          width: 300,
          backgroundColor: "green",
        }}
      ></View>
    </View>
  );
}
