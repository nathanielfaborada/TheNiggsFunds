import '../styles/loginPage.css';
import FormSignUp from './signUp&logIn/formSignup';
import FormSigIn from './signUp&logIn/formSignin';


export default function LogIn(root) {
  root.innerHTML = `
    <div class="container" id="container">
      <div class="form-container sign-up">
        ${FormSignUp()}

      </div>
      <div class="form-container sign-in">
        ${FormSigIn()}
      </div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>The Niggs Funds</h1>
            <p>Enter your personal details to use all of site features</p>
            <button class="hidden" id="login">Sign In</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>The Niggs Funds</h1>
            <p>Enter your personal details to use all of site features</p>
            <button class="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
}
