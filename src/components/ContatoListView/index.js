import { memo } from "react"
import { Text, TouchableOpacity } from "react-native"
import { AntDesign, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"

export default memo(ContatoListView)
function ContatoListView({ contato }) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.containerHorizontal}
            onPress={() => {
                navigation.navigate({
                    name: 'Adicionar Contato',
                    params: { contato: contato }
                })
            }}
        >
            <TouchableOpacity activeOpacity={0.9} style={styles.botao}
            >
                <AntDesign name="user" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <LinearGradient
                colors={['#45B9B9', '#9BD1E8']}
                style={styles.gradientBox}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.nomeContato}>
                    {contato.nome}
                </Text>
            </LinearGradient>
            <TouchableOpacity activeOpacity={0.9} style={styles.botao}
            >
                <Feather name="phone-call" size={20} color="#FFFFFF" />
            </TouchableOpacity>
        </TouchableOpacity>

    )
}

