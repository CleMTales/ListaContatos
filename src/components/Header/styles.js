import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        marginBottom: 10,
        paddingTop: 40
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    containerPesquisa: {
        flexDirection: 'row',
        width: 250
    },
    containerBotaoExibicao: {
        flexDirection: 'row',
        padding: 0,
    },

    input: {
        height: 30,
        width: 175,
        backgroundColor: '#91BDE2',
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 10,
    },

    botaoPesquisa: {
        width: 45,
        height: 30,
        backgroundColor: '#686BB2',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderColor: 'black',
        borderLeftWidth: 0,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    botaoExibicaoEsq: {
        width: 45,
        height: 30,
        backgroundColor: '#92BDE1',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRightWidth: 0,
    },

    botaoExibicaoDir: {
        width: 45,
        height: 30,
        backgroundColor: '#92BDE1',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        width: '100%',
    },
    containerExibicao: {
        alignItems: 'center',
        height: '93%',
        width: '100%', 
        paddingBottom: '15%',
    },
});

export default styles;