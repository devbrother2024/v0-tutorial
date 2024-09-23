'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Sparkles,
    Zap,
    Image as ImageIcon,
    Lock,
    CreditCard,
    HelpCircle
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function LandingPageComponent() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="/">
                    <Sparkles className="h-6 w-6 text-purple-400" />
                    <span className="ml-2 text-2xl font-bold text-white">
                        AIMAGINE
                    </span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/#features"
                    >
                        기능
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/pricing"
                    >
                        요금제
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/#faq"
                    >
                        FAQ
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    상상을 현실로,{' '}
                                    <span className="text-purple-400">
                                        AIMAGINE
                                    </span>
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                    AI 기술로 당신의 창의력을 극대화하세요.
                                    텍스트만으로 놀라운 이미지를 만들어보세요.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input
                                        className="max-w-lg flex-1 bg-gray-800 text-white border-gray-700"
                                        placeholder="이메일을 입력하세요"
                                        type="email"
                                    />
                                    <Button
                                        className="bg-purple-600 hover:bg-purple-700"
                                        type="submit"
                                    >
                                        시작하기
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="features"
                    className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
                >
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            주요 기능
                        </h2>
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">
                                    초고속 생성
                                </h3>
                                <p className="text-gray-400">
                                    몇 초 만에 고품질 이미지를 생성합니다.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <ImageIcon className="h-12 w-12 text-green-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">
                                    다양한 스타일
                                </h3>
                                <p className="text-gray-400">
                                    수백 가지 스타일과 테마 중 선택하세요.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Lock className="h-12 w-12 text-red-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">
                                    저작권 보호
                                </h3>
                                <p className="text-gray-400">
                                    생성된 이미지의 저작권은 모두 당신의
                                    것입니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 flex justify-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-center">
                                갤러리
                            </h2>
                            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <Image
                                        key={i}
                                        alt={`AI 생성 이미지 ${i}`}
                                        className="aspect-square object-cover rounded-lg"
                                        height="300"
                                        src={`/placeholder.svg?height=300&width=300`}
                                        width="300"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="pricing"
                    className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
                >
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            요금제
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: '기본',
                                    price: '10,000원/월',
                                    features: [
                                        '월 100장 이미지 생성',
                                        '기본 해상도'
                                    ]
                                },
                                {
                                    name: '프로',
                                    price: '30,000원/월',
                                    features: [
                                        '월 500장 이미지 생성',
                                        '고해상도',
                                        '우선 지원'
                                    ]
                                },
                                {
                                    name: '기업',
                                    price: '문의',
                                    features: [
                                        '무제한 이미지 생성',
                                        '초고해상도',
                                        '전담 지원'
                                    ]
                                }
                            ].map(plan => (
                                <div
                                    key={plan.name}
                                    className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg"
                                >
                                    <h3 className="text-2xl font-bold mb-4">
                                        {plan.name}
                                    </h3>
                                    <p className="text-3xl font-bold mb-6">
                                        {plan.price}
                                    </p>
                                    <ul className="mb-6 space-y-2">
                                        {plan.features.map(feature => (
                                            <li
                                                key={feature}
                                                className="flex items-center"
                                            >
                                                <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="mt-auto bg-purple-600 hover:bg-purple-700">
                                        선택하기
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            자주 묻는 질문
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {[
                                {
                                    q: '어떤 형식의 이미지를 생성할 수 있나요?',
                                    a: 'JPG, PNG, WebP 등 다양한 형식을 지원합니다.'
                                },
                                {
                                    q: '생성된 이미지의 저작권은 어떻게 되나요?',
                                    a: '모든 저작권은 이미지를 생성한 사용자에게 귀속됩니다.'
                                },
                                {
                                    q: '이미지 생성 시간은 얼마나 걸리나요?',
                                    a: '평균적으로 5-10초 내외로 생성됩니다.'
                                },
                                {
                                    q: '기업용 맞춤 서비스도 제공하나요?',
                                    a: '네, 기업 요구사항에 맞는 커스텀 솔루션을 제공합니다.'
                                }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <h3 className="text-xl font-bold flex items-center">
                                        <HelpCircle className="h-5 w-5 text-purple-400 mr-2" />
                                        {item.q}
                                    </h3>
                                    <p className="text-gray-400">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    지금 바로 AIMAGINE을 경험해보세요
                                </h2>
                                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    무료 체험으로 AI의 놀라운 이미지 생성 능력을
                                    직접 확인하세요.
                                </p>
                            </div>
                            <Button className="bg-purple-600 hover:bg-purple-700">
                                무료로 시작하기
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
                <p className="text-xs text-gray-400">
                    © 2023 AIMAGINE. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4 text-gray-400"
                        href="#"
                    >
                        이용약관
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4 text-gray-400"
                        href="#"
                    >
                        개인정보처리방침
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
