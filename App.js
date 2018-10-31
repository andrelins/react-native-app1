/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const gerarNumeroAleatorio = () => {
    var numero_aleatorio = Math.random();
    numero_aleatorio = Math.floor(numero_aleatorio * 10);
    alert(numero_aleatorio);
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Gerador de números randômicos!!!</Text>
        <Button
          onPress={gerarNumeroAleatorio}
          title="Gerar um número randômico"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // }
});
