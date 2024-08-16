/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import PersonList from '$src/screens/PersonList';
import PersonDetail from '$src/screens/PersonDetail';
import ManageThemeProvider from '$src/constans/theme/ThemeContex';
import styled from 'styled-components/native';
import {RootStackParamList} from '$src/navigation/types';

const Stack = createStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <ManageThemeProvider>
      <SafeArea>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={PersonList}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="PersonDetail"
                component={PersonDetail}
                options={{title: 'Person Detail'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </SafeArea>
    </ManageThemeProvider>
  );
}

const SafeArea = styled.SafeAreaView(({theme}) => ({
  backgroundColor: theme.color.lightGray,
  flex: 1,
}));

export default App;
