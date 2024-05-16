import {
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
  Animated,
  TextInput,
} from "react-native";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Colors from "../../../Utils/Colors";
import SwipeDots from "../components/SwipeDots";

export default function ScreenSwiper() {
  const flatListRef = useRef(null);
  const { width } = Dimensions.get("window");

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [searchText, setSearchText] = useState("");
  const data = [
    {
      id: 0,
      swipeText: "< Swipe to Search By Recipes ",
      searchText: "Search By Ingredients",
    },
    {
      id: 1,
      swipeText: "Swipe to Search Ingredients >",
      searchText: "Search By Recipes",
    },
  ];
  const onScroll = useCallback(({ viewableItems }) => {
    if (viewableItems.length === 1) {
      setCurrentSectionIndex(viewableItems[0].index);
    }
    console.log("currentSectionIndex:", viewableItems);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <View
        style={[styles.card, { width: 275, marginLeft: 100, marginRight: 15 }]}
      >
        <Text style={styles.cardItem}>{item.swipeText}</Text>
      </View>
    ),
    []
  );

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.mainContainer}>
      <View>
        <FlatList
          ref={flatListRef} // Reference to list. Used to scroll to specific items.
          horizontal
          pagingEnabled // Cause snapping to items
          //   scrollEnabled={false}
          data={data}
          showsHorizontalScrollIndicator={false}
          onLayout={() => flatListRef.current.scrollToEnd()}
          onContentSizeChange={() => flatListRef.current.scrollToEnd()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          renderItem={renderItem}
          onViewableItemsChanged={onScroll} // Calling with anonymous function here causes issues
          decelerationRate={"normal"}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 90,
          }}
        />
      </View>
      <SwipeDots data={data} scrollX={scrollX} width={width} />

      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>
          {" "}
          {data.at(currentSectionIndex).searchText}
        </Text>
        <TextInput
          editable
          // multiline
          // numberOfLines={4}
          // maxLength={40}
          onChangeText={(text) => setSearchText(text)}
          //   value={value}
          style={styles.textInput}
          placeholder="Search"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // margin: 5,
  },
  card: {
    backgroundColor: Colors.WHITE,
    opacity: 0.8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: "10%",
    marginRight: 10,
    padding: 5,
  },
  cardItem: {
    textAlign: "center",
  },
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
  searchContainer: {
    bottom: -120,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 15,
  },
  searchText: {
    color: Colors.WHITE,
    fontSize: 25,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    margin: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
});
