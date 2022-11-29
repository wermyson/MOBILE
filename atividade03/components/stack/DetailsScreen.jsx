import { View, Text, Button } from "react-native-web";

const DetailsScreen = (props) => {
    return (
        <View style={{
            flex:1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}> Tela de Detalhes</Text>
            <Text style = {{fontSize:22}}>
                Nome: {props.route.params.nome}
            </Text>
            <Text style = {{fontSize:22}}>
            Profissao: {props.route.params.profissao}
            </Text>
            <View>
                <Button title="Home..."
                onPress={()=>props.navigation.navigate('HomeScreen')}
                />
            </View>
            <View>
                <Button title="Abrir modal..."
                onPress={()=>props.navigation.navigate('MyModalScreen')}
                />
            </View>
        </View>
    )
}

export default DetailsScreen;