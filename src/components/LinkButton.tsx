import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { colors } from "@/constants/colors";

type ButtonProps = {
  route: string;
  label: string;
};

const LinkButton = ({ route, label }: ButtonProps) => {
  return (
    <Link href={route} asChild>
      <Text style={styles.button}>{label}</Text>
    </Link>
  );
}

export default LinkButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    color: colors.textSecondary,
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
