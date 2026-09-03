/* ============================================================
   بيانات قضية: ورقة الامتحان
   قضية خفيفة — تسريب ورقة امتحان موحد للصف الثاني الثانوي،
   ولازم تلاقي مين سرّبها من غير ما يتظلم طلبة مالهمش ذنب.
   ============================================================ */

const IMG_BASE_EXAM = 'https://raw.githubusercontent.com/MoOnsy07/Tarf-khyt/main/images/exam-leak/';

const CASE_EXAM_LEAK = {
  id: 'exam-leak',
  title: 'ورقة الامتحان',
  caseNo: 'CASE 011',
  subtitle: 'إدارة تعليمية ومدرسة ثانوي، طنطا',
  coverImg: IMG_BASE_EXAM + 'cover.webp',
  difficulty: 'سهلة',
  estMinutes: 24,
  investigationPoints: 15,
  teaser: 'ورقة امتحان الثانوي اتسربت على جروب الطلبة قبل الامتحان بساعات. لازم تلاقي مين سرّبها من غير ما طلبة أبرياء يتظلموا بالغلط.',

  isPremium: false,
  categories: ['scandal', 'comedy'],
  seriesId: null,
  seriesOrder: null,
  seriesTitle: null,

  briefing: {
    heroImg: IMG_BASE_EXAM + 'cover.webp',
    heroCaption: 'CASE 011 — قبل امتحان الرياضيات الموحد بيوم واحد',
    text1: 'قبل امتحان الرياضيات الموحد للصف الثاني الثانوي على مستوى الإدارة التعليمية بيوم واحد، صور من نموذج الامتحان بدأت تنتشر على جروبات الطلبة. الناظرة بلغت لجنة الامتحانات، وفيه احتمال يتغير الامتحان كله لو مصدر التسريب ما اتحددش بسرعة.',
    text2: 'الشك وقع على أكتر من طرف: مدرس بيدي دروس خصوصية، طالب شاطر، وحتى موظف إدارة. الناظرة طلبت منك تحقق بسرعة قبل ما اللجنة تضطر تلغي النموذج وتعيد الامتحان على مئات الطلبة اللي مالهمش ذنب.',
    meta: [
      { label:'الحادثة', value:'تسريب صور من ورقة امتحان الرياضيات' },
      { label:'وقت التسريب', value:'مساء اليوم اللي قبل الامتحان' },
      { label:'طلب التحقيق', value:'ناظرة المدرسة' },
      { label:'الخطر', value:'إلغاء النموذج وإعادة الامتحان لطلبة الإدارة التعليمية' },
    ],
  },

  prologue: [
    {
      scene:'المشهد ١ — ليلة قبل الامتحان',
      img: IMG_BASE_EXAM + 'exam-scene1.jpg',
      text:'مجموعات واتساب مليانة طلبة قلقانين من امتحان الرياضيات بكرة، وفجأة صورة من ورقة الامتحان الرسمية بتظهر وسط الجروب وتنتشر زي النار في الهشيم.'
    },
    {
      scene:'المشهد ٢ — الاكتشاف',
      img: IMG_BASE_EXAM + 'exam-scene2.jpg',
      text:'مدرس بيلاحظ الصورة بالصدفة وبيبلغ الناظرة فورًا. الناظرة بتتصل بلجنة الامتحانات في نفس الليلة، والجو في المدرسة بيبقى متوتر جدًا.'
    },
    {
      scene:'المشهد ٣ — التحقيق العاجل',
      img: IMG_BASE_EXAM + 'exam-scene3.jpg',
      text:'الناظرة بتجمع كل اللي كان ليهم وصول لنسخة الامتحان قبل الطبع النهائي: أعضاء لجنة الإعداد، موظف الطباعة، والطالب اللي بدأ نشر الصورة.'
    },
    {
      scene:'المشهد ٤ — سباق مع الوقت',
      img: IMG_BASE_EXAM + 'exam-scene4.jpg',
      text:'قدامك ساعات معدودة قبل موعد الامتحان. لازم تحدد مصدر التسريب قبل ما اللجنة تضطر تبدّل النموذج وتأجل الاختبار على كل الطلبة.'
    },
  ],

  suspects: [
    {
      id:'ustaz_adel', name:'أستاذ عادل', role:'مدرس الرياضيات، بيدي دروس خصوصية برضه', img: IMG_BASE_EXAM + 'adel.jpg', avatarEmoji:'📐',
      alibi:'قال إنه كان في مركزه الخصوصي طول الليلة بيراجع مع مجموعة طلبة.',
      questions:[
        { q:'إنت من ضمن لجنة إعداد الامتحان، صح؟', unlockId:'committee_access',
          a:'"أيوه، أنا وواحد تاني من المدرسين اللي شاركنا في مراجعة الأسئلة قبل الطبع النهائي."' },
        { q:'حد من طلبة الدروس الخصوصية بتاعتك عنده وصول غريب للأسئلة؟',
          a:'"مستحيل، أنا بحافظ على سرية الأسئلة تمامًا، ده جزء أساسي من مصداقيتي المهنية."' },
        { q:'سيف من طلبة مركزك، صح؟ وإيه طبيعة تواصلك معاه بره مواعيد الحصة؟', requires:['forward_trace'],
          a:'"أيوه سيف عندي في المجموعة. التواصل المفروض يبقى في جروب المراجعة بس، وأنا ما بعتلوش أسئلة امتحان ولا طلبت منه ينشر حاجة."' },
      ],
      confrontations:{
        committee_access:'أنا عضو في اللجنة فعلاً، بس ده معناه إني مسؤول عن السرية مش إني سرّبت.',
        rivalry_note:'المنافسة دي شغل عادي بيني وبين نادية، مالهاش علاقة بالتسريب.',
        forward_trace:'سيف نشر الصورة، أنا معرفش هو جابها منين.',
        contradiction_noted_exam:'يمكن بعتلّه سؤال أو اتنين للمراجعة بس، مقصدتش أي تسريب.'
      }
    },
    {
      id:'sayed_admin', name:'سيد', role:'موظف إداري مسؤول عن طباعة الأوراق الرسمية', img: IMG_BASE_EXAM + 'sayed.jpg', avatarEmoji:'🖨️',
      alibi:'قال إنه كان بره المدرسة طول الليلة، مع عيلته في عزومة.',
      loseMsg:'سيد كان فعلًا بره المدرسة والشهود من العزومة أكدوا وجوده هناك طول الليلة. سجل دخوله لغرفة الطباعة كان في الصباح بس، قبل التسريب بساعات كتير، ومفيش أي دليل يربطه بالتسريب نفسه.',
      questions:[
        { q:'إنت المسؤول عن طباعة أوراق الامتحان، صح؟',
          a:'"أيوه، بس بطبع الأوراق الصبح بدري بحضور لجنة كاملة، مش لوحدي أبدًا."' },
        { q:'حد قدر يوصل للطابعة أو الأوراق بعد ما تطبع؟', unlockId:'printer_log',
          a:'"الأوراق بتتحط في خزنة مقفولة فورًا بعد الطبع، محدش المفروض يقدر يوصلها إلا لجنة الامتحانات نفسها."' },
      ],
      confrontations:{
        printer_log:'السجل واضح، مفيش دخول غير رسمي بعد الطبع، أنا مرتاح البال من الناحية دي.'
      }
    },
    {
      id:'seif', name:'سيف', role:'طالب شاطر في الصف، معروف بعلاقاته الواسعة', img: IMG_BASE_EXAM + 'seif.jpg', avatarEmoji:'📱',
      alibi:'قال إنه كان البيت بيذاكر طول الليلة زي أي طالب عادي.',
      questions:[
        { q:'إنت اللي وزّعت الصورة على الجروب، صح؟', unlockId:'forward_trace',
          a:'"لأ، أنا استقبلتها من حد تاني، ووزعتها بس عشان الناس تستعد صح، ماكنتش متخيل الموضوع هيتكبر كده."' },
        { q:'استلمت الصورة من مين بالظبط؟', requires:['forward_trace'],
          a:'"من رقم مش محفوظ عندي. الرسالة كانت قصيرة وبتقول: انشرها بسرعة قبل ما تتشال. بعدين عرفت إن الرقم بيتستخدم في مركز أستاذ عادل."' },
        { q:'سجل واتساب بيوضح إنك أول واحد وزّع الصورة على 5 جروبات مختلفة في نفس الدقيقة — ده مش شخص بس بيستقبل ويحفظ الصورة، ده تنسيق مسبق.', requires:['forward_trace','committee_access'], closesInterrogation:true,
          a:'(بيسكت شوية) "أستاذ عادل هو اللي طلب مني أنشرها. قاللي إن الامتحان هيتغير أصلًا وإنه مجرد مراجعة، وأنا صدقته. أنا غلطت لما وزعتها."' },
      ],
      confrontations:{
        committee_access:'أستاذ عادل عنده وصول للأسئلة، أنا بس طالب عادي.',
        forward_trace:'أيوه أنا وزّعتها على أصحابي، بس مش أنا اللي سرّبتها من الأساس.',
        adel_number:'الرقم ده... جالي من مركز أستاذ عادل فعلاً، هو اللي بعتهالي.',
        contradiction_noted_exam:'أستاذ عادل قال إنه ماعملش كده، بس أنا عارف الرقم ده بتاعه.'
      }
    },
    {
      id:'nadia_teacher', name:'أستاذة نادية', role:'مدرسة رياضيات تانية، منافسة مهنية لأستاذ عادل', img: IMG_BASE_EXAM + 'nadia.jpg', avatarEmoji:'📚',
      alibi:'قالت إنها كانت البيت بتصحح كراسات طول الليلة.',
      loseMsg:'أستاذة نادية معندهاش أي وصول لأوراق الامتحان أصلًا، لأنها مش من ضمن لجنة الإعداد هذه السنة. الخلاف المهني بينها وبين أستاذ عادل حقيقي، بس مالوش أي علاقة بالتسريب نفسه.',
      questions:[
        { q:'إنتِ وأستاذ عادل بينكم منافسة، صح؟', unlockId:'rivalry_note',
          a:'"أيوه، بصراحة، إحنا منافسين على نفس طلبة الدروس الخصوصية من سنين، بس ده منافسة شغل عادية، مش عداوة شخصية."' },
        { q:'كنتِ من ضمن لجنة إعداد الامتحان السنة دي؟',
          a:'"لأ، السنة دي أستاذ عادل بس اللي كان في اللجنة، أنا كنت في لجنة مادة تانية."' },
      ],
      confrontations:{
        rivalry_note:'المنافسة بيني وبين عادل شغل بس، ملهاش علاقة بموضوع الامتحان.'
      }
    },
  ],

  evidence: [
    { id:'leaked_photo', tag:'من جروب الطلبة', crit:true, title:'الصورة المسربة نفسها', img: IMG_BASE_EXAM + 'exam-photo.jpg',
      short:'صورة واضحة من ورقة الامتحان الرسمية قبل الموعد بيوم',
      full:'الصورة المسربة فيها كود مراجعة صغير في الهامش ظاهر في نسخة اللجنة قبل الطباعة النهائية، ومش موجود في النسخ اللي بتطلع للمدارس. ده معناه إن التسريب حصل من نسخة إعداد داخلية، مش من خزنة الورق بعد الطباعة.',
      unlocked:true, order:1 },

    { id:'committee_access', tag:'من استجواب أستاذ عادل', crit:false, title:'أستاذ عادل من ضمن لجنة الإعداد', img:null,
      short:'له وصول مباشر للأسئلة قبل الطبع النهائي',
      full:'أستاذ عادل أكد إنه من ضمن لجنة إعداد ومراجعة أسئلة الامتحان قبل الطبع، يعني له وصول مباشر ومبكر للأسئلة الحقيقية.',
      unlocked:false, order:2 },

    { id:'printer_log', tag:'من سجل الطباعة', crit:false, title:'سجل الطباعة وخزنة الأوراق', img:null,
      short:'مفيش أي دخول غير رسمي بعد الطبع الصباحي',
      full:'سجل الطباعة والخزنة ما فيهوش أي دخول غير مصرح بعد تجهيز النسخ، وكود المراجعة الظاهر في الصورة يخص نسخة اللجنة السابقة للطباعة. كده مسار التسريب بيتحصر في مرحلة الإعداد والمراجعة.',
      unlocked:false, order:3 },

    { id:'rivalry_note', tag:'من استجواب أستاذة نادية', crit:false, title:'منافسة مهنية قديمة', img:null,
      short:'منافسة شغل عادية على طلبة الدروس الخصوصية',
      full:'أستاذة نادية أكدت منافسة مهنية طويلة مع أستاذ عادل، لكن بدون أي دليل يربطها هي شخصيًا بالتسريب.',
      unlocked:false, order:4 },

    { id:'forward_trace', tag:'من سجل واتساب', crit:true, title:'تتبع أول توزيع للصورة', img: IMG_BASE_EXAM + 'exam-whatsapp.jpg',
      short:'سيف أول واحد وزّع الصورة على 5 جروبات مختلفة في نفس الدقيقة',
      full:'تحليل سجل واتساب بيوضح إن سيف كان أول شخص وزّع الصورة، وعملها على 5 جروبات مختلفة في نفس الدقيقة بالظبط — نمط توزيع منظم مش عشوائي.',
      unlocked:false, order:5 },

    { id:'adel_number', tag:'من تحليل الرقم المرسل', crit:true, title:'مصدر الرسالة اللي وصلت لسيف', img:null,
      short:'الرقم تابع لخط بيستخدمه مركز عادل والملف يطابق نسخة اللجنة الخاصة بيه',
      full:'الرقم اللي بعت الصورة لسيف مسجل باسم زوجة عادل وبيستخدمه المركز في التواصل مع الطلبة. والأهم إن معرّف ملف الصورة يطابق نسخة المراجعة اللي خرجت من جهاز اللجنة المخصص لعادل. الرقم لوحده ماكانش كفاية، لكن الاتنين مع بعض بيربطوا التسريب بيه.',
      unlocked:false, order:6 },

    { id:'contradiction_noted_exam', tag:'من تحليل التناقضات', crit:true, title:'تناقض في كلام أستاذ عادل عن السرية', img:null,
      short:'أنكر إرسال أي أسئلة لسيف، لكن الرقم ومعرّف الملف بيربطوا النسخة بيه',
      full:'عادل أنكر إنه بعت لسيف أي نسخة من الامتحان، لكن الرسالة خرجت من خط بيستخدمه مركزه، ومعرّف الصورة يطابق نسخة المراجعة المخصصة له داخل اللجنة. إنكاره مش راكب مع الدليل الرقمي.',
      unlocked:false, order:7 },
  ],

  contradictionPuzzle: {
    enabled: true,
    tabLabel: 'تناقضات',
    introText: 'قارن الأقوال دي كويس. اتنين منها بيتعارضوا مع بعض بشكل واضح.',
    resultText: 'التناقض واضح: عادل أنكر إنه بعت لسيف أي نسخة، لكن الرقم المستخدم في مركزه ومعرّف الملف بيربطوا الصورة بنسخة اللجنة الخاصة بيه.',
    resultEvidenceIds: ['contradiction_noted_exam'],
    statements: [
      { id:'st1', text:'"أنا ما بعتش لسيف أسئلة امتحان ولا طلبت منه ينشر حاجة."', source:'أستاذ عادل — في الاستجواب' },
      { id:'st2', text:'الرقم تابع لمركز عادل، ومعرّف الصورة يطابق نسخة المراجعة المخصصة له في اللجنة.', source:'دليل: تحليل الرسالة والملف' },
      { id:'st3', text:'"الأوراق بتتحط في خزنة مقفولة فورًا بعد الطبع."', source:'سيد — في الاستجواب' },
      { id:'st4', text:'"إحنا منافسين على نفس طلبة الدروس الخصوصية من سنين."', source:'أستاذة نادية — في الاستجواب' },
      { id:'st5', text:'"استقبلتها من حد تاني، ووزعتها عشان الناس تستعد صح."', source:'سيف — في الاستجواب' },
    ],
    correctPair: ['st1','st2'],
  },

  audioPuzzle: { enabled:false },
  cameraPuzzle: { enabled:false },
  timelinePuzzle: { enabled:false },
  codeLockPuzzle: { enabled:false },

  matchPuzzle: {
    enabled: true,
    tabLabel: 'الربط',
    introText: 'اربط كل شخص بالدور الحقيقي بتاعه في القضية بناءً على الأدلة اللي جمعتها.',
    leftItems: [
      { id:'l_adel', text:'أستاذ عادل' },
      { id:'l_sayed', text:'سيد' },
      { id:'l_seif', text:'سيف' },
      { id:'l_nadia', text:'أستاذة نادية' },
    ],
    rightItems: [
      { id:'r_source', text:'مصدر التسريب الأصلي' },
      { id:'r_innocent_admin', text:'موظف بريء، مالوش علاقة بالتسريب' },
      { id:'r_distributor', text:'أول شخص وزّع الصورة على نطاق واسع' },
      { id:'r_no_access', text:'ماكانش عندها وصول لنسخة الامتحان' },
    ],
    correctPairs: [
      ['l_adel','r_source'],
      ['l_sayed','r_innocent_admin'],
      ['l_seif','r_distributor'],
      ['l_nadia','r_no_access'],
    ],
    resultText: 'ربطت الأدوار صح: عادل هو مصدر النسخة، سيف ساعد في نشرها على نطاق واسع، وسيد ونادية مفيش دليل يربطهم بمصدر الملف.',
    resultEvidenceIds: ['adel_number'],
  },

  evidenceCombinations: [
    { parts:['forward_trace','committee_access'], resultId:'contradiction_noted_exam' },
  ],

  correctSuspectId: 'ustaz_adel',
  conclusiveEvidenceIds: ['committee_access', 'forward_trace', 'adel_number', 'contradiction_noted_exam'],
  conclusiveRequired: 3,

  theoryBuilder: {
    enabled: true,
    questions: [
      {
        id:'howidentified',
        label:'إزاي عرفت إن أستاذ عادل هو المصدر؟',
        options: [
          { id:'a', text:'وصوله لنسخة اللجنة + الرقم المستخدم في مركزه + معرّف الملف المطابق لنسخته + إنكاره إرسالها لسيف' },
          { id:'b', text:'لأنه مدرس رياضيات مشهور، بس ده لوحده مايكفيش كدليل قاطع من غير حاجة تانية تأكده' },
          { id:'c', text:'لأنه كان متوتر وقت السؤال، ومع كده مفيش أي دليل مادي أو شهادة مباشرة بتربط الكلام ده بلحظة الجريمة نفسها' },
        ],
        correctOptionId:'a',
      },
      {
        id:'whyseif',
        label:'إيه دور سيف الحقيقي في القضية؟',
        options: [
          { id:'a', text:'كان أول ناشر للصورة، بس هو مش المصدر الأصلي — استلمها من أستاذ عادل' },
          { id:'b', text:'هو المصدر الأساسي للتسريب، وده احتمال منطقي في الظاهر بس مش مبني على ربط حقيقي بين أكتر من دليل' },
          { id:'c', text:'مالوش أي علاقة بالموضوع خالص، رغم إن ده مجرد ملاحظة سطحية مش استنتاج مبني على أدلة متعددة متطابقة' },
        ],
        correctOptionId:'a',
      },
    ],
  },

  endings: {
    good: {
      stamp:'القضية اتقفلت', badgeLabel:'القضية اتقفلت — إدانة', title:'الامتحان اتأجل وقفلنا الملف صح',
      paragraphs:[
        'أستاذ عادل استغل وصوله لنسخة المراجعة في لجنة إعداد الامتحان وبعت صورة منها لسيف من خط بيستخدمه مركزه، وطلب منه ينشرها. هو حاول يصور اللي عمله كأنه مساعدة لطلبته، لكنه كان تسريب متعمد لامتحان موحد قبل موعده.',
        'بعد ما اتحدد مصدر التسريب، لجنة الامتحانات ألغت النموذج المسرب وفعّلت نموذج بديل بدل ما تعيد السنة أو تعاقب كل الطلبة. عادل اتحال للتحقيق الإداري، وسيف اتحاسب على نشر الصورة مع التفريق بين دوره كناشر وبين مصدر التسريب الأصلي.'
      ]
    },
    partial: {
      stamp:'جزئي', badgeLabel:'القضية اتقفلت — أدلة غير كافية', title:'الشك صح، الإثبات ناقص',
      paragraphs:[
        'التحقيق بيتجه صح ناحية أستاذ عادل، بس الأدلة اللي جمعتها لسه مش كفاية تحدد المسؤولية رسميًا قدام لجنة التحقيق.',
      ],
      hint:'اجمع على الأقل 4 أدلة من: وصوله للجنة، تتبع التوزيع، والرقم المرسل، قبل ما تتهم.'
    },
    bad: {
      stamp:'لغز بلا حل', badgeLabel:'القضية اتقفلت — اتهام ظالم', title:'القضية اتقفلت غلط',
      paragraphs:[
        'اتهمت {wrongName}، ومصدر التسريب الحقيقي فضل من غير تحديد، واضطرت اللجنة تلغي النموذج وتعيد ترتيب الامتحان لكل الطلبة.',
      ]
    }
  }
};

