import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { StyleSheet, TouchableOpacity } from "react-native";
import GoogleIcon from "../../assets/icons/google.svg";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleButton() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <TouchableOpacity disabled={!request}
    onPress={() => {
      promptAsync();
    }} style={styles.signupOptionsButton}>
            <GoogleIcon height={30} width={30} />
          </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      flexDirection: "column",
      justifyContent: "space-evenly",
      flex: 1,
    },
    signupOptions: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    signupOptionsButton: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 15,
      marginBottom: 10,
    },
    text: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 25,
    },
    signupButton: {
      padding: 10,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 20,
    },
  });
  