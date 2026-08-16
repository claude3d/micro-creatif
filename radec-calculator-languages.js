/* Micro Créatif
   RA / Dec / AZ / Alt website languages
   Version 1.0

   To add a language:
   1. Copy one language block inside RADEC_LANGUAGES.
   2. Change its language code, label, htmlLang and ogLocale.
   3. Translate its pageDescription and strings values.
   The HTML page and language menu do not need to be changed.
*/

const RADEC_LANGUAGES = {
  "en": {
    "label": "English",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "A fast coordinate calculator for serious telescope observers.",
    "mainNavigation": "Main navigation",
    "languageSelector": "Choose language",
    "strings": {
      "k01": "Home",
      "k02": "Apps",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "About",
      "k09": "Contact",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "A fast coordinate calculator for serious telescope observers.",
      "k12": "What it does",
      "k13": "Enter current right ascension and declination, and the app continuously computes hour angle, azimuth, altitude, local time, and local sidereal time for your observing location.",
      "k14": "Current coordinates are also called JNow, of-date coordinates, or RA/Dec on date.",
      "k15": "Features",
      "k16": "Live updates",
      "k17": "Coordinates update continuously as the Earth rotates.",
      "k18": "Current RA/Dec",
      "k19": "Designed for current RA and Dec coordinates for the observing date.",
      "k20": "Refraction option",
      "k21": "Atmospheric refraction can be enabled or disabled, with temperature adjustment.",
      "k22": "Observer location",
      "k23": "Uses the device location to compute local astronomical coordinates.",
      "k24": "Freeze mode",
      "k25": "Freeze the display to keep a coordinate result on screen.",
      "k26": "Last values remembered",
      "k27": "The last entered RA and Dec values are restored when the app opens again.",
      "k28": "Screenshots",
      "k29": "Screenshots will be added here before App Store submission.",
      "k30": "Accuracy",
      "k31": "The app is designed for practical telescope use with current RA/Dec coordinates for the observing date, time, and location, with optional atmospheric refraction.",
      "k32": "For best accuracy, enter current RA/Dec values for the object you want to observe. Current RA/Dec values can be obtained from astronomy software or from upcoming Micro Créatif astronomy apps that display coordinates for the observing date.",
      "k33": "During development, tests with known stars and matching observer coordinates showed agreement of about one arcsecond or better in the tested cases.",
      "k34": "Older catalog coordinates, such as J2000, can still be entered, but the calculated position may differ from the current sky position by several arcminutes.",
      "k35": "Atmospheric refraction depends on real observing conditions. Near the horizon, local temperature, pressure, humidity, and terrain can affect the apparent altitude.",
      "k36": "Status",
      "k37": "Version 2.0 is being prepared for iPhone and iPad.",
      "k38": "← Back to apps",
      "k39": "Montreal | Ho Chi Minh City",
      "k40": "Privacy: This application does not collect, store, transmit, or share any personal information."
    },
    "htmlLang": "en-CA",
    "ogLocale": "en_CA"
  },
  "fr": {
    "label": "Français",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "Un calculateur rapide de coordonnées pour les observateurs sérieux au télescope.",
    "mainNavigation": "Navigation principale",
    "languageSelector": "Choisir la langue",
    "strings": {
      "k01": "Accueil",
      "k02": "Apps",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "À propos",
      "k09": "Contact",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "Un calculateur rapide de coordonnées pour les observateurs sérieux au télescope.",
      "k12": "Ce que fait l’app",
      "k13": "Entrez l’ascension droite et la déclinaison actuelles; l’app calcule en continu l’angle horaire, l’azimut, l’altitude, l’heure locale et l’heure sidérale locale pour votre lieu d’observation.",
      "k14": "Les coordonnées actuelles sont aussi appelées JNow, coordonnées de la date, ou AD/Déc à la date.",
      "k15": "Fonctions",
      "k16": "Mise à jour en direct",
      "k17": "Les coordonnées se mettent à jour continuellement pendant la rotation de la Terre.",
      "k18": "AD/Déc actuelles",
      "k19": "Conçue pour les coordonnées AD et Déc actuelles à la date d’observation.",
      "k20": "Réfraction optionnelle",
      "k21": "La réfraction atmosphérique peut être activée ou désactivée, avec ajustement de la température.",
      "k22": "Position de l’observateur",
      "k23": "Utilise la position de l’appareil pour calculer les coordonnées astronomiques locales.",
      "k24": "Mode gel",
      "k25": "Gelez l’affichage pour garder un résultat de coordonnées à l’écran.",
      "k26": "Dernières valeurs mémorisées",
      "k27": "Les dernières valeurs AD et Déc sont restaurées à la réouverture de l’app.",
      "k28": "Captures d’écran",
      "k29": "Les captures d’écran seront ajoutées ici avant la soumission à l’App Store.",
      "k30": "Précision",
      "k31": "L’app est conçue pour l’usage pratique au télescope avec les coordonnées AD/Déc actuelles pour la date, l’heure et le lieu d’observation, avec réfraction atmosphérique optionnelle.",
      "k32": "Pour une meilleure précision, entrez les valeurs AD/Déc actuelles de l’objet que vous voulez observer. Les valeurs AD/Déc actuelles peuvent être obtenues avec des logiciels d’astronomie ou avec de futures apps d’astronomie de Micro Créatif qui affichent les coordonnées pour la date d’observation.",
      "k33": "Pendant le développement, des tests avec des étoiles connues et des coordonnées d’observation correspondantes ont montré un accord d’environ une seconde d’arc ou mieux dans les cas testés.",
      "k34": "Des coordonnées de catalogue plus anciennes, comme J2000, peuvent quand même être entrées, mais la position calculée peut différer de la position actuelle dans le ciel de plusieurs minutes d’arc.",
      "k35": "La réfraction atmosphérique dépend des conditions réelles d’observation. Près de l’horizon, la température locale, la pression, l’humidité et le terrain peuvent influencer l’altitude apparente.",
      "k36": "État",
      "k37": "La version 2.0 est en préparation pour iPhone et iPad.",
      "k38": "← Retour aux apps",
      "k39": "Montréal | Hô Chi Minh-Ville",
      "k40": "Confidentialité : cette application ne collecte, ne stocke, ne transmet ni ne partage aucun renseignement personnel."
    },
    "htmlLang": "fr-CA",
    "ogLocale": "fr_CA"
  },
  "vi": {
    "label": "Tiếng Việt",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "Một máy tính tọa độ nhanh dành cho người quan sát nghiêm túc bằng kính thiên văn.",
    "mainNavigation": "Điều hướng chính",
    "languageSelector": "Chọn ngôn ngữ",
    "strings": {
      "k01": "Trang chủ",
      "k02": "Ứng dụng",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "Giới thiệu",
      "k09": "Liên hệ",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "Một máy tính tọa độ nhanh dành cho người quan sát nghiêm túc bằng kính thiên văn.",
      "k12": "Ứng dụng làm gì",
      "k13": "Nhập xích kinh và xích vĩ hiện tại; ứng dụng liên tục tính góc giờ, phương vị, độ cao, giờ địa phương và giờ sao địa phương cho vị trí quan sát của bạn.",
      "k14": "Tọa độ hiện tại còn được gọi là JNow, tọa độ theo ngày hoặc RA/Dec tại ngày quan sát.",
      "k15": "Tính năng",
      "k16": "Cập nhật trực tiếp",
      "k17": "Tọa độ được cập nhật liên tục khi Trái Đất quay.",
      "k18": "RA/Dec hiện tại",
      "k19": "Được thiết kế cho tọa độ RA và Dec hiện tại của ngày quan sát.",
      "k20": "Tùy chọn khúc xạ",
      "k21": "Có thể bật hoặc tắt khúc xạ khí quyển, kèm điều chỉnh nhiệt độ.",
      "k22": "Vị trí người quan sát",
      "k23": "Sử dụng vị trí của thiết bị để tính các tọa độ thiên văn địa phương.",
      "k24": "Chế độ đóng băng",
      "k25": "Đóng băng màn hình để giữ một kết quả tọa độ trên màn hình.",
      "k26": "Ghi nhớ giá trị cuối",
      "k27": "Các giá trị RA và Dec được nhập gần nhất sẽ được khôi phục khi mở lại ứng dụng.",
      "k28": "Ảnh chụp màn hình",
      "k29": "Ảnh chụp màn hình sẽ được thêm vào đây trước khi gửi lên App Store.",
      "k30": "Độ chính xác",
      "k31": "Ứng dụng được thiết kế cho việc sử dụng thực tế với kính thiên văn, dùng tọa độ RA/Dec hiện tại theo ngày, giờ và vị trí quan sát, với khúc xạ khí quyển tùy chọn.",
      "k32": "Để có độ chính xác tốt nhất, hãy nhập các giá trị RA/Dec hiện tại của thiên thể bạn muốn quan sát. Có thể lấy các giá trị RA/Dec hiện tại từ phần mềm thiên văn hoặc từ các ứng dụng thiên văn Micro Créatif sắp tới hiển thị tọa độ cho ngày quan sát.",
      "k33": "Trong quá trình phát triển, các thử nghiệm với những ngôi sao đã biết và tọa độ người quan sát tương ứng cho thấy độ phù hợp khoảng một giây cung hoặc tốt hơn trong các trường hợp đã thử.",
      "k34": "Vẫn có thể nhập các tọa độ danh mục cũ hơn, chẳng hạn J2000, nhưng vị trí tính được có thể khác vị trí hiện tại trên bầu trời vài phút cung.",
      "k35": "Khúc xạ khí quyển phụ thuộc vào điều kiện quan sát thực tế. Gần đường chân trời, nhiệt độ, áp suất, độ ẩm và địa hình địa phương có thể ảnh hưởng đến độ cao biểu kiến.",
      "k36": "Trạng thái",
      "k37": "Phiên bản 2.0 đang được chuẩn bị cho iPhone và iPad.",
      "k38": "← Quay lại ứng dụng",
      "k39": "Montréal | Thành phố Hồ Chí Minh",
      "k40": "Quyền riêng tư: Ứng dụng này không thu thập, lưu trữ, truyền hoặc chia sẻ bất kỳ thông tin cá nhân nào."
    },
    "htmlLang": "vi-VN",
    "ogLocale": "vi_VN"
  },
  "ja": {
    "label": "日本語",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "本格的な望遠鏡観測者向けの高速座標計算アプリです。",
    "mainNavigation": "メインナビゲーション",
    "languageSelector": "言語を選択",
    "strings": {
      "k01": "ホーム",
      "k02": "アプリ",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "概要",
      "k09": "お問い合わせ",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "本格的な望遠鏡観測者向けの高速座標計算アプリです。",
      "k12": "できること",
      "k13": "現在の赤経と赤緯を入力すると、観測地点の時角、方位角、高度、地方時、地方恒星時を連続的に計算します。",
      "k14": "現在座標は JNow、of-date 座標、または観測日現在の RA/Dec とも呼ばれます。",
      "k15": "機能",
      "k16": "リアルタイム更新",
      "k17": "地球の自転に合わせて座標を連続的に更新します。",
      "k18": "現在の RA/Dec",
      "k19": "観測日の現在の RA と Dec 座標を使用するよう設計されています。",
      "k20": "大気差オプション",
      "k21": "大気差はオンまたはオフにでき、温度補正も行えます。",
      "k22": "観測者の位置",
      "k23": "端末の位置情報を使ってローカルな天文座標を計算します。",
      "k24": "表示固定モード",
      "k25": "座標結果を画面に保持するため表示を固定できます。",
      "k26": "最後の値を記憶",
      "k27": "最後に入力した RA と Dec の値は、アプリを再度開いたときに復元されます。",
      "k28": "スクリーンショット",
      "k29": "App Store への提出前に、ここにスクリーンショットを追加します。",
      "k30": "精度",
      "k31": "このアプリは、観測日・時刻・場所における現在の RA/Dec 座標を使った実用的な望遠鏡観測向けに設計されており、大気差は任意で適用できます。",
      "k32": "最良の精度を得るには、観測したい天体の現在の RA/Dec 値を入力してください。現在の RA/Dec 値は天文ソフトウェア、または観測日の座標を表示する今後の Micro Créatif 天文アプリから取得できます。",
      "k33": "開発中、既知の恒星と対応する観測者座標を使ったテストでは、試したケースで約1秒角以内、またはそれ以上の一致が得られました。",
      "k34": "J2000 のような古いカタログ座標も入力できますが、計算された位置は現在の空での位置と数分角ずれる場合があります。",
      "k35": "大気差は実際の観測条件に依存します。地平線付近では、現地の気温、気圧、湿度、地形が見かけの高度に影響することがあります。",
      "k36": "状況",
      "k37": "バージョン 2.0 を iPhone と iPad 向けに準備中です。",
      "k38": "← アプリ一覧に戻る",
      "k39": "モントリオール | ホーチミン市",
      "k40": "プライバシー：このアプリは個人情報を収集、保存、送信、共有しません。"
    },
    "htmlLang": "ja-JP",
    "ogLocale": "ja_JP"
  },
  "zh-Hans": {
    "label": "简体中文",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "面向认真望远镜观测者的快速坐标计算器。",
    "mainNavigation": "主导航",
    "languageSelector": "选择语言",
    "strings": {
      "k01": "首页",
      "k02": "应用",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "关于",
      "k09": "联系",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "面向认真望远镜观测者的快速坐标计算器。",
      "k12": "功能说明",
      "k13": "输入当前赤经和赤纬，应用会持续计算您所在观测地点的时角、方位角、高度、当地时间和当地恒星时。",
      "k14": "当前坐标也称为 JNow、日期坐标（of-date）或观测日期的 RA/Dec。",
      "k15": "功能",
      "k16": "实时更新",
      "k17": "随着地球自转，坐标会持续更新。",
      "k18": "当前 RA/Dec",
      "k19": "专为观测日期的当前 RA 和 Dec 坐标设计。",
      "k20": "折射选项",
      "k21": "可以启用或关闭大气折射，并可调整温度。",
      "k22": "观测者位置",
      "k23": "使用设备位置计算当地天文坐标。",
      "k24": "冻结模式",
      "k25": "冻结显示，以便将坐标结果保留在屏幕上。",
      "k26": "记住最后的数值",
      "k27": "应用再次打开时，会恢复最后输入的 RA 和 Dec 数值。",
      "k28": "屏幕截图",
      "k29": "在提交 App Store 之前，会在这里添加屏幕截图。",
      "k30": "精度",
      "k31": "本应用面向实际望远镜使用，根据观测日期、时间和地点使用当前 RA/Dec 坐标，并可选择应用大气折射。",
      "k32": "为了获得最佳精度，请输入您要观测天体的当前 RA/Dec 值。当前 RA/Dec 值可以从天文软件或即将推出的、可显示观测日期坐标的 Micro Créatif 天文应用中获得。",
      "k33": "开发期间，使用已知恒星和相应观测者坐标进行的测试表明，在所测试的情况下，结果一致性约为一角秒或更好。",
      "k34": "仍可输入较旧的星表坐标，例如 J2000，但计算位置可能与当前天空位置相差几角分。",
      "k35": "大气折射取决于实际观测条件。在地平线附近，当地温度、气压、湿度和地形都可能影响表观高度。",
      "k36": "状态",
      "k37": "正在为 iPhone 和 iPad 准备 2.0 版本。",
      "k38": "← 返回应用",
      "k39": "蒙特利尔 | 胡志明市",
      "k40": "隐私：本应用不会收集、存储、传输或共享任何个人信息。"
    },
    "htmlLang": "zh-CN",
    "ogLocale": "zh_CN"
  },
  "zh-Hant": {
    "label": "繁體中文",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "面向認真望遠鏡觀測者的快速座標計算器。",
    "mainNavigation": "主導覽",
    "languageSelector": "選擇語言",
    "strings": {
      "k01": "首頁",
      "k02": "應用程式",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "關於",
      "k09": "聯絡",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "面向認真望遠鏡觀測者的快速座標計算器。",
      "k12": "功能說明",
      "k13": "輸入目前赤經和赤緯，應用程式會持續計算您所在觀測地點的時角、方位角、高度、當地時間和當地恆星時。",
      "k14": "目前座標也稱為 JNow、日期座標（of-date）或觀測日期的 RA/Dec。",
      "k15": "功能",
      "k16": "即時更新",
      "k17": "隨著地球自轉，座標會持續更新。",
      "k18": "目前 RA/Dec",
      "k19": "專為觀測日期的目前 RA 和 Dec 座標設計。",
      "k20": "折射選項",
      "k21": "可以啟用或關閉大氣折射，並可調整溫度。",
      "k22": "觀測者位置",
      "k23": "使用裝置位置計算當地天文座標。",
      "k24": "凍結模式",
      "k25": "凍結顯示，以便將座標結果保留在螢幕上。",
      "k26": "記住最後的數值",
      "k27": "應用程式再次開啟時，會恢復最後輸入的 RA 和 Dec 數值。",
      "k28": "螢幕截圖",
      "k29": "在提交 App Store 之前，會在這裡加入螢幕截圖。",
      "k30": "精度",
      "k31": "本應用程式面向實際望遠鏡使用，根據觀測日期、時間和地點使用目前 RA/Dec 座標，並可選擇套用大氣折射。",
      "k32": "為了獲得最佳精度，請輸入您要觀測天體的目前 RA/Dec 值。目前 RA/Dec 值可以從天文軟體或即將推出、可顯示觀測日期座標的 Micro Créatif 天文應用程式中取得。",
      "k33": "開發期間，使用已知恆星和相應觀測者座標進行的測試表明，在所測試的情況下，結果一致性約為一角秒或更好。",
      "k34": "仍可輸入較舊的星表座標，例如 J2000，但計算位置可能與目前天空位置相差數角分。",
      "k35": "大氣折射取決於實際觀測條件。在地平線附近，當地溫度、氣壓、濕度和地形都可能影響表觀高度。",
      "k36": "狀態",
      "k37": "正在為 iPhone 和 iPad 準備 2.0 版本。",
      "k38": "← 返回應用程式",
      "k39": "蒙特婁 | 胡志明市",
      "k40": "隱私：本應用程式不會收集、儲存、傳輸或分享任何個人資訊。"
    },
    "htmlLang": "zh-TW",
    "ogLocale": "zh_TW"
  },
  "es": {
    "label": "Español",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "Un rápido calculador de coordenadas para observadores serios con telescopio.",
    "mainNavigation": "Navegación principal",
    "languageSelector": "Elegir idioma",
    "strings": {
      "k01": "Inicio",
      "k02": "Apps",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "Acerca de",
      "k09": "Contacto",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "Un rápido calculador de coordenadas para observadores serios con telescopio.",
      "k12": "Qué hace",
      "k13": "Introduce la ascensión recta y la declinación actuales, y la app calcula continuamente el ángulo horario, el azimut, la altitud, la hora local y la hora sidérea local para tu lugar de observación.",
      "k14": "Las coordenadas actuales también se denominan JNow, coordenadas de la fecha u RA/Dec para la fecha.",
      "k15": "Funciones",
      "k16": "Actualizaciones en tiempo real",
      "k17": "Las coordenadas se actualizan continuamente a medida que gira la Tierra.",
      "k18": "RA/Dec actuales",
      "k19": "Diseñada para las coordenadas RA y Dec actuales de la fecha de observación.",
      "k20": "Opción de refracción",
      "k21": "La refracción atmosférica se puede activar o desactivar, con ajuste de temperatura.",
      "k22": "Ubicación del observador",
      "k23": "Utiliza la ubicación del dispositivo para calcular las coordenadas astronómicas locales.",
      "k24": "Modo congelar",
      "k25": "Congela la pantalla para mantener un resultado de coordenadas visible.",
      "k26": "Recuerda los últimos valores",
      "k27": "Los últimos valores de RA y Dec introducidos se restauran al volver a abrir la app.",
      "k28": "Capturas de pantalla",
      "k29": "Las capturas de pantalla se añadirán aquí antes de enviar la app al App Store.",
      "k30": "Precisión",
      "k31": "La app está diseñada para el uso práctico con telescopio, utilizando coordenadas RA/Dec actuales para la fecha, hora y lugar de observación, con refracción atmosférica opcional.",
      "k32": "Para obtener la mejor precisión, introduce los valores RA/Dec actuales del objeto que deseas observar. Estos valores se pueden obtener de software de astronomía o de próximas apps de astronomía de Micro Créatif que muestren coordenadas para la fecha de observación.",
      "k33": "Durante el desarrollo, las pruebas con estrellas conocidas y coordenadas del observador correspondientes mostraron una concordancia de aproximadamente un segundo de arco o mejor en los casos probados.",
      "k34": "También se pueden introducir coordenadas de catálogo más antiguas, como J2000, pero la posición calculada puede diferir de la posición actual en el cielo en varios minutos de arco.",
      "k35": "La refracción atmosférica depende de las condiciones reales de observación. Cerca del horizonte, la temperatura, la presión, la humedad y el terreno locales pueden afectar la altitud aparente.",
      "k36": "Estado",
      "k37": "La versión 2.0 se está preparando para iPhone y iPad.",
      "k38": "← Volver a las apps",
      "k39": "Montreal | Ciudad Ho Chi Minh",
      "k40": "Privacidad: Esta aplicación no recopila, almacena, transmite ni comparte información personal."
    },
    "htmlLang": "es",
    "ogLocale": "es_ES"
  },
  "de": {
    "label": "Deutsch",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "Ein schneller Koordinatenrechner für anspruchsvolle Teleskopbeobachter.",
    "mainNavigation": "Hauptnavigation",
    "languageSelector": "Sprache auswählen",
    "strings": {
      "k01": "Startseite",
      "k02": "Apps",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "Über uns",
      "k09": "Kontakt",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "Ein schneller Koordinatenrechner für anspruchsvolle Teleskopbeobachter.",
      "k12": "Was die App macht",
      "k13": "Geben Sie die aktuelle Rektaszension und Deklination ein. Die App berechnet fortlaufend Stundenwinkel, Azimut, Höhe, Ortszeit und lokale Sternzeit für Ihren Beobachtungsort.",
      "k14": "Aktuelle Koordinaten werden auch JNow, Koordinaten des Datums oder RA/Dec zum Datum genannt.",
      "k15": "Funktionen",
      "k16": "Live-Aktualisierung",
      "k17": "Die Koordinaten werden während der Erdrotation fortlaufend aktualisiert.",
      "k18": "Aktuelle RA/Dec",
      "k19": "Für aktuelle RA- und Dec-Koordinaten zum Beobachtungsdatum ausgelegt.",
      "k20": "Refraktionsoption",
      "k21": "Die atmosphärische Refraktion kann ein- oder ausgeschaltet und an die Temperatur angepasst werden.",
      "k22": "Beobachterstandort",
      "k23": "Verwendet den Gerätestandort zur Berechnung lokaler astronomischer Koordinaten.",
      "k24": "Einfriermodus",
      "k25": "Frieren Sie die Anzeige ein, um ein Koordinatenergebnis auf dem Bildschirm zu behalten.",
      "k26": "Letzte Werte merken",
      "k27": "Die zuletzt eingegebenen RA- und Dec-Werte werden beim erneuten Öffnen der App wiederhergestellt.",
      "k28": "Bildschirmfotos",
      "k29": "Vor der Einreichung im App Store werden hier Bildschirmfotos hinzugefügt.",
      "k30": "Genauigkeit",
      "k31": "Die App ist für den praktischen Teleskopeinsatz mit aktuellen RA/Dec-Koordinaten für Beobachtungsdatum, Uhrzeit und Standort sowie optionaler atmosphärischer Refraktion ausgelegt.",
      "k32": "Für beste Genauigkeit geben Sie die aktuellen RA/Dec-Werte des zu beobachtenden Objekts ein. Aktuelle RA/Dec-Werte können aus Astronomiesoftware oder aus künftigen Micro Créatif Astronomie-Apps stammen, die Koordinaten für das Beobachtungsdatum anzeigen.",
      "k33": "Während der Entwicklung zeigten Tests mit bekannten Sternen und passenden Beobachterkoordinaten in den getesteten Fällen eine Übereinstimmung von etwa einer Bogensekunde oder besser.",
      "k34": "Ältere Katalogkoordinaten wie J2000 können ebenfalls eingegeben werden, die berechnete Position kann jedoch um mehrere Bogenminuten von der aktuellen Himmelsposition abweichen.",
      "k35": "Die atmosphärische Refraktion hängt von den tatsächlichen Beobachtungsbedingungen ab. In Horizontnähe können lokale Temperatur, Luftdruck, Luftfeuchtigkeit und Gelände die scheinbare Höhe beeinflussen.",
      "k36": "Status",
      "k37": "Version 2.0 wird für iPhone und iPad vorbereitet.",
      "k38": "← Zurück zu den Apps",
      "k39": "Montreal | Ho-Chi-Minh-Stadt",
      "k40": "Datenschutz: Diese Anwendung erfasst, speichert, überträgt oder teilt keine personenbezogenen Daten."
    },
    "htmlLang": "de",
    "ogLocale": "de_DE"
  },
  "ar": {
    "label": "العربية",
    "dir": "rtl",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "حاسبة إحداثيات سريعة للمراقبين الجادين باستخدام التلسكوب.",
    "mainNavigation": "التنقل الرئيسي",
    "languageSelector": "اختر اللغة",
    "strings": {
      "k01": "الرئيسية",
      "k02": "التطبيقات",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "حول",
      "k09": "اتصل بنا",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "حاسبة إحداثيات سريعة للمراقبين الجادين باستخدام التلسكوب.",
      "k12": "ما الذي يفعله",
      "k13": "أدخل المطلع المستقيم والميل الحاليين، وسيحسب التطبيق باستمرار زاوية الساعة والسمت والارتفاع والوقت المحلي والوقت النجمي المحلي لموقع الرصد.",
      "k14": "تُسمى الإحداثيات الحالية أيضًا JNow أو إحداثيات التاريخ أو RA/Dec عند تاريخ الرصد.",
      "k15": "الميزات",
      "k16": "تحديثات مباشرة",
      "k17": "تتحدث الإحداثيات باستمرار مع دوران الأرض.",
      "k18": "RA/Dec الحالية",
      "k19": "مصمم لإحداثيات RA وDec الحالية في تاريخ الرصد.",
      "k20": "خيار الانكسار",
      "k21": "يمكن تشغيل الانكسار الجوي أو إيقافه، مع إمكانية ضبط درجة الحرارة.",
      "k22": "موقع المراقب",
      "k23": "يستخدم موقع الجهاز لحساب الإحداثيات الفلكية المحلية.",
      "k24": "وضع التجميد",
      "k25": "جمّد العرض للاحتفاظ بنتيجة الإحداثيات على الشاشة.",
      "k26": "تذكّر آخر القيم",
      "k27": "تُستعاد آخر قيم RA وDec المدخلة عند فتح التطبيق مرة أخرى.",
      "k28": "لقطات الشاشة",
      "k29": "ستُضاف لقطات الشاشة هنا قبل إرسال التطبيق إلى App Store.",
      "k30": "الدقة",
      "k31": "صُمم التطبيق للاستخدام العملي مع التلسكوب باستخدام إحداثيات RA/Dec الحالية لتاريخ الرصد ووقته وموقعه، مع إمكانية تطبيق الانكسار الجوي.",
      "k32": "لأفضل دقة، أدخل قيم RA/Dec الحالية للجرم الذي تريد رصده. يمكن الحصول على القيم الحالية من برامج فلكية أو من تطبيقات Micro Créatif الفلكية القادمة التي تعرض الإحداثيات لتاريخ الرصد.",
      "k33": "أظهرت الاختبارات أثناء التطوير باستخدام نجوم معروفة وإحداثيات مراقب مطابقة توافقًا يبلغ نحو ثانية قوسية واحدة أو أفضل في الحالات التي تم اختبارها.",
      "k34": "يمكن إدخال إحداثيات فهرسية أقدم مثل J2000، لكن الموضع المحسوب قد يختلف عن الموضع الحالي في السماء بعدة دقائق قوسية.",
      "k35": "يعتمد الانكسار الجوي على ظروف الرصد الفعلية. قرب الأفق، يمكن لدرجة الحرارة والضغط والرطوبة والتضاريس المحلية أن تؤثر في الارتفاع الظاهري.",
      "k36": "الحالة",
      "k37": "يجري إعداد الإصدار 2.0 لأجهزة iPhone وiPad.",
      "k38": "← العودة إلى التطبيقات",
      "k39": "مونتريال | مدينة هو تشي منه",
      "k40": "الخصوصية: لا يجمع هذا التطبيق أي معلومات شخصية ولا يخزنها أو يرسلها أو يشاركها."
    },
    "htmlLang": "ar",
    "ogLocale": "ar_AR"
  },
  "ko": {
    "label": "한국어",
    "dir": "ltr",
    "pageTitle": "RA / Dec / AZ / Alt – Micro Créatif",
    "pageDescription": "진지한 망원경 관측자를 위한 빠른 좌표 계산기입니다.",
    "mainNavigation": "주요 탐색",
    "languageSelector": "언어 선택",
    "strings": {
      "k01": "홈",
      "k02": "앱",
      "k03": "RA / Dec / AZ / Alt",
      "k04": "Virtual Telescope",
      "k05": "Sol and Stars",
      "k06": "Alien Sky",
      "k07": "Time Travel Sky",
      "k08": "정보",
      "k09": "연락처",
      "k10": "RA / Dec / AZ / Alt",
      "k11": "진지한 망원경 관측자를 위한 빠른 좌표 계산기입니다.",
      "k12": "기능",
      "k13": "현재 적경과 적위를 입력하면 앱이 관측 위치의 시간각, 방위각, 고도, 현지 시각, 지방 항성시를 계속 계산합니다.",
      "k14": "현재 좌표는 JNow, 날짜 기준 좌표 또는 해당 날짜의 RA/Dec라고도 합니다.",
      "k15": "주요 기능",
      "k16": "실시간 업데이트",
      "k17": "지구가 자전함에 따라 좌표가 계속 업데이트됩니다.",
      "k18": "현재 RA/Dec",
      "k19": "관측 날짜의 현재 RA 및 Dec 좌표를 사용하도록 설계되었습니다.",
      "k20": "굴절 옵션",
      "k21": "대기 굴절을 켜거나 끌 수 있으며 온도 조정도 가능합니다.",
      "k22": "관측자 위치",
      "k23": "기기 위치를 사용하여 현지 천문 좌표를 계산합니다.",
      "k24": "고정 모드",
      "k25": "좌표 결과를 화면에 유지하도록 표시를 고정합니다.",
      "k26": "마지막 값 기억",
      "k27": "마지막으로 입력한 RA와 Dec 값은 앱을 다시 열 때 복원됩니다.",
      "k28": "스크린샷",
      "k29": "App Store 제출 전에 여기에 스크린샷이 추가됩니다.",
      "k30": "정확도",
      "k31": "이 앱은 관측 날짜, 시간, 위치의 현재 RA/Dec 좌표를 사용한 실제 망원경 관측을 위해 설계되었으며 대기 굴절은 선택적으로 적용할 수 있습니다.",
      "k32": "최상의 정확도를 위해 관측하려는 천체의 현재 RA/Dec 값을 입력하세요. 현재 RA/Dec 값은 천문 소프트웨어 또는 관측 날짜의 좌표를 표시하는 향후 Micro Créatif 천문학 앱에서 얻을 수 있습니다.",
      "k33": "개발 중 알려진 별과 일치하는 관측자 좌표로 테스트한 결과, 시험한 경우 약 1각초 또는 그보다 좋은 일치를 보였습니다.",
      "k34": "J2000과 같은 오래된 목록 좌표도 입력할 수 있지만 계산된 위치는 현재 하늘 위치와 수 분각 차이가 날 수 있습니다.",
      "k35": "대기 굴절은 실제 관측 조건에 따라 달라집니다. 지평선 근처에서는 현지 온도, 기압, 습도, 지형이 겉보기 고도에 영향을 줄 수 있습니다.",
      "k36": "상태",
      "k37": "버전 2.0을 iPhone과 iPad용으로 준비 중입니다.",
      "k38": "← 앱으로 돌아가기",
      "k39": "몬트리올 | 호찌민시",
      "k40": "개인정보 보호: 이 앱은 어떠한 개인정보도 수집, 저장, 전송 또는 공유하지 않습니다."
    },
    "htmlLang": "ko-KR",
    "ogLocale": "ko_KR"
  }
};

