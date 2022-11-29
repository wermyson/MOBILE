import { useEffect, useState } from "react";
import { Image } from "react-native";
import { View, Text, Button } from "react-native-web";
import estilos from "./css/MeuCSS";
import IMC from "./IMC";

const Resultado = ({navigation, route}) => {

    const [IMC, setImc] = useState(0);

    useEffect(
        ()=> {
            const {peso, altura} = route.params
            setImc(peso/(altura*altura))
        },
        []
    )
    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Resultado</Text>
            <Text style={estilos.label}>Seu IMC é: {IMC.toFixed(1)}</Text>
            <Image style={{margin:8}} source={{uri: 'https://www.drrogermoura.com.br/images/artigos/tabela-imc.png', width: 340, height: 236}}/>
            <View  style={estilos.botao}>
                <Button 
                    title="Home"
                    onPress={()=> navigation.navigate('Home')}
                />
            </View>

        </View>
    )
}

export default Resultado;