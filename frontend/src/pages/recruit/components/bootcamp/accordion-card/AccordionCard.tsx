import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
} from '@/components/ui'

export const BootcampAccordionCard = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 px-5 py-10 sm:flex-row sm:items-stretch sm:justify-center">
      <Card className="w-80 bg-[#8A9F84] px-4 py-10 text-white sm:w-96">
        <div className="text-2xl font-semibold">기초반</div>
        <div className="whitespace-pre-line py-10">
          {`일부 테스트를 응시하지 않은\n 준회원 분들이 선택할 수 있습니다.`}
        </div>
        <Accordion type="single" collapsible className="w-full text-black">
          <AccordionItem
            value="item-1"
            className="my-2 rounded-xl border-none bg-white px-2"
          >
            <AccordionTrigger className="py-3 font-semibold">
              C 언어
            </AccordionTrigger>
            <AccordionContent>
              C언어의 기초 문법부터 포인터, 동적 할당, 자료구조 맛보기 기초부터
              응용까지
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="my-2 rounded-xl border-none bg-white px-2"
          >
            <AccordionTrigger className="py-3 font-semibold">
              파이썬
            </AccordionTrigger>
            <AccordionContent>
              파이썬의 기초 문법부터 클래스, 여러 가지 모듈 활용 실습, tkinter
              활용 GUI 프로그램까지
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="my-2 rounded-xl border-none bg-white px-2"
          >
            <AccordionTrigger className="py-3 font-semibold">
              웹 기초
            </AccordionTrigger>
            <AccordionContent>
              웹 개발에 필수인 HTML, CSS, JavaScript 기초를 공부하고 대세 UI/UX
              개발 툴인 Figma 실습까지
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
      <Card className="w-80 bg-[#84869F] px-4 py-10 text-white sm:w-96">
        <div className="text-2xl font-semibold">응용반</div>
        <div className="whitespace-pre-line py-10">
          {`입부 테스트를 통과한\n 준회원 분들이 선택할 수 있습니다.`}
        </div>
        <Accordion type="single" collapsible className="w-full text-black">
          <AccordionItem
            value="item-1"
            className="my-2 rounded-xl border-none bg-white px-2"
          >
            <AccordionTrigger className="py-3 font-semibold">
              Spring
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              {` 요건 : java로 입부 테스트 통과\n
        API를 이용하여 애플리케이션의 필수 기능 구현 후 배포까지`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="my-2 rounded-xl border-none bg-white px-2"
          >
            <AccordionTrigger className="py-3 font-semibold">
              React
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              {`요건: js로 입부 테스트 통과\n
        HTML, CSS, JS와 함께 <해달그램> 제작 후 배포까지`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="my-2 rounded-xl border-none bg-white px-2"
          >
            <AccordionTrigger className="py-3 font-semibold">
              ANS
            </AccordionTrigger>
            <AccordionContent>
              {`안드로이드 스튜디오 구조 탐색, <해달 그램>을 제작하면서
        리스트뷰 구현, 파이어베이스 연동까지`}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  )
}
