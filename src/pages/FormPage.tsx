import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackGround from "../components/back-ground";
import { FormInput } from "../components/form-input";
import { SelectInput } from "../components/select-input";

const race = [
  { id: 1, value: "Humano" },
  { id: 2, value: "Elfo" },
  { id: 3, value: "Anões" },
  { id: 4, value: "Hobbits" },
]

export function FormPage() {
  return (
    <View style={styles.container}>
      <BackGround />
      <View style={styles.formContainer}>
        <FormInput label="Name" placeholder="Insira seu nome" />
        <FormInput label="Nome de Guerra" placeholder="Insira seu nome de guerra" />
        <FormInput label="Idade" placeholder="Insira sua idade" type="numeric" />
        <FormInput label="Arma" placeholder="Insira a arma que domina" />
        <View>
          <Text style={styles.label}>Raça</Text>
          <SelectInput data={race} onSelect={() => {}} />
        </View>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.textButton}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  formContainer: {
    flex: 1,
    marginTop: 50,
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CD853F',
    marginVertical: 40,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Georgia',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  label: {
    fontSize: 16,
    color: '#f4f4f4',
    marginBottom: 10,
  }
})