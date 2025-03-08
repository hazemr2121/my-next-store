import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await fetch("https://fakestoreapi.com/products/" + id);
  const product: Product = await data.json();

  return (
    <div className="max-w-4xl mx-auto">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover mb-4"
        width={300}
        height={300}
      />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <p className="text-gray-600">Category: {product.category}</p>
    </div>
  );
}
