import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    ListItemSecondaryAction,
    Container,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Divider,
    TextField,
    InputAdornment,
    Avatar,
    Collapse,
    ListItemIcon,
} from '@mui/material';
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
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/logo.png';
import ProfileImg from '../public/images/jassme-profile.jpg';

const drawerWidth = 240;

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(true);
    const [homeOpen, setHomeOpen] = React.useState(false);
    const [deshOpen, setDeshOpen] = React.useState(false);
    const [proOpen, setProOpen] = React.useState(false);
    const [cateOpen, setCateOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleHomeClick = () => setHomeOpen(!homeOpen);
    const handleDeshboardClick = () => setDeshOpen(!deshOpen);
    const handleProductsClick = () => setProOpen(!proOpen);
    const handleCategoryClick = () => setCateOpen(!cateOpen);

    const ProImg=ProfileImg.src;

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
                        <Image src={Logo} alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={handleHomeClick}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
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
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/home/page1" passHref>
                                    <ListItemText primary="Page1" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/home/page2" passHref>
                                    <ListItemText primary="Page2" />
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleProductsClick}>
                        <ListItemIcon>
                            <ProductsIcon />
                        </ListItemIcon>
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
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/products/productList" passHref>
                                    <ListItemText primary="Product List" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/products/productCreate" passHref>
                                    <ListItemText primary="Create Product" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/products/productReview" passHref>
                                    <ListItemText primary="Product Reviews" />
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleDeshboardClick}>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
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
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/brands/page1" passHref>
                                    <ListItemText primary="Page1" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/brands/page2" passHref>
                                    <ListItemText primary="Page2" />
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleCategoryClick}>
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
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
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/category/page1" passHref>
                                    <ListItemText primary="Page1" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <div
                                        style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            backgroundColor: '#000',
                                            marginRight: '8px',
                                        }}
                                    />
                                </ListItemIcon>
                                <Link href="/category/page2" passHref>
                                    <ListItemText primary="Page2" />
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <Link href="/github" passHref>
                            <ListItemText primary="Github" />
                        </Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Avatar
                            alt="User Avatar"
                            src={ProImg}
                            sx={{ marginRight: 2 }}
                        />
                        <Link href="/profile" passHref>
                            <ListItemText primary="Shaukat Jassme" secondary="jassme786@gmail.com" />
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            <main style={{ flexGrow: 1, padding: 0, backgroundColor: '#f5f5f5' }}>
                <AppBar position="static" style={{ backgroundColor: '#fdc807' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Dashboard Layout
                        </Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            style={{ marginRight: 16 }}
                        />
                        <Link href="/cart" passHref>
                            <IconButton color="inherit">
                                <ShoppingCartIcon />
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    );
};

export default Layout;
