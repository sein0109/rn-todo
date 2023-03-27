import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Component = () => {
     return (
          <View style={StyleSheet.container}>
               <Text style={StyleSheet.title}>Component</Text>
          </View>
     );
};

Component.PropTypes = {
     // PropTypes
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     title: {
          fontSize: 30,
     },
});

export default Component;