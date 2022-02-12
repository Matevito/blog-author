import { Alert, Stack } from "@mui/material";

const articleError = ({ error }) => {
    if (!error) {
        return <></>
    } else {
        const msgError = error.error
        return(
            <Stack sx={{ width: '100%'}} spacing={2}>
                <Alert variant="outlined" severity="error">
                    {msgError}
                </Alert>
                <p></p>
            </Stack>
        )
    }
}

export default articleError;