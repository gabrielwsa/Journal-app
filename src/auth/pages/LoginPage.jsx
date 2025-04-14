import { Grid, Typography, TextField, Button } from "@mui/material";
import { Google } from "@mui/icons-material";

export const LoginPage = () => {
    return (
        // SX É UM ESTILO MUI, POREM XS É PARA TAMANHO DE TELA
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>

            {/* EM MONITORES PEQUENOS VAI TER ATE 3 POSSICOES TEMOS MD XL E SM */}
            <Grid className="box-shadow" alignItems="center" size={{ xs: 12, sm: 4 }} sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>

                <form>
                    {/* sm define que a largura será de 450px quando a tela for do tamanho "small" ou maior, 
                    seguindo o sistema de breakpoints do Material UI. Em telas menores que "small", 
                    a largura será 100% por padrão */}
                    <Grid container direction="column" spacing={2} sx={{ sm: 450 }}>
                        <Grid size={{ xs: 12, sm: 12 }} sx={{ mt: 2 }}>
                            <TextField label="Email" type="email" placeholder="email@google.com" fullWidth />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12 }} sx={{ mt: 2 }}>
                            <TextField label="Password" type="password" placeholder="Password" fullWidth />
                        </Grid>
                    </Grid>
                </form>
            
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        {/* variant="contained" faz com que o botão tenha cor de fundo preenchida 
                        com a cor primária definida no tema, dando um aspecto elevado/sólido */}
                        <Button variant="contained" fullWidth>
                            Login
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        {/* variant="contained" faz com que o botão tenha cor de fundo preenchida 
                        com a cor primária definida no tema, dando um aspecto elevado/sólido */}
                        <Button variant="contained" fullWidth>
                            <Google />
                            <Typography sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}