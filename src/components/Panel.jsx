import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export const Panel = ({ onPressLeft, textLeft }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} />
      <Button title="Mostrar / Ocultar" />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
