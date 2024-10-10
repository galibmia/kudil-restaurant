import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        User Profile
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* User Image */}
        <motion.div
          className="w-40 h-40"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {user?.photoURL ? (
            <motion.img
              src={user.photoURL}
              alt="User Profile"
              className="w-full h-full object-cover rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          ) : (
            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              <span className="text-5xl">👤</span>
            </div>
          )}
        </motion.div>

        {/* User Info */}
        <motion.div
          className="flex flex-col gap-4 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold">Name:</h2>
            <p className="text-lg">{user?.displayName || 'No Name Provided'}</p>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold">Email:</h2>
            <p className="text-lg">{user?.email || 'No Email Provided'}</p>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold">Phone:</h2>
            <p className="text-lg">{user?.phoneNumber || 'No Phone Number Provided'}</p>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold">Additional Info:</h2>
            <p className="text-lg">
              Here you can display other relevant user information, such as bio or location.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
