import React, {useState} from 'react'
import styles from './NftDisplay.module.css'
import Modal from '../Modals/Modal';
import { motion } from 'framer-motion';

const nftCardVariants = {
  hidden: {
    x: 100,
  },

  visible: {
    x: 0,
  },
};

const NftDisplay = (props) => {

 const [isShowModal, setShowModal] = useState()

 const onShow = ()=>{

  setShowModal(
    true
  )

 }

 const removeModalHandler = ()=>{
  setShowModal(null)
 }


  return (
    <div>
      {isShowModal && <Modal name={props.name} type={props.type} desc={props.desc} onRemove={removeModalHandler}  />}
      <motion.li variants={nftCardVariants} initial="hidden" animate="visible" onClick={onShow} className={styles.li}>
        <div className={styles.img_wrap}>
          <img className={styles.nft_img} src={props.img} alt="nft" />

          <div className={styles.nft_sub_details}>
            <div className={styles.name_wrap}>
              <h6 className={styles.name_text}>{props.name}</h6>
            </div>

            <div className={styles.price_wrap}>
              <h6 className={styles.price_text}>{props.owner}</h6>
            </div>
          </div>
       
        </div>
      </motion.li>
    </div>
  );
}

export default NftDisplay