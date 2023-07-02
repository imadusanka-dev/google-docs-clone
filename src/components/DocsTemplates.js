import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const DocsTemplates = () => {
  return (
    <section className="bg-[#F1F3F4] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="py-6 flex items-center justify-between">
          <h2 className="text-gray-700 text-lg">Start a new document</h2>
          <BsThreeDotsVertical color="grey" />
        </div>
        <div>
          <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
            <Image
              src="https://links.papareact.com/pju"
              fill={true}
              alt="blank"
            />
          </div>
          <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
        </div>
      </div>
    </section>
  );
};

export default DocsTemplates;
