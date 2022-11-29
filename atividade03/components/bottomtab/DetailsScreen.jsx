import { View, Text, Button } from "react-native-web";

const DetailsScreen = (props) => {
    return (
        <View style={{
            flex:1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}> Details Screen TAB</Text>
            {/* <Text style = {{fontSize:22}}>
                Nome: {props.route.params.nome}
            </Text>
            <Text style = {{fontSize:22}}>
            Profissao: {props.route.params.profissao}
            </Text> */}
            <View>
                <Button title="Home..."
                onPress={()=>props.navigation.navigate('HomeScreen')}
                />
            </View>
        </View>
    )
}

export default DetailsScreen;