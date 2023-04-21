import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerContato: {
        borderRadius: 15,
        padding: 20,
        paddingTop: 0,
        margin: 30,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 5,
        height: '77%',
        width: '90%',
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
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
});

export default styles;