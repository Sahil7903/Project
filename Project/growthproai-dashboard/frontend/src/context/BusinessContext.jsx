import { createContext, useState } from 'react';

export const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <BusinessContext.Provider value={{ data, setData, loading, setLoading }}>
      {children}
    </BusinessContext.Provider>
  );
};
