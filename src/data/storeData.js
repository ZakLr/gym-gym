import dymatizeIso100Image from "./dymatizeiso100.zjg.png";
import clearWheyImage from "./Clear-Whey-Isolate.png";
import rule1WheyImage from "./Rule1-Whey-Protein.webp";
import goldStandardImage from "./gold-standard-whey.webp";
import syntha6Image from "./syntha-6.webp";

export const heroProducts = [
  {
    slug: "dymatize-iso100",
    name: {
      en: "Dymatize ISO100 Hydrolyzed Whey Isolate",
      fr: "Dymatize ISO100 Isolat de whey hydrolysé",
      ar: "دايماتيز ISO100 واي معزول متحلل",
    },
    highlight: {
      en: "25g protein, very low lactose",
      fr: "25 g de protéines, très faible lactose",
      ar: "25 غ بروتين مع لاكتوز منخفض جدًا",
    },
    image: dymatizeIso100Image,
  },
  {
    slug: "gold-standard-whey",
    name: {
      en: "Optimum Nutrition Gold Standard 100% Whey",
      fr: "Optimum Nutrition Gold Standard 100% Whey",
      ar: "أوبتيموم نيوترشن جولد ستاندرد 100% واي",
    },
    highlight: {
      en: "Classic all-day whey blend",
      fr: "Le grand classique du whey blend",
      ar: "خليط واي كلاسيكي للاستخدام اليومي",
    },
    image: goldStandardImage,
  },
  {
    slug: "clear-whey-isolate",
    name: {
      en: "Applied Nutrition Clear Whey Isolate",
      fr: "Applied Nutrition Clear Whey Isolate",
      ar: "أبلايد نيوترشن كلير واي آيزوليت",
    },
    highlight: {
      en: "Juicy, light, and easy to drink",
      fr: "Léger, frais et facile à boire",
      ar: "خفيف ومنعش وسهل الشرب",
    },
    image: clearWheyImage,
  },
];

export const promoSlides = [
  {
    id: 1,
    title: {
      en: "Algerian delivery deals",
      fr: "Livraison partout en Algérie",
      ar: "عروض التوصيل داخل الجزائر",
    },
    text: {
      en: "Built for buyers in Algiers, Oran, Constantine, and beyond with fast local delivery flow.",
      fr: "Pensé pour Alger, Oran, Constantine et toutes les grandes wilayas.",
      ar: "مصمم لزبائن الجزائر العاصمة ووهران وقسنطينة وباقي الولايات الكبرى.",
    },
    image: goldStandardImage,
  },
  {
    id: 2,
    title: {
      en: "Whey + creatine bundles",
      fr: "Bundles whey + créatine",
      ar: "باقات واي + كرياتين",
    },
    text: {
      en: "Stack protein, recovery, and strength products in one order to simplify the purchase.",
      fr: "Combinez protéines, récupération et force dans un seul panier.",
      ar: "اجمع منتجات البروتين والاستشفاء والقوة في طلب واحد.",
    },
    image: dymatizeIso100Image,
  },
  {
    id: 3,
    title: {
      en: "Cash on delivery ready",
      fr: "Paiement à la livraison",
      ar: "الدفع عند الاستلام",
    },
    text: {
      en: "A checkout flow shaped around local buying habits, trust, and clarity.",
      fr: "Un checkout conçu pour les habitudes d’achat locales.",
      ar: "مسار شراء مناسب لعادات التسوق المحلية والثقة والوضوح.",
    },
    image: syntha6Image,
  },
];

