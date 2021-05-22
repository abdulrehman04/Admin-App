import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const OrderList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>List Of Orders</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $450</Text>
          <Text style={styles.text}>Manager: lorem</Text>
          <Image
            source={{
              uri:
                'https://propakistani.pk/wp-content/uploads/2021/05/amazon-2.jpg',
            }}
            style={styles.images}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $570</Text>
          <Text style={styles.text}>Manager: lorem</Text>
          <Image
            source={{
              uri:
                'https://propakistani.pk/wp-content/uploads/2021/05/amazon-2.jpg',
            }}
            style={styles.images}
          />
        </TouchableOpacity>

      
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
    marginLeft: 75,
    marginRight: 75,
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

export default OrderList;
