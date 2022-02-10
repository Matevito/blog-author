const SigninError = ({ error }) => {
    if (!error) {
        return <></>
    } else {
        const msgError = error.error;
        return (
            <div>
                <h3>{msgError}</h3>
            </div>
        )
    }
}

export default SigninError;