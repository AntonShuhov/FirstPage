import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from "../Main/header/Header";
import "./AdminPanel.css"

function AdminPanel() {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({ name: '', description: '', price: '', features: [], image: null });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/products');
        setProducts(res.data);
    };
    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('features', JSON.stringify(product.features.split(',')));
        if (product.image) formData.append('image', product.image);

        await console.log(formData);

        await axios.post('http://localhost:5000/products', formData);
        await fetchProducts();
    };


    return (
        <>
            <Header/>
            <div className="adminPanel">
                <div className='container'>
                    <div className="adminPanel__content">
                        <h1 className="adminPanel__title">Admin Panel</h1>
                        <form onSubmit={handleSubmit} className="adminPanel__form">
                            <input className="adminPanel__form-item" type="text" name="name" value={product.name} onChange={handleInputChange} placeholder="Name" />
                            <input className="adminPanel__form-item" type="text" name="description" value={product.description} onChange={handleInputChange} placeholder="Description" />
                            <input className="adminPanel__form-item" type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Price" />
                            <input className="adminPanel__form-item" type="text" name="features" value={product.features} onChange={handleInputChange} placeholder="Features (comma separated)" />
                            <input className="adminPanel__form-item" type="file" onChange={handleFileChange} />
                            <button className="adminPanel__form-item" type="submit">Add Product</button>
                        </form>
                        <ul>
                            {products.map(product => (
                                <li key={product._id}>
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                    <ul>
                                        {product.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                    {product.image && <img src={`http://localhost:5000/${product.image}`} alt={product.name} />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
export default AdminPanel;