(function () {
  const SITE_STORAGE_KEY = "mc_site_language";
  const LEGACY_STORAGE_KEY = "mc_language";
  const FALLBACK_LANGUAGE = "en";

  function supportedLanguage(code) {
    return Object.prototype.hasOwnProperty.call(RADEC_LANGUAGES, code);
  }

  function getInitialLanguage() {
    const saved = localStorage.getItem(SITE_STORAGE_KEY);
    if (saved && supportedLanguage(saved)) return saved;

    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacy && supportedLanguage(legacy)) return legacy;

    const browser = (navigator.language || FALLBACK_LANGUAGE).toLowerCase();
    if (browser.startsWith("ko")) return "ko";
    if (browser.startsWith("ar")) return "ar";
    if (browser.startsWith("fr")) return "fr";
    if (browser.startsWith("vi")) return "vi";
    if (browser.startsWith("ja")) return "ja";
    if (browser.startsWith("zh-tw") || browser.startsWith("zh-hk") ||
        browser.startsWith("zh-mo") || browser.includes("hant")) return "zh-Hant";
    if (browser.startsWith("zh") || browser.includes("hans")) return "zh-Hans";
    if (browser.startsWith("es")) return "es";
    if (browser.startsWith("de")) return "de";
    return FALLBACK_LANGUAGE;
  }

  function buildLanguageMenu(currentLanguage) {
    const select = document.getElementById("languageSelect");
    if (!select) return;

    select.innerHTML = "";
    Object.entries(RADEC_LANGUAGES).forEach(([code, language]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = language.label;
      option.selected = code === currentLanguage;
      select.appendChild(option);
    });

    select.addEventListener("change", () => applyLanguage(select.value));
  }

  function applyLanguage(code) {
    if (!supportedLanguage(code)) code = FALLBACK_LANGUAGE;
    const t = RADEC_LANGUAGES[code];

    document.documentElement.lang = t.htmlLang || code;
    document.documentElement.dir = t.dir || "ltr";

    localStorage.setItem(SITE_STORAGE_KEY, code);
    localStorage.setItem(
      LEGACY_STORAGE_KEY,
      (code === "en" || code === "fr") ? code : "en"
    );

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(t.strings, key)) {
        el.textContent = t.strings[key];
      }
    });

    const nav = document.querySelector("nav[data-i18n-aria]");
    if (nav) nav.setAttribute("aria-label", t.mainNavigation);

    const select = document.getElementById("languageSelect");
    if (select) {
      select.value = code;
      select.setAttribute("aria-label", t.languageSelector);
    }

    if (t.pageTitle) document.title = t.pageTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description && t.pageDescription) {
      description.setAttribute("content", t.pageDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && t.pageTitle) ogTitle.setAttribute("content", t.pageTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && t.pageDescription) {
      ogDescription.setAttribute("content", t.pageDescription);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale && t.ogLocale) ogLocale.setAttribute("content", t.ogLocale);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initialLanguage = getInitialLanguage();
    buildLanguageMenu(initialLanguage);
    applyLanguage(initialLanguage);
  });
})();
