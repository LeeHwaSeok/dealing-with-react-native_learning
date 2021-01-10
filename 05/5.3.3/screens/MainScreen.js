import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, Button, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}

function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}

function getHeaderTitle(route) {
  // 현재 화면의 name을 조회합니다
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';

  // 각 화면을 위한 타이틀
  const titleMap = {
    Home: '홈',
    Search: '검색',
    Notification: '알림',
    Message: '메시지',
  };

  // name 을 key로 사용하여 원하는 타이틀을 선택합니다.
  return titleMap[routeName];
}

function MainScreen({navigation, route}) {
  useEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;