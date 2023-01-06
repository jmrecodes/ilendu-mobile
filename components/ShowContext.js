import {createContext} from 'react';

const ShowContext = createContext({
  show: 0,
  setShow: () => {},
});

export default ShowContext;
