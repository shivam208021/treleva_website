import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 h-full">
      <div className="text-center p-4">
        <div className="flex justify-center items-center h-36 w-36 mx-auto">
          <img
            alt="card-img"
            src={props.img}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">{props.title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
