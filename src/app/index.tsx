import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import LinkButton from "@/components/LinkButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Stack.Screen
        options={{
          title: "Notes",
        }}
      />
      <LinkButton 
      route="/note/new" 
      label="Create Note" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
