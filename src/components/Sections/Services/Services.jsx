import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdCheck } from 'react-icons/md';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';
import { ButtonLink } from 'components/baseStyles/Button.styled';
import {
  BoxSkills,
  DescriptionSkills,
  HeadingBox,
  Heading,
  HeadingSmall,
  Label,
  ListSkills,
  ListQuestions,
  ListBenefits,
  Number,
  NumberSmall,
  StepBenefits,
  Subtitle,
  SubtitleSkills,
  Text,
  TextCenter,
  TextSlider,
  TableData,
  TableHeading,
  WrapperBox,
  WrapperBoxSkills,
  WrapperText,
  DetailsWrapper,
  DetailsButton,
  DetailsList,
  DetailsItem,
} from './Services.styled';

export const Services = () => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(state => !state);

  const { t } = useTranslation();

  AOS.init();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container>
      <Title as="h1">{t('Services')}</Title>
      <WrapperBoxSkills>
        <BoxSkills>
          <SubtitleSkills>
            {t('Skills that we have mastered so far')}
          </SubtitleSkills>
          <DescriptionSkills>
            {t(
              'With our extensive experience and expertise, we offer a full range of services that include creating websites, Instagram accounts, TikTok pages, logos and more. We understand that each brand has its own unique history and values, which is why we approach each project individually, providing our clients with personalized solutions.'
            )}
          </DescriptionSkills>
        </BoxSkills>
        <ListSkills>
          <li>
            <Label htmlFor="file">
              <span>{t('Web design')}</span>
              <span>90%</span>
            </Label>
            <progress id="file" max="100" value="90" />
          </li>
          <li>
            <Label htmlFor="development">
              <span>{t('Web development')}</span>
              <span>95%</span>
            </Label>
            <progress id="development" max="100" value="95" />
          </li>
          <li>
            <Label htmlFor="logo">
              <span>{t('Logo design')}</span>
              <span>93%</span>
            </Label>
            <progress id="logo" max="100" value="93" />
          </li>
          <li>
            <Label htmlFor="instagram">
              <span>Instagram</span>
              <span>95%</span>
            </Label>
            <progress id="instagram" max="100" value="95" />
          </li>
          <li>
            <Label htmlFor="tiktok">
              <span>TikTok</span>
              <span>95%</span>
            </Label>
            <progress id="tiktok" max="100" value="95" />
          </li>
        </ListSkills>
      </WrapperBoxSkills>
      <WrapperText>
        <Subtitle>{t('Who are our customers?')}</Subtitle>
        <TextCenter>
          {t(
            "Whether you're a small startup, medium-sized business, or large corporation, we work with you to create a website that meets your needs and goals."
          )}
          <br />
          {t(
            'Our services are available for a variety of industries including retail, hospitality, services, technology, arts and many more. We do our best to provide you with an effective, professional and user-friendly web presence that will help you attract customers and grow your business.'
          )}
        </TextCenter>
        <ButtonLink
          to="/contact"
          aria-label="Open order form"
          style={{ marginTop: '25px' }}
        >
          {t('Order')}
        </ButtonLink>
      </WrapperText>
      <WrapperText>
        <Subtitle>{t('Development by Steps')}</Subtitle>
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
            <Number>01</Number>
            <Heading>{t('The importance of the first meeting')}</Heading>
            <TextSlider>
              {t(
                "During our first meeting, we will have an introductory conversation where we will learn about your goals, objectives and expectations. We'll also find out what role your website should play. This information will be extremely useful for us as it will help us to develop a detailed plan of work in the future."
              )}
            </TextSlider>
            <DetailsWrapper>
              {!showDetails ? (
                <DetailsButton
                  type="button"
                  aria-label="Open details"
                  aria-expanded="false"
                  onClick={toggleDetails}
                >
                  {t('Details')}
                </DetailsButton>
              ) : (
                <DetailsButton
                  type="button"
                  aria-label="Hide details"
                  aria-expanded="false"
                  onClick={toggleDetails}
                >
                  {t('Hide')}
                </DetailsButton>
              )}
              {showDetails && (
                <DetailsList>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Discussion of the client questionnaire')}</span>
                  </DetailsItem>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>
                      {t(
                        'Definition of the topic and the main goal of the project'
                      )}
                    </span>
                  </DetailsItem>
                  {/* <DetailsItem>
                  <MdCheck size={15} />
                  <span>{t('Commercial offer')}</span>
                </DetailsItem>
                <DetailsItem>
                  <MdCheck size={15} />
                  <span>{t('Contract execution')}</span>
                </DetailsItem> */}
                </DetailsList>
              )}
            </DetailsWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Number>02</Number>
            <Heading>{t('Create Layouts')}</Heading>
            <TextSlider>
              {t(
                'At this stage, the main role is played by the designer, who carefully examines the technical task and reproduces his artistic vision of the project. His creativity allows you to create the interface of your website to be the best in the world.'
              )}
            </TextSlider>
            <DetailsWrapper>
              {!showDetails ? (
                <DetailsButton
                  type="button"
                  aria-label="Open details"
                  aria-expanded="false"
                  onClick={toggleDetails}
                >
                  {t('Details')}
                </DetailsButton>
              ) : (
                <DetailsButton
                  type="button"
                  aria-label="Hide details"
                  aria-expanded="false"
                  onClick={toggleDetails}
                >
                  {t('Hide')}
                </DetailsButton>
              )}
              {showDetails && (
                <DetailsList>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>
                      {t('Development and approval of a technical task')}
                    </span>
                  </DetailsItem>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Prototyping, layout and design')}</span>
                  </DetailsItem>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Layout correction and approval')}</span>
                  </DetailsItem>
                </DetailsList>
              )}
            </DetailsWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Number>03</Number>
            <Heading>{t('The programmer gives life to the design')}</Heading>
            <TextSlider>
              {t(
                "The role of the programmer is to ensure flawless operation of the site's functionality, maintaining its coherence with the design. The work of the coder is crucial and affects many aspects of the project. We make sure that our maestro can work without rushing to achieve the best results."
              )}
            </TextSlider>
            <DetailsWrapper>
              {!showDetails ? (
                <DetailsButton
                  type="button"
                  aria-label="Open details"
                  aria-expanded="false"
                  onClick={toggleDetails}
                >
                  {t('Details')}
                </DetailsButton>
              ) : (
                <DetailsButton
                  type="button"
                  aria-label="Hide details"
                  aria-expanded="false"
                  onClick={toggleDetails}
                >
                  {t('Hide')}
                </DetailsButton>
              )}
              {showDetails && (
                <DetailsList>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Layout')}</span>
                  </DetailsItem>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Website development')}</span>
                  </DetailsItem>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Content filling')}</span>
                  </DetailsItem>
                </DetailsList>
              )}
            </DetailsWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Number>04</Number>
            <Heading>{t('Unrelenting attention to detail')}</Heading>
            <TextSlider>
              {t(
                'We provide harmony in our symphony. By conducting tests, we make sure that the application works flawlessly and does not have any bugs when the site opens to everyone.'
              )}
            </TextSlider>
            <DetailsWrapper>
              {!showDetails ? (
                <DetailsButton
                  type="button"
                  aria-label="Open details"
                  aria-expanded="false"
                  onClick={toggleDetails}
                >
                  {t('Details')}
                </DetailsButton>
              ) : (
                <DetailsButton
                  type="button"
                  aria-label="Hide details"
                  aria-expanded="false"
                  onClick={toggleDetails}
                >
                  {t('Hide')}
                </DetailsButton>
              )}
              {showDetails && (
                <DetailsList>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Testing')}</span>
                  </DetailsItem>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Handing over the finished project')}</span>
                  </DetailsItem>
                  <DetailsItem>
                    <MdCheck size={15} />
                    <span>{t('Project launch')}</span>
                  </DetailsItem>
                </DetailsList>
              )}
            </DetailsWrapper>
          </SwiperSlide>
        </Swiper>
      </WrapperText>
      <WrapperText>
        <Subtitle>{t('Technologies')}</Subtitle>
        <table>
          <tbody>
            <tr>
              <TableHeading>Frontend</TableHeading>
              <TableData>HTML CSS / JavaScript / React.js / Redux</TableData>
            </tr>
            <tr>
              <TableHeading>Backend</TableHeading>
              <TableData>Node.js</TableData>
            </tr>
            <tr>
              <TableHeading>Database</TableHeading>
              <TableData>MongoDB</TableData>
            </tr>
            <tr>
              <TableHeading>Design</TableHeading>
              <TableData>Adobe Photoshop / Adobe Illustrator / Figma</TableData>
            </tr>
          </tbody>
        </table>
      </WrapperText>
      <WrapperBox>
        <Subtitle>{t('Why Brand Maze?')}</Subtitle>
        <ListBenefits>
          <StepBenefits data-aos="zoom-in-left" data-aos-delay="150">
            <HeadingBox>
              <NumberSmall>01</NumberSmall>
              <HeadingSmall>
                {t('We help you find exceptional and unforgettable concepts')}
              </HeadingSmall>
            </HeadingBox>
            <Text>
              {t(
                'There is no doubt that many people nowadays know how to create beautiful and stylish websites. But we offer more than just appearance - together with aesthetics, you get an expanded set of functions and capabilities.'
              )}
            </Text>
          </StepBenefits>
          <StepBenefits data-aos="zoom-in-right" data-aos-delay="250">
            <HeadingBox>
              <NumberSmall>02</NumberSmall>
              <HeadingSmall>
                {t('We keep secrets within the company')}
              </HeadingSmall>
            </HeadingBox>
            <Text>
              {t(
                'We accept orders from customers who bring unique technologies to the market that are not similar to the competition. We are fully aware that this work requires special care and we guarantee that your sensitive information will be kept confidential. If necessary, we may also enter into a non-disclosure agreement.'
              )}
            </Text>
          </StepBenefits>
          <StepBenefits data-aos="zoom-in-left" data-aos-delay="350">
            <HeadingBox>
              <NumberSmall>03</NumberSmall>
              <HeadingSmall>
                {t('We are vigilant guardians of your technical task')}
              </HeadingSmall>
            </HeadingBox>
            <Text>
              {t(
                'We have a completely opposite philosophy compared to companies that do not consider listening to the client mandatory. Our main priority is to create a project that will be perfect in all aspects. Therefore, we pay great attention to listening to your needs, fix all the details in the technical task and do not deviate from the given course.'
              )}
            </Text>
          </StepBenefits>
          <StepBenefits data-aos="zoom-in-right" data-aos-delay="450">
            <HeadingBox>
              <NumberSmall>04</NumberSmall>
              <HeadingSmall>
                {t('We are open to the use of innovative methods')}
              </HeadingSmall>
            </HeadingBox>
            <Text>
              {t(
                'We always have a ready arsenal of promising and bold strategies. Not everyone will take such a step, but those who bravely take the risk will thank us later. Maybe you will find the courage to accept this challenge?'
              )}
            </Text>
          </StepBenefits>
        </ListBenefits>
      </WrapperBox>
      <WrapperBox>
        <Subtitle>{t('What we can also do')}</Subtitle>
        <ListQuestions>
          <li>
            <Heading>
              {t(
                'We already have a ready-made site, but we need technical support.Can you help?'
              )}
            </Heading>
            <Text>
              {t(
                'Even if your site was developed by another company, we are ready to provide technical support for your project. We have the ability to allocate a separate team for your project or prioritize tasks according to your needs.'
              )}
            </Text>
          </li>
          <li>
            <Heading>{t('What is the price of the web application?')}</Heading>
            <Text>
              {t(
                'The cost and terms of development of a web application depend on the complexity of the project and the scope of functionality. To get a preliminary estimate, please fill out an application and provide a detailed description of your project or upload a ready-made technical task. This will help us make a more accurate estimate of the cost and terms of implementation.'
              )}
            </Text>
          </li>
          <li>
            <Heading>
              {t('Can I be informed about the development of the project?')}
            </Heading>
            <Text>
              {t(
                'We provide regular reporting to the client at each stage of development. Before proceeding to the next stage, we agree on the details with you. Our team is always available for communication and ready to provide updates on the progress of the project at any time convenient for you.'
              )}
            </Text>
          </li>
          <li>
            <Heading>{t("I want a better site than a competitor's")}</Heading>
            <Text>
              {t(
                'This is exactly what we do. We will conduct a detailed study of competitors to identify their strengths and weaknesses. This will help us determine the right way to achieve your goal.'
              )}
            </Text>
          </li>
        </ListQuestions>
      </WrapperBox>
      <WrapperText>
        <Subtitle>{t('We look forward to working with you')}</Subtitle>
        <ButtonLink to="/contact" aria-label="Open order form">
          {t('Order')}
        </ButtonLink>
      </WrapperText>
    </Container>
  );
};
