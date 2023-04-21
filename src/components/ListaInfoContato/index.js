import { useState, useEffect, useMemo } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import InfoContato from "../InfoContato";
import { styles } from './styles';

export default function ListaInfoContato({ infoContato, AddInfo, setInfo, mudarTipo }) {

    function ultimoItem() {
        return (
            <View>
                <InfoContato dado={{ id: -1, tipo: 'new', valor: '' }} />
                <TouchableOpacity activeOpacity={0.9}
                    style={styles.image}
                    onPress={AddInfo}
                >
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <FlatList style={styles.movimentos}
            data={infoContato}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={ultimoItem}
            renderItem={({ item }) => <InfoContato dado={item} setInfo={setInfo} mudarTipo={mudarTipo} />}
        />
    )

}

