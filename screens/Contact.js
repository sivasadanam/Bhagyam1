
import React from "react";
import { View, StyleSheet, Text ,Button} from "react-native";

const Contact = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the contact screen</Text>

      <Button     title="Go to Home Screen"
                    onPress={() => navigation.navigate("Home")} 
                    style={styles.center}
                    />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;