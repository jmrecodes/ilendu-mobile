import {createContext} from 'react';

const UserContext = createContext({
  firstName: '',
  setFirstName: () => {},
});

export default UserContext;
