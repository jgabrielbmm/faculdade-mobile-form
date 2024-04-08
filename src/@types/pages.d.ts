import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Form: undefined; 
  Confirmation: {name: string, race: string}; 
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type FormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Form'>;
type ConfirmationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Confirmation'>;

interface ConfirmationScreenProps {
  route: ConfirmationScreenNavigationProp;
}