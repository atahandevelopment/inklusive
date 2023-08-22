import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import CategoryIcon from '@mui/icons-material/Category';
import ListItemIcon from '@mui/material/ListItemIcon';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import BookIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useRouter } from 'next/router';

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const router = useRouter()

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box className="h-screen" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => { router.push('/admin') || handleListItemClick(event, 0)}}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) =>{router.push('/admin/categories') || handleListItemClick(event, 1)}}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Kategori Yönetimi" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) =>{router.push('/admin/banners') || handleListItemClick(event, 2)}}
        >
          <ListItemIcon>
            <ViewCarouselIcon />
          </ListItemIcon>
          <ListItemText primary="Banner Yönetimi" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) =>{router.push('/admin/users') || handleListItemClick(event, 3)}}
        >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Kullanıcılar" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) =>{router.push('/admin/banners') || handleListItemClick(event,4)}}
        >
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Bloglar" />
        </ListItemButton>
        <Divider />
      </List>
   
    </Box>
  );
}