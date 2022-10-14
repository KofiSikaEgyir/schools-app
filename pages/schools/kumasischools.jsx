import Image from "next/image";
import Link from "next/link";

function kumasischools() {
  return (
    <div className="grid gap-10 pl-[4rem] mt-10 justify-center lg:grid-cols-3 ">
      <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
        <a href="#">
          <Image
            src="/images/prempe/prempe.jpg"
            alt="prempe"
            width="1050"
            height="700"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Prempeh College
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            Prempeh College is a public secondary boarding school for boys
            located in Kumasi, the capital city of the Ashanti Region, Ghana.
            The school was founded in 1949 by the Asanteman traditional
            authority, the British Colonial Government, the Methodist Church
            Ghana and the Presbyterian Church of Ghana...
          </p>
          <Link href="/schools/prempedetails">
            <button className="border border-blue-500 rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-900">
              Read more
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
        <a href="#">
          <Image
            src="/images/amass/amass1.png"
            alt="presec"
            width="1050"
            height="700"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              T.I. Ahmadiyya Senior High School
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            T.I. Ahmadiyya Senior High School (Real Amass) is a coeducational
            second-cycle public educational institution in Kumasi in the Ashanti
            Region of Ghana...
          </p>
          <button className="border border-blue-500 rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-900">
            Read more
          </button>
        </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
        <a href="#">
          <Image
            src="/images/kuhis/kuhis.jpg"
            alt="presec"
            width="1050"
            height="700"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Kumasi High School
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            Kumasi High School, often referred to as KUHIS, is a boys senior
            high school in the Ashanti region of Ghana. It was established in
            1962, by S. K. Amoah. The students are known collectively as
            Mmerantee(Gentlemen)...
          </p>
          <button className="border border-blue-500 rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-900">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default kumasischools;
