import {createContext} from 'react';

const YourinContext = createContext({
  yourin: 0,
  setYourin: () => {},
});

export default YourinContext;
