import { InputAdornment, OutlinedInput } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useState } from "react";
const PxToRem = () => {
  const [px, setPx] = useState("");
  const [rem, setRem] = useState("");
  const pxChangeHandler = (e) => {
    setRem(e.target.value / 16);
  };
  const remChangeHandler = (e) => {
    setPx(e.target.value * 16);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Stack flexDirection="column" justifyContent="space-evenly" sx={{ height: "100vh" }} alignItems="center">
          <Stack flexDirection="row" gap={8}>
            <OutlinedInput
              type="number"
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">PX</InputAdornment>}
              onChange={pxChangeHandler}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{ style: { fontSize: 18 } }}
            />
            <OutlinedInput
              readOnly
              value={rem === 0 ? "" : rem}
              type="number"
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">REM</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{ style: { fontSize: 18 } }}
            />
          </Stack>
          <Stack flexDirection="row" gap={8}>
            <OutlinedInput
              type="number"
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">REM</InputAdornment>}
              onChange={remChangeHandler}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{ style: { fontSize: 18 } }}
            />
            <OutlinedInput
              readOnly
              value={px === 0 ? "" : px}
              type="number"
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">PX</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{ style: { fontSize: 18 } }}
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default PxToRem;
