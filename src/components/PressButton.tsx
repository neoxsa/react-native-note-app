import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "@/constants/colors";

type ButtonProps = {
  action: () => void;
  label: string;
  isDisabled?: boolean;
};

const PressButton = ({ action, label, isDisabled }: ButtonProps) => {
  return (
    <Pressable onPress={action} disabled={isDisabled}>
      <Text style={[styles.button, { opacity: isDisabled ? 0.5 : 1 }]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default PressButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    color: "#000",
    marginRight: 12,
    marginTop: 12,
    fontWeight: 600,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.primary,
  },
});
