const questions = [
    { level: "အဆင့် ၁", question: "ကြက်ဥ ၁၀ လုံးထဲက ၂ လုံး ကွဲသွားရင် ကြက်ဥဘယ်နှစ်လုံးလဲ?", answers: [{ text: "၈ လုံး", correct: false }, { text: "၁၀ လုံး", correct: true, detail: "ကွဲတဲ့၂ လုံးက ကြက်ဥပါပဲ" }, { text: "၆ လုံး", correct: false }] },
    { level: "အဆင့် ၂", question: "မိုးသည်းထန်စွာ ရွာနေချိန်မှာ လူတစ်ယောက်က ထီးလည်း မဆောင်း၊ မိုးကာလည်း မပါဘဲ လမ်းလျှောက်နေတယ်၊ ဒါပေမဲ့ သူ့အင်္ကျီရေမစိုတာ ဘာကြောင့်လဲ?", answers: [{ text: "စူပါမန်း မို့လို့", correct: false }, { text: "သူက အင်္ကျီမဝတ်ထားလို့", correct: true, detail: "အင်္ကျီမဝတ်တော့ အင်္ကျီစိုစရာ မလိုဘူး" }, { text: "မြန်မြန်ပြေးလို့", correct: false }] },
    { level: "အဆင့် ၃", question: "မင်းမှာ ပန်းသီး ၆ လုံးရှိတယ်၊ မင်းက ၄ လုံးကိုပဲ ယူလိုက်ရင် မင်းမှာ ပန်းသီး ဘယ်နှစ်လုံး ရှိမလဲ?", answers: [{ text: "၁၀ လုံး", correct: false }, { text: "၄ လုံး", correct: true, detail: "မင်းကိုယ်တိုင် ယူလိုက်တာ ၄ လုံးလေ" }, { text: "၆ လုံး", correct: false }] },
    { level: "အဆင့် ၄", question: "ဆင်တစ်ကောင်ကို ရေခဲသေတ္တာထဲ ထည့်ချင်ရင် ဘယ်နှစ်ဆင့် လုပ်ရမလဲ?", answers: [{ text: "၃ ဆင့်", correct: true, detail: "တံခါးဖွင့်၊ ဆင်ထည့်၊ တံခါးပိတ်" }, { text: "မဆန့်လို့ ထည့်လို့မရဘူး", correct: false }, { text: "၂ ဆင့်", correct: false }] },
    { level: "အဆင့် ၅", question: "ဒါဆိုရင် သစ်ကုလားအုတ်ကို ရေခဲသေတ္တာထဲ ထည့်ချင်ရင် ဘယ်နှစ်ဆင့် လုပ်ရမလဲ?", answers: [{ text: "၃ ဆင့်", correct: false }, { text: "၄ ဆင့်", correct: true, detail: "တံခါးဖွင့်၊ ဆင်ကို အပြင်ထုတ်၊ သစ်ကုလားအုတ်ထည့်၊ တံခါးပိတ်" }, { text: "၅ ဆင့်", correct: false }] },
    { level: "အဆင့် ၆", question: "တောဆင်ရိုင်းကြီးက သတ္တဝါတွေ အားလုံးကို အစည်းအဝေး ခေါ်လိုက်တယ်၊ သတ္တဝါတစ်ကောင်ပဲ မလာဘူး၊ ဘယ်သူလဲ?", answers: [{ text: "ခြင်္သေ့", correct: false }, { text: "သစ်ကုလားအုတ်", correct: true, detail: "သူ ရေခဲသေတ္တာထဲမှာ ပိတ်မိနေလို့" }, { text: "ယုန်", correct: false }] },
    { level: "အဆင့် ၇", question: "အဘိုးကြီးတစ်ယောက်က မိကျောင်းတွေ အများကြီးရှိတဲ့ မြစ်ကို ဖြတ်ကူးရတော့မယ်၊ တံတားလည်း မရှိဘူး၊ ဘယ်လို ကူးမလဲ?", answers: [{ text: "ဒီအတိုင်း ကူးလိုက်ရုံပဲ", correct: true, detail: "မိကျောင်းတွေ အစည်းအဝေး ရောက်နေကြလို့" }, { text: "တံတာဆောက်မယ်", correct: false }, { text: "မကူးဘဲ ပြန်လှည့်မည်", correct: false }] },
    { level: "အဆင့် ၈", question: "အိမ်ထဲမှာ ဖယောင်းတိုင် ၁၀ တိုင်ထွန်းထားတယ်။ လေတိုက်လို့ ၂ တိုင်ငြိမ်းသွားတယ်။ နောက်ဆုံး ဖယောင်းတိုင် ဘယ်နှစ်တိုင်ကျန်မလဲ? ", answers: [{ text: "၈ တိုင်", correct: false }, { text: "၂ တိုင်", correct: true, detail: "ကျန်တဲ့ ၈ တိုင်က မီးလောင်ပြီး ကုန်သွားလို့" }, { text: "၁၀ တိုင်", correct: false }] },
    { level: "အဆင့် ၉", question: "အဆုတ် ၂ ခု မဟုတ်ဘဲ အဆုတ် ၃ ခုရှိတဲ့လူက ဘာဖြစ်မလဲ?", answers: [{ text: "ကျန်းမာရေး ပိုကောင်းမည်", correct: false }, { text: "လူ ၃ ယောက် ဖြစ်သွားမည်", correct: true, detail: "တစ်ယောက်ကို အဆုတ်တစ်ခုစီ ဖြစ်သွားလို့ပါ" }, { text: "အသက်ပိုရှည်မည်", correct: false }] },
    { level: "အဆင့် ၁၀", question:"ခွေးတစ်ကောင်က ရေထဲ ဒိုင်ဗင်ထိုးဆင်းသွားရင် ဘာဖြစ်မလဲ?", answers: [{ text: "ရေစိုသွားမည်", correct: true, detail: "ရေထဲဆင်းရင် ရေစိုတာ သဘာဝပါပဲ" }, { text: "ငါးဖမ်းမည်", correct: false }, { text: "ရေငုပ်သွားမည်", correct: false }] },
    { level: "အဆင့် ၁၁", question: "နွားတစ်ကောင်က မြောက်ဘက်ကို မူပြီး ရေထိုင်သောက်နေရင် အမြီးက ဘယ်ဘက်ကို လှည့်နေမလဲ?", answers: [{ text: "တောင်ဘက်", correct: false }, { text: "အောက်ဘက်", correct: true, detail: "အမြီးက အောက်ကိုပဲ အမြဲ တွဲလောင်းကျနေလို့ပါ" }, { text: "အနောက်ဘက်", correct: false }] },
    { level: "အဆင့် ၁၂", question: "မီးဖိုချောင်ထဲမှာ အနွေးဆုံးအရာက ဘာလဲ?", answers: [{ text: "မီးဖို", correct: false }, { text: "ဒယ်အိုး", correct: true, detail: "အိုးနဲ့မနွေးလို့ဘာနဲ့နွေးမှာ" }, { text: "ရေနွေးအိုး", correct: false }] },
    { level: "အဆင့် ၁၃", question: "လထဲမှာ ဘောလုံးကန်လို့ မရတာ ဘာကြောင့်လဲ?", answers: [{ text: "ဆွဲအားမရှိလို့", correct: false }, { text: "လမှာ ဘောလုံးကွင်း မရှိလို့", correct: true, detail: "ကွင်းမရှိရင် ကန်လို့ မရပါဘူး" }, { text: "လေမရှိလို့", correct: false }] },
    { level: "အဆင့် ၁၄", question: "ဘယ်လို တံခါးကို ဘယ်တော့မှ ဖွင့်လို့ မရတာလဲ?", answers: [{ text: "သံတံခါး", correct: false }, { text: "ပိတ်မထားတဲ့ တံခါး", correct: true, detail: "ပွင့်ပြီးသားမို့လို့ ထပ်ဖွင့်လို့ မရတော့ပါဘူး" }, { text: "သော့ခတ်ထားသော တံခါး", correct: false }] },
    { level: "အဆင့် ၁၅", question: "ဘယ်အရာက သင့်ရဲ့ ဘယ်ဘက်လက်နဲ့ ကိုင်လို့ရပြီး ညာဘက်လက်နဲ့ ဘယ်တော့မှ ကိုင်လို့မရတာလဲ?", answers: [{ text: "ညာဘက် တံတောင်ဆစ်", correct: true, detail: "ညာလက်နဲ့ ကိုယ့်ညာဘက် တံတောင်ဆစ်ကို ကိုင်လို့မရပါဘူး" }, { text: "ဖုန်း", correct: false }, { text: "ဘောပင်", correct: false }] },
    { level: "အဆင့် ၁၆", question: "အမြဲတမ်း လမ်းလျှောက်နေပေမဲ့ နေရာကနေ နည်းနည်းမှ မရွှေ့တဲ့အရာက ဘာလဲ?", answers: [{ text: "နာရီ", correct: true, detail: "နာရီလက်တံတွေပဲ သွားနေတာပါ" }, { text: "အရုပ်", correct: false }, { text: "စက်ဘီး", correct: false }] },
    { level: "အဆင့် ၁၇", question: "ဇွန်းနဲ့ သောက်လို့ မရတဲ့ စွပ်ပြုတ်က ဘာလဲ?", answers: [{ text: "ပန်းကန်ထဲမှာ မရှိတဲ့ စွပ်ပြုတ်", correct: true, detail: "မရှိတဲ့အတွက် သောက်လို့မရပါဘူး" }, { text: "အေးနေတဲ့ စွပ်ပြုတ်", correct: false }, { text: "ငရုတ်ကောင်းများသည့် စွပ်ပြုတ်", correct: false }] },
    { level: "အဆင့် ၁၈", question: "အိမ်အလုပ် အလုပ်ရဆုံး cartoonဇာတ်ကောင်?", answers: [{ text: "Spongebob", correct: true, detail: "ရေမြှုပ်လောက် ပန်းကန်ဘယ်သူပိုဆေးရလို့လဲ" }, { text: "cinderella", correct: false }, { text: "Tom", correct: false }] },
    { level: "အဆင့် ၁၉", question: "အမြဲတမ်း လာနေတယ်လို့ ပြောပေမဲ့ ဘယ်တော့မှ ရောက်မလာတဲ့အရာက ဘာလဲ?", answers: [{ text: "မနက်ဖြန်", correct: true, detail: "ရောက်လာရင် မနက်ဖြန်ဘယ်ဟုတ်တော့မလဲ" }, { text: "မိုးလေဝသ", correct: false }, { text: "ဘတ်စ်ကား", correct: false }] },
    { level: "အဆင့် ၂၀", question: "အမြဲတမ်း တက်ပဲတက်နိုင်ပြီး ဘယ်တော့မှ ပြန်မကျလာနိုင်တဲ့အရာက ဘာလဲ?", answers: [{ text: "အသက်အရွယ်", correct: true, detail: "အသက်က အမြဲကြီးလာတာပဲ ရှိလို့ပါ" }, { text: "မိုးပျံပူပေါင်း", correct: false }, { text: "အပူချိန်", correct: false }] },
    { level: "အဆင့် ၂၁", question: "ပိုင်ရှင်က လွှင့်ပစ်ချင်ပြီး သူများက ကောက်ယူချင်တဲ့အရာက ဘာလဲ?", answers: [{ text: "လျှို့ဝှက်ချက်", correct: true, detail: "သူများက သိချင်ကြလို့ပါ" }, { text: "ပိုက်ဆံ", correct: false }, { text: "အမှိုက်", correct: false }] },
    { level: "အဆင့် ၂၂", question: "သင့်ရှေ့မှာ အမြဲရှိနေပေမဲ့ သင့်မျက်စိနဲ့ ဘယ်တော့မှ မြင်လို့မရတဲ့အရာက ဘာလဲ?", answers: [{ text: "အနာဂတ်", correct: true, detail: "မရောက်သေးလို့ မမြင်ရတာပါ" }, { text: "လေ", correct: false }, { text: "မျက်တောင်", correct: false }] },
    { level: "အဆင့် ၂၃", question: "အိပ်တာကိုဖော်ပြတယ့် English စကားလုံးကဘာလဲ?", answers: [{ text: "Zzz..", correct: true, detail: "😴 Good Night လေမသိဘူးလား" }, { text: "Sleep", correct: false }, { text: "Eee..", correct: false }] },
    { level: "အဆင့် ၂၄", question: "ခြေထောက်တစ်ချောင်းမှ မရှိဘဲစဉ်ဆက်မပြတ် ခုန်နေတဲ့အရာက ဘာလဲ?", answers: [{ text: "နှလုံး", correct: false }, { text: "ဖား", correct: true, detail: "(ှ)နဲ့(ု) ကခြေထောက်တွေလေ" }, { text: "ဘောလုံး", correct: false }] },
    { level: "အဆင့် ၂၅", question: "သင့်မှာပဲ ရှိပေမဲ့ သင့်ထက် သူများတွေက ပိုပြီး ခေါ်သုံးကြတဲ့အရာက ဘာလဲ?", answers: [{ text: "သင့်နာမည်", correct: true, detail: "သူများတွေကပဲ သင့်နာမည်ကို ခေါ်ကြလို့ပါ" }, { text: "သင့်ဖုန်း", correct: false }, { text: "သင့်ပိုက်ဆံ", correct: false }] },
    { level: "အဆင့် ၂၆", question: "စာလုံးအက္ခရာ ၅ လုံးရှိပြီး ၂ လုံးထက်တိုလိုက်ရင် ပိုတိုသွားတဲ့ စကားလုံးက ဘာလဲ?", answers: [{ text: "shorter", correct: true, detail: "shorter ရဲ့ အဓိပ္ပာယ်က 'ပို၍တိုသောလေ" }, { text: "correct", correct: false }, { text: "Postman", correct: false }] },
    { level: "အဆင့် ၂၇", question: "၁၀၀ ထဲက ၁၀ ကို ဘယ်နှကြိမ် နုတ်လို့ရမလဲ?", answers: [{ text: "တစ်ကြိမ်", correct: true, detail: " _ _ ၀ ပဲကျန်တော့မှာလေ" }, { text: "၁၀ ကြိမ်", correct: false }, { text: "၁၀၀ ကြိမ်", correct: false }] },
    { level: "အဆင့် ၂၈", question: "ပါးစပ်မရှိဘဲ ပြောနိုင်တယ်၊ နားမရှိဘဲ ကြားနိုင်တယ်၊ ကြားသမျှလဲ ပြန်ပြောနိုင်တယ်၊ ခန္ဓာကိုယ်မရှိဘဲ လေနဲ့ရှင်သန်တဲ့အရာက ဘာလဲ?", answers: [{ text: "ပဲ့တင်သံ", correct: true, detail: "အသံပြန်လာခြင်း ဖြစ်လို့ပါ" }, { text: "ရေဒီယို", correct: false }, { text: "ဖုန်း", correct: false }] },
    { level: "အဆင့် ၂၉", question: "၇၀-၂၀x၂ = ၃ /အဖြေကဘာလဲ", answers: [{ text: "၃", correct: true, detail: "မှန်ဖို့မဟုတ်ဘူး အဖြေကိုပဲမေးတာ" }, { text: "၃၀", correct: false }, { text: "၁၀၀", correct: false }] },
    { level: "အဆင့် ၃၀", question: "သွားတွေ အများကြီး ရှိပေမဲ့ ကိုက်တော့ မကိုက်တတ်တဲ့အရာက ဘာလဲ?", answers: [{ text: "ဘီး", correct: true, detail: "ခေါင်းဘီးမှာ ဘီးသွားတွေ အများကြီး ပါလို့ပါ" }, { text: "ခွေး", correct: false }, { text: "ငါးမန်း", correct: false }] },
    { level: "အဆင့် ၃၁", question: "ဆွဲကြိုးမဝတ်နိုင်တယ့် သတ္တဝါက ဘာကောင်လဲ?", answers: [{ text: "ဖား", correct: true, detail: "ဖားမှာ လည်ပင်းမပါဘူးလေ" }, { text: "ကြိုးကြာ", correct: false }, { text: "ရေဘဝဲ", correct: false }] },
    { level: "အဆင့် ၃၂", question: "အခန်းတစ်ခန်းလုံး ပြည့်သွားအောင် လုပ်နိုင်ပေမဲ့ နေရာနည်းနည်းမှ မယူတဲ့အရာက ဘာလဲ?", answers: [{ text: "အလင်းရောင်", correct: true, detail: "အလင်းက အခန်းထဲ အပြည့်ရှိပေမဲ့ နေရာမယူပါဘူး" }, { text: "လေ", correct: false }, { text: "အနံ့", correct: false }] },
    { level: "အဆင့် ၃၃", question: "အမဲရောင် ဖြစ်နေချိန်မှာ သန့်ရှင်းပြီး အဖြူရောင် ပြောင်းသွားရင် ညစ်ပတ်သွားတာ ဘာလဲ?", answers: [{ text: "ကျောက်သင်ပုန်း", correct: true, detail: "မြေဖြူစာရေးရင် ဖြူသွားလို့ပါ" }, { text: "စက္ကူ", correct: false }, { text: "အဝတ်အစား", correct: false }] },
    { level: "အဆင့် ၃၄", question: "လည်ပင်း ရှိပေမဲ့ ခေါင်းမပါတဲ့ အရာက ဘာလဲ?", answers: [{ text: "အင်္ကျီ", correct: true, detail: "အင်္ကျီလည်ကတုံးလေ မကြားဖူးဘူးလား" }, { text: "သစ်ပင်", correct: false }, { text: "ကုလားထိုင်", correct: false }] },
    { level: "အဆင့် ၃၅", question: "လက်တံတွေ ရှိပေမဲ့ လက်ခုပ် ဘယ်တော့မှ တီးလို့မရတဲ့အရာက ဘာလဲ?", answers: [{ text: "နာရီ", correct: true, detail: "နာရီလက်တံများကို ပြောခြင်းဖြစ်ပါတယ်" }, { text: "ရုပ်တု", correct: false }, { text: "သစ်ပင်", correct: false }] },
    { level: "အဆင့် ၃၆", question: "ရန်မဖြစ်ဘဲနဲ့ သွေးထွက်အောင် လုပ်နိုင်တဲ့ စက်က ဘာလဲ?", answers: [{ text: "ခဲတံချွန်စက်", correct: true, detail: "ခဲတံကို 'သွေး' သည့်အခါ အသုံးဝင်လို့ပါ" }, { text: "ဓား", correct: false }, { text: "ကတ်ကြေး", correct: false }] },
    { level: "အဆင့် ၃၇", question: "ပင်လယ်ထဲမှာ တသက်လုံးနေပေမဲ့ ရေတစ်စက်မှ မကူးတတ်တဲ့အရာက ဘာလဲ?", answers: [{ text: "ကျောက်တုံး", correct: true, detail: "ကျောက်တုံးက ရေထဲမြုပ်နေရုံပဲ ရှိလို့ပါ" }, { text: "ငါး", correct: false }, { text: "သင်္ဘော", correct: false }] },
    { level: "အဆင့် ၃၈", question: "မင်း သူ့ကို ကြည့်ရင် သူလည်း မင်းကို ပြန်ကြည့်မယ်၊ မင်း မျက်လုံးမှိတ်လိုက်ရင် သူ ပျောက်သွားမယ်၊ ဘာလဲ?", answers: [{ text: "မှန်ထဲက ပုံရိပ်", correct: true, detail: "မှန်ထဲက ကိုယ့်ပုံရိပ်ပါပဲ" }, { text: "ဓာတ်ပုံ", correct: false }, { text: "အရိပ်", correct: false }] },
    { level: "အဆင့် ၃၉", question: "ငယ်ငယ်က ခြေ ၄ ချောင်း၊ အလတ်က ခြေ ၂ ချောင်း၊ ကြီးတော့ကာ ခြေ ၃ ချောင်းနဲ့ လှုပ်ရှားတာ ဘာလဲ?", answers: [{ text: "လူ", correct: true, detail: "ကလေးဘဝ လေးဘက်သွား၊ လူကြီးဘဝ ၂ ချောင်း၊ အသက်ကြီးချိန် တုတ်ကောက်နဲ့ ၃ ချောင်းပါ" }, { text: "ခွေး", correct: false }, { text: "ကြောင်", correct: false }] },
    { level: "အဆင့် ၄၀", question: "ရေထဲကို လဲကျသွားပေမဲ့ ရေတစ်စက်မှ မစိုတာ ဘာလဲ?", answers: [{ text: "အရိပ်", correct: true, detail: "အရိပ်က ရေမစိုပါဘူး" }, { text: "ငှက်မွှေး", correct: false }, { text: "ဆီ", correct: false }] },
    { level: "အဆင့် ၄၁", question: "What has many keys but can't open a single door?", answers: [{ text: "Piano", correct: true, detail: "ပီယာနိုခလုတ်များကို Keys လို့ခေါ်တာလေ" }, { text: "Keychain", correct: false }, { text: "computer", correct: false }] },
    { level: "အဆင့် ၄၂", question: "ပိုများလာလေလေ ပိုမမြင်ရလေက ဘာလဲ?", answers: [{ text: "အမှောင်", correct: true, detail: "အမှောင်ပိုကြီးရင် ဘာမှမမြင်ရတော့လို့ပါ" }, { text: "တိမ်", correct: false }, { text: "မီးခိုး", correct: false }] },
    { level: "အဆင့် ၄၃", question: "ပိုင်ရှင်ထက် သူများတွေက ပိုပြီး နင်းခြေအသုံးချတာ ဘာလဲ?", answers: [{ text: "လမ်း", correct: true, detail: "လူတိုင်း လမ်းလျှောက်နင်းကြလို့ပါ" }, { text: "ဖိနပ်", correct: false }, { text: "အိမ်", correct: false }] },
    { level: "အဆင့် ၄၄", question: "သူများခေါင်းကို နေ့တိုင်း ရိတ်ပေးနေပေမဲ့ သူ့မှာ ဆံပင်အမြဲရှိနေတာ ဘာကြောင့်လဲ?", answers: [{ text: "သူက ဆံပင်ညှပ်ဆရာ မို့လို့", correct: true, detail: "သူများဆံပင်ပဲ ညှပ်ပေးတာပါ" }, { text: "ကတုံးဖြစ်လို့", correct: false }, { text: "ဆွံ့အသူမို့လို့", correct: false }] },
    { level: "အဆင့် ၄၅", question: "ပြုလုပ်တဲ့သူက မသုံးရဘူး၊ ဝယ်တဲ့သူက မလိုချင်ဘူး၊ သုံးတဲ့သူက မမြင်ရဘူး၊ ဘာလဲ?", answers: [{ text: "ခေါင်းတလား", correct: true, detail: "သေသွားတဲ့သူပဲ သုံးရလို့ပါ" }, { text: "ဆေးဝါး", correct: false }, { text: "ပါဆယ်ထုတ်", correct: false }] },
    { level: "အဆင့် ၄၆", question: "မင်းနောက်ကို အမြဲလိုက်နေပြီး အမှောင်ထဲရောက်ရင် ပျောက်သွားတာ ဘာလဲ?", answers: [{ text: "အရိပ်", correct: true, detail: "အလင်းမရှိရင် အရိပ် ပျောက်သွားလို့ပါ" }, { text: "ကြောက်စိတ်", correct: false }, { text: "သူငယ်ချင်း", correct: false }] },
    { level: "အဆင့် ၄၇", question: "ပေါ့ပေါ့ပါးပါးလေးပေမဲ့ ၂ မိနစ်ထက်ပိုပြီး ထိန်းမထားနိုင်တဲ့အရာက ဘာလဲ?", answers: [{ text: "အသက်", correct: true, detail: "အသက်အောင့်ထားဖို့ ကြိုးစားကြည့်ပါ" }, { text: "ငှက်မွှေး", correct: false }, { text: "ရေ", correct: false }] },
    { level: "အဆင့် ၄၈", question: "ဘယ်နှစ်မှာ ၂၈ ရက် ရှိတဲ့လအများဆုံးလဲ?", answers: [{ text: "နှစ်တိုင်းမှာ", correct: true, detail: "လတိုင်းမှာ ရက် ၂၈ ရှိပါတယ်" }, { text: "ရက်ထပ်နှစ်", correct: false }, { text: "မရှိပါ", correct: false }] },
    { level: "အဆင့် ၄၉", question: "အတောင်ပံ မပါဘဲ ပျံနိုင်တယ်၊ မျက်ရည် မပါဘဲ မိုးရွာချနိုင်တာ ဘာလဲ?", answers: [{ text: "တိမ်တိုက်", correct: true, detail: "တိမ်များမှ မိုးရွာချပေးလို့ပါ" }, { text: "လေ", correct: false }, { text: "ငှက်", correct: false }] },
    { level: "အဆင့် ၅၀", question: "အစမှာ ခေါင်းစားတယ်၊ အလယ်မှာ ရယ်ရတယ်၊ အဆုံးမှာ ပေါက်ကရဖြစ်သွားတာ ဘာလဲ?", answers: [{ text: "ဒီဉာဏ်စမ်း ဂိမ်း", correct: true, detail: "ကစားပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်!" }, { text: "ရုပ်ရှင်", correct: false }, { text: "အိပ်မက်", correct: false }] }
];

