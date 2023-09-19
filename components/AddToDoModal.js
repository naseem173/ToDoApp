import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import AppStyles from "../styles/AppStyles";
import CustomButton from "./CustomButton";

export default function AddToDoModal(props) {
  let [todo, setTodo] = React.useState("");
  let [description, setDescription] = React.useState("");
  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header}>{props.title}</Text>
      <Text style={AppStyles.description}>{props.description}</Text>
      <Text style={AppStyles.header}>Add ToDo</Text>
      <TextInput
        style={[AppStyles.textInput, AppStyles.darkTextInput]}
        placeholder="ToDo"
        value={todo}
        onChangeText={setTodo}
      />
      <TextInput
        style={[AppStyles.textInput, AppStyles.darkTextInput]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <View
        style={[
          AppStyles.rowContainer,
          AppStyles.rightAligned,
          AppStyles.rightMargin,
        ]}>
        <View style={AppStyles.buttonContainer}>
          <CustomButton
            title="Cancel"
            onPress={props.onClose}
            style={AppStyles.button1}
          />
        </View>
        <View style={AppStyles.buttonContainer}>
          <CustomButton
            title="OK"
            onPress={() => {
              props.addToDo({text:todo, description:description});
              setTodo("");
              setDescription("");
              props.onClose();
            }}
            style={AppStyles.buttonOk}
          />
        </View>
      </View>
    </View>
  );
}
