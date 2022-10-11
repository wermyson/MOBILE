import { Text, View } from "react-native"

const Questao01A = () => {
const dadosPessoais = {
    nome: "Wermyson",
    sobrenome: "Pinheiro",
    curso: "Design Digital",
}

    return (
        <View>
            <Text>Nome: {dadosPessoais.nome} </Text>
            <Text>Sobrenome: {dadosPessoais.sobrenome} </Text>
            <Text>Curso: {dadosPessoais.curso} </Text>
        </View>
    )
}

export default Questao01A;