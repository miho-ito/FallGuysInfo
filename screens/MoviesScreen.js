import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { WebView } from "react-native-webview";

export default MoviesScreen = () => {
  return (
    <View style={{ height: 600 }}>
      <WebView
        style={styles.WebViewContainer}
        source={{ uri: "https://youtu.be/euD--wYsP9c" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: Platform.OS == "android" ? 20 : 0,
  },
});
