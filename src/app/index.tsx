import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import LinkButton from "@/components/LinkButton";
import { useNotes } from "../../hooks/useNote";
import { colors } from "@/constants/colors";

export default function Index() {
  const { notes } = useNotes();
  return (
    <View style={styles.container}>
      <StatusBar />
      <Stack.Screen
        options={{
          title: "Notes",
        }}
      />
      <LinkButton route="/note/new" label="Create Note" />

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style ={{ paddingHorizontal: 16 }}>
            <Text
              style={{
                marginVertical: 8,
                marginHorizontal: 12,
                padding: 12,
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 8,
                textAlignVertical: "top",
                color: colors.text,
                fontWeight: "bold",
                backgroundColor: colors.bgHead,
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
