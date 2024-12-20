import { Container } from '../../components/Container/Container';

import styles from './AutoSportPage.module.sass';

export const AutoSportPage = () => {
  return <div>
    <Container>
      <div className={styles.autoSportPageWrapper}>
        <h1 className={styles.autoSportPageTitle}>История отделения BMW M GmbH</h1>
        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>История компании BMW M GmbH официально ведётся с 1972 года, хотя гоночные автомобили послевоенный концерн BMW создавал и раньше, притом успешные. Погоняться успели и BMW 700, и 1800, и, само собой, BMW 2002. Некоторые из этих машин оставались в деле до начала 80-х. Сложилась и целая группа инженеров, вдохновляемых знаменитым инженером-пилотом Александром фон Фалкенхаузеном, а также его ближайшим сподвижником Паулем Рóше (ударение на первый слог).</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport.jpg" alt="Купе BMW 2002 гоночной группы 2 1978 года." />
            <p className={styles.autoSportPageImageDescr}>Купе BMW 2002 гоночной группы 2 1978 года.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Но разработкой спортивной техники в BMW занимались на общественных началах, по совместительству или в свободное от основной работы время. Принцип, хорошо знакомый советскому автоспорту. Когда же правление концерна решило всерьёз использовать гонки в маркетинговых целях, любительщине пришёл конец. Потребовалась целевая структура — BMW Motorsport. Причём её создание приписывают американцу Роберту Лутцу.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport2.jpg" alt="«Отцы-основатели» — инженер-моторист Пауль Роше (слева) и менеджер Йохен Неерпаш. До прихода в BMW Неерпаш, сам в прошлом заводской гонщик Porsche, руководил сильнейшей в мировом туринге командой Ford и даже успел поучаствовать в администрировании европейского турингового чемпионата, куда, собственно, и прицелились баварцы. За то его, пользуясь современным сленгом, и схантили." />
            <p className={styles.autoSportPageImageDescr}>«Отцы-основатели» — инженер-моторист Пауль Роше (слева) и менеджер Йохен Неерпаш. До прихода в BMW Неерпаш, сам в прошлом заводской гонщик Porsche, руководил сильнейшей в мировом туринге командой Ford и даже успел поучаствовать в администрировании европейского турингового чемпионата, куда, собственно, и прицелились баварцы. За то его, пользуясь современным сленгом, и схантили.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Если костяк разработчиков во главе с Роше у BMW существовал, то руководителя привлекли со стороны: Йохен Неерпаш обладал и влиянием, и связями в автоспортивной среде. Он доукомплектовал конструкторское бюро, а в новенькую, с иголочки заводскую команду привёл сразу нескольких именитых кольцевиков и раллистов. Подход поражал основательностью: для асов спорта были организованы курсы водительского мастерства!</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport3.jpg" alt="Кольцевые BMW 2002 tii из 1970-х на современном Гран-при исторических автомобилей." />
            <p className={styles.autoSportPageImageDescr}>Кольцевые BMW 2002 tii из 1970-х на современном Гран-при исторических автомобилей.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>К подготовке пилотов впервые привлекли профессиональных тренеров и врачей. Впоследствии водительские курсы превратились в знакомый нам бренд «Школы водительского мастерства BMW». Нет ничего удивительного в том, что на разных мероприятиях участвует старый финский раллист Рауно Аалтонена. Ещё в 1977 году фирма BMW подписала c ним контракт как с первым инструктором фирменной школы.</p>
          <p className={styles.autoSportPageText}>Врождённая компетенция подразделения BMW Motorsport — двигатели. Самым известным посвящён отдельный пост в Технической библиотеке Techlibrary. К началу 70-х у группы Фалкенхаузена—Роше был уже накоплен неплохой опыт: их моторы звучали и в кольце, и в ралли, а Неерпаш суперуспешно внедрил атмосферные «четвёрки» BMW в Формулу-2. Команда March взяла c ними кучу титулов. Подтянуть инженерный уровень в области материаловедения, шасси и прочего помогли приглашённые специалисты. Впрочем, в то время боевая техника от гражданской отличалась прежде всего силовыми агрегатами.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport4.jpg" alt="Первый проект — 370-сильная гоночная версия 3.0 CSL. Экземпляр на фото выиграл шестичасовой марафон на Нюрбургринге в 73-м. Помимо шести титулов в европейском туринге такие машины побеждали и в Ле-Мане, и в заокеанской серии IMSA GT. Причём поздние версии, оснащённые наддувом, развивали до 950 л.с!" />
            <p className={styles.autoSportPageImageDescr}>Первый проект — 370-сильная гоночная версия 3.0 CSL. Экземпляр на фото выиграл шестичасовой марафон на Нюрбургринге в 73-м. Помимо шести титулов в европейском туринге такие машины побеждали и в Ле-Мане, и в заокеанской серии IMSA GT. Причём поздние версии, оснащённые наддувом, развивали до 950 л.с!</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Руководство BMW практически не давало M-отделу времени на раскачку. От Неерпаша с Роше требовалась немедленная победа. Мол, мы даём вам карт-бланш, но уж будьте любезны обеспечить результат. И обеспечивали. Первая же заводская машина — купе 3.0 CSL на основе гран-туризмо с индексом E9 — принесла шесть титулов в европейском туринге. Вскоре началась и экспансия гоночных BMW в Америку: США вообще познакомились с баварской маркой исключительно через спорт. Там у BMW долго всё складывалось победно, отсюда и неистребимо гоночный имидж на американском рынке.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport5.jpg" alt="Литера L в названии 3.0 CSL с самого начала означала лёгкость, но, как видите, интерьер гоночного автомобиля 70-х не сильно отличался от серийной версии. Вся эта одержимость борьбой с лишним весом пришла позже. А пока спортсмены могли наслаждаться роскошью деревянной отделки топ-модели. Да и было ли на тот момент что-то легче фанеры?" />
            <p className={styles.autoSportPageImageDescr}>Литера L в названии 3.0 CSL с самого начала означала лёгкость, но, как видите, интерьер гоночного автомобиля 70-х не сильно отличался от серийной версии. Вся эта одержимость борьбой с лишним весом пришла позже. А пока спортсмены могли наслаждаться роскошью деревянной отделки топ-модели. Да и было ли на тот момент что-то легче фанеры?</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Гоночную программу разворачивали действительно на широкую ногу. Итальянскому дизайнеру Джорджетто Джуджаро был даже заказан фирменный стиль М-отделения и заводской команды. Получился триколор: голубой — это цвет BMW, красный означает динамику (хотя есть версия о том, что это ленточка нефтяной компании Texaco, партнёра BMW того времени), а фиолетовый (который встречается в разнообразных интерпретациях) — смесь первого со вторым. Вот такая несложная геральдика.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport6.jpg" alt="Открыл Неерпаш и юниорскую программу BMW: Марк Зурер, Манфред Винкельхок и Эдди Чивер успешно продолжили потом карьеру в Формуле-1. Поиск талантов стал этакой фишкой Неерпаша: гораздо позже, в начале 1990-х, работая на Мерседес, он и там организовал юношескую команду, благодаря чему у нас есть и Ханс-Харольд Френцен, и сам Красный барон — Михаэль Шумахер…" />
            <p className={styles.autoSportPageImageDescr}>Открыл Неерпаш и юниорскую программу BMW: Марк Зурер, Манфред Винкельхок и Эдди Чивер успешно продолжили потом карьеру в Формуле-1. Поиск талантов стал этакой фишкой Неерпаша: гораздо позже, в начале 1990-х, работая на Мерседес, он и там организовал юношескую команду, благодаря чему у нас есть и Ханс-Харольд Френцен, и сам Красный барон — Михаэль Шумахер…</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Структуры, подобные M-отделу, были и у других немецких производителей, но далеко не все умели извлечь из этого выгоду для основного бизнеса. Популярный лозунг «С трека — в серию» в BMW понимался буквально: "дочку" Motorsport GmbH почти сразу начали привлекать для доработок гражданских автомобилей. В этом, кстати, принципиальное отличие M-отдела от его сегодняшних рыночных конкурентов — мерседесовского ателье AMG и подразделения quattro GbmH концерна Audi. Только М-отдел рос под грузом ответственности перед материнской компанией за успехи в большом спорте, а это подразумевает особый уровень инженерной культуры.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport7.jpg" alt="В конце 70-х молодёжный коллектив выступал на 600-сильном купе BMW 320 turbo Группы 5 FIA, оснащённом наддувной версией" />
            <p className={styles.autoSportPageImageDescr}>В конце 70-х молодёжный коллектив выступал на 600-сильном купе BMW 320 turbo Группы 5 FIA, оснащённом наддувной версией</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Хотя первые проекты по доводке дорожных BMW были довольно примитивны. Например, на стапеля M-отдела с главного конвейера с 1974 года начали приходить седаны пятой серии E12 — 530i и 533i: их частично разбирали для замены подвески и тормозной системы. Тиражи переименованных в M 3.0 и M 3.3 машин исчислялись десятками в год.</p>
          <p className={styles.autoSportPageText}>Перечень доработок версии M 535i 1980 года общирнее: ему пересадили 12-клапанную «шестёрку» 3.5 мощностью 218 л.с. от купе шестой серии, снабдили блокировкой дифференциала, сиденьями Recaro и аэродинамическим обвесом в стиле боевых машин. Продажи пошли резвее: за год продали почти в два раза больше, чем за предыдущую пятилетку. К этому моменту M-отдел уже выпустил свою собственную машину — M1.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport8.jpg" alt="Дорожные. От 3.0 CSL начала 70-х до новейшего купе M6. Третий слева — седан M 535i 1979 года с 12-клапанной «шестёркой», который можно назвать пилотным проектом перед выпуском модели M5." />
            <p className={styles.autoSportPageImageDescr}>Дорожные. От 3.0 CSL начала 70-х до новейшего купе M6. Третий слева — седан M 535i 1979 года с 12-клапанной «шестёркой», который можно назвать пилотным проектом перед выпуском модели M5.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Это был тот редкий случай, когда M-отдел пролетел мимо денег. В конце 1970-х техтребования гоночных серий менялись так быстро, что производители просто не поспевали готовить технику. Проект среднемоторного купе был очень амбициозным. Преодолев массу трудностей, немцы выпустили серию дорожных «эмок», чтобы добиться омологации, а Неерпаш костьми лёг в борьбе с FIA… В итоге регламент новой Группы 5, под который готовили M1, так и не был принят.</p>
          <p className={styles.autoSportPageText}>Пришлось довольствоваться 470-сильной моносерией Pro Car на разогреве у Формулы-1, где гонялись формульные пилоты вперемежку с частниками и юниорами… А ведь купе должно было стать властелином мира! Сохранился пресс-релиз по M1 1978 года, где отдельный раздел посвящён проектным характеристикам машины Группы 5. Свободная компоновка в пределах омологированного кузова, продвинутая аэродинамика, 850-сильный двигатель — вот для чего реально готовили M1…</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport9.jpg" alt="Это как раз боевое купе M1 серии Procar, подготовленное по требованиям Группы 4 FIA: 470 л.с. при 1020 кг разрешённой массы. У него лучшая энерговооружённость, чем, например, у суперкара Lamborghini Aventador. Пятиступенчатая синхронизированная «механика» и задний привод. При малейшем шансе «эмка» с пронзительным рёвом стремится ехать задом наперёд. Меня на Прокаре катал трёхкратный чемпион WTCC Энди Приоль — даже его пробрало." />
            <p className={styles.autoSportPageImageDescr}>Это как раз боевое купе M1 серии Procar, подготовленное по требованиям Группы 4 FIA: 470 л.с. при 1020 кг разрешённой массы. У него лучшая энерговооружённость, чем, например, у суперкара Lamborghini Aventador. Пятиступенчатая синхронизированная «механика» и задний привод. При малейшем шансе «эмка» с пронзительным рёвом стремится ехать задом наперёд. Меня на Прокаре катал трёхкратный чемпион WTCC Энди Приоль — даже его пробрало.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Серия Procar сблизила BMW Motorsport и Формулу-1. Но Неерпашу, горевшему Королевскими гонками, так и не удалось убедить руководство концерна принять участие в больших призах. Отчаявшись, он ушёл в «конюшню» Talbot в 1980-м. Его сменил бывший автожурналист, спортивный функционер Дитер Стапперт. Стапперту на пару с Роше удалось-таки уломать совет директоров вложиться хотя бы в проект двигателя для Ф-1. Добро дали опять при условии немедленного успеха. Но поначалу машины с «турбочетвёрками» BMW даже не могли квалифицироваться. Конфуз! Однако уже в своём пятом гран-при мотористы BMW привели клиентскую команду Brabham к победе.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport10.jpg" alt="Нельсону Пике в 1983-м был обеспечен титул чемпиона мира." />
            <p className={styles.autoSportPageImageDescr}>Нельсону Пике в 1983-м был обеспечен титул чемпиона мира.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Формула формулой, а проект M1 обогатил инженеров М-отдела в том числе и новым опытом в области дорожных машин. Теперь, имея в портфолио высокотехнологичный 24-клапанный мотор, можно было поднимать историю с «заряженными» "пятёрками" и "шестёрками" на новый уровень. Двигатель M88 начали ставить на купе M 635 CSi (E24) и седан М5 серии Е28 — машины адаптированные, испытанные и собранные (теперь с главного конвейера присылали крашеные кузова с проводкой) силами Motorsport GmbH. К 1983 году отделение превратилось в разработчика широкого профиля и самостоятельного производителя. Почти таким мы знаем его сейчас. Наступил период большого бизнеса. В продажу пошли аксессуары и автомобили на заказ.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport11.jpg" alt="Купе M 635 CSi (E24) из коллекции BMW Classic." />
            <p className={styles.autoSportPageImageDescr}>Купе M 635 CSi (E24) из коллекции BMW Classic.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Очередной вехой стало четырёхцилиндровое купе M3 Е30 в 1985 году. Машина тоже разрабатывалась как омологационная для участия в туринговых сериях и ралли, что потребовало тесного сотрудничества М-отдела с основным КБ BMW. В 1987 году всего на сезон в календарь вернулся чемпионат мира по турингу с баснословными стартовыми взносами и подковёрной вознёй. «Эм-третьи» по ходу сезона даже дисквалифицировали за нарушение регламента, но мухлевали все, и, к радости BMW, в войне протестов победил заводской пилот Роберто Равалья на «эм-третьей» команды Schnitzer.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport12.jpg" alt="На гоночную «эм-третью» E30 в некоторых странах до сих пор действуют карты омологации — воистину спортивный долгожитель." />
            <p className={styles.autoSportPageImageDescr}>На гоночную «эм-третью» E30 в некоторых странах до сих пор действуют карты омологации — воистину спортивный долгожитель.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Купе М3 добивалось успехов и в сериях меньшего калибра: выиграло два еврочемпионата, в 89-м возглавляло протоколы серии DTM. Но в 1992 году вышло новое поколение в кузове E36 с шестицилиндровым двигателем и менее гоночным имиджем. Заводская программа участия в DTM была свёрнута. Да и само отделение BMW Motorsport в 93-м было переименовано в просто BMW M — теперь в жизни компании было так же много маркетинга, как и спорта. Если не больше…</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport13.jpg" alt="Со времён E30 в линейке М3 существовал кабриолет, в поколении E36 добавился ещё и седан. А там и универсал M5 подоспел, и гламурный M roadster…" />
            <p className={styles.autoSportPageImageDescr}>Со времён E30 в линейке М3 существовал кабриолет, в поколении E36 добавился ещё и седан. А там и универсал M5 подоспел, и гламурный M roadster…</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>По мере того как М-линейка становилась кудрявее, М GmbH потянуло в высокие сферы: баварцы сделали чумовой двигатель V12 и несколько раз выиграли с ним «24 часа Ле-Мана». Сперва с суперкаром McLaren F1, а после — с собственным прототипом. На фото ниже — как раз BMW V12 LMR, взявший золото на Сартэ в 1999-м.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport14.jpg" alt="MW V12 LMR" />
            <p className={styles.autoSportPageImageDescr}>MW V12 LMR</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>Правда к тому времени М и Motorsport разделились. Компания с однобуквенным названием сосредоточилась на дорожных машинах, которые делались всё совершеннее. Ну а новоиспечённое подразделение BMW Motorsport отправилось опять покорять Формулу-1 в качестве моториста. Со временем команда BMW Sauber стала полноценной заводской. Но королева раскапризничалась и не покорилась. Болид BMW выиграл всего одну гонку, и марка застряла в шаге от победы в Кубке конструкторов. Пришлось уйти так.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport15.jpg" alt="То ли дело возрождённый мировой туринг! Три титула WTCC в 2005–2007 годах! Только ведь для WTCC был омологирован не M-автомобиль, а обычный cедан BMW 320Si, пусть и мелкосерийный. Гоночные двухлитровые «трёшки» хоть и выпускались на мощностях М-отделения, но к празднованиям его юбилеев не привлекаются." />
            <p className={styles.autoSportPageImageDescr}>То ли дело возрождённый мировой туринг! Три титула WTCC в 2005–2007 годах! Только ведь для WTCC был омологирован не M-автомобиль, а обычный cедан BMW 320Si, пусть и мелкосерийный. Гоночные двухлитровые «трёшки» хоть и выпускались на мощностях М-отделения, но к празднованиям его юбилеев не привлекаются.</p>
          </div>
        </div>

        <div className={styles.autoSportPageItem}>
          <p className={styles.autoSportPageText}>На память о Больших призах нам осталась M5 E60 с пятилитровым двигателем V10 (по формульной моде 2000-х). Укороченная на два цилиндра версия стала отличным мотором для харизматичного семейства M3 E90/E92. В те времена без двигателя V8 можно было даже не думать об успехе на американском рынке. В начале 2010-х парадигма изменилась: «атмосферники» остались в прошлом, М-автомобили перешли на наддув.</p>
          <p className={styles.autoSportPageText}>Вместо М-родстера — кроссоверы, младшие «эмки» вернулись к рядным «шестёркам». Разработан высокопроизводительный шестицилиндровый дизель с тремя турбокомпрессорами. На главном конвейере BMW появились автомобили новой линейки M Performance. Mассово, как никогда. Причём большую часть М-производства занимают автомобили на заказ из линейки BMW Individual — их тоже выпускают на M-мощностях. А спортивные и гражданские модели давно не имеют ничего общего.</p>
          <div className={styles.autoSportPageImageBox}>
            <img className={styles.autoSportPageImage} src="bmw-msport16.jpg" alt="Автомобили M серии" />
            <p className={styles.autoSportPageImageDescr}>Автомобили M серии</p>
          </div>
        </div>

      </div>
    </Container>
  </div>;
};
