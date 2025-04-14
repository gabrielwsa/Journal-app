import { AppBar, Toolbar, Typography, IconButton, Grid } from "@mui/material";
import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";

export const NavBar = (props) => {
    return (
        <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${props.drawerWidth}px)`}, ml: { sm: `${props.drawerWidth}px` } }}>
            <Toolbar>
                <IconButton color="inherit" edge="start" sx={ { mr: 2, display: { sm: 'none' } } }>
                    <MenuOutlined />
                </IconButton>

                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" noWrap component={'div'}>Journal App</Typography>

                    <IconButton color="error" component={'div'}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}