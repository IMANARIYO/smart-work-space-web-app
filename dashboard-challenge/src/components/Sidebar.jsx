
import { FiHome, FiUsers, FiPackage, FiClipboard, FiGrid, FiLogOut, FiX } from "react-icons/fi"

const Sidebar = ({ isOpen, setIsOpen }) => {


  const menuItems = [
    { icon: FiHome, label: "Dashboard", active: true },
    { icon: FiUsers, label: "Users" },
    { icon: FiPackage, label: "Products" },
    { icon: FiClipboard, label: "Assignments" },
    { icon: FiGrid, label: "Categories" },
  ]

  return (
    <>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}


      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">¡H</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">¡HUZA</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">INVENTORY</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                item.active
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 border-r-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <item.icon className="mr-3" size={18} />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200">
            <FiLogOut className="mr-3" size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