export const products = [
  {
    id: 1,
    slug: "dymatize-iso100",
    brand: "Dymatize",
    name: {
      en: "ISO100 Hydrolyzed Whey Isolate",
      fr: "ISO100 Isolat de whey hydrolysé",
      ar: "ISO100 واي معزول متحلل",
    },
    description: {
      en: "A fast-digesting isolate with a clean macro profile for lean muscle support.",
      fr: "Un isolat rapide avec un profil de macros propre pour la masse sèche.",
      ar: "معزول سريع الهضم بمواصفات نظيفة لدعم العضلات الجافة.",
    },
    badge: {
      en: "Imported favorite",
      fr: "Favori importé",
      ar: "مفضل مستورد",
    },
    categoryKey: "whey-isolate",
    goalKey: "lean-muscle",
    price: 17900,
    rating: 4.9,
    servings: 28,
    protein: 25,
    flavor: {
      en: "Fudge brownie",
      fr: "Brownie",
      ar: "براوني",
    },
    image: dymatizeIso100Image,
    featured: true,
  },
  {
    id: 2,
    slug: "gold-standard-whey",
    brand: "Optimum Nutrition",
    name: {
      en: "Gold Standard 100% Whey",
      fr: "Gold Standard 100% Whey",
      ar: "غولد ستاندرد 100% واي",
    },
    description: {
      en: "The benchmark whey blend for daily use, recovery, and dependable taste.",
      fr: "La référence du whey blend pour le quotidien et la récupération.",
      ar: "معيار ثابت لخليط الواي للاستخدام اليومي والاستشفاء.",
    },
    badge: { en: "Best seller", fr: "Meilleure vente", ar: "الأكثر مبيعًا" },
    categoryKey: "whey-blend",
    goalKey: "lean-muscle",
    price: 14900,
    rating: 4.8,
    servings: 29,
    protein: 24,
    flavor: {
      en: "Double rich chocolate",
      fr: "Double chocolat",
      ar: "شوكولاتة مضاعفة",
    },
    image: goldStandardImage,
    featured: true,
  },
  {
    id: 3,
    slug: "impact-whey-protein",
    brand: "MyProtein",
    name: {
      en: "Impact Whey Protein",
      fr: "Impact Whey Protein",
      ar: "إمباكت واي بروتين",
    },
    description: {
      en: "A dependable everyday whey powder with flexible flavors and value.",
      fr: "Une whey quotidienne fiable avec un bon rapport qualité-prix.",
      ar: "واي يومية موثوقة بنكهات متعددة وقيمة جيدة.",
    },
    badge: { en: "Value pick", fr: "Bon plan", ar: "أفضل قيمة" },
    categoryKey: "whey-blend",
    goalKey: "daily-use",
    price: 10900,
    rating: 4.7,
    servings: 30,
    protein: 21,
    flavor: {
      en: "Vanilla",
      fr: "Vanille",
      ar: "فانيلا",
    },
    image: rule1WheyImage,
    featured: true,
  },
  {
    id: 4,
    slug: "clear-whey-isolate",
    brand: "Applied Nutrition",
    name: {
      en: "Clear Whey Isolate",
      fr: "Clear Whey Isolate",
      ar: "كلير واي آيزوليت",
    },
    description: {
      en: "A light, juice-style protein for hot days, easy digestion, and hydration support.",
      fr: "Une protéine légère style boisson, parfaite pour les journées chaudes.",
      ar: "بروتين خفيف على شكل مشروب منعش يناسب الأجواء الحارة.",
    },
    badge: { en: "Fresh taste", fr: "Goût frais", ar: "طعم منعش" },
    categoryKey: "clear-whey",
    goalKey: "recovery",
    price: 12400,
    rating: 4.7,
    servings: 20,
    protein: 23,
    flavor: {
      en: "Summer fruits",
      fr: "Fruits d’été",
      ar: "فواكه صيفية",
    },
    image: clearWheyImage,
    featured: false,
  },
  {
    id: 5,
    slug: "r1-whey-blend",
    brand: "Rule 1",
    name: {
      en: "R1 Whey Blend",
      fr: "R1 Whey Blend",
      ar: "آر1 واي بليند",
    },
    description: {
      en: "A balanced whey blend built for gym users who want dependable protein every day.",
      fr: "Un mélange équilibré pour les pratiquants qui veulent une whey fiable.",
      ar: "خليط متوازن لمن يريد بروتينًا ثابتًا وعمليًا كل يوم.",
    },
    badge: { en: "Reliable", fr: "Fiable", ar: "موثوق" },
    categoryKey: "whey-blend",
    goalKey: "daily-use",
    price: 13200,
    rating: 4.6,
    servings: 27,
    protein: 24,
    flavor: {
      en: "Cookies & cream",
      fr: "Cookies & cream",
      ar: "كوكيز وكريمة",
    },
    image: rule1WheyImage,
    featured: false,
  },
  {
    id: 6,
    slug: "syntha-6",
    brand: "BSN",
    name: {
      en: "Syntha-6 Protein Powder",
      fr: "Poudre protéinée Syntha-6",
      ar: "سنتا-6 بودرة بروتين",
    },
    description: {
      en: "A richer blend for people who care about taste, texture, and satiety.",
      fr: "Un blend plus gourmand pour le goût, la texture et la satiété.",
      ar: "خليط أغنى لمن يهتم بالنكهة والقوام والشبع.",
    },
    badge: { en: "Indulgent", fr: "Gourmand", ar: "مذاق غني" },
    categoryKey: "whey-blend",
    goalKey: "bulk",
    price: 13900,
    rating: 4.6,
    servings: 22,
    protein: 22,
    flavor: {
      en: "Strawberry milkshake",
      fr: "Milkshake fraise",
      ar: "ميلك شيك بالفراولة",
    },
    image: syntha6Image,
    featured: false,
  },
  {
    id: 7,
    slug: "serious-mass",
    brand: "Optimum Nutrition",
    name: {
      en: "Serious Mass",
      fr: "Serious Mass",
      ar: "سيريوس ماس",
    },
    description: {
      en: "A high-calorie gainer for hard gainers who need a bigger daily intake.",
      fr: "Un gainer calorique pour ceux qui ont du mal à prendre du poids.",
      ar: "مكمل عالي السعرات لمن يحتاجون إلى زيادة يومية أكبر.",
    },
    badge: { en: "Mass builder", fr: "Prise de masse", ar: "زيادة الكتلة" },
    categoryKey: "mass-gainer",
    goalKey: "bulk",
    price: 15600,
    rating: 4.7,
    servings: 16,
    protein: 50,
    flavor: {
      en: "Chocolate peanut butter",
      fr: "Chocolat beurre de cacahuète",
      ar: "شوكولاتة وزبدة الفول السوداني",
    },
    image: goldStandardImage,
    featured: true,
  },
  {
    id: 8,
    slug: "nitrotech-whey-gold",
    brand: "MuscleTech",
    name: {
      en: "NitroTech Whey Gold",
      fr: "NitroTech Whey Gold",
      ar: "نيتروتك واي غولد",
    },
    description: {
      en: "A lean protein option with strong recovery positioning and a premium feel.",
      fr: "Une whey plus sèche avec une vraie logique de récupération.",
      ar: "خيار بروتيني أنحف مع تركيز واضح على الاستشفاء والجودة.",
    },
    badge: { en: "Premium cut", fr: "Version premium", ar: "نسخة فاخرة" },
    categoryKey: "recovery",
    goalKey: "lean-muscle",
    price: 16800,
    rating: 4.8,
    servings: 27,
    protein: 24,
    flavor: {
      en: "Chocolate fudge",
      fr: "Chocolat fondant",
      ar: "شوكولاتة فادج",
    },
    image: syntha6Image,
    featured: true,
  },
  {
    id: 9,
    slug: "iso-sensations-93",
    brand: "Ultimate Nutrition",
    name: {
      en: "Iso Sensation 93",
      fr: "Iso Sensation 93",
      ar: "آيزو سينسيشن 93",
    },
    description: {
      en: "A premium isolate-style blend for shoppers who want a lean daily protein.",
      fr: "Un blend premium orienté isolat pour une protéine quotidienne plus sèche.",
      ar: "خليط فاخر بنمط المعزول لمن يريد بروتينًا يوميًا أنحف.",
    },
    badge: { en: "New arrival", fr: "Nouvelle arrivée", ar: "وصول جديد" },
    categoryKey: "whey-isolate",
    goalKey: "lean-muscle",
    price: 16200,
    rating: 4.7,
    servings: 27,
    protein: 24,
    flavor: {
      en: "Vanilla ice cream",
      fr: "Glace vanille",
      ar: "آيس كريم فانيلا",
    },
    image: dymatizeIso100Image,
    featured: false,
  },
  {
    id: 10,
    slug: "whey-100-complete",
    brand: "Scitec Nutrition",
    name: {
      en: "100% Whey Professional",
      fr: "100% Whey Professional",
      ar: "100% واي بروفيشنال",
    },
    description: {
      en: "A balanced whey option for everyday training and straightforward macros.",
      fr: "Une whey équilibrée pour l’entraînement quotidien et des macros simples.",
      ar: "خيار واي متوازن للتدريب اليومي ومواصفات سهلة القراءة.",
    },
    badge: { en: "Trainer pick", fr: "Choix coach", ar: "اختيار المدرب" },
    categoryKey: "whey-blend",
    goalKey: "daily-use",
    price: 12800,
    rating: 4.6,
    servings: 30,
    protein: 22,
    flavor: {
      en: "Cookies cream",
      fr: "Cookies cream",
      ar: "كوكيز وكريمة",
    },
    image: goldStandardImage,
    featured: false,
  },
  {
    id: 11,
    slug: "isolated-whey-shock",
    brand: "BioTechUSA",
    name: {
      en: "Iso Whey Zero",
      fr: "Iso Whey Zero",
      ar: "آيزو واي زيرو",
    },
    description: {
      en: "A zero-sugar isolate for strict cutting phases and light digestion.",
      fr: "Un isolat sans sucre pour les phases de sèche et la digestion légère.",
      ar: "معزول بدون سكر لفترات التنشيف والهضم الخفيف.",
    },
    badge: { en: "Cutting", fr: "Sèche", ar: "تنشيف" },
    categoryKey: "whey-isolate",
    goalKey: "lean-muscle",
    price: 17400,
    rating: 4.8,
    servings: 29,
    protein: 25,
    flavor: {
      en: "White chocolate",
      fr: "Chocolat blanc",
      ar: "شوكولاتة بيضاء",
    },
    image: clearWheyImage,
    featured: false,
  },
  {
    id: 12,
    slug: "mass-tech-performance",
    brand: "MuscleTech",
    name: {
      en: "Mass-Tech Performance Series",
      fr: "Mass-Tech Performance Series",
      ar: "ماست تك بيرفورمانس سيريز",
    },
    description: {
      en: "A serious calorie-heavy gainer built for hard gainers and bigger meals.",
      fr: "Un gainer très calorique pour les personnes qui ont du mal à prendre du poids.",
      ar: "جينر عالي السعرات لمن يحتاجون وجبات أكبر وزيادة أسرع.",
    },
    badge: { en: "High calorie", fr: "Très calorique", ar: "سعرات عالية" },
    categoryKey: "mass-gainer",
    goalKey: "bulk",
    price: 18400,
    rating: 4.7,
    servings: 14,
    protein: 50,
    flavor: {
      en: "Chocolate milkshake",
      fr: "Milkshake chocolat",
      ar: "ميلك شيك شوكولاتة",
    },
    image: syntha6Image,
    featured: false,
  },
];

