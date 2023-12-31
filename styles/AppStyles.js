import { StyleSheet } from "react-native";

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  noPadding: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },
  fillSpace: {
    flex: 1,
  },
  rightAligned: {
    justifyContent: "flex-end",
  },
  topMargin: {
    marginTop: 40,
  },
  bottomMargin: {
    marginBottom: 16,
  },
  rightMargin: {
    marginRight: 16,
  },
  leftMargin: {
    marginLeft: 16,
  },
  backgroundCover: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    opacity: 0.7,
    padding: 16,
  },
  lightText: {
    color: "#fff",
  },
  errorText: {
    color: "#ff0000",
  },
  header: {
    fontSize: 20,
    alignSelf: "center",
  },
  textInput: {
    alignSelf: "stretch",
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  lightTextInput: {
    borderBottomColor: "#ffffff",
  },
  darkTextInput: {
    borderBottomColor: "#000000",
  },
  inlineTextButton: {
    color: "#87F1FF",
  },
  pressedInlineTextButton: {
    color: "#87F1FF",
    opacity: 0.6,
  },

  button1: {
    backgroundColor: "#FF7547",
    height: "auto",
    width: "auto",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  buttonOk: {
    backgroundColor: "#688cde",
    height: "auto",
    width: "auto",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },

  buttonLogin: {
    backgroundColor: "#498bc1",
    height: "auto",
    width: "auto",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonReset: {
    backgroundColor: "#d1495b",
    height: "auto",
    width: "auto",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonManage: {
    backgroundColor: "#5899E2",
    height: "auto",
    width: 200,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
  },
  buttonContainer: {
    marginRight: 16,
  },
  todoText: {
    fontWeight: "bold",
    fontSize: 22,
    marginHorizontal: 20,
  },
  todoDescription: {
    backgroundColor: "#E7ECEF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 5,
    marginLeft:35,
  },
});
