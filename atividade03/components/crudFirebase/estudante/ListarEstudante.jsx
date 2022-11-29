import { View, Text, SafeAreaView, FlatList, Button} from "react-native-web"

import EstudanteService from "../service/EstudanteServise";
import { firestoreDB } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import estilos from "../css/MeuCSS";

const ListarEstudande = (props) => {

    const [estudantes, setEstudantes] = useState ([])

    useEffect(
        () => {
            EstudanteService.listar(
                firestoreDB, 
                (estudantes) => {
                    setEstudantes(estudantes)
                }
            )
        },
        []
    )

    const apagarEstudante = (id) => {
        EstudanteService.apagar(
            firestoreDB,
            (resultado) => {
                let estudantesResultado = estudantes.filter(
                    (estudante)=>estudante.id !== id
                )
                setEstudantes(estudantesResultado)
            },
            id
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar estudantes</Text>
            <SafeAreaView>
                <FlatList 
                data={estudantes}
                renderItem={
                    ({item}) => {
                        return (
                            <View
                                style= {{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style= {{width: '40%', margin: 4}}>{item.nome}</Text>
                                <Text style= {{width: '40%', margin: 4}}>{item.curso}</Text>
                                <Text style= {{width: '20%', margin: 4}}>{item.ira}</Text>
                                <View style= {{margin: 4}}>
                                    <Button 
                                        title="Editar"
                                        onPress={()=>props.navigation.navigate('EditarEstudante', {id:item.id})}
                                    />
                                </View>
                                <View  style= {{margin: 4}}>
                                    <Button 
                                    title="Apagar"
                                    onPress={()=>apagarEstudante(item.id)}
                                    />
                                </View>
                            </View>
                        )
                    }
                }
                keyExtractor={estudante => estudante.id}
                />
            </SafeAreaView>
            <View  style={estilos.botao}>
                <Button 
                    title='Criar Estutante'
                    onPress={()=>props.navigation.navigate('CriarEstudante')}
                />
            </View>
            <View style={estilos.botao}>
                <Button 
                    title='Home'
                    onPress={()=>props.navigation.navigate('HomeEstudante')}
                />
            </View>
        </View>
    )
}

export default ListarEstudande;