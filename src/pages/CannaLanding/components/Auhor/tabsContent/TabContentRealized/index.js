import React from 'react';
import './styles.scss';

export const TabContentRealized = () => {
  return (
    <div className="realized-tab">
      <div className="realized-tab__title">НДСЛ "Охмадит" м.Київ</div>
      <p>
        Сьогодні кожна людина потребує надії на щасливе майбутнє, але це
        майбутнє залежить від наших дітей та їх здоров’я.
      </p>
      <p>
        Фондом Віра Надія Любов в хірургічному корпусі НДСЛ Охмадит була
        частково здійснена заміна застарілих на сучасні енергоефективні вікна.
        Що дало можливість дітям проходити лікування як у сучасних лікарнях 21
        століття.
      </p>
      <p>
        Переглянути відгук та фотогрфії проведенних робіт від лікарів та центру
        "ОХМАДИТ" можно тут :{' '}
        <a
          href="https://m.facebook.com/story.php?story_fbid=3243944682371581&id=100002682434812"
          style={{ color: 'red' }}
        >
          https://m.facebook.com/story.php?story_fbid=3243944682371581&id=100002682434812
        </a>
      </p>
    </div>
  );
};
