import { View, Text, Button } from "react-native-web";

const HomeScreen = (props) => {
    return (
        <View style={{
            flex:1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}> Tela Home</Text>
            <View>
                <Button title ="Detalhes..."
                onPress={()=>props.navigation.navigate(
                    'DetailsScreen',
                    {
                        nome: 'Wermyson Pinheiro',
                        profissao: 'Estudante'
                    }
                    )}
                />
            </View>
        </View>
    )
}

export default HomeScreen;