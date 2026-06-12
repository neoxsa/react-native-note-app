import { colors } from "@/constants/colors";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NotesProvider } from "../../hooks/useNote";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <NotesProvider>
        <Stack
          screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.bgHead },
            headerTitleStyle: { color: colors.text },
            contentStyle: { backgroundColor: colors.bgBody },
          }}
        />
      </NotesProvider>
    </SafeAreaProvider>
  );
}
