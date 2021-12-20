import React from "zarkit/react";
import { apps } from "./App";
import "./Zarebin.css";

const Zarebin = function (props) {
  return (
    <div className="app">
      <div className="header-container">
        <div className="header">
          <div className="header__search-box--desktop">
            <div className="header__logo-container header__logo-container--desktop">
              <div className="header__logo header__logo--desktop">
                <a href="/">
                  <svg
                    width="128.89"
                    height="29.431"
                    viewBox="0 0 128.89 29.431"
                  >
                    <g
                      id="Logo_Primary_-_Landscape_Large_size_Purple_Orange"
                      data-name="Logo Primary - Landscape (Large size) Purple+Orange"
                      transform="translate(-676.857 -470.634)"
                    >
                      <g
                        id="Group_1"
                        data-name="Group 1"
                        transform="translate(676.857 470.634)"
                      >
                        <path
                          id="Path_1"
                          data-name="Path 1"
                          d="M1103.85,1250.013a12.475,12.475,0,0,1-4.27,9.4l-1.673,1.46a.7.7,0,0,0-.067.982l1.831,2.1a.7.7,0,0,0,.982.067l1.673-1.46a16.649,16.649,0,0,0,5.7-12.543v-1.568a.7.7,0,0,0-.7-.7h-2.785a.7.7,0,0,0-.7.7Z"
                          transform="translate(-1034.456 -1235.059)"
                          fill="#434148"
                        ></path>
                        <path
                          id="Path_2"
                          data-name="Path 2"
                          d="M1137.136,1232.116h-2.974a.7.7,0,0,0-.7.7v2.785a.7.7,0,0,0,.7.7h3.058a3.839,3.839,0,0,1,3.858,3.4,3.77,3.77,0,0,1-3.748,4.129h-4.213a.7.7,0,0,0-.7.7v2.785a.7.7,0,0,0,.7.7h4.213a7.951,7.951,0,0,0,7.936-8.249A8.071,8.071,0,0,0,1137.136,1232.116Z"
                          transform="translate(-1057.112 -1224.868)"
                          fill="#434148"
                        ></path>
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M1075.622,1240.953a8.013,8.013,0,1,0-8.013,8.014A8.022,8.022,0,0,0,1075.622,1240.953Zm-8.013,3.836a3.836,3.836,0,1,1,3.836-3.836A3.841,3.841,0,0,1,1067.609,1244.79Z"
                          transform="translate(-1009.636 -1225.405)"
                          fill="#434148"
                        ></path>
                        <path
                          id="Path_4"
                          data-name="Path 4"
                          d="M993.088,1237.935a3.311,3.311,0,0,1-3.534,3.3,3.385,3.385,0,0,1-3.08-3.416v-1.482a.664.664,0,0,0-.664-.664h-3.138a.375.375,0,0,0-.376.375h0a5.145,5.145,0,0,1-4.471,5.162,5.054,5.054,0,0,1-5.624-5.016v-.2a.674.674,0,0,0-.674-.674H968.7a.674.674,0,0,0-.674.674h0a9.353,9.353,0,0,0,9.132,9.42,9.2,9.2,0,0,0,6.753-2.848,7.474,7.474,0,0,0,6.33,2.835,7.6,7.6,0,0,0,7.026-7.642v-3.158a.674.674,0,0,0-.674-.674h-2.829a.674.674,0,0,0-.674.674Z"
                          transform="translate(-949.942 -1226.052)"
                          fill="#434148"
                        ></path>
                        <rect
                          id="Rectangle_1"
                          data-name="Rectangle 1"
                          width="12.129"
                          height="4.034"
                          rx="2.017"
                          transform="translate(28.334 23.56)"
                          fill="#434148"
                        ></rect>
                        <path
                          id="Path_5"
                          data-name="Path 5"
                          d="M1136.642,1216.031a2.369,2.369,0,1,0-2.369-2.369A2.369,2.369,0,0,0,1136.642,1216.031Z"
                          transform="translate(-1058.319 -1211.294)"
                          fill="#434148"
                        ></path>
                        <path
                          id="Path_6"
                          data-name="Path 6"
                          d="M1042.766,1277.965a2.369,2.369,0,1,0,2.369,2.369A2.369,2.369,0,0,0,1042.766,1277.965Z"
                          transform="translate(-997.121 -1254.757)"
                          fill="#434148"
                        ></path>
                        <circle
                          id="Ellipse_1"
                          data-name="Ellipse 1"
                          cx="2.369"
                          cy="2.369"
                          r="2.369"
                          transform="translate(8.723 15.971)"
                          fill="#434148"
                        ></circle>
                        <path
                          id="Path_7"
                          data-name="Path 7"
                          d="M926.792,1250.154a6.915,6.915,0,0,1-.261-13.79.7.7,0,0,0,.637-.691v-2.794a.7.7,0,0,0-.74-.7,11.092,11.092,0,1,0,11.807,11.807.7.7,0,0,0-.7-.74h-2.794a.7.7,0,0,0-.691.637A6.923,6.923,0,0,1,926.792,1250.154Z"
                          transform="translate(-916.076 -1224.91)"
                          fill="#434148"
                        ></path>
                      </g>
                      <g
                        id="Group_2"
                        data-name="Group 2"
                        transform="translate(776.454 470.634)"
                      >
                        <path
                          id="Path_8"
                          data-name="Path 8"
                          d="M88.136-995.065a12.8,12.8,0,0,0-12.787,12.787A12.8,12.8,0,0,0,88.136-969.49a12.8,12.8,0,0,0,12.787-12.787A12.8,12.8,0,0,0,88.136-995.065Zm0,20.689a7.911,7.911,0,0,1-7.9-7.9,7.911,7.911,0,0,1,7.9-7.9,7.911,7.911,0,0,1,7.9,7.9A7.911,7.911,0,0,1,88.136-974.375Z"
                          transform="translate(-71.63 995.065)"
                          fill="#651fff"
                        ></path>
                        <path
                          id="Path_9"
                          data-name="Path 9"
                          d="M69.91-940.53a3.315,3.315,0,0,0-3.315,3.315A3.315,3.315,0,0,0,69.91-933.9a3.315,3.315,0,0,0,3.315-3.315A3.315,3.315,0,0,0,69.91-940.53Z"
                          transform="translate(-66.595 963.193)"
                          fill="#ff9100"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="header__search-container header__search-container--desktop">
              <div className="search-box search-box-results">
                <div
                  className="search-box__search search-box__search--icon"
                  aria-hidden="true"
                >
                  <svg width="24" height="24" fill="none">
                    <path
                      d="M13.155 16.31a5.473 5.473 0 0 1-5.466-5.467 5.473 5.473 0 0 1 5.466-5.466 5.472 5.472 0 0 1 5.466 5.466 5.474 5.474 0 0 1-5.466 5.466zm0-14.31a8.855 8.855 0 0 0-8.845 8.845 8.855 8.855 0 0 0 8.845 8.845c4.883-.006 8.838-3.962 8.845-8.845A8.856 8.856 0 0 0 13.155 2zM4.292 17.392a2.293 2.293 0 1 0 .001 4.585 2.293 2.293 0 0 0 0-4.585z"
                      fill="#939598"
                    ></path>
                  </svg>
                </div>
                <div className="search-box-results__input search-box-results__input--rtl">
                  <input type="search" value="پروژه های کارآموزی" />
                </div>
              </div>
            </div>
          </div>
          <div className="search-navigation search-navigation--desktop">
            <div
              role="presentation"
              className="search-navigation__tab search-navigation__tab--active"
            >
              همه
            </div>
            <div role="presentation" className="search-navigation__tab">
              تصویر
            </div>
            <div role="presentation" className="search-navigation__tab">
              ویدئو
            </div>
            <div role="presentation" className="search-navigation__tab">
              بازار
            </div>
            <div role="presentation" className="search-navigation__tab">
              آوا
            </div>
            <div role="presentation" className="search-navigation__tab">
              خبر
            </div>
          </div>
        </div>
      </div>
      <div id="result" className="results-container results-container--desktop">
        <div className="content">
          <div className="search-tools">
            {Object.entries(apps).map((app) => {
              const active = app[0] === props.activeApp ? " active" : "";
              return (
                <button
                  className={"zarebin-button" + active}
                  onClick={() => props.setActiveApp(app[0])}
                  key={app[0]}
                >
                  {app[0]}
                </button>
              );
            })}
          </div>
          <div aria-hidden="true">{props.children}</div>
          <div className="page-results">
            {Array.apply(null, { length: 8 }).map((i) => (
              <div className="card-wrapper" aria-hidden="true" key={i}>
                <div className="card-container rtl number">
                  <div className="card-container__inner-container">
                    <div className="link-container">
                      <a
                        className="link"
                        href="https://fa.wikipedia.org/wiki/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86"
                      >
                        <div className="card-container__formatted-url">
                          <div
                            className="card-container__formatted-url__addresses"
                            data-isltr="false"
                          >
                            <span>https://fa.wikipedia.org</span>
                            <span className="inner-url"> › wiki</span>
                            <span className="inner-url"> › ایران</span>
                          </div>
                        </div>
                        <div className="card-container__url">
                          ایران - ویکی‌پدیا، دانشنامهٔ آزاد
                        </div>
                      </a>
                    </div>
                    <div className="desc-container">
                      <div className="card-container__desc-row">
                        <div>
                          <div className="desc">
                            <em>ایران</em> با نام رسمی جمهوری اسلامی{" "}
                            <em>ایران</em>، کشوری در آسیای غربی است. این کشور با
                            ۱٬۶۴۸٬۱۹۵ کیلومتر مربع پهناوری، دومین کشور بزرگ
                            خاورمیانه است. <em>ایران</em> از شمال غرب&nbsp;...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zarebin;
