const { useTheme, useMediaQuery } = require("@mui/material");

function useBreakpoints() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return keys.reduce((obj, key) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    obj[key] = useMediaQuery(theme.breakpoints.up(key));
    return obj;
  }, {});
}

export default useBreakpoints;
