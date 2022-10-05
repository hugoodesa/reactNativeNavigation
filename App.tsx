/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

import TabNavigation from './src/routes/tabRouter';

/* import TabNavigation from './src/routes/tabRouter'; */

/* eslint-disable quotes */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
const App = () => {
  return (
    <>
      <RecoilRoot>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </RecoilRoot>
    </>
  );
};

export default App;
