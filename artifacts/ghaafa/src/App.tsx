import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "./pages/Home";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px", fontFamily: "Cairo, sans-serif" }}>
      <h1 style={{ fontSize: "48px", color: "#0B6B3A" }}>404</h1>
      <p>الصفحة غير موجودة</p>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}
