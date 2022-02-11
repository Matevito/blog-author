import { Alert, AlertTitle, Stack } from "@mui/material";

const LoginError = ({ error }) => {
    if (error === true) {
        return(
            <Stack sx={{ width: '100%'}} spacing={2}>
                <Alert variant="outlined" severity="error">
                    <AlertTitle>Authentication error</AlertTitle>
                    Theres a problem with the username or the password.
                </Alert>
            </Stack>
        )
    } else {
        return <></>
    }
};

export default LoginError;