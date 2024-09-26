import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Linking } from 'react-native';
import { estilo } from './style';
import * as Font from 'expo-font';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';
import { useNavigation } from '@react-navigation/native';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';

const AccordionItem = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={estilo.accordionContainer}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={estilo.accordionTitle}>{title}</Text>
      </TouchableOpacity>
      {expanded && <View style={estilo.accordionContent}>{children}</View>}
    </View>
  );
};

export default function Conteudorel() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        KollektifBold: KollektifBold,
        Kollektif: Kollektif,
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <ScrollView>
      <View>
        <Cabecalho />

        <View style={estilo.contentContainer}>
          <Text style={estilo.textStyle}>Conteúdo Relevante</Text>

          <AccordionItem title="Linguagens, Códigos e suas Tecnologias">
            <Text style={estilo.accordionText}>- Interpretação de textos literários e não literários: Foco na compreensão global, inferências, metáforas e funções da linguagem.</Text>
            <Text style={estilo.accordionText}>- Gramática normativa e linguística: Concordância verbal e nominal, crase, regência, funções sintáticas e classes gramaticais.</Text>
            <Text style={estilo.accordionText}>- Produção textual: Estrutura dissertativa-argumentativa, coesão e coerência, argumentação e elementos conectivos.</Text>
            <Text style={estilo.accordionText}>- Literatura brasileira e portuguesa: Escolas literárias, obras de autores clássicos e contemporâneos, análise de poemas e romances.</Text>
            <Text style={estilo.accordionText}>- Língua estrangeira (inglês ou espanhol): Leitura e interpretação de textos, vocabulário contextual, gêneros textuais, e funções discursivas.</Text>
          </AccordionItem>

          <AccordionItem title="Matemática e suas Tecnologias">
            <Text style={estilo.accordionText}>- Álgebra: Funções (afim, quadrática, exponencial e logarítmica), equações do 1º e 2º grau, progressões aritméticas e geométricas.</Text>
            <Text style={estilo.accordionText}>- Geometria: Áreas e volumes de figuras planas e espaciais, teorema de Pitágoras, semelhança de triângulos e geometria analítica (equações de reta e circunferência).</Text>
            <Text style={estilo.accordionText}>- Trigonometria: Funções trigonométricas, relações no triângulo retângulo, lei dos senos e cossenos, e gráficos das funções seno e cosseno.</Text>
            <Text style={estilo.accordionText}>- Estatística e probabilidade: Média, mediana, moda, variância, desvio padrão, análise combinatória, probabilidade simples e condicional.</Text>
            <Text style={estilo.accordionText}>- Análise de gráficos e tabelas: Leitura e interpretação de gráficos de barras, setores, histogramas e tabelas, aplicados a situações do cotidiano.</Text>
          </AccordionItem>

          <AccordionItem title="Ciências Humanas e suas Tecnologias">
            <Text style={estilo.accordionText}>- História do Brasil e do mundo: Escravidão, independência, revoluções industriais, Era Vargas, Ditadura Militar, e movimentos sociais no século XX e XXI.</Text>
            <Text style={estilo.accordionText}>- Geografia política, econômica e cultural: Globalização, industrialização, urbanização, questões ambientais, cartografia e estudos de população.</Text>
            <Text style={estilo.accordionText}>- Sociologia: Estrutura social, cidadania, movimentos sociais, globalização, cultura de massa e relações de poder.</Text>
            <Text style={estilo.accordionText}>- Filosofia: Ética, política, teorias do conhecimento, filosofia moderna e contemporânea, e relação entre ciência e filosofia.</Text>
            <Text style={estilo.accordionText}>- Atualidades e contextos sociais: Temas como desigualdade social, políticas públicas, globalização, questões ambientais e econômicas.</Text>
          </AccordionItem>

          <AccordionItem title="Ciências da Natureza e suas Tecnologias">
            <Text style={estilo.accordionText}>- Biologia celular e molecular: Estrutura celular, organelas, metabolismo celular, divisão celular (mitose e meiose) e genética.</Text>
            <Text style={estilo.accordionText}>- Ecologia: Ciclos biogeoquímicos, relações ecológicas, cadeias alimentares, impactos ambientais e sustentabilidade.</Text>
            <Text style={estilo.accordionText}>- Física (mecânica, termodinâmica, óptica, etc.): Leis de Newton, trabalho e energia, calorimetria, óptica geométrica, eletricidade e magnetismo.</Text>
            <Text style={estilo.accordionText}>- Química (química geral, orgânica e inorgânica): Ligações químicas, estequiometria, reações químicas, equilíbrio químico, ácidos e bases, funções orgânicas.</Text>
            <Text style={estilo.accordionText}>- Aplicação dos conceitos científicos em situações do cotidiano: Questões interdisciplinares envolvendo fenômenos naturais, tecnologia e qualidade de vida.</Text>
          </AccordionItem>

          <View style={{ flexDirection: 'collumn' }}>
            <View style={estilo.viewtitulo}>
              <Text style={estilo.tituloProf}>Professores Indicados</Text>
            </View>

            <View style={estilo.container}>
              <View style={estilo.bloco}>
                <Text style={estilo.Materias}>Matemática</Text>
                <View style={estilo.professores}>
                  <Image
                    style={estilo.Perfil}
                    source={require('../../assets/Professores/FerrettoProfile.jpg')}
                  />
                  <View>
                    <Text style={estilo.textosMaterias}>Professor Ferretto</Text>
                    <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@professorferretto')}>
                      <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                      <Text style={estilo.biografia}>
                        Somos a melhor comunidade de professores da internet, com o melhor preço do Brasil e com a missão de fazer você conquistar a sua aprovação no ENEM e Vestibulares de todo o Brasil!
                      </Text>
                    </Pressable>
                  </View>
                </View>

                {/* Repita o padrão para os outros professores */}
                {/* Por exemplo, para Sandro Curió: */}
                <View style={estilo.professores}>
                  <Image
                    style={estilo.Perfil}
                    source={require('../../assets/Professores/CurioProfile.jpg')}
                  />
                  <View>
                    <Text style={estilo.textosMaterias}>Dicasdemat Sandro Curió</Text>
                    <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@sandrocuriodicasdemat/featured')}>
                      <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                      <Text style={estilo.biografia}>
                        O canal DicasdeMat Sandro Curió tem como objetivo ajudar estudantes, em todos os níveis da matemática. Através de uma didática descontraída. Vamos juntos, RUMO AO TOPO!
                      </Text>
                    </Pressable>
                  </View>
                </View>

                {/* Continue com outros professores... */}
                <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/GiscomGizProfile.jpg')}
              />
              <View >
                <Text style={estilo.textosMaterias}>Gis com Giz Mathematics</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@Giscomgiz/featured', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Oi!! Sou professor de Matemática e Mestre em Educação Matemática. Criei o canal com o objetivo de mostrar que é fácil aprender matemática e, por isso, procuro dar explicações claras e objetivas. Bons estudos.</Text>
                </Pressable>
              </View>
            </View>
      
             <Text style={estilo.Materias}>Física</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/CoelhoProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Coelho</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@profcoelho', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>O canal de Física do Professor Coelho sintetiza o que milhares de estudantes desejam: é a OPORTUNIDADE única para adquirir um elevado CONHECIMENTO em física, desde o nível básico até o avançado. Venha estudar conosco!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/BoaroProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Boaro</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@professorboaro/featured', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Fala Galera! Neste Canal postarei vídeos com dicas para os vestibulares, resolução das provas mais recentes, além das aulas divididas em pequenos módulos para facilitar seu aprendizado. Aproveite!</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Química</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/MichelProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Café com química - Prof Michel</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@profmichel', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>O canal café com química surgiu para oferecer uma solução criativa no estudo de química!!! Através de aulas curtas, experiências e exercícios temos o enorme prazer de contribuir para a democratização do ensino no Brasil.</Text>
                </Pressable>
              </View>
            </View>
      
            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/CabralProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Gabriel Cabral</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@ProfessorGabrielCabral', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Canal voltado para o ensino da Química de maneira rápida e divertida.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Literatura</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/AlencarProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Literatura com Alencar</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@LiteraturacomAlencar', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Olá, meu nome é Alencar Schueroff. Com minhas videoaulas de Literatura, ajudo você em provas, mostrando e ensinando o que mais cai em Literatura no Enem, em vestibulares e concursos.</Text>
                </Pressable>
              </View>
            </View>

            </View>

            <View style={estilo.bloco}>

            <Text style={estilo.Materias}>Biologia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/SamuelProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Biologia com Samuel Cunha</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@professorsamuelcunha', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Bem-vindos ao Biologia com Samuel Cunha, um canal dedicado à educação! Iniciou este canal e colocou em prática o sonho de ajudar a melhorar a educação desse brasilzão afora! </Text>
                </Pressable>
              </View>
            </View>
           

          

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/GoulartProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Prof. Guilherme Goulart - Biologia</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@ProfGuiGoulart', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Projeto voltado a estudantes com interesse em compreender a biologia como um todo, seja para passar no vestibular, seja para tirar uma boa nota em uma prova.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Português</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/NoslenProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Noslen</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@ProfessorNoslen', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Canal voltado para o ensino de toda a Língua Portuguesa, com o intuito de facilitar a aprendizagem de maneira rápida e divertida! Maior canal de educação do Brasil e maior plataforma de LP do Brasil!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/profleticia.jpeg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Português com Letícia</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/c/Portugu%C3%AAscomLet%C3%ADcia', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>🚀 PORTUGUÊS COMPLETO | Sua aprovação está aqui! Curso completo, do básico ao avançado, com videoaulas exclusivas. Mais de 150 aulas aprofundadas e objetivas com foco em concursos públicos.</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>Geografia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/RicardoProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Ricardo Marcílio</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/c/ProfessorRicardoMarc%C3%ADlio', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Canal dedicado a pessoas que buscam uma visão crítica dos principais acontecimentos do mundo. Voltado a pré-vestibulandos e curiosos em geral em assuntos relacionados à Geografia & Atualidades</Text>
                </Pressable>
              </View>
            </View>

            <Text style={estilo.Materias}>História, Sociologia e Filosofia</Text>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/ParabolicaProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Parabólica</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/c/Parab%C3%B3lica', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Olá, eu sou Pedro Rennó, sou Professor de História e Filosofia de cursinho. Neste canal, Parabólica, terei sempre o maior prazer em lhes ajudar a conquistar os seus objetivos. Espero que gostem e sejam muito bem vindos!</Text>
                </Pressable>
              </View>
            </View>

            <View style={estilo.professores}>
              <Image
              style={estilo.Perfil}
              source={require('../../assets/Professores/FerrariProfile.jpg')}
              />
              <View>
                <Text style={estilo.textosMaterias}>Professor Ferrari</Text>
                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@ProfessorFerrari', 'Vestibular')}>
                  <Text style={estilo.textosMaterias}>Canal Youtube</Text>
                  <Text style={estilo.biografia}>Canal do Professor Ferrari - humanidades para Enem e vestibulares.</Text>
                </Pressable>
              </View>
            </View>
 
              </View>
            </View>
          </View>
        </View>
      </View>
      <FooterComponent/>
    </ScrollView>
  );
}
