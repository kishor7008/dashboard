import List from "./List";

const Dashboard = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>

                <h4 className="m-4">Dashboard</h4>
                <form>
                    <input type="text" className="m-4 w-auto p-3 border " placeholder="Batch No." />
                    <input type="text" className="m-4 p-3 w-auto border" placeholder="Name" />
                    <input type="text" className="m-4 p-3 w-auto border" placeholder="Designation" />
                    <button type="button" class="btn btn-success m-4 p-3 fs-5 " style={{ width: "350px" }}>Search</button>
                </form>
                <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
                    <div class="card m-3" style={{ width: "350px" }}>
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/640px-User-avatar.svg.png" class="img-fluid rounded-start" style={{ opacity: "0.2" }} alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title text-danger">1000+</h3>
                                    <p class="card-text">Total Students Register</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card m-3" style={{ width: "350px" }}>
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/640px-User-avatar.svg.png" class="img-fluid rounded-start" style={{ opacity: "0.2" }} alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title text-danger">6</h3>
                                    <p class="card-text">Request Peding</p>

                                </div>
                            </div>
                        </div>
                    </div><div class="card m-3" style={{ width: "350px" }}>
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/640px-User-avatar.svg.png" class="img-fluid rounded-start" style={{ opacity: "0.2" }} alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title text-danger">500+</h3>
                                    <p class="card-text">CA</p>

                                </div>
                            </div>
                        </div>
                    </div><div class="card m-3" style={{ width: "350px" }}>
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/640px-User-avatar.svg.png" class="img-fluid rounded-start" style={{ opacity: "0.2" }} alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title text-danger">500+</h3>
                                    <p class="card-text">Lawyers</p>

                                </div>
                            </div>
                        </div>
                    </div><div class="card m-3" style={{ width: "350px" }}>
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/640px-User-avatar.svg.png" class="img-fluid rounded-start" style={{ opacity: "0.2" }} alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title text-danger">100+</h3>
                                    <p class="card-text">Doctors</p>

                                </div>
                            </div>
                        </div>
                    </div><div class="card m-3" style={{ width: "350px" }}>
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/640px-User-avatar.svg.png" class="img-fluid rounded-start" style={{ opacity: "0.2" }} alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title text-danger">100+</h3>
                                    <p class="card-text">Doctors</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <List />
            </div>
        </>
    )
}
export default Dashboard;