let currentLevel = 0;

const levelIndicator = document.getElementById("level-indicator");
const questionText = document.getElementById("question-text");
const interactionArea = document.getElementById("interaction-area");

function loadQuestion() {
    let q = questions[currentLevel];
    levelIndicator.innerText = q.level;
    questionText.innerText = q.question;
    
    interactionArea.innerHTML = "";
    
    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.className = "answer-btn";
        btn.onclick = () => checkAnswer(answer, btn);
        interactionArea.appendChild(btn);
    });
}

function checkAnswer(selectedAnswer, selectedBtn) {
    const allBtns = document.querySelectorAll(".answer-btn");
    allBtns.forEach(btn => btn.disabled = true);

    if (selectedAnswer.correct) {
        selectedBtn.style.backgroundColor = "#4cd137";
        selectedBtn.style.color = "#ffffff";
        
        const successBox = document.createElement("div");
        successBox.className = "success-card";
        
        successBox.innerHTML = `
            <div class="detail-text">( ${selectedAnswer.detail} )</div>
            <button class="next-btn" id="next-level-btn">နောက်တစ်ဆင့်သို့ ➔</button>
        `;
        
        interactionArea.appendChild(successBox);

        document.getElementById("next-level-btn").onclick = () => {
            currentLevel++;
            if (currentLevel < questions.length) {
                loadQuestion();
            } else {
                showWinScreen();
            }
        };

    } else {
        selectedBtn.style.backgroundColor = "#e84118";
        selectedBtn.style.color = "#ffffff";
        
        const retryBtn = document.createElement("button");
        retryBtn.innerText = "ထပ်မံကြိုးစားမည် 🔄";
        retryBtn.className = "retry-btn";
        retryBtn.onclick = () => {
            loadQuestion();
        };
        interactionArea.appendChild(retryBtn);
    }
}

