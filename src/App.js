import './index.css';

import React from "react";
function App() {
    const works = [
        {
    id: 0,
            category: 'Маркетинг',
            title: '«Натали» — Ивановский трикотаж оптом',
            kindOfWork: 'Редизайн сайта, поддержка сайта',
            img: 'linear-gradient(90deg, rgba(161,140,209,1) 0%, rgba(251,194,235,1) 100%)'
        },
        {
            id: 1,
            category: 'ВЕБ РАЗРАБОТКА',
            title: 'Podium — эротический массаж',
            kindOfWork: 'Разработка, редизайн',
            img: 'linear-gradient(90deg, rgba(255,154,158,1) 0%, rgba(250,208,196,1) 100%)'
        },
        {
            id: 2,
            category: 'ВЕДЕНИЕ РЕКЛАМНОЙ КОМПАНИИ',
            title: 'Аудит отдела маркетинга и продаж для Название бренда длинное название...',
            kindOfWork: 'Редизайн сайта, поддержка сайта',
            img: 'linear-gradient(90deg, rgba(255,236,210,1) 0%, rgba(252,182,159,1) 100%'
        },
        {
            id: 3,
            category: 'ВЕДЕНИЕ ГРУПП В СОЦ СЕТЯХ',
            title: 'Аудит отдела маркетинга и продаж для Название бренда',
            kindOfWork: 'Аудит, маркетинг сюда кратко теги',
            img: 'linear-gradient(90deg, rgba(212,252,121,1) 0%, rgba(150,230,161,1) 100%)'
        },
        {
            id: 4,
            category: 'ОПТИМИЗАЦИЯ SEO САЙТА',
            title: 'Аудит отдела маркетинга и продаж для Название бренда',
            kindOfWork: 'Аудит, маркетинг сюда кратко теги',
            img: 'linear-gradient(90deg, rgba(253,251,251,1) 0%, rgba(235,237,238,1) 100%)'
        },
        {
            id: 5,
            category: 'СОЗДАНИЕ РЕКЛАМНОЙ КОМПАНИИ',
            title: 'Аудит отдела маркетинга и продаж для Название бренда',
            kindOfWork: 'Редизайн сайта, поддержка сайта',
            img: 'linear-gradient(90deg, rgba(255,241,235,1) 0%, rgba(172,224,249,1) 100%)'
        },
    ]
    const [nameClient, setNameClient] = React.useState('')
    const [contactsOfClient, setContactsOfClient] = React.useState('')
    const [TSOfClient, setTSOfClient] = React.useState('')
    const [isSent, setIsSent] = React.useState(false)

    const onClickSendClientInfo = () => {
        if (nameClient.trim().length > 0 && contactsOfClient.trim().length > 0 && TSOfClient.trim().length > 0) {
            alert('отправлено')
            setTSOfClient('')
            setContactsOfClient('')
            setNameClient('')
            setIsSent(true)
        }
        else {
            alert('вы ввели не все необходимые данные')
            setTSOfClient('')
            setContactsOfClient('')
            setNameClient('')
            setIsSent(true)
        }

    }
    React.useEffect(() => {
        setIsSent(false)
        console.log(isSent)
    }, [isSent])
  return (
    <div className="App">
        <header className="header">
            <div className="logo">
                <a href="">
                    <svg width="100" height="45" viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.3517 16.8408C93.0692 13.7458 94.4444 9.86175 94.8928 8.648C95.0423 8.40525 95.2216 8.16249 95.3711 7.8894C96.8659 6.06877 97.2844 3.9447 97.2844 3.9447C96.9556 2.73095 95.2216 1.63857 95.2216 1.63857C93.398 3.79298 91.8135 8.43559 90.7672 12.0465C88.5549 14.6864 86.3726 16.8712 86.3726 16.8712C86.8509 13.3209 90.0497 6.49358 89.9899 5.15845C89.9301 3.82332 87.4189 2.30613 87.4189 2.30613C87.4189 2.30613 87.6282 4.12676 86.3726 7.16115C85.7746 8.58731 84.9376 10.8328 84.3098 12.9568C82.3367 16.416 80.3934 18.4187 80.3934 18.4187C79.2873 16.9926 77.1946 12.1072 77.1946 12.1072L79.6161 9.49763C79.6161 9.49763 81.0511 9.67969 82.1274 9.22453C83.2036 8.76937 84.7881 5.64396 84.7881 5.64396C84.7582 4.9157 83.2933 3.64126 83.2933 3.64126C81.081 5.24949 77.5235 9.55831 75.939 11.5307C76.0586 11.0148 76.2081 10.499 76.3575 9.98312C78.7193 6.19014 80.2739 2.63991 79.8254 1.09238C79.7955 0.971003 79.7058 0.849628 79.6161 0.78894C79.0481 0.0303438 78.5399 0 78.5399 0C78.5399 0 76.8359 0.728253 73.5773 11.3789C72.8299 10.1348 72.6206 8.83006 72.6206 7.67699C73.368 6.1598 73.1886 4.49089 73.1886 4.49089C73.1886 4.49089 72.9494 3.48954 70.8867 2.7006C70.8867 2.7006 67.7476 7.82871 72.4711 13.503C69.2125 17.9939 66.0436 20.3607 66.0436 20.3607C64.6684 19.4807 62.9045 13.7761 62.9045 13.7761L63.8612 12.5624C63.8612 12.5624 65.1766 12.7141 66.2528 12.2589C67.3291 11.8038 68.4651 9.01212 68.4651 9.01212C68.4352 8.28387 67.2693 7.00943 67.2693 7.00943C65.1168 8.58731 62.486 11.9251 61.2603 13.5637C61.4696 12.7748 61.7087 11.9555 61.9479 11.1362C63.7117 8.16249 65.0271 5.21914 65.2364 2.82198C64.5787 1.75994 63.921 1.7296 63.921 1.7296C63.921 1.7296 62.2169 2.60957 58.9583 13.3816C58.2109 12.2589 57.7924 11.1969 57.613 10.3169C57.9419 9.67969 58.1512 8.92109 58.1512 8.01078C58.1512 8.01078 57.4038 6.46324 55.61 6.12946C55.61 6.12946 54.4441 7.8894 55.1915 10.7417C54.6235 11.4093 53.7266 11.9858 52.3215 12.3499C51.5741 9.71003 49.332 8.19284 48.465 8.07146C48.465 8.07146 46.4919 8.648 45.2064 11.0148C45.2064 11.0148 45.3857 11.3183 45.7146 11.7127C42.5457 14.7168 40.9911 19.2077 40.3932 21.4531C38.3005 23.5772 36.2676 24.973 36.2676 24.973C37.0449 21.6655 38.0314 18.9042 38.8685 16.8408C39.9747 14.2009 40.8715 12.7141 40.8715 12.7141C40.5427 11.561 39.018 10.59 38.8087 10.4686L38.7788 10.4383C38.7489 10.4686 35.4305 13.503 32.7399 18.2367C33.6069 15.4754 34.5337 12.9568 35.5202 11.0755C34.8027 10.0135 33.6368 9.31556 33.6368 9.31556C29.4215 18.176 25.4155 33.8637 25.4155 33.8637C25.6547 35.4113 28.1659 37.6264 28.1659 37.6264C28.1659 37.6264 28.8535 33.8637 29.9298 29.0087C31.2751 24.6392 33.3378 19.4201 36.0284 15.8698C35.9089 16.1733 35.7893 16.5071 35.6996 16.8105C34.2945 20.8766 33.4275 25.0337 33.4275 25.0337C33.7863 26.4295 35.6398 27.977 35.6398 27.977C35.6398 27.977 38.0613 25.9136 40.2437 23.3041C41.4096 27.0667 43.4126 27.0971 43.4126 27.0971C49.4216 22.8489 51.7834 15.6574 52.3514 13.594C53.4874 13.3513 54.7132 12.9265 55.7595 12.2589C56.2079 13.2603 56.9254 14.3526 57.9419 15.5057C56.178 17.9939 54.8626 19.2987 54.8626 19.2987C54.8626 19.2987 53.3978 18.9953 52.3215 19.3897C51.2154 19.7842 49.4515 22.7882 49.4515 22.7882C49.4216 23.5165 51.3051 25.0944 51.3051 25.0944C51.3051 25.0944 54.4441 21.6959 57.7625 17.2656C56.9254 19.8752 56.477 21.6048 56.477 21.6048C56.6564 23.1524 59.0779 24.2751 59.0779 24.2751C59.0779 24.2751 59.6459 20.209 60.8418 15.2933C62.486 20.8766 64.9972 23.1827 64.9972 23.1827C66.7013 22.4241 69.5414 19.3897 72.3216 15.7788C72.0227 16.8408 71.7536 17.9332 71.4248 19.147C71.3949 19.2683 71.365 19.329 71.365 19.329C71.5444 20.8766 73.8164 22.1207 73.8164 22.1207C73.8164 22.1207 74.3246 18.3277 75.4308 13.594C76.5967 18.1153 79.5265 21.4228 79.5265 21.4228C81.2006 19.9359 82.4861 18.2973 83.5026 16.6891C83.4727 16.9926 83.4727 17.2656 83.5026 17.5084C83.5026 17.5084 84.1603 19.1773 85.5355 19.8752C85.5355 19.8752 87.5983 17.7815 89.9899 15.0202C89.7209 16.1126 89.5714 16.8105 89.5714 16.8105C89.9002 18.2063 91.7239 19.7842 91.7239 19.7842C91.7239 19.7842 97.3143 16.1733 99.138 11.2272L99.706 9.52797C97.1648 13.5637 92.3517 16.8408 92.3517 16.8408ZM43.1137 24.882C42.8446 20.7855 45.8342 16.234 47.8073 13.6851C48.0764 13.8368 48.3753 13.9885 48.6743 14.0492C48.6743 14.0492 49.5412 14.0795 50.7371 13.9278C47.5382 22.4848 43.1137 24.882 43.1137 24.882Z" fill="#D22020"/>
                        <path d="M48.9733 29.2515C48.7341 29.0391 47.9568 28.5536 45.8343 28.9481C42.6952 29.5246 38.0315 30.9811 37.1048 31.2846C36.9852 31.3149 36.8656 31.4059 36.7759 31.497C36.5069 31.8004 35.879 33.0142 35.4007 35.4113L35.3409 35.6844L35.5801 35.5934C35.7595 35.5327 54.0256 29.2515 70.8269 27.4612C71.0362 27.613 71.7836 27.9467 74.1454 27.9467H74.1753C76.9854 27.9467 82.4563 27.4309 82.5161 27.4005H82.546L82.5759 27.3702C82.6058 27.3702 84.3397 26.0958 85.6252 24.1234L85.7747 23.8807H85.4758C85.3562 23.911 69.6909 24.1234 48.9733 29.2515Z" fill="#D22020"/>
                        <path d="M23.6815 34.8652C23.3228 34.5921 22.8146 34.4707 22.1569 34.5314C21.9775 34.5617 21.7383 34.5617 21.4991 34.6224C23.2929 27.4309 27.6875 10.7721 31.275 4.55165C30.5575 3.3379 28.4648 2.51861 28.4648 2.51861V2.54896C28.405 2.51861 28.3751 2.51861 28.3751 2.51861C22.3661 11.3487 5.0566 34.8652 5.0566 34.8652C5.0566 35.8665 5.86378 36.8678 6.52148 37.5354C3.92057 38.0816 1.55882 38.5368 0.00425181 38.8099C0.00425181 38.8099 -0.0555393 39.4167 0.273312 40.0843C0.602163 41.207 1.37945 42.7546 3.0536 43.4221C5.86378 44.5145 5.7442 45 5.7442 45C5.7442 45 7.35856 43.2704 6.64106 41.7229C10.5873 41.025 15.819 39.9933 19.6157 39.2347C18.9879 41.3587 21.0208 41.9656 21.0208 41.9656C21.6187 39.8415 24.6681 38.2637 24.6681 38.2637C24.6681 38.2637 24.9969 35.8058 23.6815 34.8652ZM16.955 33.7121C17.0148 34.1672 17.3138 34.7134 17.7024 35.2293C14.8922 35.7755 11.3347 36.5037 7.98636 37.1713C10.3481 33.4086 18.5096 20.4215 24.5186 11.3183C20.6322 21.4228 16.955 33.7121 16.955 33.7121Z" fill="#D22020"/>
                    </svg>
                </a>
            </div>
            <nav className="nav">
                <ul>
                    <a href="#portfolio">
                        <li>
                        Портфолио
                        </li>
                    </a>
                    <a href="#scrollToAbout">
                        <li>
                            О компании
                        </li>
                    </a>
                    <a href="#scrollToMakeRequest">
                        <li>
                            Контакты
                        </li>
                    </a>
                </ul>
                <button>
                    <span> Оставить заявку</span>
                </button>
            </nav>
        </header>
      <div className="main">
          <div className='about'>
              Маркетинговое агентство. <br/>
              С нами вы растете как на <br/>
              дрожжах
          </div>
          <div className="mainBottom">
              <svg className='scrollDown' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.3028 24.8949L24 33.5921L32.6972 24.8949L31.0286 23.217L25.2118 29.043L25.2118 14.4079L22.7882 14.4079L22.7882 29.043L16.9621 23.217L15.3028 24.8949Z" fill="#ADB5BD"/>
              </svg>
              <div className="messengers">
                  <div className='whatsapp'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M17.4858 3.00686C16.5633 2.08269 15.4657 1.34989 14.2566 0.850919C13.0475 0.351949 11.751 0.096727 10.442 0.100038C4.95342 0.100038 0.485315 4.54582 0.483097 10.0106C0.483097 11.7571 0.941221 13.4617 1.81199 14.9653L0.399902 20.1L5.67887 18.7211C7.13909 19.5122 8.77504 19.9271 10.4376 19.9278H10.442C15.9295 19.9278 20.3976 15.482 20.3999 10.0172C20.4036 8.71504 20.148 7.42503 19.6479 6.22176C19.1477 5.01848 18.4129 3.92579 17.4858 3.00686ZM13.2817 11.2791C13.5102 11.3619 14.7326 11.9603 14.9822 12.085C15.0304 12.1091 15.0756 12.1309 15.1176 12.1511C15.2909 12.2347 15.4092 12.2918 15.4592 12.3754C15.5213 12.4791 15.5213 12.9748 15.3139 13.5533C15.1065 14.1318 14.1126 14.6595 13.6345 14.7302C13.2052 14.7931 12.6628 14.8207 12.0671 14.6319C11.7066 14.5171 11.2429 14.3648 10.6484 14.1097C8.31345 13.1058 6.73579 10.8526 6.44032 10.4306C6.41995 10.4016 6.40568 10.3812 6.39767 10.3705L6.39442 10.3662C6.25871 10.1854 5.38159 9.01684 5.38159 7.80813C5.38159 6.66761 5.94399 6.07038 6.20348 5.79482C6.22129 5.77591 6.23768 5.75851 6.25236 5.74255C6.33575 5.64826 6.43781 5.57213 6.55215 5.51894C6.66649 5.46575 6.79063 5.43664 6.9168 5.43344C7.07547 5.43287 7.23414 5.43581 7.39268 5.44227C7.41016 5.44303 7.42833 5.44286 7.44709 5.44269C7.59258 5.44137 7.7739 5.43972 7.95174 5.8651C8.0213 6.03133 8.12355 6.27887 8.23107 6.53921C8.44419 7.0552 8.67806 7.62144 8.71935 7.70435C8.78258 7.828 8.82362 7.97262 8.74043 8.13822C8.72781 8.16334 8.71616 8.18701 8.70505 8.20959C8.64287 8.33593 8.59735 8.42843 8.49195 8.55112C8.45054 8.59932 8.40778 8.65133 8.36501 8.70334C8.27947 8.80736 8.19393 8.91139 8.11924 8.98499C7.9939 9.10863 7.86411 9.24222 8.00943 9.49062C8.15474 9.73902 8.6539 10.5493 9.39378 11.2062C10.1894 11.9122 10.881 12.2106 11.231 12.3616C11.2992 12.391 11.3544 12.4148 11.3949 12.435C11.6434 12.5586 11.7887 12.5387 11.934 12.3731C12.0793 12.2075 12.5563 11.65 12.7227 11.4027C12.8891 11.1554 13.0543 11.1963 13.2817 11.2791Z" fill="#8D959D"/>
                      </svg>
                        <span >
                      WHATSAPP
                        </span>
                  </div>
                  <div  className='telegram'>
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.22615 7.90355L13.1395 2.85766C14.3155 2.33205 18.3036 0.650082 18.3036 0.650082C18.3036 0.650082 20.1443 -0.0857776 19.9909 1.70131C19.9398 2.43717 19.5307 5.01267 19.1217 7.79843L17.8435 16.0506C17.8435 16.0506 17.7412 17.2595 16.872 17.4697C16.0028 17.68 14.5711 16.7339 14.3155 16.5236C14.111 16.3659 10.4807 14.0007 9.15133 12.8443C8.79341 12.529 8.38437 11.8982 9.20246 11.1624C11.0431 9.42783 13.2417 7.27281 14.5711 5.90622C15.1847 5.27548 15.7982 3.80376 13.2417 5.59085L6.03238 10.5842C6.03238 10.5842 5.2143 11.1098 3.6804 10.6367C2.14649 10.1637 0.356936 9.53295 0.356936 9.53295C0.356936 9.53295 -0.870188 8.74453 1.22615 7.90355Z" fill="#8D959D"/>
                      </svg>
                      <span>
                      TELEGRAM
                  </span>
                  </div>
                </div>
          </div>
      </div>
      <div id={'portfolio'} >
          <div className="title">
              <h2>Портфолио</h2>
              <a href="">СМОТРЕТЬ ВСЕ <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.94461 13.3636L15.3083 6.99999L8.94461 0.636353L7.85086 1.7301L12.3537 6.21874H0.691772V7.78124H12.3537L7.85086 12.2841L8.94461 13.3636Z" fill="#D22020"/>
              </svg>
              </a>
          </div>
          <div className="gridPortfolio">
              {works.map((el) =>
                  <div className="exampleOfWork" key={el.id}>
                      <div className='imgOfExample' style={{background: el.img }}>
                          <div className={'categoryOfWork'}>
                              <div>
                                  <span>{el.category}</span>
                              </div>
                          </div>
                      </div>
                      <div className="exampleInfo">
                          <h4>{el.title}</h4>
                          <span>Редизайн сайта, поддержка сайта</span>
                      </div>
                  </div>)}
          </div>
          <div className="allCases">
              <button>
                  <a  href="">
                      все кейсы
                  </a>
              </button>
          </div>
      </div>
        <div id={'scrollToAbout'}></div>
      <div id={'aboutUs'} >
          <h2>О компании</h2>
          <div className="ourStaff">
              <div>
                  <span className={'number'}>5</span> отделов
              </div>
              <div>
                  <span className={'number'}>5</span> маркетологов
              </div>
              <div>
                  <span className={'number'}>3</span> дизайнера
              </div>
              <div>
                  <span className={'number'}>3</span> копирайтера
              </div>
              <div>
                  <span className={'number'}>7</span> разработчиков
              </div>
          </div>
          <div className="infoAndPhoto">
                <div className="info">
                    <p>
                        Мы — команда специалистов с опытом, энтузиазмом и лёгким недосыпом. <br/>
                        Маркетинговое агентство «Дрожжи» было основано <br/>
                        в 2015 году, как компания, где можно получить комплексное интернет- и <br/>
                        oффлайн-продвижение. На сегодняшний день мы не зависим ни от ниши, <br/>
                        ни от географии, ни от специфики продукта. <br/>
                        В портфолио компании сотни успешных кейсов, способных помочь вам в <br/>
                        реализации своей идеи.
                    </p>
                    <div className="statistic">
                        <div>
                            <p className={'number'}>1000+</p>
                            <p>реализованных <br/>проектов</p>
                        </div>
                        <div>
                            <p className={'number'}>92</p>
                            <p>клиента <br/> доверили нам свои проекты</p>
                        </div>
                        <div>
                            <p className={'number'}>5+</p>
                            <p>лет <br/>успешной работы</p>
                        </div>

                    </div>
                    <div>
                        <button>
                            <a id={'scrollToMakeRequest'} href="#">
                                подробнее
                            </a>
                        </button>
                    </div>
                </div>
                <div className='photo'>
                    <img  src={require('./img/weAre.png')} alt="HERE WE ARE"/>
                </div>
          </div>
      </div>

        <div id={'makeRequest'} >
            <h2>Оставьте заявку</h2>
            <div className={'d-flex'}>
                <div>
                    <div className='manager'>
                        <img src={require('./img/photoDija.png')} alt=""/>
                        <h4>Юлия Дижа</h4>
                        <span>Поможет запустить ваш проект</span>
                    </div>
                    <div className="briefing">
                        <h4>Скачать брифинги на:</h4>
                        <div>
                            <a href="">разработку логотипа
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 0.75C2 0.335786 2.33579 0 2.75 0H10.75C10.8517 0 10.9487 0.0202391 11.0371 0.056909C11.1235 0.0926741 11.2046 0.145297 11.2754 0.214777L11.2852 0.224588C11.4181 0.359905 11.5 0.545384 11.5 0.75V8.75C11.5 9.16421 11.1642 9.5 10.75 9.5C10.3358 9.5 10 9.16421 10 8.75V2.56066L1.28033 11.2803C0.987437 11.5732 0.512563 11.5732 0.21967 11.2803C-0.0732233 10.9874 -0.0732233 10.5126 0.21967 10.2197L8.93934 1.5H2.75C2.33579 1.5 2 1.16421 2 0.75Z" fill="#D22020" fill-opacity="0.4"/>
                                </svg>
                            </a>
                            <br/>
                            <span></span>

                            <a href="">разработку сайта
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 0.75C2 0.335786 2.33579 0 2.75 0H10.75C10.8517 0 10.9487 0.0202391 11.0371 0.056909C11.1235 0.0926741 11.2046 0.145297 11.2754 0.214777L11.2852 0.224588C11.4181 0.359905 11.5 0.545384 11.5 0.75V8.75C11.5 9.16421 11.1642 9.5 10.75 9.5C10.3358 9.5 10 9.16421 10 8.75V2.56066L1.28033 11.2803C0.987437 11.5732 0.512563 11.5732 0.21967 11.2803C-0.0732233 10.9874 -0.0732233 10.5126 0.21967 10.2197L8.93934 1.5H2.75C2.33579 1.5 2 1.16421 2 0.75Z" fill="#D22020" fill-opacity="0.4"/>
                                </svg>
                            </a>
                            <br/>
                            <a href="">разработку лендинга
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 0.75C2 0.335786 2.33579 0 2.75 0H10.75C10.8517 0 10.9487 0.0202391 11.0371 0.056909C11.1235 0.0926741 11.2046 0.145297 11.2754 0.214777L11.2852 0.224588C11.4181 0.359905 11.5 0.545384 11.5 0.75V8.75C11.5 9.16421 11.1642 9.5 10.75 9.5C10.3358 9.5 10 9.16421 10 8.75V2.56066L1.28033 11.2803C0.987437 11.5732 0.512563 11.5732 0.21967 11.2803C-0.0732233 10.9874 -0.0732233 10.5126 0.21967 10.2197L8.93934 1.5H2.75C2.33579 1.5 2 1.16421 2 0.75Z" fill="#D22020" fill-opacity="0.4"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sentCallback">
                    <div className="group small">
                        <span>Ваше имя *</span>
                        <input onChange={event => setNameClient(event.target.value)}  value={nameClient} type="text" required="required"/>
                    </div>
                    <div className="group big">
                        <span>Телефон или мессенджер *</span>
                        <input onChange={event => setContactsOfClient(event.target.value)}  value={contactsOfClient} type="text" required="required"/>
                    </div>
                    <div className=" big group ">
                        <span>Краткое описание задачи *</span>
                        <input onChange={event => setTSOfClient(event.target.value)} value={TSOfClient} type="text" required="required"/>
                    </div>
                    <button onClick={() => {
                        onClickSendClientInfo()
                    } }>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
        <footer>
            <div>
                <span>
                    2015-2021 © Дрожжи™
                </span>
                <a href="">
                    ООО «РВБ-Маркетинг»
                </a>
                <a href="">
                Политика конфиденциальности
                </a>
                <br/>
                <img src={require('./img/logoGrey.png')} alt="HERE WE ARE"/>
            </div>

        </footer>
    </div>
  );
}

export default App;
