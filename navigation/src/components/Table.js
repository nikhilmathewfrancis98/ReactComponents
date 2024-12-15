import { Fragment } from "react";

// function Echo({children}){
//   return children;
// }

function Table({data:tableData,config,keyFn}){

    const renderedHeaders=config.map((column)=>{
      if(column.header){
       return <Fragment key={column.label}>{column.header()}</Fragment>  // Echo return the <th> itself
        // return column.header(column); We are using <Echo> to remove the key missing warning
      }
        return  <th key={column.label}>{column.label}</th>
    });

    const renderValue= tableData.map((rowData)=>{
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
})
    return(<tr className="border-b" key={keyFn(rowData)}>
       {renderedCells}
    </tr>
    );
    });

    // console.log(theDecoy)
    return(<>
    <table className="table-auto border-spacing-2">
        <thead>
  <tr className="border-b-2">
    {renderedHeaders}
    {/* <th>Fruit</th>
    <th>Color</th>
    <th>Score</th> */}
  </tr>
  </thead>
  <tbody>
    {renderValue}
    </tbody>
    </table>
    </>);
}

export default Table;




    //  <td className="p-3">{config[0].render(x)}</td>
    //     <td className="p-3">
    //         {/* <div className={`p-3 m-2 ${x.color}`}/> */}
    //          <div className={`p-3 m-2 ${config[1].render(x)}`}/>
    //         </td>
    //     <td className="p-3">{config[2].render(x)}</td>