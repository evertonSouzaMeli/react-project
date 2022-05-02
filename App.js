import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mensagem: ""
    }
  }

mudaTexto = text => { this.setState({mensagem: text})}

apertaBotao = () => {
  const { mensagem } = this.state
  alert(!mensagem ? "Mensagem é nula" : mensagem)
}

  render(){
  return (
    <View style={styles.container}>
      <TextInput onBlur={false} onChangeText={this.mudaTexto} placeholder={"digite seu texto aqui"}/>
      <Button title={"Pressione"} onPress={this.apertaBotao}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDCD',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
})