// မီးပန်း (Fireworks) Animation သက်သက် ဖန်တီးသည့် Function (Library မလိုပါ)
function triggerFireworks() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const firework = document.createElement("div");
            firework.style.position = "absolute";
            firework.style.left = Math.random() * window.innerWidth + "px";
            firework.style.top = Math.random() * (window.innerHeight / 1.5) + "px";
            firework.style.width = "8px";
            firework.style.height = "8px";
            firework.style.backgroundColor = `hsl(${Math.random * 360 || Math.random() * 360}, 100%, 50%)`;
            firework.style.borderRadius = "50%";
            firework.style.boxShadow = `0 0 12px 4px hsl(${Math.random() * 360}, 100%, 50%)`;
            firework.style.animation = "explode 0.9s ease-out forwards";
            container.appendChild(firework);

            setTimeout(() => firework.remove(), 900);
        }, i * 120);
    }

    setTimeout(() => container.remove(), 5000);
}

// မီးပန်းအတွက် CSS Animation ထည့်သွင်းခြင်း
const style = document.createElement('style');
style.innerHTML = `
@keyframes explode {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(20); opacity: 0; }
}`;
document.head.appendChild(style);

function showWinScreen() {
    levelIndicator.innerText = "🏆 ပြီးဆုံးပါပြီ 🏆";
    questionText.innerText = "";
    interactionArea.innerHTML = "";

    const winCard = document.createElement("div");
    winCard.className = "win-card";
    winCard.style.textAlign = "center";
    winCard.style.padding = "20px";

    winCard.innerHTML = `
        <h1 style="font-size: 3rem; color: #fbc531; margin-bottom: 10px;">🏆 U Win 🏆</h1>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">🎉 ဂုဏ်ယူပါတယ်! မေးခွန်း ၅၀ စလုံးကို အောင်မြင်စွာ ဖြေဆိုပြီးပါပြီ။ 🎉</p>
        <button class="next-btn" id="restart-btn" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; background-color: #009432; color: white; border: none; border-radius: 5px;">စတင်စမှ ပြန်ဆော့မည် 🔄</button>
    `;

    interactionArea.appendChild(winCard);

    // မီးပန်း ဖန်တီးသည့် function ကို ခေါ်ယူခြင်း
    triggerFireworks();

    document.getElementById("restart-btn").onclick = () => {
        currentLevel = 0;
        loadQuestion();
    };
}

loadQuestion();