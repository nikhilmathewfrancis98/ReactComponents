import { useEffect ,useState , useRef} from "react";
import Panel from "./Panel";

function Dropdown({options:givenOptions,selected,handleSelect:setSelected,children}){
    // const name=myName;
    // const value_is=givenOptions[0].label;
    // console.log(global?.isOpenGlobal || "Undefined");
    const DropDiv=useRef();
    useEffect(()=>{
        const handleMyListenerClick=(e)=>{
                //setIsOpen(false); //if we give this the dropD will get closed but works fine with multiple dropDs 
                // Problem is we cannot select a option since this is triggered when we click the option
                // then the Select collapse Just debug if any doubt
                if (!DropDiv.current) {
                    return;
                }
                console.log("Inside fn 1");
                if(! DropDiv.current.contains(e.target)){
                    console.log("Inside fn 2");
                        setIsOpen(false);
                }
        }
        document.addEventListener('click',handleMyListenerClick,true);
        console.log("Outside fn");
        // const cleanUp=()=>{
        //     return document.removeEventListener('click', handleMyListenerClick,true);
        // }
        return ()=>{
            document.removeEventListener('click', handleMyListenerClick,true);
        };
    },[])
    const [isOpen,setIsOpen]=useState(false);
    
    const renderedOptions=givenOptions.map((option)=>{
            return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value}
             onClick={()=>handleOptionClick(option.label)}>{option.label}</div> 
            // The purpose of we given the label in selection in order to get the value in the final form submit
            // ie, options[selected] ==== options[RED] == red the value
    });
    const handleClick=()=>{
        console.log("Inside Select click");
        setIsOpen((prevValue)=>!prevValue);
    }
    const handleOptionClick=(value)=>{
        setSelected(value);
         setIsOpen(!isOpen);         
    }
    let content=(selected)?selected:"SELECT"
    return(
        <div ref={DropDiv} className="w-48 relative">
            {/* Dropdown... with value {name && value_is} */}
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
               {/* {selected || "Select..."} */}
               {/* If selected is an object code becomes {selected?.label || "Select..."} */}
               {/* Since we are directly passing the value we don't need it */}
                {content}
                 {(isOpen)?<span>{children[1]}</span>:<span>{children[2]}</span>}
            </Panel>
            { isOpen && <Panel className="absolute top-full"> {renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;

// // You do *not* need to change this file
// // You do *not* need to change this file

// import React from 'react';

// function Slider({ value, onChange }) {
//   return (
//     <div>
//       <h1>Current Age: {value}</h1>
//       <input type="range" min={1} max={120} value={value || 50} onChange={(e) => onChange && onChange(e.target.value)} />
//     </div>
//   );
// }

// // Don't change the export
// export { Slider };

// ============================== The below code is the code used when we have multiple dropdowns 

// import Panel from "./Panel";

// // Since we need to apply the functionality of when clicking one dropdown collapse another we need 
// //  a common useState inside parent and pass it
// function Dropdown({options:givenOptions,selected,handleSelect:setSelected,children,
//                     isOpen:isOpenGlo,onToggle:setIsOpenGlobal}){
    
//     const renderedOptions=givenOptions.map((option)=>{
//             return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={()=>handleOptionClick(option.label)}>{option.label}</div> 
          
//     });
//     const handleClick=()=>{
//         setIsOpenGlobal();
//     }
//     const handleOptionClick=(value)=>{
//         setSelected(value);
//          setIsOpenGlobal();
//     }

//     let content=(selected)?selected:"SELECT"
//     return(
//         <div className="w-48 relative">
//             <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
//                 {content}
//                  {(isOpenGlo)?<span>{children[1]}</span>:<span>{children[2]}</span>}
//             </Panel>
//             { isOpenGlo && <Panel className="absolute top-full"> {renderedOptions}</Panel>}
//         </div>
//     );
// }

// export default Dropdown;