import { useEffect, useState } from "react"
import { Button, FlatList, StyleSheet, Text, View } from "react-native"

const Questao03 = () => {
    const [offset,setOffset] = useState(0)
    const [pokemons,setPokemons] = useState()

    const prxPokemons = () => {
        let number = offset;
        setOffset(number += 10);
    }
    useEffect(
        ()=>{
           fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
           .then(
            (response)=>{
                // console.log(response.json())
                return response.json()
            }
           )
           .then(
            (responseJson)=>{
                // console.log(responseJson);
                const lista = responseJson.results.map((nome)=>{
                    return nome.name;
                })
                setPokemons(lista)
            }
           )
           .catch((error)=>{console.log(error)})
        }
        ,
        [offset]
    )

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Lista de Pokemons encontrados: </Text>
            <View>
            <FlatList
                data={pokemons}
                renderItem={
                    ({item})=>{
                        return (
                            <Text style={estilos.pokemon}>{item.toUpperCase()}</Text>
                        )
                    }
                }/>
            </View>
            <View style={estilos.botao}>
            <Button
                title='próximos'
                onPress={prxPokemons}
            />
            </View>
        </View>
    )
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e5e5'
    },
    pokemon: {
        display: 'flex',
        padding: 4,
        margin: 4,
        backgroundColor: "lightblue",
        justifyContent: 'center',
        alignItems: 'center',
    },
    cabecalho: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    botao: {
        width: 120,
        marginTop: 10,
        backgroundColor: "lightblue"
    },
})
export default Questao03;