import { NavigationContainer } from '@react-navigation/native';
// import RoutesAtividade03 from './components/atividade 3/components/RoutesAtividade03';
// import Routes from './components/stack/Routes';
// import RoutesTab from './components/bottomtab/RoutesTab';
// import RoutesDrawer from './components/drawer/RoutesDrawer';
import RoutesCrud from './components/crudFirebase/RoutesCrud';

export default function App() {
  return (
    <NavigationContainer>
      <RoutesCrud />
    </NavigationContainer>
  );
}