import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-32">
            <h1 className="text-4xl font-bold text-center mb-8">User Profile</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                {/* User Image */}
                <div className="w-40 h-40">
                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                            <span className="text-5xl">👤</span>
                        </div>
                    )}
                </div>

                {/* User Info */}
                <div className="flex flex-col gap-4 text-left">
                    <div>
                        <h2 className="text-2xl font-semibold">Name:</h2>
                        <p className="text-lg">{user?.displayName || "No Name Provided"}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Email:</h2>
                        <p className="text-lg">{user?.email || "No Email Provided"}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Phone:</h2>
                        <p className="text-lg">{user?.phoneNumber || "No Phone Number Provided"}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Additional Info:</h2>
                        <p className="text-lg">Here you can display other relevant user information, such as bio or location.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
