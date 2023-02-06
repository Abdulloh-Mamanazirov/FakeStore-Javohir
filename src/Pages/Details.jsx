import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";

const Details = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);
  return (
    <>
      <Header />
      <div className="moreItemDetails">
        <div className="moreItemDetails-img">
          <img src={item?.image} alt="" />
        </div>
        <div className="moreItemDetails-info">
          <h2>{item?.title}</h2>
          <p>
            <code>Category:</code> {item?.category}
          </p>
          <p>
            <code>Price:</code> ${item?.price}
          </p>
          <div>
            <p>
              <code>Rating:</code> {item?.rating?.rate} / 5
            </p>
            <p>
              <code>Votes:</code> {item?.rating?.count}
            </p>
          </div>
          <p>{item?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