/* ============================================================
   ملاحظة: برومبتات الصور المقترحة لقضية "ورقة الامتحان"

   الغلاف (cover.webp):
   "Photorealistic shot of an exam paper photographed on a smartphone
   screen glowing in a dark room, WhatsApp interface visible, tense
   atmosphere, documentary photography style, no text, no watermark,
   photorealistic"

   المشهد ١ (exam-scene1.jpg):
   "Photorealistic shot of a teenage student's bedroom at night, phone
   screen glowing with a group chat, worried expression, soft warm
   lighting, photorealistic, no text, no watermark"

   المشهد ٢ (exam-scene2.jpg):
   "Photorealistic shot of a school principal's office at night,
   phone call in progress, stacks of exam papers on desk, dim
   lighting, photorealistic, no text, no watermark"

   المشهد ٣ (exam-scene3.jpg):
   "Photorealistic shot of a small group of Egyptian teachers and
   staff gathered in a school office, serious expressions, fluorescent
   lighting, photorealistic, no text, no watermark"

   المشهد ٤ (exam-scene4.jpg):
   "Photorealistic shot of an empty school hallway early morning,
   sunlight streaming through windows, quiet tense atmosphere,
   photorealistic, no text, no watermark"

   الشخصيات (برومبت مستقل لكل شخصية):

   أستاذ عادل (adel.jpg):
   "Photorealistic portrait of a middle-aged Egyptian male math
   teacher, formal shirt, glasses, tired defensive expression,
   standing in a classroom, school lighting, candid documentary
   photography style, no text, no watermark, photorealistic"

   سيد (sayed.jpg):
   "Photorealistic portrait of a middle-aged Egyptian male school
   administrative employee, plain formal shirt, standing near a
   printer with paper stacks, nervous expression, school office
   lighting, candid documentary photography style, no text, no
   watermark, photorealistic"

   سيف (seif.jpg):
   "Photorealistic portrait of a teenage Egyptian male student,
   school uniform, confident sly smile, standing in a school
   hallway, daylight, candid documentary photography style, no text,
   no watermark, photorealistic"

   أستاذة نادية (nadia.jpg):
   "Photorealistic portrait of a middle-aged Egyptian female math
   teacher, formal professional attire, headscarf, sharp composed
   expression, standing in a classroom, school lighting, candid
   documentary photography style, no text, no watermark,
   photorealistic"

   دليل الصورة المسربة (exam-photo.jpg):
   "Photorealistic close-up of a smartphone displaying a photographed
   exam paper document, screen glow, no text, no watermark,
   photorealistic"

   دليل واتساب (exam-whatsapp.jpg):
   "Photorealistic close-up of a smartphone messaging app interface
   showing multiple group chats, generic UI, no text, no watermark,
   photorealistic"
   ============================================================ */

