/* ============================================================
   بيانات قضية: آخر مكالمة
   قضية قتل — راجل أعمال بيتلاقى ميت في عربيته، وآخر مكالمة عنده
   مركّبة من تسجيلات قديمة بصوت بنته. هو نفسه جهزها كجزء من خطة
   ابتزاز ضدها، والقاتل الحقيقي استغلها بعد كده.
   ============================================================ */

const IMG_BASE_LASTCALL = 'https://raw.githubusercontent.com/MoOnsy07/Tarf-khyt/main/images/last-call/';

const CASE_LAST_CALL = {
  id: 'last-call',
  title: 'آخر مكالمة',
  caseNo: 'CASE 029',
  subtitle: 'موقف سيارات خاص، القاهرة الجديدة',
  coverImg: IMG_BASE_LASTCALL + 'cover.webp',
  difficulty: 'صعبة جدًا',
  estMinutes: 40,
  investigationPoints: 22,
  teaser: 'رجل أعمال بيتلاقى ميت في عربيته، وآخر مكالمة عنده صوت بنته اللي مركّبة من تسجيلات قديمة. هو نفسه جهزها كخطة ابتزاز، لكن حد تاني استغلها عشان يقتله.',

  isPremium: false,
  categories: ['murder', 'mystery'],
  seriesId: null,
  seriesOrder: null,
  seriesTitle: null,

  briefing: {
    heroImg: IMG_BASE_LASTCALL + 'cover.webp',
    heroCaption: 'CASE 029 — آخر مكالمة، 14 دقيقة',
    text1: 'راجل أعمال، "فؤاد"، بيتلاقى ميت في عربيته في موقف سيارات خاص. على موبايله ظاهر إدخال في تطبيق تسجيل المكالمات مدته 14 دقيقة باسم بنته "منة"، اللي بينهم مشاكل عائلية من سنين، ومعاه ملف صوتي بصوتها. منة بتقسم إنها ماكلمتوش الليلة دي، فالدليل الظاهري بيحطها في موقف صعب جدًا.',
    text2: 'لكن محامي منة لاحظ حاجة غريبة جدًا في الملف الصوتي: صوت أذان بيتكرر بنفس النغمة بالظبط، وكلاكس عربية بنفس الصوت في جزئين مختلفين من المكالمة. طلب منك تحقق بعناية فائقة، عشان تفهم هل التسجيل ده حقيقي فعلًا ولا مركّب من قطع مختلفة.',
    meta: [
      { label:'المجني عليه', value:'فؤاد — رجل أعمال' },
      { label:'المتهمة الأولى', value:'منة — ابنته، خلافات عائلية قديمة' },
      { label:'الدليل المريب', value:'تكرار أصوات خلفية في أجزاء مختلفة من المكالمة' },
      { label:'طلب التحقيق', value:'محامي منة' },
    ],
  },

  prologue: [
    {
      scene:'المشهد ١ — ليلة عادية',
      img: IMG_BASE_LASTCALL + 'lastcall-scene1.jpg',
      text:'فؤاد بيركب عربيته بعد اجتماع عمل متأخر، بيتصل بحد على تليفونه وهو ماشي في موقف السيارات الخاص شبه الفاضي.'
    },
    {
      scene:'المشهد ٢ — المكالمة',
      img: IMG_BASE_LASTCALL + 'lastcall-scene2.jpg',
      text:'ملف صوتي مدته 14 دقيقة ظاهر جوه تطبيق تسجيل المكالمات باسم منة، وفيه نقاش عائلي بصوتها وصوت فؤاد كأنه حصل الليلة دي.'
    },
    {
      scene:'المشهد ٣ — الاكتشاف',
      img: IMG_BASE_LASTCALL + 'lastcall-scene3.jpg',
      text:'حارس الموقف بيلاقي فؤاد ميت في عربيته الصبح. الموبايل موجود جنبه، وتطبيق تسجيل المكالمات مفتوح على ملف باسم منة.'
    },
    {
      scene:'المشهد ٤ — التحقيق',
      img: IMG_BASE_LASTCALL + 'lastcall-scene4.jpg',
      text:'محامي منة بيديك نسخة من الملف، وسجل الهاتف، وبيطلب بيانات شركة الاتصالات عشان تقارن بينهم قبل ما الاستنتاج الظاهري يتحول لاتهام.'
    },
  ],

  suspects: [
    {
      id:'mennat_daughter', name:'منة', role:'ابنة فؤاد، بينهم خلافات قديمة', img: IMG_BASE_LASTCALL + 'mennat.jpg', avatarEmoji:'😨',
      alibi:'قالت إنها ماكلمتوش الليلة دي، وكانت في بيتها. بيانات شركة الاتصالات على خطها ما فيهاش مكالمة مع فؤاد في التوقيت المزعوم.',
      questions:[
        { q:'إزاي بتفسري وجود ملف بصوتك ظاهر كتسجيل مكالمة عند أبوك؟', unlockId:'daughter_confusion',
          a:'"معنديش تفسير، أنا متأكدة إني ماكلمتوش أبويا الليلة دي، الصوت ده يمكن يبقى صوتي بس مش من مكالمة حقيقية حصلت فعلًا."' },
        { q:'إيه طبيعة الخلاف بينك وبين أبوك؟', unlockId:'family_dispute',
          a:'"خلاف قديم على ميراث أمي، مستمر من سنين، وكل محاولة تصالح بتفشل من ساعتها."' },
      ],
      confrontations:{
        call_log_official:'الملف ده... مش صوتي، ده مركّب من كلام قديم، أنا متأكدة.',
        daughter_confusion:'معنديش تفسير للتسجيل ده، أنا ماكلمتش بابا الليلة دي خالص.',
        family_dispute:'الخلاف ده قديم بيننا، بس ده ملوش علاقة بموته.',
        seif_knew_family:'بابا كان بيهددني بتسجيلات قديمة، وسيف كان عارف بالخطة دي.',
        recordings_archive:'بابا كان محتفظ بتسجيلات قديمة ليا، حاجة كانت بتضايقني أوي.',
        fuad_prepared_it:'بابا نفسه جهّز الأرشيف ده، مش أنا ولا حد تاني.'
      }
    },
    {
      id:'lawyer_tamer', name:'المحامي تامر', role:'محامي منة، طلب التحقيق', img: IMG_BASE_LASTCALL + 'tamer.jpg', avatarEmoji:'⚖️',
      accusable:false,
      alibi:'مش متهم، هو اللي طلب التحقيق أصلًا.',
      questions:[
        { q:'إيه اللي خلاك مش مقتنع بالتسجيل زي ما هو؟',
          a:'"صوت الأذان بيتكرر بنفس النغمة بالظبط في جزئين مختلفين، وده تقريبًا مستحيل يحصل في مكالمة حقيقية واحدة."' },
        { q:'راجعت تفاصيل تانية في التسجيل؟', unlockId:'car_horn_repeat',
          a:'"أيوه، كلاكس عربية بنفس الصوت بالظبط بيتكرر برضه في جزئين مختلفين، ده دليل قوي على إن التسجيل مركّب."' },
      ],
      confrontations:{
        car_horn_repeat:'الكلاكس ده... يمكن يبقى صدفة، عربيات كتير بيبقى صوتها متشابه.'
      }
    },
    {
      id:'business_partner_seif', name:'سيف', role:'شريك فؤاد في الأعمال', img: IMG_BASE_LASTCALL + 'seif.jpg', avatarEmoji:'💼',
      alibi:'قال إنه كان في بيته طول الليلة، بعيد تمامًا عن الموقف.',
      questions:[
        { q:'إيه علاقتك بفؤاد التجارية؟', unlockId:'partnership_conflict',
          a:'"شركاء من سنين، بس كان في خلاف مالي كبير مؤخرًا على تقييم حصة كل واحد فينا في الشركة."' },
        { q:'كنت عارف بخلاف فؤاد مع بنته؟', unlockId:'seif_knew_family',
          a:'"أيوه، فؤاد كان بيحكيلي عن الموضوع كتير، حتى قال لي مرة إنه فكر يستخدم تسجيلات قديمة لبنته عشان يضغط عليها في موضوع الميراث."' },
        { q:'قلت إنك كنت في البيت، لكن سجل بوابة الجراج بيحط عربيتك جوه وقت الوفاة — تفسر ده إزاي؟', requires:['parking_entry_log','forensic_report'], closesInterrogation:true,
          a:'(بيسكت لحظة) "عديت عليه فعلًا عشان نكمل كلام الشراكة... بس لما مشيت كان لسه عايش. معرفش إيه اللي حصل بعدي."' },
      ],
      confrontations:{
        forensic_report:'التوقيت ده صحيح، أنا كنت هناك فعلاً، بس مش زي ما إنتوا فاكرين.',
        parking_entry_log:'دخلت الجراج فعلاً، بس كنت باخد حاجة من العربية بس.',
        partnership_conflict:'الخلاف على الحصص كان موجود، بس مكنش وصل لحد إننا نتخانق.',
        seif_knew_family:'فؤاد قالي عن خطته مع منة، بس أنا ماكنتش موافق عليها أصلاً.'
      }
    },
    {
      id:'assistant_rasha', name:'رشا', role:'سكرتيرة فؤاد الشخصية', img: IMG_BASE_LASTCALL + 'rasha.jpg', avatarEmoji:'📁',
      alibi:'قالت إنها بس بتنظم مواعيده، ومالهاش أي علاقة بحياته الشخصية.',
      questions:[
        { q:'كنتِ عارفة بموضوع التسجيلات القديمة لمنة؟', unlockId:'recordings_archive',
          a:'"أيوه، فؤاد كان محتفظ بأرشيف قديم من تسجيلات مكالمات مع بنته من سنين، كان بيقول إنه بيحتفظ بيها للذكرى بس."' },
        { q:'ليه تحتفظي بمعلومة زي دي من غير ما تقوليها؟',
          a:'"ماحسيتش إنها مهمة وقتها، دي حياته الشخصية، مش شغلي أتدخل فيها."' },
      ],
      confrontations:{
        parking_entry_log:'أنا شفت عربية سيف بس، ماكنتش متابعة كل تفاصيل توقيتها.',
        recordings_archive:'فؤاد كان محتفظ بأرشيف قديم فعلاً، أنا كنت عارفة بوجوده بس.'
      }
    },
  ],

  evidence: [
    { id:'forensic_report', tag:'من تقرير الطب الشرعي', crit:true, title:'توقيت وسبب الوفاة', img:null,
      short:'الوفاة حصلت داخل العربية حوالي 11:25 بعد إصابة قوية بالرأس',
      full:'التقرير يحدد الوفاة تقريبًا بين 11:20 و11:30 مساءً، نتيجة إصابة قوية بالرأس أثناء وجود فؤاد داخل العربية. مفيش ما يشير إن الوفاة حصلت أثناء مكالمة هاتفية حقيقية.',
      unlocked:true, order:0 },

    { id:'parking_entry_log', tag:'من سجل بوابة الجراج', crit:true, title:'عربية سيف دخلت الجراج وقت الوفاة', img:null,
      short:'عربية سيف دخلت 11:12 وخرجت 11:34 رغم قوله إنه كان في البيت',
      full:'نظام بوابة الجراج سجل لوحة عربية سيف داخلة الساعة 11:12 وخارجة 11:34، وهي نفس الفترة اللي حددها الطب الشرعي للوفاة. ده يكسر أليبيه ويحطه في مكان الجريمة.',
      unlocked:false, order:10 },

    { id:'call_log_official', tag:'من سجل الهاتف', crit:true, title:'سجل المكالمة الظاهر على هاتف فؤاد', img: IMG_BASE_LASTCALL + 'lastcall-log.jpg', unlocksAudio:true,
      short:'ملف 14 دقيقة ظاهر باسم منة داخل تطبيق تسجيل المكالمات',
      full:'تطبيق تسجيل المكالمات على موبايل فؤاد بيعرض ملف مدته 14 دقيقة باسم منة، لكن ده سجل محلي على الهاتف، مش إثبات من شركة الاتصالات إن مكالمة حصلت فعلًا.',
      unlocked:false, order:1 },

    { id:'daughter_confusion', tag:'من استجواب منة', crit:false, title:'حيرة منة من التسجيل', img:null,
      short:'ماعندهاش تفسير لوجود صوتها في مكالمة تقول إنها ماحصلتش',
      full:'منة أكدت إنها ما اتصلتش بوالدها في الليلة دي. مراجعة بيانات خطها من شركة الاتصالات ما أظهرتش أي مكالمة بينها وبين فؤاد في التوقيت المزعوم، وده بيخلّي سجل الهاتف نفسه محل شك.',
      unlocked:false, order:2 },

    { id:'family_dispute', tag:'من استجواب منة', crit:false, title:'خلاف الميراث القديم', img:null,
      short:'خلاف مستمر من سنين على ميراث الأم',
      full:'منة أكدت خلاف قديم ومستمر مع والدها على ميراث والدتها، من غير أي محاولة تصالح ناجحة.',
      unlocked:false, order:3 },

    { id:'car_horn_repeat', tag:'من استجواب المحامي تامر', crit:false, title:'ملاحظة تكرار الكلاكس', img:null,
      short:'صوت كلاكس مطابق بيتكرر في جزئين مختلفين',
      full:'المحامي تامر لاحظ صوت كلاكس عربية مطابق تمامًا بيتكرر في جزئين مختلفين من التسجيل، علامة على تركيب غير طبيعي.',
      unlocked:false, order:4 },

    { id:'partnership_conflict', tag:'من استجواب سيف', crit:true, title:'خلاف مالي بين سيف وفؤاد', img:null,
      short:'خلاف كبير على تقييم حصص الشركة',
      full:'سيف اعترف بخلاف مالي كبير مع فؤاد على تقييم حصص الشركة، خلاف كان لسه مفتوح ومحدش حسمه.',
      unlocked:false, order:5 },

    { id:'seif_knew_family', tag:'من استجواب سيف', crit:true, title:'معرفة سيف بخطة فؤاد للتسجيلات', img:null,
      short:'فؤاد أخبره بنيته يستخدم تسجيلات قديمة لبنته للضغط عليها',
      full:'سيف اعترف إن فؤاد أخبره بخطته يستخدم تسجيلات قديمة لبنته منة كأداة ضغط في خلاف الميراث.',
      unlocked:false, order:6 },

    { id:'recordings_archive', tag:'من استجواب رشا', crit:true, title:'أرشيف فؤاد من التسجيلات القديمة', img: IMG_BASE_LASTCALL + 'lastcall-archive.jpg',
      short:'فؤاد كان محتفظ بأرشيف مكالمات قديمة مع منة',
      full:'رشا أكدت إن فؤاد كان محتفظ بأرشيف طويل من تسجيلات مكالماته القديمة مع منة، كان بيحتفظ بيها من غير سبب واضح لسنين.',
      unlocked:false, order:7 },

    { id:'audio_composite_proof', tag:'من التحليل الصوتي', crit:true, title:'إثبات تركيب التسجيل من مقاطع مختلفة', img: IMG_BASE_LASTCALL + 'lastcall-wave.jpg',
      short:'مقطع أذان وكلاكس مطابقين حرفيًا في توقيتين مختلفين',
      full:'التحليل الصوتي بيثبت إن أصوات خلفية بعينها متكررة حرفيًا في مواضع مختلفة، مع فواصل تحرير بين الجمل. الملف متجمع من تسجيلات أقدم، ومش مكالمة واحدة حصلت في الليلة دي.',
      unlocked:false, order:8 },

    { id:'fuad_prepared_it', tag:'من تحليل إضافي', crit:true, title:'فؤاد نفسه جهّز التسجيل المركّب', img:null,
      short:'التسجيل اتجمع من أرشيف فؤاد الشخصي قبل موته',
      full:'تواريخ الملفات على لابتوب فؤاد ورسالة مسودة عنده بتوضح إنه هو اللي بدأ يجمع التسجيل من أرشيفه القديم قبل موته بأيام عشان يستخدمه كورقة ضغط على منة في خلاف الميراث. الملف كان جاهز قبل الجريمة.',
      unlocked:false, order:9 },
  ],

  contradictionPuzzle: { enabled:false },
  cameraPuzzle: { enabled:false },
  timelinePuzzle: { enabled:false },
  codeLockPuzzle: { enabled:false },
  matchPuzzle: { enabled:false },
  cipherPuzzle: { enabled:false },

  investigationActions: [
    { id:'lc_phone_check', kind:'فحص رقمي', label:'افحص موبايل فؤاد اللي جنب العربية', requires:['forensic_report'],
      description:'الموبايل لقيناه ملقى جنب مكان الحادثة — يستاهل تفحص آخر نشاط عليه قبل ما تسأل حد عن المكالمة.',
      resultEvidenceIds:['call_log_official'], score:5,
      successText:'لقيت ملف تسجيل مكالمة مدته 14 دقيقة ظاهر باسم منة داخل تطبيق تسجيل المكالمات.' },
  ],

  audioPuzzle: {
    enabled: true,
    tabLabel: 'تحليل صوتي',
    introText: 'حلل الملف الصوتي ودوّر على أصوات خلفية بتتكرر بشكل مطابق في مواضع مختلفة. لو لقيتها، ده معناه إن الملف اتجمع من تسجيلات أقدم.',
    duplicateSourceRange: [20, 40],
    duplicateTargetRange: [95, 115],
    matchStart: 95,
    matchEnd: 115,
    resultText: 'وصلت للمقطع الصح. التكرار مطابق بشكل ما يحصلش طبيعي في مكالمة واحدة، ومع فواصل التحرير بقى واضح إن الملف مركب من تسجيلات قديمة.',
    resultEvidenceIds: ['audio_composite_proof'],
  },

  evidenceCombinations: [
    { parts:['recordings_archive','audio_composite_proof'], resultId:'fuad_prepared_it' },
    { parts:['partnership_conflict','seif_knew_family'], resultId:'parking_entry_log' },
  ],

  correctSuspectId: 'business_partner_seif',
  conclusiveEvidenceIds: ['partnership_conflict', 'seif_knew_family', 'fuad_prepared_it', 'forensic_report', 'parking_entry_log'],
  conclusiveRequired: 3,

  theoryBuilder: {
    enabled: true,
    questions: [
      {
        id:'howidentified',
        label:'إزاي عرفت إن سيف هو الفاعل؟',
        options: [
          { id:'a', text:'خلافه المالي + دخوله الجراج في توقيت الوفاة رغم إنكاره + معرفته بالتسجيل الجاهز اللي فؤاد كان مجهزه' },
          { id:'b', text:'لأنه شريك فؤاد في الأعمال، وده وحده كفاية عشان يبقى المشتبه المنطقي في أي نزاع مالي بينهم' },
          { id:'c', text:'لأنه بدا هادئ جدًا أثناء الاستجواب، وده سلوك مريب مايتفقش مع حد بريء بيتسأل عن جريمة قتل' },
        ],
        correctOptionId:'a',
      },
      {
        id:'twist',
        label:'إيه كانت الحقيقة الكاملة عن التسجيل الغريب؟',
        options: [
          { id:'a', text:'فؤاد نفسه جهّز التسجيل المركّب من أرشيفه الشخصي كأداة ضغط على منة في خلاف الميراث، لكن سيف، اللي كان عارف بالخطة، استغل التسجيل الجاهز بعد الجريمة عشان يوجه التحقيق ناحيتها' },
          { id:'b', text:'منة نفسها فبركت التسجيل بمساعدة تامر المحامي بتاعها عشان توجه الشك بعيد عنها وتضمن حصة أكبر في الميراث' },
          { id:'c', text:'التسجيل كان حقيقي 100% ومفيش أي تلاعب فيه، وفؤاد فعلاً كلم منة بنفسه قبل موته بدقايق زي ما ظاهر في التطبيق' },
        ],
        correctOptionId:'a',
      },
    ],
  },

  endings: {
    good: {
      stamp:'القضية اتقفلت', badgeLabel:'القضية اتقفلت — إدانة', title:'الحقيقة كانت في التكرار الصوتي',
      paragraphs:[
        'فؤاد نفسه كان مجهز الملف المركب من تسجيلات قديمة لمنة عشان يضغط عليها في خلاف الميراث. سيف كان عارف بوجود الملف، وفي ليلة الجريمة دخل الجراج في التوقيت اللي حدده الطب الشرعي رغم إنه قال إنه في البيت. بعد وفاة فؤاد، استغل الملف الجاهز وتركه ظاهر على الهاتف كأنه آخر مكالمة مع منة.',
        'التحليل الصوتي برّأ منة من فكرة المكالمة الحقيقية، لكن اللي ربط سيف بالجريمة نفسها كان سجل دخول الجراج وتوقيت الوفاة، مع دافعه ومعرفته السابقة بالملف. كده اتفصل دليل التزييف عن دليل القتل بدل ما مجرد معرفة سيف بالخطة تتحول لوحدها لإثبات ضده.',
      ]
    },
    partial: {
      stamp:'جزئي', badgeLabel:'القضية اتقفلت — أدلة غير كافية', title:'الشك صح، الإثبات ناقص',
      paragraphs:[
        'التحقيق بيتجه صح ناحية سيف، ومنة في طريقها للتبريءة، بس الأدلة اللي جمعتها لسه مش كفاية تقفل القضية رسميًا قدام النيابة.',
      ],
      hint:'اجمع على الأقل 4 أدلة من: خلافه المالي، معرفته بخطة فؤاد، والتحليل الصوتي، قبل ما تتهم.'
    },
    bad: {
      stamp:'لغز بلا حل', badgeLabel:'القضية اتقفلت — اتهام ظالم', title:'القضية اتقفلت غلط',
      paragraphs:[
        'اتهمت {wrongName}، ومنة فضلت تحت اتهام مالوش أساس، بينما الفاعل الحقيقي فضل طليق. الأدلة كانت بتشاور بوضوح على اتجاه تاني من البداية.',
      ]
    }
  }
};

