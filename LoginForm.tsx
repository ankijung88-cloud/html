// src/components/LoginForm.tsx (혹은 원하는 경로에 생성)
import React, { useState } from 'react'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에서 로그인 로직을 처리하면 돼요!
    console.log('이메일:', email)
    console.log('비밀번호:', password)
    alert('로그인 시도! 콘솔을 확인해주세요. 🚀')
    // 실제로는 여기에 서버로 요청을 보내는 등의 코드가 들어갈 거예요.
  }

  return (
    // 💫 화면 중앙에 로그인 폼을 배치하고, 배경색을 연한 회색으로 줘봤어요.
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* 🚀 로그인 폼 컨테이너: 흰색 배경, 그림자, 둥근 모서리로 카드처럼 보이게! */}
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        {/* ✨ 제목 스타일링: 크고 진하게, 가운데 정렬! */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          로그인
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {/* 🏷️ 레이블 스타일링: 블록 형태로 만들고 적당한 마진! */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              이메일 주소
            </label>
            {/* 📝 입력 필드 스타일링: 그림자, 테두리, 둥근 모서리, 포커스 시 파란색 강조! */}
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {/* 🔘 로그인 버튼 스타일링: 파란색 배경, 흰색 글씨, 호버 시 어두워지고, 전체 너비! */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              로그인
            </button>
          </div>
        </form>

        {/* 📚 추가 링크 (선택 사항): 예를 들어 비밀번호 찾기나 회원가입 링크 */}
        <div className="text-sm text-center">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
