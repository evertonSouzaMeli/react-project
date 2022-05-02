import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 0.0,
      altura: 0.0
    }
  }

  handleAltura = value => {
    this.setState({ altura: value })
  }

  handlePeso = value => {
    this.setState({ peso: value })
  }

  calculaImc = _ => {
    const imc = (this.state.peso / (this.state.altura ** 2))
    let mensagem
  
    if(imc < 18.5){
      mensagem = 'Abaixo do peso'
    }
  
    else if (imc >= 18.5 && imc < 25 ){
      mensagem = 'Peso normal'
    }
  
  
    else if (imc >= 25 && imc < 30 ){
      mensagem = 'Peso normal'
    }
  
    else if (imc >= 30 ){
      mensagem = 'Obesidade'
    }
  
    else {
      mensagem = 'ERRO'
    }

    console.log(this.state.peso)
    console.log(this.state.altura)
    console.log(imc)

    alert(mensagem)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} onBlur={false} placeholder={"Entre com seu peso"} onChangeText={this.handlePeso} />
        <TextInput style={styles.input} onBlur={false} placeholder={"Entre com sua altura"} onChangeText={this.handleAltura} />
        <Button style={styles.button} title={"CALCULAR"} onPress={this.calculaImc} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }, input: {
    padding: 5,
    margin: 10,
    width: '300px'
  }, button: {
    padding: 5,
    margin: 20,
  }
})

