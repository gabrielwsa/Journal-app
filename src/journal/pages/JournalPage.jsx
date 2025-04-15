import { Typography } from "@mui/material";
// import EmailIcon from '@mui/icons-material/Email';
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* COM ISSO JA PODEMOS USAR NOSSO MATERIAL UI E SEUS COMPONENTES COMO O TYPOGRAPHY */}
            {/* <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, fuga! Autem consequuntur tempora ea. Velit beatae magni ipsa repellendus, veritatis a id provident iste debitis saepe adipisci eligendi? Repellat, molestiae.</Typography> */}
            <NothingSelectedView />
            {/* <EmailIcon /> */}
        </JournalLayout>
    )
}