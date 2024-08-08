import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';

const ProductCreate = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [published, setPublished] = useState<Dayjs | null>(null);
    const [price, setPrice] = useState<number | string>('');
    const [imageUrl, setImageUrl] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !category || !brand || !published || !price) {
            alert('Please fill out all required fields.');
            return;
        }

        // Format the date as YYYY-MM-DD
        const formattedPublishedDate = published.format('YYYY-MM-DD');

        const { data, error } = await supabase
            .from('product_list')
            .insert([
                { name, category, brand, published: formattedPublishedDate, price, image_url: imageUrl }
            ]);

        if (error) {
            console.error('Error inserting product:', error);
        } else {
            console.log('Product inserted successfully:', data);
            alert('Product created successfully!');
            setName('');
            setCategory('');
            setBrand('');
            setPublished(null);
            setPrice('');
            setImageUrl('');
        }

        router.push('/products/productList');
    };

    return (
        <Layout>
            <Container>
                <Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
                    Create Product
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Category"
                                variant="outlined"
                                fullWidth
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Brand"
                                variant="outlined"
                                fullWidth
                                required
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DatePicker
                                label="Published"
                                value={published}
                                onChange={(newValue) => setPublished(newValue)}
                                slotProps={{ textField: { fullWidth: true, required: true } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Price"
                                variant="outlined"
                                fullWidth
                                type="number"
                                required
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Image URL"
                                variant="outlined"
                                fullWidth
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Create Product
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Layout>
    );
};

export default ProductCreate;
