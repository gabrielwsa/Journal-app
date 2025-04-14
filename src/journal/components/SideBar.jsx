import { Box, Drawer, Typography, Toolbar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Grid, ListItemSecondaryAction } from "@mui/material"
import { TurnedInNotOutlined } from "@mui/icons-material"

export const SideBar = (props) => {
    return (
        <Box component={'nav'} sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer variant="permanent" open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth } }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component={'div'}>JournalApp</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map(text => (
                            <ListItemButton key={text}>
                                <ListItemIcon>
                                    <TurnedInNotOutlined />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemSecondaryAction>
                                        01
                                    </ListItemSecondaryAction>
                                </Grid>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}