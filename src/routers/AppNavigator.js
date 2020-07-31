import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CardsScreen from '../screens/CardsScreen';
import DetailScreen from '../screens/DetailScreen';
import SearchScreen from '../screens/SearchScreen';

const RootStack = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		Cards: { screen: CardsScreen },
		Detail: { screen: DetailScreen },
		Search: { screen: SearchScreen }
	},
	{
		initialRouteName: 'Home',
	}
);

const App = createAppContainer(RootStack);

export default App;
