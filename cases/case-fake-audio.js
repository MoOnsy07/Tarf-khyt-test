/* ============================================================
   بيانات قضية: التسجيل المفبرك
   قضية +18 — ابتزاز مالي لرجل أعمال بتسجيل صوتي مفبرك يوحي
   بعلاقة خارج الزواج. مفيش أي محتوى صريح، التركيز على كشف
   التزييف والوصول للمبتز الحقيقي.
   ============================================================ */

const IMG_BASE_FAKEAUDIO = 'https://raw.githubusercontent.com/MoOnsy07/Tarf-khyt/main/images/fake-audio/';

const CASE_FAKE_AUDIO = {
  id: 'fake-audio',
  title: 'التسجيل المفبرك',
  caseNo: 'CASE 013',
  subtitle: 'شركة مقاولات كبرى، القاهرة الجديدة',
  coverImg: IMG_BASE_FAKEAUDIO + 'cover.webp',
  difficulty: 'صعبة',
  estMinutes: 34,
  investigationPoints: 19,
  teaser: 'تسجيل صوتي مفبرك بيهدد رجل أعمال وبيوحي بعلاقة مالهاش وجود. المبتز عايز فلوس مقابل السكوت، وأنت لازم تكشف التزييف قبل ما يخرب بيت وسمعة.',

  isPremium: false,
  categories: ['corruption', 'scandal'],
  seriesId: null,
  seriesOrder: null,
  seriesTitle: null,

  contentWarning: 'القضية دي بتتعامل مع موضوع ابتزاز مرتبط بشبهة علاقة خارج الزواج، من غير أي محتوى صريح أو تفاصيل حساسة. التركيز بالكامل على كشف تزييف الأدلة والوصول للمبتز الحقيقي. لو الموضوع حساس بالنسبالك دلوقتي، تقدر تسيب القضية دي وترجع لها وقت تاني.',

  briefing: {
    heroImg: IMG_BASE_FAKEAUDIO + 'cover.webp',
    heroCaption: 'CASE 013 — رسالة على واتساب في 2 الفجر',
    text1: 'رجل الأعمال "ماجد حلمي"، صاحب شركة مقاولات كبرى، استلم رسالة صوتية مجهولة المصدر بيهدده فيها إن فيه تسجيل صوتي "يفضحه" هيتنشر لو ماحوّلش مبلغ كبير خلال 48 ساعة. التسجيل المرفق بيوحي بعلاقة خارج الزواج، رغم إن ماجد بينفي القصة كلها تمامًا.',
    text2: 'ماجد مش عايز يلجأ للشرطة رسميًا خوفًا من الفضيحة نفسها، حتى لو التسجيل مفبرك. طلب منك تحقق بهدوء تام، عشان تكشف مين المبتز الحقيقي، وهل التسجيل ده حقيقي فعلًا ولا مفبرك بالكامل.',
    meta: [
      { label:'الضحية', value:'ماجد حلمي — رجل أعمال' },
      { label:'التهديد', value:'رسالة ابتزاز مجهولة + تسجيل صوتي مشكوك فيه' },
      { label:'المهلة', value:'48 ساعة قبل النشر المزعوم' },
      { label:'طلب التحقيق', value:'ماجد حلمي شخصيًا، بسرية تامة' },
    ],
  },

  prologue: [
    {
      scene:'المشهد ١ — الرسالة',
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene1.jpg',
      text:'مكتب فخم في برج إداري، ماجد قاعد لوحده متأخر بالليل، وموبايله بيرن على رسالة صوتية من رقم مجهول ومهدد.'
    },
    {
      scene:'المشهد ٢ — التسجيل',
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene2.jpg',
      text:'ماجد بيسمع التسجيل المرفق بصوته هو بالظبط بيتكلم بشكل يوحي بعلاقة خارج الزواج. صوته فعلًا، بس هو متأكد إنه ماقالش الكلام ده أبدًا.'
    },
    {
      scene:'المشهد ٣ — الصدمة',
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene3.jpg',
      text:'ماجد بيقعد يسمع التسجيل كذا مرة، حاسس إن فيه حاجة غريبة في إيقاع الكلام، بس مش قادر يحدد إيه بالظبط.'
    },
    {
      scene:'المشهد ٤ — التحقيق السري',
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene4.jpg',
      text:'ماجد بيديك نسخة من التسجيل وقائمة صغيرة من الناس اللي ممكن يكونوا عندهم مصلحة يضروه بيها: شريك سابق، موظف مطرود، ومنافس تجاري قديم.'
    },
  ],

  suspects: [
    {
      id:'tamer_partner', name:'تامر', role:'شريك سابق لماجد، خرج من الشركة بخلاف مالي', img: IMG_BASE_FAKEAUDIO + 'tamer.jpg', avatarEmoji:'🏢',
      alibi:'قال إنه بعيد تمامًا عن أي حاجة تخص ماجد من وقت خروجه من الشركة.',
      questions:[
        { q:'ليه خرجت من الشراكة مع ماجد أصلًا؟', unlockId:'partnership_dispute',
          a:'"خلاف على تقييم حصتي وقت التصفية، حسيت إن ماجد ضغط عليّ آخد أقل من حقي الحقيقي بكتير."' },
        { q:'عندك أي تسجيلات صوتية قديمة لماجد؟',
          a:'"من أيام الشراكة، أيوه، كان في اجتماعات كتير متسجلة رسميًا للأرشيف، زي أي شركة كبيرة."' },
        { q:'حد قدر يوصل للأرشيف الصوتي ده غيرك؟', unlockId:'archive_access',
          a:'"أي حد من الإدارة القديمة كان عنده وصول، مش أنا بس، ده أرشيف مشترك."' },
      ],
      confrontations:{
        partnership_dispute:'الخلاف ده قديم وانتهى بالتسوية، مالوش علاقة بالتسجيل ده.',
        archive_access:'الأرشيف ده كل الشركة كانت توصله، مش أنا بس.'
      }
    },
    {
      id:'hoda_hr', name:'هدى', role:'موظفة موارد بشرية سابقة، اتفصلت من الشركة من كذا شهر', img: IMG_BASE_FAKEAUDIO + 'hoda.jpg', avatarEmoji:'📁',
      alibi:'قالت إنها بتدور على شغل جديد ومالهاش وقت لأي حاجة زي كده.',
      loseMsg:'هدى كانت فعلًا زعلانة من فصلها، بس مفيش أي دليل تقني يربطها بتفبرك التسجيل أو بمعرفة تقنية كافية تخليها قادرة تعمل تعديل صوتي متقن بالشكل ده.',
      questions:[
        { q:'ليه اتفصلتي من الشركة؟',
          a:'"قرار تقليص إداري حسب ماجد، بس أنا حاسة إنه كان انتقام شخصي بسبب خلاف بسيط بينا."' },
        { q:'عندك أي خلفية تقنية في تعديل الصوت؟',
          a:'"لأ خالص، أنا موارد بشرية، معنديش أي خبرة تقنية في الموضوع ده."' },
      ]
    },
    {
      id:'karim_rival', name:'كريم', role:'منافس تجاري قديم، خسر مناقصة كبيرة لصالح ماجد', img: IMG_BASE_FAKEAUDIO + 'karim.jpg', avatarEmoji:'🎙️',
      alibi:'قال إنه مشغول بمشاريعه الخاصة ومالوش وقت يفكر في ماجد أصلًا.',
      questions:[
        { q:'إيه علاقتك بماجد؟', unlockId:'lost_tender',
          a:'"خسرت مناقصة كبيرة جدًا لصالحه من سنتين، خسارة أثرت على شركتي بشكل حقيقي وقتها."' },
        { q:'عندك خبرة في مونتاج أو تعديل الصوت؟', unlockId:'audio_skill',
          a:'"شغلت استوديو إنتاج إعلاني زمان قبل ما أدخل المقاولات، فأيوه، عندي خلفية تقنية في المونتاج الصوتي."' },
        { q:'حمّلت أو استخدمت أي مقطع صوتي لماجد في الفترة الأخيرة؟', requires:['archive_access','audio_skill'],
          a:'(بيتردد) "لأ. ماحمّلتش ولا استخدمت أي تسجيل ليه، ومليش علاقة بالملف اللي اتبعت."' },
        { q:'الملف اللي اتبعت للابتزاز اترفع الأول من حساب سحابي تابع لاستوديوك القديم، والتحليل لقى جملة مأخوذة من فيديو رسمي لماجد — تفسر ده إزاي؟', requires:['audio_skill','lost_tender','audio_splice_found','upload_account_link'], closesInterrogation:true,
          a:'(بيسكت شوية) "أيوه... أخدت مقاطع من فيديوهات رسمية وركبتها عشان التسجيل يبان حقيقي. كنت عايز أضغط عليه يدفع جزء من اللي خسرته في المناقصة."' },
      ],
      confrontations:{
        archive_access:'أنا كنت زميل قديم بس، وصولي للأرشيف ده زي أي حد تاني.',
        lost_tender:'خسرت المناقصة دي بجدارة ماجد، مش حاقد عليه عشانها.',
        audio_skill:'الاستوديو ده قفلته من سنين، مالوش علاقة بأي حاجة دلوقتي.',
        audio_splice_found:'التطابق ده صدفة، مقاطع الاجتماعات بتتكرر كتير في الكلام العادي.',
        upload_account_link:'المساحة دي كانت مفتوحة لناس كتير قبل ما أقفل الاستوديو، مش بس أنا.',
        contradiction_noted_fakeaudio:'ممكن يكون حد استخدم حساب الاستوديو القديم من غير علمي خالص.'
      }
    },
  ],

  evidence: [
    { id:'original_recording', tag:'من التسجيل المرسل', crit:true, title:'التسجيل المهدد به', img:null, unlocksAudio:true,
      short:'تسجيل بصوت ماجد بيوحي باعتراف، بس فيه غرابة في الإيقاع',
      full:'التسجيل المرسل بصوت ماجد فعلًا، لكن فيه اختلافات ملحوظة في ضوضاء الخلفية ونبرة الصوت بين الجمل. دي قرينة قوية إن المقطع متجمع من تسجيلات مختلفة، لكنها لوحدها ما تحددش مين اللي ركبه.',
      unlocked:true, order:1 },

    { id:'partnership_dispute', tag:'من استجواب تامر', crit:false, title:'خلاف الشراكة القديم', img:null,
      short:'تامر خرج من الشركة بخلاف مالي حقيقي مع ماجد',
      full:'تامر اعترف بخلاف مالي حقيقي على تقييم حصته وقت خروجه من الشراكة، ده بيديله دافع محتمل.',
      unlocked:false, order:2 },

    { id:'archive_access', tag:'من استجواب تامر', crit:false, title:'أرشيف الاجتماعات الصوتي', img:null,
      short:'أرشيف قديم من التسجيلات الرسمية، وصول مش محصور',
      full:'أرشيف الاجتماعات الرسمية القديمة كان متاح لأكتر من شخص من الإدارة السابقة، مش تامر بس.',
      unlocked:false, order:3 },

    { id:'lost_tender', tag:'من استجواب كريم', crit:true, title:'خسارة كريم لمناقصة كبيرة', img:null,
      short:'كريم خسر مناقصة ضخمة لصالح ماجد من سنتين',
      full:'كريم أكد خسارته لمناقصة كبيرة جدًا لصالح ماجد، خسارة أثرت بشكل حقيقي على وضع شركته المالي.',
      unlocked:false, order:4 },

    { id:'audio_skill', tag:'من استجواب كريم', crit:true, title:'خبرة كريم التقنية في مونتاج الصوت', img:null,
      short:'كريم كان صاحب استوديو إنتاج إعلاني قديم',
      full:'كريم اعترف بخلفية تقنية حقيقية في مونتاج الصوت، من أيام امتلاكه لاستوديو إنتاج إعلاني قبل دخوله مجال المقاولات.',
      unlocked:false, order:5 },

    { id:'audio_splice_found', tag:'من التحليل الصوتي', crit:true, title:'مقطع مكرر ومركّب داخل التسجيل', img: IMG_BASE_FAKEAUDIO + 'fakeaudio-wave.jpg',
      short:'جزء من التسجيل مطابق تمامًا لمقطع من فيديو رسمي قديم منتشر',
      full:'التحليل الصوتي بيثبت إن جزء من التسجيل مطابق لمقطع من فيديو رسمي قديم منشور على قناة الشركة، وبيكشف نقاط قص ولصق بين الجمل. ده يثبت إن التسجيل مركب، لكن لسه محتاج رابط رقمي بالمبتز نفسه.',
      unlocked:false, order:6 },

    { id:'upload_account_link', tag:'من مسار الملف الرقمي', crit:true, title:'حساب رفع الملف مرتبط باستوديو كريم القديم', img:null,
      short:'النسخة الأصلية للملف اترفعت من مساحة سحابية مرتبطة باستوديو كريم القديم',
      full:'فحص رابط الملف قبل إرساله على واتساب بيكشف إن النسخة اترفعت من مساحة سحابية مرتبطة ببريد مهني كان مستخدم في استوديو كريم القديم، وحساب الاسترداد لسه مربوط برقم تابع لشركته.',
      unlocked:false, order:7 },

    { id:'contradiction_noted_fakeaudio', tag:'من تحليل التناقضات', crit:true, title:'تناقض في كلام كريم عن علاقته بالتسجيلات', img:null,
      short:'أنكر استخدام أي مقطع لماجد، لكن مسار رفع الملف بيرجع لحساب تابع لاستوديوه القديم',
      full:'كريم أنكر إنه حمّل أو استخدم أي تسجيل لماجد، لكن النسخة اللي اتبعت في الابتزاز كانت مرفوعة قبل الإرسال على مساحة سحابية مرتبطة ببريد استوديو كريم القديم. مع تطابق المقطع المنشور وخبرته في المونتاج، إنكاره بقى متناقض مع الدليل الرقمي.',
      unlocked:false, order:8 },
  ],

  contradictionPuzzle: {
    enabled: true,
    tabLabel: 'تناقضات',
    introText: 'قارن إنكار كريم بمسار الملف الرقمي. فيه تصريح مش راكب مع الدليل.',
    resultText: 'التناقض واضح: كريم أنكر إنه استخدم أي تسجيل لماجد، لكن ملف الابتزاز اتربط بحساب سحابي تابع لاستوديوه القديم، والتحليل أثبت إنه مركب من مقاطع منشورة.',
    resultEvidenceIds: ['contradiction_noted_fakeaudio'],
    statements: [
      { id:'st1', text:'"ماحمّلتش ولا استخدمت أي تسجيل ليه، ومليش علاقة بالملف اللي اتبعت."', source:'كريم — في الاستجواب' },
      { id:'st2', text:'الملف اتربط بحساب سحابي تابع لاستوديو كريم القديم، وداخله مقطع مأخوذ من فيديو رسمي لماجد.', source:'دليل: مسار الرفع والتحليل الصوتي' },
      { id:'st3', text:'"خلاف على تقييم حصتي وقت التصفية."', source:'تامر — في الاستجواب' },
      { id:'st4', text:'"قرار تقليص إداري حسب ماجد."', source:'هدى — في الاستجواب' },
    ],
    correctPair: ['st1','st2'],
  },

  audioPuzzle: {
    enabled: true,
    tabLabel: 'تحليل صوتي',
    introText: 'شغّل التسجيل وحلل الموجة الصوتية. دور على الجزء اللي نمط الضوضاء والقص فيه بيتطابق مع مقطع منشور قديم — ده اللي هيثبت إن الكلام متجمع من مصادر مختلفة.',
    duplicateSourceRange: [10, 28],
    duplicateTargetRange: [55, 73],
    matchStart: 55,
    matchEnd: 73,
    resultText: 'وصلت للمقطع الصح. الجزء ده مطابق لمصدر منشور قديم، ومع نقاط القص بين الجمل بقى واضح إن التسجيل مش محادثة واحدة حقيقية.',
    resultEvidenceIds: ['audio_splice_found'],
  },

  cameraPuzzle: { enabled:false },
  timelinePuzzle: { enabled:false },
  codeLockPuzzle: { enabled:false },
  matchPuzzle: { enabled:false },

  evidenceCombinations: [
    { parts:['audio_splice_found','audio_skill'], resultId:'upload_account_link' },
    { parts:['audio_splice_found','upload_account_link'], resultId:'contradiction_noted_fakeaudio' },
  ],

  correctSuspectId: 'karim_rival',
  conclusiveEvidenceIds: ['lost_tender', 'audio_skill', 'audio_splice_found', 'upload_account_link', 'contradiction_noted_fakeaudio'],
  conclusiveRequired: 3,

  theoryBuilder: {
    enabled: true,
    questions: [
      {
        id:'howidentified',
        label:'إزاي عرفت إن كريم هو المبتز؟',
        options: [
          { id:'a', text:'دافعه من خسارة المناقصة + خبرته في المونتاج + إثبات تركيب الصوت + ربط ملف الابتزاز بحساب استوديوه القديم' },
          { id:'b', text:'لأنه منافس تجاري قديم بس، وده تفسير سهل بس مايقفلش القضية من غير دليل يدعمه فعليًا' },
          { id:'c', text:'لأنه رفض يتكلم في الأول، وده افتراض وارد بس محتاج دليل مادي يثبته مش مجرد كلام' },
        ],
        correctOptionId:'a',
      },
      {
        id:'authenticity',
        label:'التسجيل نفسه كان إيه بالظبط؟',
        options: [
          { id:'a', text:'مركّب من مقاطع حقيقية بصوت ماجد، لكن من سياقات مختلفة تمامًا، ومرتب ليوحي باعتراف مالوش أساس' },
          { id:'b', text:'تسجيل حقيقي 100% بدون أي تعديل، بس ده لوحده مايكفيش كدليل قاطع من غير حاجة تانية تأكده' },
          { id:'c', text:'صوت مصطنع بالكامل من برنامج ذكاء اصطناعي، ومع كده مفيش أي دليل مادي أو شهادة مباشرة بتربط الكلام ده بلحظة الجريمة نفسها' },
        ],
        correctOptionId:'a',
      },
    ],
  },

  endings: {
    good: {
      stamp:'القضية اتقفلت', badgeLabel:'القضية اتقفلت — إدانة', title:'الحقيقة في الموجة الصوتية',
      paragraphs:[
        'صح! كريم كان لسه محتقن من خسارة المناقصة الكبيرة، واستغل خبرته القديمة في مونتاج الصوت عشان يركّب تسجيل مزيف من مقاطع حقيقية لماجد أخدها من اجتماعات رسمية منشورة، ورتبها بشكل يوحي باعتراف مالوش أي أساس حقيقي.',
        'التحليل الصوتي أثبت إن التسجيل مركب، لكن الدليل اللي ربطه بكريم فعلًا كان مسار رفع الملف للحساب السحابي الخاص باستوديوه القديم، مع دافعه وخبرته التقنية. ماجد قدر يثبت إن التسجيل مفبرك، وكريم اتحال للتحقيق في واقعة الابتزاز والتلاعب بالدليل الصوتي.'
      ]
    },
    partial: {
      stamp:'جزئي', badgeLabel:'القضية اتقفلت — أدلة غير كافية', title:'الشك صح، الإثبات ناقص',
      paragraphs:[
        'التحقيق بيتجه صح ناحية كريم، بس الأدلة اللي جمعتها لسه مش كفاية تقفل القضية رسميًا قدام النيابة.',
      ],
      hint:'اجمع على الأقل 4 أدلة من: خسارة المناقصة، الخبرة التقنية، والتحليل الصوتي، قبل ما تتهم.'
    },
    bad: {
      stamp:'لغز بلا حل', badgeLabel:'القضية اتقفلت — اتهام ظالم', title:'القضية اتقفلت غلط',
      paragraphs:[
        'اتهمت {wrongName}، والمبتز الحقيقي فضل طليق ومستعد يهدد تاني. الأدلة كانت بتشاور بوضوح على اتجاه تاني من البداية.',
      ]
    }
  }
};

