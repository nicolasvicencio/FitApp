import {
  View,
  Text,
  StyleSheet,
  Modal,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import global from "../../styles/Styles";
import { COLORS } from "../../utils/colors";

type Props = {
  isActive: boolean;
  setIsActive: Function;
  data: any;
  setSeries: Function;
  series: number;
};

const ModalComponent = ({
  isActive,
  setIsActive,
  data,
  setSeries,
  series,
}: Props) => {
  const handleIncrement = () => {
    setSeries((series: number) => series + 1);
  };
  const handleDecrement = () => {
    if (series <= 0) return;
    setSeries((series: number) => series - 1);
  };

  const handleAdd = () => {
    const draft = {
      exercise: data.name,
      series: series,
    };
    console.log(draft);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isActive}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setIsActive(!isActive);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={global.title}>Add Exercise</Text>
            <View style={global.inputContainer}>
              <Text style={global.label}>{data.name}</Text>
            </View>

            <Text style={global.label}>Series</Text>
            <View style={global.controlContainer}>
              <TouchableOpacity
                onPress={handleDecrement}
                style={[global.squareButton, global.borderedLeft]}
              >
                <Text style={global.squareText}>-</Text>
              </TouchableOpacity>
              <View style={global.squareInput}>
                <Text style={global.squareInputText}>{series}</Text>
              </View>
              <TouchableOpacity
                style={[global.squareButton, global.borderedRight]}
                onPress={handleIncrement}
              >
                <Text style={global.squareText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={global.button} onPress={handleAdd}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsActive(!isActive)}
            >
              <Text style={styles.textStyle}>×</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLORS.primary,
  },
  buttonClose: {
    backgroundColor: "#ccc",
    position: "absolute",
    top: -10,
    right: -10,
    borderRadius: 100,
    paddingHorizontal: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonContainer: {
    padding: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
