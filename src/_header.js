import { Link } from "react-router-dom";
import { Box, Grid, AppBar, Toolbar, Button, Typography } from "@mui/material";

const Header = ({user, logout}) => {
    if (!user) {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography variant="h6" component="div">
                                    <Link to="/" style={{ color: "inherit", textDecoration: 'none' }}>Blog handler</Link>
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Button color="inherit">
                                    <Link to="/login" style={{ color: "inherit", textDecoration: 'none' }}>login</Link>
                                </Button>
                            </Grid>

                            <Grid item xs={2}>
                                <Button color="inherit">
                                    <Link to="/signin" style={{ color: "inherit", textDecoration: 'none' }}>sign in</Link>
                                </Button>
                            </Grid> 
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    } else {
        // think on the edit author and logout logic
        return (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography variant="h6" component="div">
                                <Link to="/" style={{ color: "inherit", textDecoration: 'none' }}>Blog handler</Link>
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Button color="inherit">
                                <Link to="/user/edit" style={{ color: "inherit", textDecoration: 'none' }}>{user.username} info</Link>
                            </Button>
                        </Grid>

                        <Grid item xs={2}>
                            <Button color="inherit">
                                <Link to="/" style={{ color: "inherit", textDecoration: "none"}} onClick={logout}>log out</Link>
                            </Button>
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
        )
    }
}

export default Header;