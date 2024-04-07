import { StyleSheet, Text, View } from 'react-native';
import { FormInput } from './src/components/form-input';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View
      style={styles.mainContainer}
    >
      <LinearGradient
        colors={['rgba(0,0,0,1)', 'rgba(81, 22, 116, 0.8)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
      <FormInput label='Nome' placeholder='Insira seu nome' />
      <FormInput label='E-mail' placeholder='Insira seu email' type='email-address' />
      <FormInput label='Cidade' placeholder='Insira sua cidade' type='numeric' />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {

    paddingHorizontal: 20,
    height: '100%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})
