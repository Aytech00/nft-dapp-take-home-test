import React from "react";
import NftData from "./Components/Nfts/NftData";
import { useState } from "react";
import Header from "./Components/Header";

const App = () => {
  const [nfts, setnfts] = useState([]);

  const fetchNftHandler = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "2sDt1sl9EkPDLuo6bLhnjQ9Cr223OTOa",
      },
    };

    try {
      const res = await fetch(
        "https://api.blockspan.com/v1/nfts/contract/0x41f56b000fffe17943fb4c182c123767af71d005?chain=eth-main&include_current_owners=true&include_recent_price=true&page_size=4",
        options
      );

      if (!res.ok) {
        throw new Error("Error!!!");
      }

      const output = await res.json();

      

      const transfomed = output.results.map((item) => {
        return {
          id: item.id,
          Name: item.token_name,
          Type: item.token_type,
          img: "https://res.cloudinary.com/doxcacxnp/image/upload/v1678235646/xWhOed771qYGDHb_-EKrG_16f9Nhi-P0MUD6x4N8keCFClT0vHQPqxyYnQxMtidOjWhLTTCyr4YDicVqRbUq5u8_5JfkN35cLFOKOQ_bgesgi.avif",
          Owners: item.total_current_owners,
          desc: item.token_description,
        };
      });

      setnfts(transfomed);
    } catch (error) {
      console.log(error);
    }
  };

  // const removeModalHandler = ()=>{
  //   setShowModal(null)

  // }

  return (
    <div>
      <Header onGetData={fetchNftHandler} />

      <NftData data={nfts} />
    </div>
  );
};

export default App;
