import { Grid, Typography } from "@mui/material";

export const AuthLayout = (props) => {
    return (
        // SX É UM ESTILO MUI, POREM XS É PARA TAMANHO DE TELA
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>

            {/* TEMOS ALGUNS TAMANHOS DE TELA, EX: XS, SM, MD, LG, XL */}
            <Grid className="box-shadow" alignItems="center" size={{ xl: 4, md: 5, xs: 12 }} sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>{props.title}</Typography>
            
                {props.children}
            </Grid>
        </Grid>
    )
}