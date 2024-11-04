// import { GetUser } from "../components/JSPH";

// export default function  UserPages() {
//     return <>
//     <h1>GET BACK USERS</h1>
//     <GetUser/>
//     </>
// }

import { UserTable } from "../components/UserTable";

export default function HomePage() {
    return (
        <>
            <h1>GET BACK USERS</h1>
            <UserTable />
        </>
    );
}