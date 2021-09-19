import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSwr from "swr";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: grey[50],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});
type Workout = {
  date: Date;
  steps: Array<Step>;
};

type Step = {
  order: string;
  activity: string;
  reps: number;
  sets: number;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSwr("/api/workouts", fetcher);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Collective Workouts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="sticky"  elevation={1}>
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Collective Workouts
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          {data?.map((workout: Workout, index: number) => (
            <Grid key={index} item xs={12}>
              <Card variant="outlined" elevation={3}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {new Date(workout.date).toDateString()}
                  </Typography>
                  <Typography variant="h5" component="h2"></Typography>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Order</TableCell>
                          <TableCell>Activity</TableCell>
                          <TableCell>Reps</TableCell>
                          <TableCell>Sets</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {workout.steps.map((row) => (
                          <TableRow key={row.activity}>
                            <TableCell component="th" scope="row">
                              {row.order}
                            </TableCell>
                            <TableCell >{row.activity}</TableCell>
                            <TableCell >{row.reps}</TableCell>
                            <TableCell >{row.sets}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
