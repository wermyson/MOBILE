import { View, Text, StyleSheet } from "react-native";
import Questao01A from "./Questao01A";
import Questao01B from "./Questao01B";

const Questao01 = () => {
    return (
    <View style={styles.container}>
        <Questao01A/>
        <Questao01B/>
    </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            // alignItems: 'center',
            backgroundColor: '#e5e5e5',
            padding: 20
        }
    }
)
export default Questao01;