'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import StatsCards from './StatsCards'
import RecentProducts from './RecentProducts'
import UsersTable from './UsersTable'
import RecentActivity from './RecentActivity'
import QuickActions from './QuickActions'

import '../index.css'
import { BsBox } from 'react-icons/bs'
import { BiCheckCircle } from 'react-icons/bi'

const SystemOverview = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-8 rounded-xl text-white mb-8'>
      <div className='flex items-center space-x-4 mb-4'>
        <BsBox className='w-8 h-8' />
        <h2 className='text-2xl font-bold'>
          iHUZA INVENTORY - System Overview
        </h2>
      </div>

      <p className='text-blue-100 dark:text-blue-200 mb-6'>
        Monitor your iHUZA inventory and product assignments in real-time.
      </p>

      <div className='flex items-center space-x-2'>
        <BiCheckCircle className='w-5 h-5 text-green-300 dark:text-green-200' />
        <span className='text-green-100 dark:text-green-200 font-medium'>
          All Systems Operational
        </span>
      </div>
    </div>
  )
}

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen space-y-2 '>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header setSidebarOpen={setSidebarOpen} />

        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-background p-6 gap-2'>
          <div className='space-y-6'>
            <SystemOverview />
            <StatsCards />
            <RecentProducts />
            <UsersTable />
            <div className='grid lg:grid-cols-2  md:grid-cols-1   gap-4   '>
              <RecentActivity />
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
