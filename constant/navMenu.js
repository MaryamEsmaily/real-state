import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";

const navMenu = [
  {
    pathname: "/app/dashboard",
    label: "داشبورد",
    icon: DashboardOutlinedIcon,
    key: "dashboard",
  },
  {
    pathname: "/app/addNewAd",
    label: "ثبت آگهی",
    icon: LibraryAddOutlinedIcon,
    key: "newAdd",
  },
];

export default navMenu;
