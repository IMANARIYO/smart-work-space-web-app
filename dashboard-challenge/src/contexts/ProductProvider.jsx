import { useState } from 'react'
import { ProductContext } from './ProductContext'

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'MacBook Pro 16"',
      category: 'Laptops',
      status: 'In Stock',
      dateAdded: 'Dec 10, 2024'
    },
    {
      id: 2,
      name: 'iPad Air',
      category: 'Tablets',
      status: 'In Stock',
      dateAdded: 'Dec 7, 2024'
    },
    {
      id: 3,
      name: 'Dell XPS 13',
      category: 'Laptops',
      status: 'In Stock',
      dateAdded: 'Dec 9, 2024'
    },
    {
      id: 4,
      name: 'iPhone 15 Pro',
      category: 'Mobile',
      status: 'Low Stock',
      dateAdded: 'Dec 8, 2024'
    },
    {
      id: 5,
      name: 'Surface Pro 9',
      category: 'Tablets',
      status: 'Out of Stock',
      dateAdded: 'Dec 6, 2024'
    }
  ])

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'Product added to inventory',
      description: 'MacBook Pro 16" M3 (PROD2024001)',
      date: 'Dec 4, 2024'
    },
    {
      id: 2,
      type: 'Product assigned to Sarah Johnson',
      description: 'Dell ThinkPad X1 Carbon (PROD2024001)',
      date: 'Dec 3, 2024'
    },
    {
      id: 3,
      type: 'Product assigned to Michael Brown',
      description: 'Apple MacBook Air M2 (PROD2024001)',
      date: 'Dec 2, 2024'
    },
    {
      id: 4,
      type: 'Product sent for maintenance',
      description: 'HP Spectre x360 - Screen replacement required',
      date: 'Jan 16, 2024'
    },
    {
      id: 5,
      type: 'New user registered',
      description: 'Amanda White - Staff Member',
      date: 'Jan 14, 2024'
    }
  ])

  // Add setter helpers if needed
  const addProduct = product => {
    setProducts(prev => [...prev, product])
  }

  const addActivity = activity => {
    setRecentActivity(prev => [...prev, activity])
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        recentActivity,
        setRecentActivity,
        addProduct,
        addActivity
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
