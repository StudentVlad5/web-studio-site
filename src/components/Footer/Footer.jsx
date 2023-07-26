import { useTranslation } from 'react-i18next';
import { Footer, ProductionText } from './Footer.styled';

export const FooterComp = () => {
  const { t } = useTranslation();

  return (
    <Footer>
      <ProductionText>
        © 2023 | {t("All Rights Reserved")} | {t("Developed by")} BRAND MAZE PRODUCTIONS
      </ProductionText>
    </Footer>
  );
};
