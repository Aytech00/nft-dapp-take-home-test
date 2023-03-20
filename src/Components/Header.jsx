import React from "react";
import style from "./Header.module.css";
import {motion} from 'framer-motion'


const Variant1 = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 2,
    transition: {
    
      duration: 0.5,
    },
  },
};

const Variant2 = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 3,
    transition:{
      delay:0.4,
      duration: 0.7 ,
    }
  },
};


const btnHover = {
  hover:{
    scale: 1.2
  }
}


const Header = (props) => {


  

  return (
    <div>
      <header className={style.header}>
        <motion.div variants={Variant1} initial="hidden" animate="visible">
          <h1 className={style.title}>NFT COLLECTION</h1>
        </motion.div>

        <motion.div
          variants={Variant2}
          initial="hidden"
          animate="visible"
          className={style.btn_wrap}
        >
          <motion.button variants={btnHover} whileHover="hover" onClick={props.onGetData} className={style.btn}>
            Get Nfts{" "}
          </motion.button>
        </motion.div>
      </header>
    </div>
  );
};

export default Header;
