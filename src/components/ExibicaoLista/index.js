import { View } from "react-native"
import { memo, useEffect, useState } from "react"
import { FlatList } from "react-native"
import ContatoListView from "../ContatoListView"
import { styles } from "./styles"

export default memo(ExibicaoLista)
function ExibicaoLista(props) {
    return (
        <View style={styles.containerContato}>
            <FlatList style={styles.contatos}
                data={props.listaContatos}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ContatoListView contato={item} />}
            />
        </View>
    )
}

