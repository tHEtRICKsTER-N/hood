import { useState } from 'react'
import GenderCheckbox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

        <img src='./logo.png' className='w-full px-24 py-10'></img>

        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          🥺 New here ? <b>Sign Up</b>, then ! 😎
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='py-5 flex justify-center'>

            <label className="input input-ghost w-full max-w-xs input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Full Name" value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
            </label>

            <label className="input input-ghost w-full max-w-xs input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="User Name" value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
            </label>

            <label className="input input-ghost w-full max-w-xs input-bordered flex items-center gap-2">
              <input type="password" className="grow" placeholder="Password" value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
            </label>

            <label className="input input-ghost w-full max-w-xs input-bordered flex items-center gap-2">
              <input type="password" className="grow" placeholder="Confirm Password" value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
            </label>


          </div>

          <div className='py-10'>
            {/* Gender Checkbox goes here */}
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
            <Link to={'/login'} className="link link-warning">Already Have an Account?</Link>
            <button className="btn btn-block btn-sm mt-2 btn-warning" disabled={loading}> {loading ? <span className='loading loading-spinner'></span> : "Sign Up"} </button>
          </div>
        </form>
      </div>
    </div>
  )
}

//Starter Code
// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//         <img src='./logo.png' className='w-full px-24 py-10'></img>

//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           🥺 New here ? <b>Sign Up</b>, then ! 😎
//         </h1>

//         <form>
//           <div className='py-5 flex justify-center'>

//             <label className="input input-warning w-full max-w-xs input-bordered flex items-center gap-2">
//               <input type="text" className="grow" placeholder="Full Name" />
//             </label>

//             <label className="input input-warning w-full max-w-xs input-bordered flex items-center gap-2">
//               <input type="text" className="grow" placeholder="User Name" />
//             </label>

//             <label className="input input-warning w-full max-w-xs input-bordered flex items-center gap-2">
//               <input type="password" className="grow" value="Password" />
//             </label>

//             <label className="input input-warning w-full max-w-xs input-bordered flex items-center gap-2">
//               <input type="password" className="grow" value="Confirm Password" />
//             </label>

//             {/* Gender Checkbox goes here */}

//           </div>

//           <div className='py-10'>
//             <GenderCheckbox />
//             <a href='#' className="link link-warning">Already Have an Account?</a>
//             <button className="btn btn-block btn-sm mt-2 btn-warning">Create Your Account ! </button>
//           </div>

//         </form>

//       </div>
//     </div>
//   )
// }

export default SignUp