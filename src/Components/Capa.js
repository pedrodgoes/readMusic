import React, { Component } from 'react';

import {View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';

const Capa = ({
  url,
  onPress
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: url}}
      />
    </TouchableOpacity>
  </View>
);

export default Capa;

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
})