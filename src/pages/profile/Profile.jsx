import React from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";
import ProfileCard from "./ProfileCard";
import AddressSection from "./AddressSection";

export default function Profile() {
    const handleChangePassword = () => {
        console.log('Change password clicked');
      };
    return (
        <div>
            <div className="container mx-auto flex justify-start items-center py-10">
                <BreadCrumb name="Home" title="Profile" />
            </div>
            <div className="min-h-screen p-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <ProfileCard
                name="Mr.jhon"
                email="jhon@gmail.com"
                phone="01226565448545"
                avatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                onChangePassword={handleChangePassword}
              />
            </div>
          </div>
          
          {/* Address Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <AddressSection />
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}