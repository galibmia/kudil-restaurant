import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Img_Hosting_Token;

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { createUser, updateUser, loginWithGoogle } = useContext(AuthContext);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const profilePhoto = form.profilePhoto.files[0];

    setError('');

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Upload profile photo to ImgBB
      const formData = new FormData();
      formData.append('image', profilePhoto);

      const res = await fetch(img_hosting_url, {
        method: 'POST',
        body: formData,
      });
      const imgData = await res.json();

      if (imgData.success) {
        // Create user in Firebase
        const userCredential = await createUser(email, password);
        const photoURL = imgData.data.display_url;

        // Update user profile with name and photo
        await updateUser(name, photoURL);

        // Navigate to the profile or home page
        Swal.fire({
          title: "Success",
          text: "Your account created successfully.",
          icon: "success"
        });
        navigate('/');
      } else {
        setError('Image upload failed');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate('/profile'); // Navigate to profile or home after Google login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="my-24">
      <form
        className="w-full md:w-1/3 mx-auto mt-16 border border-gray-300 rounded-sm p-4 md:px-14 md:py-14"
        onSubmit={handleRegister}
      >
        <h1 className="montserrat-bold">Create an account</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="my-5">
          <input
            type="text"
            id="name"
            name="name"
            className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full  py-2.5 montserrat-regular"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="my-5">
          <input
            type="email"
            id="email"
            name="email"
            className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full  py-2.5 montserrat-regular"
            placeholder="Email"
            required
          />
        </div>
        <div className="my-5">
          <input
            type="password"
            id="password"
            name="password"
            className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full py-2.5 montserrat-regular"
            placeholder="Password"
            required
          />
        </div>
        <div className="my-5">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full py-2.5 montserrat-regular"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="my-5">
          <input
            type="file"
            id="profilePhoto"
            name="profilePhoto"
            className="border-b border-gray-500 text-gray-900 text-lg focus:outline-none focus:border-blue-700 placeholder:text-gray-900 block w-4/5  md:w-full py-2.5 montserrat-regular"
            placeholder="Select Your Profile Picture"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Accept{" "}
            <Link to="/terms" className="text-blue-700">
              Terms and Conditions
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="text-gray-900 btn-color focus:outline-none font-medium rounded-lg w-4/5  md:w-full sm:mx-auto px-5 py-2.5 text-center montserrat-regular "
        >
          Create an account
        </button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-500 hover:text-yellow-500">
            Login
          </Link>
        </p>
      </form>
      <div className="w-full md:w-1/3 mx-auto mt-5">
        <p className="flex items-center justify-center gap-2 w-4/5 mx-auto">
          <hr className="border border-gray-400 w-52" />{" "}
          <span className="montserrat-regular">Or </span>
          <hr className="border border-gray-400 w-52" />
        </p>
        <button
          onClick={handleLoginWithGoogle}
          className="w-4/5 mx-auto mt-6 p-2 border border-gray-400 hover:border-gray-700 rounded-3xl flex items-center gap-24"
        >
          <FcGoogle className="text-blue-600 text-5xl"></FcGoogle>{" "}
          <span className="montserrat-regular text-gray-950">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default Register;
