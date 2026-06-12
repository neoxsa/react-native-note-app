import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import LinkButton from "@/components/LinkButton";
import { useNotes } from "../../hooks/useNote";
import { colors } from "@/constants/colors";
import { NoteCard } from "@/components/NoteCard";

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
        contentContainerStyle={{ padding: 16, gap: 12 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         <NoteCard 
          key={item.id}
          item={item}
          onTogglePin={() => true}
          onRemove={() => true}
         />
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
