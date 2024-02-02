import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Button,
  TextInput
} from "react-native";

import UploadFile from "./UploadFile";

export default class Upload extends Component
 {
   render(){
     return(
     <UploadFile/>
     )
   }

}


