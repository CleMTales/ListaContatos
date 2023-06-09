import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    containerHorizontal: {
        flexDirection: 'row',
        paddingBottom: 5,
        paddingLeft: 5,
        alignItems: 'center',
    },
    image: {
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#45B9B9',
        height: 55,
        width: 55,
        marginLeft: 5,
        marginTop: '1%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    }, botaoChamada: {
        borderRadius: 250,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#45B9B9',
        height: 30,
        width: 30,
        marginLeft: 5,
        marginTop: '1%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientBox: {
        height: 30,
        borderRadius: 10,
        width: '85%',
    },
    input: {
        height: 30,
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 5,
        borderRadius: 10,
        backgroundColor: 'transparent',
    }
});

export default styles;