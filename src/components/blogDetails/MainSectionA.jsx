import React from "react";
import blogDetail1 from '../../assets/blogDetailPage-image1.png'

function MainSectionA() {
  return (
    <div>
      <div className="font-sans md:flex justify-around">
        <div className="text-deep-orange-rgba pt-8">
          <h1 className="mb-4 mt-16 leading-relaxed max-w-sm pl-6 font-bold text-xl tracking-wider md:text-2xl md:pl-12 md:mt-16 leading-loose lg:mt-24 lg:pl-24">
            How To Have A Good Music Listening Ear
          </h1>
          <p className="pl-6 mb-8 text-xs text-grey-rgba leading-loose lg:max-w-xs md:pl-12 lg:leading-loose lg:mt-12 lg:pl-24">
            19 Augs,2019 - by Tommy Lang
          </p>
        </div>
        <div>
          <img src={blogDetail1} alt="female and male" className="pb-8" />
        </div>
      </div>
    </div>
  );
}

export default MainSectionA;
