import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { pagina_inicial } from './styles';

export default function Paginaprincipal() {
    const navigation = useNavigation();

    return (
        <View style={pagina_inicial.container}>
            <Image 
                source={require('../../assets/Professores/Design_sem_nome__1_-removebg-preview.png')}  
                style={pagina_inicial.imagem}
            />
            
            <View style={pagina_inicial.container2}>
                <Text style={pagina_inicial.textoPrincipal}>
                    Seu parceiro na jornada rumo ao sucesso nos vestibulares!
                </Text>
                <Pressable 
                    onPress={() => navigation.navigate("Login")}
                    style={pagina_inicial.botao}>
                    <Text style={pagina_inicial.textoBotao}>ENTRAR</Text>
                </Pressable>
                <Pressable 
                    onPress={() => navigation.navigate("Cadastro")}
                    style={pagina_inicial.inscrever}>
                    <Text style={pagina_inicial.textoInscrever}>Inscreva-se</Text>
                </Pressable>
            </View>

            <Image 
                source={require('../../assets/Professores/WhatsApp Image 2024-09-05 at 07.52.40.jpeg')} 
                style={pagina_inicial.imagem2}
            />

          
        </View>
    );
}
