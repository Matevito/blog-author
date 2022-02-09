const LoginError = ({ error }) => {
    if (error === true) {
        return(
            <div>
                <h3>Theres a problem with the username or the password.</h3>
            </div>
        )
    } else {
        return <></>
    }
};

export default LoginError;