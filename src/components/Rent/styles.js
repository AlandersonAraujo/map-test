import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {padding: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
})`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ContainerView = styled.View`
  height: 260px;
  width: 230px;
  border-radius: 10px;
  background: #fff;
  margin-right: 10px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
`;

export const ContainerHeaderImage = styled.View`
  flex-direction: column;
`;

export const ContainerHeaderImage2 = styled.View`
  flex-direction: row;
`;

export const ContainerContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContainerFooter = styled.View`
  margin-top: 3px;
  margin-left: 18px;
`;


export const Image = styled.Image`
  width: 100px;
  height: 105px;
`;

export const TextHeader = styled.Text`
  font-size: 12px;
  color: #9D9D9D;
`;

export const TextHeader2 = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #61A158;
  margin-top: -5px;
`;

export const TextContent = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const TextContent2 = styled.Text`
  font-size: 12px;
`;

export const ListButton = styled(RectButton)`
  height: 43px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
