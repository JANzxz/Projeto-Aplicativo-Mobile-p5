import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web'

const LoginScreen = () => {
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder='Digite seu email'
        style={styles.input}
        value={email}
        onChargeText={setEmail}
      />

      <TextInput
        placeholder='Digite sua senha'
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

        <Button title="Entrar"/>

        <TouchableOpacity style={[styles.socialButtons, {backgroundColor: "#DB4437"}]}>
            <Text style={styles.socialText}> Entrar com Google </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, alignItems: "center", padding: 20, justifyContent: "center"
    },

    title:{
        fontSize: 24, fontWeight: "bold", marginBottom: 20
    },

    input:{
        width: "100%", borderBottomWidth: 1, marginBottom: 20, padding: 8
    },
    
    orText:{
        marginVertical: 20, fontSize: 16, color: "#555"
    },

    socialBottons:{
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 12,
    width: "100%",
    margimVertical: 5,
    justifyContent: "center"
    },

    icon:{marginRight: 10},
    socialText: {color: "#fff", fontSize: 16, fontWeight: "bold"}


})

export default LoginScreen