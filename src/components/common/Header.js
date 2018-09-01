import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
    backgroundColor: '#ffffee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    //borderBottomColor: 'blue',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,

    
},
    textStyle: {
        fontSize: 30
    }
}
export  { Header };