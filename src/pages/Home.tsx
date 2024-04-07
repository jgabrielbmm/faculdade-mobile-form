import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import BackGround from "../components/back-ground";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function Home({ navigation }) {


  return (
    <View style={styles.container}>
      <BackGround />
      <ImageBackground
        source={require('../assets/taverna.jpg')}
        style={styles.imageBackground}
      >
        <View >
          <Text style={styles.secondaryText}>Vamos eliminar</Text>
          <Text style={styles.text}>Sauron</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Form')}
          >
            <Text style={styles.textButton}>Alistar-se</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View >
  )
}

const styles = StyleSheet.create({
  secondaryText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Georgia',
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    lineHeight: 15,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    lineHeight: 35,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CD853F',
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Georgia',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  imageBackground: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
})