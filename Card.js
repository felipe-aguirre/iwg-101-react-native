import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const letra = "rgb(64,65,79)"
const Card = (props) => {
    return <View style={estilo.container}>
        <MaterialIcons name={props.icono} size={32} color={letra} />
        <Text style={estilo.texto}>
            {props.texto}
        </Text>
    </View>
}

const estilo = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: "rgb(247,249,252)",
        borderColor: "#CACACA",
        borderRadius: 10,
        borderWidth: 1,
        margin: 12,
        flexDirection: 'row',
        padding: 10

    },
    texto: {
        color: letra,
        alignSelf: "center",
        fontSize: 14,
        marginLeft: 30

    }

})
export default Card