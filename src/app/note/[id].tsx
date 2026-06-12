import PressButton from "@/components/PressButton";
import { colors } from "@/constants/colors";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";
import {TextInput, View } from "react-native";
import { useNotes } from "../../../hooks/useNote";

const NoteEditorScreen = () => {
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigation = useNavigation()

  const isNew = id === "new";
  const isDisabled = title.length <= 0 || content.length <= 0;

  const { addNote } = useNotes();

  const save = () => {
    if(isNew){
      addNote(title, content);
    };
    navigation.goBack();
  }


  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          title: isNew ? "Create Note" : "Edit Note",
        }}
      />
      <View
        style={{
          padding: 16,
          gap: 12,
        }}
      >
        <TextInput
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            textAlignVertical: "top",
            color: colors.text,
            fontWeight: "bold",
          }}
          value={title}
          onChangeText={setTitle}
          placeholder="Note Title"
          placeholderTextColor={colors.placeholder}
        />

        <TextInput
          style={{
            flex: 1,
            minHeight: 200,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 12,
            textAlignVertical: "top",
            color: colors.text,
          }}
          placeholder="Note Content...."
          placeholderTextColor={colors.placeholder}
          value={content}
          onChangeText={setContent}
          multiline
        />
      </View>
        <PressButton 
        label="Save" 
        action={save}
        isDisabled={isDisabled}
        />
    </View>
  );
};

export default NoteEditorScreen;
