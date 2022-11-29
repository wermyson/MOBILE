import { View, Text, Button, TextInput } from "react-native-web";
import estilos from "./css/MeuCSS";

const Sobre = ({navigation}) => {
    return (
        <View  style={estilos.container}>
            <Text style={estilos.cabecalho}>Sobre</Text>
            <Text  style={estilos.label}>Um texto sobre a aplicação</Text>
            <View  style={estilos.botao}>
                <Button 
                title="Home"
                onPress={()=> navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}

export default Sobre;