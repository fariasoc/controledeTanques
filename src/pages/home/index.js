import React, { useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from '../../services/firebase'

export function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password).then(value => {

      console.log('Usuário cadastrado com sucesso! \n' + value.user.uid)

    }).catch(error => console.log(error))
  }

  async function login() {
    await signInWithEmailAndPassword(auth, email, password).then(value => {

      console.log('Login sucesso! \n' + value.user.uid)

    }).catch(error => console.log(error))
  }

  async function logout() {
    await signOut(auth).then(() => {
      console.log('Login sucesso')
    }).catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
      <Text> Controle de Tanques </Text>
      <TextInput
        placeholder="e-mail"
        placeholderTextColor="#313131"
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
      />


      <TextInput
        placeholder="Senha"
        placeholderTextColor="#313131"
        value={password}
        onChangeText={value => setPassword(value)}
        style={[styles.input, { marginBottom: 10 }]}
      />

      < Button
        title="Cadastar"
        onPress={() => createUser()}
      />

      < Button
        title="Entrar"
        onPress={() => login()}
      />

      < Button
        title="Sair"
        onPress={() => logout()}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Cobrir 100% da tela
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#313131',
    marginTop: 5,
    width: '80%',
    height: 50
  }
})