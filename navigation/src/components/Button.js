import classnames from 'classnames'
import { twMerge } from 'tailwind-merge'; // This is to avoid the text-white overriding
// import PropTypes from 'prop-types'; 
// let finalClassNames=classnames('px-3','py-1.5','bg-blue-500',{'bg-red-500':true}); // Just a demo

// console.log(finalClassNames)
const Button=({
      children,
      primary,
      secondary,
      success,
      warning,
      danger,
      outline,
      rounded,
    // onClick:theClick
    ...rest // we are doing the resting here inorder  to get the rest of the properties here even if its an event or any other as array of objects
}) => { // the children prop has the value of the text we given in the App.js
    console.log(rest,primary);
        const classes=twMerge(classnames(rest.className,'flex items-center','px-3','py-1.5 border',
        {'border-blue-600 bg-blue-500 text-white':primary, // here there was text-white and I deleted it. since only for button 1(initially for debugging we did) we added primary the value is true and that button is highlighted
        'border-gray-900 bg-gray-900 text-white':secondary,
        'border-green-500 bg-green-500 text-white':success,
        'border-yellow-400 bg-yellow-400 text-white':warning,
        'border-red-500 bg-red-500 text-white':danger,
        'rounded-full': rounded,
        'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger
    } 
));
    return(
        <button {...rest} className={classes}>{children}</button> // This is the underlying or the wrapped element 
        // We can also do like onClick={rest.onClick} so the onclick event only will work 
        //  Now we have implemented the logic of getting all the props and spreading it
        );
}

Button.propTypes={ // The name should be propTypes ie PropTypes with p lowercase
    // Here we can validate primary,success,secondary if it has any values and required values and types or not
    // primary:PropTypes.string.isRequired,
    // secondary:PropTypes.string,
    // Our custom name to check the variations in names
    checkVariationValue:(props)=>{ // Instead of giving the props do destructuring also
        // console.log(props) // Here in the console we can see 4 different props ie, because the 4 button components we are provided
        // const count=Number(props.primary)+Number(props.secondary)
        // +Number(props.success)+Number(props.warning)+Number(props.danger);// Logic is correct but no o/p because it does not handel the undefined
        const count= Number(!!props.primary)+Number(!!props.secondary)
        +Number(!!props.success)+Number(!!props.warning)+Number(!!props.danger);
        if(count>1){
                return new Error("Only one primary, secondary, success, warning, danger is allowed!")
        }
        // return new Error("Hey error");
    },
}
export default Button;


// Some reference
// const classes = twMerge(
//     className('px-3 py-1.5 border', {
//       'border-blue-500 bg-blue-500 text-white': primary,
//       'border-gray-900 bg-gray-900 text-white': secondary,
//       'border-green-500 bg-green-500 text-white': success,
//       'border-yellow-400 bg-yellow-400 text-white': warning,
//       'border-red-500 bg-red-500 text-white': danger,
//       'rounded-full': rounded,
//       'bg-white': outline,
//       'text-blue-500': outline && primary,
//       'text-gray-900': outline && secondary,
//       'text-green-500': outline && success,
//       'text-yellow-400': outline && warning,
//       'text-red-500': outline && danger
//     })
//   );