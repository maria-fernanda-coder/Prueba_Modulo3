import { authGuard } from './components/authGuard.js';

const routes = {
  "/dashboard": "views/dashboard.html",
  "/dashboard/events/create": "views/events-create.html",
  "/dashboard/events/edit": "views/events-edit.html",
  "/login": "views/login.html",
  "/register": "views/register.html",
  "/404": "views/not-found.html",
};

export async function router() {
  const path = location.pathname;
  const app = document.getElementById("app");

  const isProtected = path.startsWith("/dashboard");
  const isAuth = !!localStorage.getItem("token");

  // Redirecciona usuarios autenticados si intentan acceder a /login o /register
  if (isAuth && (path === "/login" || path === "/register")) {
    history.pushState({}, "", "/dashboard");
    return router();
  }

  // Rutas protegidas solo accesibles autenticado
  if (isProtected && !isAuth) {
    history.pushState({}, "", "/404");
    return router();
  }

  const route = routes[path] || routes["/404"];
  const html = await fetch(route).then(res => res.text());
  app.innerHTML = html;

  if (typeof authGuard === "function") authGuard();
}
