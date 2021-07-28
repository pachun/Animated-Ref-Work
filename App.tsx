import React from "react"
import { Animated, FlatList, StyleSheet, Text, View } from "react-native"

const data = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
]

export default function App() {
  const scrollPositionRef = React.useRef(new Animated.Value(0)).current
  const headerOpacity = scrollPositionRef.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1.0],
    extrapolate: "clamp",
  })

  return (
    <View style={styles.container}>
      <Header headerOpacity={headerOpacity} />
      <Scroller
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollPositionRef } } }],
          { useNativeDriver: true },
        )}
      />
    </View>
  )
}

const Header = ({ headerOpacity }: { headerOpacity: any }) => {
  return (
    <Animated.View style={[styles.headerContainer, { opacity: headerOpacity }]}>
      <Text style={styles.header}>HEADER</Text>
    </Animated.View>
  )
}

const Scroller = ({ onScroll }: { onScroll: () => void }) => {
  return (
    <Animated.FlatList
      onScroll={onScroll}
      scrollEventThrottle={16}
      data={data}
      renderItem={({ item: number }) => {
        return <Text style={styles.row}>{number}</Text>
      }}
      keyExtractor={item => item.toString()}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  row: {
    textAlign: "center",
    padding: 20,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#000",
  },
  headerContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f00",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
})
