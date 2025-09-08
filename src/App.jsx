import React from "react";

import AccountDropdown from "./components/AccountDropdown";
import CourseIndexLayout from "./components/CourseIndexLayout";

export const UserContext = React.createContext();

function App() {
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      <AccountDropdown />
      <CourseIndexLayout />
    </UserContext.Provider>
  );
}

function useUser() {
  return {
    email: "user@email.com",
  };
}

export default App;
