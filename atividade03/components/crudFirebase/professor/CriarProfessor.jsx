import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native-web";
import estilos from "../css/MeuCSS";

import ProfessorService from "../service/ProfessorServise";
import { firestoreDB } from "../firebase/firebaseConfig";

const CriarProfessor = (props) => {

    const [nome,setNome] = useState('');
    const [curso,setCurso] = useState('');
    const [salario,setSalario] = useState('');

    const acaoSubmite = () => {
        ProfessorService.criar(
            firestoreDB,
            (id)=> {
                alert(`Professor ${nome} inserido!`),
                props.navigation.navigate('ListarProfessor')
            },
            {nome, curso, salario}
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Professor</Text>
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
                placeholder="Salario"
                value={salario}
                keyboardType='numeric'
                onChangeText={(salario)=> setSalario(salario)}
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

export default CriarProfessor;