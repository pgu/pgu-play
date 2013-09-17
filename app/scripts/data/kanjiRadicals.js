'use strict';

angular.module('pguPlayApp').factory('KanjiRadicals', function () {

    // source: kanjidic2.xml from http://www.csse.monash.edu.au/~jwb/
    // explanations: http://www.csse.monash.edu.au/~jwb/kanjidic2/kanjidic2_dtdh.html

    return {
        get: function() {
            return [
                { literal: '一', ons: ['イチ','イツ'], kuns: ['ひと-','ひと.つ'], meanings: ['one','one radical (no.1)'] },
                { literal: '丨', ons: ['コン','シ','ジョ','ニョ'], kuns: ['すす.む','しりぞ.く'], meanings: ['number one','line','rod radical (no. 2)'] },
                { literal: '丶', ons: ['チュ'], kuns: [], meanings: ['dot','tick or dot radical (no. 3)'] },
                { literal: '丿', ons: ['ヘツ'], kuns: ['えい','よう'], meanings: ['katakana no radical (no. 4)'] },
                { literal: '乙', ons: ['オツ','イツ'], kuns: ['おと-','きのと'], meanings: ['the latter','duplicate','strange','witty','fishhook radical (no. 5)'] },
                { literal: '亅', ons: ['ケツ'], kuns: ['かぎ'], meanings: ['feathered stick','barb radical (no. 6)'] },
                { literal: '二', ons: ['ニ','ジ'], kuns: ['ふた','ふた.つ','ふたたび'], meanings: ['two','two radical (no.2)'] },
                { literal: '亠', ons: ['トウ'], kuns: [], meanings: ['kettle lid radical (no. 8)'] },
                { literal: '人', ons: ['ジン','ニン'], kuns: ['ひと','-り','-と'], meanings: ['person'] },
                { literal: '儿', ons: ['ジン','ニン'], kuns: ['がい'], meanings: ['legs radical (no. 10)'] },
                { literal: '入', ons: ['ニュウ','ジュ'], kuns: ['い.る','-い.る','-い.り','い.れる','-い.れ','はい.る'], meanings: ['enter','insert'] },
                { literal: '八', ons: ['ハチ'], kuns: ['や','や.つ','やっ.つ','よう'], meanings: ['eight','eight radical (no. 12)'] },
                { literal: '冂', ons: ['キョウ','ケイ'], kuns: [], meanings: ['upside-down box radical (no. 13)'] },
                { literal: '冖', ons: ['ベキ'], kuns: [], meanings: ['wa-shaped crown radical (no. 14)'] },
                { literal: '冫', ons: ['ヒョウ'], kuns: ['こおり'], meanings: ['two-stroke water radical or ice radical (no. 15)'] },
                { literal: '几', ons: ['キ'], kuns: ['きにょう'], meanings: ['table','table enclosure','table or windy radical (no. 16)'] },
                { literal: '凵', ons: ['カン'], kuns: [], meanings: ['open box enclosure','open box radical (no. 17)'] },
                { literal: '刀', ons: ['トウ'], kuns: ['かたな','そり'], meanings: ['sword','saber','knife'] },
                { literal: '力', ons: ['リョク','リキ','リイ'], kuns: ['ちから'], meanings: ['power','strength','strong','strain','bear up','exert'] },
                { literal: '勹', ons: ['ホウ'], kuns: ['つつ.む'], meanings: ['wrapping enclosure','wrapping radical (no. 20)'] },
                { literal: '匕', ons: ['ヒ'], kuns: ['さじ'], meanings: ['spoon','spoon or katakana hi radical (no. 21)'] },
                { literal: '匚', ons: ['ホウ'], kuns: [], meanings: ['box-on-side enclosure radical (no. 22)'] },
                { literal: '亡', ons: ['ボウ','モウ'], kuns: ['な.い','な.き-','ほろ.びる','ほろ.ぶ','ほろ.ぼす'], meanings: ['deceased','the late','dying','perish'] },
                { literal: '十', ons: ['ジュウ','ジッ','ジュッ'], kuns: ['とお','と'], meanings: ['ten'] },
                { literal: '卜', ons: ['ボク'], kuns: ['うらな.う','うらない'], meanings: ['divining','fortune-telling','divination or katakana to radical (no. 25)'] },
                { literal: '卩', ons: ['セツ'], kuns: ['わりふ'], meanings: ['seal radical (no. 26)'] },
                { literal: '厂', ons: ['カン'], kuns: ['かりがね'], meanings: ['wild goose','trailing cliff radical (no. 27)'] },
                { literal: '厶', ons: ['シ','ボウ','ム'], kuns: ['わたくし','ござ.る'], meanings: ['I','myself','katakana mu radical (no. 28)'] },
                { literal: '又', ons: ['ユウ'], kuns: ['また','また-','また.の-'], meanings: ['or again','furthermore','on the other hand'] },
                { literal: '口', ons: ['コウ','ク'], kuns: ['くち'], meanings: ['mouth'] },
                { literal: '囗', ons: ['イ','コク'], kuns: [], meanings: ['box or enclosure radical (no. 31)','box'] },
                { literal: '土', ons: ['ド','ト'], kuns: ['つち'], meanings: ['soil','earth','ground','Turkey'] },
                { literal: '士', ons: ['シ'], kuns: ['さむらい'], meanings: ['gentleman','samurai','samurai radical (no. 33)'] },
                { literal: '夂', ons: ['チ'], kuns: ['しゅう'], meanings: ['late','delayed','winter radical (no. 34)'] },
                { literal: '夊', ons: ['スイ'], kuns: ['ゆき'], meanings: ['winter variant radical (no. 34)'] },
                { literal: '夕', ons: ['セキ'], kuns: ['ゆう'], meanings: ['evening'] },
                { literal: '大', ons: ['ダイ','タイ'], kuns: ['おお-','おお.きい','-おお.いに'], meanings: ['large','big'] },
                { literal: '女', ons: ['ジョ','ニョ','ニョウ'], kuns: ['おんな','め'], meanings: ['woman','female'] },
                { literal: '子', ons: ['シ','ス','ツ'], kuns: ['こ','-こ','ね'], meanings: ['child','sign of the rat','11PM-1AM','first sign of Chinese zodiac'] },
                { literal: '宀', ons: ['ベン','メン'], kuns: [], meanings: ['shaped crown','katakana u radical (no. 40)'] },
                { literal: '寸', ons: ['スン'], kuns: [], meanings: ['measurement','foot/10'] },
                { literal: '小', ons: ['ショウ'], kuns: ['ちい.さい','こ-','お-','さ-'], meanings: ['little','small'] },
                { literal: '尢', ons: ['オウ'], kuns: [], meanings: ['crooked-big radical (no. 43)'] },
                { literal: '尸', ons: ['シ'], kuns: ['かたしろ'], meanings: ['corpse','remains','flag radical (no. 44)'] },
                { literal: '屮', ons: ['テツ','サ'], kuns: ['ひだりて'], meanings: ['left hand','old grass radical (no. 45)'] },
                { literal: '山', ons: ['サン','セン'], kuns: ['やま'], meanings: ['mountain'] },
                { literal: '巛', ons: ['セン'], kuns: ['かわ'], meanings: ['curving river radical (no.47)'] },
                { literal: '工', ons: ['コウ','ク','グ'], kuns: [], meanings: ['craft','construction','katakana e radical (no. 48)'] },
                { literal: '已', ons: ['イ'], kuns: ['や.む','すで.に','のみ','はなはだ'], meanings: ['stop','halt','previously','already','long ago'] },
                { literal: '巾', ons: ['キン','フク'], kuns: ['おお.い','ちきり','きれ'], meanings: ['towel','hanging scroll','width','cloth radical (no. 50)'] },
                { literal: '干', ons: ['カン'], kuns: ['ほ.す','ほ.し-','-ぼ.し','ひ.る'], meanings: ['dry','parch'] },
                { literal: '幺', ons: ['ヨウ'], kuns: ['ちいさい'], meanings: ['short thread radical (no. 52)'] },
                { literal: '广', ons: ['ゲン'], kuns: [], meanings: ['dotted cliff radical (no. 53)'] },
                { literal: '廴', ons: ['イン'], kuns: [], meanings: ['long stride or stretching radical (no. 54)'] },
                { literal: '廾', ons: ['キョウ','ク'], kuns: ['にじゅう'], meanings: ['twenty','20','twenty or letter H radical (no. 55)'] },
                { literal: '弋', ons: ['ヨク'], kuns: ['いぐるみ'], meanings: ['piling','ceremony radical (no. 56)'] },
                { literal: '弓', ons: ['キュウ'], kuns: ['ゆみ'], meanings: ['bow','bow (archery, violin)'] },
                { literal: '彐', ons: ['ケイ'], kuns: [], meanings: ['snout','pig\'s head radical (no. 58)'] },
                { literal: '彡', ons: ['サン','セン'], kuns: [], meanings: ['three','hair ornament','short hair or fur radical (no. 59)'] },
                { literal: '彳', ons: ['テキ'], kuns: ['たたず.む'], meanings: ['stop','linger','loiter','going man radical (no. 60)'] },
                { literal: '心', ons: ['シン'], kuns: ['こころ','-ごころ'], meanings: ['heart','mind','spirit','heart radical (no. 61)'] },
                { literal: '戈', ons: ['カ'], kuns: ['ほこ','ほこづくり'], meanings: ['halberd','arms','festival car','float','tasselled spear radical (no. 62)'] },
                { literal: '戸', ons: ['コ'], kuns: ['と'], meanings: ['door','counter for houses','door radical (no. 63)'] },
                { literal: '手', ons: ['シュ','ズ'], kuns: ['て','て-','-て','た-'], meanings: ['hand'] },
                { literal: '支', ons: ['シ'], kuns: ['ささ.える','つか.える','か.う'], meanings: ['branch','support','sustain','branch radical (no. 65)'] },
                { literal: '攵', ons: ['ホク'], kuns: [], meanings: ['strike','hit','folding chair radical variant (no. 66)'] },
                { literal: '文', ons: ['ブン','モン'], kuns: ['ふみ','あや'], meanings: ['sentence','literature','style','art','decoration','figures','plan','literary radical (no. 67)'] },
                { literal: '斗', ons: ['ト','トウ'], kuns: [], meanings: ['Big Dipper','10 sho (vol)','sake dipper','dots and cross radical (no. 68)'] },
                { literal: '斤', ons: ['キン'], kuns: [], meanings: ['axe','1.32 lb','catty','counter for loaves of bread','axe radical (no. 69)'] },
                { literal: '方', ons: ['ホウ'], kuns: ['かた','-かた','-がた'], meanings: ['direction','person','alternative'] },
                { literal: '无', ons: ['ブ','ム'], kuns: ['なし','ない'], meanings: ['nothing','not exist','crooked heaven radical (no.71)'] },
                { literal: '日', ons: ['ニチ','ジツ'], kuns: ['ひ','-び','-か'], meanings: ['day','sun','Japan','counter for days'] },
                { literal: '曰', ons: ['エツ'], kuns: ['いわ.く','のたま.う','のたま.わく','ここに'], meanings: ['say','reason','pretext','history','past','flat sun radical (no. 73)'] },
                { literal: '月', ons: ['ゲツ','ガツ'], kuns: ['つき'], meanings: ['month','moon'] },
                { literal: '木', ons: ['ボク','モク'], kuns: ['き','こ-'], meanings: ['tree','wood'] },
                { literal: '欠', ons: ['ケツ','ケン'], kuns: ['か.ける','か.く'], meanings: ['lack','gap','fail','yawning radical (no. 76)'] },
                { literal: '止', ons: ['シ'], kuns: ['と.まる','-ど.まり','と.める','-と.める','-ど.め','とど.める','とど.め','とど.まる','や.める','や.む','-や.む','よ.す','-さ.す','-さ.し'], meanings: ['stop','halt'] },
                { literal: '歹', ons: ['ガツ','ガチ','タイ'], kuns: [], meanings: ['bare bone','bad','wrong','death radical (n. 78)'] },
                { literal: '殳', ons: ['シュ'], kuns: ['また','ほこ'], meanings: ['pike','windy-again radical (no. 79)'] },
                { literal: '毋', ons: ['ブ','ム'], kuns: ['はは','ぼ','ない','なか.れ'], meanings: ['do not','must not','be not','mother radical (no. 80)'] },
                { literal: '比', ons: ['ヒ'], kuns: ['くら.べる'], meanings: ['compare','race','ratio','Philipines'] },
                { literal: '毛', ons: ['モウ'], kuns: ['け'], meanings: ['fur','hair','feather','down'] },
                { literal: '氏', ons: ['シ'], kuns: ['うじ','-うじ'], meanings: ['family name','surname','clan'] },
                { literal: '气', ons: ['キ','ケ'], kuns: ['いき'], meanings: ['spirit','steam radical (no. 84)'] },
                { literal: '水', ons: ['スイ'], kuns: ['みず','みず-'], meanings: ['water'] },
                { literal: '火', ons: ['カ'], kuns: ['ひ','-び','ほ-'], meanings: ['fire'] },
                { literal: '爪', ons: ['ソウ'], kuns: ['つめ','つま-'], meanings: ['claw','nail','talon'] },
                { literal: '父', ons: ['フ'], kuns: ['ちち'], meanings: ['father'] },
                { literal: '爻', ons: ['コウ','ギョウ'], kuns: ['まじ.わる'], meanings: ['to mix with','to associate with','to join','double X radical (no. 89)'] },
                { literal: '爿', ons: ['ショウ','ソウ'], kuns: [], meanings: ['left-side kata radical (no. 91)'] },
                { literal: '片', ons: ['ヘン'], kuns: ['かた-','かた'], meanings: ['one-sided','leaf','sheet','right-side kata radical (no. 91)'] },
                { literal: '牙', ons: ['ガ','ゲ'], kuns: ['きば','は'], meanings: ['tusk','fang','tusk radical (no. 92)'] },
                { literal: '牛', ons: ['ギュウ'], kuns: ['うし'], meanings: ['cow'] },
                { literal: '犬', ons: ['ケン'], kuns: ['いぬ','いぬ-'], meanings: ['dog'] },
                { literal: '玄', ons: ['ゲン'], kuns: [], meanings: ['mysterious','occultness'] },
                { literal: '王', ons: ['オウ','-ノウ'], kuns: [], meanings: ['king','rule','magnate'] },
                { literal: '瓜', ons: ['カ','ケ'], kuns: ['うり'], meanings: ['melon'] },
                { literal: '瓦', ons: ['ガ'], kuns: ['かわら','ぐらむ'], meanings: ['tile','gram'] },
                { literal: '甘', ons: ['カン'], kuns: ['あま.い','あま.える','あま.やかす','うま.い'], meanings: ['sweet','coax','pamper','be content','sugary'] },
                { literal: '生', ons: ['セイ','ショウ'], kuns: ['い.きる','い.かす','い.ける','う.まれる','うま.れる','う.まれ','うまれ','う.む','お.う','は.える','は.やす','き','なま','なま-','な.る','な.す','む.す','-う'], meanings: ['life','genuine','birth'] },
                { literal: '用', ons: ['ヨウ'], kuns: ['もち.いる'], meanings: ['utilize','business','service','use','employ'] },
                { literal: '田', ons: ['デン'], kuns: ['た'], meanings: ['rice field','rice paddy'] },
                { literal: '疋', ons: ['ヒキ','ショ','ソ','ヒツ'], kuns: ['あし'], meanings: ['head','counter for animals'] },
                { literal: '疒', ons: ['ダク','ニャク','ソウ','ジョウ','シツ'], kuns: ['や.む'], meanings: ['trailing sickness','sick radical (no. 104)'] },
                { literal: '癶', ons: ['ハツ'], kuns: [], meanings: ['dotted tent radical (no. 105)'] },
                { literal: '白', ons: ['ハク','ビャク'], kuns: ['しろ','しら-','しろ.い'], meanings: ['white'] },
                { literal: '皮', ons: ['ヒ'], kuns: ['かわ'], meanings: ['pelt','skin','hide','leather','skin radical (no. 107)'] },
                { literal: '皿', ons: ['ベイ'], kuns: ['さら'], meanings: ['dish','a helping','plate'] },
                { literal: '目', ons: ['モク','ボク'], kuns: ['め','-め','ま-'], meanings: ['eye','class','look','insight','experience','care','favor'] },
                { literal: '矛', ons: ['ム','ボウ'], kuns: ['ほこ'], meanings: ['halberd','arms','festival float'] },
                { literal: '矢', ons: ['シ'], kuns: ['や'], meanings: ['dart','arrow'] },
                { literal: '石', ons: ['セキ','シャク','コク'], kuns: ['いし'], meanings: ['stone'] },
                { literal: '示', ons: ['ジ','シ'], kuns: ['しめ.す'], meanings: ['show','indicate','point out','express','display'] },
                { literal: '禸', ons: ['ジュウ','ニュ'], kuns: ['あしあと'], meanings: ['rump','footprint radical (no. 114)'] },
                { literal: '禾', ons: ['カ'], kuns: ['いね'], meanings: ['2-branch tree radical (no. 115)'] },
                { literal: '穴', ons: ['ケツ'], kuns: ['あな'], meanings: ['hole','aperture','slit','cave','den'] },
                { literal: '立', ons: ['リツ','リュウ','リットル'], kuns: ['た.つ','-た.つ','た.ち-','た.てる','-た.てる','た.て-','たて-','-た.て','-だ.て','-だ.てる'], meanings: ['stand up','rise','set up','erect'] },
                { literal: '竹', ons: ['チク'], kuns: ['たけ'], meanings: ['bamboo'] },
                { literal: '米', ons: ['ベイ','マイ','メエトル'], kuns: ['こめ','よね'], meanings: ['rice','USA','metre'] },
                { literal: '糸', ons: ['シ'], kuns: ['いと'], meanings: ['thread'] },
                { literal: '缶', ons: ['カン'], kuns: ['かま'], meanings: ['tin can','container','jar radical (no. 121)'] },
                { literal: '罒', ons: ['モウ','ボウ'], kuns: ['あみがしら','よこめ'], meanings: ['net radical variant (no. 122)'] },
                { literal: '羊', ons: ['ヨウ'], kuns: ['ひつじ'], meanings: ['sheep'] },
                { literal: '羽', ons: ['ウ'], kuns: ['は','わ','はね'], meanings: ['feathers','counter for birds, rabbits'] },
                { literal: '耂', ons: [], kuns: [], meanings: ['variant of radical 125'] },
                { literal: '而', ons: ['ジ','ニ'], kuns: ['しこ.うして','しか.して','しか.も','しか.れども','すなわち','なんじ','しかるに'], meanings: ['rake'] },
                { literal: '耒', ons: ['ライ','ルイ'], kuns: ['き','く','すき'], meanings: ['come','plough','3-branch tree radical (no. 127)'] },
                { literal: '耳', ons: ['ジ'], kuns: ['みみ'], meanings: ['ear'] },
                { literal: '聿', ons: ['イチ','イツ'], kuns: ['ふで','ここに'], meanings: ['brush','finally','self','relate','follow','here','fast','writing brush radical (no. 129)'] },
                { literal: '肉', ons: ['ニク'], kuns: ['しし'], meanings: ['meat'] },
                { literal: '臣', ons: ['シン','ジン'], kuns: [], meanings: ['retainer','subject'] },
                { literal: '自', ons: ['ジ','シ'], kuns: ['みずか.ら','おの.ずから','おの.ずと'], meanings: ['oneself'] },
                { literal: '至', ons: ['シ'], kuns: ['いた.る'], meanings: ['climax','arrive','proceed','reach','attain','result in'] },
                { literal: '臼', ons: ['キュウ','グ'], kuns: ['うす','うすづ.く'], meanings: ['mortar'] },
                { literal: '舌', ons: ['ゼツ'], kuns: ['した'], meanings: ['tongue','reed','clapper'] },
                { literal: '舛', ons: ['ブ','セン'], kuns: ['まい','そむ.く'], meanings: ['dancing radical (no. 136)'] },
                { literal: '舟', ons: ['シュウ'], kuns: ['ふね','ふな-','-ぶね'], meanings: ['boat','ship'] },
                { literal: '艮', ons: ['コン','ゴン'], kuns: ['うしとら'], meanings: ['northeast (Oriental zodiac)','stopping','good radical (no. 138)'] },
                { literal: '色', ons: ['ショク','シキ'], kuns: ['いろ'], meanings: ['color'] },
                { literal: '艹', ons: [], kuns: [], meanings: ['grass','radical number 140'] },
                { literal: '虍', ons: ['コ'], kuns: [], meanings: ['tiger spots','mottled','tiger or tiger crown radical (no. 141)'] },
                { literal: '虫', ons: ['チュウ','キ'], kuns: ['むし'], meanings: ['insect','bug','temper'] },
                { literal: '血', ons: ['ケツ'], kuns: ['ち'], meanings: ['blood'] },
                { literal: '行', ons: ['コウ','ギョウ','アン'], kuns: ['い.く','ゆ.く','-ゆ.き','-ゆき','-い.き','-いき','おこな.う','おこ.なう'], meanings: ['going','journey','carry out','conduct','act','line','row','bank'] },
                { literal: '衣', ons: ['イ','エ'], kuns: ['ころも','きぬ','-ぎ'], meanings: ['garment','clothes','dressing'] },
                { literal: '西', ons: ['セイ','サイ','ス'], kuns: ['にし'], meanings: ['west','Spain'] },
                { literal: '見', ons: ['ケン'], kuns: ['み.る','み.える','み.せる'], meanings: ['see','hopes','chances','idea','opinion','look at','visible'] },
                { literal: '角', ons: ['カク'], kuns: ['かど','つの'], meanings: ['angle','corner','square','horn','antlers'] },
                { literal: '言', ons: ['ゲン','ゴン'], kuns: ['い.う','こと'], meanings: ['say'] },
                { literal: '谷', ons: ['コク'], kuns: ['たに','きわ.まる'], meanings: ['valley'] },
                { literal: '豆', ons: ['トウ','ズ'], kuns: ['まめ','まめ-'], meanings: ['beans','pea','midget'] },
                { literal: '豕', ons: ['シ'], kuns: [], meanings: ['pig','hog','pig radical (no. 152)'] },
                { literal: '豸', ons: ['タイ','チ'], kuns: [], meanings: ['snake','legless insect','badger or clawed dog radical (no. 153)'] },
                { literal: '貝', ons: ['バイ'], kuns: ['かい'], meanings: ['shellfish'] },
                { literal: '赤', ons: ['セキ','シャク'], kuns: ['あか','あか-','あか.い','あか.らむ','あか.らめる'], meanings: ['red'] },
                { literal: '走', ons: ['ソウ'], kuns: ['はし.る'], meanings: ['run'] },
                { literal: '足', ons: ['ソク'], kuns: ['あし','た.りる','た.る','た.す'], meanings: ['leg','foot','be sufficient','counter for pairs of footwear'] },
                { literal: '身', ons: ['シン'], kuns: ['み'], meanings: ['somebody','person','one\'s station in life'] },
                { literal: '車', ons: ['シャ'], kuns: ['くるま'], meanings: ['car'] },
                { literal: '辛', ons: ['シン'], kuns: ['から.い','つら.い','-づら.い','かのと'], meanings: ['spicy','bitter','hot','acrid'] },
                { literal: '辰', ons: ['シン','ジン'], kuns: ['たつ'], meanings: ['sign of the dragon','7-9AM','fifth sign of Chinese zodiac','shin dragon radical (no. 161)'] },
                { literal: '辶', ons: ['チャク'], kuns: [], meanings: ['walk','walking','road radical variant (no. 162)'] },
                { literal: '阝', ons: [], kuns: ['こざと'], meanings: ['place','left village radical - 2 stroke form (no. 170)'] },
                { literal: '酉', ons: ['ユウ'], kuns: ['とり'], meanings: ['west','bird','sign of the bird','5-7PM','tenth sign of Chinese zodiac','sake radical (no. 164)'] },
                { literal: '釆', ons: ['ハン','ベン','サイ'], kuns: ['と.る','いろどり','のごめ'], meanings: ['separate','divide','topped rice radical (no. 165)'] },
                { literal: '里', ons: ['リ'], kuns: ['さと'], meanings: ['ri','village','parent\'s home','league'] },
                { literal: '金', ons: ['キン','コン','ゴン'], kuns: ['かね','かな-','-がね'], meanings: ['gold'] },
                { literal: '長', ons: ['チョウ'], kuns: ['なが.い','おさ'], meanings: ['long','leader'] },
                { literal: '門', ons: ['モン'], kuns: ['かど','と'], meanings: ['gate','counter for cannons'] },
                { literal: '阝', ons: [], kuns: ['こざと'], meanings: ['place','left village radical - 2 stroke form (no. 170)'] },
                { literal: '隶', ons: ['タイ'], kuns: [], meanings: ['extend','give','cast','slave radical (no. 171)'] },
                { literal: '隹', ons: ['サイ','スイ'], kuns: ['とり'], meanings: ['bird','old bird radical (no. 172)'] },
                { literal: '雨', ons: ['ウ'], kuns: ['あめ','あま-','-さめ'], meanings: ['rain'] },
                { literal: '青', ons: ['セイ','ショウ'], kuns: ['あお','あお-','あお.い'], meanings: ['blue','green'] },
                { literal: '非', ons: ['ヒ'], kuns: ['あら.ず'], meanings: ['un-','mistake','negative','injustice','non-'] },
                { literal: '面', ons: ['メン','ベン'], kuns: ['おも','おもて','つら'], meanings: ['mask','face','features','surface'] },
                { literal: '革', ons: ['カク'], kuns: ['かわ'], meanings: ['leather','skin','reform','become serious'] },
                { literal: '韋', ons: ['イ'], kuns: ['そむ.く'], meanings: ['tanned leather radical (no. 178)'] },
                { literal: '韭', ons: ['キュウ','ク'], kuns: [], meanings: ['leek radical (no. 179)'] },
                { literal: '音', ons: ['オン','イン','-ノン'], kuns: ['おと','ね'], meanings: ['sound','noise'] },
                { literal: '頁', ons: ['ケツ'], kuns: ['ぺえじ','おおがい','かしら'], meanings: ['page','leaf'] },
                { literal: '風', ons: ['フウ','フ'], kuns: ['かぜ','かざ-','-かぜ'], meanings: ['wind','air','style','manner'] },
                { literal: '飛', ons: ['ヒ'], kuns: ['と.ぶ','と.ばす','-と.ばす'], meanings: ['fly','skip (pages)','scatter'] },
                { literal: '食', ons: ['ショク','ジキ'], kuns: ['く.う','く.らう','た.べる','は.む'], meanings: ['eat','food'] },
                { literal: '首', ons: ['シュ'], kuns: ['くび'], meanings: ['neck','counter for songs and poems'] },
                { literal: '香', ons: ['コウ','キョウ'], kuns: ['か','かお.り','かお.る'], meanings: ['incense','smell','perfume'] },
                { literal: '馬', ons: ['バ'], kuns: ['うま','うま-','ま'], meanings: ['horse'] },
                { literal: '骨', ons: ['コツ'], kuns: ['ほね'], meanings: ['skeleton','bone','remains','frame'] },
                { literal: '高', ons: ['コウ'], kuns: ['たか.い','たか','-だか','たか.まる','たか.める'], meanings: ['tall','high','expensive'] },
                { literal: '髟', ons: ['ヒュウ','ヒョウ'], kuns: [], meanings: ['hair hanging long','mane','long hair radical (no.190)'] },
                { literal: '鬥', ons: [], kuns: [], meanings: ['broken gate radical (no. 191)'] },
                { literal: '鬯', ons: ['チョウ'], kuns: ['かおりぐさ'], meanings: ['fragrant herbs','spiced liqueur','grow','spread'] },
                { literal: '鬲', ons: ['カク','レキ'], kuns: ['かなえ','へだ.てる'], meanings: ['tripod'] },
                { literal: '鬼', ons: ['キ'], kuns: ['おに','おに-'], meanings: ['ghost','devil'] },
                { literal: '魚', ons: ['ギョ'], kuns: ['うお','さかな','-ざかな'], meanings: ['fish'] },
                { literal: '鳥', ons: ['チョウ'], kuns: ['とり'], meanings: ['bird','chicken'] },
                { literal: '鹵', ons: ['ロ'], kuns: ['しお','しおち','たて'], meanings: ['salt'] },
                { literal: '鹿', ons: ['ロク'], kuns: ['しか','か'], meanings: ['deer'] },
                { literal: '麦', ons: ['バク'], kuns: ['むぎ'], meanings: ['barley','wheat'] },
                { literal: '麻', ons: ['マ','マア'], kuns: ['あさ'], meanings: ['hemp','flax'] },
                { literal: '黄', ons: ['コウ','オウ'], kuns: ['き','こ-'], meanings: ['yellow'] },
                { literal: '黍', ons: ['ショ'], kuns: ['きび'], meanings: ['millet'] },
                { literal: '黒', ons: ['コク'], kuns: ['くろ','くろ.ずむ','くろ.い'], meanings: ['black'] },
                { literal: '黹', ons: ['チ'], kuns: ['ぬう','ぬいとり'], meanings: ['sewing radical (no. 204)'] },
                { literal: '黽', ons: ['ボウ','ビン','ベン','ミン','メン'], kuns: ['あおがえる','つと.める'], meanings: ['green frog','industry'] },
                { literal: '鼎', ons: ['テイ'], kuns: ['かなえ'], meanings: ['three legged kettle'] },
                { literal: '鼓', ons: ['コ'], kuns: ['つづみ'], meanings: ['drum','beat','rouse','muster'] },
                { literal: '鼠', ons: ['ソ','ショ'], kuns: ['ねずみ','ねず'], meanings: ['rat','mouse','dark gray'] },
                { literal: '鼻', ons: ['ビ'], kuns: ['はな'], meanings: ['nose','snout'] },
                { literal: '齊', ons: ['セイ','サイ'], kuns: ['そろ.う','ひと.しい','ひと.しく','あたる','はやい'], meanings: ['alike','equal','similar','Saito'] },
                { literal: '歯', ons: ['シ'], kuns: ['よわい','は','よわ.い','よわい.する'], meanings: ['tooth','cog'] },
                { literal: '竜', ons: ['リュウ','リョウ','ロウ'], kuns: ['たつ','いせ'], meanings: ['dragon','imperial'] },
                { literal: '亀', ons: ['キ','キュウ','キン'], kuns: ['かめ'], meanings: ['tortoise','turtle'] },
                { literal: '龠', ons: ['ヤク'], kuns: ['ふえ'], meanings: ['flute'] }
            ];
        }
    };
});