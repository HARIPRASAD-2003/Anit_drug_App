import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = () => {
  const [returnedData, setReturnedData] = useState(['']);
  const [user, setUser] = useState({UserName:'', Email: '' , Name: '', PhoneNo: '', Password:''});
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const setInput = (name, value) => {
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  const handleSignUp = async () => {
    if (user.UserName==='' || user.Email==='' || user.Name==='' || user.PhoneNo==='' || user.Password==='') {
      setError('Please fill in all fields.');
      return;
    }

    if (user.Password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await fetch('http://192.168.1.3:5000/useradd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const newData = await response.json();
    
      console.log(3);
    
      if (typeof newData === 'object' && newData.affectedRows > 0) {
        setSuccessMessage('Added Successfully!');
        console.log('Inserted successfully:', newData);
      } else {
        console.error('Unexpected response format:', newData);
        setError('An unexpected response format occurred during the network request.');
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      setError('An error occurred during the network request.');
    }
    
  };    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Page</Text>
      <TextInput
  style={styles.input}
  placeholder="Username"
  value={user.UserName}
  onChangeText={(text) => setInput('UserName', text)}
/>

<TextInput
  style={styles.input}
  placeholder="Email"
  keyboardType="email-address"
  value={user.Email}
  onChangeText={(text) => setInput('Email', text)}
/>

<TextInput
  style={styles.input}
  placeholder="Name"
  value={user.Name}
  onChangeText={(text) => setInput('Name', text)}
/>

<TextInput
  style={styles.input}
  placeholder="Phone Number"
  keyboardType="phone-pad"
  value={user.PhoneNo}
  onChangeText={(text) => setInput('PhoneNo', text)}
/>

<TextInput
  style={styles.input}
  placeholder="Password"
  secureTextEntry
  value={user.Password}
  onChangeText={(text) => setInput('Password', text)}
/>

<TextInput
  style={styles.input}
  placeholder="Confirm Password"
  secureTextEntry
  value={confirmPassword}
  onChangeText={(text) => setConfirmPassword(text)}
/>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  signupButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUp;
