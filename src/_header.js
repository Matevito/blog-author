const _header = ({user}) => {
    if (!user) {
        return (
            <ul>
                <li>home</li>
                <li>log in</li>
                <li>sig in</li>
            </ul>
        )
    } else {
        return (
            <ul>
                <li>home</li>
                <li>Edit author info</li>
                <li>log out</li>
            </ul>
        )
    }
}

export default _header;