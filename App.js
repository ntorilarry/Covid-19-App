import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./components/onboarding";

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});