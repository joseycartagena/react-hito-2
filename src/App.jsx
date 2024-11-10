
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css'
import MyNavbar from './components/MyNavbar';
import MyHome from './components/MyHome';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import MyFooter from './components/MyFooter';

function App() {

  return (
    <>
      <MyNavbar />
      {/* <MyHome /> */}
      {/* <RegisterForm /> */}
      <LoginForm />
      <MyFooter />
    </>
  )
}

export default App
