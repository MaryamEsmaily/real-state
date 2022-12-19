import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

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
  {
    pathname: "/app/chart",
    label: "نمودار قیمت",
    icon: InsertChartOutlinedIcon,
    key: "chart",
  },
];

export default navMenu;
