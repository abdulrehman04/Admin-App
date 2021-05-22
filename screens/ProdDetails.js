import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>Product Details</Text>
      </View>
      <ScrollView>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/5412086/pexels-photo-5412086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />
        <Text style={styles.head}>Name:</Text>
        <Text style={styles.text}>hello </Text>
        <Text style={styles.head}>Price:</Text>
        <Text style={styles.text}>1231250$ </Text>
        <Text style={styles.head}>Description:</Text>
        <Text style={{marginBottom:180,}}>
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
    fontSize: 15,
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
    fontSize: 25,
        marginBottom: 10,

  },

});

export default ProductDetails;
