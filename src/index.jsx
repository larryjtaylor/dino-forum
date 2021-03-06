import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/post-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('react-app-root')
  );


if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
