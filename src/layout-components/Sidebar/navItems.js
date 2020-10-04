import BarChartIcon from '@material-ui/icons/BarChart'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import ChatIcon from '@material-ui/icons/ChatOutlined'
import CodeIcon from '@material-ui/icons/Code'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
import FolderIcon from '@material-ui/icons/FolderOutlined'
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone'
import GradeTwoTone from '@material-ui/icons/GradeTwoTone'
import ListAltIcon from '@material-ui/icons/ListAlt'
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined'
import MailIcon from '@material-ui/icons/MailOutlined'
import PresentToAllIcon from '@material-ui/icons/PresentToAll'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import PersonIcon from '@material-ui/icons/PersonOutlined'
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import ViewModuleIcon from '@material-ui/icons/ViewModule'

var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
}

const in_admin_dashboard = () => {
  let match_re = /DashboardAdmin/i
  return match_re.exec(window.location.pathname)
}

const sidebar_content = JSON.parse(
  in_admin_dashboard()
    ? `[
     {
       "label": "Dashboards",
       "icon": "DashboardTwoToneIcon",
       "content": [
         {
           "label": "Admin Dashboard",
           "description": "Minion Administrative Dashboard",
           "to": "/DashboardAdmin"
         },
         {
           "label": "User Dashboard",
           "description": "Minion User Dashboard",
           "to": "/DashboardUser"
         }
       ]
     }
  ]`
    : `[
     {
       "label": "Dashboards",
       "icon": "DashboardTwoToneIcon",
       "content": [
         {
           "label": "User Dashboard",
           "description": "Minion User Dashboard",
           "to": "/DashboardUser"
         }
       ]
     }
  ]`,
  (key, value) => {
    if (key === 'icon') {
      return iconsMap[value]
    } else {
      return value
    }
  }
)

export default [
  {
    label: 'Options',
    content: sidebar_content
  }
]