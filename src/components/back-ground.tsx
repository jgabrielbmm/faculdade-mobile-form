import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function BackGround() {
  return (
    <LinearGradient
      colors={['rgba(105, 105, 105, 1)', 'rgba(139, 69, 19, 1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    />
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})