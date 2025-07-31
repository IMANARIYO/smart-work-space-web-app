import { useProducts } from "../hooks/useProducts";

const RecentProducts = () => {
  const { products } = useProducts();

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-success-muted text-success-foreground";
      case "Low Stock":
        return "bg-warning-muted text-warning-foreground";
      case "Out of Stock":
        return "bg-destructive-muted text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="bg-card text-foreground rounded-lg shadow-sm border border-border">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold">Recent Added Products</h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product =>
            <div
              key={product.id}
              className="flex justify-between p-4 bg-muted rounded-lg border border-border h-full"
            >
              <div>
                <h4 className="font-medium">
                  {product.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.dateAdded}
                </p>
              </div>

              <div className="">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                    product.status
                  )}`}
                >
                  {product.status}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentProducts;
