import { StyleSheet } from "react-native";

export const pagina_inicial = StyleSheet.create({
    container: {
        backgroundColor: "#38B6FF",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingVertical: 10,
        padding:10,
      
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
       
    },

    botao: {
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginVertical: 10,
        width: 150,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#000',
        fontWeight: 'bold',
        fontSize:20
    },
    inscrever: {
        marginTop: 10,
        fontSize:18
    },
    textoInscrever: {
        color: '#000',
        textDecorationLine: 'underline',
        fontSize:20
    },
    textoPrincipal: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    imagem: {
        height: 400,
        width: 900,
        marginBottom:-150,
        resizeMode: 'contain',
    },
    imagem2: {
        height: 320,
        width: 390,
        marginVertical: 20,
        borderRadius: 15,
    },
    gradientFooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
