import React from 'react';
import { HeaderSimulator } from '../../components/HeaderSimulator/HeaderSimulator';
import './styles.scss';
import { TitleBlock } from '../../components/TitleBlock';

import { ContentContainer } from '../../components/ContentContainer';
import Image from 'antd/lib/image';
import house1 from '../../../src/assets/images/house1.jpg';
import house2 from '../../../src/assets/images/house2.jpg';
import house3 from '../../../src/assets/images/house3.jpg';
import { HeartOutlined, CheckOutlined } from '@ant-design/icons';

export const News = () => {
  function ImageDemo() {
    return (
      <>
        <Image width={200} height={200} src={house1} />
        <Image width={200} height={200} src={house2} />
        <Image width={200} height={200} src={house3} />
      </>
    );
  }

  return (
    <>
      <HeaderSimulator />
      <div className="news">
        <ContentContainer>
          <div className="news__content">
            <TitleBlock
              title="Наші нещодавні проекти"
              subtitle="НАШІ ДОБРІ СПРАВИ"
            />
            <div className="news__content news-block">
              <p>
                Відновлення будівлі <CheckOutlined />{' '}
              </p>
              <div className="news-block__images">
                <ImageDemo />
              </div>
              <p>
                Цей будинок у с. потребував негайного ремонту після дощів. Дах
                будинку протікав та стіни були дуже холодними і не зберігали
                тепло. Наш Фонд провів ремонтні роботи та поклав новий дах ,
                також було проведено утепління стін будівлі.{' '}
              </p>
              <p>
                <HeartOutlined />
              </p>
            </div>
          </div>
        </ContentContainer>
      </div>
    </>
  );
};
