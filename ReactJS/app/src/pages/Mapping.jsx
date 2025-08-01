// MMappinging in ReactJS

import { Link } from "react-router"
import { users } from "../constants/users"


const Mapping = () => {

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return <div className="d-flex justify-content-center align-items-center">
        <Link to="/about">About</Link>
        {nums.map((num) => {
            // key -> unique id for each element
            return <div key={num} className="bg-success m-2">{num}</div>
        })}

        <div>
            {
                users.map((user) => {
                    return <div key={user.id} className="bg-info m-2 text-light p-2">
                        <h3>{user.name}</h3>
                        <p>@{user.username}</p>
                        <p onClick={() => window.open(user.website, "_blank")}>{user.website}</p>
                    </div>
                })
            }
        </div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default Mapping