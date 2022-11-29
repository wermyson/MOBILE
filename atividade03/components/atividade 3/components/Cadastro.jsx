import { View, Text, Button, TextInput } from "react-native-web";
import { useState } from "react";
import estilos from "./css/MeuCSS";

const Cadastro = (props) => {

    const estadoInicial = {
        nome: '',
        idade: '',
        email: '',
    }

    const [cadastro,setCadastro] = useState(estadoInicial);

    const handleCadastro = (name, value) => {
        setCadastro({...cadastro, [name]:value})
    }

    const enviarCadastro = () => {
        console.log(cadastro.nome)
        console.log(cadastro.idade)
        console.log(cadastro.email)
        props.navigation.navigate('Perfil', {cadastro})
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Cadastro</Text>
            <TextInput 
            style={estilos.input} 
            placeholder="Entre com o nome"
            onChangeText={(value)=> handleCadastro('nome', value)}
            value={cadastro.nome}
            />
            <TextInput 
            style={estilos.input} 
            placeholder="Entre com a idade" 
            onChangeText={(value)=> handleCadastro('idade', value)}
            value={cadastro.idade}
            />
            <TextInput 
            style={estilos.input} 
            placeholder="Entre com o e-mail" 
            onChangeText={(value)=> handleCadastro('email', value)}
            value={cadastro.email}
            />
            <View style={estilos.botao}>
                <Button 
                    title="OK"
                    onPress={enviarCadastro}
                />
            </View>
        </View>
    )
}

export default Cadastro;