import { FlatList, Text, View } from "react-native"

const Questao01B = () => {
    let disciplinas = ['Empreendedorismo', 'Concepção e Desenvolvimento de Produtos', 'Projeto Integrado IV']

    return (
        <View>
            <Text style={{marginTop: 10}}>Disciplinas: </Text>
            <FlatList 
            data={disciplinas}
            renderItem={
                ({item})=>{
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                }
            }/>
        </View>
    )
}

export default Questao01B;