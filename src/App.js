import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import DeliveryOrder from "./pages/deliveryOrder";
import OrderConfirmed from "./pages/OrderConfirmed";
import Admin from "./pages/Admin";
import { theme } from "./theme/theme";
import Header from "./components/header";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/deliveryOrder" element={<DeliveryOrder />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
