"use client"

import { motion, useScroll, useSpring } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-800">
      
      {/* 스크롤 진행 바 */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
      />

      {/* 헤더 */}
      <header className="p-6 flex justify-between items-center bg-white shadow-md sticky top-0 z-40">
        <h1 className="text-2xl font-bold">🐹 구암고 카피바라</h1>
        <nav className="space-x-6 text-sm font-medium hidden md:flex">
          <a href="#about" className="hover:text-orange-500">동아리 소개</a>
          <a href="#apply" className="hover:text-orange-500">가입 신청</a>
          <a href="#contact" className="hover:text-orange-500">문의</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-28 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          COPY + 바라
        </motion.h2>

        <p className="max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
          광고를 보고, 분석하고, 직접 만들어보는 동아리
          <br />
          경영 · 마케팅 · 디자인 · 브랜딩 진로 맞춤 활동
        </p>

        <a
          href="https://tally.so/r/A7ljBz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-900 text-yellow-400 px-8 py-4 rounded-2xl shadow-xl inline-block text-lg font-semibold"
        >
          지금 지원하기
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 px-6 bg-white text-center"
      >
        <h3 className="text-3xl font-bold mb-6">카피바라는</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          혼자가 아닌 함께할 동반자입니다.
          <br />
          홍보물 제작, 브랜드 분석, 공익 마케팅 프로젝트를 통해
          기획력과 협업 능력을 성장시키는 실전형 동아리입니다.
        </p>
      </section>

      {/* APPLY */}
      <section
        id="apply"
        className="py-20 px-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">가입 신청</h3>
        <p className="mb-6 text-lg">아래 버튼을 눌러 형식을 작성해주세요.</p>

        <a
          href="https://tally.so/r/A7ljBz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl shadow-xl inline-block"
        >
          형식 작성하기
        </a>
      </section>

      {/* 문의하기 */}
      <section
        id="contact"
        className="py-24 px-6 bg-white text-center"
      >
        <h3 className="text-3xl font-bold mb-12">문의하기</h3>

        <div className="flex justify-center gap-10 flex-wrap">
          
          <div className="bg-pink-50 p-8 rounded-3xl shadow-lg w-80 hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">👑 동아리 부장</h4>
            <p className="mb-4 text-sm text-gray-500">@zworvx</p>
            <a
              href="https://instagram.com/zworvx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-md inline-block"
            >
              인스타 바로가기
            </a>
          </div>

          <div className="bg-purple-50 p-8 rounded-3xl shadow-lg w-80 hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">⭐ 동아리 차장</h4>
            <p className="mb-4 text-sm text-gray-500">@nhj_.hz</p>
            <a
              href="https://instagram.com/nhj_.hz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-md inline-block"
            >
              인스타 바로가기
            </a>
          </div>

        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        © 2026 구암고등학교 카피바라 동아리
      </footer>
    </div>
  )
}