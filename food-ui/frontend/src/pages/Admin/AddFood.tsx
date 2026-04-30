import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import './AdminPanel.css'
import { addFood } from '../../services/FoodService'
import { toast } from 'react-toastify'

const AddFood = () => {
  const [image, setImage] = React.useState<File | null>(null)

  const [data, setData] = React.useState({
    name: '',
    description: '',
    category: '',
    price: ''
  })
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setImage(file)
  }
  const onSubmithandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!image) {
      toast.error('Please select an image')
      return
    }
    

    try {
      addFood(data, image)
      toast.success('Food added successfully')
      setData({
          name: '',
          description: '',
        category: '',
          price: ''
        })
        setImage(null)
    } catch (error) {
      console.error('Error uploading food:', error)
      toast.error('Failed to add food. Please try again.')
    }

  }

  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-6">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmithandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload" className="img-fluid" style={{ width: '30px' }} /> Add Image
                </label>
                <input type="file" className="form-control" id="image" hidden onChange={handleImageChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name} />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows={5} required name='description' onChange={onChangeHandler} value={data.description}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select name="category" id="category" className="form-control" required onChange={onChangeHandler} value={data.category}>
                  <option value="">Select a category</option>
                  <option value="Biryani">Salad</option>
                  <option value="Cake">Rolls</option>
                  <option value="Burger">Deserts</option>
                  <option value="Salad">Sandwich</option>
                  <option value="Ice Cream">Cake</option>
                  <option value="Rolls">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" required name='price' onChange={onChangeHandler} value={data.price} />
              </div>
              <button type="submit" className="btn btn-primary">Add Food</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFood
