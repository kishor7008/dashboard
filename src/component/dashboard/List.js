import data from "./data";

const List = () => {
    return (
        <>
            <h4 className="m-4">Doctors</h4>


            <div style={{ display: "flex", justifyContent: "space-between", alignItem: "center", }}>
                <div className="m-5">
                    Shows
                    <select className="m-2">
                        <option>10</option>
                    </select>
                    entries
                </div>
                <div className="m-5">
                    <input type="text" className=" w-auto p-1 border  " placeholder="Search"></input>
                    <button className="btn btn-success">+Add New</button>
                </div>
            </div>


            <table class="table m-5">
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Batch No.</th>
                        <th scope="col">Location</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                {data && data.map((item, index) => {
                    return (
                        <>
                            <tbody>
                                <tr>

                                    <td class="font-weight-bold">{item.name}</td>
                                    <td className="text-danger">{item.batch}</td>
                                    <td>{item.location}</td>
                                    <td>{item.experience}</td>
                                    <td className="text-danger">{item.contact}</td>
                                </tr>

                            </tbody>
                        </>
                    )
                })}
            </table>
        </>
    )
}
export default List;