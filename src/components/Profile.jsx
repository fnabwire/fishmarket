import React, { useState } from 'react';
import { FaUserCircle, FaEdit, FaCamera } from 'react-icons/fa';
// import { Button } from '@/components/ui/button';

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('Frontend Developer at XYZ Company. Passionate about modern web technologies.');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-8 relative">
        <div className="flex flex-col items-center">
          <div className="relative group">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary"
              />
            ) : (
              <FaUserCircle className="text-gray-400 w-32 h-32" />
            )}
            {editing && (
              <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer group-hover:opacity-100">
                <FaCamera className="text-gray-600" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          <div className="mt-6 text-center">
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-xl font-semibold text-gray-800 dark:text-white text-center bg-transparent border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h2>
            )}
            {editing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-500 text-center bg-transparent border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <p className="text-gray-500">{email}</p>
            )}
            {editing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-2 w-full text-sm text-gray-600 bg-transparent border rounded p-2 focus:outline-none"
              />
            ) : (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{bio}</p>
            )}
          </div>

          <div className="mt-6">
            {/* <Button onClick={toggleEdit} className="flex items-center gap-2">
              <FaEdit />
              {editing ? 'Save Profile' : 'Edit Profile'}
            </Button> */}
            click me
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
