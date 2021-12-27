/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Baitap from './src/baiTap/Baitap'
AppRegistry.registerComponent(appName, () =>Baitap);
