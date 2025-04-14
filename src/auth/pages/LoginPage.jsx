import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
    return (
      <AuthLayout title="Login">
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

        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Link component={RouterLink} to="/auth/register">
            Criar uma cuenta
          </Link>
        </Grid>
      </AuthLayout>
    );
}