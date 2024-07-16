import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Route/AuthProvider";

const Register = () => {
  const {CreateUser}=useContext(AuthContext);
  const handleRegister= e =>{
    e.preventDefault();
    const form =new FormData(e.currentTarget);
    const email=form.get('email')
    const password=form.get('password')
    const name=form.get('name')
    const photo=form.get('photo')
    console.log(email,password,name,photo);
    // register user in firebase 
    CreateUser(email,password)
    .then(result =>{
      console.log(result.user );
    })
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="ml-2">Already have account? Please 
                <Link to='/login'>
                <button className="btn btn-link">Login</button>
                </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
