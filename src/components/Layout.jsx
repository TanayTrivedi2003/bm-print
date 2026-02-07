import Navbar from "./Navbar";
import CategoryBar from "./CategoryBar";

function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header Area */}
            <Navbar />
            {/* <CategoryBar /> */}

            {/* Page Content */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}

export default Layout;
