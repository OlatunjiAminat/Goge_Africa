import React from "react";
import { Link } from "react-router-dom";

function CardSection(props) {
  return (
    <div className="">
      <div className="mx-2">
        <div className="border rounded-t-lg mx-auto mt-20 shadow-xl">
          <img src={props.img} alt="avatar" className= "mx-auto" />
        </div>
        <div className="bg-deep-orange-rgba border rounded-b-lg text-white mx-auto">
          <div>
            <h1 className=" pl-5 py-2 font-bold text-xl md:text-2xl ">{props.topic}</h1>
          </div>
          <div>
            <p className="text-xs pl-5 py-2">{props.date}</p>
          </div>
          <div>
            <p className="text-xs pl-5 py-2">{props.explanation}</p>
          </div>
          <div className="">
            <Link to="../pages/BlogDetails"><p className="text-xs pl-5 py-2 bg-white text-deep-orange-rgba w-24 rounded-full ml-6 mb-10 mt-6 ">{props.button}</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
