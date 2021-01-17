import React from 'react';
import loadable from '@loadable/component';

import Introduction from '../../content/introduction.json';
import SecondBlock from '../../content/secondBlock.json';
import ThirdBlock from '../../content/thirdBlock.json';
import FourthBlock from '../../content/fourthBlock.json';

const ContentBlock = loadable(() => import('../../components/ContentBlock'));
const Container = loadable(() => import('../../common/Container'));
const ScrollToTop = loadable(() => import('../../common/ScrollToTop'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        icon="support.svg"
      />
      <ContentBlock
        type="left"
        title={SecondBlock.title}
        content={SecondBlock.text}
        section={SecondBlock.section}
        icon="7outOf10.svg"
      />
      <ContentBlock
        type="right"
        title={ThirdBlock.title}
        content={ThirdBlock.text}
        icon="heartPhone.svg"
      />
      <ContentBlock
        type="left"
        title={FourthBlock.title}
        content={FourthBlock.text}
        icon="lendAHand.svg"
      />
    </Container>
  );
};

export default Home;
