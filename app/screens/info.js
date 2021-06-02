import React, { Component } from 'react';
import { Image, Linking , StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


export default class Info extends Component {
  onPressx = () => {
    this.props.navigation.navigate('Infor')
  };
  onPressxx = () => {
    this.props.navigation.navigate('Informa')
  };
  render() {
    return (

      <Container>
        <ScrollView>
        <Content >
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style = {styles.titulo}>Que hacer en caso de violencia</Text>

                     </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.columna2}>
              <Body>
                <Image source={require('./../assets/viole.jpg')} style={{height: 200, width: 300, flex: 0}}/>
                <Text style={styles.Text}>
                  La violencia es el uso intencional de la fuerza física, amenazas contra uno mismo,
                  otra persona, un grupo o una comunidad que tiene
                  como consecuencia o es muy probable que tenga como 
               </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button onPress={this.onPressx} style={styles.But2}>
                  
    
                  <Text style={styles.ti1}>Leer mas</Text>
                  
        
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style = {styles.titulo}>Violencia de genero</Text>

                     </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.columna2}>
              <Body>
                <Image source={require('./../assets/viole.jpg')} style={{height: 200, width: 300, flex: 0}}/>
                <Text style={styles.Text}>
                es toda conducta o amenaza que se realiza de manera consiente
                y que causa daño físico, psicológico, sexual o económico. Se 
                conoce como violencia de género al maltrato que ejerce un sexo 
                hacia el otro, que puede ser de hombre hacia la mujer o viceversa.
               </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button onPress={this.onPressxx} style={styles.But2}>
                  
                  <Text style={styles.ti1}>Leer mas</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        </ScrollView>
      </Container>
  
      
    );
  }
  
}
const styles =  StyleSheet.create({
  container:{
      backgroundColor: '#9599B3',
      flexDirection: 'column',
      alignItems: 'center',
    
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign:'center'
},

tit2:{
  fontSize: 26,
  fontWeight: 'bold',
  marginTop:50,
  marginStart:0,
  color: 'white',
  marginHorizontal:135
},
ti1:{
  fontSize: 14,
  fontWeight: 'bold',
  color: 'black',
 marginTop:0,
 textAlign:'center',
  marginHorizontal:10,
  textAlign:'auto'
},
columna:{
  flexDirection: 'column',
 
  width: '95%',
  backgroundColor: '#8A56AC',
  height: 180,
  borderTopLeftRadius:15,
  borderBottomLeftRadius:15,
  borderBottomRightRadius:15,
  borderTopRightRadius: 15,
  marginLeft: 10,
  marginHorizontal: 10,
},

columna1:{
  flexDirection: 'column',
 
  width: '95%',
  backgroundColor: '#FAAD2A',
  height: 180,
  borderTopLeftRadius:15,
  borderBottomLeftRadius:15,
  borderBottomRightRadius:15,
  borderTopRightRadius: 15,
  marginLeft: 10,
  marginHorizontal: 10,
},

columna2:{
  flexDirection: 'column',
 
  width: '95%',
  backgroundColor: "#EFA94A",
  height: 300,
  borderTopLeftRadius:20,
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
  borderTopRightRadius: 20,
  marginLeft: 8,

  marginHorizontal: 15,
},
fondo:{
  backgroundColor: '#261237',
},

imagen:{
  width:100,
  height: 100,
  borderRadius: 0,
  marginLeft: 150,
  marginTop:-70,
 
},
separador: {
  width: 10
},
icon:{
  height: 75,
  marginTop: 55,
  marginLeft:3,
  color: "#ffffff", 
  
},
ic2:{
  color: "#ffffff",    
},
But:{
  width: 95,
  height: 45,
  marginTop:50,
  marginLeft:90,
  borderRadius:15,
  backgroundColor:"#EF578E"
},
But2:{
  width: 100,
  height: 45,
  margin:-3,
  marginLeft:100,
  marginTop:7,
  borderRadius:25,
  backgroundColor:"#aae4"
},
})