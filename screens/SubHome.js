import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const SubHome = ({ navigation }) => {
  return (
    <View >
        
        <Text style={styles.textstyle}> Sub Page Bhagyam App </Text>
       
        <Button     title="Go to About Screen"
                    onPress={() => navigation.navigate("SubAbout")} 
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
  textstyle: {
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
    fontSize: 22,
  },


});

export default SubHome;