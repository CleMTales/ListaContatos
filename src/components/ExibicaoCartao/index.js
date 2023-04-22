import { View } from "react-native";
import { memo } from "react";
import { FlatList } from "react-native";
import ContatoCartaoView from "../ContatoCartaoView";
import { styles } from "./styles";

export default memo(ExibicaoCartao)
function ExibicaoCartao(props) {
    return (
        <View style={styles.containerContato}>
            <FlatList 
                data={props.listaContatos}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ContatoCartaoView contato={item} />}
            />
        </View>
    )
}