/* REVIEW PATCH 2026-08-19 */
(() => {
  const c = CASE_EXAM_LEAK;
  const s = c.suspects.find(x => x.id === 'seif');
  if (s) {
    const q = s.questions.find(q => q.closesInterrogation);
    if (q) {
      q.a = '(بيسكت شوية) "أنا وزعتها فعلًا وده غلط مني، بس الرقم اللي بعتها كان مش محفوظ عندي. بعدين عرفت إنه بيتستخدم في مركز أستاذ عادل، إنما مين كان ماسكه وقتها أنا معرفش."';
    }
  }
  if (c.matchPuzzle) {
    const source = c.matchPuzzle.rightItems?.find(x => x.id === 'r_source');
    if (source) source.text = 'صاحب النسخة الأقرب لمسار التسريب';
    c.matchPuzzle.resultText = 'الربط يوضح إن نسخة عادل هي الأقرب للمسار الرقمي، وسيف هو أول موزع واسع، بينما سيد ونادية خارج مسار المصدر. لسه لازم تجمع التتبع والتناقض قبل الحكم النهائي.';
  }
  c.evidenceCombinations = [
    { parts:['adel_number','committee_access'], resultId:'contradiction_noted_exam' }
  ];
  c.conclusiveRequired = 4;
})();

