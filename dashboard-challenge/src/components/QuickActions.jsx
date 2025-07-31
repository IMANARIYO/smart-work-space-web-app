import { FiUsers, FiPackage, FiClipboard, FiArrowRight } from 'react-icons/fi'

const QuickActions = () => {
  const actions = [
    {
      title: 'View Users',
      description: 'View all registered users',
      icon: FiUsers,
      color: 'primary' 
    },
    {
      title: 'View Products',
      description: 'View all registered products',
      icon: FiPackage,
      color: 'chart-2' 
    },
    {
      title: 'View Assignments',
      description: 'View all product assignments',
      icon: FiClipboard,
      color: 'chart-3'
    }
  ]

  return (
    <div className='bg-card text-foreground rounded-lg shadow-sm border border-border w-full'>
      <div className='p-6 border-b border-border'>
        <h3 className='text-lg font-semibold text-foreground'>
          Quick Actions
        </h3>
      </div>
      <div className='p-6'>
        <div className='space-y-4'>
          {actions.map((action, index) =>
            <div
              key={index}
              className='flex items-center justify-between p-4 bg-muted hover:bg-accent transition-colors duration-200 cursor-pointer rounded-lg'
            >
              <div className='flex items-center'>
                <div
                  className='w-10 h-10 rounded-lg flex items-center justify-center mr-4'
                  style={{ backgroundColor: action.color }}
                >
                  <action.icon className='text-info' size={18} />
                </div>
                <div>
                  <h4 className='font-medium text-foreground'>
                    {action.title}
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    {action.description}
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <span className='text-info hover:text-info-hover text-sm font-medium mr-2'>
                  Go
                </span>
                <FiArrowRight className='text-chart-2' size={16} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuickActions
