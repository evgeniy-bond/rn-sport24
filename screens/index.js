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
    initialRouteName: 'NewsScreen',
    tabBarOptions: {
      activeTintColor: '#5050b4',
      inactiveTintColor: '#8f939a',
    }
  }
);