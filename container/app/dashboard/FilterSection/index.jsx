import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import {
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Stack } from "@mui/system";
import useBreakpoints from "hook/useBreakpoints";

export default function FilterSection({ setArea }) {
  //
  const [open, setOpen] = React.useState(false);
  //
  const { lg } = useBreakpoints();
  //
  return (
    <>
      {!lg ? (
        <Stack
          height={{ lg: "calc(100vh - 100px)" }}
          justifyContent="space-between"
          p={1}
          borderRight="1px solid"
          borderColor="primary.light"
        >
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              onClick={() => setOpen((prev) => !prev)}
            >
              <Typography fontSize="20px">فیلتر</Typography>
              <IconButton>
                {open ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )}
              </IconButton>
            </Stack>
            <Collapse in={open} collapsedSize={0}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(e) => setArea(e.target.value)}
              >
                <FormControlLabel
                  value="shariati"
                  control={<Radio size="small" />}
                  label="شریعتی"
                />
                <FormControlLabel
                  value="amirkabir"
                  control={<Radio size="small" />}
                  label="امیرکبیر"
                />
                <FormControlLabel
                  value="modares"
                  control={<Radio size="small" />}
                  label="مدرس"
                />
                <FormControlLabel
                  value="moalem"
                  control={<Radio size="small" />}
                  label="معلم"
                />
              </RadioGroup>
              <Button
                fullWidth
                size="small"
                onClick={() => setArea("")}
                variant="outlined"
              >
                حذف فیلتر
              </Button>
            </Collapse>
          </Box>
          <Divider sx={{ mt: 1 }} />
        </Stack>
      ) : (
        <Stack
          height={{ lg: "calc(100vh - 100px)" }}
          justifyContent="space-between"
          p={1}
          borderRight="1px solid"
          borderColor="primary.light"
        >
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              onClick={() => setOpen((prev) => !prev)}
            >
              <Typography>منطقه</Typography>
              <IconButton>
                {open ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )}
              </IconButton>
            </Stack>
            <Collapse in={open} collapsedSize={0}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(e) => setArea(e.target.value)}
              >
                <FormControlLabel
                  value="shariati"
                  control={<Radio size="small" />}
                  label="شریعتی"
                />
                <FormControlLabel
                  value="amirkabir"
                  control={<Radio size="small" />}
                  label="امیرکبیر"
                />
                <FormControlLabel
                  value="modares"
                  control={<Radio size="small" />}
                  label="مدرس"
                />
                <FormControlLabel
                  value="moalem"
                  control={<Radio size="small" />}
                  label="معلم"
                />
              </RadioGroup>
            </Collapse>
            <Divider />
          </Box>
          <Button size="small" onClick={() => setArea("")} variant="outlined">
            حذف فیلتر
          </Button>
        </Stack>
      )}
    </>
  );
}
