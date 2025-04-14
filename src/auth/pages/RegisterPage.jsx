import { Grid, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
    return (
        <AuthLayout title="Registrar">
            <form>
                <Grid container spacing={2} direction="column">
                    <Grid size={{ xs: 12 }}>
                        <TextField label="Nombre Completo" type="text" placeholder="Nombre Completo" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField label="Correo" type="email" placeholder="Correo" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField label="Confirmar contraseña" type="password" placeholder="Confirmar contraseña" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Button variant="contained" fullWidth>
                            Registrar
                        </Button>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} to="/auth/login">
                            Ya tienes una cuenta?
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}