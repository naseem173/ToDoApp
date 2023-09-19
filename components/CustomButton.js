import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
