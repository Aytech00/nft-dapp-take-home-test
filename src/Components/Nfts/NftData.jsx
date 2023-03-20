import React, { useState } from "react";
import NftDisplay from "./NftDisplay";
import style from "./NftData.module.css";

const NftData = (props) => {
  return (
    <div className={style.main_container}>
      <div className={style.line_wrap}>
        <h1 className={style.title}>Items</h1>

        <hr className={style.line} />
      </div>
      <ul className={style.ul_wrap}>
        {props.data.map((item) => (
          <NftDisplay
            key={item.id}
            name={item.Name}
            type={item.Type}
            img={item.img}
            owner={item.Owners}
            desc={item.desc}
          />
        ))}
      </ul>
    </div>
  );
};

export default NftData;
