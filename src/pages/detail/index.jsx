import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();

  console.log(params); // property của params: phụ thuộc vào tên mà các bạn đặt, setup

  return (
    <div>
      Detail: {params.idContent}
      <img src={`https://i.pravatar.cc?img=${params.idContent}`} />
    </div>
  );
}

export default Detail;
