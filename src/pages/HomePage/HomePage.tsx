import { Container } from '../../components/Container/Container';
import styles from './HomePage.module.sass';

export const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>
              История бренда BMW: как всё начиналось
            </h2>
            <p className={styles.text}>
              Немецкие автомобили пользуются высоким спросом благодаря
              надежности и функциональности. Одной из самых популярных является
              марка BMW, модели которой давно стали символом роскоши и
              спортивного стиля. Сейчас баварская компания представляет
              гигантский концерн с множеством автомобильных заводов не только в
              Германии, но и в других странах мира: от США до Египта. Эта статья
              посвящена истории создания и развития BMW, которая насчитывает
              свыше 100 лет и, безусловно, будет интересна настоящим поклонникам
              бренда.
            </p>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Как создавалась компания</h2>
            <p className={styles.text}>
              История BMW начиналась в баварском Мюнхене, где в 1913 году
              немецкие промышленники Рапп и Отто открыли два небольших
              предприятия. Новые фирмы занимались производством авиационных
              моторов, и их руководители вскоре приняли решение объединиться,
              чтобы вместе выдержать жесткую рыночную конкуренцию. Совместная
              компания получила название Bayerische Flugzeugwerke — «Баварские
              авиационные заводы».
            </p>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Зигзаг судьбы</h2>
            <p className={styles.text}>
              Осенью 1917 года была создана эмблема БМВ, которая осталась
              неизменной до настоящего времени: круг, разделенный на четыре
              части (две белых и две голубых). Эти цвета считаются традиционно
              баварскими. Долгое время считалось, что рисунок символизировал
              пропеллер самолета на фоне ясного неба.
            </p>
            <p className={styles.text}>
              Скорее всего, компания пошла бы по изначально определенному пути,
              занимаясь созданием авиамоторов, и автомобилисты никогда не узнали
              даже ее названия. Но история распорядилась иначе. После
              капитуляции Германии в Первой мировой войне правительство страны
              подписало Версальский договор, одним из пунктов которого стал
              запрет на производство самолетов.
            </p>
            <p className={styles.text}>
              Чтобы сохранить фирму, основатели перепрофилировали производство и
              несколько изменили название: слово Flugzeug («авиационные»)
              уступило место Motorische («моторные»), а аббревиатура приобрела
              современный вид, хорошо известный поклонникам.
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw-1917.jpg'
            alt='BMW 1917'
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Мотоциклы BMW</h2>
            <p className={styles.text}>
              После перестройки производства компания BMW некоторое время
              занималась выпуском тормозов для железнодорожного транспорта. В
              1923 году предприятие переключилось на мотоциклы, да так успешно,
              что в считаные месяцы обрело мировую известность. Надежность и
              скоростные качества баварской мотоциклетной техники снискали ей
              славу среди гонщиков.
            </p>
            <p className={styles.text}>
              В 1928 году, после покупки заводов в Тюрингии, руководство сделало
              основной сферой деятельности автомобильное производство, но выпуск
              мотоциклов не прекратился и по сей день. Спортивные модели очень
              популярны и нередко встречаются на дорогах разных стран.
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw-moto.jpg'
            alt='BMW r32 1923'
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Малолитражки BMW</h2>
            <p className={styles.text}>
              Первый автомобиль BMW сошел с конвейера в 1929 году — это была
              малолитражная модель, выпускавшаяся по лицензии британской Austin
              Motor Company. BMW Dixi 3/15 PS был похож на английский Austin 7,
              чрезвычайно популярным в европейских странах. Автомобиль оснащался
              20-сильным мотором и мог развить скорость до 80 км/ч.
            </p>
            <p className={styles.text}>
              На этом немецкие производители не остановились: весной 1932 года
              широкой публике была представлена уникальная модель собственной
              разработки. Автомобилисты по достоинству оценили новинку: с тех
              пор и до нашего времени знак BMW ассоциируется с безупречным
              качеством.
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw-dixi.jpg'
            alt=' BMW Dixi'
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Характерные детали</h2>
            <p className={styles.text}>
              Несмотря на известность, в начале 1930-х годов автомобили BMW не
              были узнаваемыми с первого взгляда. Характерная черта баварского
              бренда — двойная решетка радиатора — впервые появилась на БМВ 303,
              выпускавшемся с 1933 года.
            </p>
            <p className={styles.text}>
              Окончательно концепция баварского бренда — «Автомобиль — для
              водителя» — была сформулирована с появлением модели BMW 328,
              ставшего прорывом в области спорткаров.
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw3.jpg'
            alt='BMW 3-series'
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Вторая мировая и послевоенные годы</h2>
            <p className={styles.text}>
              BMW перед началом Второй мировой войны являлась известнейшей
              компанией, специализирующейся на выпуске спортивных мотоциклов и
              автомобилей. Со своими двигателями баварские модели ставили
              рекорды, оставляя конкурентов далеко позади. По понятным причинам
              с 1940 по 1945 год количество международных авто- и мотогонок
              заметно снижается.
            </p>
            <p className={styles.text}>
              Поражение Германии, как и в Первую мировую войну, нанесло компании
              серьезный удар. Ее экономическое положение было подорвано, многие
              проекты пришлось закрыть. В этой ситуации Карл Рапп делает упор на
              производство велосипедов, а также легких мотоциклов, условия
              сборки которых близки к кустарным.
            </p>
            <p className={styles.text}>
              Первым шагом к выходу из кризиса стала разработка BMW 501.
              Автомобиль не смог стать успешным, но последующая модель 502,
              оснащенная силовым агрегатом из алюминиевого сплава, получила
              невероятную популярность благодаря ряду качеств: вместительность,
              маневренность, высокая для своего времени технологичность.
            </p>
            <p className={styles.text}>
              Учитывая доступную для среднестатистического германского
              покупателя стоимость, автомобили пользовались высоким спросом, что
              позволило заняться развитием производства.
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw-501.jpg'
            alt='BMW 501'
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Через тернии — к звездам</h2>
            <p className={styles.text}>
              В 1955 г. компания наладила выпуск малолитражных моделей «Исетта»
              — трехколесного гибрида автомобиля и мотоцикла. Низкая цена
              «Исетты» для страны, разоренной войной, стала ключевым фактором ее
              популярности. Однако экономика Германии быстро росла, и интерес
              публики переключился на крупные автомобили. BMW вновь оказался в
              серьезном кризисе: основной конкурент Mercedes-Benz начал
              готовиться к выкупу компании.
            </p>
            <p className={styles.text}>
              Сдаваться баварцы не собирались. В 1956 г. дизайнер компании Гертц
              разработал спорткар BMW 507, который предлагался в двух вариантах:
              со стандартной жесткой крышей и родстер.
            </p>
            <p className={styles.text}>
              Оснащенная 8-цилиндровым мотором мощностью до 150 л. с., модель
              развивала скорость до 220 км/ч. Разработка имела потрясающий
              успех, позволивший фирме преодолеть кризис и успешно продолжить
              свою деятельность. С этого момента история марки развивается
              семимильными шагами, сопровождающимися фееричными успехами. А BMW
              507 сейчас входит в число самых дорогих коллекционных автомобилей.
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw-507.jpg'
            alt='BMW 507'
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Новые разработки</h2>
            <p className={styles.text}>
              Очередным крупным успехом баварского концерна стала BMW 700, в
              которой впервые была реализована система воздушного охлаждения.
              Начало шестидесятых годов стало для компании наиболее удачным
              временем за всю прежнюю историю:
            </p>
            <p className={styles.text}>
              1962 год — выпуск модели 1500, объединившей черты спортивного и
              компактного классов. Спрос на нее значительно превысил
              производственные мощности предприятия: рабочие попросту не
              успевали собирать новые автомобили для поставки на рынок.
            </p>
            <p className={styles.text}>
              1966 год — выпуск серии автомобилей с турбонаддувом, также
              увенчавшийся успехом.
            </p>
            <p className={styles.text}>
              1968 год — презентация широкой публике первых седанов БМВ (2500 и
              2800).
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw2800.jpg'
            alt='BMW2800'
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>
              Развитие производства в 1970-е и 1980-е
            </h2>
            <p className={styles.text}>
              Середина 1972 года ознаменовалась в Мюнхене сразу двумя событиями
              — Олимпийскими играми и разработкой 5 серии BMW. Прежде
              специализировавшийся на спорткарах бренд доказал, что седаны ему
              удаются не хуже.
            </p>
            <p className={styles.text}>
              Новые автомобили, представленные на Франкфуртском автосалоне,
              произвели впечатление на публику: они отличались вытянутыми
              линиями кузовной части, крупными боковыми окнами и малым дорожным
              просветом. Внешность новых БМВ была создана разработчиками
              компании с помощью компьютерных технологий. Историю пятерки
              продолжил BMW 525 — комфортный бизнес-седан, оснащенный
              6-цилиндровым мотором, развивавшим до 145 л. с.
            </p>
            <p className={styles.text}>
              В 1975 году стартовала третья линейка, в которой были представлены
              спортивные компактные седаны. BMW 3 серии комплектовались
              новейшими 4-цилиндровыми моторами. Через год эта модель была
              признана специалистами лучшей в мире.
            </p>
            <p className={styles.text}>
              Большая работа была проделана компанией в 1977 году. С конвейера
              сошло первое поколение БМВ 7 серии, оснащенное 6-цилиндровым ДВС с
              системой впрыска. В течение двух лет было реализовано свыше 75 000
              таких моделей. Кроме того, получили обновления 3 и 5 серия.
            </p>
            <p className={styles.text}>
              В 1985 году публике был представлен кабриолет БМВ с подвеской,
              который позволял с комфортом покорять большие расстояния. В конце
              1980-х баварский концерн запустил в производство еще пять моделей,
              четыре из которых оснащались бензомоторами и системой электронного
              впрыска, а одна — дизельным двигателем.
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw5-s1.jpg'
            alt='BMW5s1'
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>1990-е</h2>
            <p className={styles.text}>
              В 1990 году баварцы представили обновленную модель 3 серии,
              которая подкупила поклонников бренда технологичностью и элегантным
              внешним видом.
            </p>
            <p className={styles.text}>
              В 1992 году с конвейера сошли новые купе BMW, на которых были
              установлены улучшенные 6-цилиндровые силовые агрегаты. Спустя
              несколько месяцев компания запустила производство спорткаров М3, а
              также новых кабриолетов. Стоит отметить, что каждая новая модель
              получала уникальные детали. Уже тогда автомобили БМВ отличались
              превосходным для своего времени оснащением: климат-контроль,
              электроподъемники боковых стекол, гидроусилитель руля, бортовой
              компьютер, электрическое управление зеркалами заднего вида,
              круиз-контроль и т. д.
            </p>
            <p className={styles.text}>
              В 1995 году был существенно изменен дизайн моделей 5 серии.
              Обновленная пятерка получила сдвоенную головную оптику, защищенную
              прозрачными колпаками, и еще более комфортный, просторный салон.
            </p>
            <p className={styles.text}>
              1997 год ознаменовался выпуском BMW 5 серии Touring. Модель была
              оснащена мультифункциональным рулевым колесом, активными креслами,
              навигационной системой и механизмом динамической стабилизации.
              Через год в модельном ряду появились дизельные автомобили с 6- и
              8-цилиндровыми моторами. Желающие могли заказать такие автомобили
              в удлиненном кузове.
            </p>
            <p className={styles.text}>
              В конце десятилетия концерн вновь столкнулся с ситуацией, когда
              производственных мощностей не хватало для удовлетворения растущего
              спроса. Это произошло после появления родстера BMW Z3 в одном из
              фильмов саги о Джеймсе Бонде. Кроме того, в 1999 году началась
              история баварских внедорожников, когда с конвейера сошел
              спортивный кроссовер БМВ Х5.
            </p>
          </div>
          <img className={styles.homePageImage} src='/bmw-e30.jpg' alt='BMW3' />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>XXI век</h2>
            <p className={styles.text}>
              Не сбавила компания темпов и в новом тысячелетии. Начало века
              ознаменовалось беспрецедентным ростом продаж: только в России этот
              показатель составил 83%. Было выпущено новое поколение 7 серии,
              которому многие эксперты отдали первую строчку в рейтинге
              автомобилей класса люкс.
            </p>
            <p className={styles.text}>
              В настоящее время баварский концерн продолжает работу над
              улучшением своих моделей и созданием технологических новинок,
              которых нет у других брендов. «Автомобиль для водителя»:
              озвученный десятилетия назад принцип остается основным ориентиром
              для инженеров и дизайнеров BMW. Покупатели оценивают такой подход
              по достоинству — каждая новая модель становится хитом продаж. А
              регулярное появление автомобилей бренда в фильмах и популярных
              компьютерных играх позволяет привлекать новых и новых поклонников.
            </p>
          </div>
          <img
            className={styles.homePageImage}
            src='/bmw-s-4.jpg'
            alt='BMW 4-series 2016'
          />
        </div>
      </Container>
    </div>
  );
};
