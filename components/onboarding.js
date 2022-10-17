import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

export default function Onboarding() {
  return (
    <SafeAreaView>
      <View style={styles.onboardContainer}>
        <View style={styles.loadingIcon}>
          <Image
            style={{
              width: 250,
              height: 250,
            }}
            source={require("../assets/Group48.png")}
          />
        </View>
        <View style={styles.learnMore}>
          <Button
            title={"Learn More"}
            accessibilityLabel="Learn more about this purple button"
            color={"#F31801"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  onboardContainer: {
    backgroundColor: "#111A46",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  loadingIcon: {},
  learnMore: {
    marginTop: 150,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
    backgroundColor: "white",
    overflow: "hidden",
    marginBottom: 10,
    width: 250,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "red",
  },
});
