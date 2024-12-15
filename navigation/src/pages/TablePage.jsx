import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
const TablePage = () => {
    // const data2 = [
    //     { name: 'Truck', price: 195000, Discountprice: 125000, Image: "" },
    //     { name: 'Car', price: 195000, Discountprice: 125000, Image: "" },
    //     { name: 'Boat', price: 195000, Discountprice: 125000, Image: "" },
    //     { name: 'Plane', price: 195000, Discountprice: 125000, Image: "" }
    // ];
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 }
    ];
    const config = [ // As this arrays object increases the cloumn will also gets increase
        {
            label: 'Name', // The th element
            render: (row) => row.name,
            sortValue: (fruit) => fruit.name, // to sort the value and given to sortTable comp to check the comp
        },
        {
            label: 'Color',
            render: (row) => <div className={`p-3 m-2 ${row.color}`} />,
        },
        {
            label: 'Score',
            render: (row) => row.score,
            // header: () => <th className={"bg-red-500"}>Score</th>, // commented this for adding inside SortableTable
            // header: (column) => <th key={column.label} className={"bg-red-500"}>Score</th> We added a Echo comp
            sortValue: (fruit) => fruit.score,
        }
        // {
        //     label: ' Squared',
        //     render: (row) => row.score ** 2, // showes the square of the score
        //     // sortValue: (fruit) => fruit.score ** 2,
        // },
    ];

    const keyFn = (x) => {
        return x.name;
    } // generate the unique key like if the comming data maynot have name so we can edit here
    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
            <SortableTable data={data} config={config} keyFn={keyFn} theDecoy={{ x: 'y' }} />
        </div>
    );
}

export default TablePage;