import useNavigationContext from '../Context/ContextUse'

const Route=({children,path})=>{
        const{currentPath} = useNavigationContext();
        if(currentPath === path){
            
            return children;
        }

        return null;

}

export default Route;