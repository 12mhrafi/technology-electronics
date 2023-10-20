import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import toast from 'react-hot-toast';


const UpdateProuducts = () => {

  const [updated, setUpdated] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const { _id, productName, image, price, rating, brandName, description } = updated
  const { id } = useParams();
  const products = useLoaderData();

  useEffect(() => {
    const updateUser = products.find(user => user._id === id);
    setUpdated(updateUser)


  }, [])


  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const brandName = form.brandName.value;
    const description = form.description.value;

    const updateProduct = { productName, image, price, rating, brandName, description }

    fetch(`https://technology-server-ten.vercel.app/users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateProduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast("updated successfully");

          navigate(location?.state && location.state);

        }
      })

  }



  return (
    <div className='container mx-auto '>

      <form onSubmit={handleUpdate} className="flex max-w-md flex-col gap-4 md:w-[50%] m-auto">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Product Name"
            />
          </div>
          <TextInput

            placeholder="product name"
            required
            type="text"
            name="productName"
            defaultValue={productName}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="image"
              value="Image"
            />
          </div>
          <TextInput

            placeholder="img URL"
            required
            type="text"
            name="image"
            defaultValue={image}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor=" brand name"
              value="Brand Name"
            />
          </div>
          <TextInput

            placeholder="Brand Name"
            required
            type="text"
            name="brandName"
            defaultValue={brandName}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="price"
              value="Price"
            />
          </div>
          <TextInput

            placeholder="Price"
            required
            type="number"
            name="price"
            defaultValue={price}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="Description"
              value="Description"
            />
          </div>
          <TextInput

            placeholder="Description"
            required
            type="text"
            name="description"
            defaultValue={description}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="rating"
              value="Rating"
            />
          </div>
          <TextInput

            placeholder="rating"
            required
            type="number"
            name="rating"
            defaultValue={rating}
          />
        </div>


        <Button type="submit">
          Update
        </Button>
      </form>

    </div>
  )
}

export default UpdateProuducts