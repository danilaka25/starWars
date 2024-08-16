import {People} from '$src/api/types';
import {StackScreenProps} from '@react-navigation/stack';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

export type RootStackParamList = {
  Home: undefined;
  PersonDetail: {person: People};
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type PersonDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'PersonDetail'
>;

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
