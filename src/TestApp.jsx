//* theme
import { AppTheme } from "./theme";
//* carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
