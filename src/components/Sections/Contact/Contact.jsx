import { useEffect, useState } from 'react';
import {
  ContactForm,
  InputWrapper,
  LabelOfItem,
  InputOfItem,
  NameOfItem,
  TextareaOfItem,
  InputForFile,
  ContainerForInputForFile,
  LabelForInputForFile,
  ButtonSend,
  TextForInputForFile,
  ThanksBox,
  ThanksContent,
} from './Contact.styled';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [setFile] = useState(''); //file,
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { t } = useTranslation();

  document.querySelector('html').classList.add('js');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  const handleChange = e => {
    e.preventDefault();
    switch (e.target.name) {
      case 'user-firstname':
        setUserFirstName(e.target.value);
        break;
      case 'user-lastname':
        setUserLastName(e.target.value);
        break;
      case 'user-email':
        setUserEmail(e.target.value);
        break;
      case 'user-phone':
        setUserPhone(e.target.value);
        break;
      case 'comment':
        setUserMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Title>{t('Contact')}</Title>
      <ContactForm
        action="https://formsubmit.co/contact@brand-maze.com"
        method="POST"
        enctype="multipart/form-data"
        className="contact-form"
        name="form-contacts"
        autoComplete="on"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <InputWrapper>
          <LabelOfItem aria-label="Name">
            <InputOfItem
              type="text"
              name="user-firstname"
              required
              placeholder={t("John")}
              value={userFirstName}
              onChange={e => handleChange(e)}
            />
            <NameOfItem>{t('First Name')}</NameOfItem>
          </LabelOfItem>
          <LabelOfItem aria-label="LastName">
            <InputOfItem
              type="text"
              name="user-lastname"
              required
              placeholder={t("Watson")}
              value={userLastName}
              onChange={e => handleChange(e)}
            />
            <NameOfItem>{t('Last Name')}</NameOfItem>
          </LabelOfItem>
          {/* <input type="hidden" name="_captcha" value="true" /> */}
          <input type="hidden" name="_subject" value="New Message!!!!!" />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/brand-maze/contact"
          />
          <LabelOfItem aria-label="Email">
            <InputOfItem
              type="email"
              name="user-email"
              required
              placeholder="bob@email.com"
              value={userEmail}
              onChange={e => handleChange(e)}
            />
            <NameOfItem>{t('Email')}</NameOfItem>
          </LabelOfItem>
          <LabelOfItem aria-label="Phone">
            <InputOfItem
              type="tel"
              name="user-phone"
              required
              placeholder="+19739476185"
              value={userPhone}
              onChange={e => handleChange(e)}
            />
            <NameOfItem>{t('Phone number')}</NameOfItem>
          </LabelOfItem>
        </InputWrapper>
        <LabelOfItem
          className="comment"
          aria-label="Comment"
          style={{ width: '100%' }}
        >
          <TextareaOfItem
            name="comment"
            placeholder={t('Write your message')}
            value={userMessage}
            onChange={e => handleChange(e)}
          />
          <NameOfItem>{t('Message')}</NameOfItem>
        </LabelOfItem>
        <ContainerForInputForFile>
          <div className="input-file-container">
            <InputForFile
              className="input-file"
              id="my-file"
              type="file"
              name="attachment"
              accept="image/png, image/jpeg, application/pdf, .xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={e => {
                if (e.target.value === '' || e.target.value === undefined) {
                  document.querySelectorAll(
                    '.input-file-trigger'
                  )[0].innerHTML = 'Add a file...';
                  document.querySelectorAll('.file-return')[0].innerHTML =
                    '(Allowed file formats - pdf doc docx odt ods. Maximum file size - 5 mb)';
                } else {
                  document.querySelectorAll(
                    '.input-file-trigger'
                  )[0].innerHTML = 'File added';
                  document.querySelectorAll('.file-return')[0].innerHTML =
                    e.target.value;
                }
                setFile(e.target.files[0]);
              }}
            />
            <LabelForInputForFile
              tabIndex="0"
              htmlFor="my-file"
              className="input-file-trigger"
              onClick={e => {
                document.querySelectorAll('.input-file').focus();
              }}
              onKeyDown={e => {
                if (e.key === 13 || e.key === 32) {
                  document.querySelectorAll('.input-file').focus();
                }
              }}
            >
              {t('Add a file...')}
            </LabelForInputForFile>
          </div>
          <TextForInputForFile className="file-return">
            {t(
              '(Allowed file formats - pdf doc docx odt ods. Maximum file size - 5 mb)'
            )}
          </TextForInputForFile>
        </ContainerForInputForFile>
        <ButtonSend type="submit">{t('Send message')}</ButtonSend>
        {formSubmitted && (
          <ThanksBox>
            <ThanksContent>
              <h1 style={{ fontFamily: "'Inter', sans-serif" }}>
                {t('Your message has been successfully sent')}
              </h1>
              <p
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '30px' }}
              >
                {t('We will contact you. Thank you!')}
              </p>
            </ThanksContent>
          </ThanksBox>
        )}
      </ContactForm>
    </Container>
  );
};