export const articles = [
  {
    id: 1,
    slug: "choosing-whey-in-algeria",
    title: {
      en: "How to choose a whey protein in Algeria",
      fr: "Comment choisir une whey en Algérie",
      ar: "كيف تختار بروتين واي في الجزائر",
    },
    excerpt: {
      en: "A practical buyer's guide for checking labels, servings, and delivery details before you order.",
      fr: "Un guide pratique pour vérifier l’étiquette, les portions et la livraison avant d’acheter.",
      ar: "دليل عملي لفحص الملصق والحصص والتوصيل قبل الشراء.",
    },
    category: { en: "Buying guide", fr: "Guide d’achat", ar: "دليل شراء" },
    readingTime: "6 min",
    publishedAt: "2026-03-20",
    heroImage: dymatizeIso100Image,
    sections: [
      {
        heading: {
          en: "1. Start with your goal",
          fr: "1. Commencez par votre objectif",
          ar: "1. ابدأ بهدفك",
        },
        paragraphs: {
          en: [
            "If your priority is lean muscle, choose a whey isolate or a fast blend with at least 20 to 25 grams of protein per serving.",
            "If you are trying to gain weight, a higher-calorie gainer can make more sense than a light isolate.",
          ],
          fr: [
            "Si votre objectif est la masse sèche, privilégiez un isolat ou un blend rapide avec 20 à 25 g de protéines par portion.",
            "Si vous voulez prendre du poids, un gainer plus calorique peut être plus utile qu’une whey légère.",
          ],
          ar: [
            "إذا كان هدفك زيادة العضلات مع الحفاظ على كتلة نظيفة، فاختر معزول واي أو خليطًا سريعًا يحتوي على 20 إلى 25 غ بروتين على الأقل.",
            "إذا كان هدفك زيادة الوزن، فقد يكون الجينر عالي السعرات أنسب من الواي الخفيف.",
          ],
        },
      },
      {
        heading: {
          en: "2. Read the nutrition panel, not the marketing",
          fr: "2. Lisez le tableau nutritionnel, pas le slogan",
          ar: "2. اقرأ الجدول الغذائي لا العبارة التسويقية",
        },
        paragraphs: {
          en: [
            "Check protein per serving, sugar, fat, and the serving size itself. Two products can look similar at a glance and still deliver very different value.",
            "Also look for the number of servings. In Algeria, the real comparison is often the price per serving, not just the tub price.",
          ],
          fr: [
            "Vérifiez les protéines par portion, le sucre, les lipides et la taille de la portion. Deux produits peuvent sembler similaires mais offrir une valeur très différente.",
            "Regardez aussi le nombre de portions. En Algérie, le vrai repère est souvent le prix par portion.",
          ],
          ar: [
            "تحقق من كمية البروتين في الحصة والسكر والدهون وحجم الحصة نفسه. قد يبدو منتجان متشابهان لكن القيمة الحقيقية تختلف كثيرًا.",
            "انظر أيضًا إلى عدد الحصص. في الجزائر، المقارنة الأذكى تكون عادة بسعر الحصة وليس بسعر العبوة فقط.",
          ],
        },
      },
      {
        heading: {
          en: "3. Think about delivery and storage",
          fr: "3. Pensez à la livraison et au stockage",
          ar: "3. فكّر في التوصيل والتخزين",
        },
        paragraphs: {
          en: [
            "Whey lasts longer when stored in a cool, dry place away from direct heat. That matters during hot Algerian summers.",
            "Choose vendors that explain shipping time, payment on delivery, and return policy clearly. Trust is part of the product.",
          ],
          fr: [
            "La whey se conserve mieux dans un endroit frais et sec, loin de la chaleur directe. C’est important pendant les étés chauds.",
            "Choisissez des vendeurs qui détaillent clairement le délai de livraison, le paiement à la livraison et les retours.",
          ],
          ar: [
            "يحافظ الواي على جودته أكثر عند تخزينه في مكان بارد وجاف بعيدًا عن الحرارة المباشرة، وهذا مهم في صيف الجزائر.",
            "اختر بائعين يوضحون مدة الشحن والدفع عند الاستلام وسياسة الاسترجاع بشكل واضح.",
          ],
        },
      },
    ],
    takeaways: {
      en: [
        "Choose by goal first, flavor second.",
        "Price per serving is more useful than price per tub.",
        "Delivery reliability matters as much as protein content.",
      ],
      fr: [
        "Choisissez d’abord selon l’objectif, puis selon le goût.",
        "Le prix par portion est plus utile que le prix du pot.",
        "La fiabilité de la livraison compte autant que la protéine.",
      ],
      ar: [
        "اختر حسب الهدف أولًا ثم حسب النكهة.",
        "سعر الحصة أهم من سعر العبوة.",
        "موثوقية التوصيل لا تقل أهمية عن كمية البروتين.",
      ],
    },
    relatedProducts: [
      "dymatize-iso100",
      "gold-standard-whey",
      "impact-whey-protein",
    ],
  },
  {
    id: 2,
    slug: "isolate-vs-blend",
    title: {
      en: "Whey isolate vs whey blend: what should you buy?",
      fr: "Isolat vs blend : lequel acheter ?",
      ar: "المعزول أم الخليط: ماذا تختار؟",
    },
    excerpt: {
      en: "A clear comparison of digestion speed, price, and who benefits most from each type.",
      fr: "Une comparaison claire entre digestion, prix et profils d’utilisateurs.",
      ar: "مقارنة واضحة بين سرعة الهضم والسعر ومن يناسبه كل نوع.",
    },
    category: {
      en: "Nutrition basics",
      fr: "Bases nutrition",
      ar: "أساسيات التغذية",
    },
    readingTime: "5 min",
    publishedAt: "2026-03-18",
    heroImage: goldStandardImage,
    sections: [
      {
        heading: {
          en: "Isolate is lean and fast",
          fr: "L’isolat est plus sec et rapide",
          ar: "المعزول أنحف وأسرع",
        },
        paragraphs: {
          en: [
            "Isolate usually has more protein per serving and less lactose. It is a strong option if you want a cleaner post-workout shake.",
            "The tradeoff is price. You are paying for extra processing and a tighter macro profile.",
          ],
          fr: [
            "L’isolat contient souvent plus de protéines par portion et moins de lactose. C’est un bon choix après l’entraînement.",
            "Le compromis est le prix, car le traitement est plus poussé.",
          ],
          ar: [
            "يحتوي المعزول غالبًا على بروتين أكثر في الحصة ولاكتوز أقل. وهو خيار ممتاز بعد التمرين.",
            "المقابل هو السعر، لأن مستوى المعالجة أعلى.",
          ],
        },
      },
      {
        heading: {
          en: "Blend is practical and budget-friendly",
          fr: "Le blend est pratique et abordable",
          ar: "الخليط عملي واقتصادي",
        },
        paragraphs: {
          en: [
            "A whey blend mixes several protein sources, which makes it a sensible everyday option for many gym users.",
            "If your diet is already solid and you just need reliable protein support, a good blend can be the smarter buy.",
          ],
          fr: [
            "Un blend combine plusieurs sources de protéines et convient bien à un usage quotidien.",
            "Si votre alimentation est déjà solide, un bon blend peut être le choix le plus intelligent.",
          ],
          ar: [
            "يخلط خليط الواي عدة مصادر بروتين، وهذا يجعله خيارًا يوميًا عمليًا لكثير من الرياضيين.",
            "إذا كانت تغذيتك جيدة وتحتاج فقط إلى دعم ثابت بالبروتين، فقد يكون الخليط هو الاختيار الأذكى.",
          ],
        },
      },
      {
        heading: {
          en: "Buy based on consistency",
          fr: "Achetez selon votre régularité",
          ar: "اشترِ حسب قدرتك على الاستمرار",
        },
        paragraphs: {
          en: [
            "The best protein is the one you can keep using. If a cheaper blend helps you stay consistent, it often beats a premium isolate you never reorder.",
            "That is especially true for Algerian buyers who want value and predictable restocking.",
          ],
          fr: [
            "La meilleure whey est celle que vous pouvez utiliser régulièrement.",
            "C’est encore plus vrai pour les acheteurs en Algérie qui veulent de la valeur et un réassort simple.",
          ],
          ar: [
            "أفضل بروتين هو الذي تستطيع الاستمرار في استخدامه.",
            "وهذا مهم جدًا للمشترين في الجزائر الذين يبحثون عن القيمة وإمكانية إعادة الطلب بسهولة.",
          ],
        },
      },
    ],
    takeaways: {
      en: [
        "Isolate is cleaner and faster.",
        "Blend is often the better everyday value.",
        "Consistency matters more than a perfect label.",
      ],
      fr: [
        "L’isolat est plus propre et plus rapide.",
        "Le blend est souvent plus intéressant au quotidien.",
        "La régularité compte plus qu’une étiquette parfaite.",
      ],
      ar: [
        "المعزول أنقى وأسرع.",
        "الخليط غالبًا أفضل قيمة يومية.",
        "الاستمرارية أهم من الملصق المثالي.",
      ],
    },
    relatedProducts: [
      "dymatize-iso100",
      "clear-whey-isolate",
      "gold-standard-whey",
    ],
  },
  {
    id: 3,
    slug: "how-to-read-whey-labels",
    title: {
      en: "How to read whey labels without getting fooled",
      fr: "Lire une étiquette whey sans se tromper",
      ar: "كيف تقرأ ملصق الواي بدون أن تنخدع",
    },
    excerpt: {
      en: "Learn the five label checks that matter before you spend money on a protein tub.",
      fr: "Les cinq vérifications à faire avant d’acheter un pot de protéine.",
      ar: "خمسة فحوصات مهمة قبل إنفاق المال على عبوة بروتين.",
    },
    category: { en: "Smart shopping", fr: "Achat malin", ar: "شراء ذكي" },
    readingTime: "7 min",
    publishedAt: "2026-03-14",
    heroImage: rule1WheyImage,
    sections: [
      {
        heading: {
          en: "Protein per serving",
          fr: "Protéines par portion",
          ar: "البروتين في الحصة",
        },
        paragraphs: {
          en: [
            "Look for a number that matches your goal. For many gym users, 20 to 25 grams per serving is a practical range.",
            "Do not confuse scoop size with protein value. The full scoop may be larger than the actual protein content you care about.",
          ],
          fr: [
            "Cherchez un chiffre cohérent avec votre objectif. Pour beaucoup, 20 à 25 g par portion est une bonne base.",
            "Ne confondez pas la taille de la dose avec la quantité réelle de protéines.",
          ],
          ar: [
            "ابحث عن رقم يناسب هدفك. بالنسبة لكثير من الرياضيين، 20 إلى 25 غ للحصة تعتبر بداية عملية.",
            "لا تخلط بين حجم المغرفة وكمية البروتين الفعلية.",
          ],
        },
      },
      {
        heading: {
          en: "Sugar, fat, and extras",
          fr: "Sucre, lipides et ajouts",
          ar: "السكر والدهون والإضافات",
        },
        paragraphs: {
          en: [
            "Some products hide extra calories in flavor systems and fillers. That may be fine for mass gain, but not for a lean cut.",
            "If you want recovery without extra calories, choose a cleaner isolate or a clear whey.",
          ],
          fr: [
            "Certains produits cachent des calories supplémentaires dans les arômes et les ajouts. C’est utile pour la masse, pas forcément pour une sèche.",
            "Pour la récupération sans surplus calorique, préférez un isolat plus propre.",
          ],
          ar: [
            "بعض المنتجات تخفي سعرات إضافية عبر المنكهات والإضافات. هذا قد يناسب زيادة الكتلة لكنه ليس الأفضل للالتزام بكتلة نظيفة.",
            "إذا أردت الاستشفاء بدون سعرات إضافية، فاختر معزولًا أنظف أو كلير واي.",
          ],
        },
      },
      {
        heading: {
          en: "Serving count and restocking",
          fr: "Nombre de portions et réassort",
          ar: "عدد الحصص وإعادة الطلب",
        },
        paragraphs: {
          en: [
            "A product with more servings can be cheaper over time even if the sticker price is higher.",
            "This matters when you want a repeatable protein routine and predictable monthly ordering.",
          ],
          fr: [
            "Un produit avec plus de portions peut revenir moins cher à long terme, même si le prix initial est plus élevé.",
            "C’est important pour une routine stable et des commandes mensuelles prévisibles.",
          ],
          ar: [
            "قد يكون المنتج الذي يحتوي على حصص أكثر أرخص على المدى الطويل رغم أن سعره أعلى في البداية.",
            "هذا مهم عندما تريد روتينًا ثابتًا وإعادة طلب منتظمة كل شهر.",
          ],
        },
      },
    ],
    takeaways: {
      en: [
        "Protein per serving matters more than tub marketing.",
        "Lean goals and bulk goals need different formulas.",
        "More servings can mean better long-term value.",
      ],
      fr: [
        "La protéine par portion compte plus que le marketing.",
        "Les objectifs secs et prise de masse demandent des formules différentes.",
        "Plus de portions peut signifier plus de valeur.",
      ],
      ar: [
        "كمية البروتين في الحصة أهم من التسويق.",
        "الهدف النظيف وهدف زيادة الكتلة يحتاجان تركيبات مختلفة.",
        "عدد الحصص الأكبر قد يعني قيمة أفضل على المدى الطويل.",
      ],
    },
    relatedProducts: [
      "impact-whey-protein",
      "nitrotech-whey-gold",
      "serious-mass",
    ],
  },
  {
    id: 4,
    slug: "best-post-workout-routine",
    title: {
      en: "A simple post-workout protein routine that actually sticks",
      fr: "Une routine post-entraînement simple et durable",
      ar: "روتين بروتين بعد التمرين سهل ويستمر معك",
    },
    excerpt: {
      en: "Build a routine around hydration, protein, and sleep instead of chasing complicated stacks.",
      fr: "Construisez une routine autour de l’hydratation, des protéines et du sommeil.",
      ar: "ابنِ روتينك حول الترطيب والبروتين والنوم بدلًا من التعقيد.",
    },
    category: { en: "Recovery", fr: "Récupération", ar: "الاستشفاء" },
    readingTime: "5 min",
    publishedAt: "2026-03-10",
    heroImage: clearWheyImage,
    sections: [
      {
        heading: {
          en: "Hydrate first",
          fr: "Hydratez d’abord",
          ar: "ابدأ بالترطيب",
        },
        paragraphs: {
          en: [
            "Water and electrolytes help you recover faster than a complicated supplement plan. Start with the basics before adding more products.",
            "In hot weather, that becomes even more important for Algerian athletes training indoors or outdoors.",
          ],
          fr: [
            "L’eau et les électrolytes aident plus que des compléments compliqués. Commencez par la base.",
            "Par forte chaleur, c’est encore plus important pour les sportifs en Algérie.",
          ],
          ar: [
            "الماء والإلكتروليتات يساعدان في الاستشفاء أكثر من خطة مكملات معقدة. ابدأ بالأساسيات أولًا.",
            "وفي الطقس الحار يصبح هذا أهم للرياضيين في الجزائر.",
          ],
        },
      },
      {
        heading: {
          en: "Take protein when it is convenient",
          fr: "Prenez votre protéine au moment pratique",
          ar: "خذ البروتين في الوقت المناسب لك",
        },
        paragraphs: {
          en: [
            "The best time is the one you can repeat. For many people, that means right after training or with breakfast.",
            "If night hunger is your problem, a slower protein before bed can help keep the routine smooth.",
          ],
          fr: [
            "Le meilleur moment est celui que vous pouvez répéter. Pour beaucoup, c’est juste après l’entraînement ou au petit déjeuner.",
            "Si la faim nocturne est un problème, une protéine plus lente avant le coucher peut aider.",
          ],
          ar: [
            "أفضل وقت هو الوقت الذي يمكنك الالتزام به. بالنسبة لكثيرين يكون ذلك بعد التمرين مباشرة أو مع الفطور.",
            "إذا كانت الشهية ليلًا مشكلة، فقد يساعد بروتين أبطأ قبل النوم.",
          ],
        },
      },
      {
        heading: {
          en: "Sleep is the real recovery product",
          fr: "Le sommeil est le vrai produit de récupération",
          ar: "النوم هو منتج الاستشفاء الحقيقي",
        },
        paragraphs: {
          en: [
            "No protein powder replaces enough sleep. Keep the stack simple, keep the meals steady, and use supplements only to support a routine that already works.",
          ],
          fr: [
            "Aucune poudre ne remplace un bon sommeil. Gardez une routine simple et utilisez les compléments pour soutenir ce qui fonctionne déjà.",
          ],
          ar: [
            "لا شيء يعوض النوم الكافي. اجعل النظام بسيطًا واستخدم المكملات فقط لدعم روتين ناجح أصلًا.",
          ],
        },
      },
    ],
    takeaways: {
      en: [
        "Hydration comes first.",
        "Protein timing should be practical.",
        "Sleep drives real recovery.",
      ],
      fr: [
        "L’hydratation passe avant tout.",
        "Le timing des protéines doit rester pratique.",
        "Le sommeil fait la vraie récupération.",
      ],
      ar: [
        "الترطيب يأتي أولًا.",
        "توقيت البروتين يجب أن يكون عمليًا.",
        "النوم هو أساس الاستشفاء الحقيقي.",
      ],
    },
    relatedProducts: ["clear-whey-isolate", "gold-standard-whey", "syntha-6"],
  },
];

