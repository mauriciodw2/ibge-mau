import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E9AFE',
        alignItems: 'center',
    },

    textHeader: {
        color: '#0404B4',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: '5%'
    },

    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    input: {
        color: '#0404B4',
        borderBottomColor: '#0404B4',
        marginTop: '10%',
        borderBottomWidth: 2,
        width: '53%',
        height: '7%',
        fontSize: 25,
        borderRadius: 8
    },
    
    buttonText: {
       color: '#fff',
       textTransform: 'uppercase',
       fontWeight: 'bold' 
    },

    button: {
        backgroundColor: '#0404B4',
        marginTop: '5%',
        width: '30%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});

export default Style;