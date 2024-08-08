import React from 'react';
import { AppBar, Toolbar, Typography,ListItemSecondaryAction, Container, CssBaseline, Drawer, List, ListItem, ListItemText, IconButton, Divider, TextField, InputAdornment, Avatar, Collapse, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductsIcon from '@mui/icons-material/Store';
import ProfileIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CategoryIcon from '@mui/icons-material/Category';
import Logo from '../public/images/logo.png'; // Update with the path to your logo image
import ProfileImg from '../public/images/jassme-profile.jpg'; // Update with the path to your profile image
import Link from 'next/link';

const drawerWidth = 240;

const Layout = ({ children }: { children: React.ReactNode }) => {
    const logoSrc = Logo.src;
    const profileImgSrc = ProfileImg.src;
    const [open, setOpen] = React.useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const [homeOpen, setHomeOpen] = React.useState(false);
    const [deshOpen, setDeshOpen] = React.useState(false);
    const [proOpen, setProOpen] = React.useState(false);
    const [cateOpen, setCateOpen] = React.useState(false);

    const handleHomeClick = () => {
        setHomeOpen(!homeOpen);
    };
    const handleDeshboardClick = () => {
        setDeshOpen(!deshOpen);
    };
    const handleProductsClick = () => {
        setProOpen(!proOpen);
    };

    const handleCategoryClick = () => {
        setCateOpen(!cateOpen);
    };
    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant={open ? 'permanent' : 'temporary'}
                anchor="left"
                open={open}
                onClose={handleDrawerToggle}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#f0e8d0',
                    },
                }}
            >
                <div style={{ padding: 16, textAlign: 'center' }}>
                    <Link href="/" passHref>
                        <img src={logoSrc} alt="Logo" style={{ width: '100px', marginBottom: 16 }} />
                    </Link>
                </div>
                <Divider />
                <List>
                <ListItem button>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        
                            <ListItemText primary="Deshboard" />
                       
                    </ListItem>
                    <ListItem button onClick={handleHomeClick}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <Link href="/" passHref>
                            <ListItemText primary="Home" />
                        </Link>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={handleHomeClick}>
                                {homeOpen ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Collapse in={homeOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/home/page1" passHref>
                                    <ListItemText primary="Page1" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/home/page2" passHref>
                                    <ListItemText primary="Page2" />
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>

                 

                    <ListItem button onClick={handleProductsClick}>
                        <ListItemIcon><ProductsIcon /></ListItemIcon>
                        <Link href="/products" passHref>
                            <ListItemText primary="Products" />
                        </Link>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={handleProductsClick}>
                                {proOpen ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Collapse in={proOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/products/productList" passHref>
                                    <ListItemText primary="Product List" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/products/productCreate" passHref>
                                    <ListItemText primary="Create Product" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/products/productReview" passHref>
                                    <ListItemText primary="Product Reviews" />
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleDeshboardClick}>
                        <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                        <Link href="/brands" passHref>
                            <ListItemText primary="Brands" />
                        </Link>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={handleDeshboardClick}>
                                {deshOpen ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Collapse in={deshOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/brands/page1" passHref>
                                    <ListItemText primary="Page1" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/brands/page2" passHref>
                                    <ListItemText primary="Page2" />
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleCategoryClick}>
                        <ListItemIcon><CategoryIcon /></ListItemIcon>
                        <Link href="/category" passHref>
                            <ListItemText primary="Category" />
                        </Link>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={handleCategoryClick}>
                                {cateOpen ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Collapse in={cateOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/category/page1" passHref>
                                    <ListItemText primary="Page1" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px' }} />
                                </ListItemIcon>
                                <Link href="/home/subpage2" passHref>
                                    <ListItemText primary="Page2" />
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button>
                        <ListItemIcon><ProfileIcon /></ListItemIcon>
                        <Link href="/profile" passHref>
                            <ListItemText primary="Profile" />
                        </Link>
                    </ListItem>
                  
                </List>
            </Drawer>
            <div style={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                            Dashboard Header
                        </Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search..."
                            sx={{ mr: 2 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <IconButton color="inherit" sx={{ mr: 2 }}>
                            <GitHubIcon />
                        </IconButton>
                        <Avatar alt="Profile Image" src={profileImgSrc} />
                    </Toolbar>
                </AppBar>
                <main style={{ flexGrow: 1, padding: 24 }}>
                    <Toolbar />
                    <Container>
                        {children}
                    </Container>
                </main>
            </div>
        </div>
    );
};

export default Layout;
