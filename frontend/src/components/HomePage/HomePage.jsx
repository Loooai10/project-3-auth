import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// - Home Page:

function HomePage() {
  //GOAL - display all tweets below
  const [productsList, setProductsList] = useState([])
  useEffect(() => {
    // STEP 1: API call to our backend (
      // useEffect
      // -> Hook, run immediately when the component renders
      // axios.get(.. ..localhost:4000/tweets) -> returns parsed json data
      // STEP 2: Take the tweet list data and store it in our state
      // Take response -> setState(response)
        getAllProducts()
    }, [])

    const getAllProducts = () => {
      axios.get('http://localhost:4000/products')
      .then(res => setProductsList(res.data))
      .catch(err => console.log(err))
    }
    
    // STEP 3: Display data in HTML using tweets.map .. .. 
   
   
   
   
    // - Form to create tweet -> onChange, onSubmit, store form data in state, API call
    
    
    
    const [formData, setFormData] = useState({
      name: '',
      content: ''
      }
    )
    const handleChange = (e) => {
      //Store the user input into state
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
    const handleSubmit = (e) => {
      // axios.post(Create a tweet)
      axios.post('http://localhost:4000/products', formData,
      {
        header:{
          "Authorization": "Bearer"+ localStorage.getItem('token')
        }
      })
      .then(res => console.log(res))
      .then(() => getAllProducts())
      .catch(err => console.log(err))
    }
    return (
      <div>
    BootBear
    {/* Form - 1 Input -> content */}
      <form onSubmit={handleSubmit}>
        <label>Whats happening?</label><br></br>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br></br>
        <textarea 
        rows="4" 
        cols="45" 
        placeholder="What's Happening?"
        name="content"
        value={formData.content}
        onChange={handleChange}
        />
        <button type="submit">Product!</button>
      </form>




    {/* tweets[].map( .. .. .) */}
    {productsList.length ? productsList.map(product => 
      <div key={product._id}>
        <Link to={`/edit/${product._id}`}>{product._id}</Link>
        <p>Name: {product.name}</p>
        <p>{product.content}</p>
      </div>
    )
    : null}
    </div>
  )
}
export default HomePage
