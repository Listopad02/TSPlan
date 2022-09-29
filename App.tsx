import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={"dark-content"}/>
      <View style={styles.container}>
        <View style={styles.view1} />
        <View style={styles.view1} />
        <View style={styles.view1} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  view1: {
    margin: 10,
    width: '30%',
    height: 22,
    borderRadius: 8,
    backgroundColor: "red"
  }
});

export default App;
