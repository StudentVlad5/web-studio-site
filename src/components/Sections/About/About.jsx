import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import { Container, Title } from 'components/baseStyles/CommonStyle.styled';
import {
  ContainerForAbout,
  ContainerForIcon,
  Img,
  ItemImgText,
  PaddingItem,
  ContainerForTeam,
  ItemWrap,
  TitleItem,
  JobItem,
  SocialsList,
  SocialsListItem,
  ContainerForAboutForMobile,
  ContainerForIconTablet,
  ImgForTeam,
  ContainerForTeamForMobile,
  ContainerForTeamForTablet,
  TitleTeam,
  ContainerForIconText,
  ContainerForAboutItem,
  ImgForTeamColor,
  ImgWrap,
  SocialsListLink,
} from './About.styled';

import chartbar from '../../../images/about/mdi_light_chart-bar.svg';
import chartpie from '../../../images/about/mdi_light_chart-pie.svg';
import flask from '../../../images/about/mdi_light_flask.svg';
import gift from '../../../images/about/mdi_light_gift.svg';

import heorhii from '../../../images/about/team/heorhii_blackAndWhite.webp';
import heorhiiColor from '../../../images/about/team/heorhii.webp';
import julia from '../../../images/about/team/julia_blackAndWhite.webp';
import juliaColor from '../../../images/about/team/julia.webp';
import vlad from '../../../images/about/team/vlad_blackAndWhite.webp';
import vladColor from '../../../images/about/team/vlad_warm_color.webp';

