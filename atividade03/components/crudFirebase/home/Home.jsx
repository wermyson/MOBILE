import { View, Text, Button } from "react-native-web";
import estilos from "../css/MeuCSS";

const Home = (props) => {
    return(
        <View style={estilos.container}>
            <Text  style={estilos.cabecalho}>Home</Text>
            <View  style={estilos.botao}>
                <Button 
                    title='Estudantes'
                    onPress={()=>props.navigation.navigate('HomeEstudante')}
                />
            </View>
            <View style={estilos.botao}>
                <Button 
                    title='Professores'
                    onPress={()=>props.navigation.navigate('HomeProfessor')}
                />
            </View>
        </View>
    )
}

export default Home;