/* ============================================================
   ملاحظة: برومبتات الصور المقترحة لقضية "آخر مكالمة"

   الغلاف (cover.webp):
   "Photorealistic shot of a luxury car parked alone in a dim
   underground parking garage at night, phone screen glowing faintly
   through the window, moody atmosphere, documentary photography
   style, no text, no watermark, photorealistic"

   المشهد ١ (lastcall-scene1.jpg):
   "Photorealistic shot of a middle-aged Egyptian businessman walking
   through a nearly empty parking garage at night, phone to his ear,
   dim overhead lighting, photorealistic, no text, no watermark"

   المشهد ٢ (lastcall-scene2.jpg):
   "Photorealistic close-up of a man sitting in a car at night, phone
   held to ear, tense expression, dashboard glow lighting,
   photorealistic, no text, no watermark"

   المشهد ٣ (lastcall-scene3.jpg):
   "Photorealistic shot of a parking garage security guard discovering
   a parked car in the early morning light, concerned expression,
   photorealistic, no text, no watermark"

   المشهد ٤ (lastcall-scene4.jpg):
   "Photorealistic shot of a lawyer's office desk with a laptop
   showing an audio waveform and printed phone records, professional
   lighting, photorealistic, no text, no watermark"

   الشخصيات (برومبت مستقل لكل شخصية):

   منة (mennat.jpg):
   "Photorealistic portrait of a young Egyptian woman, formal
   business attire, distressed grieving expression, sitting in a
   modern office, soft indoor lighting, candid documentary
   photography style, no text, no watermark, photorealistic"

   المحامي تامر (tamer.jpg):
   "Photorealistic portrait of a middle-aged Egyptian male lawyer,
   formal suit, composed professional expression, sitting in an
   office with documents, soft indoor lighting, candid documentary
   photography style, no text, no watermark, photorealistic"

   سيف (seif.jpg):
   "Photorealistic portrait of a middle-aged Egyptian male business
   partner, formal attire, guarded calculating expression, standing
   in a private office, soft indoor lighting, candid documentary
   photography style, no text, no watermark, photorealistic"

   رشا (rasha.jpg):
   "Photorealistic portrait of a professional Egyptian female
   secretary, formal office attire, headscarf, composed watchful
   expression, sitting at a reception desk, soft indoor lighting,
   candid documentary photography style, no text, no watermark,
   photorealistic"

   دليل سجل المكالمة (lastcall-log.jpg):
   "Photorealistic close-up of a phone company call log printout on a
   desk, office lighting, no text, no watermark, photorealistic"

   دليل الأرشيف (lastcall-archive.jpg):
   "Photorealistic close-up of an old smartphone with a folder of
   saved audio recordings visible on screen, soft lighting, no text,
   no watermark, photorealistic"

   دليل الموجة الصوتية (lastcall-wave.jpg):
   "Photorealistic close-up of an audio waveform editing interface on
   a computer screen showing two highlighted matching segments, dark
   mode UI, no text, no watermark, photorealistic"
   ============================================================ */

