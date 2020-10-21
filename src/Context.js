import React, {useState} from 'react';

export const Context = React.createContext({
  count: 0,
  setCount: () => {
    console.log('defaultCount');
  },
});

export const Provider = ({children}) => {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider
      value={{
        count,
        setCount: (ct) => {
          console.log('count');
          setCount(ct);
        },
      }}>
      {children}
    </Context.Provider>
  );
};
