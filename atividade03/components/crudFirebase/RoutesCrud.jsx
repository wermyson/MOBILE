import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeEstudante from "./estudante/HomeEstudante";
import CriarEstudante from "./estudante/CriarEstudante";
import ListarEstudande from "./estudante/ListarEstudante";
import EditarEstudante from "./estudante/EditarEstudante";
import HomeProfessor from "./professor/HomeProfessor";
import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";
import Home from "./home/Home";


const Stack = createNativeStackNavigator()

const RoutesCrud = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={{title:'Home'}}
            />
            <Stack.Screen 
                name='HomeEstudante' 
                component={HomeEstudante} 
                options={{title:'Home'}}
            />
            <Stack.Screen 
                name='CriarEstudante' 
                component={CriarEstudante}
                options={{title:'Criar Estudante'}}
            />
            <Stack.Screen 
                name='ListarEstudante' 
                component={ListarEstudande} 
                options={{title:'Listar Estudantes'}}
            />
            <Stack.Screen 
                name='EditarEstudante' 
                component={EditarEstudante} 
                options={{title:'Editar Estudante'}}
            />
            <Stack.Screen 
                name='HomeProfessor' 
                component={HomeProfessor} 
                options={{title:'Home'}}
            />
            <Stack.Screen 
                name='CriarProfessor' 
                component={CriarProfessor}
                options={{title:'Criar Professor'}}
            />
            <Stack.Screen 
                name='ListarProfessor' 
                component={ListarProfessor} 
                options={{title:'Listar Professores'}}
            />
            <Stack.Screen 
                name='EditarProfessor' 
                component={EditarProfessor} 
                options={{title:'Editar Professor'}}
            />
        </Stack.Navigator>
    )
}

export default RoutesCrud;