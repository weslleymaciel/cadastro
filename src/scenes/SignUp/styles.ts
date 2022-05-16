import { FastImage, styled } from '../../modules';

export const Wrapper = styled.View`
  flex: 1;
  margin: 32px;
  margin-top: 16px;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const Avatar = styled.TouchableOpacity`
  background-color: #fff;
  border-color: #aaa;
  border-width: 2px;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Image = styled(FastImage).attrs({ resizeMode: 'contain' })`
  width: 100%;
  height: 250px;
`;
