import Link from "next/link";

const Navbar = () => {
    return (
        <div className="p-2 h-20 bg-black text-white flex justify-between">
            <Link href="/">Home</Link>
            <Link href="/addproduct">Add Product</Link>
        </div>
    );
};
export default Navbar;
