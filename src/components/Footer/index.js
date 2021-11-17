import React from "react";

import "./footer.scss";
import netflix from "../../images/snsicon-01.png";
import facebook from "../../images/snsicon-02.png";
import blog from "../../images/snsicon-03.png";

function index() {
  return (
    <footer className="footer">
      <div className="container negative">
        <div className="footer-wrapper">
          <div className="footer-main">
            <div className="footer-main__left">
              <div className="footer-item">
                <div className="footer-item__title text bold">
                  what happened
                </div>
                <p className="footer-item__desc text">
                  [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
                  [공지] 29CM 강남 스토어 영업 종료 <br />
                  [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
                  [공지] iOS 10 이하 버전 지원 중단 안내 <br />
                  [공지] 개인 정보 처리 방침 변경 사전 안내
                </p>
              </div>
            </div>
            <div className="footer-main__right">
              <div className="footer-item">
                <div className="footer-item__title text">about us</div>
                <p className="footer-item__desc text">
                  회사 소개 <br />
                  인재 채용 <br />
                  상시 할인 혜택
                </p>
              </div>
              <div className="footer-item">
                <div className="footer-item__title text">my order</div>
                <p className="footer-item__desc text">
                  내 주문 주문 배송 <br />
                  취소 / 교환 / 반품 내역 <br />
                  상품 리뷰 내역 <br />
                  증빙 서류 발급
                </p>
              </div>
              <div className="footer-item">
                <div className="footer-item__title text">my account</div>
                <p className="footer-item__desc text">
                  회원 정보 수정 <br />
                  회원 등급 <br />
                  마일리지 현황 <br />
                  쿠폰
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copy-right">
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </p>
            <ul className="socials">
              <li className="socials-item">
                <a href="/" className="socials-link">
                  <img src={netflix} alt="netflix" />
                </a>
              </li>
              <li className="socials-item">
                <a href="/" className="socials-link">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li className="socials-item">
                <a href="/" className="socials-link">
                  <img src={blog} alt="blog" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default index;
