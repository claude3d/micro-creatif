/* Micro Créatif
   Alien Sky website languages
   Version 1.0

   To add a language:
   1. Copy one language block inside ALIEN_SKY_LANGUAGES.
   2. Change its language code, label, htmlLang and ogLocale.
   3. Translate its pageDescription and strings values.
   The HTML page and language menu do not need to be changed.
*/

const ALIEN_SKY_LANGUAGES = {
  "en": {
    "label": "English",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "Leave Earth, travel to another star, and watch the real sky change around you.",
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
      "k10": "Alien Sky",
      "k11": "Leave Earth, travel to another star, and watch the real sky change around you.",
      "k12": "Choose a destination",
      "k13": "Select a nearby star or search the stellar catalogue. Alien Sky begins with the sky from your location on Earth, then points the journey toward the star you selected.",
      "k14": "Travel through space",
      "k15": "Move from Earth to the destination and return again. Look forward along the route or turn around to see how the Sun and the familiar constellations change behind you.",
      "k16": "A real changing sky",
      "k17": "Stars are placed using real positions, distances, brightnesses, colours, and motions. Nearby stars shift the most, while distant constellations change more subtly.",
      "k18": "Earth Sky comparison",
      "k19": "Return instantly to Earth Sky to compare the familiar view with the sky seen during the journey or from the destination star.",
      "k20": "The Solar System fades away",
      "k21": "The Sun, Moon, and planets begin in their correct Earth-sky positions. As you leave the Solar System, the Moon and planets disappear and the Sun becomes a distant point called Sol.",
      "k22": "The whole sky",
      "k23": "A wide planetarium-style view shows the Milky Way, constellation lines, star names, directions, the Sun, Moon, and visible planets. The view can be panned and zoomed on iPhone, iPad, and Mac.",
      "k24": "Current features",
      "k25": "Begin with the real sky from the observer’s location.",
      "k26": "Choose a destination star from a list or search the catalogue.",
      "k27": "Travel outward or return to Earth while watching the sky change.",
      "k28": "Look forward toward the destination or backward toward the Sun.",
      "k29": "Show the Milky Way, constellation lines, labels, directions, Sun, Moon, and planets.",
      "k30": "Display stellar-system information and confirmed exoplanets when available.",
      "k31": "For hardcore users",
      "k32": "Catalogues and astronomical corrections",
      "k33": "Alien Sky uses the complete HYG 4.2 master catalogue: 119,625 stars, including Hipparcos identifiers and astrometric data where available. Of these, 109,393 stars contain space-motion information. The app also includes constellation-line data and a catalogue of confirmed exoplanet-host systems.",
      "k34": "The catalogue starts at epoch J2000.0. At launch, each star with motion data is advanced to the current date using its three-dimensional Cartesian space velocity. Its X, Y and Z position, distance, right ascension, declination and apparent brightness are then recalculated.",
      "k35": "For Earth Sky, the engine applies precession, nutation and annual aberration, then uses apparent sidereal time and the observer’s latitude, longitude and altitude to place the sky correctly above the local horizon.",
      "k36": "The Sun, Moon and planets are calculated for the observer’s date and location. The Moon uses a topocentric position and its visible phase.",
      "k37": "During interstellar travel, Earth-only apparent corrections are deliberately removed. The app works in a physical fixed-J2000 three-dimensional frame, so parallax and the changing shapes of constellations arise naturally from the observer’s new position in space.",
      "k38": "Keyboard controls",
      "k39": "Move the sky left, right, up or down.",
      "k40": "Zoom in or zoom out.",
      "k41": "Reset the sky view.",
      "k42": "Dragging and pinch-to-zoom remain available on touch devices.",
      "k43": "The Easter egg",
      "k44": "Tap the Alien Sky title to switch to a Stellarium-comparison camera. In Earth Sky, the selected destination is centred while the local zenith remains toward the top. During Travel, the destination stays centred with a Stellarium-style camera roll. The N, E, S and W markers follow the active camera. Tap the title again to return to the normal North-up view.",
      "k45": "Status",
      "k46": "Alien Sky is under active development for iPhone, iPad, and Mac. Its astronomy engine, interstellar travel view, Earth Sky comparison, and principal controls are now working.",
      "k47": "← Back to apps",
      "k48": "Montreal | Ho Chi Minh City",
      "k49": "Privacy: Alien Sky does not collect or transmit personal information. The app uses your location only to calculate the sky. Your location is stored locally in the app on this device and is not transmitted or shared."
    },
    "htmlLang": "en-CA",
    "ogLocale": "en_CA"
  },
  "fr": {
    "label": "Français",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "Quittez la Terre, voyagez vers une autre étoile et observez le vrai ciel se transformer autour de vous.",
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
      "k10": "Alien Sky",
      "k11": "Quittez la Terre, voyagez vers une autre étoile et observez le vrai ciel se transformer autour de vous.",
      "k12": "Choisissez une destination",
      "k13": "Choisissez une étoile proche ou recherchez-la dans le catalogue stellaire. Alien Sky commence par le ciel depuis votre position sur Terre, puis oriente le voyage vers l’étoile choisie.",
      "k14": "Voyagez dans l’espace",
      "k15": "Voyagez de la Terre jusqu’à votre destination, puis revenez. Regardez vers l’avant ou retournez-vous pour voir comment le Soleil et les constellations familières se transforment derrière vous.",
      "k16": "Un vrai ciel en transformation",
      "k17": "Les étoiles sont placées selon leurs vraies positions, distances, luminosités, couleurs et mouvements. Les étoiles proches se déplacent davantage, tandis que les constellations lointaines changent plus subtilement.",
      "k18": "Comparaison avec le ciel terrestre",
      "k19": "Revenez instantanément au ciel terrestre pour comparer la vue familière avec celle du voyage ou celle observée depuis l’étoile de destination.",
      "k20": "Le Système solaire s’éloigne",
      "k21": "Le Soleil, la Lune et les planètes commencent à leur position correcte dans le ciel terrestre. En quittant le Système solaire, la Lune et les planètes disparaissent et le Soleil devient un point lointain nommé Sol.",
      "k22": "Le ciel entier",
      "k23": "Une large vue de style planétarium montre la Voie lactée, les lignes des constellations, les noms des étoiles, les directions, le Soleil, la Lune et les planètes visibles. La vue peut être déplacée et agrandie sur iPhone, iPad et Mac.",
      "k24": "Fonctions actuelles",
      "k25": "Commencer avec le vrai ciel depuis la position de l’observateur.",
      "k26": "Choisir une étoile de destination dans une liste ou rechercher dans le catalogue.",
      "k27": "Voyager vers l’extérieur ou revenir vers la Terre en observant le ciel se transformer.",
      "k28": "Regarder vers l’étoile de destination ou vers l’arrière en direction du Soleil.",
      "k29": "Afficher la Voie lactée, les constellations, les noms, les directions, le Soleil, la Lune et les planètes.",
      "k30": "Afficher les renseignements sur le système stellaire et les exoplanètes confirmées lorsqu’ils sont disponibles.",
      "k31": "Pour les utilisateurs chevronnés",
      "k32": "Catalogues et corrections astronomiques",
      "k33": "Alien Sky utilise le catalogue maître HYG 4.2 complet : 119 625 étoiles, avec les identifiants Hipparcos et les données astrométriques lorsqu’ils sont disponibles. Parmi elles, 109 393 étoiles possèdent des données de mouvement dans l’espace. L’app comprend également les tracés des constellations et un catalogue de systèmes possédant des exoplanètes confirmées.",
      "k34": "Le catalogue part de l’époque J2000.0. Au lancement, chaque étoile possédant des données de mouvement est avancée jusqu’à la date actuelle à l’aide de sa vitesse spatiale cartésienne en trois dimensions. Sa position X, Y et Z, sa distance, son ascension droite, sa déclinaison et sa luminosité apparente sont ensuite recalculées.",
      "k35": "Pour le ciel terrestre, le moteur applique la précession, la nutation et l’aberration annuelle, puis utilise le temps sidéral apparent ainsi que la latitude, la longitude et l’altitude de l’observateur pour placer correctement le ciel au-dessus de l’horizon local.",
      "k36": "Le Soleil, la Lune et les planètes sont calculés pour la date et la position de l’observateur. La Lune utilise une position topocentrique et sa phase visible.",
      "k37": "Pendant le voyage interstellaire, les corrections apparentes propres à l’observation depuis la Terre sont volontairement retirées. L’app travaille dans un repère physique tridimensionnel fixe J2000, de sorte que la parallaxe et la transformation des constellations résultent naturellement de la nouvelle position de l’observateur dans l’espace.",
      "k38": "Commandes au clavier",
      "k39": "Déplacer le ciel vers la gauche, la droite, le haut ou le bas.",
      "k40": "Effectuer un zoom avant ou arrière.",
      "k41": "Réinitialiser la vue du ciel.",
      "k42": "Le déplacement au doigt et le zoom par pincement restent disponibles sur les appareils tactiles.",
      "k43": "L’œuf de Pâques",
      "k44": "Touchez le titre Alien Sky pour passer à une caméra de comparaison avec Stellarium. Dans le ciel terrestre, la destination choisie est centrée tandis que le zénith local demeure orienté vers le haut. Pendant le voyage, la destination reste centrée avec une orientation de caméra de style Stellarium. Les repères N, E, S et O suivent la caméra active. Touchez de nouveau le titre pour revenir à la vue normale avec le nord en haut.",
      "k45": "Statut",
      "k46": "Alien Sky est en développement actif pour iPhone, iPad et Mac. Son moteur astronomique, sa vue de voyage interstellaire, la comparaison avec le ciel terrestre et ses commandes principales fonctionnent maintenant.",
      "k47": "← Retour aux apps",
      "k48": "Montréal | Hô Chi Minh-Ville",
      "k49": "Confidentialité : Alien Sky ne collecte ni ne transmet de renseignements personnels. L’application utilise votre position uniquement pour calculer le ciel. Votre position est enregistrée localement dans l’application sur cet appareil; elle n’est ni transmise ni partagée."
    },
    "htmlLang": "fr-CA",
    "ogLocale": "fr_CA"
  },
  "vi": {
    "label": "Tiếng Việt",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "Rời Trái Đất, du hành đến một ngôi sao khác và quan sát bầu trời thật thay đổi xung quanh bạn.",
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
      "k10": "Alien Sky",
      "k11": "Rời Trái Đất, du hành đến một ngôi sao khác và quan sát bầu trời thật thay đổi xung quanh bạn.",
      "k12": "Chọn điểm đến",
      "k13": "Chọn một ngôi sao gần hoặc tìm trong danh mục sao. Alien Sky bắt đầu với bầu trời tại vị trí của bạn trên Trái Đất, rồi hướng hành trình về ngôi sao bạn đã chọn.",
      "k14": "Du hành trong không gian",
      "k15": "Di chuyển từ Trái Đất đến điểm đến rồi quay trở lại. Nhìn về phía trước theo hành trình hoặc quay lại để thấy Mặt Trời và các chòm sao quen thuộc thay đổi phía sau bạn.",
      "k16": "Một bầu trời thật đang thay đổi",
      "k17": "Các ngôi sao được đặt theo vị trí, khoảng cách, độ sáng, màu sắc và chuyển động thực. Những ngôi sao gần dịch chuyển nhiều nhất, còn các chòm sao xa thay đổi tinh tế hơn.",
      "k18": "So sánh với bầu trời Trái Đất",
      "k19": "Quay lại bầu trời Trái Đất ngay lập tức để so sánh khung cảnh quen thuộc với bầu trời nhìn thấy trong hành trình hoặc từ ngôi sao đích.",
      "k20": "Hệ Mặt Trời dần biến mất",
      "k21": "Mặt Trời, Mặt Trăng và các hành tinh bắt đầu ở đúng vị trí của chúng trên bầu trời Trái Đất. Khi bạn rời Hệ Mặt Trời, Mặt Trăng và các hành tinh biến mất, còn Mặt Trời trở thành một điểm xa xôi gọi là Sol.",
      "k22": "Toàn bộ bầu trời",
      "k23": "Một góc nhìn rộng kiểu cung thiên văn hiển thị Dải Ngân Hà, các đường chòm sao, tên sao, phương hướng, Mặt Trời, Mặt Trăng và các hành tinh nhìn thấy được. Có thể kéo và thu phóng góc nhìn trên iPhone, iPad và Mac.",
      "k24": "Các tính năng hiện tại",
      "k25": "Bắt đầu với bầu trời thật từ vị trí của người quan sát.",
      "k26": "Chọn một ngôi sao đích từ danh sách hoặc tìm trong danh mục.",
      "k27": "Du hành ra ngoài hoặc quay về Trái Đất trong khi quan sát bầu trời thay đổi.",
      "k28": "Nhìn về phía trước đến điểm đến hoặc nhìn ngược về phía Mặt Trời.",
      "k29": "Hiển thị Dải Ngân Hà, các đường chòm sao, nhãn, phương hướng, Mặt Trời, Mặt Trăng và các hành tinh.",
      "k30": "Hiển thị thông tin về hệ sao và các ngoại hành tinh đã được xác nhận khi có dữ liệu.",
      "k31": "Dành cho người dùng chuyên sâu",
      "k32": "Danh mục và các hiệu chỉnh thiên văn",
      "k33": "Alien Sky sử dụng toàn bộ danh mục chính HYG 4.2 gồm 119.625 ngôi sao, bao gồm định danh Hipparcos và dữ liệu trắc lượng thiên văn khi có. Trong số đó, 109.393 ngôi sao có thông tin chuyển động trong không gian. Ứng dụng cũng bao gồm dữ liệu đường chòm sao và danh mục các hệ sao chủ có ngoại hành tinh đã được xác nhận.",
      "k34": "Danh mục bắt đầu ở kỷ nguyên J2000.0. Khi khởi động, mỗi ngôi sao có dữ liệu chuyển động được đưa đến ngày hiện tại bằng vận tốc không gian Descartes ba chiều. Sau đó vị trí X, Y, Z, khoảng cách, xích kinh, xích vĩ và độ sáng biểu kiến được tính lại.",
      "k35": "Đối với bầu trời Trái Đất, bộ máy áp dụng tuế sai, chương động và quang sai hằng năm, rồi dùng giờ sao biểu kiến cùng vĩ độ, kinh độ và độ cao của người quan sát để đặt bầu trời đúng phía trên đường chân trời địa phương.",
      "k36": "Mặt Trời, Mặt Trăng và các hành tinh được tính cho ngày và vị trí của người quan sát. Mặt Trăng sử dụng vị trí địa tâm hiệu chỉnh theo người quan sát (topocentric) và pha nhìn thấy của nó.",
      "k37": "Trong hành trình liên sao, các hiệu chỉnh biểu kiến chỉ dành cho quan sát từ Trái Đất được chủ ý loại bỏ. Ứng dụng làm việc trong một hệ quy chiếu vật lý ba chiều J2000 cố định, vì vậy thị sai và sự thay đổi hình dạng các chòm sao xuất hiện tự nhiên do vị trí mới của người quan sát trong không gian.",
      "k38": "Điều khiển bằng bàn phím",
      "k39": "Di chuyển bầu trời sang trái, phải, lên hoặc xuống.",
      "k40": "Phóng to hoặc thu nhỏ.",
      "k41": "Đặt lại góc nhìn bầu trời.",
      "k42": "Thao tác kéo và chụm để thu phóng vẫn khả dụng trên thiết bị cảm ứng.",
      "k43": "Trứng Phục sinh",
      "k44": "Chạm vào tiêu đề Alien Sky để chuyển sang camera dùng để so sánh với Stellarium. Trong bầu trời Trái Đất, điểm đến đã chọn được đặt ở giữa trong khi thiên đỉnh địa phương vẫn hướng lên trên. Trong khi Du hành, điểm đến vẫn ở giữa với độ xoay camera kiểu Stellarium. Các ký hiệu N, E, S và W đi theo camera đang hoạt động. Chạm lại vào tiêu đề để trở về chế độ bình thường với hướng Bắc ở trên.",
      "k45": "Trạng thái",
      "k46": "Alien Sky đang được phát triển tích cực cho iPhone, iPad và Mac. Bộ máy thiên văn, góc nhìn du hành liên sao, so sánh với bầu trời Trái Đất và các điều khiển chính hiện đã hoạt động.",
      "k47": "← Quay lại ứng dụng",
      "k48": "Montréal | Thành phố Hồ Chí Minh",
      "k49": "Quyền riêng tư: Alien Sky không thu thập hoặc truyền thông tin cá nhân. Ứng dụng chỉ sử dụng vị trí của bạn để tính bầu trời. Vị trí được lưu cục bộ trong ứng dụng trên thiết bị này và không được truyền hoặc chia sẻ."
    },
    "htmlLang": "vi-VN",
    "ogLocale": "vi_VN"
  },
  "ja": {
    "label": "日本語",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "地球を離れ、別の恒星へ旅し、周囲の実際の空が変化していく様子を見られます。",
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
      "k10": "Alien Sky",
      "k11": "地球を離れ、別の恒星へ旅し、周囲の実際の空が変化していく様子を見られます。",
      "k12": "目的地を選ぶ",
      "k13": "近くの恒星を選ぶか、恒星カタログを検索します。Alien Sky は地球上の現在地から見た空で始まり、選んだ恒星へ向かう旅の方向を設定します。",
      "k14": "宇宙を旅する",
      "k15": "地球から目的地へ移動し、再び戻ることができます。進行方向を見たり、振り返って太陽や見慣れた星座が後方でどのように変わるかを見ることができます。",
      "k16": "実際に変化する空",
      "k17": "恒星は実際の位置、距離、明るさ、色、運動を使って配置されます。近い恒星ほど大きく動き、遠い星座の変化はより微妙です。",
      "k18": "地球の空との比較",
      "k19": "地球の空へすぐに戻り、見慣れた眺めと、旅の途中または目的地の恒星から見た空を比較できます。",
      "k20": "太陽系が遠ざかる",
      "k21": "太陽、月、惑星は地球の空での正しい位置から始まります。太陽系を離れると月と惑星は見えなくなり、太陽は Sol と呼ばれる遠い点になります。",
      "k22": "全天",
      "k23": "広いプラネタリウム風の表示に、天の川、星座線、恒星名、方位、太陽、月、見える惑星を表示します。iPhone、iPad、Mac でパンとズームができます。",
      "k24": "現在の機能",
      "k25": "観測者の位置から見た実際の空で開始する。",
      "k26": "リストから目的地の恒星を選ぶか、カタログを検索する。",
      "k27": "空の変化を見ながら外へ旅したり地球へ戻ったりする。",
      "k28": "目的地の方向を見るか、後方の太陽を見る。",
      "k29": "天の川、星座線、ラベル、方位、太陽、月、惑星を表示する。",
      "k30": "恒星系の情報と、利用可能な場合は確認済みの系外惑星を表示する。",
      "k31": "上級ユーザー向け",
      "k32": "カタログと天文補正",
      "k33": "Alien Sky は HYG 4.2 の完全なマスターカタログ、119,625 星を使用します。利用可能な場合は Hipparcos 識別子と位置天文データを含みます。そのうち 109,393 星には空間運動情報があります。アプリには星座線データと、確認済み系外惑星を持つ恒星系のカタログも含まれます。",
      "k34": "カタログの基準時は J2000.0 です。起動時、運動データを持つ各恒星を3次元直交座標の空間速度で現在日まで進めます。その後、X、Y、Z 位置、距離、赤経、赤緯、見かけの明るさを再計算します。",
      "k35": "地球の空では、エンジンは歳差、章動、年周光行差を適用し、見かけの恒星時と観測者の緯度、経度、高度を使って、地域の地平線上に空を正しく配置します。",
      "k36": "太陽、月、惑星は観測者の日付と場所に対して計算されます。月には地心視差を考慮した観測地点基準の位置と、見える位相を使用します。",
      "k37": "恒星間旅行中は、地球からの観測にだけ必要な見かけの補正を意図的に取り除きます。アプリは固定 J2000 の物理的な3次元座標系で動作するため、視差や星座の形の変化は、宇宙空間での観測者の新しい位置から自然に生じます。",
      "k38": "キーボード操作",
      "k39": "空を左、右、上、下へ動かします。",
      "k40": "ズームインまたはズームアウトします。",
      "k41": "空の表示をリセットします。",
      "k42": "タッチ端末ではドラッグとピンチズームも引き続き使用できます。",
      "k43": "イースターエッグ",
      "k44": "Alien Sky のタイトルをタップすると、Stellarium と比較するためのカメラに切り替わります。地球の空では、選択した目的地を中央に置きながら、地域の天頂を上方向に保ちます。Travel 中は目的地を中央に保ち、Stellarium 風のカメラロールを使います。N、E、S、W のマーカーは有効なカメラに追従します。タイトルをもう一度タップすると、通常の北が上の表示に戻ります。",
      "k45": "状況",
      "k46": "Alien Sky は iPhone、iPad、Mac 向けに活発に開発中です。天文エンジン、恒星間旅行の表示、地球の空との比較、主要な操作は現在動作しています。",
      "k47": "← アプリ一覧に戻る",
      "k48": "モントリオール | ホーチミン市",
      "k49": "プライバシー：Alien Sky は個人情報を収集または送信しません。位置情報は空を計算するためだけに使用します。位置情報はこの端末のアプリ内にローカル保存され、送信も共有もされません。"
    },
    "htmlLang": "ja-JP",
    "ogLocale": "ja_JP"
  },
  "zh-Hans": {
    "label": "简体中文",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "离开地球，前往另一颗恒星，观察周围真实天空如何变化。",
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
      "k10": "Alien Sky",
      "k11": "离开地球，前往另一颗恒星，观察周围真实天空如何变化。",
      "k12": "选择目的地",
      "k13": "选择一颗附近的恒星，或搜索恒星目录。Alien Sky 从您在地球上的位置所见天空开始，然后把旅程指向您选择的恒星。",
      "k14": "穿越太空",
      "k15": "从地球前往目的地，然后再次返回。沿路线向前看，或转身看看太阳和熟悉的星座在身后如何变化。",
      "k16": "真实变化的天空",
      "k17": "恒星根据真实的位置、距离、亮度、颜色和运动进行放置。附近恒星的位移最明显，而遥远星座的变化更加细微。",
      "k18": "与地球天空比较",
      "k19": "立即返回地球天空，将熟悉的景象与旅途中或从目的恒星看到的天空进行比较。",
      "k20": "太阳系逐渐远去",
      "k21": "太阳、月亮和行星从它们在地球天空中的正确位置开始。离开太阳系后，月亮和行星消失，太阳则成为一个名为 Sol 的遥远光点。",
      "k22": "整个天空",
      "k23": "宽广的天象馆式视图显示银河、星座线、恒星名称、方向、太阳、月亮和可见行星。在 iPhone、iPad 和 Mac 上可以平移和缩放视图。",
      "k24": "当前功能",
      "k25": "从观测者所在地的真实天空开始。",
      "k26": "从列表中选择目的恒星，或搜索目录。",
      "k27": "在观看天空变化的同时向外旅行或返回地球。",
      "k28": "向前看向目的地，或向后看向太阳。",
      "k29": "显示银河、星座线、标签、方向、太阳、月亮和行星。",
      "k30": "在有数据时显示恒星系统信息和已确认的系外行星。",
      "k31": "面向高级用户",
      "k32": "星表与天文修正",
      "k33": "Alien Sky 使用完整的 HYG 4.2 主星表，共 119,625 颗恒星，并在可用时包含 Hipparcos 标识和天体测量数据。其中 109,393 颗恒星包含空间运动信息。应用还包括星座线数据以及已确认系外行星宿主系统的目录。",
      "k34": "星表从 J2000.0 历元开始。启动时，对每一颗具有运动数据的恒星，使用其三维笛卡尔空间速度推进到当前日期，然后重新计算 X、Y、Z 位置、距离、赤经、赤纬和视亮度。",
      "k35": "对于地球天空，引擎应用岁差、章动和周年光行差，然后使用视恒星时以及观测者的纬度、经度和海拔，将天空正确放置在当地地平线上方。",
      "k36": "太阳、月亮和行星根据观测者的日期和位置计算。月亮使用站心位置以及可见月相。",
      "k37": "在星际旅行期间，会有意移除仅适用于地球观测的视位置修正。应用在固定 J2000 的物理三维参考系中工作，因此视差和星座形状的变化会由观测者在空间中的新位置自然产生。",
      "k38": "键盘控制",
      "k39": "将天空向左、右、上或下移动。",
      "k40": "放大或缩小。",
      "k41": "重置天空视图。",
      "k42": "触控设备仍可使用拖动和双指缩放。",
      "k43": "彩蛋",
      "k44": "轻触 Alien Sky 标题可切换到用于与 Stellarium 比较的相机模式。在地球天空中，所选目的地保持居中，同时当地天顶仍朝向上方。在 Travel 期间，目的地保持居中，并采用 Stellarium 风格的相机滚转。N、E、S、W 标记会跟随当前相机。再次轻触标题可返回正常的北向上视图。",
      "k45": "状态",
      "k46": "Alien Sky 正在积极开发 iPhone、iPad 和 Mac 版本。其天文引擎、星际旅行视图、地球天空比较和主要控制功能现已可以工作。",
      "k47": "← 返回应用",
      "k48": "蒙特利尔 | 胡志明市",
      "k49": "隐私：Alien Sky 不会收集或传输个人信息。应用仅使用您的位置来计算天空。您的位置只保存在本设备的应用中，不会被传输或共享。"
    },
    "htmlLang": "zh-CN",
    "ogLocale": "zh_CN"
  },
  "zh-Hant": {
    "label": "繁體中文",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "離開地球，前往另一顆恆星，觀察周圍真實天空如何變化。",
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
      "k10": "Alien Sky",
      "k11": "離開地球，前往另一顆恆星，觀察周圍真實天空如何變化。",
      "k12": "選擇目的地",
      "k13": "選擇一顆附近的恆星，或搜尋恆星目錄。Alien Sky 從您在地球上的位置所見天空開始，然後把旅程指向您選擇的恆星。",
      "k14": "穿越太空",
      "k15": "從地球前往目的地，然後再次返回。沿路線向前看，或轉身看看太陽和熟悉的星座在身後如何變化。",
      "k16": "真實變化的天空",
      "k17": "恆星根據真實的位置、距離、亮度、顏色和運動進行放置。附近恆星的位移最明顯，而遙遠星座的變化更加細微。",
      "k18": "與地球天空比較",
      "k19": "立即返回地球天空，將熟悉的景象與旅途中或從目的恆星看到的天空進行比較。",
      "k20": "太陽系逐漸遠去",
      "k21": "太陽、月亮和行星從它們在地球天空中的正確位置開始。離開太陽系後，月亮和行星消失，太陽則成為一個名為 Sol 的遙遠光點。",
      "k22": "整個天空",
      "k23": "寬廣的天象館式視圖顯示銀河、星座線、恆星名稱、方向、太陽、月亮和可見行星。在 iPhone、iPad 和 Mac 上可以平移和縮放視圖。",
      "k24": "目前功能",
      "k25": "從觀測者所在地的真實天空開始。",
      "k26": "從列表中選擇目的恆星，或搜尋目錄。",
      "k27": "在觀看天空變化的同時向外旅行或返回地球。",
      "k28": "向前看向目的地，或向後看向太陽。",
      "k29": "顯示銀河、星座線、標籤、方向、太陽、月亮和行星。",
      "k30": "在有資料時顯示恆星系統資訊和已確認的系外行星。",
      "k31": "面向進階使用者",
      "k32": "星表與天文修正",
      "k33": "Alien Sky 使用完整的 HYG 4.2 主星表，共 119,625 顆恆星，並在可用時包含 Hipparcos 識別碼和天體測量資料。其中 109,393 顆恆星包含空間運動資訊。應用程式還包括星座線資料以及已確認系外行星宿主系統的目錄。",
      "k34": "星表從 J2000.0 曆元開始。啟動時，對每一顆具有運動資料的恆星，使用其三維笛卡兒空間速度推進到目前日期，然後重新計算 X、Y、Z 位置、距離、赤經、赤緯和視亮度。",
      "k35": "對於地球天空，引擎套用歲差、章動和周年光行差，然後使用視恆星時以及觀測者的緯度、經度和海拔，將天空正確放置在當地地平線上方。",
      "k36": "太陽、月亮和行星根據觀測者的日期和位置計算。月亮使用站心位置以及可見月相。",
      "k37": "在星際旅行期間，會有意移除僅適用於地球觀測的視位置修正。應用程式在固定 J2000 的物理三維參考系中工作，因此視差和星座形狀的變化會由觀測者在空間中的新位置自然產生。",
      "k38": "鍵盤控制",
      "k39": "將天空向左、右、上或下移動。",
      "k40": "放大或縮小。",
      "k41": "重設天空視圖。",
      "k42": "觸控裝置仍可使用拖動和雙指縮放。",
      "k43": "彩蛋",
      "k44": "輕觸 Alien Sky 標題可切換到用於與 Stellarium 比較的相機模式。在地球天空中，所選目的地保持置中，同時當地天頂仍朝向上方。在 Travel 期間，目的地保持置中，並採用 Stellarium 風格的相機滾轉。N、E、S、W 標記會跟隨目前相機。再次輕觸標題可返回正常的北向上視圖。",
      "k45": "狀態",
      "k46": "Alien Sky 正在積極開發 iPhone、iPad 和 Mac 版本。其天文引擎、星際旅行視圖、地球天空比較和主要控制功能現已可以運作。",
      "k47": "← 返回應用程式",
      "k48": "蒙特婁 | 胡志明市",
      "k49": "隱私：Alien Sky 不會收集或傳輸個人資訊。應用程式僅使用您的位置來計算天空。您的位置只儲存在本裝置的應用程式中，不會被傳輸或分享。"
    },
    "htmlLang": "zh-TW",
    "ogLocale": "zh_TW"
  },
  "es": {
    "label": "Español",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "Abandona la Tierra, viaja a otra estrella y observa cómo cambia a tu alrededor el cielo real.",
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
      "k10": "Alien Sky",
      "k11": "Abandona la Tierra, viaja a otra estrella y observa cómo cambia a tu alrededor el cielo real.",
      "k12": "Elige un destino",
      "k13": "Selecciona una estrella cercana o busca en el catálogo estelar. Alien Sky comienza con el cielo desde tu ubicación en la Tierra y orienta el viaje hacia la estrella que hayas elegido.",
      "k14": "Viaja por el espacio",
      "k15": "Desplázate desde la Tierra hasta el destino y vuelve de nuevo. Mira hacia delante a lo largo de la ruta o date la vuelta para ver cómo cambian detrás de ti el Sol y las constelaciones conocidas.",
      "k16": "Un cielo real que cambia",
      "k17": "Las estrellas se colocan usando sus posiciones, distancias, brillos, colores y movimientos reales. Las estrellas cercanas se desplazan más, mientras que las constelaciones lejanas cambian de forma más sutil.",
      "k18": "Comparación con el cielo terrestre",
      "k19": "Vuelve al instante al cielo terrestre para comparar la vista conocida con el cielo visto durante el viaje o desde la estrella de destino.",
      "k20": "El Sistema Solar se desvanece",
      "k21": "El Sol, la Luna y los planetas comienzan en sus posiciones correctas en el cielo terrestre. Al abandonar el Sistema Solar, la Luna y los planetas desaparecen y el Sol se convierte en un punto lejano llamado Sol.",
      "k22": "Todo el cielo",
      "k23": "Una amplia vista de estilo planetario muestra la Vía Láctea, líneas de constelaciones, nombres de estrellas, direcciones, el Sol, la Luna y los planetas visibles. La vista se puede desplazar y ampliar en iPhone, iPad y Mac.",
      "k24": "Funciones actuales",
      "k25": "Comenzar con el cielo real desde la ubicación del observador.",
      "k26": "Elegir una estrella de destino de una lista o buscar en el catálogo.",
      "k27": "Viajar hacia el exterior o volver a la Tierra mientras se observa cómo cambia el cielo.",
      "k28": "Mirar hacia delante al destino o hacia atrás en dirección al Sol.",
      "k29": "Mostrar la Vía Láctea, líneas de constelaciones, etiquetas, direcciones, Sol, Luna y planetas.",
      "k30": "Mostrar información del sistema estelar y exoplanetas confirmados cuando esté disponible.",
      "k31": "Para usuarios avanzados",
      "k32": "Catálogos y correcciones astronómicas",
      "k33": "Alien Sky utiliza el catálogo maestro completo HYG 4.2: 119.625 estrellas, incluidos identificadores Hipparcos y datos astrométricos cuando están disponibles. De ellas, 109.393 contienen información de movimiento espacial. La app también incluye datos de líneas de constelaciones y un catálogo de sistemas anfitriones de exoplanetas confirmados.",
      "k34": "El catálogo parte de la época J2000.0. Al iniciarse, cada estrella con datos de movimiento se lleva hasta la fecha actual usando su velocidad espacial cartesiana tridimensional. Después se recalculan su posición X, Y y Z, distancia, ascensión recta, declinación y brillo aparente.",
      "k35": "Para el cielo terrestre, el motor aplica precesión, nutación y aberración anual, y luego utiliza el tiempo sidéreo aparente y la latitud, longitud y altitud del observador para situar correctamente el cielo sobre el horizonte local.",
      "k36": "El Sol, la Luna y los planetas se calculan para la fecha y ubicación del observador. La Luna utiliza una posición topocéntrica y su fase visible.",
      "k37": "Durante el viaje interestelar se eliminan deliberadamente las correcciones aparentes propias de la observación desde la Tierra. La app trabaja en un marco físico tridimensional fijo J2000, por lo que la paralaje y los cambios en las formas de las constelaciones surgen de manera natural de la nueva posición del observador en el espacio.",
      "k38": "Controles de teclado",
      "k39": "Mueve el cielo a la izquierda, derecha, arriba o abajo.",
      "k40": "Acerca o aleja la vista.",
      "k41": "Restablece la vista del cielo.",
      "k42": "El arrastre y el zoom con pellizco siguen disponibles en dispositivos táctiles.",
      "k43": "El huevo de Pascua",
      "k44": "Toca el título Alien Sky para cambiar a una cámara de comparación con Stellarium. En el cielo terrestre, el destino seleccionado queda centrado mientras el cenit local permanece hacia arriba. Durante Travel, el destino permanece centrado con una rotación de cámara al estilo Stellarium. Los marcadores N, E, S y W siguen la cámara activa. Toca de nuevo el título para volver a la vista normal con el norte arriba.",
      "k45": "Estado",
      "k46": "Alien Sky está en desarrollo activo para iPhone, iPad y Mac. Su motor astronómico, la vista de viaje interestelar, la comparación con el cielo terrestre y los controles principales ya funcionan.",
      "k47": "← Volver a las apps",
      "k48": "Montreal | Ciudad Ho Chi Minh",
      "k49": "Privacidad: Alien Sky no recopila ni transmite información personal. La app utiliza tu ubicación únicamente para calcular el cielo. Tu ubicación se guarda localmente en la app de este dispositivo y no se transmite ni se comparte."
    },
    "htmlLang": "es",
    "ogLocale": "es_ES"
  },
  "de": {
    "label": "Deutsch",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "Verlassen Sie die Erde, reisen Sie zu einem anderen Stern und beobachten Sie, wie sich der reale Himmel um Sie herum verändert.",
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
      "k10": "Alien Sky",
      "k11": "Verlassen Sie die Erde, reisen Sie zu einem anderen Stern und beobachten Sie, wie sich der reale Himmel um Sie herum verändert.",
      "k12": "Ein Ziel wählen",
      "k13": "Wählen Sie einen nahen Stern oder durchsuchen Sie den Sternkatalog. Alien Sky beginnt mit dem Himmel an Ihrem Standort auf der Erde und richtet die Reise anschließend auf den ausgewählten Stern aus.",
      "k14": "Durch den Weltraum reisen",
      "k15": "Bewegen Sie sich von der Erde zum Ziel und wieder zurück. Blicken Sie auf der Route nach vorn oder drehen Sie sich um, um zu sehen, wie sich Sonne und vertraute Sternbilder hinter Ihnen verändern.",
      "k16": "Ein realer, sich verändernder Himmel",
      "k17": "Die Sterne werden anhand ihrer realen Positionen, Entfernungen, Helligkeiten, Farben und Bewegungen platziert. Nahe Sterne verschieben sich am stärksten, während sich ferne Sternbilder subtiler verändern.",
      "k18": "Vergleich mit dem Erdhimmel",
      "k19": "Kehren Sie sofort zum Erdhimmel zurück, um die vertraute Ansicht mit dem Himmel während der Reise oder vom Zielstern aus zu vergleichen.",
      "k20": "Das Sonnensystem verschwindet",
      "k21": "Sonne, Mond und Planeten beginnen an ihren korrekten Positionen am Erdhimmel. Beim Verlassen des Sonnensystems verschwinden Mond und Planeten, und die Sonne wird zu einem fernen Punkt namens Sol.",
      "k22": "Der ganze Himmel",
      "k23": "Eine breite Planetariumsansicht zeigt Milchstraße, Sternbildlinien, Sternnamen, Richtungen, Sonne, Mond und sichtbare Planeten. Die Ansicht kann auf iPhone, iPad und Mac verschoben und gezoomt werden.",
      "k24": "Aktuelle Funktionen",
      "k25": "Mit dem realen Himmel am Standort des Beobachters beginnen.",
      "k26": "Einen Zielstern aus einer Liste wählen oder den Katalog durchsuchen.",
      "k27": "Nach außen reisen oder zur Erde zurückkehren und dabei beobachten, wie sich der Himmel verändert.",
      "k28": "Nach vorn zum Ziel oder nach hinten zur Sonne blicken.",
      "k29": "Milchstraße, Sternbildlinien, Beschriftungen, Richtungen, Sonne, Mond und Planeten anzeigen.",
      "k30": "Informationen zum Sternsystem und bestätigte Exoplaneten anzeigen, wenn verfügbar.",
      "k31": "Für anspruchsvolle Benutzer",
      "k32": "Kataloge und astronomische Korrekturen",
      "k33": "Alien Sky verwendet den vollständigen HYG-4.2-Hauptkatalog mit 119.625 Sternen, einschließlich Hipparcos-Kennungen und astrometrischer Daten, soweit verfügbar. Davon enthalten 109.393 Sterne Informationen zur räumlichen Bewegung. Die App umfasst außerdem Sternbildlinien-Daten und einen Katalog bestätigter Exoplaneten-Wirtssysteme.",
      "k34": "Der Katalog beginnt bei der Epoche J2000.0. Beim Start wird jeder Stern mit Bewegungsdaten mithilfe seiner dreidimensionalen kartesischen Raumgeschwindigkeit bis zum aktuellen Datum fortgeschrieben. Anschließend werden X-, Y- und Z-Position, Entfernung, Rektaszension, Deklination und scheinbare Helligkeit neu berechnet.",
      "k35": "Für den Erdhimmel wendet die Engine Präzession, Nutation und jährliche Aberration an und nutzt anschließend die scheinbare Sternzeit sowie Breite, Länge und Höhe des Beobachters, um den Himmel korrekt über dem lokalen Horizont zu platzieren.",
      "k36": "Sonne, Mond und Planeten werden für Datum und Standort des Beobachters berechnet. Der Mond verwendet eine topozentrische Position und seine sichtbare Phase.",
      "k37": "Während interstellarer Reisen werden die nur für Beobachtungen von der Erde nötigen scheinbaren Korrekturen bewusst entfernt. Die App arbeitet in einem physikalischen, festen dreidimensionalen J2000-Bezugssystem, sodass Parallaxe und veränderte Formen der Sternbilder auf natürliche Weise aus der neuen Position des Beobachters im Raum entstehen.",
      "k38": "Tastatursteuerung",
      "k39": "Den Himmel nach links, rechts, oben oder unten bewegen.",
      "k40": "Ein- oder auszoomen.",
      "k41": "Die Himmelsansicht zurücksetzen.",
      "k42": "Ziehen und Zwei-Finger-Zoom bleiben auf Touch-Geräten verfügbar.",
      "k43": "Das Easter Egg",
      "k44": "Tippen Sie auf den Titel Alien Sky, um zu einer Kamera zum Vergleich mit Stellarium zu wechseln. Im Erdhimmel bleibt das gewählte Ziel zentriert, während der lokale Zenit nach oben zeigt. Während Travel bleibt das Ziel mit einer Kamerarollung im Stellarium-Stil zentriert. Die Markierungen N, E, S und W folgen der aktiven Kamera. Tippen Sie erneut auf den Titel, um zur normalen Ansicht mit Norden oben zurückzukehren.",
      "k45": "Status",
      "k46": "Alien Sky wird aktiv für iPhone, iPad und Mac entwickelt. Die Astronomie-Engine, die Ansicht für interstellare Reisen, der Vergleich mit dem Erdhimmel und die wichtigsten Bedienelemente funktionieren bereits.",
      "k47": "← Zurück zu den Apps",
      "k48": "Montreal | Ho-Chi-Minh-Stadt",
      "k49": "Datenschutz: Alien Sky erfasst oder überträgt keine personenbezogenen Daten. Die App verwendet Ihren Standort nur zur Berechnung des Himmels. Ihr Standort wird lokal in der App auf diesem Gerät gespeichert und weder übertragen noch geteilt."
    },
    "htmlLang": "de",
    "ogLocale": "de_DE"
  },
  "ar": {
    "label": "العربية",
    "dir": "rtl",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "غادر الأرض وسافر إلى نجم آخر وشاهد كيف تتغير السماء الحقيقية من حولك.",
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
      "k10": "Alien Sky",
      "k11": "غادر الأرض وسافر إلى نجم آخر وشاهد كيف تتغير السماء الحقيقية من حولك.",
      "k12": "اختر وجهة",
      "k13": "اختر نجمًا قريبًا أو ابحث في فهرس النجوم. يبدأ Alien Sky بالسماء من موقعك على الأرض، ثم يوجّه الرحلة نحو النجم الذي اخترته.",
      "k14": "سافر عبر الفضاء",
      "k15": "انتقل من الأرض إلى الوجهة ثم عد مرة أخرى. انظر إلى الأمام على طول المسار أو استدر لترى كيف تتغير الشمس والكوكبات المألوفة خلفك.",
      "k16": "سماء حقيقية تتغير",
      "k17": "توضع النجوم باستخدام مواضعها ومسافاتها وسطوعها وألوانها وحركاتها الحقيقية. تتحرك النجوم القريبة أكثر، بينما تتغير الكوكبات البعيدة بصورة أكثر دقة.",
      "k18": "مقارنة مع سماء الأرض",
      "k19": "عد فورًا إلى سماء الأرض لمقارنة المشهد المألوف بالسماء التي تراها أثناء الرحلة أو من النجم الوجهة.",
      "k20": "النظام الشمسي يتلاشى",
      "k21": "تبدأ الشمس والقمر والكواكب في مواضعها الصحيحة في سماء الأرض. ومع مغادرة النظام الشمسي، يختفي القمر والكواكب وتصبح الشمس نقطة بعيدة تسمى Sol.",
      "k22": "السماء كاملة",
      "k23": "يعرض منظور واسع بأسلوب القبة السماوية درب التبانة وخطوط الكوكبات وأسماء النجوم والاتجاهات والشمس والقمر والكواكب المرئية. يمكن تحريك المنظر وتكبيره على iPhone وiPad وMac.",
      "k24": "الميزات الحالية",
      "k25": "البدء بالسماء الحقيقية من موقع المراقب.",
      "k26": "اختيار نجم وجهة من قائمة أو البحث في الفهرس.",
      "k27": "السفر إلى الخارج أو العودة إلى الأرض مع مشاهدة تغير السماء.",
      "k28": "النظر إلى الأمام نحو الوجهة أو إلى الخلف نحو الشمس.",
      "k29": "عرض درب التبانة وخطوط الكوكبات والتسميات والاتجاهات والشمس والقمر والكواكب.",
      "k30": "عرض معلومات النظام النجمي والكواكب الخارجية المؤكدة عند توفرها.",
      "k31": "للمستخدمين المتقدمين",
      "k32": "الفهارس والتصحيحات الفلكية",
      "k33": "يستخدم Alien Sky فهرس HYG 4.2 الرئيسي الكامل الذي يضم 119,625 نجمًا، بما في ذلك معرفات Hipparcos والبيانات الفلكية القياسية حيثما توفرت. ومن بينها 109,393 نجمًا تحتوي على معلومات عن الحركة في الفضاء. كما يتضمن التطبيق بيانات خطوط الكوكبات وفهرسًا لأنظمة النجوم المضيفة لكواكب خارجية مؤكدة.",
      "k34": "يبدأ الفهرس عند الحقبة J2000.0. عند التشغيل، يُقدَّم كل نجم لديه بيانات حركة إلى التاريخ الحالي باستخدام سرعته الفضائية الديكارتية ثلاثية الأبعاد. ثم يعاد حساب موضع X وY وZ والمسافة والمطلع المستقيم والميل والسطوع الظاهري.",
      "k35": "بالنسبة إلى سماء الأرض، يطبق المحرك المبادرة والترنح والانحراف السنوي للضوء، ثم يستخدم الوقت النجمي الظاهري وخط عرض المراقب وخط طوله وارتفاعه لوضع السماء بصورة صحيحة فوق الأفق المحلي.",
      "k36": "تُحسب الشمس والقمر والكواكب وفق تاريخ المراقب وموقعه. يستخدم القمر موضعًا طبو مركزيًا وطورَه المرئي.",
      "k37": "أثناء السفر بين النجوم، تُزال عمدًا التصحيحات الظاهرية الخاصة بالمراقبة من الأرض. يعمل التطبيق في إطار فيزيائي ثلاثي الأبعاد ثابت J2000، ولذلك ينشأ اختلاف المنظر وتغير أشكال الكوكبات طبيعيًا من الموضع الجديد للمراقب في الفضاء.",
      "k38": "عناصر التحكم بلوحة المفاتيح",
      "k39": "حرّك السماء إلى اليسار أو اليمين أو الأعلى أو الأسفل.",
      "k40": "كبّر أو صغّر.",
      "k41": "أعد ضبط منظر السماء.",
      "k42": "يبقى السحب والتكبير بإصبعين متاحين على الأجهزة اللمسية.",
      "k43": "المفاجأة المخفية",
      "k44": "اضغط على عنوان Alien Sky للتبديل إلى كاميرا للمقارنة مع Stellarium. في سماء الأرض، تبقى الوجهة المحددة في الوسط بينما يظل سمت الرأس المحلي نحو الأعلى. أثناء Travel، تبقى الوجهة في الوسط مع دوران كاميرا بأسلوب Stellarium. تتبع علامات N وE وS وW الكاميرا النشطة. اضغط على العنوان مرة أخرى للعودة إلى العرض العادي مع الشمال في الأعلى.",
      "k45": "الحالة",
      "k46": "يجري تطوير Alien Sky بنشاط لأجهزة iPhone وiPad وMac. ويعمل الآن محركه الفلكي ومنظر السفر بين النجوم والمقارنة مع سماء الأرض وعناصر التحكم الرئيسية.",
      "k47": "← العودة إلى التطبيقات",
      "k48": "مونتريال | مدينة هو تشي منه",
      "k49": "الخصوصية: لا يجمع Alien Sky المعلومات الشخصية ولا يرسلها. يستخدم التطبيق موقعك فقط لحساب السماء. يُخزن موقعك محليًا داخل التطبيق على هذا الجهاز ولا يُرسل ولا يُشارك."
    },
    "htmlLang": "ar",
    "ogLocale": "ar_AR"
  },
  "ko": {
    "label": "한국어",
    "dir": "ltr",
    "pageTitle": "Alien Sky – Micro Créatif",
    "pageDescription": "지구를 떠나 다른 별로 여행하며 주변의 실제 하늘이 어떻게 변하는지 관찰합니다.",
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
      "k10": "Alien Sky",
      "k11": "지구를 떠나 다른 별로 여행하며 주변의 실제 하늘이 어떻게 변하는지 관찰합니다.",
      "k12": "목적지 선택",
      "k13": "가까운 별을 선택하거나 별 목록을 검색합니다. Alien Sky는 지구의 현재 위치에서 보이는 하늘로 시작한 뒤 선택한 별을 향해 여행 방향을 잡습니다.",
      "k14": "우주 여행",
      "k15": "지구에서 목적지까지 이동한 뒤 다시 돌아올 수 있습니다. 진행 방향을 바라보거나 뒤돌아 태양과 익숙한 별자리가 뒤에서 어떻게 변하는지 볼 수 있습니다.",
      "k16": "실제로 변하는 하늘",
      "k17": "별은 실제 위치, 거리, 밝기, 색, 운동을 사용해 배치됩니다. 가까운 별이 가장 크게 이동하고 먼 별자리는 더 미묘하게 변합니다.",
      "k18": "지구 하늘과 비교",
      "k19": "즉시 지구 하늘로 돌아가 익숙한 모습과 여행 중 또는 목적지 별에서 보이는 하늘을 비교합니다.",
      "k20": "태양계가 멀어집니다",
      "k21": "태양, 달, 행성은 지구 하늘에서의 정확한 위치에서 시작합니다. 태양계를 벗어나면 달과 행성은 사라지고 태양은 Sol이라는 먼 점으로 보입니다.",
      "k22": "하늘 전체",
      "k23": "넓은 플라네타륨식 보기에서 은하수, 별자리 선, 별 이름, 방향, 태양, 달, 보이는 행성을 표시합니다. iPhone, iPad, Mac에서 화면을 이동하고 확대·축소할 수 있습니다.",
      "k24": "현재 기능",
      "k25": "관측자 위치의 실제 하늘에서 시작.",
      "k26": "목록에서 목적지 별을 선택하거나 목록 검색.",
      "k27": "하늘이 변하는 모습을 보면서 바깥으로 여행하거나 지구로 귀환.",
      "k28": "목적지를 향해 앞을 보거나 태양을 향해 뒤를 봄.",
      "k29": "은하수, 별자리 선, 레이블, 방향, 태양, 달, 행성을 표시.",
      "k30": "사용 가능한 경우 항성계 정보와 확인된 외계행성을 표시.",
      "k31": "고급 사용자를 위해",
      "k32": "목록과 천문 보정",
      "k33": "Alien Sky는 Hipparcos 식별자와 사용 가능한 천체측정 데이터를 포함한 전체 HYG 4.2 마스터 목록 119,625개 별을 사용합니다. 이 가운데 109,393개 별에는 공간 운동 정보가 있습니다. 앱에는 별자리 선 데이터와 확인된 외계행성 모항성계 목록도 포함됩니다.",
      "k34": "목록은 J2000.0 기준시에서 시작합니다. 실행 시 운동 데이터가 있는 각 별은 3차원 직교 공간 속도를 사용해 현재 날짜까지 진행시킵니다. 그런 다음 X, Y, Z 위치, 거리, 적경, 적위, 겉보기 밝기를 다시 계산합니다.",
      "k35": "지구 하늘에서는 엔진이 세차, 장동, 연주 광행차를 적용한 뒤 겉보기 항성시와 관측자의 위도, 경도, 고도를 사용해 현지 지평선 위에 하늘을 정확히 배치합니다.",
      "k36": "태양, 달, 행성은 관측자의 날짜와 위치에 맞춰 계산됩니다. 달은 지심 시차를 반영한 관측지 기준 위치와 보이는 위상을 사용합니다.",
      "k37": "성간 여행 중에는 지구 관측에만 필요한 겉보기 보정을 의도적으로 제거합니다. 앱은 고정 J2000 물리 3차원 좌표계에서 작동하므로 시차와 별자리 모양의 변화가 우주에서 관측자의 새로운 위치로부터 자연스럽게 생깁니다.",
      "k38": "키보드 조작",
      "k39": "하늘을 왼쪽, 오른쪽, 위 또는 아래로 이동합니다.",
      "k40": "확대하거나 축소합니다.",
      "k41": "하늘 보기를 초기화합니다.",
      "k42": "터치 기기에서는 드래그와 핀치 확대·축소도 계속 사용할 수 있습니다.",
      "k43": "이스터 에그",
      "k44": "Alien Sky 제목을 탭하면 Stellarium 비교용 카메라로 전환됩니다. 지구 하늘에서는 선택한 목적지가 가운데에 유지되고 현지 천정은 위쪽을 향합니다. Travel 중에는 목적지가 가운데에 유지되며 Stellarium 스타일의 카메라 롤을 사용합니다. N, E, S, W 표시는 활성 카메라를 따라갑니다. 제목을 다시 탭하면 북쪽이 위인 일반 보기로 돌아갑니다.",
      "k45": "상태",
      "k46": "Alien Sky는 iPhone, iPad, Mac용으로 활발히 개발 중입니다. 천문 엔진, 성간 여행 보기, 지구 하늘 비교, 주요 조작 기능이 현재 작동합니다.",
      "k47": "← 앱으로 돌아가기",
      "k48": "몬트리올 | 호찌민시",
      "k49": "개인정보 보호: Alien Sky는 개인정보를 수집하거나 전송하지 않습니다. 앱은 하늘을 계산하기 위해서만 사용자의 위치를 사용합니다. 위치 정보는 이 기기의 앱에 로컬로 저장되며 전송되거나 공유되지 않습니다."
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
    return Object.prototype.hasOwnProperty.call(ALIEN_SKY_LANGUAGES, code);
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
    Object.entries(ALIEN_SKY_LANGUAGES).forEach(([code, language]) => {
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
    const t = ALIEN_SKY_LANGUAGES[code];

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
