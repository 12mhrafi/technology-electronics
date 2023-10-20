import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import toast from 'react-hot-toast';
const AddProduct = () => {



  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const brandName = form.brandName.value;
    const description = form.description.value;

    const user = {productName,image,price,rating,brandName,description}

    fetch("https://technology-server-ten.vercel.app/users",{
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        toast("product added successfully")
      }
    })
    
  }



  return (
    <div className='container mx-auto px-4 '>

      <form onSubmit={handleAdd} className="flex max-w-md flex-col gap-4 md:w-[50%] m-auto">
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
            name = "productName"
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
            name = "image"
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
            name = "brandName"
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
            name = "price"
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
            name = "description"
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
            name = "rating"
          />
        </div>
    
      
        <Button type="submit">
          Add Product
        </Button>
      </form>

    </div>
  )
}

export default AddProduct