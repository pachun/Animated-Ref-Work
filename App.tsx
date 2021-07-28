import { StatusBar } from "expo-status-bar"
import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

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
  return (
    <View style={styles.container}>
      <FlatList
        onScroll={event =>
          console.log("y position: " + event.nativeEvent.contentOffset.y)
        }
        scrollEventThrottle={16}
        data={data}
        renderItem={({ item: number }) => {
          return <Text style={styles.row}>{number}</Text>
        }}
      />
    </View>
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
})
