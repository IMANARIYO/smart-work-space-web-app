import { FiMenu } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";
import { useLoginUser } from "../hooks/useLoginUser";

const Header = ({ setSidebarOpen }) => {
  const {  updateUsername } = useLoginUser();
  updateUsername("baptiste");
const { loginUser } = useLoginUser();
  return (
    <header className="bg-background text-foreground shadow-sm border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-muted-foreground hover:text-foreground mr-4"
          >
            <FiMenu size={20} />
          </button>
          <h1 className="text-xl font-semibold bg-blue-500">Dashboard</h1>
          <span>
            {loginUser.email}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <span className="text-muted-foreground">
            Welcome Back, {loginUser.username}
          </span>

          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">
              {loginUser.username.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
