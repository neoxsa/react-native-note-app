import { colors } from "@/constants/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Note } from "../../types";

export const NoteCard = ({
  item,
  onTogglePin,
  onRemove,
}: {
  item: Note;
  onTogglePin: (id: string) => void;
  onRemove: (id: string) => void;
}) => {
  const onEdit = () => {};

  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: colors.bgHead,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: colors.primary,
        opacity: pressed ? 0.9 : 1,
        padding: 14,
      })}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.ButtonsView}>
          <Pressable onPress={() => onTogglePin(item.id)}>
            <Text style={{ color: colors.primary, fontSize: 12 }}>Pin</Text>
          </Pressable>
          <Pressable onPress={onEdit}>
            <Text style={{ color: colors.primary, fontSize: 12 }}>Edit</Text>
          </Pressable>
          <Pressable onPress={() => onRemove(item.id)}>
            <Text style={{ color: "#FF6B6B", fontSize: 12 }}>Delete</Text>
          </Pressable>
        </View>
      </View>
      <Text numberOfLines={4} style={{ color: colors.primary, fontSize: 14 }}>
        {item.content}
      </Text>

      <Text style={{ color: "#666", fontSize: 12, marginTop: 8 }}>
        Updated : {new Date(item.updatedAt).toLocaleString()}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 5,
    color: colors.text,
  },
  ButtonsView: {
    flexDirection: "row",
    gap: 8,
  },
});
