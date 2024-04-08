import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackGround from "../components/back-ground";
import { FormInput } from "../components/form-input";
import { SelectInput } from "../components/select-input";
import { useForm, Controller } from "react-hook-form"
import { useNavigation } from "@react-navigation/native";
import { FormScreenNavigationProp } from "../@types/pages";


const race = [
  { id: 1, value: "Humano" },
  { id: 2, value: "Elfo" },
  { id: 3, value: "Anão" },
  { id: 4, value: "Hobbit" },
]

export function FormPage() {
  const navigation = useNavigation<FormScreenNavigationProp>()
  const { control, handleSubmit, formState: { errors: any } } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    navigation.navigate('Confirmation', { name: data.name, race: data.race })
  }

  return (
    <View style={styles.container}>
      <BackGround />
      <View style={styles.formContainer}>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <FormInput
              label="Name"
              placeholder="Insira seu nome"
              onChangeInput={onChange}
              value={value}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <FormInput
              label="Nome de Guerra"
              placeholder="Insira seu nome de guerra"
              onChangeInput={onChange}
              value={value}
            />
          )}
          name="warName"
        />
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <FormInput
              label="Idade"
              placeholder="Insira sua idade"
              type="numeric"
              onChangeInput={onChange}
              value={value}
            />)}
          name="age"
        />
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <FormInput
              label="Arma"
              placeholder="Insira a arma que domina"
              onChangeInput={onChange}
              value={value}
            />)}
          name="weapon"
        />

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange } }) => (
            <View>
              <Text style={styles.label}>Raça</Text>
              <SelectInput
                data={race}
                onSelect={onChange}
              />
            </View>
          )}
          name="race"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
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