/* ============================================================
   بيانات قضية: آخر مُشاهد (Last Seen)
   قضية Story Mode مبنية بمحرك منفصل تمامًا (v2/) — مش زي باقي
   القضايا، دي بس "بطاقة عرض" في المكتبة بتوديك لتجربة اللعب
   الحقيقية على v2/story.html. القضية دي معندهاش استجواب/أدلة/
   ألغاز بالمعنى المعتاد، فمعظم حقول القضية العادية فاضية عمدًا.
   ============================================================ */

const IMG_BASE_LASTSEEN = 'https://raw.githubusercontent.com/MoOnsy07/Tarf-khyt/main/images/last-seen/';

const CASE_LAST_SEEN = {
  id: 'last-seen',
  title: 'آخر مُشاهد',
  caseNo: 'STORY 01',
  subtitle: 'ملف وصل بالغلط... أو مش بالغلط',
  coverImg: IMG_BASE_LASTSEEN + '50_blank_surveillance_noise.webp',
  difficulty: 'Story Mode',
  estMinutes: 45,
  investigationPoints: 0,
  teaser: 'ملف تحقيق مش بتاعك بيوصلك في نص الليل. رجل مفقود، مراقب مجهول بيتابع كل خطوة، وموقع بيتوقع قراراتك قبل ما تاخدها. تجربة سردية متفرعة بالكامل — 64 مشهد، 15 قرار حقيقي، 5 خواتيم مختلفة.',

  isPremium: false,
  categories: ['story-mode', 'thriller'],
  seriesId: null,
  seriesOrder: null,
  seriesTitle: null,

  // العلامة اللي بتخلي محرك اللعبة الأساسي يوجّه اللاعب لـ v2/story.html
  // بدل ما يفتح شاشة التحقيق العادية (مفيش استجواب/أدلة/ألغاز هنا).
  externalUrl: 'v2/story.html',

  // حقول فاضية عمدًا — القضية دي بتستخدم محرك مختلف كليًا (v2/)
  evidence: [],
  suspects: [],
};

// القضية دي لسه في مرحلة المراجعة — مخفية من المكتبة العامة مؤقتًا،
// لكن الرابط المباشر v2/story.html يفضل شغال عادي لأي حد عنده الرابط.
(function hideLastSeenFromPublicLibrary(){
  if(typeof document === 'undefined') return;
  try{
    const style = document.createElement('style');
    style.textContent = '.lib-card[data-case="last-seen"]{display:none!important;}';
    (document.head || document.documentElement).appendChild(style);
  }catch(_){}
})();
