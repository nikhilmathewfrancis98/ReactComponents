import { useContext } from 'react';
import NavigationContext from './navigation_Context';

const useNavigationContext=()=>{
    return useContext(NavigationContext);
}

// const useBookProvider=()=>{
//     return Provider;
// }


// export {useBookProvider};
export default useNavigationContext;