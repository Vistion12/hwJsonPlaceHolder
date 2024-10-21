export function User({user}) {
    const { id, name, email, phone} = user;
    return <fieldset>
        <ul>
            <li>id:{id}</li>
            <li>name:{name}</li>
            <li>email:{email}</li>
            <li>phone:{phone}</li>
        </ul>
    </fieldset>
}