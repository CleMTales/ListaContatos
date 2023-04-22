
import { TextInput, TouchableOpacity, View } from "react-native"
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from "./styles"

export default function InfoContato({ dado, setInfo, mudarTipo }) {
    function IconTipo() {
        if (dado.tipo == 'telefone')
            return (
                <FontAwesome name="mobile-phone" size={34} color="#000000" />
            )
        else if (dado.tipo == 'telefone fixo')
            return (
                <Entypo name="old-phone" size={34} color="#000000" />
            )
        else if (dado.tipo == 'email')
            return (
                <AntDesign name="mail" size={34} color="#000000" />
            )
        else if (dado.tipo == 'new')
            return (
                <AntDesign name="plussquareo" size={34} color="#000000" />
            )
    }

    function BotaoChamada() {
        if (dado.tipo == 'email' || dado.tipo == 'new')
            return
        else
            return (
                <TouchableOpacity activeOpacity={0.9} style={styles.botaoChamada}>
                    <Feather name="phone-call" size={20} color="black" />
                </TouchableOpacity>
            )
    }

    function valorChanged(valor) {
        setInfo({ id: dado.id, tipo: dado.tipo, valor: valor })
    }

    { if (dado.id == null) return (null) }
    return (
        <View style={styles.containerHorizontal}>
            <TouchableOpacity activeOpacity={0.9}
                style={styles.image}
                onPress={() => mudarTipo(dado.id)}>
                <IconTipo />
            </TouchableOpacity>
            <View style={[styles.containerHorizontal,
            { width: (dado.tipo == 'email' || dado.tipo == 'new') ? '90%' : '80%' }]}>
                <LinearGradient
                    colors={dado.tipo == 'new' ? ['#149292', '#79A6BA'] : ['#45B9B9', '#9BD1E8']}
                    style={styles.gradientBox}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <TextInput
                        style={[styles.input]}
                        value={dado.valor}
                        keyboardType= {dado.tipo == 'telefone' || dado.tipo == 'telefone fixo' ? "numeric" : null}
                        onChangeText={valorChanged}
                        editable={dado.tipo !== 'new'}
                    />
                </LinearGradient>
                <BotaoChamada
                    style={{ width: dado.tipo == 'email' ? 0 : 5 }}
                />
            </View>
        </View>
    )
}

