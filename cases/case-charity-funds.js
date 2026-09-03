/* ============================================================
   بيانات قضية: تبرعات في الهوا
   قضية اختلاس — جمعية خيرية بتجمع تبرعات لمرضى محتاجين، وجزء
   كبير من الفلوس مش واصل للمرضى فعليًا.
   ============================================================ */

const IMG_BASE_CHARITY = 'https://raw.githubusercontent.com/MoOnsy07/Tarf-khyt/main/images/charity-funds/';

const CASE_CHARITY_FUNDS = {
  id: 'charity-funds',
  title: 'تبرعات في الهوا',
  caseNo: 'CASE 019',
  subtitle: 'جمعية "أمل" الخيرية، الإسكندرية',
  coverImg: IMG_BASE_CHARITY + 'cover.webp',
  difficulty: 'متوسطة',
  estMinutes: 30,
  investigationPoints: 17,
  teaser: 'جمعية خيرية جمعت تبرعات بالملايين لمرضى محتاجين، لكن المرضى مش واخدين حاجة تقريبًا. الفلوس راحت فين، ومين اللي بيستفيد فعلاً؟',

  isPremium: false,
  categories: ['corruption', 'fraud'],
  seriesId: null,
  seriesOrder: null,
  seriesTitle: null,

  briefing: {
    heroImg: IMG_BASE_CHARITY + 'cover.webp',
    heroCaption: 'CASE 019 — بعد حملة تبرعات ناجحة جدًا',
    text1: 'جمعية "أمل" الخيرية عملت حملة تبرعات كبيرة لعلاج أطفال مرضى بالسرطان، وجمعت مبلغ ضخم في وقت قصير بفضل انتشار الحملة على السوشيال ميديا. بعد شهرين، عيلة أحد الأطفال اشتكت إنها لسه مستنية تحويل مبلغ العلاج المتفق عليه من غير أي رد واضح.',
    text2: 'متطوعة قديمة في الجمعية، "سارة"، بدأت تلاحظ تناقضات في الأرقام المعلنة عن التبرعات مقابل المصروفات الفعلية. طلبت منك تحقق بهدوء قبل ما تتهم حد رسميًا، عشان تتأكد إن فلوس المرضى فعلًا وصلتهم أو لأ.',
    meta: [
      { label:'الجمعية', value:'جمعية أمل الخيرية' },
      { label:'المبلغ اللي اتجمع', value:'حوالي 8 ملايين جنيه من حملة تبرعات واحدة' },
      { label:'الشكوى', value:'تأخر تحويل مبلغ علاج طفل مريض' },
      { label:'طلب التحقيق', value:'سارة — متطوعة قديمة في الجمعية' },
    ],
  },

  prologue: [
    {
      scene:'المشهد ١ — الحملة الناجحة',
      img: IMG_BASE_CHARITY + 'charity-scene1.jpg',
      text:'حملة تبرعات على السوشيال ميديا بتنتشر بسرعة، فيديوهات لأطفال مرضى، ومبالغ كبيرة بتتجمع في أيام قليلة بفضل تعاطف الناس الواسع.'
    },
    {
      scene:'المشهد ٢ — الشكوى الأولى',
      img: IMG_BASE_CHARITY + 'charity-scene2.jpg',
      text:'عيلة طفل مريض بتتصل بالجمعية تسأل عن موعد تحويل مبلغ العلاج، وبتاخد ردود عامة ومماطلة غير مقنعة.'
    },
    {
      scene:'المشهد ٣ — الشك يكبر',
      img: IMG_BASE_CHARITY + 'charity-scene3.jpg',
      text:'سارة، بحكم خبرتها كمتطوعة قديمة، بتراجع الأرقام المعلنة للتبرعات مقابل قوائم الحالات اللي اتصرف عليها فعلًا، وبتلاقي فجوة كبيرة.'
    },
    {
      scene:'المشهد ٤ — التحقيق الهادئ',
      img: IMG_BASE_CHARITY + 'charity-scene4.jpg',
      text:'سارة بتطلب تحقيق داخلي هادئ قبل ما توصل الشكوى للإعلام وتضر سمعة الجمعية والمرضى اللي محتاجينها فعلًا في المستقبل.'
    },
  ],

  suspects: [
    {
      id:'hisham_founder', name:'هشام', role:'مؤسس ورئيس مجلس إدارة الجمعية', img: IMG_BASE_CHARITY + 'hisham.jpg', avatarEmoji:'🏢',
      alibi:'قال إن كل الفلوس بتتصرف حسب الأولويات الطبية للحالات الأصعب أولًا.',
      questions:[
        { q:'ليه في تأخير في تحويل مبلغ الطفل المريض ده بالذات؟', unlockId:'priority_excuse',
          a:'"في حالات تانية كانت أصعب واحتاجت الأولوية، الفلوس مش بتتوزع بالترتيب اللي الناس بتتبرع بيه، بتتوزع حسب شدة الحالة."' },
        { q:'ممكن نشوف قائمة الحالات اللي اتصرفلها فلوس فعليًا الشهرين اللي فاتوا؟', unlockId:'spending_list',
          a:'"أكيد، القائمة موجودة عند المحاسب، مفيش أي حاجة نخبيها."' },
        { q:'نسبة كبيرة من التبرعات مش موجود ليها أي أثر في قائمة الصرف الفعلية — عندك تفسير؟', requires:['spending_list','priority_excuse'], closesInterrogation:true,
          a:'(بيصمت لحظة) "جزء من الفلوس اتحول لشركة خدمات طبية عشان نحجز أسعار أجهزة وعلاج مقدم. الموضوع إداري، مش اختلاس."' },
      ],
      confrontations:{
        priority_excuse:'التوزيع بيتحدد حسب شدة الحالة، ده نظام معمول بيه من الأول.',
        spending_list:'القائمة دي فيها كل الصرف الفعلي، مفيش أي حاجة مخفية.',
        account_access:'أنا مؤسس الجمعية، طبيعي يكون عندي صلاحية الاعتماد النهائي.',
        transfer_note:'التحويل ده لشركة خدمات طبية موثوقة، وهنجهز الفواتير قريب.',
        personal_account_link:'الشركة دي بتشتغل معانا من زمان، إن كان قريبي بيديرها فده صدفة مش تلاعب.',
        contradiction_noted_charity:'كنت هجمع الفواتير، بس الوقت مسبقنيش خالص.'
      }
    },
    {
      id:'sara_volunteer', name:'سارة', role:'متطوعة قديمة، طلبت التحقيق', img: IMG_BASE_CHARITY + 'sara.jpg', avatarEmoji:'📊',
      accusable:false,
      alibi:'مش متهمة، هي اللي طلبت التحقيق أصلًا.',
      questions:[
        { q:'إيه اللي خلاكي تشكي في الأرقام؟',
          a:'"راجعت التبرعات المعلنة مقابل قوائم المرضى المتصرفلهم، ولقيت فجوة كبيرة جدًا مش منطقية خالص."' },
        { q:'مين بيتحكم في حسابات الجمعية فعليًا؟', unlockId:'account_access',
          a:'"هشام عنده صلاحية الاعتماد النهائي للتحويلات الكبيرة، والمحاسب بيسجلها بعد التنفيذ. المشكلة إن مفيش توقيع تاني إلزامي على التحويلات دي."' },
      ],
      confrontations:{
        account_access:'أنا متطوعة بس، مالوش صلاحية على الحساب أصلاً، عشان كده طلبت التحقيق.'
      }
    },
    {
      id:'mahmoud_accountant', name:'محمود', role:'محاسب الجمعية', img: IMG_BASE_CHARITY + 'mahmoud.jpg', avatarEmoji:'🧮',
      alibi:'قال إنه بس بيسجل حركة الفلوس حسب تعليمات هشام المباشرة.',
      loseMsg:'محمود كان بس بينفذ تعليمات هشام المباشرة في التسجيل المحاسبي، ومفيش أي دليل يوضح إنه كان له صلاحية قرار مستقلة أو استفاد شخصيًا من أي مبلغ.',
      questions:[
        { q:'مين اللي بيحدد أولوية صرف الفلوس على الحالات؟',
          a:'"هشام شخصيًا، أنا بس بسجل القرارات بعد ما تتاخد، مالياش أي صلاحية اختيار."' },
        { q:'لاحظت أي تحويل غريب في الحسابات؟', unlockId:'transfer_note',
          a:'(بيتردد) "في تحويل كبير لشركة خدمات طبية اسمها النور، بس ما لقيتش فواتير علاج أو أجهزة قدامه في ملفات الحالات. لما سألت، هشام قاللي ده حجز سيولة."' },
      ],
      confrontations:{
        transfer_note:'أنا سجلت التحويل زي ما اتقاللي، بس معنديش تفسير لغياب الفواتير.'
      }
    },
    {
      id:'laila_marketing', name:'ليلى', role:'مسؤولة التسويق والحملات الإعلانية للجمعية', img: IMG_BASE_CHARITY + 'laila.jpg', avatarEmoji:'📢',
      alibi:'قالت إن دورها بس تصميم المحتوى ونشر الحملات، مالهاش أي علاقة بالحسابات.',
      loseMsg:'ليلى كانت مسؤولة عن التسويق بس، ومفيش أي صلاحية مالية أو وصول للحسابات البنكية للجمعية. اتهامها هيكون ظلم إضافي من غير أي دليل حقيقي.',
      questions:[
        { q:'إنتِ عارفة إن فيه تأخير في صرف بعض الحالات؟',
          a:'"سمعت شكاوى من بعيد، بس مش شغلي، أنا بس مسؤولة عن الحملات والمحتوى الإعلاني."' },
        { q:'الأرقام اللي بتنشريها في الحملات دقيقة؟',
          a:'"بننشر الأرقام اللي بتوصلنا من الإدارة المالية مباشرة، مش من عندي، أنا بس بصممها بشكل جذاب."' },
      ]
    },
  ],

  evidence: [
    { id:'donation_totals', tag:'من إعلانات الحملة', crit:true, title:'إجمالي التبرعات المعلن', img: IMG_BASE_CHARITY + 'charity-totals.jpg',
      short:'8 ملايين جنيه معلنة رسميًا خلال الحملة',
      full:'الحملة أعلنت رسميًا عن جمع 8 ملايين جنيه من المتبرعين خلال أسابيع قليلة بس.',
      unlocked:true, order:1 },

    { id:'priority_excuse', tag:'من استجواب هشام', crit:false, title:'تبرير هشام لترتيب الأولويات', img:null,
      short:'ادعى إن التوزيع حسب شدة الحالة مش ترتيب التبرع',
      full:'هشام برر التأخير بترتيب أولويات طبي، من غير ما يقدم دليل واضح على وجود حالات أصعب فعليًا.',
      unlocked:false, order:2 },

    { id:'spending_list', tag:'من سجلات الجمعية', crit:true, title:'قائمة الصرف الفعلية', img: IMG_BASE_CHARITY + 'charity-spending.jpg',
      short:'مبلغ الصرف الفعلي أقل بكتير من إجمالي التبرعات',
      full:'قائمة الصرف الفعلية على المرضى بتوضح إن المبلغ المصروف فعليًا أقل بكتير من إجمالي التبرعات المعلنة، بفارق كبير مش مبرر.',
      unlocked:false, order:3 },

    { id:'account_access', tag:'من استجواب سارة', crit:false, title:'صلاحية هشام الكاملة على الحساب', img:null,
      short:'هشام عنده صلاحية الاعتماد النهائي على التحويلات الكبيرة',
      full:'سارة أكدت إن هشام يقدر يعتمد التحويلات الكبيرة من الحساب الرئيسي من غير توقيع ثانٍ إلزامي، وده يخليه صاحب القرار النهائي في مسار المبالغ الكبيرة.',
      unlocked:false, order:4 },

    { id:'transfer_note', tag:'من استجواب محمود', crit:true, title:'تحويل غير معتاد لحساب خارج القائمة', img:null,
      short:'تحويل كبير لشركة خدمات طبية من غير فواتير مقابلة',
      full:'محمود لاحظ تحويل مالي كبير لشركة اسمها النور للخدمات الطبية، لكن ملفات الجمعية ما فيهاش فواتير علاج أو أجهزة تبرر المبلغ. هشام وصف التحويل بأنه حجز سيولة مؤقت.',
      unlocked:false, order:5 },

    { id:'personal_account_link', tag:'من تحليل مالي', crit:true, title:'شركة التحويل مرتبطة بهشام من ورا الجمعية', img: IMG_BASE_CHARITY + 'charity-transfer.jpg',
      short:'الشركة المستلمة يديرها قريب لهشام وهو مفوض بالتوقيع فيها',
      full:'مراجعة السجل التجاري وكشوف التحويل بتوضح إن شركة النور مملوكة لقريب لهشام، وإن هشام نفسه مفوض بالتوقيع على حسابها. مفيش عقود توريد حقيقية تبرر المبلغ اللي خرج من الجمعية.',
      unlocked:false, order:6 },

    { id:'contradiction_noted_charity', tag:'من تحليل التناقضات', crit:true, title:'تناقض في تبرير هشام لمسار الفلوس', img:null,
      short:'قال إن الفلوس للحالات والعلاج، لكن مبلغ كبير راح لشركة مرتبطة بيه من غير فواتير',
      full:'هشام برر التأخير بأولويات طبية وحجز أسعار علاج، لكن التحويل الكبير راح لشركة مرتبطة بيه من غير عقود أو فواتير مقابلة. كلامه عن مسار الفلوس مش متوافق مع المستندات.',
      unlocked:false, order:7 },
  ],

  contradictionPuzzle: {
    enabled: true,
    tabLabel: 'تناقضات',
    introText: 'قارن الأقوال دي كويس. اتنين منها بيتعارضوا مع بعض بشكل واضح.',
    resultText: 'التناقض واضح: هشام قال إن المبلغ راح لخدمة الحالات وحجز العلاج، لكن الفلوس وصلت لشركة مرتبطة بيه من غير عقد أو فاتورة تبررها.',
    resultEvidenceIds: ['contradiction_noted_charity'],
    statements: [
      { id:'st1', text:'"الفلوس مش بتتوزع بالترتيب، بتتوزع حسب شدة الحالة."', source:'هشام — في الاستجواب' },
      { id:'st2', text:'التحويل الكبير راح لشركة مرتبطة بهشام، ومفيش عقد أو فواتير علاج مقابلة.', source:'دليل: التحليل المالي والسجل التجاري' },
      { id:'st3', text:'"أنا بس بسجل القرارات بعد ما تتاخد، مالياش أي صلاحية اختيار."', source:'محمود — في الاستجواب' },
      { id:'st4', text:'"بننشر الأرقام اللي بتوصلنا من الإدارة المالية مباشرة."', source:'ليلى — في الاستجواب' },
    ],
    correctPair: ['st1','st2'],
  },

  audioPuzzle: { enabled:false },
  cameraPuzzle: { enabled:false },
  codeLockPuzzle: { enabled:false },
  matchPuzzle: { enabled:false },

  timelinePuzzle: {
    enabled: true,
    tabLabel: 'خط الأحداث',
    introText: 'رتب أحداث القضية بالترتيب الصح، من إطلاق الحملة لحد اكتشاف التحويل المشبوه.',
    events: [
      { id:'e1', text:'الجمعية بتطلق حملة التبرعات وتجمع 8 ملايين جنيه خلال أسابيع.' },
      { id:'e2', text:'عيلة الطفل المريض بتشتكي من تأخير غير مبرر في تحويل مبلغ العلاج.' },
      { id:'e3', text:'محمود بيلاحظ تحويل مالي كبير لشركة خدمات طبية من غير فواتير مقابلة.' },
      { id:'e4', text:'سارة بتراجع الأرقام المعلنة مقابل قائمة الصرف الفعلية وتلاقي فجوة كبيرة.' },
      { id:'e5', text:'مراجعة الشركة المستلمة تكشف إنها مرتبطة بهشام وإنه مفوض بالتوقيع على حسابها.' },
    ],
    correctOrder: ['e1','e2','e3','e4','e5'],
    resultText: 'رتبت الأحداث صح. الفجوة ماكانتش مجرد تأخير إداري: مبلغ كبير خرج لشركة مرتبطة بهشام من غير مستندات خدمة حقيقية تبرره.',
    resultEvidenceIds: ['personal_account_link'],
  },

  evidenceCombinations: [
    { parts:['spending_list','transfer_note'], resultId:'contradiction_noted_charity' },
  ],

  correctSuspectId: 'hisham_founder',
  conclusiveEvidenceIds: ['spending_list', 'transfer_note', 'personal_account_link', 'contradiction_noted_charity'],
  conclusiveRequired: 4,

  theoryBuilder: {
    enabled: true,
    questions: [
      {
        id:'howidentified',
        label:'إزاي عرفت إن هشام هو المسؤول؟',
        options: [
          { id:'a', text:'صلاحية هشام في اعتماد التحويلات + شركة مرتبطة بيه استلمت مبلغ كبير + مفيش عقود أو فواتير تبرر التحويل' },
          { id:'b', text:'لأنه مؤسس الجمعية بس، وده تفسير سهل بس مايقفلش القضية من غير دليل يدعمه فعليًا' },
          { id:'c', text:'لأنه صمت لحظة قبل الإجابة، وده افتراض وارد بس محتاج دليل مادي يثبته مش مجرد كلام' },
        ],
        correctOptionId:'a',
      },
      {
        id:'whylaila',
        label:'ليه ليلى كانت بريئة فعليًا؟',
        options: [
          { id:'a', text:'دورها تسويقي بحت، ومفيش أي صلاحية مالية أو وصول للحسابات البنكية' },
          { id:'b', text:'لأنها بتصمم الحملات وده بيبعدها عن الشبهة' },
          { id:'c', text:'لأنها اعترفت بمكانها بس' },
        ],
        correctOptionId:'a',
      },
    ],
  },

  endings: {
    good: {
      stamp:'القضية اتقفلت', badgeLabel:'القضية اتقفلت — إدانة', title:'فلوس المرضى رجعت لمكانها الصح',
      paragraphs:[
        'هشام استغل صلاحية الاعتماد على التحويلات الكبيرة ووجّه جزء من تبرعات الجمعية لشركة خدمات طبية مرتبطة بعيلته وهو نفسه مفوض بالتوقيع على حسابها، من غير عقود أو فواتير حقيقية تبرر المبلغ، بينما حالات علاج كانت مستنية الصرف.',
        'اللي فضحه كان ربط الشركة المستلمة بيه، وغياب أي مستندات توريد، والفجوة بين اللي اتجمع واللي اتصرف فعلًا. الحسابات اتجمدت للمراجعة، واتبدأت إجراءات لاسترداد المبالغ محل الشبهة وتوجيهها للحالات المستحقة، وهشام اتحال لتحقيق مالي رسمي.'
      ]
    },
    partial: {
      stamp:'جزئي', badgeLabel:'القضية اتقفلت — أدلة غير كافية', title:'الشك صح، الإثبات ناقص',
      paragraphs:[
        'التحقيق بيتجه صح ناحية هشام، بس الأدلة اللي جمعتها لسه مش كفاية تقفل القضية رسميًا قدام النيابة.',
      ],
      hint:'اجمع على الأقل 4 أدلة من: قائمة الصرف، التحويل المشبوه، والتحليل المالي، قبل ما تتهم.'
    },
    bad: {
      stamp:'لغز بلا حل', badgeLabel:'القضية اتقفلت — اتهام ظالم', title:'القضية اتقفلت غلط',
      paragraphs:[
        'اتهمت {wrongName}، والمسؤول الحقيقي فضل في منصبه من غير مساءلة، ومرضى محتاجين فضلوا من غير علاج. الأدلة كانت بتشاور بوضوح على اتجاه تاني من البداية.',
      ]
    }
  }
};

