import IndexScreen from './IndexScreen';
import ArticlesScreen from './ArticlesScreen';
import NewsScreen from './NewsScreen';
import MatchesScreen from './MatchesScreen';
import VideosScreen from './VideoScreen';
import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator({
    IndexScreen,
    ArticlesScreen,
    NewsScreen,
    MatchesScreen,
    VideosScreen
  },
  {
    initialRouteName: 'ArticlesScreen',
    tabBarOptions: {
      activeTintColor: '#5050b4',
      inactiveTintColor: '#8f939a',
    }
  }
);