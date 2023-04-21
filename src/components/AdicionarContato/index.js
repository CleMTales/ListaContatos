import React, { useEffect, useState } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import ListaInfoContato from '../ListaInfoContato'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function AdicionarContato({ route }) {
    console.log(route)

    
    var contato = route.params.contato
    const [contatoAnteriorID, setIDContatoAnt] = useState('')
    const [nome, setNome] = useState('');
    const [telPrincipal, setTelPrincipal] = useState('');
    const [infoContato, setInfoContato] = useState([]);
    const navigator = useNavigation();

    function nomeChanged(nome) {
        setNome(nome);
    }

    function telefonePrincipalChanged(telPrincipal) {
        setTelPrincipal(telPrincipal);
    }

    async function salvarContato() {
        let listaContatos = []
        const response = await AsyncStorage.getItem('listaContatos');

        if (response) listaContatos = JSON.parse(response);

        var idAtual = route.params.contato.id != -1 ? route.params.contato.id : listaContatos.length + 1
        const contatoSalvar = { id: idAtual, nome: nome, numero: telPrincipal, info: infoContato };
        console.log(contatoSalvar)

        if (idAtual - 1 < listaContatos.length) {
            var newListaContatos = listaContatos.map((contatoLista) => {
                if (contatoLista.id === contato.id) {
                    return contatoSalvar
                }
                else
                    return contatoLista
            })
        }
        else var newListaContatos = [...listaContatos, contatoSalvar]
        await AsyncStorage.setItem('listaContatos', JSON.stringify(newListaContatos));
    }

    async function deletarContato() {
        let listaContatos = []
        const response = await AsyncStorage.getItem('listaContatos');
        if (response) listaContatos = JSON.parse(response);
        var idAtual = route.params.contato.id
        if (idAtual > 0) {
            var newListaContatos = listaContatos.filter(contato => contato.id !== idAtual)
        }
        await AsyncStorage.setItem('listaContatos', JSON.stringify(newListaContatos));
    }

    function AddInfo() {
        setInfoContato([...infoContato, { id: infoContato.length + 1, tipo: 'telefone', valor: '' }])
    }

    function setInfo(info) {
        var newInfoContato = infoContato.map((infoContato) => {
            if (infoContato.id == info.id) {
                return info
            }
            return infoContato
        })
        setInfoContato(newInfoContato)
    }

    function mudarTipo(id) {
        var newInfoContato = infoContato.map(info => {
            if (info.id === id)
                switch (info.tipo) {
                    case 'telefone':
                        return { ...info, tipo: 'telefone fixo' }
                    case "telefone fixo":
                        return { ...info, tipo: 'email' }
                    case "email":
                        return { ...info, tipo: 'telefone' }
                }
            else
                return info

        })
        setInfoContato([...newInfoContato])
    }

    function BotoesInferiores() {
        return (
            <View style={styles.botoesInferioresContainer}>
                <TouchableOpacity activeOpacity={0.9}
                    style={[styles.botaoInferior,
                    { borderBottomLeftRadius: 15 }
                    ]}
                    onPress={
                        () => {
                            navigator.navigate(
                                { name: 'Lista de Contatos' })
                        }}
                >
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}
                    style={styles.botaoInferior}
                    onPress={() => {
                        salvarContato().then(() => {
                            navigator.setParams({ contato: { id: -1, nome: '', numero: '', info: [] } });
                            navigator.navigate({
                                name: 'Lista de Contatos',
                                shouldUpdate: true
                            }
                            );
                            setInfoContato([]);
                        });
                    }}
                >
                    <AntDesign name="save" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}
                    style={[styles.botaoInferior,
                    { borderBottomRightRadius: 15 }
                    ]}
                    onPress={
                        () => {
                            deletarContato(route.params.contato.id).then(() => {
                                navigator.setParams({ contato: { id: -1, nome: '', numero: '', info: [] } })
                                navigator.navigate(
                                    {
                                        name: 'Lista de Contatos',
                                        shouldUpdate: true
                                    })
                            });
                        }}
                >
                    <AntDesign name="deleteuser" size={24} color="black" />
                </TouchableOpacity>
            </View>
        )
    }

    useEffect(() => {
        if (contatoAnteriorID != route.params.contato.id) {
            setIDContatoAnt(contato.id)
            contato = (route.params.contato)
            setInfoContato(contato.info)
            console.log(contato)
            if (contato.nome != null && contato.numero != null) {
                console.log(contato)
                setNome(contato.nome)
                setTelPrincipal(contato.numero)
            }
        }
    }
    ), [route.params.contato.id]

    return (
        <View
            style={styles.containerBackground}>
            <LinearGradient
                colors={['#59d9ebad', '#64A066']}
                style={styles.background}
            />
            <View style={styles.containerContato}>
                <View style={[styles.containerVertical, { height: 175 }]}>
                    <View style={styles.containerHorizontal}>
                        <AntDesign name="user" size={95} color="#FFFFFF" style={styles.userImage} />
                        <View style={[styles.containerVertical, { paddingLeft: 3 }]}>
                            <Text style={styles.tituloInfo}>NOME: </Text>
                            <LinearGradient
                                colors={['#45B9B9', '#9BD1E8']}
                                style={styles.gradientBox}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <TextInput
                                    style={[styles.input]}
                                    value={nome}
                                    placeholder='NOME'
                                    onChangeText={nomeChanged}
                                />
                            </LinearGradient>
                            <Text style={styles.tituloInfo}>TELEFONE PRINCIPAL: </Text>
                            <LinearGradient
                                colors={['#45B9B9', '#9BD1E8']}
                                style={styles.gradientBox}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <TextInput
                                    style={styles.input}
                                    value={telPrincipal}
                                    inputMode='numeric'
                                    placeholder='(xx) xxxxx-xxxx'
                                    maxLength={11}
                                    onChangeText={telefonePrincipalChanged}
                                />
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={{ height: '20%', width: '100%' }}>
                        <TouchableOpacity activeOpacity={0.9} style={styles.botaoChamada}>
                            <Feather name="phone-call" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
                <ListaInfoContato infoContato={infoContato} key={contato.id} AddInfo={AddInfo} setInfo={setInfo} mudarTipo={mudarTipo} />
            </View>
            <BotoesInferiores />
        </View>

    )
};

