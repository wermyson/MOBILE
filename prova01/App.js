import { StyleSheet, Text, View } from 'react-native';
import Questao01 from './components/Questao01/Questao01';
import Questao02 from './components/Questao02/Questao02';
import Questao03 from './components/Questao03/Questao03';
import Questao04 from './components/Questao04/Questao04';
import Questao05 from './components/Questao05/Questao05';

export default function App() {
  const Questao = (props) => {
    return (
    <View style={styles.questaoView}>
      <View style={styles.viewTitulo}>
      <Text style={styles.titulo}>{props.questaoNumero}</Text>
      </View>
      <View style={styles.content}>
      {props.questao}
      </View>
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <Questao questaoNumero= "Questão 01" questao= {<Questao01/>}/>
      <Questao questaoNumero= "Questão 02" questao= {<Questao02/>}/>
      <Questao questaoNumero= "Questão 03" questao= {<Questao03/>}/>
      <Questao questaoNumero= "Questão 04" questao= {<Questao04/>}/>
      <Questao questaoNumero= "Questão 05" questao= {<Questao05/>}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  questaoView: {
    display: 'flex',
    width: "100%",
    backgroundColor: '#e5e5e5',
    paddingBottom: 12,
    // marginBottom: 16,
    borderColor: 'black',
    borderWidth: 2,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  viewTitulo: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    borderBottomWidth: 2,
  }
});
