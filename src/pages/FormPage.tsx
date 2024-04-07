import { View, Text } from "react-native";
import BackGround from "../components/back-ground";
import { FormInput } from "../components/form-input";

export function FormPage() {
  return (
    <View>
      <BackGround />
      <FormInput label="Name" placeholder="Name" />
    </View>
  )
}