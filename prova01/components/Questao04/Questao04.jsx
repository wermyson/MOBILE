import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

const Questao04 = () => {
    const [paises,setPaises] = useState([])
    let paisMaisPopuloso = {}

    const ordenarPorPopulacao = (a, b) => {
        if (a.population > b.population)
            return -1;
        if (a.population < b.population)
            return 1;
        return 0;
    }

    const definir = (item) => {
        if (item == null) {
            paisMaisPopuloso = "nada"
        } else if (item != null){
            paisMaisPopuloso = {name: item.name, population: item.population} 
        }
    }

    useEffect(
        ()=>{
           fetch(`https://restcountries.com/v2/region/africa?fields=name,population`)
           .then(
            (response)=>{
                return response.json()
            }
           )
           .then(
            (responseJson)=>{
                setPaises((responseJson.sort(ordenarPorPopulacao)))
                paisMaisPopuloso = paises[0];
            }
            )
            .catch((error)=>{console.log(error)})
        }
        ,
        []
        )

        definir(paises[0]);

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>
                Paises da África
            </Text>
            <View style={estilos.flexCenter}>
                <Text style={estilos.titulo}>PAIS MAIS POPULOSO</Text>
                <View style={estilos.paisMaisPopuloso}>
                    <Text>País: {paisMaisPopuloso.name}</Text>
                    <Text>População: {paisMaisPopuloso.population}</Text>
                </View>
            </View>
            <View style={estilos.flexCenter}>
            <Text style={estilos.titulo}>TODOS OS PAISES</Text>
            <FlatList
                data={paises}
                renderItem={
                    ({item})=>{
                        return (
                            <View style={estilos.pais}>
                                <Text>País: {item.name}</Text>
                                <Text>População: {item.population}</Text>
                            </View>
                        )
                    }
                }/>
            </View>
            {/* <View>
            <Button
                title='próximos'
                onPress={prxPokemons}
            />

            </View> */}
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
    pais: {
        display: 'flex',
        padding: 12,
        margin: 4,
        backgroundColor: "lightblue",
        justifyContent: 'center',
        alignItems: 'center',
    },
    paisMaisPopuloso: {
        display: 'flex',
        padding: 12,
        margin: 4,
        backgroundColor: "lightgreen",
        justifyContent: 'center',
        alignItems: 'center',
    },
    cabecalho: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 16,
        margin: 10,
        fontWeight: "bold",
    },
    botao: {
        width: 120,
        marginTop: 10,
        backgroundColor: "lightblue"
    },
})

export default Questao04;