import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';



const ProdList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>Product List</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('ProdDetails')}>
          <Text style={styles.text}>Name : Hello World</Text>
          <Text style={styles.text}>Price: $442150</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/5412086/pexels-photo-5412086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ProdDetails')}>
          <Text style={styles.text}>Name : Hello World</Text>
          <Text style={styles.text}>Price: $52370</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/5412086/pexels-photo-5412086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ProdDetails')}>
          <Text style={styles.text}>Name : Hello World</Text>
          <Text style={styles.text}>Price: $123110</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/5412086/pexels-photo-5412086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ProdDetails')}>
          <Text style={styles.text}>Name : Hello World</Text>
          <Text style={styles.text}>Price: $12550</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/5412086/pexels-photo-5412086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
    width: 250,
    height: 250,
    marginTop: 30,
    marginBottom: 30,
   
  
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

export default ProdList;
