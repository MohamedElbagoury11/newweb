import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import MediaLibraryPage from "./pages/MediaLibraryPage";
import MockPage from "./pages/MockPage";

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
      <Route path="/en" component={Home} />
      <Route path="/en/" component={Home} />
      <Route path="/news" component={NewsPage} />
      <Route path="/en/news" component={NewsPage} />
      <Route path="/media-library" component={MediaLibraryPage} />
      <Route path="/en/media-library" component={MediaLibraryPage} />
      <Route path="/page/:slug" component={MockPage} />
      <Route path="/en/page/:slug" component={MockPage} />
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
