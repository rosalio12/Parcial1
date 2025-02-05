import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button} from 'react-native';



export default function App() {
  const [text,setText] = useState('');
  const [ID,setID] = useState('');
  const [Name,setName] = useState('');
  const [Phone,setPhone] = useState('');
  const [Email,setEmail] = useState('');
  

  const [displayText,setDisplayText]=useState('');
  const [showData, setShowData] = useState(false);
  const [userData, setUserData] = useState({});

  const onPress =()=>{
    setUserData({
      id: ID,
      name: Name,
      email: Email,
      phone: Phone
    });
    setShowData(true);
    setText('');
    setID('');
    setName('');
    setPhone('');
    setEmail('');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Welcome!</Text>
     
      <Image source={require('../Examen/assets/Logo.svg')} style={styles.image} />
       
       <TextInput
      style={styles.input}
      placeholder="Enter your ID"
       onChangeText={setID}
       value={ID}
       />
   
      <TextInput
      style={styles.input}
      placeholder="Enter your name"
      onChangeText={setName}
      value={Name}
      />
      <TextInput 
      style={styles.input}
      placeholder="Enter your email"
      onChangeText={setEmail}
      value={Email}
      
      />
      <TextInput
      style={styles.input}
      placeholder="Enter your Phone"
         onChangeText={setPhone}
       value={Phone}
      />
      <Button title="Submit" onPress={onPress} />

      {showData && (
        <View>
          <Text style= {styles.resultText}>ID: {userData.id}</Text>
          <Text style= {styles.resultText}>Name: {userData.name}</Text>
          <Text style= {styles.resultText}>Email: {userData.email}</Text>  
          <Text style= {styles.resultText}>Phone: {userData.phone}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  
  image: {

    width: 100,
    height:120,
  },
  input: {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    
  },
  h2: {
    fontSize: '50px',
    textAlign: 'center',
    margin: 10,
    color: 'black'


  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container :{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black',
    borderWidth: 2,
    padding:20,
    borderRadius:10,
  }

  
 

});