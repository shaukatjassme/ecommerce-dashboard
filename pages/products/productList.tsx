import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import Layout from '../../components/Layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, TextField, InputAdornment, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { supabase } from '../../lib/supabaseClient';
import Image from 'next/image';

const ProductList = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const router = useRouter(); // Initialize useRouter

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
        router.push('/products/productCreate'); // Redirect to ProductCreate page
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
                                    <IconButton color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="secondary">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
};

export default ProductList;
