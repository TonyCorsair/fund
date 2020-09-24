import React from 'react';
import Collapsible from 'react-collapsible';
import './styles.scss'
import { TitleBlock } from '../../../../components/TitleBlock';
import bankImg from './../../../../assets/images/bankImg.jpg'

export const Faq = () => {
  return(
    <div className="faq">
      <TitleBlock title="FAQ" subtitle="ЧАСТІ ЗАПИТАННЯ" description="Це запитання, котрими часто цікавляться партнери та гості" />
      <Collapsible open={true} trigger="+ Чи є ваш фонд у Єдиному державному реестрі України ? ">
        <p>
          Дані про реєстраційний номер платника єдиного внеску:
          10000001391070
        </p>
        <p>Дата та номер запису в Єдиному державному реєстрі юридичних осіб, фізичних осіб-підприємців та громадських формувань:
          10.12.2018, 1 073 102 0000 039203
        </p>
      </Collapsible>
      <Collapsible trigger="+ Дата та номер запису, в яких юридична особа перебуває на обліку:
 ">
        <p>
          10.12.2018, ГОЛОВНЕ УПРАВЛІННЯ РЕГІОНАЛЬНОЇ СТАТИСТИКИ, 21680000
          10.12.2018, 265818332658, ДЕРЖАВНА ПОДАТКОВА IНСПЕКЦIЯ У СОЛОМ'ЯНСЬКОМУ РАЙОНI ГОЛОВНОГО УПРАВЛIННЯ ДФС У М.КИЄВI, 39471390 (дані про взяття на облік як платника податків)
          10.12.2018, 10000001391070, ДЕРЖАВНА ПОДАТКОВА IНСПЕКЦIЯ У СОЛОМ'ЯНСЬКОМУ РАЙОНI ГОЛОВНОГО УПРАВЛIННЯ ДФС У М.КИЄВI, 39471390 (дані про взяття на облік як платника єдиного внеску)
          Не підлягає постановці на облік в ПЕНСІЙНОМУ ФОНДІ УКРАЇНИ у зв’язку з прийняттям Закону України від 04.07.2013 № 406-VII "Про внесення змін до деяких законодавчих актів України у зв’язку з проведенням адміністративної реформи"

        </p>
      </Collapsible>
      <Collapsible trigger="+ Ідентифікаційний код юридичної особи:  ">
        <p>
          Ідентифікаційний код юридичної особи:
          42684780
        </p>
      </Collapsible>
      <Collapsible trigger="+ Для приватних пожертвувань  ">
        <p>
          Для приватних пожертвувань: Приватбанк  Карта 5168 7422 0840 1582 Диденко Ольга Павловна
        </p>
      </Collapsible>
      <Collapsible trigger="+ Довідка про відкриття рахунку Фонду.  ">
        <img src={bankImg} alt='bank'/>
      </Collapsible>

    </div>
  )
}