import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class Info1Screen extends Component {
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
                La violencia es el “uso intencional de la fuerza 
                física o el poder real o como amenaza contra uno 
                mismo, una persona, grupo o comunidad que tiene 
                como resultado la probabilidad de daño psicológico, 
                lesiones, la muerte, privación o mal desarrollo.
                 </Text>
              </Body>
            </CardItem>
           
            <CardItem header bordered>
              <Text>Qué hacer en caso de violencia</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                 1. Solicitar asistencia por teléfono
                 </Text>
                 <Text>
                 2. Acudir inmediatamente a un hospital o centro de salud    
                 </Text>
                 <Text>
                 3. Denuncia la Agresión
                 </Text>
                 <Text>
                 4. Solicitar la orden de protección
                 </Text>
                 <Text>
                 5. La opción de abandonar el domicilio
                 </Text>
               
              </Body>
            </CardItem>
            <CardItem footer bordered >
              <Text>Instituciones que brindan ayuda</Text>
           
            </CardItem>
            <CardItem bordered>
            <Body>
                <Text>
                 1. Policia Nacional 
                 </Text>
                 <Text>
                 2. Cruz Roja Nacional
                 </Text>
                 <Text>
                 3. Cuerpo de Bombero Nacional
                 </Text>
                 <Text>
                 4. Comisaria de la Mujer 
                 </Text>

            </Body> 
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}