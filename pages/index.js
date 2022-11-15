import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={10} alignItems="center" mt={5}>
        <Box>
          <Typography fontSize="58px" fontWeight="bold">
            یگازی
          </Typography>
          <Typography fontSize="30px" fontWeight="bold">
            سیستم خریداری و پیشبینی املاک
          </Typography>
        </Box>
        <Button fullWidth onClick={() => push("/login")}>
          ورود
        </Button>
      </Stack>
    </Box>
  );
}
