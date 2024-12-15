// import { useState } from 'react';
import useNavigationContext from '../Context/ContextUse'
import classNames from 'classnames';
const Link=({to,children,className,activeClassName})=>{
    const{navigate,currentPath} =useNavigationContext();
    const classes=classNames('text-blue-500',className,
    currentPath === to && activeClassName);
    const handleClick=(e)=>{
        //  The below condition is to handle to open the link we clicked in new tab ie,ctrl+win then click
        //  right now we don't have that option we are implementing that in the below code 
        // we can just give the return stmt and omit navigate(to); then new tab with same page not the clicked 
        // link will get appear
        if (e.ctrlKey || e.metaKey) {
            //  navigate(to);
             return;
        }
        
        // console.log(e);
        e.preventDefault();
        navigate(to);
    }
    
    return(
        <>
        <a  className={classes} onClick={handleClick} href={to}>{children}</a>
        </>
    );
}
export default Link;