import { colors } from "@/constants/colors";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.bgHead},
        headerTitleStyle: {color: colors.text},
        contentStyle: {backgroundColor: colors.bgBody}
      }}
    />
    </SafeAreaProvider>
  );
}
