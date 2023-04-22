import React, { useEffect, useState } from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput, TouchableOpacity, View } from "react-native"
import ExibicaoLista from '../ExibicaoLista'
import ExibicaoCartao from '../ExibicaoCartao'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './styles'

export default function Header(props) {
    const [pesquisa, setPesquisa] = useState('')
    const [pesquisaAnterior, setPesquisaAnterior] = useState('')
    const [modoExibicao, setModoExibicao] = useState('cartao')
    const [listaExibicao, setListaExibicao] = useState([])
    const [listaContatos, setListaContatos] = useState([])

    function pesquisaChanged(pesquisa) {
        setPesquisa(pesquisa.toLowerCase())
    }

    function setModoExibicaoLista() {
        setModoExibicao('lista')
    }

    function setModoExibicaoCartao() {
        setModoExibicao('cartao')
    }

    async function getListaContatos() {
        return AsyncStorage.getItem('listaContatos')
            .then(response => {
                if (response)
                    return Promise.resolve(JSON.parse(response))
                else {
                    return Promise.resolve([])
                }
            })
    }

    async function setListaItems() {
        let listaItems = [{ id: 1, nome: 'tales 1', numero: '992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }, { id: 2, tipo: 'telefone fixo', valor: '2 992174617' }] },
        { id: 2, nome: 'tales 2', numero: '1 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 3, nome: 'tales 3', numero: '2 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 4, nome: 'tales 4', numero: '3 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 5, nome: 'tales 5', numero: '4 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 6, nome: 'tales 5', numero: '4 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 7, nome: 'tales 4', numero: '3 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 8, nome: 'tales 5', numero: '4 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 9, nome: 'tales 5', numero: '4 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 10, nome: 'tales 4', numero: '3 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 11, nome: 'tales 5', numero: '4 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 12, nome: 'tales 5', numero: '4 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 13, nome: 'tales 4', numero: '3 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 14, nome: 'tales 5', numero: '4 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        { id: 15, nome: 'tales 5', numero: '4 992174617', info: [{ id: 1, tipo: 'telefone', valor: '992174617' }] },
        ]
        await AsyncStorage.setItem('listaContatos', JSON.stringify(listaItems))
    }

    async function updateList() {
        getListaContatos().then((listaItems) => {
            const listaAlfabetica = listaItems.sort((a, b) => {
                const nomeA = a.nome.toLowerCase()
                const nomeB = b.nome.toLowerCase()
                if (nomeA < nomeB) {
                    return -1
                }
                if (nomeA > nomeB) {
                    return 1
                }
                return 0
            })
            if (listaAlfabetica !== listaContatos) {
                setListaContatos(listaAlfabetica)
                setListaExibicao(listaAlfabetica)
            }
        })
    }

    function pesquisar() {
        if (pesquisa != pesquisaAnterior) {
            const listaFiltrada = listaContatos.filter((contatoLista) => {               
                return (String(contatoLista.nome).toLowerCase().includes(pesquisa) || String(contatoLista.numero).includes(pesquisa))
            })
            setListaExibicao(listaFiltrada)
            setPesquisaAnterior(pesquisa)
        }
    }

    useEffect(() => {
        if (props.route.params?.shouldUpdate == true) {
            updateList().then(
                props.navigation.setParams({
                    shouldUpdate: false
                }),
            )
        }
    }, [props.route.params?.shouldUpdate])

    useEffect(() => {
        pesquisar()
    }), [pesquisa]

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#59d9ebad', '#64A066']}
                style={styles.background}
            />
            <View style={styles.containerHeader}>
                <View style={styles.containerPesquisa}>
                    <TextInput
                        style={styles.input}
                        placeholder="PESQUISA"
                        clearButtomMode="always"
                        onChangeText={pesquisaChanged}
                        on
                    />
                    <TouchableOpacity activeOpacity={0.9} style={styles.botaoPesquisa}
                        onPress={pesquisa == '' ? updateList : pesquisar}
                    >
                        <AntDesign name="search1" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBotaoExibicao}>
                    <TouchableOpacity activeOpacity={0.9}
                        style={[styles.botaoExibicaoEsq,
                        { backgroundColor: modoExibicao === 'lista' ? '#7395B1' : '#92BDE1' }]}
                        disabled={modoExibicao === 'lista' ? true : false}
                        onPress={setModoExibicaoLista}
                    >
                        <Feather name="list" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={[styles.botaoExibicaoDir,
                    { backgroundColor: modoExibicao === 'cartao' ? '#7395B1' : '#92BDE1' }]}
                        disabled={modoExibicao === 'cartao' ? true : false}
                        onPress={setModoExibicaoCartao}
                    >
                        <AntDesign name="idcard" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {[styles.containerExibicao]}>
                {modoExibicao === 'lista' ? <ExibicaoLista listaContatos={listaExibicao} /> : <ExibicaoCartao listaContatos={listaExibicao} />}
            </View>
        </View>
    )
}