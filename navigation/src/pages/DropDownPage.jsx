import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { GoChevronDown } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";



function DropDownPage() {
  const [selected2, setSelected2] = useState(null);
  const [selected, setSelected] = useState(null);
  const handleSelect = (value) => {
    setSelected(value);
  }
  const handleSelect2 = (value) => {
    setSelected2(value);
  }
  const options = [
    { label: 'RED', value: 'red' },
    { label: 'GREEN', value: 'green' },
    { label: 'YELLOW', value: 'yellow' }
  ];

  return (
    <div className="App">
      <h1>Hey DropDown</h1>
      <div className="flex">
        {/* <a href="/dashboard">Dashboard</a> */}
        <Dropdown options={options} selected={selected} handleSelect={handleSelect}> <GoChevronDown />
          <GoChevronRight className="text-lg" />
        </Dropdown>
        <Dropdown options={options} selected={selected2} handleSelect={handleSelect2}> <GoChevronDown />
          <GoChevronRight className="text-lg" />
        </Dropdown>
      </div>
    </div>
  );

}

export default DropDownPage;