import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Theme} from "react-native-calendars/src/types";


const themeCalendar: Theme = {
    backgroundColor: '#22242B',
    calendarBackground: '#22242B',
    textSectionTitleColor: '#525359',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#ffffff',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: '#ffffff',
    indicatorColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 18,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
}

const Calendars = () => {
    return (
        <View style={styles.calendar}>
            <Calendar
                theme={themeCalendar}
                hideArrows={true}
                hideExtraDays={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    calendar: {
        width: '100%',
        height: '60%',
        backgroundColor: '#22242B',
        paddingVertical: 20,
        paddingHorizontal: 10
    }
});

export default Calendars;
