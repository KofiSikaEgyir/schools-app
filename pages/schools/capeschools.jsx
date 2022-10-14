import Link from "next/link";
import Image from "next/image";

function capeschools() {
  return (
    <div className="grid gap-10 pl-[4rem] mt-10 justify-center lg:grid-cols-3 ">
      <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
        <a href="#">
          <Image
            src="/images/adisco/adisco.jpg"
            alt="adisco"
            width="1050"
            height="700"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Adisadel College
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            Adisadel College, popularly known as ADISCO, is an Anglican boys
            boarding school in Cape Coast...
          </p>
          <Link href="/schools/adisadeldetails">
            <button className="border border-blue-500 rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-900">
              Read more...
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
        <a href="#">
          <Image
            src="/images/weygay/weygey1.jpg"
            alt="weygey1"
            width="1050"
            height="700"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Wesley Girls College
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            Wesley Girls High School is an educational institution for girls in
            Cape Coast in the Central region of Ghana.It was founded in 1836 by
            Harriet Wrigley, the wife of a Methodist minister...
          </p>
          <Link href="/schools/weygayid">
            <button className="border border-blue-500 rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-900">
              Read more...
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
        <a href="#">
          <Image
            src="/images/national/ghnat1.jpg"
            alt="ghnat1"
            width="1050"
            height="700"
          />
        </a>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Ghana National College
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            The college was founded by the first Ghanaian President Dr. Kwame
            Nkrumah using his own funds, for eight students who had been
            expelled by the British colonial administration from St Augustines
            College...
          </p>
          <button className="border border-blue-500 rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-900">
            Read more...
          </button>
        </div>
      </div>
    </div>
  );
}

export default capeschools;
