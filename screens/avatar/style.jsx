import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4', // Cor de fundo suave para a página
    alignItems:'center',
    height:'90%'
   

  },
  header: {
    marginBottom: 20, // Aumenta a margem inferior para espaçamento
    alignItems: 'center', // Centraliza o título no topo

  

  },
  headerTitle: {
    fontSize: 28, // Aumenta o tamanho do título para destaque
    fontWeight: 'bold',
    color: '#333', // Cor suave para o título
    fontFamily: 'KollektifBold', // Adiciona a fonte 'KollektifBold'
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40, // Aumenta o espaçamento inferior
    width: 120,  // Aumenta o tamanho do avatar na tela de perfil
    height: 90,

  },
  avatar: {
    width: 130,  // Aumenta o tamanho do avatar na tela de perfil
    height: 130,
    borderRadius: 65,  // Mantém o formato circular
    borderColor: '#007bff', // Cor azul para a borda do avatar
    borderWidth: 3,  // Borda para destacar o avatar
    marginBottom: 15,
    shadowColor: '#000',  // Adiciona sombra ao avatar
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,  // Sombra mais pronunciada
    shadowRadius: 5,
    elevation: 6,  // Efeito de elevação no Android
  },
  changeAvatarButton: {
    backgroundColor: '#007bff', // Cor de fundo do botão de mudar avatar
    paddingVertical: 12,
    paddingHorizontal: 30, // Aumenta o padding horizontal para um botão mais largo
    borderRadius: 25,  // Bordas arredondadas no botão
    shadowColor: '#000',  // Adiciona sombra ao botão
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  changeAvatarButtonText: {
    color: '#fff', // Texto branco no botão
    fontSize: 18, // Aumenta o tamanho da fonte
    fontWeight: '600',  // Peso maior para destacar o texto
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Fundo escuro no modal
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalAvatar: {
    width: 100,  // Tamanho dos avatares no modal
    height: 20,
    borderRadius: 50,  // Avatar circular no modal
    margin: 10,  // Espaçamento entre os avatares no modal
    borderColor: '#fff',  // Borda branca nos avatares do modal
    borderWidth: 2,
    shadowColor: '#000',  // Sombra nos avatares do modal
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  closeModalButton: {
    marginTop: 30,
    backgroundColor: '#ff4757', // Cor de fundo vermelha para o botão de fechar
    paddingVertical: 12,
    paddingHorizontal: 30, // Aumenta o padding horizontal
    borderRadius: 25,  // Bordas arredondadas
    shadowColor: '#000',  // Adiciona sombra
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  closeModalButtonText: {
    color: '#fff', // Texto branco no botão de fechar modal
    fontSize: 18, // Aumenta o tamanho da fonte
    fontWeight: '600',
  },
  avatarList: {
    flexDirection: 'row', // Alinha os avatares em linha
    flexWrap: 'wrap', // Permite quebra de linha
    justifyContent: 'center', // Centraliza os avatares
    paddingVertical: 20, // Espaçamento vertical
  },
  avatarImage: {
    width: 90, // Tamanho fixo e apropriado para os avatares
    height: 90,
    borderRadius: 45, // Para deixar a imagem redonda
    margin: 10, // Espaçamento entre os avatares
    borderColor: '#007bff', // Adiciona borda azul aos avatares
    borderWidth: 2,
  },
});

