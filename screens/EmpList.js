import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';


const EmpList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>List Of Employees</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('EmpDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>RANK: Manager</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://www.funkaarepakistan.art/wp-content/uploads/2021/05/ava-3.jpg',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('EmpDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>RANK: Manager</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://www.funkaarepakistan.art/wp-content/uploads/2021/05/ava-3.jpg',
          }}
          style={styles.images}
        />

       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#68bd48',
  },
  images: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 30,
    marginLeft:75,
    marginRight:75,
  
  },
  text: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  headtext: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
});

export default EmpList;
