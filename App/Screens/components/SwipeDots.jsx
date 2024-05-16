import { View, Text, Animated, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";

export default function SwipeDots({
  data,
  scrollX,
  dotSize,
  width,
  dotStyle,
  containerStyle,
  slidingIndicatorStyle,
}) {
  const defaultSetting = {
    dotSize: dotSize || 12,
    marginHorizontal: 5,
  };
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [
      -defaultSetting.dotSize + defaultSetting.marginHorizontal * 2,
      0,
      defaultSetting.dotSize + defaultSetting.marginHorizontal * 2,
    ],
  });
  return (
    <View
      style={[
        { height: defaultSetting.dotSize },
        styles.containerStyle,
        containerStyle,
      ]}
    >
      <Animated.View
        style={[
          {
            width: defaultSetting.dotSize,
            height: defaultSetting.dotSize,
            borderRadius: defaultSetting.dotSize / 2,
          },
          styles.slidingIndicatorStyle,
          {
            position: "absolute",
            marginHorizontal: defaultSetting.marginHorizontal,
            transform: [{ translateX }],
          },
          slidingIndicatorStyle,
        ]}
      />
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              {
                width: defaultSetting.dotSize,
                height: defaultSetting.dotSize,
                marginHorizontal: defaultSetting.marginHorizontal,
                borderRadius: defaultSetting.dotSize / 2,
              },
              styles.dotStyle,
              dotStyle,
            ]}
          ></View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    position: "absolute",
    bottom: 65,
    right: 15,
    // margin: 100,
    // backgroundColor: Colors.WHITE,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotStyle: {
    backgroundColor: Colors.PINK,
    opacity: 0.4,
  },
  slidingIndicatorStyle: {
    backgroundColor: Colors.PINK,
    zIndex: 99,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