/* ============================================================
   ملاحظة: برومبتات الصور المقترحة لقضية "التسجيل المفبرك"

   الغلاف (cover.webp):
   "Photorealistic shot of a smartphone showing an audio waveform
   playback screen on a dark office desk at night, moody blue
   lighting, documentary photography style, no text, no watermark,
   photorealistic"

   المشهد ١ (fakeaudio-scene1.jpg):
   "Photorealistic shot of a well-dressed Egyptian businessman alone
   in a modern high-rise office at night, phone in hand, city lights
   through windows, moody lighting, photorealistic, no text, no
   watermark"

   المشهد ٢ (fakeaudio-scene2.jpg):
   "Photorealistic close-up of a smartphone screen playing an audio
   message, held by a tense hand, dim lighting, photorealistic, no
   text, no watermark"

   المشهد ٣ (fakeaudio-scene3.jpg):
   "Photorealistic shot of a worried businessman sitting at his desk
   with headphones on, replaying something on his laptop, dim office
   lighting, photorealistic, no text, no watermark"

   المشهد ٤ (fakeaudio-scene4.jpg):
   "Photorealistic shot of a private office meeting, two men talking
   quietly across a desk, documents and a phone between them, warm
   lamp lighting, photorealistic, no text, no watermark"

   الشخصيات (برومبت مستقل لكل شخصية):

   تامر (tamer.jpg):
   "Photorealistic portrait of a middle-aged Egyptian male former
   business partner, formal suit, resentful guarded expression,
   sitting in a private office, warm lamp lighting, candid
   documentary photography style, no text, no watermark,
   photorealistic"

   هدى (hoda.jpg):
   "Photorealistic portrait of a professional Egyptian female former
   HR employee, formal business attire, headscarf, composed but
   tense expression, sitting in an office, professional lighting,
   candid documentary photography style, no text, no watermark,
   photorealistic"

   كريم (karim.jpg):
   "Photorealistic portrait of a middle-aged Egyptian male business
   rival, sharp formal suit, confident calculating expression,
   sitting in a corporate office, professional office lighting,
   candid documentary photography style, no text, no watermark,
   photorealistic"

   دليل الموجة الصوتية (fakeaudio-wave.jpg):
   "Photorealistic close-up of an audio waveform editing software
   interface on a computer screen, highlighted duplicate segment,
   dark mode UI, no text, no watermark, photorealistic"
   ============================================================ */

