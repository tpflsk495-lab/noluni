import FooterLogo from '../assets/footer_logo.svg'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="inner">
                    <div className="footer_logo"><img src={FooterLogo} alt="NOL" /></div>
                    <address>
                        (주)놀유니버스
                        대표이사: 배보찬
                        사업자 등록번호: 824-81-02515
                        통신판매업신고:2024-성남수정-0912
                        메일: help@nol.com<br />
                        관광사업자 등록번호: 제2024-000024호
                        주소: 경기도 성남시 수정구 금토로 70 (금토동, 텐엑스타워)
                        호스팅 서비스 제공자: (주)놀유니버스<br />
                        고객센터: 1644-1346 (오전 9시 - 익일 새벽 3시)
                    </address>
                    <div className="footer_link">
                        <a href="#">회사소개</a>
                        <a href="#">인재채용</a>
                        <a href="#">개인정보처리방침</a>
                        <a href="#">서비스이용약관</a>
                        <a href="#">광고제휴문의</a>
                    </div>
                    <div className="copy">
                        &copy; Nol Universe Co., Ltd. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer