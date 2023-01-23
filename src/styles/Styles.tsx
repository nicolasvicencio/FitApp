import {  Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../utils/colors";

const global = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    right: 15,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 60
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
    height: '93%' ,
    width: "100%",
    position: "relative",

  },
  background: {
    height: 500,
    width: "100%",
  },
  shadow: {
    shadowColor: "#999",
    shadowOffset: { width: 10, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",

    color: "gray",
  },
  text: {
    color: "#585858",
    marginVertical: 5,
  },
  inputContainer: {
    margin: 10,
  },
  label: {
    fontSize: 18,
    color: "#134848",
    fontWeight: "500",
    marginVertical: 3,
    marginTop: 10,
  },
  input: {
    borderColor: '#888',
    borderWidth: 2,
    width: "100%",
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'white',
    width: "100%",
    borderRadius: 10,
    marginVertical: 5,
    padding: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: '#333',
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    textAlign: "center",
    paddingBottom: 5,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: COLORS.text,
  },
  button: {
    height: 45,
    borderRadius: 10,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  flotantButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  flotantButtonText: {
    fontSize: 48,
    color: "white",
  },
  listItem: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "center",
    paddingTop: 10,
    fontSize: 18,
  },
  cardImageContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
  cardImage: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#eee",
    objectFit: "contain",
  },
  squareButton: {
    height: 50,
    width: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  squareInput: {
    height: 50,
    width: 50,
    borderWidth: 0.1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  squareInputText: {
    fontSize: 24,
    fontWeight: "600",
    color: "gray",
  },
  squareText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  controlContainer: {
    flexDirection: "row",
    margin: 20,
  },
  borderedRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  borderedLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

});

export default global;
