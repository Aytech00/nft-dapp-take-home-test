import { motion } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom'
import style from './Modal.module.css'


const modalVariant = {

  hidden:{
    y: -100,

  },
   
  visible:{


    y: 0,
    transition:{
      type: 'spring',
      stiffness:250,
    }
   



  }
}

  const Backdrop = (props)=>{
    return (<div onClick={props.onRemoveModal} className={style.backdrop}></div>)
  }

  const Mo = (props)=> {
    return (
      <motion.div variants={modalVariant} initial="hidden" animate="visible" className={style.modal_wrap}>
        <div className={style.inner_modal_wrap}>
          <div className={style.name_wrap}>
            <h1 className={style.name}>{props.name}</h1>
          </div>

          <div className={style.desc_wrap}>
            <p className={style.desc}> {props.desc}</p>
          </div>

          <div className={style.nft_type_wrap}>
            <span className={style.nft_type_field}>Token: </span>
            <span className={style.nft_type_data}>{props.type}</span>
          </div>

          <div className={style.modal_btn_wrap}>
            <button className={style.modal_btn}>Buy now</button>
          </div>
        </div>
      </motion.div>
    );
  }

const Modal = (props) => {

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onRemoveModal={props.onRemove} />,
        document.getElementById("back_drop")
      )}
      {ReactDOM.createPortal(<Mo name={props.name} desc={props.desc} type={props.type} />, document.getElementById("mo_dal"))}
    </>
  );
}

export default Modal