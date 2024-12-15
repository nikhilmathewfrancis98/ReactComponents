import Link from "./Link";
// import useNavigationContext from '../Context/ContextUse'


function SideBar(){
            // const{currentPath} = useNavigationContext();

    const links=[
        {label:"Dashboard",path:"/"},
        {label:"DropDown",path:"/Dropdown"},
        {label:"Accordion",path:"/Accordion"},
        {label:"Button",path:"/Button"},
        {label:"Modal",path:"/Modal"},
        {label:"Table",path:"/table"}
    ];

    const renderedLinks=links.map((link)=>{
            return <Link key={link.label} 
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            className="mb-5"  to={link.path}>{link.label}</Link>
            // currentPath={currentPath}
    });
    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
        {renderedLinks}
        </div>
    );
}

export default SideBar;