import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

function SignupForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");

  const [errors, setErrors] = React.useState({});
  const [openSuccess, setOpenSuccess] = React.useState(false);

  React.useEffect(() => {
    console.log({ email });
  }, [email]);

  React.useEffect(() => {
    console.log({ name });
  }, [name]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.preferredName = "Preferred name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim()))
      e.email = "Enter a valid email address";
    if (!city.trim()) e.city = "City is required";
    if (!postalCode.trim()) e.postalCode = "Postal code is required";
    else if (!/^[A-Za-z0-9\- ]{2,10}$/.test(postalCode.trim()))
      e.postalCode = "Enter a valid postal code";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const payload = { preferredName: name, email, city, postalCode };
    // Replace with API call as needed
    console.log("Signup payload:", payload);
    setOpenSuccess(true);
    // clear form
    setName("");
    setEmail("");
    setCity("");
    setPostalCode("");
    setErrors({});
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 640,
        margin: "32px auto",
        px: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Create an account
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Preferred Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                error={!!errors.preferredName}
                helperText={errors.preferredName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
                required
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                fullWidth
                required
                error={!!errors.postalCode}
                helperText={errors.postalCode}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button type="submit" variant="contained" fullWidth>
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Snackbar
        open={openSuccess}
        autoHideDuration={4000}
        onClose={() => setOpenSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Account created (demo) — check console for payload.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default SignupForm;
