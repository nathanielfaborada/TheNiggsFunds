
import SPA from "./core/spa";

import SignIn from "./pages/signIn";

import './styles/common.css';
const app = new SPA({
    root: document.getElementById('app')
})


app.add('/signin', SignIn)

app.handleRouteChanges();