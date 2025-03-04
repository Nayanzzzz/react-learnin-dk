import { useState } from "react";
import InputC from "../../../../../components/ui/input";

const LeftView = () => {
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    name:""
  });

  const handleInputChnages = (value: string, name: keyof typeof userForm) => {
    setUserForm((p) => ({ ...p, [name]: value }));
  };
  
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-3 border-lime-500 w-2xl h-[500px] rounded-[100px] flex items-center justify-center">
        <form className="flex flex-col gap-2  n-500  md:  lg:gap-7  ">
          {/* <input className=" border-3 border-blue-500 rounded-lg text-2xl p-2"
                 type="email" placeholder="Enter Your Email "/> */}

          <InputC
            name="name"
            onChange={handleInputChnages}
            value={userForm.name}
            placeholder="Enter name id ..."
            type="text"
          />
          <InputC
            name="email"
            onChange={handleInputChnages}
            value={userForm.email}
            placeholder="Enter email id ..."
            type="email"
          />
          <InputC
            name="password"
            onChange={handleInputChnages}
            value={userForm.password}
            placeholder="Enter password ..."
            type="password"
          />

          <button
            className="text-2xl border-2  bg-gray-700 rounded-lg"
            style={{
              padding: "5px",
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeftView;
