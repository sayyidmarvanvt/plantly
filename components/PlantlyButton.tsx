import { theme } from "@/theme";
import { StyleSheet, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";

type Props = {
  title: string;
  onPress: () => void;
};

export function PlantlyButton({ title, onPress }: Props) {
  const handlePressed = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    onPress();
  };
  return (
    <Pressable
      onPress={handlePressed}
      style={({ pressed }) =>
        pressed ? [styles.button, styles.buttonPressed] : styles.button
      }
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colorGreen,
  },
  buttonPressed: {
    backgroundColor: theme.colorLeafyGreen,
  },
});
