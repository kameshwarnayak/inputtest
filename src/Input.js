// import logo from './logo.svg';
import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {useEffect, useRef, useState} from 'react';
function Input() {
  const textInputRef = useRef(null);
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log('Reloading 2 --', Date.now());
    if (!textInputRef.current) {
      return;
    }
    textInputRef.current.focus();
  }, []);

  const sleepSync = ms => {
    const end = new Date().getTime() + ms;
    while (new Date().getTime() < end) {
      /* do nothing */
    }
  };
  return (
    <View
      style={{
        width: 380,
        alignItems: `center`,
        marginTop: `50px`,
      }}>
      <TextInput
        ref={textInputRef}
        style={{
          borderColor: `black`,
          borderWidth: `1px`,
        }}
        onChangeText={setPassword}
        onFocus={() => {
          console.log('Focusing --', Date.now());
        }}
        onBlur={() => {
          if (!textInputRef.current) {
            return;
          }
          let num = 0;
          console.log('Blurring  --', Date.now(), ' -- ', num);
          textInputRef.current.focus();
        }}
      />
      <View
        style={{
          marginTop: `30px`,
        }}>
        <Button
          onPress={() => {
            textInputRef.current.focus();
          }}
          title="Learn More"
        />
      </View>
    </View>
  );
}

export default Input;
