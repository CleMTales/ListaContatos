import { memo } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"

function InfoContatoCard(props) {
    return (
        <View style={styles.infoImage}>
            {props.info.tipo === 'telefone' ? (
                <FontAwesome name="mobile-phone" size={34} color="#FFFFFF" />
            ) : props.info.tipo === 'telefone fixo' ? (
                <Entypo name="old-phone" size={34} color="#FFFFFF" />
            ) : props.info.tipo === 'email' ? (
                <AntDesign name="mail" size={34} color="#FFFFFF" />
            ) : props.info.tipo === 'new' ? (
                <AntDesign name="plussquareo" size={34} color="#FFFFFF" />
            ) : null}
        </View>
    )
}

export default memo(ContatoCartaoView)
function ContatoCartaoView({ contato }) {

    const navigation = useNavigation()
    const contatoInfo = contato.info.slice(0, 7)

    return (
        <TouchableOpacity style={[styles.containerCartao, { backgroundColor: '#A3D8EE', borderRadius: 20, borderWidth: 1, height: 210 }]}
            onPress={() => {
                console.log(contato)
                navigation.navigate('Adicionar Contato', {
                    contato: contato,
                    key: contato.id
                })
            }}
        >
            <View style={[styles.containerVertical, { paddingLeft: 15, width: '105%', height: '15%', marginTop: 5 }]}>
                <LinearGradient
                    colors={['#45B9B9', '#9BD1E8']}
                    style={[styles.gradientBox, { alignSelf: 'center' }]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={styles.nomeContato}>
                        {contato.nome}
                    </Text>
                </LinearGradient>
                <LinearGradient
                    colors={['#45B9B9', '#9BD1E8']}
                    style={[styles.gradientBox, { marginLeft: 40, width: '50%', height: 20 }]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={styles.numeroContato}>
                        {contato.numero}
                    </Text>
                </LinearGradient>
            </View>
            <View style={styles.containerHorizontal}>
                <View style={[styles.userImage, { marginRight: 20 }]}>
                    <AntDesign name="user" size={103} color="#FFFFFF" />
                </View>
                <View style={styles.containerVertical}>
                    <View style={[styles.containerHorizontal, { marginBottom: 0 }]}>
                        {contatoInfo.slice(0, 3).map((info, index) =>
                            <InfoContatoCard key={index} info={info} />)}
                        {contatoInfo.slice(0, 3).length < 3 && Array(3 - contatoInfo.length).fill().map((_, index) => <InfoContatoCard key={index + 3} info={{ tipo: 'new' }} />)}
                    </View>
                    <View style={[styles.containerHorizontal, {}]}>
                        {contatoInfo.slice(3, 6).map((info, index) =>
                            <InfoContatoCard key={index} info={info} />)}
                        {contatoInfo.slice(3, 6).length < 3 && Array(3 - contatoInfo.slice(3, 6).length).fill().map((_, index) => <InfoContatoCard key={index + 3} info={{ tipo: 'new' }} />)}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

