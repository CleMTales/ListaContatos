import { View } from "react-native"
import { memo } from "react"
import { FlatList } from "react-native"
import ContatoListView from "../ContatoListView"
import { styles } from "./styles"

export default memo(ExibicaoLista)
function ExibicaoLista(props) {
    return (
        <View style={styles.containerContato}>
            <FlatList 
                data={props.listaContatos}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ContatoListView contato={item} />}
            />
        </View>
    )
}

