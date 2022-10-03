import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View
} from 'react-native';
import Calendar from './src/components/Calendar';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={'dark-content'} />
            <Calendar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

    }
});

export default App;
