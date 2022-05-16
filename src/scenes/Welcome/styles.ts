import { FastImage, styled } from '../../modules';

export const Wrapper = styled.View`
  flex: 1;
  margin: 32px;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  color: #000;
  opacity: 0.75;
  font-size: 23px;
  margin-bottom: 32px;
`;

export const Text = styled.Text`
  color: #000;
  opacity: 0.5;
  font-size: 16px;
  text-align: center;
`;

export const Image = styled(FastImage).attrs({ resizeMode: 'contain' })`
  width: 100%;
  height: 250px;
  margin-bottom: 32px;
`;
