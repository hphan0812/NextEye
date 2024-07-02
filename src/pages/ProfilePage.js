import React from 'react';
import { useForm } from "react-hook-form";
import { Label } from "components/Label";
import { Button } from "components/Button";

const InputField = ({ label, type, name, placeholder }) => (
    <div>
        <Label className="block text-gray-700">{label}</Label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
        />
    </div>
);

const Section = ({ title, children }) => (
    <div>
        <h3 className="mt-12 mb-8 font-semibold text-l">{title}</h3>
        {children}
    </div>
);

const ProfilePage = () => {
    const { handleSubmit } = useForm();

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
                <form onSubmit={handleSubmit}>
                    <Section title="Personal Information">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <InputField label="First Name" type="text" name="firstName" placeholder="Mahfuzul Islam" />
                            <InputField label="Last Name" type="text" name="lastName" placeholder="Nabil" />
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                            <InputField label="Date of Birth" type="date" name="dob" />
                            <InputField label="Mobile Number" type="text" name="mobile" placeholder="(+84)912345670" />
                        </div>
                    </Section>
                    <Section title="Credentials">
                        <div className="mb-8">
                            <InputField label="Email" type="text" name="email" placeholder="nexteye@nextg.team" />
                        </div>
                        <div className="mb-8">
                            <Label className="block text-gray-700">Img Profile</Label>
                            <input
                                type="file"
                                name="profileImage"
                                className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white"
                            />
                        </div>
                    </Section>
                    <div className="flex justify-center mt-10 mb-10">
                        <Button className='w-48 bg-primary' type="submit">Update</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