/* ============================================================
   وضع القصة التفاعلية (Story Mode) — 2026-08-31
   ============================================================ */
(() => {
  const c = CASE_EXAM_LEAK;
  c.storyMode = true;
  c.startScene = 'scene_night_before';

  c.scenes = {
    scene_night_before: {
      img: IMG_BASE_EXAM + 'exam-scene1.jpg',
      label: 'الفصل الأول — ليلة قبل الامتحان',
      text: 'مجموعات واتساب الطلبة مليانة قلق من امتحان الرياضيات بكرة. فجأة، صورة من ورقة الامتحان الرسمية بتظهر وسط جروب كبير وتنتشر زي النار في الهشيم خلال دقايق معدودة.',
      inspects: [
        { label: '👀 افحص جودة الصورة', detail: 'الصورة واضحة جدًا، مصورة بزاوية علوية مباشرة زي حد بيصور ورقة رسمية قدامه على مكتب، مش سرقة بالسرعة.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_discovery' } ],
    },
    scene_discovery: {
      img: IMG_BASE_EXAM + 'exam-scene2.jpg',
      label: 'الفصل الأول — الاكتشاف',
      text: 'مدرس بيلاحظ الصورة بالصدفة وبيبلغ الناظرة فورًا. الناظرة بتتصل بلجنة الامتحانات في نفس الليلة، والجو في المدرسة بيبقى متوتر جدًا. المهلة قصيرة قبل ما القرار يتاخد بإلغاء النموذج كله.',
      choices: [ { label:'التالي ←', next:'scene_gathering' } ],
    },
    scene_gathering: {
      img: IMG_BASE_EXAM + 'exam-scene3.jpg',
      label: 'الفصل الأول — جمع المشتبهين',
      text: 'الناظرة بتجمع كل اللي كان ليهم وصول لنسخة الامتحان قبل الطبع النهائي: أستاذ عادل وأستاذة نادية من لجنة الإعداد، سيد موظف الطباعة، وسيف، الطالب اللي بدأ نشر الصورة على نطاق واسع.',
      choices: [ { label:'التالي ←', next:'scene_briefing' } ],
    },
    scene_briefing: {
      img: IMG_BASE_EXAM + 'exam-scene4.jpg',
      label: 'الفصل الأول — سباق مع الوقت',
      text: 'قدامك ساعات معدودة قبل موعد الامتحان. لازم تحدد مصدر التسريب قبل ما اللجنة تضطر تبدّل النموذج وتؤجل الاختبار على مئات الطلبة اللي مالهمش ذنب.',
      choices: [ { label:'التالي ←', next:'scene_decision1' } ],
    },

    scene_decision1: {
      img: IMG_BASE_EXAM + 'exam-photo.jpg',
      label: 'الفصل الثاني — قرار',
      text: 'الصورة المسربة نفسها فيها كود مراجعة صغير في الهامش، ظاهر بس في نسخة اللجنة قبل الطباعة النهائية. تقدر تفحص الصورة تقنيًا الأول عشان تعرف مصدرها بالظبط، أو تبدأ بمقابلة الطالب سيف اللي بدأ التوزيع.',
      choices: [
        { label:'🔬 افحص كود المراجعة في الصورة', next:'scene_photo_analysis', flag:'analysis_first' },
        { label:'🗣️ قابل سيف على طول', next:'scene_seif_interview', flag:'seif_first' },
      ],
    },
    scene_photo_analysis: {
      img: IMG_BASE_EXAM + 'exam-photo.jpg',
      label: 'الفصل الثاني — تحليل الصورة',
      text: 'الكود الصغير في هامش الصورة مش موجود في النسخ اللي بتطلع للمدارس عادةً — ده كود خاص بنسخة الإعداد الداخلية قبل الطبع. ده معناه إن التسريب حصل من مرحلة الإعداد، مش من خزنة الورق بعد الطباعة.',
      inspects: [
        { label: '👀 قارن الكود بسجلات اللجنة', detail: 'الكود ده بيخص نسخة معينة اتوزعت على عضوين بس من لجنة الإعداد.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_seif_interview' } ],
    },
    scene_seif_interview: {
      img: IMG_BASE_EXAM + 'exam-scene1.jpg',
      label: 'الفصل الثاني — سيف',
      text: 'سيف، طالب شاطر معروف بعلاقاته الواسعة، بيبان متوتر. بتسأله لو هو اللي وزّع الصورة، فبيعترف بسرعة: "أنا استقبلتها من حد تاني، ووزعتها بس عشان الناس تستعد صح، ماكنتش متخيل الموضوع هيتكبر كده." بتسأله استلمها من مين، فبيقول: "من رقم مش محفوظ عندي. الرسالة كانت قصيرة وبتقول: انشرها بسرعة قبل ما تتشال. بعدين عرفت إن الرقم بيتستخدم في مركز أستاذ عادل."',
      inspects: [
        { label: '👀 لاحظ رد فعل سيف', detail: 'خايف جدًا، بس كلامه متماسك ومفصل — يبان صادق إن الصورة مش هو اللي جابها من الأساس.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_committee' } ],
    },
    scene_committee: {
      img: IMG_BASE_EXAM + 'adel.jpg',
      label: 'الفصل الثاني — أستاذ عادل',
      text: 'أستاذ عادل، مدرس الرياضيات وعضو في لجنة إعداد الامتحان، بيؤكد إنه من ضمن اللجنة: "أيوه، أنا وواحد تاني من المدرسين اللي شاركنا في مراجعة الأسئلة قبل الطبع النهائي." بتسأله عن سيف تحديدًا، فبينفي أي علاقة: "مستحيل، أنا بحافظ على سرية الأسئلة تمامًا، ده جزء أساسي من مصداقيتي المهنية."',
      choices: [ { label:'التالي ←', next:'scene_others' } ],
    },
    scene_others: {
      img: IMG_BASE_EXAM + 'sayed.jpg',
      label: 'الفصل الثاني — سيد ونادية',
      text: 'سيد، موظف الطباعة، بيقولك إن الأوراق بتتحط في خزنة مقفولة فورًا بعد الطبع، وسجل الدخول ما فيهوش أي حركة غير رسمية. أستاذة نادية، مدرسة رياضيات تانية ومنافسة مهنية لعادل، بتأكد إنها مش من ضمن لجنة الإعداد السنة دي، وإن المنافسة بينها وبين عادل شغل عادي بس.',
      choices: [ { label:'التالي ←', next:'scene_decision2' } ],
    },

    scene_decision2: {
      img: IMG_BASE_EXAM + 'exam-whatsapp.jpg',
      label: 'الفصل الثالث — قرار',
      text: 'عندك دلوقتي: الرقم اللي بعت لسيف بيتستخدم في مركز أستاذ عادل، وسيف كان أول شخص وزّع الصورة على 5 جروبات في نفس الدقيقة بالظبط. تقدر تتبع سجل واتساب بالتفصيل، تواجه أستاذ عادل مباشرة، أو تتهم أستاذة نادية فورًا بسبب منافستها المهنية معاه.',
      choices: [
        { label:'📱 تتبع سجل واتساب بالتفصيل', next:'scene_whatsapp_trace', flag:'traced_whatsapp' },
        { label:'🎯 واجه أستاذ عادل مباشرة', next:'scene_confront_adel', flag:'confronted_adel' },
        { label:'⚠️ اتهم أستاذة نادية فورًا', next:'ending_bad', flag:'accused_nadia_early' },
      ],
    },
    scene_whatsapp_trace: {
      img: IMG_BASE_EXAM + 'exam-whatsapp.jpg',
      label: 'الفصل الثالث — تتبع واتساب',
      text: 'تحليل سجل واتساب بيوضح إن سيف كان أول شخص وزّع الصورة، وعملها على 5 جروبات مختلفة في نفس الدقيقة بالظبط — نمط توزيع منظم مش عشوائي خالص. الرقم اللي بعتلها مسجل باسم زوجة عادل وبيستخدمه المركز في التواصل مع الطلبة.',
      inspects: [
        { label: '👀 قارن معرّف الملف', detail: 'معرّف ملف الصورة يطابق نسخة المراجعة اللي خرجت من جهاز اللجنة المخصص لعادل بالظبط.' },
      ],
      choices: [ { label:'التالي ←', next:'scene_confront_adel2' } ],
    },
    scene_confront_adel: {
      img: IMG_BASE_EXAM + 'adel.jpg',
      label: 'الفصل الثالث — مواجهة مباشرة',
      text: 'واجهت أستاذ عادل بسؤال مباشر: "سيف من طلبة مركزك، صح؟ وإيه طبيعة تواصلك معاه بره مواعيد الحصة؟" بيرد بسرعة: "أيوه سيف عندي في المجموعة. التواصل المفروض يبقى في جروب المراجعة بس، وأنا ما بعتلوش أسئلة امتحان ولا طلبت منه ينشر حاجة."',
      choices: [ { label:'التالي ←', next:'scene_confront_adel2' } ],
    },
    scene_confront_adel2: {
      img: IMG_BASE_EXAM + 'exam-whatsapp.jpg',
      label: 'الفصل الثالث — الدليل الحاسم',
      text: 'واجهته بكل حاجة مع بعض: سجل واتساب بيوضح إن سيف أول واحد وزّع الصورة على 5 جروبات في نفس الدقيقة، ده مش شخص بس بيستقبل ويحفظ صورة، ده تنسيق مسبق. سكت لحظة، بعدين قال بصوت واطي: "أستاذ عادل هو اللي طلب مني أنشرها. قاللي إن الامتحان هيتغير أصلًا وإنه مجرد مراجعة، وأنا صدقته. أنا غلطت لما وزعتها" — سيف نفسه أكد الرقم والتوقيت.',
      choices: [ { label:'التالي ←', next:'scene_decision3' } ],
    },

    scene_decision3: {
      img: IMG_BASE_EXAM + 'exam-scene3.jpg',
      label: 'الفصل الرابع — قرار',
      text: 'الحقيقة اتوضحت: أستاذ عادل سرّب النسخة لسيف، وسيف نشرها معتقد إنها مجرد مراجعة عادية. قبل ما تقفل القضية، تقدر تدافع عن سيف قدام الناظرة كضحية غير مقصودة، أو تسيب الأمر يتقيّم رسميًا من غير تدخل شخصي منك.',
      choices: [
        { label:'🛡️ دافع عن سيف كضحية غير مقصودة', next:'scene_defend_seif', flag:'defended_seif' },
        { label:'➡️ سيب التقييم يمشي رسميًا', next:'scene_pre_final', flag:'no_intervention' },
      ],
    },
    scene_defend_seif: {
      img: IMG_BASE_EXAM + 'exam-scene1.jpg',
      label: 'الفصل الرابع — الدفاع عن سيف',
      text: 'قولت للناظرة إن سيف اتخدع من مدرسه اللي المفروض يثق فيه، ومسؤوليته أقل بكتير من مسؤولية عادل. الناظرة وافقت تاخد نيته في الاعتبار عند تقييم عقوبته، بدل ما يتعامل معاه زي المصدر الأساسي للتسريب.',
      choices: [ { label:'التالي ←', next:'scene_pre_final' } ],
    },
    scene_pre_final: {
      img: IMG_BASE_EXAM + 'adel.jpg',
      label: 'الفصل الرابع — قبل الإغلاق',
      text: 'كل الأدلة جاهزة: وصول عادل للجنة الإعداد، تتبع الرقم والملف لمركزه، ونمط توزيع سيف المنظم. الطريقة اللي هتقفل بيها القضية دي هتفرق في مصير الامتحان على مئات الطلبة.',
      choices: [ { label:'التالي ←', next:'scene_decision4' } ],
    },
    scene_decision4: {
      img: IMG_BASE_EXAM + 'adel.jpg',
      label: 'الفصل الرابع — القرار الأخير',
      text: 'قدامك 3 طرق تقفل بيهم القضية: تبلغ الإدارة التعليمية رسميًا بواقعة تسريب كاملة (هتغيّر النموذج وتأجل الامتحان)، تقترح تغيير النموذج فورًا من غير فضح عادل قدام المدرسة كلها، أو تدّي عادل فرصة يعترف بنفسه للناظرة قبل ما القرار الرسمي يتاخد.',
      choices: [
        { label:'📋 بلّغ الإدارة التعليمية رسميًا', next:'ending_good_official', flag:'official_report' },
        { label:'🔄 غيّر النموذج بهدوء من غير فضح', next:'ending_good_quiet', flag:'quiet_change' },
        { label:'🕊️ فرصة اعتراف عادل بنفسه', next:'ending_good_confession', flag:'gave_confession_chance' },
      ],
    },

    ending_good_official: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_EXAM + 'exam-scene4.jpg',
      stamp: 'القضية اتقفلت', title: 'الحقيقة وصلت كاملة',
      paragraphs: [
        'بلّغت الإدارة التعليمية بواقعة تسريب كاملة موثقة: أستاذ عادل سرّب النسخة لطالبه سيف، وسيف نشرها معتقد إنها مجرد مراجعة. القرار الرسمي كان تغيير النموذج كامل وتأجيل الامتحان لكل طلبة الإدارة التعليمية.',
        'عادل اتحال لتحقيق تأديبي رسمي قد يفقده عمله، وسيف اتعامل معاه كضحية خداع مش كمصدر تسريب. الحل كان مكلف لآلاف الطلبة، لكنه كان الحل الشفاف والعادل الوحيد.',
      ],
    },
    ending_good_quiet: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_EXAM + 'exam-scene2.jpg',
      stamp: 'القضية اتقفلت', title: 'حل هادئ وسريع',
      paragraphs: [
        'اقترحت على الناظرة تغيير النموذج بهدوء من غير فضح عادل قدام المدرسة كلها فورًا — بس مع نقله من لجنة الإعداد للأبد وفتح تحقيق داخلي منفصل بعيد عن الأضواء.',
        'الامتحان اتغير بأقل ضرر ممكن على الطلبة، والحقيقة اتوثقت رسميًا من غير ما تتحول لفضيحة إعلامية كبيرة تضر بسمعة المدرسة كلها.',
      ],
    },
    ending_good_confession: {
      isEnding: true, endingType: 'good',
      img: IMG_BASE_EXAM + 'adel.jpg',
      stamp: 'القضية اتقفلت', title: 'اعتراف قبل الحكم',
      paragraphs: [
        'دّيت عادل فرصة يعترف بنفسه للناظرة قبل ما القرار الرسمي يتاخد. بعد لحظة صمت طويلة، اعترف بكل حاجة — إنه بعت النسخة لسيف من غير ما يفكر في العواقب، وإنه نادم بشدة على قرار اتخده في لحظة ضعف.',
        'اعترافه الطوعي خفف من العقوبة التأديبية شوية، والنموذج اتغير فورًا، لكن عادل فضل يعيش مع وزن القرار ده على مصداقيته المهنية للأبد.',
      ],
    },
    ending_bad: {
      isEnding: true, endingType: 'bad',
      img: IMG_BASE_EXAM + 'nadia.jpg',
      stamp: 'لغز بلا حل', title: 'القضية اتقفلت غلط',
      paragraphs: [
        'اتهمت أستاذة نادية بناءً على منافستها المهنية مع عادل بس، من غير ما تتبع سجل واتساب أو تواجه عادل بالدليل الرقمي. نادية كانت بريئة فعليًا — مش حتى من ضمن لجنة الإعداد السنة دي.',
        'عادل، المصدر الحقيقي للتسريب، فضل من غير مساءلة، وسيف اتحمّل وزن التسريب كامل وهو ضحية خداع من مدرسه. الأدلة كانت بتشاور بوضوح على اتجاه تاني من البداية.',
      ],
    },
  };
})();
