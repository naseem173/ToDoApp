import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Button, ImageBackground } from "react-native";
import AppStyles from "./styles/AppStyles";
import React from "react";
import InlineTextButton from "./components/InlineTextButton";

export default function App() {
  const background = require("./assets/background.jpg");

  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");

  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <View style={AppStyles.backgroundColor}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          placeholder="Username"
          placeholderTextColor="#BEBEBE"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          placeholder="Password"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton text="Sign Up" />
        </View>
        <Button title="Login"/>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
