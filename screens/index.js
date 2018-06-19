import IndexScreen from './IndexScreen';
import ArticlesScreen from './ArticlesScreen';
import ArticleScreen from './ArticleScreen';
import NewsScreen from './NewsScreen';
import MatchesScreen from './MatchesScreen';
import VideosScreen from './VideoScreen';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const Articles = createStackNavigator({
  ArticlesScreen,
  ArticleScreen
});

const TabNavigator = createBottomTabNavigator({
  IndexScreen,
  Articles: {
    screen: Articles,
    navigationOptions: {
      tabBarLabel: ArticlesScreen.navigationOptions.title,
      tabBarIcon: ArticlesScreen.navigationOptions.tabBarIcon,
    },
  },
  NewsScreen,
  MatchesScreen,
  VideosScreen
  },
  {
    initialRouteName: 'Articles',
    tabBarOptions: {
      activeTintColor: '#5050b4',
      inactiveTintColor: '#8f939a'
    }
  }
);

export default TabNavigator;