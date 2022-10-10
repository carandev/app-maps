import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const List = ({ points }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((point) => point.name)}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Button title="Cerrar" />
      </View>
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height,
  },
});
