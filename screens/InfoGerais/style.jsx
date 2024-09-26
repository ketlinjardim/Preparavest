import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Fundo claro para a página
  },
  contentContainer: {
    padding: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2C3E50', // Azul escuro elegante
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#FFFFFF', // Fundo branco nas seções
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000', // Sombras suaves para destaque
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2980b9', // Azul forte para títulos
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 15,
  },
  sectionContent: {
    marginBottom: 10,
  },
  titulos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495E', // Azul escuro para subtítulos
    marginBottom: 5,
  },
  textos: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 10,
    lineHeight: 22,
  },
  link: {
    fontSize: 16,
    color: '#3498db',
    textDecorationLine: 'underline', // Links sublinhados e em azul
  },
});
