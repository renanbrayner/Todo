import React, { useState, useEffect} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { GLView } from 'expo-gl';

import logoImg from '../../assets/logo.png';

const fragSrc = `
void main(void) {
  gl_FragColor = vec4(0.0,0.0,0.0,0.5);
}
`;

let _initialized = false;
// lol

export default class Editor extends React.Component {
  render() {
    


    return (
      <View style={styles.container}>
        <GLView
          style={{ width: 300, height: 300, zIndex: 1, position: 'absolute', top: 30,}}
          onContextCreate={this._onContextCreate}
        />
            <Image source={logoImg} style={{ width: 300, height: 300, position: 'absolute', top: 30, }}/>
            <TouchableOpacity style={{marginTop: 300, backgroundColor: '#138A72', borderRadius: 8}}><Text style={{color: '#fff', padding: 8}}>RED</Text></TouchableOpacity>
            <TouchableOpacity style={{marginTop: 10, backgroundColor: '#138A72', borderRadius: 8 }}><Text style={{color: '#fff', padding: 8}}>GREEN</Text></TouchableOpacity>
            <TouchableOpacity style={{marginTop: 10, backgroundColor: '#138A72', borderRadius: 8 }}><Text style={{color: '#fff', padding: 8}}>BLUE</Text></TouchableOpacity>
            <Text style={{marginTop: 10}}>O tempo que me foi dado não foi suficiente para</Text>
            <Text>criar a feature com expo-gl, não tempo experiencia com a API.</Text>
            <Text>estou mudando a cor mudando o codigo na linha 44</Text>
            <Text>gl.clearColor(red, gree, blue, alpha)</Text>
      </View>
    );
  }

  _onContextCreate = gl => {
    if (_initialized) {
      return;
    }

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(1, 0, 0, 0);

    // Compile fragment shader
    const frag = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(frag, fragSrc);
    gl.compileShader(frag);

    // Link together into a program
    const program = gl.createProgram();
    // gl.attachShader(program, frag);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.useProgram(program);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);

    gl.flush();
    gl.endFrameEXP();
    _initialized = true;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
