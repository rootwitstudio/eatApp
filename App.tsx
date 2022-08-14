// @ts-ignore
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from "./src/BottomNavigation";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
const queryClient = new QueryClient()

const App = () => {
  return (
          <NavigationContainer>
              <QueryClientProvider client={queryClient}>
              <MyTabs/>
              </QueryClientProvider>
          </NavigationContainer>
  );
}

export default App;
