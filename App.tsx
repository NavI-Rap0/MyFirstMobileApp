import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuScreen from './src/screens/MainMenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import TodoListScreen from './src/screens/TodoListScreen';
import CreateTodoScreen from './src/screens/CreateTodoScreen';
import HeaderLeftButton from './src/components/HeaderLeftButton';
import CreateEventScreen from './src/screens/CreateEventScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        {/* Main Menu Screen */}
        <Stack.Screen
          name="MainMenu"
          component={MainMenuScreen}
          options={{ headerShown: false }}
        />

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, // Прибирає заголовок
          }}
        />

        {/* TodoList1 Screen */}
        <Stack.Screen
          name="TodoList1"
          options={{
            headerLeft: () => <HeaderLeftButton />,
          }}
        >
          {(props) => <TodoListScreen {...props} listId={1} />}
        </Stack.Screen>

        {/* TodoList2 Screen */}
        <Stack.Screen
          name="TodoList2"
          options={{
            headerLeft: () => <HeaderLeftButton />,
          }}
        >
          {(props) => <TodoListScreen {...props} listId={2} />}
        </Stack.Screen>

        {/* CreateTodo1 Screen */}
        <Stack.Screen
          name="CreateTodo1"
          options={{
            headerLeft: () => <HeaderLeftButton />,
          }}
          component={CreateTodoScreen}
        />

        {/* CreateTodo2 Screen */}
        <Stack.Screen
          name="CreateTodo2"
          options={{
            headerLeft: () => <HeaderLeftButton />,
          }}
          component={CreateTodoScreen}
        />
        <Stack.Screen name="CreateEvent" component={CreateEventScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


