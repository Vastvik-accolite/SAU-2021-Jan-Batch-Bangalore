import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginLeft:"10%",
        flex: 1
    },
    input:{
        borderWidth: 1,
        height: 50,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "#FBEEC1"      
    },
     header: {
        fontSize: 50,
        color: "#DAAD86"
     },
    button: {
        borderWidth: 1,
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderColor: "black",
        backgroundColor: "#DAAD86"    
    },
    
});

export default styles;