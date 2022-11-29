import { StyleSheet } from "react-native";

const estilos = StyleSheet.create(
    {
        container: {
            flex:1,
            flexDiretion: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 25,
        },
        cabecalho: {
            fontSize: 26,
            fontWeight: 'bold',
            margin: 16,
        },
        botao: {
            width: '90%',
            margin: 10,
            backgroundColor: 'lightblue',
        },
        input: {
            height: 45,
            width: '90%',
            borderColor: 'gray',
            borderWidth: 2,
            paddingLeft: 20,
            margin: 8,
        },
        label: {
            fontSize: 16,
            fontWeight: 'bold',
            margin: 16,
        },

    }
)

export default estilos;