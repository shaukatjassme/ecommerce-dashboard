import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    IconButton,
    TextField,
    InputAdornment,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { supabase } from '../../lib/supabaseClient';
import Image from 'next/image';

const ProductList = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from('product_list')
                .select('*');

            if (error) {
                console.error('Error fetching products:', error);
            } else {
                setProducts(data || []);
            }
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddProductClick = () => {
        router.push('/products/productCreate');
    };

    const handleEditClick = (productId: number) => {
        router.push(`/products/${productId}/edit`); // Redirect to the edit page
    };

    const handleDeleteClick = (productId: number) => {
        setSelectedProductId(productId);
        setOpenDeleteDialog(true);
    };

    const handleDeleteConfirm = async () => {
        if (selectedProductId !== null) {
            const { error } = await supabase
                .from('product_list')
                .delete()
                .eq('id', selectedProductId);

            if (error) {
                console.error('Error deleting product:', error);
            } else {
                setProducts(products.filter((product) => product.id !== selectedProductId));
                setOpenDeleteDialog(false);
                setSelectedProductId(null);
            }
        }
    };

    const handleDeleteCancel = () => {
        setOpenDeleteDialog(false);
        setSelectedProductId(null);
    };

    return (
        <Layout>
            <Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
                Product List
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddProductClick}
                >
                    Add Product
                </Button>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search Products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    sx={{ width: '100%', maxWidth: 400 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Published</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts.map((product: any) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Image
                                            src={product.image_url}
                                            alt={product.name}
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: '50%', marginRight: 8 }}
                                        />
                                        {product.name}
                                    </Box>
                                </TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.brand}</TableCell>
                                <TableCell>{product.published}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>
                                    <IconButton color="primary" onClick={() => handleEditClick(product.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => handleDeleteClick(product.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={openDeleteDialog}
                onClose={handleDeleteCancel}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">Delete Product</DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-dialog-description">
                        Are you sure you want to delete this product?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteConfirm} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Layout>
    );
};

export default ProductList;
