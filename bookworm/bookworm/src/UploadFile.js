import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // You can perform upload logic here, e.g., send the file to a server using an API
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // Add your upload logic here
    } else {
      console.log("No file selected");
    }
  };

  return (
    <View style={styles.container}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={styles.appTitleTextContainer}>Upload</button>
    </View>
  );
};

export default FileUpload;

const styles = StyleSheet.create ({
    appTitleTextContainer: {
    color: "#15193c",
    textAlign: "center",
    fontSize: RFValue(20),
    fontFamily: "Bubblegum-Sans",
    fontColor:"#15193c",
    marginBottom: RFValue(1),
    marginRight: RFValue(20),
    marginLeft: RFValue(20),
    marginTop: RFValue(20),
  },
  container: {
    flex: 1,
    backgroundColor: "#E3E4FA",
  }
})

