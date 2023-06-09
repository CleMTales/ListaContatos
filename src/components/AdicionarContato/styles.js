import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerBackground: {
        paddingTop: '5%',
        alignItems: 'center',
        height: '100%',

    },
    containerVertical: {
        justifyContent: 'space-evenly',

    },
    containerHorizontal: {
        flexDirection: 'row',
        width: '100%',
    },
    containerContato: {
        backgroundColor: '#A3D8EE',
        borderColor: '#0000000',
        borderWidth: 2,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingTop: 0,
        margin: 30,
        marginBottom: 0,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 5,
        height: '85%',
        width: '90%',
    },
    userImage: {
        borderRadius: 250,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#45B9B9',
        height: 107,
        width: 100,
        marginLeft: 5,
        paddingBottom: 15,
        paddingLeft: '1%',
        alignContent: 'flex-start',
        marginTop: '6%',
    },
    gradientBox: {
        height: 30,
        borderRadius: 10,
        width: '115%',
        left: '5%'
    },
    input: {
        height: 30,
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'transparent',
        position: 'absolute',
    },

    botaoChamada: {
        width: 65,
        height: '100%',
        backgroundColor: '#45B9B9',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        // position:'absolute',
        //bottom: '-15%',
        // right:'-15%',
    },

    botaoInferior: {
        backgroundColor: '#47A86E',
        height: '100%',
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        width: '100%',
    },
    botoesInferioresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '5%',
        width: '90%',
        bottom: 0,
        marginHorizontal: 30,
        borderColor: '#000000',
        borderWidth: 2,
        borderTopWidth: 0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
});

export default styles;