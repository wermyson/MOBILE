import { View, Text, SafeAreaView, FlatList, Button} from "react-native-web"

import ProfessorService from "../service/ProfessorServise";
import { firestoreDB } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import estilos from "../css/MeuCSS";

const ListarProfessor = (props) => {

    const [professores, setProfessors] = useState ([])

    useEffect(
        () => {
            ProfessorService.listar(
                firestoreDB, 
                (professores) => {
                    setProfessors(professores)
                }
            )
        },
        []
    )

    const apagarProfessor = (id) => {
        ProfessorService.apagar(
            firestoreDB,
            (resultado) => {
                let professoresResultado = professores.filter(
                    (professor)=>professor.id !== id
                )
                setProfessors(professoresResultado)
            },
            id
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar professores</Text>
            <SafeAreaView>
                <FlatList 
                data={professores}
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
                                <Text style= {{width: '20%', margin: 4}}>{item.salario}</Text>
                                <View style= {{margin: 4}}>
                                    <Button 
                                        title="Editar"
                                        onPress={()=>props.navigation.navigate('EditarProfessor', {id:item.id})}
                                    />
                                </View>
                                <View  style= {{margin: 4}}>
                                    <Button 
                                    title="Apagar"
                                    onPress={()=>apagarProfessor(item.id)}
                                    />
                                </View>
                            </View>
                        )
                    }
                }
                keyExtractor={professor => professor.id}
                />
            </SafeAreaView>
            <View  style={estilos.botao}>
                <Button 
                    title='Criar Professor'
                    onPress={()=>props.navigation.navigate('CriarProfessor')}
                />
            </View>
            <View style={estilos.botao}>
                <Button 
                    title='Home'
                    onPress={()=>props.navigation.navigate('HomeProfessor')}
                />
            </View>
        </View>
    )
}

export default ListarProfessor;