import React, { useState } from "react";
import { Text, TextInput, View, ImageBackground, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Button from "./Button";
import styles from "./styles";

const NewNoteCard = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = async () => {
        var newNote = {
            "title": title,
            "description": description,
        }
        console.log(newNote);
        var notesList = await AsyncStorage.getItem("notesList");
        console.log("notesList", JSON.parse(notesList))
        notesList = JSON.parse(notesList);
        if (notesList === null) {
            notesList = [
                {
                    id: "1",
                    note: newNote,
                }
            ]
        } else {
            let noteId = notesList.length + 1;
            notesList.push(
                {
                    id: noteId,
                    note: newNote,
                }
            )
        }

        console.log(notesList);
        await AsyncStorage.setItem('notesList', JSON.stringify(notesList));
        var noteListFetched = await AsyncStorage.getItem('notesList');
        console.log("noteListFetched", JSON.parse(noteListFetched));

        console.log("done")
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
        <Text style = {styles.header}>Add Your Note!</Text>
        <Text></Text>
        <Text style = {{fontSize: 20, color:"#DAAD86", marginLeft: "40%"}}>Title</Text>
            <TextInput multiline style={styles.input} placeholder="Title..." onChangeText={setTitle} />
        <Text></Text>
           
           <Text style = {{fontSize: 20, color:"#DAAD86", marginLeft: "30%"}}>Description</Text>
            <TextInput multiline style={styles.input} placeholder="Description... " onChangeText={setDescription} />
        <Text></Text>
        <Text></Text>
            
            <Button action={submit} />
        </View>
        
    );
}

export default NewNoteCard;