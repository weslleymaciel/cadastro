export {
  CommonActions,
  StackActions,
  NavigationContainer,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
export {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
export { default as styled, ThemeContext } from 'styled-components/native';
export { action, computed, observable } from 'mobx';
export { observer, inject, MobXProviderContext, Provider } from 'mobx-react';
export { persist, create } from 'mobx-persist';
export { SafeAreaProvider } from 'react-native-safe-area-context';
export { Button, Input, ThemeProvider } from '@rneui/themed';
export { default as firestore } from '@react-native-firebase/firestore';
export { default as SplashScreen } from 'react-native-splash-screen';
export { TouchableOpacity } from 'react-native';
export { default as FastImage } from 'react-native-fast-image';
export { launchCamera } from 'react-native-image-picker';
export { default as ImagePicker } from 'react-native-image-picker';
export { default as RNDateTimePicker } from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR');
export { default as moment } from 'moment';
