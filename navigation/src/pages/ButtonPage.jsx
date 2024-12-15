// This is a kinda Page component where we used the Components 
import { GoBellFill,GoCloud,GoDatabase } from "react-icons/go";
import Button from "../components/Button";
const ButtonPage=()=>{
    const handleClick=()=>{
        console.log("Hey the Click")
    }
    return(
        <div>
            <div> 
                {/*  trie to give the prop name onClick as onclick or click and it thrown error coz its not a prop of a button
                since  <Button>returns a <button> */}
                <Button className="mb-5" primary outline onClick={handleClick}> 
                <GoBellFill /> Click Me</Button>
            </div>
            <div>
                <Button className="mb-5" secondary rounded onMouseEnter={handleClick}>
                <GoCloud /> Hi There!</Button>
            </div>
            <div>
                <Button className="mb-5" success outline>
                <GoDatabase/> Add to cart!</Button>
            </div>
            <div>
                <Button className="mb-5" warning rounded>
                <GoDatabase/> Order Now</Button>
            </div>
             <div>
                <Button className="mb-5" danger  rounded outline>Order Now</Button>
            </div>
        </div>
    );
}

export default ButtonPage;