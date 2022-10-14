import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Zoom from "react-reveal/Zoom";

function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { firstName, lastName, email, password, confirmPassword } = data;

    if (
      firstName == "" &&
      lastName == "" &&
      email == "" &&
      password == "" &&
      confirmPassword == ""
    ) {
      setError("Please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
      router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="">
      <Zoom top>
        <div className="min h-[calc(100vh_-_68px)] flex flex-col justify-center items-center">
          <h3 className="text-3xl mb-7 font-bold">Create Account</h3>
          {error && <p>{error}</p>}

          <form
            onSubmit={handleSubmit}
            className="border-2 border-black max-w-md w-full p-5 rounded-xl space-y-3"
          >
            <div>
              <label className="text-sm font-medium">FirstName</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={data.firstName}
                onChange={handleChange}
                className="border border- w-full p-3 outline-none mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">LastName</label>
              <input
                type="text"
                id="firstName"
                name="lastName"
                className="border border- w-full p-3 outline-none mt-2"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border- w-full p-3 outline-none mt-2"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border  w-full p-3 outline-none mt-2"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium ">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                className="border  w-full p-3 outline-none mt-2"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="border border-gray-500 px-7 py-2 rounded-xl bg-blue-900 text-white hover:bg-blue-500 hover:text-white duration-200 mt-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </Zoom>
    </div>
  );
}

export default Register;
