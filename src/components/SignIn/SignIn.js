import './SignIn.css'
import { auth, firebase } from '../../firebase'


const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <section class='grid h-screen place-items-center'>
      <div class="pb-30">
        <img src="logo.svg" alt='logo' class='logo animate-ping' />

      </div>
      <h1 class='flag'>no slogn yet</h1>


      <button class="signin-button" onClick={signInWithGoogle}>Sign in with Google</button>

    </section>


  )
}
export default SignIn