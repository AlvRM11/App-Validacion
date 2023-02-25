import { View, Pressable, StyleSheet, Text } from "react-native";

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.btnContainer}>
          <Pressable style={styles.loginBtn} onPress={() => navigation.navigate('SignIn')}><Text>Login</Text></Pressable>
            <Pressable style={styles.registerBtn} onPress={() => navigation.navigate('SignUp')}><Text>Register</Text></Pressable>
          </View>
        </View>
      ); 
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    btnContainer: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: '25%',
      width: 300,
      height: 200
    },
    loginBtn: {
      padding: 15,
      backgroundColor: 'lightgreen',
      borderRadius: 10,
      borderWidth: 1
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

export default LoginScreen