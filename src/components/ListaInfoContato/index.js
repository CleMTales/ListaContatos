
import { TouchableOpacity, View, FlatList } from "react-native"
import InfoContato from "../InfoContato"
import { styles } from './styles'

export default function ListaInfoContato({ infoContato, AddInfo, setInfo, mudarTipo }) {

    function ultimoItem() {
        return (
            <View>
                <InfoContato dado={{ id: -1, tipo: 'new', valor: '' }} />
                <TouchableOpacity activeOpacity={0.9}
                    style={styles.infoImagePress}
                    onPress={AddInfo}
                >
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <FlatList style={styles.lista}
            data={infoContato}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={ultimoItem}
            renderItem={({ item }) => <InfoContato dado={item} setInfo={setInfo} mudarTipo={mudarTipo} />}
        />
    )

}

