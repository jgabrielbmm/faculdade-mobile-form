import { View, Text, TextInput, StyleSheet } from "react-native";

export function FormInput() {
  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="digite seu nome"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
})