import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Fade } from 'react-reveal';
import loadable from '@loadable/component';

import * as S from './styles';

const SvgIcon = loadable(() => import('../../common/SvgIcon'));
const Container = loadable(() => import('../../common/Container'));

const Footer = ({ t }) => {

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t('Contact')}</S.Language>
                <S.Large to="/">{t('Tell us everything')}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding the site? Feel free to reach out.`
                  )}
                </S.Para>
                <a href="mailto:@htn.jobsearch2021@gmail.com">
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('Policy')}</S.Title>
                <S.Large to="/" left="true">
                  {t('Content Policy')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Rules')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left="true" to="/">
                  {t('Support Center')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Customer Support')}
                </S.Large>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t('ADDRESS')}</S.Language>
                <S.Para>Waterloo Ontario</S.Para>
                <S.Para>123 Sesame Street</S.Para>
                <S.Para>Canada</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('Company')}</S.Title>
                <S.Large left="true" to="/">
                  {t('About')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Blog')}
                </S.Large>
                <S.Large left="true" to="/">
                  {t('Careers')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: '3rem' }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon src="logo.svg" aria-label="homepage" />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://instagram.com"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://medium.com"
                  src="medium.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
