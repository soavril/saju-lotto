import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description: "사주 행운 번호 생성기 이용약관",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">이용약관</h1>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <p className="text-gray-600 mb-4">
          사주 행운 번호 생성기(이하 &quot;서비스&quot;)를 이용해 주셔서 감사합니다.
          본 서비스 이용 전 아래 약관을 확인해 주세요.
        </p>
        <p className="text-sm text-gray-500">최종 수정일: 2025년 2월</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          1. 서비스 목적
        </h2>
        <p className="text-gray-600 mb-3">
          본 서비스는 생년월일을 기반으로 행운 번호를 생성하는 <strong>오락용 도구</strong>입니다.
        </p>
        <p className="text-gray-600">
          본 서비스는 당첨을 보장하거나 예측하지 않으며, 재미로 즐기는 용도입니다.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border-l-4 border-yellow-400">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          2. 면책 조항
        </h2>
        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <p className="text-yellow-800 font-semibold">
            본 서비스는 오락 목적이며, 어떠한 당첨도 보장하지 않습니다.
          </p>
        </div>
        <ul className="text-gray-600 space-y-2 ml-4">
          <li>• 생성된 번호는 무작위 알고리즘 기반이며, 당첨 확률과 무관합니다.</li>
          <li>• 사주, 운세 등은 과학적 근거가 없는 오락 요소입니다.</li>
          <li>• 로또 구매는 본인의 판단과 책임 하에 이루어져야 합니다.</li>
        </ul>
        <p className="text-gray-600 mt-4">
          본 사이트 이용으로 인해 발생하는 어떠한 손해에 대해서도 운영자는 책임을 지지 않습니다.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          3. 도박 관련 주의사항
        </h2>
        <p className="text-gray-600 mb-3">
          로또는 사행성 게임입니다. 과도한 구매는 금전적 손실을 초래할 수 있습니다.
        </p>
        <p className="text-gray-600">
          도박 문제 상담: 한국도박문제관리센터 1336
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          4. 지적재산권
        </h2>
        <p className="text-gray-600">
          본 사이트의 디자인, 코드, 콘텐츠에 대한 저작권은 운영자에게 있습니다.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          5. 약관 변경
        </h2>
        <p className="text-gray-600">
          본 이용약관은 필요에 따라 변경될 수 있으며, 변경 시 이 페이지에 게시합니다.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          6. 문의처
        </h2>
        <p className="text-gray-600">
          서비스 관련 문의: <a href="mailto:soavril@naver.com" className="text-blue-600 hover:underline">soavril@naver.com</a>
        </p>
      </div>
    </div>
  );
}
