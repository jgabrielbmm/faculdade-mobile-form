import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ConfirmationScreenNavigationProp, ConfirmationScreenProps } from "../@types/pages";
import BackGround from "../components/back-ground";

export function Confirmation() {
  const router = useRoute()
  const navigation = useNavigation<ConfirmationScreenNavigationProp>()
  const { name } = router.params as ConfirmationScreenNavigationProp
  return (
    <View style={styles.messageContainer}>
      <BackGround />
      <Text style={styles.text}>Te vejo na guerra Lord {name} </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })}
      >
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>
    </View >
  )
}


const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    lineHeight: 16,
    marginBottom: 10,
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
})