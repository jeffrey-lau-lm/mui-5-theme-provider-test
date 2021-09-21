import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme) =>{
  console.log("theme passed here",theme)
  return createStyles({
    root: {
      backgroundColor: theme.palette.red,
    },
  })
}
);

const theme = createTheme();

export default function MyComponent() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} />
    </ThemeProvider>
  );
}