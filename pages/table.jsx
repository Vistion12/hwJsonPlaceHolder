// import { UserTable } from "../components/UserTable";

// export default function UserPages() {
//     return (
//         <>
//             <h1>GET BACK USERS</h1>
//             <UserTable />
//         </>
//     );
// }

import { useState } from 'react';
import { UserTable } from "../components/UserTable";

export default function UserTablePage() {
    const [showTable, setShowTable] = useState(false);

    const handleClick = () => {
        setShowTable(true);
    };

    return (
        <>
            <h1>GET BACK USERS</h1>
            {!showTable && <button onClick={handleClick}>Показать таблицу пользователей</button>}
            {showTable && <UserTable />}
        </>
    );
}