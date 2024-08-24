import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    Box,
    Button,
    TextField,
    Typography,
    CircularProgress,
    Paper
} from '@mui/material';
import { supabase } from '../../../lib/supabaseClient';

const EditProduct = () => {
    const router = useRouter();
    const { id } = router.query; // Get the product ID from the URL
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [brand, setBrand] = useState<string>('');
    const [published, setPublished] = useState<string>('');
    const [price, setPrice] = useState<number | string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const { data, error } = await supabase
                    .from('product_list')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) {
                    console.error('Error fetching product:', error);
                    setError('Failed to fetch product');
                } else {
                    setProduct(data);
                    setName(data.name);
                    setCategory(data.category);
                    setBrand(data.brand);
                    setPublished(data.published);
                    setPrice(data.price);
                }
                setLoading(false);
            };

            fetchProduct();
        }
    }, [id]);

    const handleUpdate = async () => {
        const { error } = await supabase
            .from('product_list')
            .update({ name, category, brand, published, price })
            .eq('id', id);

        if (error) {
            console.error('Error updating product:', error);
            setError('Failed to update product');
        } else {
            router.push('/products/productList'); // Redirect to the product list page after update
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Edit Product
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Published"
                    value={published}
                    onChange={(e) => setPublished(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpdate}
                    sx={{ mt: 2 }}
                >
                    Save Changes
                </Button>
            </Box>
        </Paper>
    );
};

export default EditProduct;
