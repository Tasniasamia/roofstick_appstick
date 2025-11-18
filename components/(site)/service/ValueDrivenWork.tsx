import HeaderTitle from "@/components/common/headerTitle";
import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiSolidMessage } from "react-icons/bi";
import Image from "next/image";

const ValueDrivenWork = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] 2xl:px-0 px-3">
      <div className="container grid lg:grid-cols-2 gap-[42px]">
        <div className="lg:w-full sm:w-[580px] w-full lg:mx-0 mx-auto sm:h-[500px] h-[400px] lg:h-[630px] rounded-xl">
          <Image
            src="/trust.png"
            width={598}
            height={630}
            alt="image"
            className="w-full h-full object-center rounded-xl"
          />
        </div>
        <div>
          <h5 className="uppercase text-2xl font-roboto text-black mb-6">
            Value-Driven Work
          </h5>
          <HeaderTitle
            title={"Built On Trust, Delivered With Care"}
            description={
              "Nunc orci facilisis et viverra aliquam amet lectus viverra. At turpis tortor ullamcorper ornare mauris tortor risus."
            }
            customClass3="w-full"
            customClass="items-start text-start"
          />
          <ul className="list-none flex flex-col gap-[25px] mt-10">
            <li>
              <div className="flex gap-3.5 items-start">
                <div className="w-[54px] h-[54px] shrink-0 grid place-content-center rounded-full bg-[#D9D9D9]">
                  <VscWorkspaceTrusted className="text-[24px] text-black" />
                </div>
                <div>
                  <h5 className="capitalize text-2xl font-medium font-roboto text-black ">
                    Proven Experience
                  </h5>
                  <p className="text-secondary text-base pt-4  font-normal font-roboto">
                    Semper ultrices maecenas dul laculis in. Proin ipsum enim
                    amet enim maecenas lectus. Semper fermentum nisi iorem.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-3.5 items-start">
                <div className="w-[54px] h-[54px] shrink-0 grid place-content-center rounded-full bg-[#D9D9D9]">
                  <BiSolidMessage className="text-[24px] text-black" />
                </div>
                <div>
                  <h5 className="capitalize text-2xl font-medium font-roboto text-black ">
                    Transparent Process
                  </h5>
                  <p className="text-secondary text-base pt-4  font-normal font-roboto">
                    Semper ultrices maecenas dul laculis in. Proin ipsum enim
                    amet enim maecenas lectus. Semper fermentum nisi iorem.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValueDrivenWork;
