// src/Profile.js
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [theme, setTheme] = useState('light-theme');
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City, Country',
        profilePicture: 'default-profile.jpg'
    });
    const [showEditProfileModal, setShowEditProfileModal] = useState(false);
    const [showChangeAddressModal, setShowChangeAddressModal] = useState(false);
    const [newProfile, setNewProfile] = useState(profile);

    const toggleTheme = () => {
        const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        setTheme(newTheme);
        document.body.className = newTheme;
    };

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({ ...newProfile, [name]: value });
    };

    const handleProfileUpdate = () => {
        setProfile({ ...profile, ...newProfile });
        setShowEditProfileModal(false);
    };

    const handlePictureUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfile({ ...profile, profilePicture: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-container">
            <header>
                <h1>My Profile</h1>
            </header>

            <section id="profile-picture-section" className="profile-picture-section">
                <img src={profile.profilePicture} alt="Profile Picture" id="profile-picture" />
                <div className="profile-picture-buttons">
                    <button className="action-button" onClick={() => document.getElementById('gallery-input').click()}>Choose from Gallery</button>
                    <button className="action-button" onClick={() => document.getElementById('camera-input').click()}>Take Picture</button>
                </div>
                <input type="file" id="gallery-input" accept="image/*" style={{ display: 'none' }} onChange={handlePictureUpload} />
                <input type="file" id="camera-input" accept="image/*;capture=camera" style={{ display: 'none' }} onChange={handlePictureUpload} />
            </section>

            <section id="user-details">
                <h2>User Details</h2>
                <div className="user-info">
                    <p><strong>Name:</strong> <span id="user-name">{profile.name}</span></p>
                    <p><strong>Email:</strong> <span id="user-email">{profile.email}</span></p>
                    <p><strong>Phone:</strong> <span id="user-phone">{profile.phone}</span></p>
                    <p><strong>Address:</strong> <span id="user-address">{profile.address}</span></p>
                </div>
            </section>

            <section id="edit-profile">
                <h2>Edit My Profile</h2>
                <button className="action-button" onClick={() => setShowEditProfileModal(true)}>Edit Profile</button>
            </section>

            <section id="change-address">
                <h2>Change My Address</h2>
                <button className="action-button" onClick={() => setShowChangeAddressModal(true)}>Change Address</button>
            </section>

            <section id="theme-toggle">
                <button className="action-button" onClick={toggleTheme}>Toggle Dark Mode</button>
            </section>

            {/* Edit Profile Modal */}
            {showEditProfileModal && (
                <div className="modal" id="edit-profile-modal" onClick={(e) => e.target.id === 'edit-profile-modal' && setShowEditProfileModal(false)}>
                    <div className="modal-content">
                        <h2>Edit Profile</h2>
                        <input type="text" id="edit-name" placeholder="New Name" name="name" value={newProfile.name} onChange={handleProfileChange} />
                        <input type="email" id="edit-email" placeholder="New Email" name="email" value={newProfile.email} onChange={handleProfileChange} />
                        <input type="text" id="edit-phone" placeholder="New Phone" name="phone" value={newProfile.phone} onChange={handleProfileChange} />
                        <button onClick={handleProfileUpdate}>Save Changes</button>
                    </div>
                </div>
            )}

            {/* Change Address Modal */}
            {showChangeAddressModal && (
                <div className="modal" id="change-address-modal" onClick={(e) => e.target.id === 'change-address-modal' && setShowChangeAddressModal(false)}>
                    <div className="modal-content">
                        <h2>Change Address</h2>
                        <input type="text" id="edit-address" placeholder="New Address" name="address" value={newProfile.address} onChange={handleProfileChange} />
                        <button onClick={handleProfileUpdate}>Save Address</button>
                    </div>
                </div>
            )}

            <div id="message"></div>
        </div>
    );
};

export default Profile;