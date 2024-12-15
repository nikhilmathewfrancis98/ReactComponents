/**
 * This can be the model page that 
 */
 import { createPortal } from "react-dom"
 import {useEffect} from 'react'

const  Modal = ({handleClose,actionButton,children}) =>{
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
          document.body.classList.remove('overflow-hidden');
    }
  }, []);
  const child=<div>
              <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={handleClose}/>
              <div className="absolute inset-40 p-10 bg-white">
              <div className="flex flex-col justify-between h-full">
              {children}
              <div className="flex justify-end">
                 {actionButton}
              </div>
              </div>
              </div> 
              
              </div>;
   const domNode=document.querySelector('.modal-container');
 return createPortal(child,domNode)

}

export default Modal;


// const child=<div><div className="absolute inset-0 bg-gray-300 opacity-80" onClick={handleClose}/>
//               <div className="absolute inset-40 p-10 bg-white"><p>The Modal Component</p>
//               <div><Button className="mb-5" primary  onClick={handleClose}>Close</Button></div></div> </div>;