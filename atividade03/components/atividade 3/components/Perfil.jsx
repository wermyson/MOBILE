import { Image } from "react-native";
import { View, Text, Button, TextInput } from "react-native-web";
import estilos from "./css/MeuCSS";

const Perfil = (props) => {
    const {nome, idade, email} = props.route.params.cadastro;

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Perfil</Text>
            <Image source={{uri: 'https://cdn.britannica.com/81/191581-050-8C0A8CD3/Alan-Turing.jpg', width: 100, height: 133}}/>
            <Text style={estilos.label}>Nome: {nome}</Text>
            <Text style={estilos.label}>Idade: {idade}</Text>
            <Text style={estilos.label}>Email: {email}</Text>
            <View style={estilos.botao}>
                <Button 
                    title='Home'
                    onPress={()=> props.navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}

export default Perfil;