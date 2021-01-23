import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        //marginLeft: "15%",
        backgroundColor: "#FBEEC1"
    },
    button: {
        marginLeft: "5%",
        borderWidth: 1,
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        borderRadius: 20,
        borderColor: "black",
        backgroundColor: "#DAAD86"   
    },
    input: {
        marginLeft: "5%",
        borderWidth: 1,
        height: 50,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "#FBEEC1"      
    }
});

export default styles;