import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import AppStyles from "../styles/AppStyles";
import CustomButton from "./CustomButton";

export default function AddToDoModal(props) {
  let [todo, setTodo] = React.useState("");
  let [desc, setDesc] = React.useState("");
  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header}>Add ToDo</Text>
      <TextInput
        style={[AppStyles.textInput, AppStyles.darkTextInput]}
        placeholder="ToDo"
        value={todo}
        onChangeText={setTodo}
      />
      <TextInput
        style={[AppStyles.textInput, AppStyles.darkTextInput]}
        placeholder="Add Description"
        value={desc}
        onChangeText={setDesc}
      />
      <View
        style={[
          AppStyles.rowContainer,
          AppStyles.rightAligned,
          AppStyles.rightMargin,
        ]}>
        <CustomButton
          title="Cancel"
          onPress={props.onClose}
          style={AppStyles.button1}
        />
        <CustomButton
          title="OK"
          onPress={() => {
            props.addToDo(todo);
            setTodo("");
            props.onClose();
          }}
          style={AppStyles.buttonOk}
        />
      </View>
    </View>
  );
}
