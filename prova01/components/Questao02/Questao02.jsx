import { useState } from "react"
import { Button, StyleSheet, Text, TextInput } from "react-native"
import { View } from "react-native-web"

const Questao02 = () => {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [resultado, setResultado] = useState();

    const somar = () => {
        setResultado(parseFloat(number1) + parseFloat(number2));
    }
    const subtrair = () => {
        setResultado(parseFloat(number1) - parseFloat(number2));
    }
    const multiplicar = () => {
        setResultado(parseFloat(number1) * parseFloat(number2));
    }
    const dividir = () => {
        setResultado(parseFloat(number1) / parseFloat(number2));
    }

    return (<View style={estilos.container}>
        <Text style={estilos.cabecalho}> Faça o seu calculo </Text>
        <View style={estilos.viewInput}>
        <TextInput
                placeholder='Número 1'                
                style={estilos.input}
                value={number1}
                onChangeText={(number1) => {
                    setNumber1(number1)
                }}
            />
        <TextInput
                placeholder='Número 2'
                style={estilos.input}
                value={number2}
                keyboardType="numeric"
                onChangeText={(number2) => {
                    setNumber2(number2)
                }}
            />
        </View>
        <View style={estilos.viewBotoes}>
            <View style={estilos.botao}>
                <Button
                    title='+'
                    onPress={somar}
                />
            </View>
            <View style={estilos.botao}>
            <Button
                title='-'
                onPress={subtrair}
            />
            </View>
            <View style={estilos.botao}>
            <Button
                title='*'
                onPress={multiplicar}
            />
            </View>
            <View style={estilos.botao}>
            <Button
                title='/'
                onPress={dividir}
            />
            </View>
        </View>
        
        <View>
            <Text>Resultado: {resultado}</Text>
        </View>
    </View>)
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e5e5'
    },
    cabecalho: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    input: {
        backgroundColor: "lightblue",
        height: 28,
        width: 84,
        borderColor: "gray",
        borderWidth: 2,
        padding: 2,
        margin: 10
    },
    viewInput: {
        display: 'flex',
        flexDirection: 'row',
    },
    botao: {
        width: 40,
        margin: 15,
        backgroundColor: "lightblue"
    },
    viewBotoes: {
        display: 'flex',
        flexDirection: 'row',
    }
})

export default Questao02;