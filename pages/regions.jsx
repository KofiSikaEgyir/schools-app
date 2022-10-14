import { useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Regions() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  });

  return (
    <div>
      <div className="grid gap-10 pl-[4rem] mt-10 justify-center lg:grid-cols-3 ">
        <Fade right>
          <div className="max-w-sm bg-white rounded-xl border border-teal-200 shadow-md b">
            <a href="#">
              <Image
                src="/images/regions/accra shs.jpg"
                alt="accra shs"
                width="1050"
                height="700"
              />
            </a>
            <div className="p-3">
              <a href="#">
                <Link href="/schools/accraschools">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Creater Accra
                  </h5>
                </Link>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
            <a href="#">
              <Image
                src="/images/regions/central shs2.jpg"
                alt="central shs"
                width="1050"
                height="700"
              />
            </a>
            <div className="p-3">
              <a href="#">
                <Link href="/schools/capeschools">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Central
                  </h5>
                </Link>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
            <a href="#">
              <Image
                src="/images/regions/ashanti shs.jpg"
                alt="ashanti shs"
                width="1050"
                height="700"
              />
            </a>
            <div className="p-3">
              <a href="#">
                <Link href="/schools/kumasischools">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Ashanti
                  </h5>
                </Link>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
            <a href="#">
              <Image
                src="/images/regions/eastern shs.jpg"
                alt="eastern shs"
                width="1050"
                height="700"
              />
            </a>
            <div className="p-3">
              <a href="#">
                <Link href="/school-list">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Eastern
                  </h5>
                </Link>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
            <a href="#">
              <Image
                src="/images/regions/western shs.jpg"
                alt="western shs"
                width="1050"
                height="700"
              />
            </a>
            <div className="p-3">
              <a href="#">
                <Link href="/school-list">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Western
                  </h5>
                </Link>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="max-w-sm bg-white rounded-lg border border-teal-200 shadow-md b">
            <a href="#">
              <Image
                src="/images/regions/volta shs.jpg"
                alt="volta shs"
                width="1050"
                height="700"
              />
            </a>
            <div className="p-3">
              <a href="#">
                <Link href="/school-list">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Volta
                  </h5>
                </Link>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Regions;
