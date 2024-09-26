import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  cabecalho: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around', // Para dar um pouco mais de espaço
   
    alignItems: 'center',
    backgroundColor: '#38B6FF',
    paddingVertical: 15, // Aumenta o padding para mais espaço
    height: 100,
    elevation: 4, // Sombra para dar profundidade no cabeçalho
  },

  ImagemLogo: {
    height: 160, // Ajuste a altura para melhor visualização
    width: 200, // Ajuste a largura para melhor proporção
    marginBottom:-20
  },

  perfilmodal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo semi-transparente
    padding: 20,
  },

  titulomodal: {
    fontSize: 28, 
    fontFamily: 'KollektifBold',
    color: '#fff', 
    marginBottom: 15,
    textAlign: 'center', 
  },

  titulomodal1: {
    fontSize: 24, 
    fontFamily: 'Kollektif',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center', 
    marginTop:20
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent:'space-around',
    backgroundColor: '#38B6FF', 
    height: '60%',
    width: '85%',
    borderRadius: 15, 
    padding: 25, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 5, 
  },

  avatarmodal: {
    flex: 1,
    width: '100%',
    backgroundColor: '#38B6FF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },

  imagemavatar: {
    borderRadius: 100,
    height: 120, 
    width: 120, 
    marginBottom: 20, 
  },

  textomodal: {
    fontSize: 22, 
    fontFamily: 'Kollektif',
    color: '#fff',
    textAlign: 'center', 
  },

  botal: {
    backgroundColor: '#fff',
    borderRadius: 10, 
    paddingVertical: 12,
    paddingHorizontal: 20, 
    fontFamily: 'Kollektif',
    marginVertical: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },

  

  menu: {
    position: 'absolute',
    top: '11.5%',
    left: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderBottomRightRadius: 15, 
    elevation: 6, 
    zIndex: 1,
  },

  menuItem: {
    paddingVertical: 14, 
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
    textAlign:'left', 
  },
  
  menuOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },

  avatarIcon: {
    width: 50, 
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0", 
    borderWidth: 2, // Borda
    borderColor: '#38B6FF', 
  },
});