/* REVIEW PATCH 2026-08-19 */
(() => {
  const c = CASE_FAKE_AUDIO;
  const k = c.suspects.find(s => s.id === 'karim_rival');
  if (k) {
    const q = k.questions.find(q => q.closesInterrogation);
    if (q) {
      q.q = 'التحليل أثبت إن التسجيل مركب، والميتاداتا بتربط رفع الملف بحساب تابع لاستوديوك القديم. عندك تفسير قبل ما نوجّه اتهام؟';
      q.a = '(بيتوتر) "الحساب قديم وكان عليه أكتر من شخص، وكوني بعرف أمنتج صوت مش معناه إني عملت التسجيل. لو عندكم دليل مباشر هاتوه."';
    }
  }
  if (c.audioPuzzle) {
    c.audioPuzzle.resultText = 'التحليل أثبت إن التسجيل مركب من مقاطع منفصلة، والميتاداتا كشفت إن النسخة المرسلة اترفعت عبر حساب سحابي قديم مرتبط باستوديو كريم. ده خيط رقمي قوي، لكنه محتاج يتقارن بالدافع والخبرة.';
    c.audioPuzzle.resultEvidenceIds = ['audio_splice_found','upload_account_link'];
  }
  c.evidenceCombinations = [
    { parts:['audio_splice_found','upload_account_link'], resultId:'contradiction_noted_fakeaudio' }
  ];
  c.conclusiveRequired = 4;
})();

