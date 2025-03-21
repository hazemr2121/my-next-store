import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
}

const ProductsPage = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const { data }: { data: Product[] } = await response.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg shadow-lg">
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover mb-4"
            width={300}
            height={300}
          />
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <Link
            href={`/Product/${product.id}`}
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
