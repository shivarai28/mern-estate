import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from "../assets/firebase";
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/user-slice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      
    if (!res.ok) {
      const text = await res.text(); // inspect raw error
      throw new Error(`Server error: ${res.status} - ${text}`);
    }
 
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      disabled={onclick} 
    
      type='button'
      className='bg-red-700 hover:bg-slate-900  text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continue with google
    </button>
  );
}