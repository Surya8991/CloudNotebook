import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
  const [credentials, setCredentials] = useState({ name: "", email: '', password: '', confirmPassword: "" });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, confirmPassword: credentials.confirmPassword }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');
      props.showAlert("Account Created Successfully!", "success");
    } else {
      props.showAlert("Invalid Details!", "danger");
      setCredentials({ name: "", email: '', password: '', confirmPassword: "" })
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1 className='text-center'>Sign Up</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name / UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              minLength={5}
              required
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              minLength={5}
              required
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              minLength={5}
              required
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              minLength={5}
              required
              value={credentials.confirmPassword}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp