import React from "react";

export const FavouriteColorContext = React.createContext();

function FavouriteColorProvider({ children }) {
  const [favouriteColor, setFavouriteColor] = React.useState("#EBDEFB");

  // const value = { favouriteColor, setFavouriteColor };
  const value = React.useMemo(() => {
    return { favouriteColor, setFavouriteColor };
  }, [favouriteColor]);

  return (
    <FavouriteColorContext.Provider value={value}>
      {children}
    </FavouriteColorContext.Provider>
  );
}

export default FavouriteColorProvider;
