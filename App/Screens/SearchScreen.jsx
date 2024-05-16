import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import SearchScreenSwiper from "./components/SearchScreenSwiper";
import ScreenSwiper from "./search/ScreenSwiper";

export default function SearchScreen() {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={{ alignItems: "center" }}>
      <View style={style.topContainer}>
        <ImageBackground
          imageStyle={{
            // width: "100%",
            // height: "100%",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            opacity: 0.7,
          }}
          style={{
            flex: 1,
          }}
          source={require("../../assets/pancakes.jpg")}
        >
          {/* {" "} */}
          <ScreenSwiper />
        </ImageBackground>
      </View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginLeft: -200,
          marginTop: 15,
        }}
      >
        Suggestions
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  topContainer: {
    // flex: 1,
    width: "100%",
    height: "70%",
    backgroundColor: Colors.BLACK,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // marginTop: -20,
    // padding: 20,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderBlockColor:
  },
});
