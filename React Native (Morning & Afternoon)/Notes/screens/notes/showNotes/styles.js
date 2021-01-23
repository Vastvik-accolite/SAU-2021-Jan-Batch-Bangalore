import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("window").height,
    },
    header: {
        fontSize: 50,
        color: "#DAAD86",
        textAlign: "center"
     },
    button: {

        marginLeft: "5%",
        marginTop: "10%",
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "black",
        backgroundColor: "#DAAD86",   
        color: "black",
        paddingHorizontal: "35%",
        paddingVertical: "3%"
    },
    scrollView: {
        marginBottom: Dimensions.get("window").height * 0.01
    }
});

export default styles;