/* ============================================================
   ملاحظة: برومبتات الصور المقترحة لقضية "تبرعات في الهوا"

   الغلاف (cover.webp):
   "Photorealistic shot of a donation collection box on a desk next
   to a laptop showing a financial spreadsheet, soft office lighting,
   documentary photography style, no text, no watermark,
   photorealistic"

   المشهد ١ (charity-scene1.jpg):
   "Photorealistic shot of a small charity office with volunteers
   working on a social media campaign on laptops, warm lighting,
   photorealistic, no text, no watermark"

   المشهد ٢ (charity-scene2.jpg):
   "Photorealistic shot of a worried Egyptian family on a phone call
   in a modest living room, soft daylight, photorealistic, no text,
   no watermark"

   المشهد ٣ (charity-scene3.jpg):
   "Photorealistic close-up of a woman reviewing financial documents
   and spreadsheets at a desk, focused expression, soft indoor
   lighting, photorealistic, no text, no watermark"

   المشهد ٤ (charity-scene4.jpg):
   "Photorealistic shot of a small charity office meeting room with
   documents on the table, serious atmosphere, soft lighting,
   photorealistic, no text, no watermark"

   الشخصيات (برومبت مستقل لكل شخصية):

   هشام (hisham.jpg):
   "Photorealistic portrait of a middle-aged Egyptian male charity
   founder, formal shirt, warm but guarded expression, sitting in a
   modest charity office, soft office lighting, candid documentary
   photography style, no text, no watermark, photorealistic"

   سارة (sara.jpg):
   "Photorealistic portrait of a young Egyptian female volunteer,
   modest casual clothing, headscarf, earnest concerned expression,
   standing in a charity office, soft indoor lighting, candid
   documentary photography style, no text, no watermark,
   photorealistic"

   محمود (mahmoud.jpg):
   "Photorealistic portrait of a middle-aged Egyptian male
   accountant, formal shirt, glasses, cautious reserved expression,
   sitting at a desk with financial documents, office lighting,
   candid documentary photography style, no text, no watermark,
   photorealistic"

   ليلى (laila.jpg):
   "Photorealistic portrait of a young Egyptian female marketing
   professional, trendy modest professional attire, holding a phone,
   confident energetic expression, charity office lighting, candid
   documentary photography style, no text, no watermark,
   photorealistic"

   دليل إجمالي التبرعات (charity-totals.jpg):
   "Photorealistic close-up of a social media campaign dashboard
   showing a large donation total number, screen glow, no text, no
   watermark, photorealistic"

   دليل قائمة الصرف (charity-spending.jpg):
   "Photorealistic close-up of a printed financial spending list
   document on a desk, office lighting, no text, no watermark,
   photorealistic"

   دليل التحويل (charity-transfer.jpg):
   "Photorealistic close-up of a bank transfer statement on a computer
   screen, highlighted transaction row, dark mode UI, no text, no
   watermark, photorealistic"
   ============================================================ */

