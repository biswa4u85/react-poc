import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";
import { store } from '../store';
import { Provider } from 'react-redux';
import { saveState } from "../utility/browser-storage";
import { debounce } from "debounce";
import styles from './index.css';

store.subscribe(
  debounce(() => {
    saveState('redux', store.getState());
  }, 800)
);

function BasicLayout(props) {
  return (<Provider store={store}>
    <I18nextProvider i18n={i18n}>
      {props.children}
    </I18nextProvider>
  </Provider>
  );
}

export default BasicLayout;
