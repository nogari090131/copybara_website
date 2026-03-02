import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function CapybaraClubWebsite() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-800">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
      />

      <header className="p-6 flex justify-between items-center bg-white shadow-md sticky top-0 z-40">
        <h1 className="text-2xl font-bold">🐹 구암고 카피바라</h1>
        <nav className="space-x-6 text-sm font-medium hidden md:flex">
          <a href="#about" className="hover:text-orange-500">동아리 소개</a>
          <a href="#activities" className="hover:text-orange-500">활동 내용</a>
          <a href="#apply" className="hover:text-orange-500">가입 신청</a>
          <a href="#contact" className="hover:text-orange-500">문의</a>
        </nav>
      </header>

      <section className="text-center py-28 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          COPY + 바라
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg mb-8 leading-relaxed"
        >
          광고를 보고, 분석하고, 직접 만들어보는 동아리<br />
          경영 · 마케팅 · 디자인 · 브랜딩 진로 맞춤 활동
        </motion.p>

        <motion.a
          href="https://tally.so/r/A7ljBz"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-black hover:bg-gray-900 text-yellow-400 px-8 py-4 rounded-2xl shadow-xl inline-block text-lg font-semibold"
        >
          지금 지원하기
        </motion.a>
      </section>

      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white text-center"
      >
        <h3 className="text-3xl font-bold mb-6">카피바라는</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          혼자가 아닌 함께할 동반자입니다.<br />
          홍보물 제작, 브랜드 분석, 공익 마케팅 프로젝트를 통해
          기획력과 협업 능력을 성장시키는 실전형 동아리입니다.
        </p>
      </motion.section>

      <section id="activities" className="py-24 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl font-bold text-center mb-16"
          >
            주요 활동
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '📢 홍보물 제작', desc: '포스터 · 카드뉴스 · SNS 콘텐츠 제작' },
              { title: '📊 브랜드 분석', desc: '기업 마케팅 전략 분석 및 발표' },
              { title: '💡 공익 마케팅', desc: '사회 문제 해결 캠페인 기획' },
              { title: '✨ 동아리 브랜딩', desc: '아이덴티티 구축 및 협업 프로젝트' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-lg text-center"
              >
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-black text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">
          진로가 명확하지 않아도 언제나 환영
        </h3>
        <p className="text-lg leading-relaxed">
          활동은 빵빵 🔥 생기부는 꽉꽉 📚<br />
          진로 따라 맞춤 세특 지원
        </p>
      </motion.section>

      <motion.section
        id="apply"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">가입 신청</h3>
        <p className="mb-6 text-lg">아래 버튼을 눌러 신청서를 작성해주세요.</p>
        <a
          href="https://tally.so/r/A7ljBz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl shadow-xl inline-block"
        >
          신청서 작성하기
        </a>
      </motion.section>

      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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
      </motion.section>

      <footer className="bg-gray-800 text-white text-center py-6">
        © 2026 구암고등학교 카피바라 동아리
      </footer>
    </div>
  )
}
