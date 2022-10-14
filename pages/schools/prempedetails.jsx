import React from "react";
import TabItem from "../../components/TabItem";
import Image from "next/image";

function PrempeDetailPage() {
  return (
    <div className="max-w-5xl mx-10 lg:mx-auto py-10 space-y-7 ">
      <h className="text-5xl text-center font-bold">
        Welcome to Prempe college
      </h>
      <a
        href="#"
        class="block p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 "
      >
        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
          Prempe College (ADISCO)
        </h5>
        <TabItem label="Level:" content="Senior High School" />
        <TabItem label="Type:" content="Governments SHS" />
        <TabItem label="Number of Students:" content="1,200" />
        <TabItem label="Category:" content="A" />
        <TabItem
          label="Contacts:"
          content="Box Address: P.O.Box 83 Kumasi, Ghana"
        />
        <TabItem label="Email:" content="prempecollege.edu@gmail.com" />
        <TabItem
          label="Telephone:"
          content="+233 54 458 6796 / +233 26 542 2244"
        />
        <TabItem label="Location:" content="Kumasi" />
      </a>

      <div>
        <Image
          src="/images/prempe/prempe.jpg"
          alt="Prempe"
          width={900}
          height={500}
          objectFit="cover"
        />
      </div>

      <div className="space-y-4  ">
        <h className="text-3xl font-semibold">History</h>
        <p className="text-lg">
          Adisadel was established in 1910 in a building at Topp Yard, near
          Christ Church School which is within the vicinity of Cape Coast
          Castle. It began with 29 boys, but by 1935, it had expanded to
          accommodate about 200 pupils. The school buildings were extended in
          1950 by Maxwell Fry and Jane Drew.Student enrolment stood at 545, at
          the time of the schools Golden Jubilee in 1960. There were over 1500
          boarding students and 93 teachers when the school celebrated its
          centenary anniversary in 2010. The schools original founder was the
          Rt. Rev. Nathaniel Temple Hamlyn, a missionary who was then Anglican
          Bishop of Accra between 1908 and 1910. Hamlyns ambition was to
          establish a grammar school to educate the sons of Anglicans in the
          colony, and also create an educational institution which will serve as
          a training ground for the clergy. Adisadel College is the
          second-oldest secondary school in Ghana after Mfantsipim School, an
          arch rival which was established by the Methodist Church in 1876.
          Adisco is also one of the most famous institutions of learning in
          sub-Saharan Africa.
        </p>
        <h className="text-3xl font-semibold py-4">Mission</h>
        <p className="text-lg">
          Producing high profile men who would be outstanding as they take up
          their rightful positions in the field of work to add to the gains of
          their predecessors, through the provision of a conducive environment
          and with the active involvement of all stakeholders to motivate both
          staff and students to achieve their best.
        </p>
        <h className="text-3xl font-semibold">Vision</h>
        <p className="text-lg">
          To be the first-class educational institution excelling in all fields
          of endeavours.
        </p>
      </div>
    </div>
  );
}

export default PrempeDetailPage;
