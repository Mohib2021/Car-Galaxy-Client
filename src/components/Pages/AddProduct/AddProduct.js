import React, { useRef } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

function AddProduct() {
	const nameRef = useRef();
	const imgRef = useRef();
	const descRef = useRef();
	const priceRef = useRef();
	const handleAddProduct = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const img = imgRef.current.value;
		const desc = descRef.current.value;
		const price = priceRef.current.value;
		const newProduct = {
			name,
			price,
			img,
			desc,
		};
		fetch("https://powerful-wave-61022.herokuapp.com/cars", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				e.target.reset();
			});
	};
	return (
		<Container>
			<Row className="align-items-center">
				<Col md={6} sm={12}>
					<div>
						<img
							src="https://image.freepik.com/free-vector/online-ordering-purchase-making-buying-goods-internet-store-website-female-customer-with-tablet-adding-product-cart-cartoon-character_335657-2561.jpg"
							alt="add-product-img"
							className="img-fluid"
						/>
					</div>
				</Col>
				<Col md={6} sm={12}>
					<div>
						<Form onSubmit={handleAddProduct}>
							<h3 className="text-center">Add a Product</h3>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Product Name</Form.Label>
								<Form.Control
									ref={nameRef}
									type="text"
									placeholder="Product Name"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Product Price</Form.Label>
								<Form.Control ref={priceRef} type="text" placeholder="Price" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Image Link</Form.Label>
								<Form.Control
									ref={imgRef}
									type="text"
									placeholder="Image Link"
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Label>Product Description</Form.Label>
								<Form.Control
									ref={descRef}
									as="textarea"
									rows={5}
									placeholder="Description"
								/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Add Product
							</Button>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default AddProduct;
