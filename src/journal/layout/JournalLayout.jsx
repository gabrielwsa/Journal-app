import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar";

const drawerWidth = 240;

export const JournalLayout = (props) => {
    return (
        <Box sx={{ display: 'flex' }}>
            
            {/* NAVBAR */}
            <NavBar drawerWidth={ drawerWidth } />

            {/* SIDEBAR */}

            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                { props.children }
            </Box>
        </Box>
    )
}