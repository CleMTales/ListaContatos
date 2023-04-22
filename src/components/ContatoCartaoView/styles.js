import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCartao: {
        marginBottom: 10,
        alignItems: 'center',
        shadowColor: '#5B8975',
        shadowOffset: { width: 0, height: 5 },
        paddingTop: 5,
        width: '100%',
    },
    containerVertical: {
        paddingTop: 5,
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },
    containerHorizontal: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    userImage: {
        borderRadius: 250,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#45B9B9',
        height: 115,
        width: 110,
        //marginLeft: '6%', //maybe 1
        paddingLeft: '1.05%',
        alignContent: 'flex-start',
    },
    infoImage: {
        borderRadius: 15,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#45B9B9',
        height: 45,
        width: 55,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '6%',
    },
    gradientBox: {
        height: 25,
        borderRadius: 10,
        width: '90%',
        marginRight: 5,
    },
    nomeContato: {
        height: 25,
        width: '100%',
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 5,
        borderRadius: 10,
        backgroundColor: 'transparent',
    },
    numeroContato: {
        height: 20,
        width: '100%',
        fontSize: 12,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 5,
        borderRadius: 10,
        backgroundColor: 'transparent',
    }
});

export default styles;
