import React from 'react';
import {
  Container,
  ContainerView,
  ContainerHeader,
  ContainerContent,
  Image,
  TextContent,
  TextContent2,
  ContainerHeaderImage,
  TextHeader,
  TextHeader2,
  ContainerHeaderImage2,
  ContainerFooter,
  ListButton,
  TextButton,
} from './styles';
import logo from '../../assets/scooter.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Rent() {
  return (
    <Container>
      <ContainerView>
        <ContainerHeader>
          <ContainerHeaderImage2>
            <Icon name="battery-charging-full" size={32} color="#9D9D9D" />
            <ContainerHeaderImage>
            <TextHeader>Power</TextHeader>
            <TextHeader2>80%</TextHeader2>
           </ContainerHeaderImage>
          </ContainerHeaderImage2>
          <Icon name="near-me" size={25} color="#02ADD3" />
        </ContainerHeader>
        <ContainerContent>
        <Image source={logo} />
        </ContainerContent>
        <ContainerFooter>
        <TextContent>Kick scooter</TextContent>
        <TextContent2>Av. A</TextContent2>
        </ContainerFooter>
        <ListButton>
          <TextButton>Localizar</TextButton>
          </ListButton>
      </ContainerView>
      <ContainerView>
        <ContainerHeader>
          <ContainerHeaderImage2>
            <Icon name="battery-charging-full" size={32} color="#9D9D9D" />
            <ContainerHeaderImage>
            <TextHeader>Power</TextHeader>
            <TextHeader2>80%</TextHeader2>
           </ContainerHeaderImage>
          </ContainerHeaderImage2>
          <Icon name="near-me" size={25} color="#02ADD3" />
        </ContainerHeader>
        <ContainerContent>
        <Image source={logo} />
        </ContainerContent>
        <ContainerFooter>
        <TextContent>Kick scooter</TextContent>
        <TextContent2>Av. A</TextContent2>
        </ContainerFooter>
        <ListButton>
          <TextButton>Localizar</TextButton>
          </ListButton>
      </ContainerView>
      <ContainerView>
        <ContainerHeader>
          <ContainerHeaderImage2>
            <Icon name="battery-charging-full" size={32} color="#9D9D9D" />
            <ContainerHeaderImage>
            <TextHeader>Power</TextHeader>
            <TextHeader2>80%</TextHeader2>
           </ContainerHeaderImage>
          </ContainerHeaderImage2>
          <Icon name="near-me" size={25} color="#02ADD3" />
        </ContainerHeader>
        <ContainerContent>
        <Image source={logo} />
        </ContainerContent>
        <ContainerFooter>
        <TextContent>Kick scooter</TextContent>
        <TextContent2>Av. A</TextContent2>
        </ContainerFooter>
        <ListButton>
          <TextButton>Localizar</TextButton>
          </ListButton>
      </ContainerView>
      <ContainerView>
        <ContainerHeader>
          <ContainerHeaderImage2>
            <Icon name="battery-charging-full" size={32} color="#9D9D9D" />
            <ContainerHeaderImage>
            <TextHeader>Power</TextHeader>
            <TextHeader2>80%</TextHeader2>
           </ContainerHeaderImage>
          </ContainerHeaderImage2>
          <Icon name="near-me" size={25} color="#02ADD3" />
        </ContainerHeader>
        <ContainerContent>
        <Image source={logo} />
        </ContainerContent>
        <ContainerFooter>
        <TextContent>Kick scooter</TextContent>
        <TextContent2>Av. A</TextContent2>
        </ContainerFooter>
        <ListButton>
          <TextButton>Localizar</TextButton>
          </ListButton>
      </ContainerView>
    </Container>
  );
}
