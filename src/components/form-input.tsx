import { View, Text, TextInput, StyleSheet } from "react-native";

interface FormInputProps {
  label: string
  placeholder: string
  type?: 'default' | 'numeric' | 'email-address'
}

export function FormInput({ label, placeholder, type = 'default' }: FormInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  input: {
    backgroundColor: '#f4f4f4',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#f4f4f4',
    marginBottom: 10,
  }
})