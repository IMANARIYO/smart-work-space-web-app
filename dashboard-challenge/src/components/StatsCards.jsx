import { FaUserGroup } from 'react-icons/fa6'
import { useProducts } from '../hooks/useProducts'
import { useUsers } from '../hooks/useUsers'
import { BiCheckCircle, BiPackage } from 'react-icons/bi'
import { FiAlertCircle } from 'react-icons/fi'

const StatsCards = () => {
  const { users } = useUsers()
  const { products } = useProducts()

  const stats = [
    {
      title: 'Total Users',
      icon: <FaUserGroup />,
      value: users.length,
      color: 'bg-info'
    },
    {
      title: 'Total Products',
      value: products.length,
      icon: <BiPackage />,
      color: 'bg-success'
    },
    {
      title: 'Assigned Products',
      value: products.filter(product => product.status != 'Out of Stock')
        .length,
      icon: <BiCheckCircle />,
      color: 'bg-warning'
    },
    {
      title: 'Unassigned Products',
      value: products.filter(product => product.status == 'Out of Stock')
        .length,
      icon: <FiAlertCircle />,
      color: 'bg-destructive'
    }
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
      {stats.map((stat, index) =>
        <div
          key={index}
          className='bg-card rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700'
        >
          <div className='flex items-center'>
            <div
              className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mr-4`}
            >
              <span className=' '>
                {stat.icon}
              </span>
            </div>
            <div>
              <p className='text-2xl font-bold text-card-foreground'>
                {stat.value}
              </p>
              <p className='text-sm font-medium text-card-foreground'>
                {stat.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StatsCards
