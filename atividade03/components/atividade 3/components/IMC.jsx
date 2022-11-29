import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native-web";
import estilos from "./css/MeuCSS";

const IMC = ({navigation}) => {

    const [peso,setPeso] = useState(0)
    const [altura,setAltura] = useState(0)

    const enviarDados = ()=> {
        navigation.navigate('Resultado', {peso, altura})
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>IMC</Text>
            <TextInput 
                style={estilos.input} 
                placeholder="Adicione o seu peso"
                keyboardType='numeric'
                onChangeText={(value)=>setPeso(value)}
                />
            <TextInput 
                style={estilos.input} 
                placeholder="Adicione a sua altura"
                keyboardType='numeric'
                onChangeText={(value)=>setAltura(value)}
                />
            <View style={estilos.botao}>
                <Button 
                    title="OK"
                    onPress = {enviarDados}
                />
            </View>
        </View>
    )
}

export default IMC;