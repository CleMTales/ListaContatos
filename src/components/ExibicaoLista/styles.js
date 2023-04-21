import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerContato: {
        backgroundColor: '#A3D8EE',
        borderColor: '#0000000',
        borderWidth: 1,
        borderRadius: 15,
        padding: 20,
        paddingTop: 0,
        margin: 30,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 5,
        height: '77%',
        width: '90%',
        shadowColor: '#5B8975',
        shadowOffset: { width: 0, height: 5 }
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14
    },
    contatos: {
        marginTop: 10
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
});