import sprite from '../../../images/sprite.svg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  Aos.init();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container>
      <Title>{t('About')}</Title>
      <ContainerForAbout>
        <ContainerForAboutItem>
          <p>
            {t(
              'Our approach to project delivery is a holistic approach that includes strategic planning, creative design, rapid website development and an emphasis on building lasting relationships with clients. We work tirelessly to ensure the success and growth of our clients.'
            )}
          </p>
          <p>
            {t(
              'At Brand Maze, we pride ourselves on our ability to create exceptional brands that capture attention, demonstrate quality and leave a lasting impression. Our team of talented professionals work together, combining strategy, creativity and technology to achieve the best results for our clients.'
            )}
          </p>
        </ContainerForAboutItem>
        <ContainerForIconText>
          {t(
            'Join us at Brand Maze and let us be your trusted partner in developing your brand. Together we can create the magic that will make your brand stand out and attract more success.'
          )}
        </ContainerForIconText>
      </ContainerForAbout>
      <ContainerForAboutForMobile>
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          loopPreventsSliding={true}
          loopedSlides={1}
        >
          <SwiperSlide>
            <p style={{ width: '80%', marginBottom: '20px' }}>
              {t(
                'Our approach to project delivery is a holistic approach that includes strategic planning, creative design, rapid website development and an emphasis on building lasting relationships with clients. We work tirelessly to ensure the success and growth of our clients.'
              )}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p style={{ width: '80%', marginBottom: '20px' }}>
              {t(
                'At Brand Maze, we pride ourselves on our ability to create exceptional brands that capture attention, demonstrate quality and leave a lasting impression. Our team of talented professionals work together, combining strategy, creativity and technology to achieve the best results for our clients.'
              )}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p style={{ width: '80%', marginBottom: '20px' }}>
              {t(
                'Join us at Brand Maze and let us be your trusted partner in developing your brand. Together we can create the magic that will make your brand stand out and attract more success.'
              )}
            </p>
          </SwiperSlide>
        </Swiper>
      </ContainerForAboutForMobile>
      <ContainerForIcon>
        <ContainerForIconTablet className="containerJustifyEnd">
          <ItemImgText>
            <Img src={gift} alt="gift" />
            <PaddingItem>{t('Experienced team')}</PaddingItem>
          </ItemImgText>
          <ItemImgText>
            <Img src={chartpie} alt="chartpie" />
            <PaddingItem>{t('Business Strategy')}</PaddingItem>
          </ItemImgText>
        </ContainerForIconTablet>
        <ContainerForIconTablet className="containerJustifyStart">
          <ItemImgText>
            <Img src={chartbar} alt="chartbar" />
            <PaddingItem>{t('Amazing Growth')}</PaddingItem>
          </ItemImgText>
          <ItemImgText>
            <Img src={flask} alt="flask" />
            <PaddingItem>{t('Technical Supervision')}</PaddingItem>
          </ItemImgText>
        </ContainerForIconTablet>
      </ContainerForIcon>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TitleTeam>{t('OUR PROFESSIONAL TEAM')}</TitleTeam>
      </div>
      <ContainerForTeam>
        <ItemWrap data-aos="flip-up" data-aos-delay="150">
          <ImgWrap>
            <ImgForTeam src={vlad} alt="vlad" />
            <ImgForTeamColor src={vladColor} alt="vlad" />
          </ImgWrap>
          <TitleItem>{t('Vlad Popov')}</TitleItem>
          <JobItem>Full-Stack Developer</JobItem>
          <SocialsList>
            <SocialsListItem>
              <SocialsListLink
                href="https://github.com/StudentVlad5"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#github'}></use>
                </svg>
              </SocialsListLink>
            </SocialsListItem>
            <SocialsListItem>
              <SocialsListLink
                href="https://www.linkedin.com/in/vladyslav-popov-a491232a/"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#linkedin'}></use>
                </svg>
              </SocialsListLink>
            </SocialsListItem>
            <SocialsListItem>
              <SocialsListLink
                href="https://t.me/Vinforam"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#telegram'}></use>
                </svg>
              </SocialsListLink>
            </SocialsListItem>
            <SocialsListItem>
              <SocialsListLink href="mailto:vlad_np@ukr.net">
                <svg width="20" height="20">
                  <use href={sprite + '#envelop'}></use>
                </svg>
              </SocialsListLink>
            </SocialsListItem>
          </SocialsList>
        </ItemWrap>
        <ItemWrap data-aos="flip-up" data-aos-delay="150">
          <ImgWrap>
            <ImgForTeam src={julia} alt="julia" />
            <ImgForTeamColor src={juliaColor} alt="julia" />
          </ImgWrap>
          <TitleItem>{t('Julia Golban')}</TitleItem>
          <JobItem>Full-Stack Engineer</JobItem>
          <SocialsList>
            <SocialsListItem>
              <a
                href="https://github.com/JuliaGolban"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#github'}></use>
                </svg>
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a
                href="https://www.linkedin.com/in/julia-golban/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#linkedin'}></use>
                </svg>
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a
                href="https://www.t.me/JuliaGolban"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#telegram'}></use>
                </svg>
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a href="mailto:julia.j.shcherban@gmail.com">
                <svg width="20" height="20">
                  <use href={sprite + '#envelop'}></use>
                </svg>
              </a>
            </SocialsListItem>
          </SocialsList>
        </ItemWrap>
        <ItemWrap data-aos="flip-up" data-aos-delay="150">
          <ImgWrap>
            <ImgForTeam src={heorhii} alt="heorhii" />
            <ImgForTeamColor src={heorhiiColor} alt="heorhii" />
          </ImgWrap>
          <TitleItem>{t('Heorhii Rushchak')}</TitleItem>
          <JobItem>Full-Stack Developer</JobItem>
          <SocialsList>
            <SocialsListItem>
              <a
                href="https://github.com/Heorgii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#github'}></use>
                </svg>
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a
                href="https://www.linkedin.com/in/heorgii-rushchak-19884a245"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#linkedin'}></use>
                </svg>
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a
                href="https://t.me/heorhi1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#telegram'}></use>
                </svg>
              </a>
            </SocialsListItem>
            <SocialsListItem>
              <a href="mailto:rushchakheorgii@gmail.com">
                <svg width="20" height="20">
                  <use href={sprite + '#envelop'}></use>
                </svg>
              </a>
            </SocialsListItem>
          </SocialsList>
        </ItemWrap>
      </ContainerForTeam>
      <ContainerForTeamForMobile>
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          loopPreventsSliding={true}
          loopedSlides={1}
        >
          <SwiperSlide>
            <ItemWrap>
              <ImgWrap>
                <ImgForTeam src={vlad} alt="vlad" />
                <ImgForTeamColor src={vladColor} alt="vlad" />
              </ImgWrap>
              <TitleItem>Vlad Popov</TitleItem>
              <JobItem>Full-Stack Developer</JobItem>
              <SocialsList>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://github.com/StudentVlad5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#github'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://www.linkedin.com/in/vladyslav-popov-a491232a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#linkedin'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://t.me/Vinforam"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#telegram'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink href="mailto:vlad_np@ukr.net">
                    <svg width="20" height="20">
                      <use href={sprite + '#envelop'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
              </SocialsList>
            </ItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <ItemWrap>
              <ImgWrap>
                <ImgForTeam src={julia} alt="julia" />
                <ImgForTeamColor src={juliaColor} alt="julia" />
              </ImgWrap>
              <TitleItem>Julia Golban</TitleItem>
              <JobItem>Full-Stack Engineer</JobItem>
              <SocialsList>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://github.com/JuliaGolban"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#github'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://www.linkedin.com/in/julia-golban/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#linkedin'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://www.t.me/JuliaGolban"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#telegram'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink href="mailto:julia.j.shcherban@gmail.com">
                    <svg width="20" height="20">
                      <use href={sprite + '#envelop'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
              </SocialsList>
            </ItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <ItemWrap>
              <ImgWrap>
                <ImgForTeam src={heorhii} alt="heorhii" />
                <ImgForTeamColor src={heorhiiColor} alt="heorhii" />
              </ImgWrap>
              <TitleItem>Heorhii Rushchak</TitleItem>
              <JobItem>Full-Stack Developer</JobItem>
              <SocialsList>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#github'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#linkedin'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#telegram'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#envelop'}></use>
                  </svg>
                </SocialsListItem>
              </SocialsList>
            </ItemWrap>
          </SwiperSlide>
        </Swiper>
      </ContainerForTeamForMobile>
      <ContainerForTeamForTablet>
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
        >
          <SwiperSlide>
            <ItemWrap>
              <ImgWrap>
                <ImgForTeam src={vlad} alt="vlad" />
                <ImgForTeamColor src={vladColor} alt="vlad" />
              </ImgWrap>
              <TitleItem>Vlad Popov</TitleItem>
              <JobItem>Full-Stack Developer</JobItem>
              <SocialsList>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://github.com/StudentVlad5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#github'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://www.linkedin.com/in/vladyslav-popov-a491232a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#linkedin'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://t.me/Vinforam"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#telegram'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink href="mailto:vlad_np@ukr.net">
                    <svg width="20" height="20">
                      <use href={sprite + '#envelop'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
              </SocialsList>
            </ItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <ItemWrap>
              <ImgWrap>
                <ImgForTeam src={julia} alt="julia" />
                <ImgForTeamColor src={juliaColor} alt="julia" />
              </ImgWrap>
              <TitleItem>Julia Golban</TitleItem>
              <JobItem>Full-Stack Engineer</JobItem>
              <SocialsList>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://github.com/JuliaGolban"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#github'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://www.linkedin.com/in/julia-golban/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#linkedin'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink
                    href="https://www.t.me/JuliaGolban"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#telegram'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
                <SocialsListItem>
                  <SocialsListLink href="mailto:julia.j.shcherban@gmail.com">
                    <svg width="20" height="20">
                      <use href={sprite + '#envelop'}></use>
                    </svg>
                  </SocialsListLink>
                </SocialsListItem>
              </SocialsList>
            </ItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <ItemWrap>
              <ImgWrap>
                <ImgForTeam src={heorhii} alt="heorhii" />
              </ImgWrap>
              <TitleItem>Heorhii Rushchak</TitleItem>
              <JobItem>Full-Stack Developer</JobItem>
              <SocialsList>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#github'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#linkedin'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#telegram'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#envelop'}></use>
                  </svg>
                </SocialsListItem>
              </SocialsList>
            </ItemWrap>
          </SwiperSlide>
        </Swiper>
      </ContainerForTeamForTablet>
    </Container>
  );
};
