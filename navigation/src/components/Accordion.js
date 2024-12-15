import { useState } from "react";
import { GoChevronDown,GoChevronLeft} from "react-icons/go";

export default function Accordion({items}){
    const[expandedIndex,setExpandedIndex] = useState(-1);
    // const[collapse,setCollapse]=useState(-1);
    const expand=(i)=>{
        // setExpandedIndex(expandedIndex===i?-1:i)
        setExpandedIndex((prevValue)=>{ return prevValue===i?prevValue=-1: prevValue=i})
       // or         setExpandedIndex((prevValue)=>{ return prevValue===i?-1:i}) 
            // setExpandedIndex(i);
        }
    const renderedItems=items.map((item,index)=>{ // Either we can pass a key element here which is not present or else we have to
        // specify the id inside the object. Here we passed a key value which is not set by us but react takes the key as random
        // If we give key also we get the result as collapsed
        // if(index===expandedIndex){
        //     console.log("Expanded")
        // }else{
        //     console.log("Collapsed")
        // }
        const isExpanded=index===expandedIndex;
        const icon=<span className="text-2xl"> {isExpanded? <GoChevronDown /> : <GoChevronLeft /> }</span>
       
        return(
               
         <div key={item.id}>
                 {/* key={key} For the time being we are no using the key by compiler */}
                {/* <div>{key}</div> Here we can see the numbers 0,1,2 on each item ie, its set by babel  
                setExpandedIndex((expandedIndex)=>{expandedIndex=index}); the below is the short hand inline way of styling*/} 
               {/* <div  onClick={()=>setExpandedIndex((expandedIndex)=>expandedIndex=index)}>{item.title}</div> */}
               <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"  onClick={() => expand(index)}>
                {item.title}  {icon}</div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div> 
       
        );
    });
    return(
        <div className="border-x border-t rounded">{renderedItems}</div>
    );
}


// {/** return <div className={`accordion-item ${isExpanded ? 'expanded
//         ' : ''}`}  onClick={()=> setExpandedIndex(isExpanded? null
//             : index)}> */}
             