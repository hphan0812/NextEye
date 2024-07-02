import React from 'react';
import { useForm } from "react-hook-form";
import {Label} from "components/Label";
import { Button } from "components/Button";

const ProfilePage = () => {
    const {
        handleSubmit,
      } = useForm();
    return (
        <div className="relative h-screen p-16 bg-gray-100">
            <img
                src="/img/logo_company.png"
                alt="Next Robotics Logo"
                className="absolute w-20 h-20 top-10 left-10"
            />
            <div className="max-w-6xl p-8 mx-auto mt-20 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-2xl font-bold">User Information</h2>
                <p className="mb-8 text-sm text-text2 gray-700 font-semi-bold">
                    Update your user information here.
                </p>
                <form onSubmit= {handleSubmit}>
                    <h3 className="mt-12 mb-8 font-semibold text-l"> Personal Information</h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <Label className="block text-gray-700">First Name</Label>
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Mahfuzul Islam" 
                                className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
                            />
                        </div>
                        <div>
                            <Label className="block text-gray-700">Last Name</Label>
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Nabil" 
                                className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <Label className="block text-gray-700">Date of Birth</Label>
                            <input 
                                type="date" 
                                name="dob"
                                className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
                            />
                        </div>
                        <div>
                            <Label className="block text-gray-700">Mobile Number</Label>
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="(+84)912345670" 
                                className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
                            />
                        </div>
                    </div>
                    <h3 className="mt-12 mb-8 font-semibold text-l">Credentials</h3>
                    <div className="mb-8">
                        <Label className="block text-gray-700">Email</Label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="nexteye@nextg.team" 
                            className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
                        />
                    </div>
                    <div className="mb-8">
                        <Label className="block text-gray-700">Img Profile</Label>
                        <input 
                            type="file" 
                            name="profileImage" 
                            className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
                        />
                    </div>
                    <div className="flex justify-center mt-10 mb-10">
                        <Button className='w-48 bg-primary' type="submit">Update</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
