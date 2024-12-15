import { GoChevronUp , GoChevronDown  } from 'react-icons/go';
import Table from './Table'
import { useState } from 'react';

function SortableTable(props){
    const[sortOrder,setSortOrder] =useState(null);
    const[sortBy,setSortBy] =useState(null);

 const {config,data} = props;

 const handleClick =(label)=>{

    if(sortBy  && label!==sortBy){
        setSortBy(label);
        setSortOrder('asc');
        return;
    }
    if(sortOrder === null){
        setSortOrder('asc');
        setSortBy(label);
    }else if(sortOrder === 'asc'){
        setSortOrder('desc')
        setSortBy(label);
    }else if(sortOrder === 'desc'){
        setSortOrder(null);
        setSortBy(null);
    }
 }
 const updatedConfig = config.map((column)=>{
    if(!column.sortValue){return  column}

    return {...column,
        header:() => <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label} Is SortableTable
          </div>
        </th>}

 });
//  We only sort the data iff sortOrder and the sortBy are not null
//  If not null make a copy of the data prop
// Imp :
// When sorting the objects when we calling a sort function on an array its modifies the original array 
// In react never directly modifies the array if teh array is a part  of the props sys or the state sys
// Find the correct sort value function

let sortedData=data;
if(sortBy && sortOrder){
    // const{sortValue} = config.find((column) => column.label)
    const{sortValue} = config.find((column) => column.label === sortBy) // I wrote this
    sortedData = [...sortedData].sort((a,b)=>{
        const valA=sortValue(a);
        const valB=sortValue(b);
        const reverseOrder = sortOrder === 'asc'?1:-1;
        if(typeof valA === 'string'){
           return valA.localeCompare(valB) * reverseOrder;
        }else{
            return (valA - valB) * reverseOrder
        }
    })
}
 return (<div> 
    {/* {sortBy} - {sortOrder} */}
    <Table {...props} data={sortedData} config={updatedConfig}/></div>
 
); // Since our props have a config it will be overridden with new one
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoChevronUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoChevronDown />
      </div>
    );
  }
}


export default SortableTable;