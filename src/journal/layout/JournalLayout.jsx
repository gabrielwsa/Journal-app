import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const drawerWidth = 240;

export const JournalLayout = (props) => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            
            {/* NAVBAR */}
            <NavBar drawerWidth={ drawerWidth } />

            {/* SIDEBAR */}
            <SideBar drawerWidth={ drawerWidth } />

            {/* <Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, mt: '64px' }}>
                { props.children }
            </Box> */}
            <Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`}, mt: '64px' }}>
                { props.children }
            </Box>
        </Box>
    )
}