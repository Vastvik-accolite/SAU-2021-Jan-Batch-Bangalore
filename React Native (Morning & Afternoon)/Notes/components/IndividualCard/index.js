import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
const NoteCard = ({ noteData, navigation }) => {

    const deleteCard = async (id) => {


        console.log("delete card", id);
        let currentList = JSON.parse(await AsyncStorage.getItem("notesList"));
        console.log("the current list is", currentList);

        for (var i in currentList) {
            console.log(i, id, currentList[i].id)
            if (currentList[i].id == id) {
                currentList.splice(parseInt(i), 1);

            }
        }
        await AsyncStorage.setItem("notesList", JSON.stringify(currentList));
        console.log("done");
        currentList = JSON.parse(await AsyncStorage.getItem("notesList"));

        console.log(currentList)
        navigation.reset({
            index: 0,
            routes: [{ name: "view-notes" }],
        });
    }

    return (
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
                <Text></Text>
                <Text style={{ textAlign: "center", fontWeight: "bold", color: "#DAAD86", fontSize: 30}}>{noteData.note.title} </Text>
                <Text style={{ textAlign: "center", color: "#DAAD86", fontSize: 20}}>{noteData.note.description} </Text>
                <TouchableOpacity onPress={() => deleteCard(noteData.id)}>
                    <Text style={{ color: "black", fontWeight: "bold", borderColor:"black",borderWidth: 1, backgroundColor: "#DAAD86", textAlign: "center",marginLeft: "35%", marginTop: "2%", width: "30%", height: 30, paddingHorizontal: 20, borderRadius: 10,}}>Delete</Text>
                </TouchableOpacity>
            </View>
    );
}

export default NoteCard;