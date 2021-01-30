/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        placeholder="Add Item"
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <FontAwesomeIcon icon={faPlus} size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    alignItems: 'center',
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
  },
});

export default AddItem;
