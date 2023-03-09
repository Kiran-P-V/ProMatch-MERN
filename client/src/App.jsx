import { Container } from "@mui/system";
import "./App.css";
import { AdminRoute } from "./routes/adminRoute/AdminRoute";
import UserRoute from "./routes/userRoutes/UserRoute";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Container id="rootDiv">
          <UserRoute />
          <AdminRoute />
        </Container>
      </SnackbarProvider>
    </>
  );
}

export default App;
