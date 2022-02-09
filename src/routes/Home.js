const Home  = ({ user }) => {
    
    if (!user) {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>User loged in!</h1>
            </div>
        )
    }
}

export default Home;