import { useEffect, useState } from "react"
import { Button, FlatList, StyleSheet, Text, View } from "react-native"



const Paises = (props) => {
    const [paises, setPaises] = useState([])
    
    let regiao = props.regiao;

    let paisMaisPopuloso = {}

    let paisMenosPopuloso = {}

    const ordenarPorPopulacao = (a, b) => {
        if (a.population > b.population)
            return -1;
        if (a.population < b.population)
            return 1;
        return 0;
    }

    const definirPaisMaisPopuloso = (item) => {
        if (item == null) {
            paisMaisPopuloso = "nada"
        } else if (item != null){
            paisMaisPopuloso = {name: item.name, population: item.population} 
        }
    }

    const definirPaisMenosPopuloso = (item) => {
        if (item == null) {
            paisMenosPopuloso = "nada"
        } else if (item != null){
            paisMenosPopuloso = {name: item.name, population: item.population} 
        }
    }

    useEffect(
        ()=>{
           fetch(`https://restcountries.com/v2/region/${regiao}?fields=name,population`)
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
        [regiao]
        )

        definirPaisMaisPopuloso (paises[0]);

        definirPaisMenosPopuloso (paises[paises.length - 1]);
        
        const infoDestaque = (info) => {
            if (props.info == "maisPopuloso") {
                return (
                <View style={estilos.flexCenter}>
                    <Text style={estilos.titulo}>PAIS MAIS POPULOSO</Text>
                    <View style={estilos.paisMaisPopuloso}>
                        <Text>País: {paisMaisPopuloso.name}</Text>
                        <Text>População: {paisMaisPopuloso.population}</Text>
                    </View>
                </View>)
            } else if (props.info == "menosPopuloso") {
                return (
                <View style={estilos.flexCenter}>
                    <Text style={estilos.titulo}>PAIS MENOS POPULOSO</Text>
                    <View style={estilos.paisMaisPopuloso}>
                        <Text>País: {paisMenosPopuloso.name}</Text>
                        <Text>População: {paisMenosPopuloso.population}</Text>
                    </View>
                </View>)
            }
        }

    return (
        <View style={estilos.container}>
             <Text style={estilos.cabecalho}>
                Paises da {props.titulo}
            </Text>
            {infoDestaque()}
            <View style={estilos.flexCenter}>
            <Text style={estilos.titulo}>TODOS OS PAISES (ordem decrescente)</Text>
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
        </View>
    )
}

const Questao05 = () => {
    const [pagView, setPagView] = useState(<Paises titulo= "África" regiao= "africa" info="maisPopuloso"/>);

    const africa = () => {
        setPagView(<Paises titulo= "África" regiao= "africa" info="maisPopuloso"/>)
    }

    const america = () => {
        setPagView(<Paises titulo= "Américas" regiao= "americas" info="maisPopuloso"/>)
    }

    const asia = () => {
        setPagView(<Paises titulo= "Ásia" regiao= "asia" info="menosPopuloso"/>)
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.areaButtons}>

            <View style={estilos.botao}>
                <Button
                    title='África'
                    onPress={africa}
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title='Américas'
                    onPress={america}
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title='Ásia'
                    onPress={asia}
                />
            </View>
            </View>
            {pagView}
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
        margin: 8,
        backgroundColor: "lightblue"
    },
    areaButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 28,
        alignItems: 'center',
    },
})

export default Questao05;