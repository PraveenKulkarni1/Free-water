import React from "react";
import "./termCond.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RevolutionAds from "./Component/RevolutionAds";
import FollowInsta from "./Component/FollowInsta";
import GetForm from "./Component/GetForm";
const TermCond = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid blueBg">
        <div className="row">
          <div className="col-12 text-center my-2 my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            <h1 className="navHead"> Terms and Conditions</h1>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 mr-2 d-flex justify-content-center flex-row">
              <li className="nav-item adsNav">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item p-0 adsNav2 mt-1 mt-lg-0 mt-xl-0 mt-md-2 mt-sm-2">
                <NavLink
                  to="/terms-condition"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Terms and Conditions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <RevolutionAds />

      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <h1 className="adSecFourh1"> Terms and Conditions</h1>
            <p className="adSecFourp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 termsMain mb-2 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-2   ">
            <div className="">
              <p className="termPara">
                Your use of our website is governed by the following terms and
                conditions (“Terms of Use”), as well as the CARDONE CAPITAL
                Privacy Policy and other operating rules, minimum qualifications
                and cautions posted throughout the website or presented to you
                individually during the course of your use of the website
                (collectively, the “Terms”). The Terms govern your use of the
                website and CARDONE CAPITAL reserves the right to update or
                replace the Terms any time without notice. You are advised to
                review the Terms for any changes when you visit the website even
                if you have not received a notification of changes as you are
                bound by them even if you have not reviewed them. Your viewing
                and use of the website after such change constitutes your
                acceptance of the Terms and any changes to such terms. If at any
                time you do not want to be bound by the Terms you should logout,
                exit and cease using the website immediately.
              </p>
            </div>
            <div className="my-2 my-xl-4 my-lg-4 my-md-3 my-sm-2">
              <h1 className="termHead">Intended Use of Website</h1>
              <p className="termPara">
                CARDONE CAPITAL is not a broker-dealer or placement agent. At no
                time does CARDONE CAPITAL offer, broker, advise, purchase, sell
                or otherwise transact in securities regulated by the SEC or
                federal or state law. CARDONE CAPITAL does not accept, hold or
                transfer cash or securities. CARDONE CAPITAL does not guarantee
                that a Company seeking investment will achieve any level of
                success or that any proposed offering will qualify under
                applicable federal and state securities laws.
              </p>
              <p className="termPara">
                CARDONE CAPITAL is not a personal financial advisor. CARDONE
                CAPITAL, whether through the website or otherwise, does not
                provide personal financial advice, loans or credit, banking,
                consumer credit ratings, credit decisions, financial products,
                brokerage accounts, insurance, tax advice, legal advice, or
                financial or legal services of any kind.
              </p>
              <p className="termPara">
                CARDONE CAPITAL does not guarantee any results to anyone. All
                users of the website are responsible for making their own
                decisions to use the website and for any activity taken on the
                website, including without limitation registering and making an
                investment or otherwise.
              </p>
            </div>
            <div className="my-2 my-xl-4 my-lg-4 my-md-3 my-sm-2">
              <h1 className="termHead">User Registration</h1>
              <p className="termPara">
                If you are accepting the Terms on behalf of an organization or
                entity, rather than in an individual capacity, you represent and
                warrant that you are authorized to accept the Terms on that
                organization or entity’s behalf and bind them to these Terms (in
                which case, the references to “you” and “your” in these Terms,
                except for in this sentence, refer to that organization or
                entity).
              </p>
              <p className="termPara">
                Only real persons at or above the age of 18 may register for an
                account and use the website. Registering for an account on the
                website creates no commitment or obligation on the registered
                user to make any investment or seek any investment. All
                information you provide to the website must be truthful,
                accurate and complete in all material respects. Our registration
                process may use third-party validation technology, including
                those provided by third-party social media sites, to attempt to
                confirm your qualification to use the website.
              </p>
              <p className="termPara">
                CARDONE CAPITAL may reject any application to register an
                individual or an organization or entity for failure to achieve
                validation through available methods or otherwise meet CARDONE
                CAPITAL’s registration requirements
              </p>
              <p className="termPara">
                Your registration and the use of any third-party site is subject
                to the terms and conditions and policies of such sites and
                CARDONE CAPITAL is not responsible or liable for any harm
                resulting from the use or misuse of those sites, including when
                such harm could or does affect your account on this website or
                use of the website
              </p>
            </div>
            <div className="my-2 my-xl-4 my-lg-4 my-md-3 my-sm-2">
              <h1 className="termHead">Registered Account Obligations</h1>
              <p className="termPara">
                The named registered user of an account is the only person that
                may use the account and it may not be transferred to anyone else
              </p>
              <p className="termPara">
                You are responsible for maintaining the confidentiality of your
                username and password and to periodically change your password
                to maintain security. If you have concerns that your username or
                password may have been compromised and suspect that unauthorized
                access to your account or the website has occurred, you must
                immediately contact CARDONE CAPITAL’s investor support through a
                secure method (which may not be through your website account).
              </p>
            </div>
            <div className="my-2 my-xl-4 my-lg-4 my-md-3 my-sm-2">
              <h1 className="termHead">Content Use Limitations</h1>
              <p className="termPara">
                Your use of the website and its videos, webinars, images,
                infographics, alerts, text, articles, assessments, checklists,
                forms, ratings, design, data, source code, analytics, photos,
                software, trademarks, copyrights, and other information
                (“Content”) may only be used for the lawful and intended
                purposes expressly authorized by CARDONE CAPITAL. If you access
                this website from outside the United States, you are solely
                responsible for ensuring compliance with the laws of your
                specific jurisdiction, as well as any restrictions that you may
                be subject to by a department of the United States government.
                Any misuse or unauthorized use of the website and its Content,
                or other violations of the Terms may violate Applicable Law (see
                below), including without limitation SEC regulations and
                applicable state securities laws, copyright laws (including the
                Digital Millennium Copyright Act), trademark laws, the laws of
                privacy, laws of publicity, identity theft and communications
                statutes and regulations, in which case CARDONE CAPITAL is
                authorized to terminate your account and access to the website
                at any time and without notice and report you to the appropriate
                authorities and other interested parties.
              </p>
            </div>
            <div className="mt-2 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-2">
              <h1 className="termHead">Prospective Investor Accounts</h1>
              <p className="termPara">
                Any person or entity that is considering making an investment
                with a Company that posts its fundraising plans on the website,
                or, after the fundraising plan becomes a qualified offering,
                makes an investment, does so at his or her own risk. All
                investment carries risk that you may lose some or all of your
                investment. No Content on the website is a replacement for
                performing your own due diligence, exercising good judgement,
                and seeking financial, investment, tax or legal advice from
                qualified and licensed professionals with knowledge of your
                personal circumstances. Any registered financial, legal or tax
                representatives or firm working for or with CARDONE CAPITAL or
                communicating with you or users in general through the website
                are not your personal advisors and do not have knowledge about
                your personal circumstances and anything they post is for
                informational purposes only and may not be accurate to your
                situation and you agree that you shall not rely on Content on
                the website in making personal decisions about an investment or
                the potential legal, tax or financial consequences of such
                investment. You are encouraged to seek personal professional
                advice from qualified and licensed professionals.
              </p>
              <p className="termPara">
                You are solely responsible for your investment decisions. While
                you may be asked about your identity, individual financial
                circumstance and investment experience and sophistication during
                your engagement with the website, CARDONE CAPITAL and its
                advisors and vendors are not responsible to verify the veracity
                of the information that you provide, even if you certify to its
                truth or undergo a suitability review. Whether you are an
                “Accredited Investor”, as such is defined under securities law,
                or a non-accredited investor, or an institutional investor,
                CARDONE CAPITAL and the Companies seeking investment are relying
                on your representations with respect to your investment
                experience, your financial status and your eligibility to
                invest. You may, further, be held personally liable for your
                fraud, negligence and other bad acts that may result from any
                false representations you make.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
        <div className="d-flex justify-content-center align-items-center">
          <button className="adInqBtn" onClick={() => navigate("/inquiry")}>
            Inquiry Now
          </button>
        </div>
      </div>
      <FollowInsta />
      <GetForm />
    </>
  );
};

export default TermCond;
