import PressButton from "@/components/PressButton";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {TextInput, View } from "react-native";

const NoteEditorScreen = () => {
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isNew = id === "new";
  const isDisabled = title.length <= 0 || content.length <= 0;

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
            color: "#fff",
            fontWeight: "bold",
          }}
          value={title}
          onChangeText={setTitle}
          placeholder="Note Title"
          placeholderTextColor="#888"
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
            color: "#fff",
          }}
          placeholder="Note Content...."
          placeholderTextColor="#888"
          value={content}
          onChangeText={setContent}
          multiline
        />
      </View>
        <PressButton 
        label="Save" 
        action={() => ""}
        isDisabled={isDisabled}
        />
    </View>
  );
};

export default NoteEditorScreen;
