import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Paginaprincipal from './screens/pp/index.jsx';
import HomeScreen from "./screens/home/index.jsx";
import PaginaEnem from "./screens/pgENEM/index.jsx";
import Informacoes from "./screens/InfoGerais/index.jsx";
import Conteudorel from "./screens/ContRelevante/index.jsx";
import EstatisticasENEM from "./screens/Professores/index.jsx";
import Login from "./screens/Login/index.jsx";
import Cadastro from "./screens/Cadastro/index.jsx";
import Avatar from "./screens/avatar/index.jsx";
import StudyTips from "./screens/Questoes/index.jsx"; // Certifique-se de que o caminho está correto

// Importa o AvatarProvider para usar o contexto do avatar
import { AvatarProvider } from './components/avatarcomp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Envolvendo o aplicativo no AvatarProvider
    <AvatarProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Pagina principal" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Conteudo relevante" component={Conteudorel} />
          <Stack.Screen name="Questoes" component={StudyTips} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Informacoes" component={Informacoes} />
          <Stack.Screen name="Pagina Enem" component={PaginaEnem} />
          <Stack.Screen name="Prepare-se" component={EstatisticasENEM} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Pagina principal" component={Paginaprincipal} />
          <Stack.Screen name="avatar" component={Avatar} />
          <Stack.Screen name="Dicas" component={StudyTips} />
        </Stack.Navigator>
      </NavigationContainer>
    </AvatarProvider>
  );
}
