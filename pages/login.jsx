import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Roll from "react-reveal/Roll";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <Roll bottom>
        <div className="min h-[calc(100vh_-_68px)] flex flex-col justify-center items-center">
          <h3 className="text-3xl mb-7 font-bold">Login </h3>
          <form
            onSubmit={handleSubmit}
            className="border-2 border-black max-w-md w-full p-5 rounded-xl space-y-3"
          >
            {error && <p>{error}</p>}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border- w-full p-3 outline-none mt-2"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
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
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="flex justify-center items-center  border border-gray-500 px-7 py-2 rounded-xl text-white bg-blue-900 hover:bg-blue-500 hover:text-white duration-200 mt-10"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg  font-medium ">
                <a> I am not a member </a>
                <Link href="/register">
                  <span className="hover:text-red-700 text-2xl items-center text-blue-700">
                    SignUp
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </Roll>
    </div>
  );
};

export default Login;
