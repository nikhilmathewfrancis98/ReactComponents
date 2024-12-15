import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/Accordion";
import DropDownPage from "./pages/DropDownPage";
import SideBar from "./components/sideBar";
import Route from "./components/Route";
import Dashboard from "./components/Dashboard";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import useNavigationContext from "./Context/ContextUse";
const App=()=>{
//    const path=window.location.pathname;
//    console.log(path);
    // const handleClick=(e)=>{
    //     e.preventDefault();
    //         console.log(e.target);
    //         console.log(window.location.pathname);

    // }
    //  const[currentPath,setCurrentPath]=useState(window.location.pathname);
    const{currentPath} = useNavigationContext();
    console.log(currentPath)
    return(
            <>
            {/* <a href="/dashboard" onClick={handleClick}>Click Me</a> */}
           
            <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <SideBar/>
            <div className="col-span-5">
                {/* <Route path='/'><SideBar/></Route> */}
                {/* Initially the page is getting launched is the below page */}
                 <Route path="/" ><Dashboard/></Route> 
                 <Route path="/Modal"><ModalPage/></Route>
                <Route path="/Accordion" ><AccordionPage/></Route>
                <Route path="/Dropdown" ><DropDownPage/></Route>
                <Route path="/Button" ><ButtonPage/></Route>
                <Route path="/table"><TablePage/></Route>

            </div>
            </div>
       </>
    );
}

export default App;