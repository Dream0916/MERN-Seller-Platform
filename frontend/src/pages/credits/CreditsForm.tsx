import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormLabel, TextField } from "@material-ui/core";
import { useFormikContext } from "formik";

const useStyles = makeStyles((theme) => ({
  formLabel: {
    fontWeight: 600,
    marginBottom: theme.spacing(1.5),
  },
  formControl: {
    margin: theme.spacing(2, 0),
  },
}));

interface IValues {
  crypto: string;
  paypal: string;
  stripe: string;
}

const CreditsField: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<IValues>();
  return (
    <>
      <FormControl fullWidth className={classes.formControl}>
        <FormLabel classes={{ root: classes.formLabel }}>Crypto Wallet Address</FormLabel>
        <TextField
          fullWidth
          name='crypto'
          value={values.crypto}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter Crypto Wallet Address'
          helperText={touched.crypto ? errors.crypto : ""}
          error={touched.crypto ? Boolean(errors.crypto) : false}
        />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
        <FormLabel classes={{ root: classes.formLabel }}>Paypal Account</FormLabel>
        <TextField
          fullWidth
          name='paypal'
          value={values.paypal}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter Paypal Account'
          helperText={touched.paypal ? errors.paypal : ""}
          error={touched.paypal ? Boolean(errors.paypal) : false}
        />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
        <FormLabel classes={{ root: classes.formLabel }}>Stripe Key</FormLabel>
        <TextField
          fullWidth
          name='stripe'
          value={values.stripe}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter Stripe Key'
          helperText={touched.stripe ? errors.stripe : ""}
          error={touched.stripe ? Boolean(errors.stripe) : false}
        />
      </FormControl>
    </>
  );
};

export default CreditsField;
