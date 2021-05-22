import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const EmpDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>Employee Details</Text>
      </View>
      <ScrollView>
        <Image
          source={{
            uri:
              'https://www.funkaarepakistan.art/wp-content/uploads/2021/05/ava-3.jpg',
          }}
          style={styles.images}
        />
        <Text style={styles.head}>Name:</Text>
        <Text style={styles.text}>Lorem </Text>
        <Text style={styles.head}>RANK:</Text>
        <Text style={styles.text}>Lorem </Text>
        <Text style={styles.head}>Biography:</Text>
        <Text style={{marginBottom:200,}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          egestas venenatis. Maecenas neque mauris, fringilla eu velit vel,
          malesuada ultricies nibh. Curabitur luctus risus vitae enim faucibus
          lobortis. Fusce sed interdum est. Duis non dictum risus, in dapibus
          purus. Vivamus accumsan metus eu ipsum ultrices tincidunt. Etiam
          tincidunt id leo vel blandit. Phasellus aliquam leo semper augue
          scelerisque mollis. Suspendisse eget quam bibendum metus malesuada
          vestibulum. Nullam ut felis metus. Aenean gravida vulputate arcu, nec
          vulputate velit. Sed viverra nibh sed dui euismod, non malesuada lacus
          elementum. Nunc lectus orci, sagittis ac lobortis in, dapibus in
          neque. Vivamus non aliquam mi. Quisque quis velit ornare, placerat
          odio sit amet, tempor odio. Nunc euismod fringilla urna. Sed vulputate
          lacinia nunc, condimentum congue lacus.
        </Text>
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
    marginLeft: 100,
    marginRight: 100,
  },
  text: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headtext: {
    textAlign: 'center',
    marginTop: 15,

    marginBottom: 20,
    fontSize: 20,
  },
  head: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 25,
  },
});

export default EmpDetails;
