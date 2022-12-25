import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Stack } from "@mui/system";
import useBreakpoints from "hook/useBreakpoints";

export default function FilterSection() {
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
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                onClick={() => setOpen((prev) => !prev)}
              >
                <Typography>استان</Typography>
                <IconButton>
                  {open ? (
                    <KeyboardArrowUpRoundedIcon />
                  ) : (
                    <KeyboardArrowDownRoundedIcon />
                  )}
                </IconButton>
              </Stack>
              <Collapse in={open} collapsedSize={0}>
                <FormControlLabel
                  control={<Checkbox size="small" defaultChecked />}
                  label="مازندران"
                />
              </Collapse>
              <Divider />
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
                <Box>
                  <FormControlLabel
                    control={<Checkbox size="small" defaultChecked />}
                    label="شریعتی"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="امیرکبیر"
                  />
                </Box>
              </Collapse>
              <Button fullWidth size="small">
                جستجو
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
              <Typography>استان</Typography>
              <IconButton>
                {open ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )}
              </IconButton>
            </Stack>
            <Collapse in={open} collapsedSize={0}>
              <FormControlLabel
                control={<Checkbox size="small" defaultChecked />}
                label="مازندران"
              />
            </Collapse>
            <Divider />
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
              <Box>
                <FormControlLabel
                  control={<Checkbox size="small" defaultChecked />}
                  label="شریعتی"
                />
              </Box>
              <Box>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="امیرکبیر"
                />
              </Box>
            </Collapse>
            <Divider />
          </Box>
          <Button size="small">جستجو</Button>
        </Stack>
      )}
    </>
  );
}