/* REVIEW PATCH 2026-08-19 */
(() => {
  const c = CASE_LAST_CALL;
  c.evidenceCombinations = [
    { parts:['recordings_archive','audio_composite_proof'], resultId:'fuad_prepared_it' }
  ];
  const r = c.suspects.find(s => s.id === 'assistant_rasha');
  if (r) {
    const q = r.questions.find(q => !q.unlockId && !q.requires);
    if (q) {
      q.q = 'ممكن نراجع سجل بوابة الجراج في توقيت الوفاة؟';
      q.unlockId = 'parking_entry_log';
      q.a = '"أيوه، الإدارة عندها سجل آلي للبوابة. هطلعهولكم، لأنه أدق من ذاكرة أي شاهد."';
    }
  }
  c.conclusiveEvidenceIds = ['partnership_conflict','fuad_prepared_it','forensic_report','parking_entry_log'];
  c.conclusiveRequired = 4;
})();

/* ============================================================
   وضع القصة التفاعلية (Story Mode) — 2026-08-31
   ============================================================ */
(() => {
  const c = CASE_LAST_CALL;
  c.storyMode = true;
  c.startScene = 'scene_ordinary_night';

  c.scenes = {
    scene_ordinary_night: {
      img: IMG_BASE_LASTCALL + 'lastcall-scene1.jpg',
      label: 'الفصل الأول — ليلة عادية',
      text: 'فؤاد، رجل أعمال معروف، بيركب عربيته بعد اجتماع عمل متأخر في موقف سيارات خاص شبه فاضي بالقاهرة الجديدة. بيتصل بحد على تليفونه وهو ماشي بين العربيات.',
      inspects: [
        { label: '👀 افحص المكان', detail: 'الموقف شبه فاضي في الوقت ده من الليل، كاميرات مراقبة موجودة بس مش على كل زاوية.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_call_file' } ],
    },
    scene_call_file: {
      img: IMG_BASE_LASTCALL + 'lastcall-scene2.jpg',
      label: 'الفصل الأول — الملف الصوتي',
      text: 'ملف صوتي مدته 14 دقيقة ظاهر جوه تطبيق تسجيل المكالمات على موبايل فؤاد، باسم بنته "منة". فيه نقاش عائلي متوتر بصوتها وصوت فؤاد، كأنه حصل الليلة دي بالظبط.',
      choices: [ { label:'التالي ←', next:'scene_discovery' } ],
    },
    scene_discovery: {
      img: IMG_BASE_LASTCALL + 'lastcall-scene3.jpg',
      label: 'الفصل الأول — الاكتشاف',
      text: 'حارس الموقف بيلاقي فؤاد ميت في عربيته الصبح. الموبايل موجود جنبه، وتطبيق تسجيل المكالمات لسه مفتوح على ملف باسم منة. الدليل الظاهري بيحط منة في موقف صعب جدًا فورًا.',
      inspects: [
        { label: '👀 افحص وضع الجسد والموبايل', detail: 'الموبايل واقع بجانب فؤاد مباشرة، الشاشة لسه مضيئة على تطبيق التسجيلات وكأن حد سابه كده عن قصد.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_briefing' } ],
    },
    scene_briefing: {
      img: IMG_BASE_LASTCALL + 'lastcall-scene4.jpg',
      label: 'الفصل الأول — طلب التحقيق',
      text: 'المحامي تامر، محامي منة، بيديك نسخة من الملف، وسجل الهاتف، وبيطلب بيانات شركة الاتصالات عشان تقارن بينهم قبل ما الاستنتاج الظاهري يتحول لاتهام رسمي. "منة بتقسم إنها ماكلمتوش الليلة دي،" بيقولك بإصرار واضح.',
      choices: [ { label:'التالي ←', next:'scene_decision1' } ],
    },

    scene_decision1: {
      img: IMG_BASE_LASTCALL + 'lastcall-log.jpg',
      label: 'الفصل الثاني — قرار',
      text: 'قدامك دليل ظاهري بيتهم منة، ومحامي شكك في التسجيل نفسه. تقدر تفحص موبايل فؤاد وسجل المكالمة تقنيًا الأول، أو تقابل منة على طول وتسمع روايتها.',
      choices: [
        { label:'🔬 افحص الموبايل وسجل المكالمة الأول', next:'scene_phone_check', flag:'phone_first' },
        { label:'🗣️ قابل منة على طول', next:'scene_mennat_interview', flag:'mennat_first' },
      ],
    },
    scene_phone_check: {
      img: IMG_BASE_LASTCALL + 'lastcall-log.jpg',
      label: 'الفصل الثاني — فحص الموبايل',
      text: 'فحصت موبايل فؤاد اللي لقيناه ملقى جنب مكان الحادثة. لقيت ملف تسجيل مكالمة مدته 14 دقيقة ظاهر باسم منة داخل تطبيق تسجيل المكالمات — بس ده سجل محلي على الهاتف، مش إثبات من شركة الاتصالات إن مكالمة حصلت فعلًا.',
      inspects: [
        { label: '👀 راجع تقرير الطب الشرعي', detail: 'الوفاة حصلت تقريبًا بين 11:20 و11:30 مساءً، نتيجة إصابة قوية بالرأس. مفيش ما يشير إن الوفاة حصلت أثناء مكالمة هاتفية حقيقية.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_mennat_interview' } ],
    },
    scene_mennat_interview: {
      img: IMG_BASE_LASTCALL + 'mennat.jpg',
      label: 'الفصل الثاني — منة',
      text: 'منة بتبان خايفة جدًا، لكن مصممة: "معنديش تفسير، أنا متأكدة إني ماكلمتوش أبويا الليلة دي، الصوت ده يمكن يبقى صوتي بس مش من مكالمة حقيقية حصلت فعلًا." بتسألها عن طبيعة خلافها مع والدها، فبتقولك: "خلاف قديم على ميراث أمي، مستمر من سنين، وكل محاولة تصالح بتفشل من ساعتها."',
      inspects: [
        { label: '👀 لاحظ حالة منة النفسية', detail: 'خايفة ومرعوبة بشكل حقيقي، مش بيبان عليها أي تمثيل — دي حالة شخص متفاجئ فعلاً، مش حد بيخبي حاجة.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_lawyer_analysis' } ],
    },
    scene_lawyer_analysis: {
      img: IMG_BASE_LASTCALL + 'tamer.jpg',
      label: 'الفصل الثاني — ملاحظة المحامي',
      text: 'المحامي تامر بيوريك تفصيلة غريبة لاحظها في التسجيل: "صوت الأذان بيتكرر بنفس النغمة بالظبط في جزئين مختلفين، وده تقريبًا مستحيل يحصل في مكالمة حقيقية واحدة." بتسأله لو لاحظ تفاصيل تانية، فيقولك: "أيوه، كلاكس عربية بنفس الصوت بالظبط بيتكرر برضه في جزئين مختلفين، ده دليل قوي على إن التسجيل مركّب."',
      choices: [ { label:'التالي ←', next:'scene_decision2' } ],
    },

    scene_decision2: {
      img: IMG_BASE_LASTCALL + 'lastcall-wave.jpg',
      label: 'الفصل الثالث — قرار',
      text: 'الملاحظات بتشاور إن التسجيل مركب. تقدر تحلل الموجة الصوتية تقنيًا للتأكد من التركيب، تقابل سيف شريك فؤاد وتسأله عن خلافاتهم، أو تتهم منة فورًا بناءً على الدليل الظاهري وخلافها مع أبوها.',
      choices: [
        { label:'🔬 حلل الموجة الصوتية تقنيًا', next:'scene_audio_analysis', flag:'analyzed_audio' },
        { label:'🗣️ قابل سيف شريك فؤاد', next:'scene_seif_interview', flag:'seif_interview' },
        { label:'⚠️ اتهم منة فورًا', next:'ending_bad', flag:'accused_mennat_early' },
      ],
    },
    scene_audio_analysis: {
      img: IMG_BASE_LASTCALL + 'lastcall-wave.jpg',
      label: 'الفصل الثالث — تحليل الموجة الصوتية',
      text: 'حللت الملف الصوتي بدقة، ودورت على أصوات خلفية بتتكرر بشكل مطابق في مواضع مختلفة. لقيت مقطع أذان وكلاكس مطابقين حرفيًا في توقيتين مختلفين تمامًا، مع فواصل تحرير واضحة بين الجمل. الملف متجمع من تسجيلات أقدم، مش مكالمة واحدة حصلت الليلة دي.',
      inspects: [
        { label: '👀 دور على مصدر التسجيلات القديمة', detail: 'رشا، سكرتيرة فؤاد، ممكن تعرف حاجة عن أرشيف قديم من تسجيلاته.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_rasha_interview' } ],
    },
    scene_seif_interview: {
      img: IMG_BASE_LASTCALL + 'seif-composed.jpg',
      label: 'الفصل الثالث — سيف',
      text: 'سيف، شريك فؤاد في الأعمال، بيقولك عن علاقتهم التجارية: "شركاء من سنين، بس كان في خلاف مالي كبير مؤخرًا على تقييم حصة كل واحد فينا في الشركة." بتسأله لو كان عارف بخلاف فؤاد مع بنته، فبيتفاجئ من السؤال: "أيوه، فؤاد كان بيحكيلي عن الموضوع كتير، حتى قال لي مرة إنه فكر يستخدم تسجيلات قديمة لبنته عشان يضغط عليها في موضوع الميراث."',
      inspects: [
        { label: '👀 لاحظ رد فعل سيف على السؤال ده', detail: 'اتفاجئ إنك عارف بالتفصيلة دي، وكإنه ماكانش متوقع إنها هتوصلك.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_rasha_interview' } ],
    },
    scene_rasha_interview: {
      img: IMG_BASE_LASTCALL + 'rasha.jpg',
      label: 'الفصل الثالث — رشا',
      text: 'رشا، سكرتيرة فؤاد الشخصية، بتأكد وجود أرشيف قديم: "أيوه، فؤاد كان محتفظ بأرشيف قديم من تسجيلات مكالمات مع بنته من سنين، كان بيقول إنه بيحتفظ بيها للذكرى بس." بتسألها ليه ما ذكرتش المعلومة دي من الأول، فبتقولك: "ماحسيتش إنها مهمة وقتها، دي حياته الشخصية، مش شغلي أتدخل فيها."',
      choices: [ { label:'التالي ←', next:'scene_decision3' } ],
    },

    scene_decision3: {
      img: IMG_BASE_LASTCALL + 'lastcall-archive.jpg',
      label: 'الفصل الرابع — قرار',
      text: 'الصورة بدأت تتضح: فؤاد نفسه جهّز التسجيل المركّب من أرشيفه القديم كأداة ضغط على منة في خلاف الميراث. لكن السؤال الأهم لسه من غير إجابة — مين استخدم الملف ده فعليًا بعد موته؟ تقدر تفحص سجل بوابة الجراج للتأكد من مين كان في المكان وقت الوفاة، أو ترجع تسأل سيف عن أليبيه بالتفصيل.',
      choices: [
        { label:'🚗 افحص سجل بوابة الجراج', next:'scene_garage_log', flag:'checked_garage' },
        { label:'🗣️ ارجع تسأل سيف عن أليبيه', next:'scene_seif_alibi', flag:'questioned_alibi' },
      ],
    },
    scene_garage_log: {
      img: IMG_BASE_LASTCALL + 'lastcall-scene3.jpg',
      label: 'الفصل الرابع — سجل الجراج',
      text: 'نظام بوابة الجراج سجل لوحة عربية سيف داخلة الساعة 11:12 وخارجة 11:34 — نفس الفترة اللي حددها الطب الشرعي للوفاة بالظبط. سيف قال إنه كان في البيت طول الليلة، وده يكسر أليبيه تمامًا.',
      inspects: [
        { label: '👀 قارن التوقيت بدقة', detail: 'الفترة دي بتتطابق تمامًا مع نافذة الوفاة اللي حددها التقرير الشرعي — تطابق مش ممكن يكون صدفة.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_confront_seif' } ],
    },
    scene_seif_alibi: {
      img: IMG_BASE_LASTCALL + 'seif-cornered.jpg',
      label: 'الفصل الرابع — سؤال الأليبي',
      text: 'رجعت لسيف وسألته يأكد أليبيه بالتفصيل. اتلخبط شوية في كلامه، مش قادر يحدد تفاصيل واضحة عن الليلة، رغم إصراره إنه كان في البيت طول الوقت.',
      choices: [ { label:'التالي ←', next:'scene_confront_seif' } ],
    },
    scene_confront_seif: {
      img: IMG_BASE_LASTCALL + 'seif-cornered.jpg',
      label: 'الفصل الرابع — المواجهة الحاسمة',
      text: 'واجهته بسجل البوابة: "قلت إنك كنت في البيت، لكن سجل بوابة الجراج بيحط عربيتك جوه وقت الوفاة — تفسر ده إزاي؟" سكت لحظة طويلة، بعدين قال بصوت واطي: "عديت عليه فعلًا عشان نكمل كلام الشراكة... بس لما مشيت كان لسه عايش. معرفش إيه اللي حصل بعدي."',
      choices: [ { label:'التالي ←', next:'scene_pre_final' } ],
    },
    scene_pre_final: {
      img: IMG_BASE_LASTCALL + 'lastcall-wave.jpg',
      label: 'الفصل الرابع — قبل الإغلاق',
      text: 'الصورة كاملة اتوضحت: فؤاد جهّز التسجيل المركّب بنفسه كأداة ضغط على منة، وسيف، اللي كان عارف بالخطة، استغل الملف الجاهز بعد ما قتل فؤاد بسبب خلافهم المالي، وسابه ظاهر على الهاتف عشان يوجّه الشك لمنة. منة اتبرأت تمامًا من فكرة المكالمة الحقيقية.',
      choices: [ { label:'التالي ←', next:'scene_decision4' } ],
    },
    scene_decision4: {
      img: IMG_BASE_LASTCALL + 'seif-cornered.jpg',
      label: 'الفصل الرابع — القرار الأخير',
      text: 'قدامك القرار الأخير: تسلّم الملف كامل للنيابة كواقعة قتل موثقة، تاخد وقت تجهّز منة نفسيًا لسماع التفاصيل كاملة عن خطة أبوها ضدها قبل ما تعلن النتيجة، أو تعلن النتيجة مباشرة من غير أي تمهيد.',
      choices: [
        { label:'⚖️ سلّم الملف للنيابة رسميًا', next:'ending_good_prosecution', flag:'full_prosecution' },
        { label:'💙 جهّز منة نفسيًا الأول', next:'ending_good_gentle', flag:'prepared_mennat' },
        { label:'📢 أعلن النتيجة مباشرة', next:'ending_good_direct', flag:'direct_announcement' },
      ],
    },

    ending_good_prosecution: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_LASTCALL + 'lastcall-scene3.jpg',
      stamp: 'القضية اتقفلت', title: 'الحقيقة كانت في التكرار الصوتي',
      paragraphs: [
        'سلّمت الملف كامل للنيابة: تقرير الطب الشرعي، سجل بوابة الجراج اللي بيكسر أليبي سيف، دافعه المالي، معرفته المسبقة بالتسجيل، وإثبات إن فؤاد نفسه جهّز الملف المركب كأداة ضغط على منة. سيف اتحال رسميًا لتحقيق قتل عمد.',
        'التحليل الصوتي برّأ منة بالكامل، لكن اللي أدان سيف فعليًا كان سجل الجراج وتوقيت الوفاة، مش مجرد معرفته بالخطة. العدالة اتحققت بفصل دليل التزييف عن دليل القتل الفعلي.',
      ],
    },
    ending_good_gentle: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_LASTCALL + 'mennat.jpg',
      stamp: 'القضية اتقفلت', title: 'حقيقة برفق',
      paragraphs: [
        'قبل ما تعلن النتيجة رسميًا، قعدت مع منة وشرحتلها بهدوء إن أبوها كان بيخطط يستخدم تسجيلات قديمة ضدها في خلاف الميراث، وإن سيف استغل الخطة دي بعد موته. كانت لحظة صعبة، لكنها سمعت الحقيقة كاملة من غير صدمة إعلامية.',
        'الملف اتسلم للنيابة بعد كده، وسيف اتحال لتحقيق قتل عمد، لكن منة دخلت المرحلة القانونية وهي متجهزة نفسيًا لمواجهة تفاصيل معقدة عن علاقتها بأبوها.',
      ],
    },
    ending_good_direct: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_LASTCALL + 'seif-confessing.jpg',
      stamp: 'القضية اتقفلت', title: 'إعلان مباشر',
      paragraphs: [
        'أعلنت النتيجة مباشرة من غير تمهيد: سيف هو القاتل، وفؤاد نفسه جهّز التسجيل المركب ضد منة. سيف اتحال فورًا لتحقيق قتل عمد بناءً على سجل الجراج ودافعه المالي الواضح.',
        'منة اتبرأت رسميًا بسرعة، لكنها اضطرت تستوعب حقيقة خطة أبوها ضدها في نفس اللحظة اللي عرفت فيها هوية القاتل — مزيج صعب من الراحة والصدمة في وقت واحد.',
      ],
    },
    ending_bad: {
      isEnding: true, endingType: 'bad',
      img: IMG_BASE_LASTCALL + 'mennat.jpg',
      stamp: 'لغز بلا حل', title: 'القضية اتقفلت غلط',
      paragraphs: [
        'اتهمت منة بناءً على الدليل الظاهري وخلافها القديم مع أبوها، من غير ما تحلل التسجيل تقنيًا أو تتحقق من سجل بوابة الجراج. منة كانت بريئة تمامًا — التسجيل كان مركّب من أرشيف قديم جهّزه أبوها نفسه.',
        'سيف، القاتل الحقيقي، فضل طليق من غير أي مساءلة، ومنة دخلت مواجهة قانونية ظالمة فوق فقدانها لأبوها في نفس الوقت.',
      ],
    },
  };
})();
