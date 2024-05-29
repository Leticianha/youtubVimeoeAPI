import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Entrar() {

const navigation=useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo!</Text>
            <Text style={styles.texto}>Pesquise vídeos do YouTube ou do Vimeo</Text>
            <TouchableOpacity style={[styles.botao, {borderWidth:2}]} onPress={() => navigation.navigate('Tabs')}>
                <Text style={styles.textoBotao}>Acessar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontWeight: '700',
        fontSize: 22
    },
    texto: {
        fontSize: 18
    },
    botao : {
        padding: 10,
        marginTop: 30,
        borderRadius: 10
    },
    textoBotao: {
        fontSize: 18
    }
});
