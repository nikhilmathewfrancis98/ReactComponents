import { createContext,useEffect,useState } from "react";

const NavigationContext=new createContext();

function NavigationProvider({children}){
    // The purpose of the below code is to find the current address path from the address bar and navigate accordingly
    const[currentPath,setCurrentPath]=useState(window.location.pathname);
    // console.log(currentPath)
    // Now the below useEffect code is to listen to the forward and backward navigation if the user clicks 
    // and get the url path accordingly without refresh of the page
    useEffect(()=>{ 
        const handleClick=()=>{
            setCurrentPath(window.location.pathname); // debug this by adding the new navigation using pushstate and
            // see if this showing new path in the window ie, window.history.pushState({},'','/A1')
        }
        
        window.addEventListener('popstate',handleClick);
        return ()=>{
            window.removeEventListener('popstate',handleClick);
        }
    },[])
    function navigate(to){
        window.history.pushState({},'',to);
        setCurrentPath(to);
    }
    return (<>
        {/* <div>
            <button onClick={()=>navigate("/accordion")}>To Accordion</button>
        </div> */}
     {/* { currentPath } */}
       
    <NavigationContext.Provider value={{currentPath,navigate}}>
        {children}
    </NavigationContext.Provider>
    </>
      
    );
};

export {NavigationProvider};
export default NavigationContext;