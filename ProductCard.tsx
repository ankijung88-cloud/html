import React from 'react'

const ProductCard: React.FC<{
  imageSrc: string
  name: string
  price: string
}> = ({ imageSrc, name, price }) => {
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-4">
      <img
        className="w-full h-48 object-cover rounded-t-lg mb-4"
        src={imageSrc}
        alt={name}
      />

      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <p className="text-blue-600 text-lg font-semibold mb-4">{price}</p>
      </div>

      <div className="px-4 pt-4 pb-2">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
          구매하기
        </button>
      </div>
    </div>
  )
}

export default ProductCard
