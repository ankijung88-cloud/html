// src/components/TestimonialCard.tsx
import React from 'react'

// TestimonialCard 컴포넌트를 함수형 컴포넌트(React.FC)로 정의합니다.
// 이 컴포넌트가 받을 props(외부에서 전달받는 값)의 타입을 <{}> 안에 직접 명시합니다.
// - `quote`: 추천사 내용, `string` (문자열) 타입입니다.
// - `authorName`: 작성자 이름, `string` (문자열) 타입입니다.
// - `authorTitle`: 작성자 직책, `string` (문자열) 타입입니다.
// - `authorAvatar`: 작성자 프로필 이미지 URL, `string` (문자열) 타입입니다.
const TestimonialCard: React.FC<{
  quote: string
  authorName: string
  authorTitle: string
  authorAvatar: string
}> = ({ quote, authorName, authorTitle, authorAvatar }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
      <img
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4"
        src={authorAvatar}
        alt={authorName}
      />
      <p className="text-gray-700 italic text-lg mb-4">"{quote}"</p>
      <p className="font-bold text-gray-900 text-xl">{authorName}</p>
      <p className="text-gray-500 text-sm">{authorTitle}</p>
    </div>
  )
}

export default TestimonialCard
