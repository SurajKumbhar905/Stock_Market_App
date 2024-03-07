import {FC, PropsWithChildren, createContext, useState} from 'react';

type AppAuthenticationContextType = {
  isPinMatch: boolean;
  setisPinMatch: (isPinMatch: boolean) => void;
};

export const AppAuthenticationContext =
  createContext<AppAuthenticationContextType>({
    isPinMatch: false,
    setisPinMatch: () => {},
  });

export const AppAuthenticationContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isPinMatch, setisPinMatch] = useState(false);
  const defaultValue = {
    isPinMatch,
    setisPinMatch,
  };

  return (
    <AppAuthenticationContext.Provider value={defaultValue}>
      {children}
    </AppAuthenticationContext.Provider>
  );
};
