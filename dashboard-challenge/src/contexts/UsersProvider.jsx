import { useState } from 'react'
import { UsersContext } from './UsersContext'

export const UsersProvider = ({ children }) => {
  const [users] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@ihuza.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2 hours ago',
      avatar: 'JS'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@ihuza.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '5 hours ago',
      avatar: 'SJ'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'm.brown@ihuza.com',
      role: 'Staff',
      status: 'Active',
      lastLogin: '1 day ago',
      avatar: 'MB'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.d@ihuza.com',
      role: 'Staff',
      status: 'Inactive',
      lastLogin: '3 days ago',
      avatar: 'ED'
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'd.wilson@ihuza.com',
      role: 'Staff',
      status: 'Active',
      lastLogin: '6 hours ago',
      avatar: 'DW'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa.a@ihuza.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '30 min ago',
      avatar: 'LA'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      email: 'r.taylor@ihuza.com',
      role: 'Staff',
      status: 'Active',
      lastLogin: '2 days ago',
      avatar: 'RT'
    },
    {
      id: 8,
      name: 'Jennifer Miller',
      email: 'j.miller@ihuza.com',
      role: 'Staff',
      status: 'Active',
      lastLogin: '4 hours ago',
      avatar: 'JM'
    },
    {
      id: 9,
      name: 'Christopher Lee',
      email: 'c.lee@ihuza.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '1 hour ago',
      avatar: 'CL'
    },
    {
      id: 10,
      name: 'Amanda White',
      email: 'a.white@ihuza.com',
      role: 'Staff',
      status: 'Inactive',
      lastLogin: '1 week ago',
      avatar: 'AW'
    },
    {
      id: 11,
      name: 'Amanda White',
      email: 'a.white@ihuza.com',
      role: 'Staff',
      status: 'Inactive',
      lastLogin: '1 week ago',
      avatar: 'AW'
    }
  ])

  return (
    <UsersContext.Provider value={{ users }}>
      {children}
    </UsersContext.Provider>
  )
}
