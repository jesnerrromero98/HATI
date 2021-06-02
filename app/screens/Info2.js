import React, { Component } from 'react';
import  { Image, Linking , StyleSheet }
from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class Info2Screen extends Component {
  render() {
    return (
      <Container>
        
        <Content padder>
          <Card>
          <CardItem header bordered>
              <Text>Definición</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text >
                es toda conducta o amenaza que se realiza de manera 
                consiente y que causa daño físico, psicológico, sexual 
                o económico. Se conoce como violencia de género al maltrato
                que ejerce un sexo hacia el otro, que puede ser de hombre hacia
                la mujer o viceversa.
                 </Text>
              </Body>
            </CardItem>
           
            <CardItem header bordered>
              <Text>Tipos de Violencia</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                 1. Violencia física
                 </Text>
                 <Text>
                 2. Violencia Patrimonial    
                 </Text>
                 <Text>
                 3. Violencia psicológica
                 </Text>
                 <Text>
                 4. Violencia económica
                 </Text>
                 <Text>
                 5. Violencia Sexual
                 </Text>
               
              </Body>
            </CardItem>
            <CardItem footer bordered >
              <Text>¿Qué causa la violencia de género?</Text>
           
            </CardItem>
            <CardItem bordered>
            <Body>
                <Text>
                La causa principal de la violencia es el propio autor: es muy 
                importante tener en cuenta que una persona que ha sido afectada 
                por violencia de género nunca es responsable de las acciones del 
                autor.
                 </Text>

                 
            </Body> 
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}