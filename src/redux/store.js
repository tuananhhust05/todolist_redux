import {createStore} from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
// ability to work in a long time 
const composedEnhancers = composeWithDevTools(); // để dùng redux devtool để xem thằng state hiện tại 
const store = createStore(rootReducer,composedEnhancers);// enhancer là tham só thữ 2
export default store; 
