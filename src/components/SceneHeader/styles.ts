import {
  Header as HeaderComponent,
  HeaderOptions,
} from '@react-navigation/elements';
import { styled } from '../../modules';

export const Wrapper = styled.View`
  padding: 8px;
`;

export const Header = styled(HeaderComponent).attrs(() => ({
  headerTitleAlign: 'center',
  headerStatusBarHeight: 0,
  headerStyle: {
    backgroundColor: '#2089dc',
  },
  headerTitleStyle: {
    color: '#FFF',
    fontSize: 17,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  headerTitleContainerStyle: {
    maxWidth: 250,
  },
}))<HeaderOptions>``;
