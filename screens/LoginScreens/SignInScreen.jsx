import { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native';
import spaceTraders from '../../services/spaceTraders';

const SignInScreen = ({storeData}) => {
  const [text, onChangeText] = useState('');

  const handleLogin = async () => {
    try{
      const userProfile = await spaceTraders.getUserProfile(text);

      if (!userProfile.error) {
        storeData(text);
        alert(`User: ${userProfile.user.username}\nSigned in successfully`)
      }
      else {
        alert(`Invalid token`);
      }

    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textBold}>Please introduce your Token</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={onChangeText}
          value={text} 
        />
        <Pressable style={styles.loginBtn} onPress={() => handleLogin()}><Text>Login</Text></Pressable>
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
  loginBtn: {
    padding: 15,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    borderWidth: 1
  },
  textBold: {
    fontWeight: 'bold'
  }
});

export default SignInScreen;