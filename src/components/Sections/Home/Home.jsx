import {
  List,
  ListItem,
  ListItemText,
  CompList,
  CompListItem,
  ItemTitle,
  ItemNumber,
  ItemDiscr,
  ConclusionText,
  ListBoxSwaper,
  ListItemTextSwiper,
  TitleHome,
  ListBox,
  SwiperSvg,
  ListItemImg,
} from './Home.styled';
import logo2 from '../../../images/home/logo2.svg';
// import brandBuild from '../../../images/home/brandBuild.webp';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import ph from '../../../images/home/ph.png';

export const Home = () => {
  Aos.init();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container>
      <TitleHome>{t('BUILDING BETTER BRANDS')}</TitleHome>
      <ListBox>
        <List>
          <ListItem>
            <ListItemImg src={ph} alt="" />

            <ListItemText>
              {t(
                'We work tirelessly to develop long-term relationships with our partners, just as you strive to create strong bonds with the customers who purchase your products or use your services'
              )}
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              {t(
                'We help create of exceptional brands. This is the embodiment of our business. Under one virtual roof, we do incredible things to achieve this goal:'
              )}
              <span> {t('building better brands')} </span>
            </ListItemText>

            <SwiperSvg width="240" height="240">
              <use href={logo2 + '#logo2'}></use>
            </SwiperSvg>
          </ListItem>
        </List>
      </ListBox>

      <ListBoxSwaper>
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
            <SwiperSvg width="240" height="240">
              <use href={logo2 + '#logo2'}></use>
            </SwiperSvg>
          </SwiperSlide>

          <SwiperSlide>
            <ListItemTextSwiper>
              {t(
                'We work tirelessly to develop long-term relationships with our partners, just as you strive to create strong bonds with the customers who purchase your products or use your services'
              )}
            </ListItemTextSwiper>
          </SwiperSlide>

          <SwiperSlide>
            <ListItemImg src={ph} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <ListItemTextSwiper>
              {t(
                'We help create of exceptional brands. This is the embodiment of our business. Under one virtual roof, we do incredible things to achieve this goal:'
              )}
              <span> {t('building better brands')} </span>
            </ListItemTextSwiper>
          </SwiperSlide>
        </Swiper>
      </ListBoxSwaper>

      <ConclusionText>
        <span>{t('At')} Brand Maze </span> -{' '}
        {t(
          'we carefully implement a well-designed process that helps us achieve excellence in everything we do'
        )}
      </ConclusionText>

      <CompList>
        <CompListItem data-aos="zoom-in-left" data-aos-delay="150">
          <ItemNumber>01</ItemNumber>
          <ItemTitle>{t('Logo')}</ItemTitle>
          <ItemDiscr>
            {t(
              'It is a key element, helps to establish brand identity, enhances recognition and contributes to creating a positive impression.'
            )}
          </ItemDiscr>
        </CompListItem>

        <CompListItem data-aos="zoom-in-right" data-aos-delay="250">
          <ItemNumber>02</ItemNumber>
          <ItemTitle>{t('Web design')}</ItemTitle>
          <ItemDiscr>
            {t(
              'It is responsible for creating an attractive and user-friendly interface that affects the first impression of the user.'
            )}
          </ItemDiscr>
        </CompListItem>

        <CompListItem data-aos="zoom-in-left" data-aos-delay="350">
          <ItemNumber>03</ItemNumber>
          <ItemTitle>{t('Web development')}</ItemTitle>
          <ItemDiscr>
            {t(
              'Allows you to create interactive and dynamic websites that attract customers, improve user interaction and achieve business goals.'
            )}
          </ItemDiscr>
        </CompListItem>

        <CompListItem data-aos="zoom-in-right" data-aos-delay="450">
          <ItemNumber>04</ItemNumber>
          <ItemTitle>Instagram</ItemTitle>
          <ItemDiscr>
            {t(
              'Allows you to effectively promote products or services, demonstrate a unique style, establish contacts with consumers and develop faithful to the brand.'
            )}
          </ItemDiscr>
        </CompListItem>

        <CompListItem data-aos="zoom-in-left" data-aos-delay="550">
          <ItemNumber>05</ItemNumber>
          <ItemTitle>TikTok</ItemTitle>
          <ItemDiscr>
            {t(
              'Allows you to create viral videos, maintain interactivity and communicate with consumers. To attract attention and create a positive image among a wide audience.'
            )}
          </ItemDiscr>
        </CompListItem>
      </CompList>
    </Container>
  );
};
