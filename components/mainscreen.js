import { StyleSheet, View, SafeAreaView, Image, Button } from "react-native";

import { Text } from "react-native-elements";

export default function Mainscreen() {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            color: "#2A76E6",
            textAlign: "center",
            fontSize: 38,
            marginTop: 40
          }}
          h1
        >
          COVID-19
        </Text>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
