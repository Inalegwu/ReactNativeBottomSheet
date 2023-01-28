import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetRefProps } from "./src/BottomSheet";

export default function App() {
  const ref = useRef<BottomSheetRefProps>();
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-400);
    }
  }, []);

  const closeBottomSheet = useCallback(() => {
    ref?.current?.scrollTo(0);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <TouchableOpacity onPress={onPress} style={styles.button} />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: "purple" }} />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 60,
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 30,
    opacity: 0.6,
  },
  exit: {
    height: 30,
    width: 30,
    borderRadius: 15,
    padding: 10,
    alignSelf: "flex-end",
    marginHorizontal: 5,
    opacity: 0.7,
    backgroundColor: "white",
    marginVertical: 10,
  },
});
