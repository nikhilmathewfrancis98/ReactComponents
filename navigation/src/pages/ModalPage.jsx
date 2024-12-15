import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){
    const[showModal,setShowModal]=useState(()=>{return false;});
     const handleClick=()=>{
      setShowModal(true);
    }
    const handleClose=()=>{
      setShowModal(false);
    }
    const actionButton=<div><Button primary onClick={handleClose} >I Accept</Button></div>;
    const modal = <Modal handleClose={handleClose} actionButton={actionButton} 
                  ><p>This is an importnat aggrement to be displayed and you need to accept it because this page can be closed automatically 
                    after certain amount of time</p></Modal>;
    return(<><div className="relative">
         <Button className="mb-5" primary  onClick={handleClick}>Open Modal</Button> 
    {showModal && modal}
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et est quis massa volutpat convallis 
      rutrum eu orci. Aenean massa justo, ornare sed libero id, fringilla tincidunt mauris. Quisque nec 
      tincidunt dui. Aliquam volutpat tortor at aliquam accumsan. Pellentesque sagittis, erat pharetra dignissim
       sagittis, augue nibh tempus velit, quis lacinia eros ex non tellus. Phasellus sodales diam dolor. 
       Vestibulum ullamcorper vitae dui at porttitor. Mauris ut hendrerit turpis, at suscipit quam.
    </p>

    </>);
}

export default ModalPage;