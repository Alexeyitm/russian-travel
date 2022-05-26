import { buttonRu, buttonEn, title ,leadTitle, leadSubtitle, leadCaption,
   introTitle, introText, introSubtitle, placeTitles, placeParagraphs, 
   coverTitle, coverSubtitle, footerLinks, footerCopy } from '../script/constants.js'



//change launguage
buttonRu.addEventListener('click', function () {
  buttonRu.classList.toggle('header__link_active');
  buttonEn.classList.toggle('header__link_active');

  title.textContent = 'Путешествия по России';
  leadTitle.textContent = 'Путешествия по России';
  leadSubtitle.textContent = 'Настоящая страна не в выпусках новостей, а здесь.';
  leadCaption.textContent = 'ваша полка — верхняя';
  introTitle.textContent = 'Чего мы там не видели?';
  introText.textContent = 'По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.';
  introSubtitle[0].textContent = 'Часовых поясов';
  introSubtitle[1].textContent = 'Объектов природного наследия ЮНЕСКО';
  introSubtitle[2].textContent = 'Объектов культурного наследия ЮНЕСКО';
  introSubtitle[3].textContent = 'Природных заповедников';
  introSubtitle[4].textContent = 'Аэропортов';
  placeTitles[0].textContent = 'Куршская коса';
  placeTitles[1].textContent = 'Кольский';
  placeTitles[2].textContent = 'Алтай';
  placeTitles[3].textContent = 'Зимний Байкал';
  placeTitles[4].textContent = 'Карелия';
  placeParagraphs[0].textContent = 'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.';
  placeParagraphs[1].textContent = 'На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.';
  placeParagraphs[2].textContent = 'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.';
  placeParagraphs[3].textContent = 'Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.';
  placeParagraphs[4].textContent = 'Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.';
  placeParagraphs[5].textContent = 'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразиеместной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.';
  placeParagraphs[6].textContent = 'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России.';
  placeParagraphs[7].textContent = 'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.';
  placeParagraphs[8].textContent = 'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.';
  coverTitle.textContent = 'До Байкала «на\u00A0собаках»';
  coverSubtitle.textContent = 'По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на электричках.';
  footerLinks[0].textContent = 'Карты';
  footerLinks[1].textContent = 'Погода';
  footerLinks[2].textContent = 'Расписание';
  footerLinks[3].textContent = 'Календарь';
  footerLinks[4].textContent = 'Путешествия';
  footerCopy.textContent = '\u00A9 2022. Алексей Пономарев';
});

buttonEn.addEventListener('click', function () {
  buttonEn.classList.add('header__link_active');
  buttonRu.classList.remove('header__link_active');
  title.textContent = 'Russian travel';
  leadTitle.textContent = 'Russian travel';
  leadSubtitle.textContent = 'The real country is not in the news, but here.';
  leadCaption.textContent = 'your shelf - top';
  introTitle.textContent = "What didn't we see there?";
  introText.textContent = 'According to VTsIOM polls, 95% of Russians dream of going somewhere, but only 36% plan to spend their holidays in their home country. Like, why are we here, at home, did not see? In fact, Russia is a whole universe with the gentle sea of ​​the south, dense forests of the Sayans and the harsh ice of the Putorana Plateau. And see all these beauty is possible without millions in the account, a passport and many hours of flights. Like, for example, Vera Bashmakova, a brave young mother who took three children, put them in her "Lada" and drove 20 thousand kilometers in her native country. We have selected and described some interesting places worthy of your vacation.';
  introSubtitle[0].textContent = 'Time zones';
  introSubtitle[1].textContent = 'UNESCO natural heritage sites';
  introSubtitle[2].textContent = 'UNESCO cultural heritage sites';
  introSubtitle[3].textContent = 'Nature reserves';
  introSubtitle[4].textContent = 'Airports';
  placeTitles[0].textContent = 'Curonian spit';
  placeTitles[1].textContent = 'Kolskiy';
  placeTitles[2].textContent = 'Altay';
  placeTitles[3].textContent = 'Winter Baikal';
  placeTitles[4].textContent = 'Karelia';
  placeParagraphs[0].textContent = 'Here, in the middle of forests and sand dunes, you can see two water horizons - the calm Curonian Lagoon on one side and the rippling waves of the Baltic Sea on the other. A unique natural area on the edge of the Russian enclave.';
  placeParagraphs[1].textContent = 'The Kaliningrad region does not end there. For the traveler and researcher in the same neighborhood - the westernmost point of Russia, the Baltic Spit, - and the German heritage of a scattering of small seaside towns. The atmosphere of these places eliminates the fuss, dipping into the tranquility of nature and the smell of steel, cool sea.';
  placeParagraphs[2].textContent = 'Almost the entire peninsula is located beyond the Arctic Circle. Sami tundra, from which to the south - taiga, and to the north - the Arctic Ocean, pretending to be the Barents Sea.';
  placeParagraphs[3].textContent = "Perhaps you watched Zvyagintsev and even heard the story of the Arctic festival in Teriberka. Perhaps the word «Khibiny» did not remain under the snow of school memories of geography lessons. Perhaps you were not interested penetrating the earth's crust with an ultra-deep well, and from apatites you have long been covered with apathy. But your dream is to see the northern lights begin to come true with a ticket to Murmansk.";
  placeParagraphs[4].textContent = 'Altai is one of the most beautiful places in Russia. First of all, because of the mountains: if you go along the ridge, you will see slopes strewn with pine trees, mountain rivers and lakes. And if you open the windows in the car, you can meet with the invisible miracle of these places - mountain air.';
  placeParagraphs[5].textContent = 'The climate in Altai is temperate, so it is best to go here in summer. So you will see all the variety local flora and fauna. Moose roam the forests of Altai, eagles fly over the ridges, and roe deer graze on the plains. And the famous manuls are also inhabitants of the Altai Territory.';
  placeParagraphs[6].textContent = 'Everyone knows Baikal as the largest lake in the world. Many also know that this is the largest source of fresh water and one of the most beautiful places in Russia.';
  placeParagraphs[7].textContent = "Of course, it's all true. But Baikal is still an ideal place for skiing competitions. This is a sport where a skier ties himself to a motorcycle and the tandem tries to develop as much ice speed. In March 2019, a world record was set at the Baikal Mile festival - 197.011 km/h.";
  placeParagraphs[8].textContent = "Siberia ends not in the Urals, but in Karelia: forming the taiga Siberian larch does not grow west of Vodlozero. But here she swings 30 meters — the forests of the Karelian national parks have never known an ax because of the impenetrable swamps. Some pines are more than half a millennium old. Touch a living being who has seen the sun before Ivan the Terrible saw it. In the virgin forest for a hundred kilometers you will not meet trails. And on rare paths, trees a couple of meters from the ground are marked with bear claws. Let everyone know who's boss.";
  coverTitle.textContent = 'To Baikal «on\u00A0dogs»';
  coverSubtitle.textContent = 'Based on the educational topic about the Trans-Siberian Railway - a journey from the capital to Baikal by electric trains.';
  footerLinks[0].textContent = 'Cards';
  footerLinks[1].textContent = 'Weather';
  footerLinks[2].textContent = 'Schedule';
  footerLinks[3].textContent = 'Calendar';
  footerLinks[4].textContent = 'Travels';
  footerCopy.textContent = '\u00A9 2022. Alexey Ponomarev';
});