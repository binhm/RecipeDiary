import { View, Text } from "react-native";
import React from "react";

export default function SearchScreenSwiper() {
  return (
    <View>
      <Text>SearchScreenSwiper</Text>
    </View>
  );
}
// import { View, StyleSheet, Text, TextInput } from "react-native";
// import React, { useState, useEffect } from "react";
// import Colors from "../../../Utils/Colors";
// import Swiper from "react-native-swiper";

// export default function SearchScreenSwiper() {
//   const searchText = ["Recipes", "Ingredients"];
//   const [textIndex, setSearchIndex] = useState(0);
//   const [value, onChangeText] = React.useState("");
//   useEffect(() => {
//     console.log("current index=", textIndex);
//   }, [textIndex]);
//   return (
//     <View style={styles.container}>
//       <Swiper
//         style={styles.wrapper}
//         // height={240}
//         onMomentumScrollEnd={(e, state, context) => {
//           console.log("index:", state.index);
//           setSearchIndex(state.index);
//         }}
//         dot={<View style={styles.dot} />}
//         activeDot={<View style={styles.activeDot} />}
//         paginationStyle={{
//           bottom: 5,
//           left: null,
//           right: 10,
//         }}
//         loop={false}
//       >
//         {searchText.map((text) => (
//           <View style={styles.slide}>
//             <Text style={styles.swipeText} numberOfLines={1}>
//               Search By {text}
//             </Text>
//           </View>
//         ))}
//       </Swiper>
//       <View>
//         <Text
//           style={{ fontSize: 26, color: Colors.WHITE, textAlign: "center" }}
//         >
//           {" "}
//           Search by
//           <Text style={{ fontWeight: "bold" }}>
//             {" "}
//             {searchText.at(textIndex)}{" "}
//           </Text>
//         </Text>
//         <TextInput
//           editable
//           // multiline
//           // numberOfLines={4}
//           // maxLength={40}
//           onChangeText={(text) => onChangeText(text)}
//           value={value}
//           // style={{padding: 10, backgroundColor: Colors.WHITE}}
//           placeholder="Search"
//           style={styles.textInput}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   wrapper: {
//     // flex: 1,
//     backgroundColor: "transparent",
//   },

//   slide: {
//     // flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: "transparent",
//     backgroundColor: "rgba(0,0,0,.2)",
//     padding: 10,
//     marginLeft: 100,
//     marginTop: 70,
//     // marginRight: 30,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   dot: {
//     backgroundColor: "rgba(0,0,0,.2)",
//     width: 5,
//     height: 5,
//     borderRadius: 4,
//     marginLeft: 3,
//     marginRight: 3,
//     marginTop: 3,
//     marginBottom: 3,
//   },
//   activeDot: {
//     backgroundColor: Colors.GREY,
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginLeft: 3,
//     marginRight: 3,
//     marginTop: 3,
//     marginBottom: 3,
//   },
//   swipeText: {},
//   text: {
//     color: "#fff",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   textInput: {
//     backgroundColor: Colors.WHITE,
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     // borderBlockColor:
//   },
// });
