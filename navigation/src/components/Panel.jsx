import classnames from 'classnames'
// import { twMerge } from 'tailwind-merge';

function Panel({children,className, ...rest }){
    const finalClassNames=classnames(
        'border rounded p-3 shadow bg-white w-full',
        className  // Merging additional class name from props in here no need to spread it coz its a single string
    );

    return(<div {...rest} className={finalClassNames}>
        {children}
    </div>);
}

export default Panel;