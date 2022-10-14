import Image from "next/image";
// import { useState} from "react";
import Roll from "react-reveal/Roll";

function Contact() {
  // const [data, setData] = useState({
  //   fullName: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const [error, setError] = useState("");
  // const router = useRouter();

  return (
    <div className=" ">
      <Roll top>
        <div className="min h-[calc(100vh_-_68px)] flex flex-col justify-center items-center mt-10">
          <h3 className="text-3xl mb-7 font-bold">Leave a message with us</h3>
          <form className="border-2 border-black max-w-md w-full p-5 rounded-xl space-y-3">
            <div>
              <label className="text-sm font-medium">FullName</label>
              <input
                type="text"
                id="FullName"
                className="border border- w-full p-3 outline-none mt-2"
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
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Subject</label>
              <input
                type="text"
                className="border  w-full p-3 outline-none mt-2"
              />
            </div>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>

            <div className="flex justify-center">
              <button className="border border-gray-500 px-7 py-2 rounded-xl bg-blue-900 text-white hover:bg-blue-500 hover:text-white duration-200 mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Roll>
    </div>
  );
}

export default Contact;
