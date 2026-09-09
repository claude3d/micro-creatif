(() => {
  "use strict";

  const guideTimings = [
    { start: 0.000, end: 8.167 },
    { start: 8.167, end: 16.467 },
    { start: 16.467, end: 27.267 },
    { start: 27.267, end: 44.967 },
    { start: 44.967, end: 82.333 },
    { start: 82.333, end: 102.433 },
    { start: 102.433, end: 115.000 },
    { start: 115.000, end: 148.033 },
    { start: 148.033, end: 161.567 }
  ];

  const guideText = {
    "en": [
      "Time Travel Sky lets you explore Earth’s sky, from minutes to millennia.",
      "The screen shows the sky, the field-of-view value, the date, the time, and the visible celestial objects.",
      "Before travelling through time, choose the observing location: your current location, a historical city, or manually entered coordinates.",
      "To choose a moment, open Local Date & Time. Enter the values, or choose an event from the list. Its date is entered automatically. Otherwise, enter it manually, then tap Apply.",
      "For the total solar eclipse of April 8, 2024, watch the Moon obscure the Sun. Fixed Sidereal Time keeps the stars still.",
      "You can also enjoy the planetary alignment as seen from Beijing, then view it from other regions.",
      "With longer time steps, Mars appears to move backward among the stars during retrograde motion.",
      "Near the Sun, Venus and Mercury move rapidly. You can especially watch their phases change along their orbits. Choose a place, a moment, and let the sky speak for itself.",
      "Time Travel Sky offers many other ways to explore the sky across time. For all features, controls, examples, and videos, visit microcreatif.ca/time-travel.html."
    ],
    "fr": [
      "Time Travel Sky vous fait explorer le ciel, des minutes aux millénaires.",
      "L’écran montre le ciel, le champ de vision, la date, l’heure et les objets visibles.",
      "Avant de voyager dans le temps, choisissez le lieu d’observation : position actuelle, ville historique ou coordonnées manuelles.",
      "Pour choisir un moment, ouvrez Date et heure locales. Entrez les valeurs ou choisissez un événement : sa date s’inscrit automatiquement. Sinon, entrez-la manuellement, puis Appliquer.",
      "Pour l’éclipse totale du 8 avril 2024, regardez la Lune masquer le Soleil. Le Temps sidéral fixe garde les étoiles immobiles.",
      "Admirez aussi l’alignement planétaire vu de Pékin, puis depuis d’autres régions.",
      "Avec de grands pas de temps, Mars semble reculer parmi les étoiles pendant son mouvement rétrograde.",
      "Près du Soleil, Vénus et Mercure se déplacent rapidement. Observez surtout leurs phases changer au fil de leur orbite. Choisissez un lieu, un moment, et laissez parler le ciel.",
      "Time Travel Sky offre encore bien d’autres façons d’explorer le ciel. Pour toutes les fonctions et vidéos, visitez Micro Créatif."
    ],
    "vi": [
      "Time Travel Sky cho phép bạn khám phá bầu trời Trái Đất, từ vài phút đến hàng thiên niên kỷ.",
      "Màn hình hiển thị bầu trời, giá trị trường nhìn, ngày, giờ và các thiên thể đang thấy.",
      "Trước khi du hành thời gian, hãy chọn nơi quan sát: vị trí hiện tại, một thành phố lịch sử, hoặc tọa độ nhập thủ công.",
      "Để chọn thời điểm, mở Ngày & Giờ địa phương. Nhập các giá trị, hoặc chọn một sự kiện trong danh sách. Ngày sẽ tự động được điền. Nếu không, hãy nhập thủ công rồi nhấn Áp dụng.",
      "Với nhật thực toàn phần ngày 8 tháng 4 năm 2024, hãy ngắm Mặt Trăng che khuất Mặt Trời. Giờ sao cố định giữ các ngôi sao đứng yên.",
      "Bạn cũng có thể ngắm sự thẳng hàng hành tinh nhìn từ Bắc Kinh, rồi từ các vùng khác.",
      "Với bước thời gian dài hơn, Sao Hỏa dường như đi lùi giữa các ngôi sao trong chuyển động nghịch hành.",
      "Gần Mặt Trời, Sao Kim và Sao Thủy di chuyển nhanh. Bạn có thể thấy rõ các pha của chúng thay đổi trên quỹ đạo. Chọn một nơi, một thời điểm, và để bầu trời tự lên tiếng.",
      "Time Travel Sky còn nhiều cách khác để khám phá bầu trời theo thời gian. Để xem đầy đủ tính năng, điều khiển, ví dụ và video, hãy truy cập microcreatif.ca/time-travel.html."
    ],
    "de": [
      "Mit Time Travel Sky erkunden Sie den Himmel der Erde von Minuten bis zu Jahrtausenden.",
      "Der Bildschirm zeigt den Himmel, den Sichtfeldwert, Datum, Uhrzeit und die sichtbaren Himmelsobjekte.",
      "Bevor Sie durch die Zeit reisen, wählen Sie den Beobachtungsort: Ihren aktuellen Standort, eine historische Stadt oder manuell eingegebene Koordinaten.",
      "Um einen Zeitpunkt zu wählen, öffnen Sie Lokales Datum & Uhrzeit. Geben Sie die Werte ein oder wählen Sie ein Ereignis. Das Datum wird automatisch eingetragen. Sonst manuell eingeben und Anwenden tippen.",
      "Bei der totalen Sonnenfinsternis vom 8. April 2024 sehen Sie, wie der Mond die Sonne verdeckt. Feste Sternzeit hält die Sterne still.",
      "Sie können auch die von Peking aus gesehene Planetenstellung betrachten und sie danach aus anderen Regionen ansehen.",
      "Mit längeren Zeitschritten scheint Mars während seiner Rückläufigkeit zwischen den Sternen rückwärts zu wandern.",
      "In Sonnennähe bewegen sich Venus und Merkur schnell. Besonders gut sehen Sie, wie sich ihre Phasen verändern. Wählen Sie einen Ort, einen Zeitpunkt und lassen Sie den Himmel sprechen.",
      "Time Travel Sky bietet viele weitere Möglichkeiten, den Himmel durch die Zeit zu erkunden. Alle Funktionen, Bedienelemente, Beispiele und Videos finden Sie auf microcreatif.ca/time-travel.html."
    ],
    "es": [
      "Time Travel Sky te permite explorar el cielo de la Tierra, desde minutos hasta milenios.",
      "La pantalla muestra el cielo, el valor del campo de visión, la fecha, la hora y los objetos celestes visibles.",
      "Antes de viajar en el tiempo, elige el lugar de observación: tu ubicación actual, una ciudad histórica o coordenadas introducidas manualmente.",
      "Para elegir un momento, abre Fecha y hora locales. Introduce los valores o elige un evento de la lista. Su fecha se introduce automáticamente. Si no, introdúcela manualmente y pulsa Aplicar.",
      "Para el eclipse solar total del 8 de abril de 2024, observa cómo la Luna oculta el Sol. El tiempo sideral fijo mantiene inmóviles las estrellas.",
      "También puedes admirar la alineación planetaria vista desde Pekín y luego verla desde otras regiones.",
      "Con pasos de tiempo más largos, Marte parece retroceder entre las estrellas durante su movimiento retrógrado.",
      "Cerca del Sol, Venus y Mercurio se mueven rápidamente. Puedes observar cómo cambian sus fases a lo largo de sus órbitas. Elige un lugar, un momento, y deja que el cielo hable por sí mismo.",
      "Time Travel Sky ofrece muchas otras formas de explorar el cielo a través del tiempo. Para ver todas las funciones, controles, ejemplos y vídeos, visita microcreatif.ca/time-travel.html."
    ],
    "it": [
      "Time Travel Sky ti permette di esplorare il cielo della Terra, dai minuti ai millenni.",
      "Lo schermo mostra il cielo, il valore del campo visivo, la data, l’ora e gli oggetti celesti visibili.",
      "Prima di viaggiare nel tempo, scegli il luogo di osservazione: la posizione attuale, una città storica o coordinate inserite manualmente.",
      "Per scegliere un momento, apri Data e ora locali. Inserisci i valori oppure scegli un evento dall’elenco. La data viene inserita automaticamente. Altrimenti inseriscila manualmente, poi tocca Applica.",
      "Per l’eclissi solare totale dell’8 aprile 2024, osserva la Luna oscurare il Sole. Il tempo siderale fisso mantiene ferme le stelle.",
      "Puoi anche ammirare l’allineamento planetario visto da Pechino e poi osservarlo da altre regioni.",
      "Con intervalli di tempo più lunghi, Marte sembra muoversi all’indietro tra le stelle durante il moto retrogrado.",
      "Vicino al Sole, Venere e Mercurio si muovono rapidamente. Puoi soprattutto osservare le loro fasi cambiare lungo le orbite. Scegli un luogo, un momento, e lascia parlare il cielo.",
      "Time Travel Sky offre molti altri modi per esplorare il cielo nel tempo. Per tutte le funzioni, i comandi, gli esempi e i video, visita microcreatif.ca/time-travel.html."
    ],
    "ru": [
      "Time Travel Sky позволяет исследовать земное небо — от минут до тысячелетий.",
      "На экране показаны небо, значение поля зрения, дата, время и видимые небесные объекты.",
      "Перед путешествием во времени выберите место наблюдения: текущее местоположение, исторический город или координаты, введённые вручную.",
      "Чтобы выбрать момент, откройте «Местные дата и время». Введите значения или выберите событие из списка. Его дата подставится автоматически. Иначе введите её вручную и нажмите «Применить».",
      "Для полного солнечного затмения 8 апреля 2024 года посмотрите, как Луна закрывает Солнце. Фиксированное звёздное время удерживает звёзды неподвижными.",
      "Можно также полюбоваться выравниванием планет, видимым из Пекина, а затем посмотреть на него из других регионов.",
      "При больших шагах времени Марс во время ретроградного движения кажется движущимся назад среди звёзд.",
      "Рядом с Солнцем Венера и Меркурий быстро перемещаются. Особенно хорошо видно, как меняются их фазы на орбитах. Выберите место, момент — и пусть небо говорит само за себя.",
      "Time Travel Sky предлагает много других способов исследовать небо во времени. Все функции, элементы управления, примеры и видео доступны на microcreatif.ca/time-travel.html."
    ],
    "ar": [
      "يتيح لك Time Travel Sky استكشاف سماء الأرض، من دقائق إلى آلاف السنين.",
      "تعرض الشاشة السماء، وقيمة مجال الرؤية، والتاريخ، والوقت، والأجرام السماوية الظاهرة.",
      "قبل السفر عبر الزمن، اختر موقع الرصد: موقعك الحالي، أو مدينة تاريخية، أو إحداثيات تدخلها يدويًا.",
      "لاختيار لحظة، افتح التاريخ والوقت المحليين. أدخل القيم، أو اختر حدثًا من القائمة. يُدخل تاريخه تلقائيًا. وإلا فأدخله يدويًا ثم اضغط تطبيق.",
      "لكسوف الشمس الكلي في 8 أبريل 2024، شاهد القمر وهو يحجب الشمس. يحافظ الزمن النجمي الثابت على ثبات النجوم.",
      "يمكنك أيضًا مشاهدة اصطفاف الكواكب كما يُرى من بكين، ثم رؤيته من مناطق أخرى.",
      "مع خطوات زمنية أطول، يبدو المريخ وكأنه يتحرك إلى الخلف بين النجوم أثناء حركته التراجعية.",
      "قرب الشمس، تتحرك الزهرة وعطارد بسرعة. ويمكنك خصوصًا مشاهدة تغير أطوارهما أثناء دورانهما. اختر مكانًا، ولحظة، ودع السماء تتحدث بنفسها.",
      "يقدم Time Travel Sky طرقًا أخرى كثيرة لاستكشاف السماء عبر الزمن. للاطلاع على جميع الميزات وعناصر التحكم والأمثلة ومقاطع الفيديو، زر microcreatif.ca/time-travel.html."
    ],
    "zh-Hans": [
      "Time Travel Sky 让你探索地球天空，从几分钟到几千年。",
      "屏幕显示天空、视场数值、日期、时间和当前可见的天体。",
      "在穿越时间之前，先选择观测地点：当前位置、历史城市，或手动输入坐标。",
      "要选择一个时刻，请打开“本地日期与时间”。输入各项数值，或从列表中选择一个事件。事件日期会自动填入。否则请手动输入，然后点按“应用”。",
      "对于 2024 年 4 月 8 日的日全食，可以观看月球遮住太阳。“固定恒星时”会让星空保持静止。",
      "你还可以欣赏从北京看到的行星排列，再从其他地区观看。",
      "使用更长的时间步长时，火星在逆行期间看起来会在恒星间向后移动。",
      "靠近太阳时，金星和水星移动很快。你尤其可以看到它们的相位随着轨道运行而变化。选择一个地点，一个时刻，让天空自己说话。",
      "Time Travel Sky 还有许多探索天空随时间变化的方式。要查看全部功能、控制、示例和视频，请访问 microcreatif.ca/time-travel.html。"
    ],
    "zh-Hant": [
      "Time Travel Sky 讓你探索地球天空，從幾分鐘到幾千年。",
      "螢幕顯示天空、視場數值、日期、時間和目前可見的天體。",
      "在穿越時間之前，先選擇觀測地點：目前位置、歷史城市，或手動輸入座標。",
      "要選擇一個時刻，請打開「本地日期與時間」。輸入各項數值，或從列表中選擇一個事件。事件日期會自動填入。否則請手動輸入，然後點按「套用」。",
      "對於 2024 年 4 月 8 日的日全食，可以觀看月球遮住太陽。「固定恆星時」會讓星空保持靜止。",
      "你還可以欣賞從北京看到的行星排列，再從其他地區觀看。",
      "使用較長的時間步長時，火星在逆行期間看起來會在恆星間向後移動。",
      "靠近太陽時，金星和水星移動很快。你尤其可以看到它們的相位隨著軌道運行而變化。選擇一個地點，一個時刻，讓天空自己說話。",
      "Time Travel Sky 還有許多探索天空隨時間變化的方式。要查看全部功能、控制、範例和影片，請造訪 microcreatif.ca/time-travel.html。"
    ],
    "ja": [
      "Time Travel Skyでは、数分から数千年という時間スケールで地球の空を探索できます。",
      "画面には空、視野角の値、日付、時刻、見えている天体が表示されます。",
      "時間を旅する前に、観測地点を選びます。現在地、歴史的な都市、または手入力した座標を使えます。",
      "時刻を選ぶには「現地の日付と時刻」を開きます。値を入力するか、一覧からイベントを選びます。日付は自動入力されます。それ以外は手動で入力し、「適用」をタップします。",
      "2024年4月8日の皆既日食では、月が太陽を隠す様子を楽しめます。「恒星時固定」を使うと星は動きません。",
      "北京から見た惑星の整列も楽しめます。そのあと、別の地域からも見ることができます。",
      "時間刻みを長くすると、火星が逆行中に星々の間を後ろ向きに動くように見えます。",
      "太陽の近くでは、金星と水星が速く動きます。特に、軌道上で位相が変化する様子を観察できます。場所と時刻を選び、空そのものに語らせましょう。",
      "Time Travel Skyには、時間を通して空を探索する方法がさらにたくさんあります。すべての機能、操作、例、動画は microcreatif.ca/time-travel.html でご覧ください。"
    ],
    "ko": [
      "Time Travel Sky에서는 몇 분에서 수천 년에 이르는 시간 범위로 지구의 하늘을 탐험할 수 있습니다.",
      "화면에는 하늘, 시야각 값, 날짜, 시간, 현재 보이는 천체가 표시됩니다.",
      "시간 여행을 시작하기 전에 관측 위치를 선택합니다. 현재 위치, 역사적인 도시, 또는 직접 입력한 좌표를 사용할 수 있습니다.",
      "시점을 선택하려면 ‘현지 날짜 및 시간’을 엽니다. 값을 입력하거나 목록에서 이벤트를 선택하세요. 날짜는 자동으로 입력됩니다. 그 밖의 경우에는 직접 입력한 뒤 ‘적용’을 누르세요.",
      "2024년 4월 8일 개기일식에서는 달이 태양을 가리는 모습을 감상할 수 있습니다. ‘고정 항성시’는 별을 움직이지 않게 유지합니다.",
      "베이징에서 본 행성 정렬도 감상한 뒤, 다른 지역에서도 볼 수 있습니다.",
      "더 긴 시간 간격을 사용하면 화성이 역행할 때 별 사이에서 뒤로 움직이는 것처럼 보입니다.",
      "태양 근처에서는 금성과 수성이 빠르게 움직입니다. 특히 공전하면서 위상이 변하는 모습을 볼 수 있습니다. 장소와 시점을 고르고, 하늘이 스스로 말하게 하세요.",
      "Time Travel Sky에는 시간에 따라 하늘을 탐험하는 더 많은 방법이 있습니다. 모든 기능, 조작법, 예제와 동영상은 microcreatif.ca/time-travel.html에서 확인하세요."
    ]
  };

  const guideAudio = {
    "en": "audio/TimeTravelSky-Guide-en.m4a",
    "fr": "audio/TimeTravelSky-Guide-fr.m4a",
    "vi": "audio/TimeTravelSky-Guide-vi.m4a",
    "de": "audio/TimeTravelSky-Guide-de.m4a",
    "es": "audio/TimeTravelSky-Guide-es.m4a",
    "it": "audio/TimeTravelSky-Guide-it.m4a",
    "ru": "audio/TimeTravelSky-Guide-ru.m4a",
    "ar": "audio/TimeTravelSky-Guide-ar.m4a",
    "zh-Hans": "audio/TimeTravelSky-Guide-zh-Hans.m4a",
    "zh-Hant": "audio/TimeTravelSky-Guide-zh-Hant.m4a",
    "ja": "audio/TimeTravelSky-Guide-ja.m4a",
    "ko": "audio/TimeTravelSky-Guide-ko.m4a"
  };

  function normalizedLanguage(value) {
    return Object.prototype.hasOwnProperty.call(guideText, value) ? value : "en";
  }

  function initializeGuideLanguage() {
    const video = document.getElementById("guideVideo");
    const narration = document.getElementById("guideNarration");
    const caption = document.getElementById("guideCaption");
    const languageSelect = document.getElementById("languageSelect");
    if (!video || !narration || !caption) return;

    let currentLanguage = normalizedLanguage(languageSelect?.value || document.documentElement.lang || "en");
    let currentCue = -1;

    function updateGuideCaption(force = false) {
      const time = Number.isFinite(video.currentTime) ? video.currentTime : 0;
      let cueIndex = guideTimings.findIndex(cue => time >= cue.start && time < cue.end);
      if (cueIndex < 0 && time >= guideTimings[guideTimings.length - 1].end) cueIndex = guideTimings.length - 1;
      if (!force && cueIndex === currentCue) return;
      currentCue = cueIndex;
      caption.textContent = cueIndex >= 0 ? guideText[currentLanguage][cueIndex] : "";
      caption.dir = currentLanguage === "ar" ? "rtl" : "auto";
      caption.lang = currentLanguage;
    }

    function loadGuideAudio(language) {
      const nextLanguage = normalizedLanguage(language);
      const nextSource = guideAudio[nextLanguage];
      const wasPlaying = !video.paused;
      currentLanguage = nextLanguage;
      currentCue = -1;
      updateGuideCaption(true);

      const currentSource = narration.getAttribute("src") || narration.querySelector("source")?.getAttribute("src") || "";
      if (currentSource.endsWith(nextSource)) {
        if (Number.isFinite(narration.duration)) narration.currentTime = Math.min(video.currentTime, narration.duration);
        return;
      }

      narration.pause();
      narration.src = "videos/" + nextSource;
      narration.load();
      narration.addEventListener("loadedmetadata", function syncLoadedNarration() {
        narration.currentTime = Math.min(video.currentTime, narration.duration);
        if (wasPlaying && !video.paused) {
          const started = narration.play();
          if (started && typeof started.catch === "function") started.catch(() => {});
        }
      }, { once: true });
    }

    ["loadedmetadata", "durationchange", "timeupdate", "seeking", "seeked", "play", "pause", "ended"]
      .forEach(eventName => video.addEventListener(eventName, () => updateGuideCaption(false)));

    languageSelect?.addEventListener("change", () => loadGuideAudio(languageSelect.value));
    loadGuideAudio(currentLanguage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeGuideLanguage, { once: true });
  } else {
    initializeGuideLanguage();
  }
})();
