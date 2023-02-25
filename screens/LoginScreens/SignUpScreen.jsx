import { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native';
import spaceTraders from '../../services/spaceTraders';

const SignUpScreen = ({storeData}) => {
  const [text, onChangeText] = useState('');

  const handleRegister = async () => {
    try{
      const newUser = await spaceTraders.setNewUser(text);

      if (!newUser.error) {
        storeData(newUser.token);
        alert(`User: ${newUser.user.username}\n\nToken: ${newUser.token}\n\nYou signed up successfully`)
      }
      else {
        alert(`This user is already registered`);
      }

    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textBold}>Please, select your Nickname</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={onChangeText}
          value={text} 
        />
        <Pressable style={styles.registerBtn} onPress={() => handleRegister()}><Text>Register</Text></Pressable>
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '25%',
    width: 300,
    height: 200
  },
  inputContainer: {
    width: '75%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    padding: 3
  },
  registerBtn: {
    padding: 15,
    backgroundColor: 'salmon',
    borderRadius: 10,
    borderWidth: 1
  },
  textBold: {
    fontWeight: 'bold'
  }
});

export default SignUpScreen;