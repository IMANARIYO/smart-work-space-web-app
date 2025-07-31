import { FiPackage, FiUser, FiTool } from "react-icons/fi";
import { useProducts } from "../hooks/useProducts";

const RecentActivity = () => {
  const { recentActivity } = useProducts();

  const getActivityIcon = (type) => {
    if (type.includes("Product added")) return FiPackage;
    if (type.includes("assigned")) return FiUser;
    if (type.includes("maintenance")) return FiTool;
    if (type.includes("user registered")) return FiUser;
    return FiPackage;
  };

  return (
    <div className="bg-card text-foreground rounded-lg shadow-sm border border-border w-full">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <button className="text-info-foreground hover:underline text-sm font-medium">
          View all
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {recentActivity.map(activity => {
            const IconComponent = getActivityIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-start">
                <div className="w-8 h-8 bg-info-muted rounded-full flex items-center justify-center mr-3 mt-1">
                  <IconComponent className="text-info-foreground" size={14} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {activity.type}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
