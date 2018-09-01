import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
const Button = ({ onPress, children })=> {
    const { buttonStyle, textStyle} = styles
return (
    <TouchableOpacity onPress={onPress} style= {buttonStyle}>
    <Text style= {textStyle}>{children}</Text>
    </TouchableOpacity>
);
};
const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
backgroundColor: '#cffcff',
borderRadius: 5,
// borderColor: '#007aff',
// borderWidth: 1,
shadowColor: '#000',

      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.7,
      shadowRadius: 2,
      elevation: 1,
    marginLeft: 15,
    marginRight: 15,
},
textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
}
};
export { Button };