/* ============================================================
   وضع القصة التفاعلية (Story Mode) — 2026-08-31
   23 مشهد، 4 قرارات حقيقية، 4 خواتيم متمايزة.
   ============================================================ */
(() => {
  const c = CASE_FAKE_AUDIO;
  c.storyMode = true;
  c.startScene = 'scene_message';

  c.scenes = {
    scene_message: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene1.jpg',
      label: 'الفصل الأول — الرسالة',
      text: 'الساعة اتنين بالليل. ماجد حلمي، صاحب شركة مقاولات كبرى، قاعد لوحده في مكتبه الفخم في برج إداري بالقاهرة الجديدة. موبايله بيرن فجأة على رسالة صوتية من رقم مجهول: "عندنا تسجيل هيفضحك. حوّل المبلغ خلال 48 ساعة، وإلا هينتشر في كل مكان."',
      inspects: [
        { label: '👀 افحص رد فعل ماجد', detail: 'وشه اتغيّر تمامًا. مش خايف من التهديد بس، خايف من احتمال إن حد يكون فعلاً عنده حاجة عليه.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_recording' } ],
    },
    scene_recording: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene2.jpg',
      label: 'الفصل الأول — التسجيل',
      text: 'الرسالة مرفق معاها ملف صوتي. ماجد بيشغله بإيد مرتجفة. صوته هو بالظبط بيتكلم بشكل يوحي بعلاقة خارج الزواج. الكلام مقنع، النبرة طبيعية، لكن ماجد متأكد تمامًا إنه ماقالش الجمل دي في حياته.',
      inspects: [
        { label: '👀 اسمع تاني بتركيز', detail: 'في لحظة معينة، صوت الخلفية بيتغير بشكل خفيف جدًا — كإن في قطعة اتلزقت بقطعة تانية.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_shock' } ],
    },
    scene_shock: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene3.jpg',
      label: 'الفصل الأول — الشك الأول',
      text: 'ماجد بيقعد يسمع التسجيل كذا مرة على التوالي. مش عايز يصدق إنه هو اللي قال الكلام ده، لكن الصوت مطابق تمامًا لصوته. حاسس إن فيه حاجة غريبة في إيقاع الكلام — وقفات مش طبيعية بين الجمل — بس مش قادر يحدد إيه بالظبط.',
      choices: [ { label:'التالي ←', next:'scene_briefing' } ],
    },
    scene_briefing: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene4.jpg',
      label: 'الفصل الأول — طلب التحقيق',
      text: 'ماجد مش عايز يلجأ للشرطة رسميًا خوفًا من الفضيحة نفسها، حتى لو التسجيل مفبرك. بيديك نسخة من الملف وقائمة صغيرة من الناس اللي ممكن يكونوا عندهم مصلحة يضروه بيها: تامر، شريكه السابق اللي خرج بخلاف مالي، هدى، موظفة اتفصلت من الشركة، وكريم، منافس تجاري قديم خسر مناقصة كبيرة لصالحه.',
      inspects: [
        { label: '👀 اسأله عن كل واحد فيهم', detail: '"تامر خرج بخناقة على تقييم حصته. هدى اتفصلت بقرار إداري. وكريم... خسر مناقصة كانت هتغير مستقبل شركته تمامًا."' },
      ],
      choices: [ { label:'التالي ←', next:'scene_decision1' } ],
    },

    scene_decision1: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene4.jpg',
      label: 'الفصل الثاني — قرار',
      text: 'قدامك تلات مشتبهين. تقدر تبدأ بتحليل التسجيل نفسه تقنيًا الأول قبل ما تقابل حد، أو تقابل المشتبهين على طول وتسمع رواياتهم.',
      choices: [
        { label:'🔬 حلل التسجيل تقنيًا الأول', next:'scene_audio_analysis', flag:'analysis_first' },
        { label:'🗣️ قابل المشتبهين على طول', next:'scene_interviews_start', flag:'interviews_first' },
      ],
    },
    scene_audio_analysis: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-wave.jpg',
      label: 'الفصل الثاني — تحليل الموجة الصوتية',
      text: 'حمّلت التسجيل على برنامج تحليل صوتي. الموجة بتوضح نقاط قص واضحة بين بعض الجمل، وضوضاء الخلفية بتختلف بشكل طفيف من جملة لتانية — دليل قوي إن الملف مش تسجيل واحد متصل.',
      inspects: [
        { label: '👀 دقق في نقاط القص', detail: 'في جزء معين، نمط الضوضاء مطابق تمامًا لمقطع من فيديو رسمي قديم منشور على قناة الشركة. يبان إن حد أخد كلام حقيقي وركّبه في سياق تاني.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_interviews_start' } ],
    },
    scene_interviews_start: {
      img: IMG_BASE_FAKEAUDIO + 'tamer.jpg',
      label: 'الفصل الثاني — تامر',
      text: 'تامر، الشريك السابق، بيستقبلك بحذر واضح. لما تسأله عن سبب خروجه من الشراكة، بيقولك: "خلاف على تقييم حصتي وقت التصفية، حسيت إن ماجد ضغط عليّ آخد أقل من حقي الحقيقي بكتير." بتسأله عن أي تسجيلات صوتية قديمة لماجد، فيقولك إن أرشيف الاجتماعات الرسمية كان متاح لأكتر من شخص من الإدارة القديمة، مش هو بس.',
      inspects: [
        { label: '👀 لاحظ نبرة تامر', detail: 'كلامه هادي ومتماسك، مفيش أي علامة توتر واضحة رغم موضوع الخلاف المالي القديم.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_hoda' } ],
    },
    scene_hoda: {
      img: IMG_BASE_FAKEAUDIO + 'hoda.jpg',
      label: 'الفصل الثاني — هدى',
      text: 'هدى، موظفة الموارد البشرية اللي اتفصلت من كذا شهر، بتقولك إن فصلها كان "قرار تقليص إداري حسب ماجد، بس أنا حاسة إنه كان انتقام شخصي بسبب خلاف بسيط بينا." بتسألها عن أي خلفية تقنية في تعديل الصوت، فبتنفي تمامًا: "أنا موارد بشرية، معنديش أي خبرة تقنية في الموضوع ده."',
      choices: [ { label:'التالي ←', next:'scene_karim_interview' } ],
    },
    scene_karim_interview: {
      img: IMG_BASE_FAKEAUDIO + 'karim-confident.jpg',
      label: 'الفصل الثاني — كريم',
      text: 'كريم بيستقبلك في مكتبه، واثق من نفسه. لما تسأله عن علاقته بماجد، بيقولك: "خسرت مناقصة كبيرة جدًا لصالحه من سنتين، خسارة أثرت على شركتي بشكل حقيقي وقتها." بتسأله عن خبرته في مونتاج الصوت، فبيتفاجئ شوية بس بيرد: "شغلت استوديو إنتاج إعلاني زمان قبل ما أدخل المقاولات، فأيوه، عندي خلفية تقنية في المونتاج الصوتي."',
      inspects: [
        { label: '👀 لاحظ رد فعله على سؤال الاستوديو', detail: 'لحظة تردد صغيرة قبل ما يجاوب، وكإنه ماكانش متوقع السؤال ده بالذات.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_decision2' } ],
    },

    scene_decision2: {
      img: IMG_BASE_FAKEAUDIO + 'karim-confident.jpg',
      label: 'الفصل الثالث — قرار',
      text: 'عندك دلوقتي: خسارة كريم لمناقصة كبيرة، وخبرته التقنية في مونتاج الصوت. تقدر تدور على رابط رقمي يربط ملف الابتزاز بيه، تواجهه مباشرة بالتناقض، أو تتهم تامر فورًا بناءً على خلافه المالي القديم مع ماجد.',
      choices: [
        { label:'🔗 دور على مصدر رفع الملف رقميًا', next:'scene_digital_trace', flag:'digital_trace' },
        { label:'🎯 واجه كريم مباشرة', next:'scene_confront_karim', flag:'confronted_karim' },
        { label:'⚠️ اتهم تامر فورًا بالخلاف المالي', next:'ending_bad', flag:'accused_tamer_early' },
      ],
    },
    scene_digital_trace: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-wave.jpg',
      label: 'الفصل الثالث — المسار الرقمي',
      text: 'تتبعت رابط الملف اللي اترسل على واتساب. النسخة الأصلية اترفعت من مساحة سحابية مرتبطة ببريد مهني قديم — بريد كان مستخدم في استوديو كريم زمان. حساب الاسترداد لسه مربوط برقم تابع لشركته الحالية.',
      inspects: [
        { label: '👀 تأكد من تاريخ الاستوديو', detail: 'الاستوديو ده قفل من سنين، لكن الحساب السحابي المرتبط بيه لسه شغال ومربوط بكريم شخصيًا.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_confront_karim2' } ],
    },
    scene_confront_karim: {
      img: IMG_BASE_FAKEAUDIO + 'karim-caught.jpg',
      label: 'الفصل الثالث — مواجهة مباشرة',
      text: 'واجهت كريم بالتناقض بين خبرته التقنية وموضوع التسجيل. اتلخبط شوية، لكن رد بسرعة: "لأ. ماحمّلتش ولا استخدمت أي تسجيل ليه، ومليش علاقة بالملف اللي اتبعت." كلامه سريع أكتر من اللازم.',
      choices: [ { label:'التالي ←', next:'scene_confront_karim2' } ],
    },
    scene_confront_karim2: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-wave.jpg',
      label: 'الفصل الثالث — الدليل الحاسم',
      text: 'واجهت كريم بكل حاجة مع بعض: الملف اترفع الأول من حساب سحابي تابع لاستوديوه القديم، والتحليل الصوتي لقى جملة مأخوذة حرفيًا من فيديو رسمي منشور لماجد. سكت لحظة طويلة، بعدين قال بصوت واطي: "أيوه... أخدت مقاطع من فيديوهات رسمية وركبتها عشان التسجيل يبان حقيقي. كنت عايز أضغط عليه يدفع جزء من اللي خسرته في المناقصة."',
      choices: [ { label:'التالي ←', next:'scene_decision3' } ],
    },

    scene_decision3: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene1.jpg',
      label: 'الفصل الرابع — قرار',
      text: 'كريم اعترف. قبل ما تقفل القضية رسميًا، تقدر ترجع لماجد وتوريه الدليل كامل بنفسك، أو تكمل على طول لتسليم الملف للنيابة من غير ما تقابله تاني.',
      choices: [
        { label:'🤝 ارجع لماجد وأوريه الحقيقة بنفسك', next:'scene_majid_followup', flag:'told_majid_personally' },
        { label:'➡️ سلّم الملف للنيابة على طول', next:'scene_pre_final', flag:'direct_to_prosecution' },
      ],
    },
    scene_majid_followup: {
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene3.jpg',
      label: 'الفصل الرابع — رجوع لماجد',
      text: 'رجعت لماجد وقولتله الحقيقة كاملة: كريم هو اللي فبرك التسجيل من غضبه على خسارة المناقصة. ماجد اتنفس الصعداء لأول مرة من ليلة الرسالة. "كنت خايف يكون فيه حاجة حقيقية وأنا ناسيها،" قالك بصوت مرتاح.',
      choices: [ { label:'التالي ←', next:'scene_pre_final' } ],
    },
    scene_pre_final: {
      img: IMG_BASE_FAKEAUDIO + 'karim-caught.jpg',
      label: 'الفصل الرابع — قبل الإغلاق',
      text: 'كل الأدلة جاهزة: دافع كريم، خبرته التقنية، إثبات التركيب الصوتي، والرابط الرقمي لاستوديوه القديم. الطريقة اللي هتقفل بيها القضية دي هتفرق في نتيجتها.',
      choices: [ { label:'التالي ←', next:'scene_decision4' } ],
    },
    scene_decision4: {
      img: IMG_BASE_FAKEAUDIO + 'karim-caught.jpg',
      label: 'الفصل الرابع — القرار الأخير',
      text: 'قدامك 3 طرق تقفل بيهم القضية: تسلّم الملف الكامل للنيابة رسميًا كواقعة ابتزاز وتلاعب بالدليل الصوتي، تقترح على ماجد تسوية خاصة تجنّب الفضيحة الإعلامية، أو تدّي كريم فرصة يرجع المبلغ المطلوب ويعتذر بدل الملاحقة الجنائية الكاملة.',
      choices: [
        { label:'⚖️ سلّمه للنيابة رسميًا', next:'ending_good_prosecution', flag:'full_prosecution' },
        { label:'🤐 تسوية خاصة بعيد عن الإعلام', next:'ending_good_settlement', flag:'private_settlement' },
        { label:'🕊️ فرصة اعتذار بدل الملاحقة', next:'ending_good_mercy', flag:'gave_mercy' },
      ],
    },

    ending_good_prosecution: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-wave.jpg',
      stamp: 'القضية اتقفلت', title: 'الحقيقة في الموجة الصوتية',
      paragraphs: [
        'سلّمت كل الأدلة للنيابة: دافع كريم من خسارة المناقصة، خبرته التقنية، إثبات تركيب التسجيل من مقاطع حقيقية، والرابط الرقمي الواضح لاستوديوه القديم. كريم اتحال رسميًا للتحقيق في واقعة ابتزاز وتلاعب بدليل صوتي.',
        'ماجد قدر يثبت براءته الكاملة من التسجيل المزيف، وكريم واجه العواقب القانونية الكاملة لخطته. العدالة اتحققت بالطريق الرسمي الكامل.',
      ],
    },
    ending_good_settlement: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_FAKEAUDIO + 'fakeaudio-scene4.jpg',
      stamp: 'القضية اتقفلت', title: 'تسوية بعيد عن الأضواء',
      paragraphs: [
        'اقترحت على ماجد تسوية خاصة: كريم يرجع أي مبلغ حاول يبتزه بيه ويوقع تعهد رسمي بعدم التكرار، مقابل تجنب فضيحة إعلامية كان ممكن تضر بيه هو شخصيًا كمان رغم براءته.',
        'ماجد وافق — عارف إن حتى الأبرياء بيتضروا من الإشاعات. القضية اتقفلت بهدوء، والحقيقة كاملة اتوثقت في ملف سري بعيد عن أي ضجة.',
      ],
    },
    ending_good_mercy: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_FAKEAUDIO + 'karim-confessing.jpg',
      stamp: 'القضية اتقفلت', title: 'فرصة تانية',
      paragraphs: [
        'قررت تدّي كريم فرصة يصلّح غلطته من غير ملاحقة جنائية كاملة — يعتذر لماجد بنفسه ويرجع أي مبلغ حاول ياخده. كريم قبل الفرصة بامتنان واضح، حاسس إنه اترمى في قرار مالوش رجعة بسبب غضبه من خسارة المناقصة.',
        'ماجد قبل الاعتذار على مضض، مش عن قناعة كاملة، لكن القضية اتقفلت من غير تصعيد قانوني كامل كان ممكن يدمر مستقبل كريم المهني بالكامل.',
      ],
    },
    ending_bad: {
      isEnding: true, endingType: 'bad',
      img: IMG_BASE_FAKEAUDIO + 'tamer.jpg',
      stamp: 'لغز بلا حل', title: 'القضية اتقفلت غلط',
      paragraphs: [
        'اتهمت تامر بناءً على خلافه المالي القديم مع ماجد بس، من غير ما تتحقق من خبرة كريم التقنية أو تحلل التسجيل نفسه. تامر كان بريء فعليًا — خلافه كان قديم واتسوى من زمان.',
        'كريم، المبتز الحقيقي، فضل طليق ومستعد يهدد تاني، وماجد فضل معلق من غير إجابة حقيقية عن مصدر التهديد ضده.',
      ],
    },
  };
})();