export const metrics = [
  { value: "48h", label: "Delivery in major wilayas" },
  { value: "DA", label: "Cash on delivery" },
  { value: "4.8/5", label: "Buyer rating" },
];

export const benefits = [
  "Real brand names and clearer whey categories for faster comparison.",
  "Local buying flow shaped around Algerian delivery habits and payment trust.",
  "Readable article pages that explain the choice instead of shouting sales copy.",
  "A simple static data source so products and articles are easy to maintain.",
];

export const faqs = [
  {
    question: {
      en: "Do you ship across Algeria?",
      fr: "Livrez-vous partout en Algérie ?",
      ar: "هل يتم التوصيل إلى كل الجزائر؟",
    },
    answer: {
      en: "Yes. The checkout is designed for Algerian buyers with wilaya selection, contact phone, and delivery notes.",
      fr: "Oui. Le checkout est pensé pour les acheteurs algériens avec choix de wilaya et téléphone de contact.",
      ar: "نعم. صفحة الدفع مصممة للزبائن في الجزائر مع اختيار الولاية ورقم الهاتف وملاحظات التوصيل.",
    },
  },
  {
    question: {
      en: "Can I use this site for cash on delivery?",
      fr: "Peut-on payer à la livraison ?",
      ar: "هل يمكن الدفع عند الاستلام؟",
    },
    answer: {
      en: "Yes. The cart and checkout flow are set up around local trust-first purchasing habits.",
      fr: "Oui. Le panier et le checkout suivent une logique de confiance et de livraison locale.",
      ar: "نعم. السلة وصفحة الدفع مبنيتان على نمط الشراء المحلي القائم على الثقة.",
    },
  },
  {
    question: {
      en: "Are the articles long enough to read?",
      fr: "Les articles sont-ils vraiment lisibles ?",
      ar: "هل المقالات فعلاً قابلة للقراءة؟",
    },
    answer: {
      en: "Yes. Each article now has a dedicated route with clear sections, readable spacing, and full paragraphs.",
      fr: "Oui. Chaque article a maintenant sa propre page avec sections claires et paragraphes complets.",
      ar: "نعم. كل مقال لديه صفحة خاصة مع أقسام واضحة ومسافات مريحة وفقرات كاملة.",
    },
  },
];

export const wilayas = [
  "Alger",
  "Oran",
  "Constantine",
  "Annaba",
  "Sétif",
  "Blida",
  "Tlemcen",
  "Bejaia",
  "Batna",
  "Mostaganem",
];
