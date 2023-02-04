import { createContext } from "react";

// default value of context
// central store
const UserContext = createContext({
  user: { name: "Dummy Name", email: "test@test.com" },
});

UserContext.displayName = "UseContext"

export default UserContext;
