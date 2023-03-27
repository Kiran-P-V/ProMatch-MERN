import { Container } from "@mui/system";
import "./App.css";
import { AdminRoute } from "./routes/adminRoute/AdminRoute";
import UserRoute from "./routes/userRoutes/UserRoute";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { ExpertRoute } from "./routes/expertRoute/ExpertRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <Container id="rootDiv">
            <UserRoute />
            <AdminRoute />
            <ExpertRoute />
          </Container>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