/* ============================================================
   وضع القصة التفاعلية (Story Mode) — 2026-08-31
   ============================================================ */
(() => {
  const c = CASE_CHARITY_FUNDS;
  c.storyMode = true;
  c.startScene = 'scene_campaign';

  c.scenes = {
    scene_campaign: {
      img: IMG_BASE_CHARITY + 'charity-scene1.jpg',
      label: 'الفصل الأول — الحملة',
      text: 'حملة تبرعات لجمعية "أمل" الخيرية بتنتشر بسرعة على السوشيال ميديا. فيديوهات لأطفال مرضى بالسرطان بتلمس قلوب الناس، والتبرعات بتتجمع بمعدل غير مسبوق — 8 ملايين جنيه في أسابيع قليلة بس.',
      inspects: [
        { label: '👀 افحص ردود فعل المتبرعين', detail: 'الناس فرحانة إنهم قدروا يساعدوا، التعليقات كلها دعوات وثقة كاملة في الجمعية.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_complaint' } ],
    },
    scene_complaint: {
      img: IMG_BASE_CHARITY + 'charity-scene2.jpg',
      label: 'الفصل الأول — الشكوى',
      text: 'بعد شهرين، عيلة طفل مريض بتتصل بالجمعية تسأل عن موعد تحويل مبلغ العلاج المتفق عليه. الرد اللي بتاخده عام ومماطل: "الموضوع تحت المراجعة، هنتواصل معاكم قريب." مفيش موعد واضح.',
      choices: [ { label:'التالي ←', next:'scene_sara_discovery' } ],
    },
    scene_sara_discovery: {
      img: IMG_BASE_CHARITY + 'charity-scene3.jpg',
      label: 'الفصل الأول — اكتشاف سارة',
      text: 'سارة، متطوعة قديمة في الجمعية بحكم خبرتها، بتراجع الأرقام المعلنة للتبرعات مقابل قوائم الحالات اللي اتصرف عليها فعليًا. الفجوة اللي بتلاقيها كبيرة أوي — أكبر بكتير من أي تفسير إداري بسيط.',
      inspects: [
        { label: '👀 اسألها عن حجم الفجوة بالظبط', detail: '"الأرقام المعلنة بتقول 8 مليون. قوائم الصرف الفعلية بتوضح أقل من نص المبلغ ده وصل للمرضى فعليًا."' },
      ],
      choices: [ { label:'التالي ←', next:'scene_request' } ],
    },
    scene_request: {
      img: IMG_BASE_CHARITY + 'charity-scene4.jpg',
      label: 'الفصل الأول — طلب التحقيق',
      text: 'سارة بتطلب منك تحقيق داخلي هادئ قبل ما توصل الشكوى للإعلام وتضر سمعة الجمعية والمرضى اللي محتاجينها فعلًا في المستقبل. "عايزة الحقيقة، مش فضيحة،" بتقولك بصوت جاد.',
      choices: [ { label:'التالي ←', next:'scene_decision1' } ],
    },

    scene_decision1: {
      img: IMG_BASE_CHARITY + 'charity-scene4.jpg',
      label: 'الفصل الثاني — قرار',
      text: 'عندك مدخلين: تراجع المستندات والسجلات المالية الأول قبل ما تقابل حد، أو تبدأ بمقابلة فريق الجمعية مباشرة وتسمع تفسيراتهم.',
      choices: [
        { label:'📊 راجع السجلات المالية الأول', next:'scene_documents_first', flag:'documents_first' },
        { label:'🗣️ قابل الفريق مباشرة', next:'scene_hisham_interview', flag:'team_first' },
      ],
    },
    scene_documents_first: {
      img: IMG_BASE_CHARITY + 'charity-totals.jpg',
      label: 'الفصل الثاني — السجلات',
      text: 'راجعت إعلانات الحملة الرسمية: 8 ملايين جنيه معلنة بوضوح. قارنتها بقوائم الصرف الفعلية على المرضى، ولقيت الفجوة اللي سارة كانت بتتكلم عنها بعينك.',
      inspects: [
        { label: '👀 دقق في تواريخ الصرف', detail: 'معظم عمليات الصرف الفعلية القليلة الموجودة كانت في الأسبوعين الأولين بس من الحملة، وبعدين شبه توقفت.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_hisham_interview' } ],
    },
    scene_hisham_interview: {
      img: IMG_BASE_CHARITY + 'hisham.jpg',
      label: 'الفصل الثاني — هشام',
      text: 'هشام، مؤسس ورئيس مجلس إدارة الجمعية، بيستقبلك بترحاب زايد شوية. لما تسأله عن تأخير تحويل مبلغ الطفل المريض، بيقولك: "في حالات تانية كانت أصعب واحتاجت الأولوية، الفلوس مش بتتوزع بالترتيب اللي الناس بتتبرع بيه، بتتوزع حسب شدة الحالة." بتطلب تشوف قائمة الحالات اللي اتصرفلها فعليًا، فبيوافق فورًا: "أكيد، القائمة موجودة عند المحاسب، مفيش أي حاجة نخبيها."',
      inspects: [
        { label: '👀 لاحظ ثقة هشام', detail: 'واثق أوي من نفسه، ومتعاون بشكل يبان مبالغ فيه شوية لموقف فيه شكوك حقيقية.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_mahmoud' } ],
    },
    scene_mahmoud: {
      img: IMG_BASE_CHARITY + 'mahmoud.jpg',
      label: 'الفصل الثاني — محمود',
      text: 'محمود، محاسب الجمعية، بيبان متوتر من أول ما تدخل عليه. بتسأله مين بيحدد أولوية الصرف، فبيقولك: "هشام شخصيًا، أنا بس بسجل القرارات بعد ما تتاخد، مالياش أي صلاحية اختيار." بتسأله لو لاحظ أي تحويل غريب، فبيتردد قبل ما يجاوب: "في تحويل كبير لشركة خدمات طبية اسمها النور، بس ما لقيتش فواتير علاج أو أجهزة قدامه في ملفات الحالات. لما سألت، هشام قاللي ده حجز سيولة."',
      choices: [ { label:'التالي ←', next:'scene_laila' } ],
    },
    scene_laila: {
      img: IMG_BASE_CHARITY + 'laila.jpg',
      label: 'الفصل الثاني — ليلى',
      text: 'ليلى، مسؤولة التسويق، بتقولك بصراحة إن دورها بس تصميم المحتوى ونشر الحملات: "بننشر الأرقام اللي بتوصلنا من الإدارة المالية مباشرة، مش من عندي، أنا بس بصممها بشكل جذاب." واضح إنها بعيدة تمامًا عن أي قرارات مالية.',
      choices: [ { label:'التالي ←', next:'scene_decision2' } ],
    },

    scene_decision2: {
      img: IMG_BASE_CHARITY + 'charity-transfer.jpg',
      label: 'الفصل الثالث — قرار',
      text: 'عندك دلوقتي: صلاحية هشام الكاملة على الحساب، وتحويل غريب لشركة "النور للخدمات الطبية" من غير فواتير. تقدر تحلل الشركة المستلمة رقميًا، تواجه هشام مباشرة بالتحويل، أو تتهم محمود فورًا لأنه اللي سجّل التحويل بإيده.',
      choices: [
        { label:'🔍 حلل شركة النور للخدمات الطبية', next:'scene_company_analysis', flag:'analyzed_company' },
        { label:'🎯 واجه هشام مباشرة بالتحويل', next:'scene_confront_hisham', flag:'confronted_hisham' },
        { label:'⚠️ اتهم محمود فورًا', next:'ending_bad', flag:'accused_mahmoud_early' },
      ],
    },
    scene_company_analysis: {
      img: IMG_BASE_CHARITY + 'charity-transfer.jpg',
      label: 'الفصل الثالث — تحليل الشركة',
      text: 'راجعت السجل التجاري لشركة النور للخدمات الطبية. الشركة مملوكة لقريب لهشام، وهشام نفسه مفوض بالتوقيع على حسابها البنكي. مفيش عقود توريد حقيقية تبرر حجم المبلغ اللي خرج من الجمعية.',
      inspects: [
        { label: '👀 دقق في تاريخ تأسيس الشركة', detail: 'الشركة اتأسست قبل شهرين بس من إطلاق الحملة — توقيت مريب جدًا.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_confront_hisham2' } ],
    },
    scene_confront_hisham: {
      img: IMG_BASE_CHARITY + 'hisham.jpg',
      label: 'الفصل الثالث — مواجهة مباشرة',
      text: 'واجهت هشام بالتحويل المريب. ابتسامته اختفت لحظة، بعدين رد بسرعة: "الشركة دي بتشتغل معانا من زمان، إن كان قريبي بيديرها فده صدفة مش تلاعب." كلامه دفاعي أكتر من اللازم لموقف "بريء".',
      choices: [ { label:'التالي ←', next:'scene_confront_hisham2' } ],
    },
    scene_confront_hisham2: {
      img: IMG_BASE_CHARITY + 'charity-spending.jpg',
      label: 'الفصل الثالث — الدليل الحاسم',
      text: 'واجهته بكل حاجة مع بعض: قائمة الصرف اللي بتوضح الفجوة الكبيرة، التحويل الغريب من محمود، وربط الشركة المستلمة بيه شخصيًا. سكت لحظة طويلة، بعدين قال بصوت واطي: "جزء من الفلوس اتحول لشركة خدمات طبية عشان نحجز أسعار أجهزة وعلاج مقدم. الموضوع إداري، مش اختلاس." كلامه مش متماسك مع غياب أي عقود حقيقية.',
      choices: [ { label:'التالي ←', next:'scene_decision3' } ],
    },

    scene_decision3: {
      img: IMG_BASE_CHARITY + 'charity-scene2.jpg',
      label: 'الفصل الرابع — قرار',
      text: 'قبل ما تقفل القضية رسميًا، تقدر ترجع لعيلة الطفل المريض وتطمنهم إن الفلوس هترجع، أو تكمل على طول لتسليم الملف كامل للجهات الرسمية من غير أي توقف.',
      choices: [
        { label:'❤️ ارجع لعيلة الطفل المريض الأول', next:'scene_family_followup', flag:'visited_family' },
        { label:'➡️ سلّم الملف رسميًا على طول', next:'scene_pre_final', flag:'skipped_family_visit' },
      ],
    },
    scene_family_followup: {
      img: IMG_BASE_CHARITY + 'charity-scene2.jpg',
      label: 'الفصل الرابع — رجوع للعيلة',
      text: 'رجعت لعيلة الطفل المريض وقولتلهم إنك لقيت مصدر التأخير، وإن الفلوس المستحقة هترجع للحالات المستحقة. الأم اتبكت من الراحة، "كنا خايفين نتخلى عن العلاج خالص،" قالتلك بصوت مكسور.',
      choices: [ { label:'التالي ←', next:'scene_pre_final' } ],
    },
    scene_pre_final: {
      img: IMG_BASE_CHARITY + 'hisham.jpg',
      label: 'الفصل الرابع — قبل الإغلاق',
      text: 'كل الأدلة جاهزة: صلاحية هشام الكاملة، التحويل المريب، ربط الشركة المستلمة بيه، والفجوة الواضحة بين المعلن والمصروف فعليًا. الطريقة اللي هتقفل بيها القضية دي هتفرق فعليًا في مصير فلوس المرضى.',
      choices: [ { label:'التالي ←', next:'scene_decision4' } ],
    },
    scene_decision4: {
      img: IMG_BASE_CHARITY + 'hisham.jpg',
      label: 'الفصل الرابع — القرار الأخير',
      text: 'قدامك 3 طرق تقفل بيهم القضية: تسلّم الملف للنيابة كواقعة اختلاس رسمية، تطلب من مجلس أمناء الجمعية يتدخل ويجمّد صلاحيات هشام داخليًا، أو تدّيله فرصة يرجع المبلغ بالكامل مقابل استقالته الفورية من غير ملاحقة جنائية.',
      choices: [
        { label:'⚖️ سلّمه للنيابة رسميًا', next:'ending_good_prosecution', flag:'full_prosecution' },
        { label:'🏛️ تدخل مجلس الأمناء الداخلي', next:'ending_good_board', flag:'board_intervention' },
        { label:'🕊️ فرصة رد الفلوس مقابل الاستقالة', next:'ending_good_resignation', flag:'gave_resignation_chance' },
      ],
    },

    ending_good_prosecution: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_CHARITY + 'charity-transfer.jpg',
      stamp: 'القضية اتقفلت', title: 'فلوس المرضى رجعت لمكانها الصح',
      paragraphs: [
        'سلّمت الملف كامل للنيابة: صلاحية هشام على التحويلات الكبيرة، الشركة المرتبطة بيه من غير عقود حقيقية، والفجوة الواضحة بين المعلن والمصروف فعليًا. هشام اتحال لتحقيق مالي رسمي في واقعة اختلاس.',
        'الحسابات اتجمدت للمراجعة، واتبدأت إجراءات استرداد المبالغ محل الشبهة وتوجيهها للحالات المستحقة. العدالة اتحققت بالطريق القانوني الكامل.',
      ],
    },
    ending_good_board: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_CHARITY + 'charity-scene4.jpg',
      stamp: 'القضية اتقفلت', title: 'إصلاح من الداخل',
      paragraphs: [
        'قررت تعرض القضية على مجلس أمناء الجمعية بدل التصعيد القانوني المباشر. المجلس جمّد صلاحيات هشام فورًا وعيّن لجنة مالية مستقلة تراجع كل التحويلات وتسترد المبلغ من شركة النور.',
        'الجمعية استمرت في خدمة المرضى من غير فضيحة إعلامية كانت ممكن تقلل ثقة المتبرعين المستقبليين، وهشام اتبعد عن أي دور مالي نهائيًا.',
      ],
    },
    ending_good_resignation: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_CHARITY + 'hisham.jpg',
      stamp: 'القضية اتقفلت', title: 'استقالة مقابل الحقيقة',
      paragraphs: [
        'دّيت هشام فرصة يرجع المبلغ بالكامل من ماله الخاص مقابل استقالته الفورية من غير ملاحقة جنائية. وافق على طول — واضح إنه كان خايف من فضيحة قانونية كاملة أكتر من ما هو نادم.',
        'الفلوس رجعت للحالات المستحقة بسرعة، والجمعية بدأت من جديد بإدارة نظيفة، لكن هشام نفسه ما واجهش أي مساءلة قانونية حقيقية عن اللي عمله.',
      ],
    },
    ending_bad: {
      isEnding: true, endingType: 'bad',
      img: IMG_BASE_CHARITY + 'mahmoud.jpg',
      stamp: 'لغز بلا حل', title: 'القضية اتقفلت غلط',
      paragraphs: [
        'اتهمت محمود بناءً على إنه اللي سجّل التحويل بإيده، من غير ما تتحقق من صلاحية هشام الفعلية أو ربط الشركة المستلمة بيه. محمود كان بس بينفذ تعليمات مباشرة، ومعندوش أي صلاحية قرار مستقلة.',
        'هشام، المسؤول الحقيقي، فضل في منصبه من غير مساءلة، ومرضى محتاجين فضلوا من غير علاج. الأدلة كانت بتشاور بوضوح على اتجاه تاني من البداية.',
      ],
    },
  };
})();
