import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mensagem: ""
    }
  }

mudaTexto = text => {
  this.setState({mensagem: text})
}

  render(){
  return (
    <View style={styles.container}>
      <TextInput onBlur={false} onChangeText={this.mudaTexto} placeholder={"digite seu texto aqui"}/>
      <Text>{this.state.mensagem}</Text>
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