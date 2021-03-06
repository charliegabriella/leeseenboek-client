import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const style = {
  Paper: { padding: 50, marginTop: 25, marginBottom: 25 },
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));

export default function BookSearchForm(props) {
  const [keyword, set_keyword] = useState(""); //my first hook!

  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Paper style={style.Paper}>
        <Typography variant="h3" align="center">
          Books
        </Typography>
        <form
          className={classes.root}
          onSubmit={(e) => props.handleSearch(keyword)}
        >
          <Grid item className={classes.root}>
            <TextField
              required
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="search"
              placeholder="Search..."
              onChange={(e) => set_keyword(e.target.value)}
              value={keyword}
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            search
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
