//* theme
import { AppTheme } from "./theme";
//* context
import { UserProvider } from "./ui/context/UserProvider";
//* pages
import { HomePage } from "./ui/pages";

function App() {
  return (
    <UserProvider>
      <AppTheme>
        <HomePage />
      </AppTheme>
    </UserProvider>
  );
}

export default App;
