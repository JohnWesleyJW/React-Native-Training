//import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert, //Alert is not a visual component, it is an API,
  Platform, //Platform is a module,
  StatusBar,
  Dimensions, //StatusBar is an API
  useWindowDimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
//--------------------------------------------------------------------

import SearchLang from "./src/SearchLang";
import Heading from "./src/Heading";
import ReactLogo from "./src/ReactLogo";
import ReactNativeBenefits from "./src/ReactNativeBenefits";
import AlertBox from "./src/AlertBox";
import SearchFlatList from "./src/SearchFlatList";
// import FlexBoxTutorial from "./src/FlexBoxTutorial";

//--------------------------------------------------------------------

//CORE COMPONENTS & APIS
// View, Text, Image, Button, Touchables, Alert

//<View></View> is like "div" in html
//<View>  will map to UIView in IOS and to AndroidView in android

//--------------------------------------------------------------------
// Density-independent Pixels
// Physical Pixels = DIPs * scale factor

//--------------------------------------------------------------------

export default function App() {
  const { landscape } = useDeviceOrientation();

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  // console.log(useDeviceOrientation());
  // console.log(useWindowDimensions().height);

  //Dimensions API gets the height/width of the device
  // console.log("using Dimensions API: ");
  // console.log(Dimensions.get("screen"));
  // console.log("---------");
  //useDimensions hook gets the height/width of the device with respect to the orientation
  //useDimensions has been deprecated
  // console.log("using useDimensions hook: ");
  // console.log(useDimensions());
  // consolbe.log("-----------");
  return (
    // <SearchLang />
    <SearchFlatList />
    //---------------------------------------------------------------------------------

    // <View
    //   id="mainView"
    //   // style={[styles.container, { width: windowWidth, height: windowHeight }]}
    //   style={styles.container}
    // >
    //   <Heading />
    //   <ReactLogo />
    //   <AlertBox />
    //   <ReactNativeBenefits />
    // </View>

    //---------------------------------------------------------------------------------

    // <View id="flexBox" style={styles.container}>
    //   <View style={{ backgroundColor: "red", flex: 2 }} />
    //   <View style={{ backgroundColor: "green", flex: 1 }} />
    //   <View style={{ backgroundColor: "blue", flex: 1 }} />
    // </View>

    //---------------------------------------------------------------------------------

    // <View
    //   id="Flexbox_Align_Justify"
    //   style={[
    //     styles.container,
    //     {
    //       flexDirection: "row", // now main axis is horzizontal
    //       justifyContent: "center", //for main axis
    //       alignItems: "center", //for secondary axis
    //     },
    //   ]}
    // >
    //   {/* default flexDirection is column in react native */}
    //   <View
    //     style={{
    //       backgroundColor: "red",
    //       height: 100,
    //       width: 100,
    //       alignSelf: "center",
    //     }}
    //   />
    //   <View style={{ backgroundColor: "green", height: 200, width: 100 }} />
    //   <View style={{ backgroundColor: "blue", height: 300, width: 100 }} />
    // </View>

    //---------------------------------------------------------------------------------

    // <View
    //   id="Flexbox_wrap_alignContent"
    //   style={[
    //     styles.container,
    //     {
    //       backgroundColor: "#fff",
    //       flex: 1,
    //       flexDirection: "row", // now main axis is horzizontal
    //       justifyContent: "center", //for main axis
    //       alignItems: "center", //for secondary axis
    //       flexWrap: "wrap",
    //       //when wrap is enabled, alignItems behaves differently
    //       //it aligns Items within each line
    //       alignContent: "center",
    //       //alignContent affects the entire content
    //       //alignContent works when wrapping is enabled
    //       //otherwise use alignItems
    //     },
    //   ]}
    // >
    //   {/* default flexDirection is column in react native */}
    //   <View style={{ backgroundColor: "blue", height: 300, width: 100 }} />
    //   <View style={{ backgroundColor: "yellow", height: 100, width: 100 }} />
    //   <View style={{ backgroundColor: "orange", height: 100, width: 100 }} />
    //   <View style={{ backgroundColor: "grey", height: 100, width: 100 }} />
    //   <View style={{ backgroundColor: "green", height: 100, width: 100 }} />
    // </View>

    //---------------------------------------------------------------------------------

    // <View
    //   id="Flexbox_Basis_Grow_Shrink"
    //   style={[
    //     styles.container,
    //     {
    //       flexDirection: "row", // now main axis is horzizontal
    //       justifyContent: "center", //for main axis
    //       alignItems: "center", //for secondary axis
    //     },
    //   ]}
    // >
    //   {/* flexBasis - sets the size of an item along the primary axis*/}
    //   <View
    //     style={{
    //       flexBasis: 300, //width or height
    //       //here primary axis is horizontal(flex - row)5
    //       //flexBasis acts like width
    //       // flexGrow: 1, //same as flex:1

    //       flexShrink: 1, //same as flex: -1
    //       backgroundColor: "blue",
    //       height: 100,
    //       //width: 100,
    //     }}
    //   />
    //   <View style={{ backgroundColor: "yellow", height: 100, width: 100 }} />
    //   <View style={{ backgroundColor: "orange", height: 100, width: 100 }} />
    // </View>

    //---------------------------------------------------------------------------------

    // <View
    //   id="Positioning"
    //   style={[
    //     styles.container,
    //     {
    //       flexDirection: "row", // now main axis is horzizontal
    //       justifyContent: "center", //for main axis
    //       alignItems: "flex-start", //for secondary axis
    //     },
    //   ]}
    // >
    //   {/* flexBasis - sets the size of an item along the primary axis*/}
    //   <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       height: 70,
    //       width: 70,
    //     }}
    //   />
    //   <View
    //     style={{
    //       position: "absolute",
    //       //positions  relatively to parent component
    //       top: 100,
    //       left: 20,
    //       backgroundColor: "gold",
    //       height: 70,
    //       width: 70,
    //     }}
    //   />
    //   <View style={{ backgroundColor: "tomato", height: 70, width: 70 }} />
    //   <View
    //     style={{
    //       //postion: "relative" //it is default
    //       //positions  relatively to current/natural position
    //       top: 20,
    //       backgroundColor: "green",
    //       height: 70,
    //       width: 70,
    //     }}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: Platform.OS === "android" ? "white" : "aqua",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
