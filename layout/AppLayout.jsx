import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import navMenu from "constant/navMenu";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Stack } from "@mui/system";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Badge, Menu, MenuItem, Paper, Typography } from "@mui/material";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Image from "next/image";
import { useRouter } from "next/router";
//
const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }) {
  const [open, setOpen] = React.useState(false);
  //
  const router = useRouter();
  //
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openUserMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          bgcolor: "white",
          boxShadow: "none",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              display: open ? "none" : "block",
            }}
          >
            <Image
              src="/img/logo.png"
              width={34}
              height={34}
              objectFit="cover"
              alt="logo"
            />
          </IconButton>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
            px={open ? 0 : 2}
          >
            <Box color="black">
              <Typography fontSize="20px">
                {
                  navMenu.find((menu) => menu.pathname === router.pathname)
                    ?.label
                }
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <Badge overlap="circular" variant="dot" color="error">
                  <NotificationsNoneRoundedIcon sx={{ fontSize: 28 }} />
                </Badge>
              </IconButton>

              <IconButton onClick={handleClick}>
                <AccountCircleOutlinedIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={openUserMenu}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: "150px",
                },
              }}
            >
              <MenuItem>
                <PermIdentityRoundedIcon size="small" sx={{ mr: 1 }} />
                <Typography>پروفایل</Typography>
              </MenuItem>
              <MenuItem>
                <ArticleOutlinedIcon size="small" sx={{ mr: 1 }} />
                <Typography>آگهی های من</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => router.push("/login")}>
                <ExitToAppRoundedIcon size="small" sx={{ mr: 1 }} />
                <Typography>خروج</Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: "center" }}>
          <IconButton onClick={handleDrawerClose}>
            <Image
              src="/img/logo.png"
              width={50}
              height={50}
              objectFit="cover"
              alt="logo"
            />
          </IconButton>
        </DrawerHeader>
        <List>
          {navMenu.map((menu) => {
            const Icon = menu.icon;
            return (
              <Link key={menu.key} href={menu.pathname} passHref>
                <ListItem component="a">
                  <Icon fontSize="medium" sx={{ mx: 1 }} />
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    {menu.label}
                  </ListItemText>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
