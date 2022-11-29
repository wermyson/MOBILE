import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native-web";
import estilos from "../css/MeuCSS";

import EstudanteService from "../service/EstudanteServise";
import { firestoreDB } from "../firebase/firebaseConfig";

const CriarEstudante = (props) => {

    const [nome,setNome] = useState('');
    const [curso,setCurso] = useState('');
    const [ira,setIra] = useState('');

    const acaoSubmite = () => {
        EstudanteService.criar(
            firestoreDB,
            (id)=> {
                alert(`Estudante ${nome} inserido!`),
                props.navigation.navigate('ListarEstudante')
            },
            {nome, curso, ira}
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Estudante</Text>
            <TextInput 
                style={estilos.input}
                placeholder="Nome"
                value={nome}
                onChangeText={(nome)=> setNome(nome)}
            />
            <TextInput 
                style={estilos.input}
                placeholder="Curso"
                value={curso}
                onChangeText={(curso)=> setCurso(curso)}
            />
            <TextInput 
                style={estilos.input}
                placeholder="Ira"
                value={ira}
                keyboardType='numeric'
                onChangeText={(ira)=> setIra(ira)}
            />
            <View style={estilos.botao}>
                <Button 
                    title="SUBMETER" 
                    onPress={acaoSubmite}
                    />
            </View>
            <View  style={estilos.botao}>
                <Button 
                    title='VOLTAR'
                    onPress={()=>props.navigation.goBack()}
                />
            </View>
        </View>
    )
}

export default CriarEstudante;