import * as React from 'react';
import { useState, useEffect } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';



export default function App() {

  const [ binNumber, setBinNumber ] = useState(0)
  const [ decNumber, setDecNumber ] = useState(0)

  async function convertBinToDec(){
    let a = false
    for (let i = 0 ; i < binNumber.length; i++) {
      if( binNumber[i] > 1 ){
        a = true
      }
    }
    if(a){
      alert("Type 0 or 1")
    }else{
      console.log("convertendo")
      setDecNumber(parseInt( binNumber, 2 ).toString())
      console.log(decNumber)
    }
  
  }
  
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 50, textAlign: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>B2D</Text>
        <Text style={styles.description}>A binary to decimal converter</Text>
      </View>
      <Text style={{alignSelf: 'flex-start', left: 31}}>Binary Input:</Text>
      <TextInput style={styles.textInput}
        value={binNumber}
        keyboardType={"numeric"}
        onChangeText={value => {setBinNumber(value)}}
      ></TextInput>
      <Text style={{alignSelf: 'flex-start', left: 31}}>Decimal Result:</Text>
      <TextInput style={styles.textInput} editable={false} value={decNumber}></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => convertBinToDec()} >
        <Text style={{color: "white", fontFamily: "Roboto", }}>Converter</Text>
      </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderRadius: 10,
    margin: 5,
    width: 300, 
    height: 35,
    backgroundColor: "#c4c4c4",
    textAlign: 'center',
    color: "white",
    fontFamily: "Roboto",
    fontSize: 20,

  }, 
  button: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'orange',
    width: 150, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    color: "orange",
    fontFamily: "Roboto",
  },
  description:{
    fontFamily: "Roboto",
    fontSize: 15,
  }
});
