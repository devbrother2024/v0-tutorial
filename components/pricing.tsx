'use client'

import { Button } from '@/components/ui/button'
import { Sparkles, Check, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export function Pricing() {
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
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                    합리적인 가격으로 무한한 창의력을
                                </h1>
                                <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                                    당신의 요구사항에 맞는 최적의 요금제를
                                    선택하세요. 언제든지 업그레이드하거나
                                    다운그레이드할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            {[
                                {
                                    name: '기본',
                                    price: '10,000원/월',
                                    description:
                                        '개인 사용자나 소규모 프로젝트에 적합한 요금제입니다.',
                                    features: [
                                        '월 100장 이미지 생성',
                                        '기본 해상도 (512x512)',
                                        '일반 지원',
                                        '기본 스타일 옵션',
                                        '워터마크 없음',
                                        'API 액세스 (제한적)'
                                    ]
                                },
                                {
                                    name: '프로',
                                    price: '30,000원/월',
                                    description:
                                        '전문가와 중소기업을 위한 고급 기능을 제공합니다.',
                                    features: [
                                        '월 500장 이미지 생성',
                                        '고해상도 (1024x1024)',
                                        '우선 지원',
                                        '고급 스타일 옵션',
                                        '워터마크 없음',
                                        '전체 API 액세스',
                                        '팀 협업 기능'
                                    ]
                                },
                                {
                                    name: '기업',
                                    price: '문의',
                                    description:
                                        '대규모 프로젝트와 기업을 위한 맞춤형 솔루션입니다.',
                                    features: [
                                        '무제한 이미지 생성',
                                        '초고해상도 (2048x2048 이상)',
                                        '전담 지원 매니저',
                                        '모든 스타일 옵션',
                                        '워터마크 없음',
                                        '고급 API 액세스',
                                        '맞춤형 통합 및 개발',
                                        '전용 서버 옵션'
                                    ]
                                }
                            ].map(plan => (
                                <div
                                    key={plan.name}
                                    className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg"
                                >
                                    <h3 className="text-2xl font-bold mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-3xl font-bold mb-2">
                                        {plan.price}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-6">
                                        {plan.description}
                                    </p>
                                    <ul className="mb-6 space-y-2 flex-1">
                                        {plan.features.map(feature => (
                                            <li
                                                key={feature}
                                                className="flex items-center"
                                            >
                                                <Check className="h-5 w-5 text-purple-400 mr-2" />
                                                <span className="text-sm">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="mt-auto bg-purple-600 hover:bg-purple-700">
                                        {plan.name === '기업'
                                            ? '문의하기'
                                            : '선택하기'}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            자주 묻는 질문
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    q: '요금제는 언제든지 변경할 수 있나요?',
                                    a: '네, 언제든지 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 다음 결제 주기부터 적용됩니다.'
                                },
                                {
                                    q: '미사용 크레딧은 다음 달로 이월되나요?',
                                    a: '아니요, 미사용 크레딧은 매월 초기화됩니다. 하지만 기업 요금제의 경우 맞춤 조정이 가능합니다.'
                                },
                                {
                                    q: '결제는 어떤 방식으로 이루어지나요?',
                                    a: '신용카드, 체크카드, 또는 기업의 경우 계좌 이체로 결제가 가능합니다. 모든 결제는 월 단위로 자동 갱신됩니다.'
                                },
                                {
                                    q: '무료 체험 기간이 있나요?',
                                    a: '네, 모든 신규 사용자에게 7일간의 무료 체험 기간을 제공합니다. 이 기간 동안 프로 요금제의 모든 기능을 이용할 수 있습니다.'
                                },
                                {
                                    q: '기업 요금제의 가격은 어떻게 책정되나요?',
                                    a: '기업 요금제는 귀사의 특정 요구사항에 따라 맞춤 견적을 제공합니다. 영업팀과 상담을 통해 최적의 가격을 책정해 드립니다.'
                                },
                                {
                                    q: '환불 정책은 어떻게 되나요?',
                                    a: '첫 결제 후 14일 이내에 요청하시면 전액 환불이 가능합니다. 그 이후에는 미사용 기간에 대해 비례 환불을 제공합니다.'
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
                                    아직 결정하기 어려우신가요?
                                </h2>
                                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    7일 무료 체험으로 AIMAGINE의 모든 기능을
                                    경험해보세요. 신용카드 정보가 필요하지
                                    않습니다.
                                </p>
                            </div>
                            <Button className="bg-purple-600 hover:bg-purple-700">
                                무료 체험 시작하기
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
