import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { Formik } from "formik";

import { useDispatch } from "react-redux";
import { addCredits } from "redux/actions/credits";
import CreditsField from "pages/credits/CreditsForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    minHeight: "100vh",
  },
  btnLogin: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
  },
  checkboxWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: theme.spacing(2),
  },
}));

interface IInitialValues {
  crypto: string;
  paypal: string;
  stripe: string;
}

const Credits: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialValues: IInitialValues = {
    crypto: "",
    paypal: "",
    stripe: "",
  };

  const onHandleSubmit = (values: IInitialValues, { setSubmitting }: any) => {
    dispatch(addCredits(values, setSubmitting))
  };

  React.useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <Grid
      container
      className={classes.root}
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onHandleSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
          <form noValidate onSubmit={handleSubmit}>
            <CreditsField />
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              className={classes.btnLogin}
              disabled={isSubmitting}
            >
              {isSubmitting ? <CircularProgress size='1rem' /> : "Add"}
            </Button>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default Credits;
