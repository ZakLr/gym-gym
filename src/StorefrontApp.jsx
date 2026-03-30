import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  articles,
  benefits,
  heroProducts,
  products,
  promoSlides,
  faqs,
  wilayas,
} from "./data/storeData";

const copy = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      articles: "Articles",
      checkout: "Checkout",
      cart: "Cart",
      search: "Search products...",
    },
    hero: {
      eyebrow: "Premium sports nutrition for Algeria",
      title:
        "Original quality products with the best service.",
      text: "Shop real whey proteins, mass gainers, and recovery essentials with clear product positioning, local trust signals, and a buying experience tailored to Algerian shoppers.",
      ctaShop: "Shop products",
      ctaArticles: "Read articles",
      ctaCheckout: "Go to checkout",
    },
    sections: {
      newArrivals: "New arrivals",
      newArrivalsTitle:
        "Fresh drops with strong demand and high search interest.",
      newArrivalsText:
        "A compact launch row for recent additions that are ready to sell.",
      testimonials: "Testimonials",
      testimonialsTitle: "What real buyers want to know before they order.",
      testimonialsText:
        "Short trust cues that make the store feel credible, clear, and ready to convert.",
      bestSellers: "Best sellers",
      catalog: "All products",
      spotlight: "Second product showcase",
      spotlightTitle:
        "More products your customers can compare before checkout.",
      spotlightText:
        "A second merch section that makes the catalog feel richer and easier to shop.",
      benefits: "Why the layout works",
      benefitsTitle:
        "Cleaner spacing, clearer choices, and less friction on mobile.",
      benefitsText:
        "The homepage now guides visitors from discovery to confidence to checkout.",
      articles: "Health articles",
      faq: "FAQ",
      faqTitle: "Fast answers to common buying questions.",
      faqText:
        "Delivery, payment, and product questions are grouped here to reduce hesitation.",
      ctaTitle: "Turn interest into orders with a clearer buying path.",
      ctaText:
        "Built for Algerian shoppers who want real products, readable details, and a friction-light purchase flow.",
    },
    filters: {
      search: "Search by product, brand, or goal",
      all: "All",
      category: "Category",
      goal: "Goal",
      reset: "Clear filters",
      sortBy: "Sort by product type",
      matchGoal: "Match products to training intent",
      panelTitle: "Filter overview",
      results: "Results",
      active: "Active",
      total: "Total",
      empty: "No filters active",
      categories: {
        "whey-isolate": "Isolate",
        "whey-blend": "Blend",
        "clear-whey": "Clear whey",
        "mass-gainer": "Mass gainer",
        recovery: "Recovery",
      },
      goals: {
        "lean-muscle": "Lean muscle",
        "daily-use": "Daily use",
        recovery: "Recovery",
        bulk: "Bulk",
      },
    },
    cart: {
      title: "Your stack",
      empty: "Your cart is empty.",
      subtotal: "Subtotal",
      checkout: "Proceed to checkout",
      close: "Close",
      remove: "Remove",
      each: "each",
    },
    articlesPanel: {
      title: "Read before you buy",
      subtitle:
        "Clear, readable guides that help shoppers choose the right whey, recovery, and mass-gainer products.",
      search: "Search articles",
      back: "Back to articles",
    },
    checkout: {
      title: "Checkout",
      subtitle:
        "Complete your order for delivery across Algeria with a simple local form.",
      empty: "Add products to your cart before placing an order.",
      formTitle: "Delivery details",
      orderTitle: "Order summary",
      paymentTitle: "Payment",
      paymentText: "Cash on delivery is the default flow for Algerian buyers.",
      confirm: "Place order",
      confirmed: "Your order has been prepared for review.",
      fields: {
        fullName: "Full name",
        phone: "Phone number",
        wilaya: "Wilaya",
        commune: "Commune",
        address: "Address",
        notes: "Delivery notes",
      },
    },
    labels: {
      add: "Add to cart",
      readMore: "Read more",
      viewProducts: "View products",
      viewArticles: "View articles",
      checkoutNow: "Checkout now",
      continueShopping: "Continue shopping",
      recommended: "Recommended products",
    },
    footer: {
      primary:
        "Built for Algerian buyers who want trusted whey products that are easy to compare and easy to order.",
      secondary:
        "Built with React, Vite, Tailwind CSS, Framer Motion, and React Router.",
      contactTitle: "Contact us",
      contactText:
        "Message us on social media for product guidance, stock questions, and ordering help.",
      socials: {
        instagram: "Instagram",
        facebook: "Facebook",
        whatsapp: "WhatsApp",
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      products: "Produits",
      articles: "Articles",
      checkout: "Paiement",
      cart: "Panier",
      search: "Rechercher des produits...",
    },
    hero: {
      eyebrow: "Nutrition sportive premium pour l’Algérie",
      title:
        "Produits Originaux de qualité avec un meilleur service",
      text: "Découvrez des whey, gainers et produits de récupération avec une présentation claire, rassurante et adaptée aux acheteurs algériens.",
      ctaShop: "Voir les produits",
      ctaArticles: "Lire les articles",
      ctaCheckout: "Aller au paiement",
    },
    sections: {
      newArrivals: "Nouveautés",
      newArrivalsTitle: "Nouveaux produits avec fort potentiel de vente.",
      newArrivalsText:
        "Une rangée compacte pour mettre en avant les dernières ajouts avant l’assortiment complet.",
      testimonials: "Témoignages",
      testimonialsTitle:
        "Ce que les vrais acheteurs veulent savoir avant de commander.",
      testimonialsText:
        "Des repères rapides qui rendent la boutique plus crédible et plus rassurante avant l’achat.",
      bestSellers: "Meilleures ventes",
      catalog: "Tous les produits",
      spotlight: "Deuxième vitrine produits",
      spotlightTitle: "D’autres produits à comparer avant le paiement.",
      spotlightText:
        "Une seconde section produits pour comparer plus facilement les usages, les styles et les besoins.",
      benefits: "Pourquoi la mise en page fonctionne",
      benefitsTitle:
        "Plus d’espace, des choix plus clairs et moins de friction sur mobile.",
      benefitsText:
        "La page d’accueil sépare maintenant mieux la découverte, la confiance et le parcours produit.",
      articles: "Articles santé",
      faq: "FAQ",
      faqTitle: "Réponses rapides aux questions qui bloquent l’achat.",
      faqText:
        "Les questions les plus fréquentes sur la livraison, le paiement et les produits sont réunies ici.",
      ctaTitle:
        "Transformez la découverte en commande avec un chemin plus clair.",
      ctaText:
        "Pensé pour les acheteurs algériens qui veulent des produits réels, des infos lisibles et un achat rapide.",
    },
    filters: {
      search: "Rechercher par produit, marque ou objectif",
      all: "Tout",
      category: "Catégorie",
      goal: "Objectif",
      reset: "Effacer les filtres",
      sortBy: "Trier par type de produit",
      matchGoal: "Adapter les produits à l’objectif d’entraînement",
      panelTitle: "Vue des filtres",
      results: "Résultats",
      active: "Actifs",
      total: "Total",
      empty: "Aucun filtre actif",
      categories: {
        "whey-isolate": "Isolat",
        "whey-blend": "Blend",
        "clear-whey": "Clear whey",
        "mass-gainer": "Gainer",
        recovery: "Récupération",
      },
      goals: {
        "lean-muscle": "Masse sèche",
        "daily-use": "Usage quotidien",
        recovery: "Récupération",
        bulk: "Prise de masse",
      },
    },
    cart: {
      title: "Votre stack",
      empty: "Le panier est vide.",
      subtotal: "Sous-total",
      checkout: "Passer au paiement",
      close: "Fermer",
      remove: "Supprimer",
      each: "l'unité",
    },
    articlesPanel: {
      title: "Lire avant d’acheter",
      subtitle:
        "Des guides clairs pour mieux choisir sa whey, sa récupération et son gainer.",
      search: "Rechercher des articles",
      back: "Retour aux articles",
    },
    checkout: {
      title: "Paiement",
      subtitle:
        "Finalisez votre commande pour une livraison partout en Algérie avec un formulaire simple.",
      empty: "Ajoutez des produits au panier avant de passer la commande.",
      formTitle: "Coordonnées de livraison",
      orderTitle: "Résumé de la commande",
      paymentTitle: "Paiement",
      paymentText:
        "Le paiement à la livraison est le parcours par défaut pour les acheteurs algériens.",
      confirm: "Valider la commande",
      confirmed: "Votre commande a été préparée pour vérification.",
      fields: {
        fullName: "Nom complet",
        phone: "Numéro de téléphone",
        wilaya: "Wilaya",
        commune: "Commune",
        address: "Adresse",
        notes: "Notes de livraison",
      },
    },
    labels: {
      add: "Ajouter au panier",
      readMore: "Lire plus",
      viewProducts: "Voir les produits",
      viewArticles: "Voir les articles",
      checkoutNow: "Paiement",
      continueShopping: "Continuer mes achats",
      recommended: "Produits recommandés",
    },
    footer: {
      primary:
        "Conçu pour les acheteurs algériens qui veulent des whey fiables, faciles à comparer et simples à commander.",
      secondary:
        "Construit avec React, Vite, Tailwind CSS, Framer Motion et React Router.",
      contactTitle: "Nous contacter",
      contactText:
        "Écrivez-nous sur les réseaux sociaux pour des conseils produit, des questions de stock et de l’aide à la commande.",
      socials: {
        instagram: "Instagram",
        facebook: "Facebook",
        whatsapp: "WhatsApp",
      },
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      products: "المنتجات",
      articles: "المقالات",
      checkout: "الدفع",
      cart: "السلة",
      search: "ابحث عن المنتجات...",
    },
    hero: {
      eyebrow: "تغذية رياضية مميزة للجزائر",
      title:
        "منتجات أصلية ذات جودة عالية مع أفضل خدمة.",
      text: "اكتشف بروتينات الواي والجينر ومنتجات الاستشفاء مع عرض واضح، وعناصر ثقة محلية، وتجربة شراء تناسب المشترين في الجزائر.",
      ctaShop: "تسوق المنتجات",
      ctaArticles: "اقرأ المقالات",
      ctaCheckout: "اذهب إلى الدفع",
    },
    sections: {
      newArrivals: "الوصولات الجديدة",
      newArrivalsTitle: "إضافات جديدة تحمل فرصًا قوية للبيع.",
      newArrivalsText: "صف مختصر يبرز أحدث الإضافات قبل عرض المجموعة الكاملة.",
      testimonials: "آراء العملاء",
      testimonialsTitle: "ما يريد المشترون الحقيقيون معرفته قبل الطلب.",
      testimonialsText:
        "إشارات ثقة قصيرة تجعل المتجر أوضح وأكثر إقناعًا قبل الشراء.",
      bestSellers: "الأكثر مبيعًا",
      catalog: "جميع المنتجات",
      spotlight: "واجهة منتجات ثانية",
      spotlightTitle: "منتجات إضافية للمقارنة قبل الدفع.",
      spotlightText:
        "قسم منتجات ثانٍ يمنح الزائر طريقة أخرى للمقارنة بين الاستخدامات والأنماط والاحتياجات.",
      benefits: "لماذا تعمل هذه الصفحة",
      benefitsTitle: "مسافات أفضل، قرارات أوضح، وضغط أقل على الهاتف.",
      benefitsText:
        "الصفحة الرئيسية الآن تقسم الاكتشاف والثقة وتصفح المنتجات إلى أقسام أوضح.",
      articles: "مقالات صحية",
      faq: "الأسئلة الشائعة",
      faqTitle: "إجابات سريعة على الأسئلة التي تؤخر الطلب.",
      faqText:
        "تم تجميع أكثر الأسئلة شيوعًا حول التوصيل والدفع والمحتوى في هذا القسم.",
      ctaTitle: "حوّل الاهتمام إلى طلبات بمسار شراء أوضح.",
      ctaText:
        "مصمم للمشترين في الجزائر الذين يريدون منتجات حقيقية ومعلومات مقروءة وشراء سريع.",
    },
    filters: {
      search: "البحث حسب المنتج أو الماركة أو الهدف",
      all: "الكل",
      category: "الفئة",
      goal: "الهدف",
      reset: "مسح الفلاتر",
      sortBy: "فرز حسب نوع المنتج",
      matchGoal: "مطابقة المنتجات مع هدف التمرين",
      panelTitle: "نظرة على الفلاتر",
      results: "النتائج",
      active: "المفعلة",
      total: "الإجمالي",
      empty: "لا توجد فلاتر مفعلة",
      categories: {
        "whey-isolate": "معزول",
        "whey-blend": "خليط",
        "clear-whey": "واي شفاف",
        "mass-gainer": "جينر",
        recovery: "استشفاء",
      },
      goals: {
        "lean-muscle": "عضلات صافية",
        "daily-use": "استخدام يومي",
        recovery: "استشفاء",
        bulk: "زيادة كتلة",
      },
    },
    cart: {
      title: "مجموعتك",
      empty: "السلة فارغة.",
      subtotal: "المجموع الفرعي",
      checkout: "الانتقال إلى الدفع",
      close: "إغلاق",
      remove: "إزالة",
      each: "للوحدة",
    },
    articlesPanel: {
      title: "اقرأ قبل الشراء",
      subtitle:
        "أدلة أوضح تساعدك على اختيار الواي والاستشفاء والجينر بشكل أفضل.",
      search: "ابحث في المقالات",
      back: "العودة إلى المقالات",
    },
    checkout: {
      title: "الدفع",
      subtitle: "أكمل طلبك بتوصيل داخل الجزائر مع نموذج بسيط وواضح.",
      empty: "أضف منتجات إلى السلة قبل إتمام الطلب.",
      formTitle: "بيانات التوصيل",
      orderTitle: "ملخص الطلب",
      paymentTitle: "الدفع",
      paymentText:
        "الدفع عند الاستلام هو المسار الافتراضي للمشترين في الجزائر.",
      confirm: "تأكيد الطلب",
      confirmed: "تم تجهيز طلبك للمراجعة.",
      fields: {
        fullName: "الاسم الكامل",
        phone: "رقم الهاتف",
        wilaya: "الولاية",
        commune: "البلدية",
        address: "العنوان",
        notes: "ملاحظات التوصيل",
      },
    },
    labels: {
      add: "أضف إلى السلة",
      readMore: "اقرأ المزيد",
      viewProducts: "عرض المنتجات",
      viewArticles: "عرض المقالات",
      checkoutNow: "الدفع الآن",
      continueShopping: "متابعة التسوق",
      recommended: "منتجات مقترحة",
    },
    footer: {
      primary:
        "مصمم للمشترين الجزائريين الذين يريدون منتجات واي موثوقة وسهلة المقارنة وسهلة الطلب.",
      secondary:
        "مبني بـ React وVite وTailwind CSS وFramer Motion وReact Router.",
      contactTitle: "تواصل معنا",
      contactText:
        "تواصل عبر الشبكات الاجتماعية لأسئلة المنتجات، المخزون، والمساعدة في الطلب.",
      socials: {
        instagram: "إنستغرام",
        facebook: "فيسبوك",
        whatsapp: "واتساب",
      },
    },
  },
};

const StoreContext = createContext(null);

const normalizeText = (value) =>
  (value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
const getLocalized = (value, lang) => value?.[lang] ?? value?.en ?? "";
const getLocale = (language) =>
  language === "ar" ? "ar-DZ" : language === "en" ? "en-DZ" : "fr-DZ";
const formatPrice = (price, language) =>
  `${new Intl.NumberFormat(getLocale(language)).format(price)} ${language === "ar" ? "دج" : "DA"}`;
const formatDate = (value, language) =>
  new Intl.DateTimeFormat(getLocale(language), {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div
      className={`mx-auto max-w-3xl ${align === "right" ? "text-right" : "text-center"}`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#f2e01d]/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProductCard({ product, lang, onAdd }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
    >
      {/* Responsive Image Height: smaller on mobile, fixed on desktop */}
      <div className="relative h-48 sm:h-64 shrink-0 overflow-hidden">
        <img
          src={product.image}
          alt={getLocalized(product.name, lang)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b12] to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          {/* Responsive Title: text-lg on mobile, text-xl on sm+, text-2xl on lg+ */}
          <h3 className="text-lg font-bold text-white sm:text-xl lg:text-2xl transition-colors group-hover:text-[#f2e01d]">
            {getLocalized(product.name, lang)}
          </h3>
          
          {/* Responsive Description: text-xs on mobile, text-sm on sm+ */}
          <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:mt-3 sm:text-sm">
            {getLocalized(product.description, lang)}
          </p>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5 sm:mt-8">
          {/* Responsive Price: Already has your sm:text-xl fix */}
          <span className="text-md font-bold text-white sm:text-xl">
            {formatPrice(product.price, lang)}
          </span>
          
          <button
            onClick={() => onAdd(product)}
            className="rounded-xl bg-[#f2e01d] px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:bg-lime-300 sm:px-6 sm:py-2.5 sm:text-sm active:scale-95"
          >
            {copy[lang].labels.add}
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ArticleCard({ article, lang }) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_20px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.heroImage}
          alt={getLocalized(article.title, lang)}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,11,18,0.92))]" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
          <span>{getLocalized(article.category, lang)}</span>
          <span>{formatDate(article.publishedAt, lang)}</span>
        </div>
        <h3 className="text-2xl font-semibold text-white">
          {getLocalized(article.title, lang)}
        </h3>
        <p className="text-sm leading-7 text-slate-300">
          {getLocalized(article.excerpt, lang)}
        </p>
        <span className="inline-flex text-sm font-semibold text-lime-200">
          {copy[lang].labels.readMore}
        </span>
      </div>
    </Link>
  );
}

function CompactProductCard({ product, lang, onAdd }) {
  return (
    <div className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <img
        src={product.image}
        alt={getLocalized(product.name, lang)}
        className="h-20 w-20 rounded-2xl object-cover"
      />
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="font-semibold text-white">
              {getLocalized(product.name, lang)}
            </h4>
            <p className="mt-1 text-sm text-slate-400">
              {formatPrice(product.price, lang)}
            </p>
          </div>
          <button
            onClick={() => onAdd(product)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
          >
            {copy[lang].labels.add}
          </button>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {getLocalized(product.description, lang)}
        </p>
      </div>
    </div>
  );
}

function useStore() {
  return useContext(StoreContext);
}

function Layout() {
  const {
    language,
    setLanguage,
    currentCopy,
    isRTL,
    searchTerm,
    setSearchTerm,
    cartCount,
    cartOpen,
    setCartOpen,
    cart,
    cartTotal,
    updateQuantity,
  } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navClass = ({ isActive }) =>
    [
      "transition hover:text-white",
      isActive ? "text-white" : "text-slate-300",
    ].join(" ");

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className="relative overflow-x-hidden bg-[#f2e01d] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 
  /* Mobile: Lower Opacity Gradients */
  bg-[radial-gradient(circle_at_top_left,rgba(156,143,2,0.4),_transparent_6%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.05),_transparent_17%),linear-gradient(180deg,_#08111f_0%,_#050b12_100%)] 
  
  /* Desktop (md and up): Original Full Opacity */
  md:bg-[radial-gradient(circle_at_top_left,#f2e01d,_transparent_9%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.14),_transparent_17%),linear-gradient(180deg,_#08111f_0%,_#050b12_100%)]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)] opacity-60 blur-3xl" />

      <div className="fixed top-0 z-40 w-full">
        <header className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 border-b border-white/10 bg-[#06111d] px-6 py-4  lg:px-8">
          <button onClick={() => navigate("/")} className="text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#f2e01d]">
              Adam NutriGym
            </p>
          </button>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <NavLink to="/" className={navClass} end>
              {currentCopy.nav.home}
            </NavLink>
            <NavLink to="/products" className={navClass}>
              {currentCopy.nav.products}
            </NavLink>
            <NavLink to="/articles" className={navClass}>
              {currentCopy.nav.articles}
            </NavLink>
            <NavLink to="/checkout" className={navClass}>
              {currentCopy.nav.checkout}
            </NavLink>
          </nav>
          <div className="flex items-center gap-2 md:flex-1 md:justify-end">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                navigate("/products");
              }}
              className="hidden flex-1 md:block md:max-w-[26rem]"
            >
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={currentCopy.nav.search}
                className={`w-full rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white placeholder:text-slate-400 outline-none backdrop-blur-xl ${isRTL ? "text-right" : ""}`}
              />
            </form>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="hidden rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white outline-none backdrop-blur-xl md:block"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
            <button
              onClick={() => setCartOpen((value) => !value)}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/15 md:px-5"
            >
              {currentCopy.nav.cart} ({cartCount})
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label={currentCopy.nav.home}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/15 md:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </header>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="border-b border-white/10 bg-[#06111d]/96 px-6 py-5 backdrop-blur-2xl md:hidden lg:px-8"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  navigate("/products");
                }}
              >
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={currentCopy.nav.search}
                  className={`w-full rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ${isRTL ? "text-right" : ""}`}
                />
              </form>
              <div className="mt-4 grid gap-2 text-sm font-medium text-white">
                <NavLink
                  to="/"
                  className={navClass}
                  end
                  onClick={() => setMenuOpen(false)}
                >
                  {currentCopy.nav.home}
                </NavLink>
                <NavLink
                  to="/products"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {currentCopy.nav.products}
                </NavLink>
                <NavLink
                  to="/articles"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {currentCopy.nav.articles}
                </NavLink>
                <NavLink
                  to="/checkout"
                  className={navClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {currentCopy.nav.checkout}
                </NavLink>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-4 w-full rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm text-white outline-none"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main className="relative z-10">
        <Outlet />
      </main>

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          >
            <motion.aside
              initial={{ x: isRTL ? -360 : 360 }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? -360 : 360 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className={`absolute top-0 flex h-full w-full max-w-md flex-col border-white/10 bg-[#08111f] p-6 shadow-2xl ${isRTL ? "left-0 border-r" : "right-0 border-l"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3">
                <div className={isRTL ? "text-right" : ""}>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#f2e01d]/80">
                    {currentCopy.nav.cart}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {currentCopy.cart.title}
                  </h3>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
                >
                  {currentCopy.cart.close}
                </button>
              </div>
              <div className="mt-8 flex-1 space-y-4 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-slate-300">
                    {currentCopy.cart.empty}
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
                    >
                      <img
                        src={item.image}
                        alt={getLocalized(item.name, language)}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-semibold text-white">
                              {getLocalized(item.name, language)}
                            </h4>
                            <p className="mt-1 text-sm text-slate-400">
                              {formatPrice(item.price, language)}{" "}
                              {currentCopy.cart.each}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-lime-200">
                            {formatPrice(item.price * item.quantity, language)}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2 text-white"
                            >
                              -
                            </button>
                            <span className="min-w-6 text-center text-sm text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2 text-white"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, -item.quantity)
                            }
                            className="text-sm text-slate-400 transition hover:text-white"
                          >
                            {currentCopy.cart.remove}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{currentCopy.cart.subtotal}</span>
                  <span className="text-xl font-semibold text-white">
                    {formatPrice(cartTotal, language)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setCartOpen(false);
                    navigate("/checkout");
                  }}
                  className="mt-5 w-full rounded-full bg-[#f2e01d] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
                >
                  {currentCopy.cart.checkout}
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
            <div className={isRTL ? "text-right" : ""}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f2e01d]/80">
                {currentCopy.footer.contactTitle}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {currentCopy.footer.primary}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                {currentCopy.footer.contactText}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {currentCopy.footer.socials.instagram}
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {currentCopy.footer.socials.facebook}
                </a>
                <a
                  href="https://wa.me/213000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {currentCopy.footer.socials.whatsapp}
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
              <p className="text-sm font-semibold text-white">
                {currentCopy.footer.secondary}
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <div>Instagram: @adamnutrigym</div>
                <div>Facebook: Adam NutriGym</div>
                <div>WhatsApp: +213 00 00 00 000</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import gymguyPic from "./data/gym-guy.png";  
function HomePage() {
  const { language, currentCopy, isRTL, addToCart, setArticleSearch } =
    useStore();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const newArrivalProducts = useMemo(
    () => products.filter((product) => !product.featured).slice(0, 4),
    [],
  );
  const bestSellingProducts = useMemo(() => products.slice(0, 12), []);
  const spotlightProducts = useMemo(
    () => products.filter((product) => !product.featured).slice(0, 4),
    [],
  );
  const featuredArticles = useMemo(() => articles.slice(0, 4), []);
  const testimonials = [
    {
      name: {
        en: "Yacine, Algiers",
        fr: "Yacine, Alger",
        ar: "ياسين، الجزائر العاصمة",
      },
      role: {
        en: "Cutting phase buyer",
        fr: "Achat en sèche",
        ar: "مشتري فترة التنشيف",
      },
      quote: {
        en: "The product pages are finally easy to compare, and the checkout feels clear for local delivery.",
        fr: "Les pages produits sont enfin faciles à comparer, et le checkout reste clair pour la livraison locale.",
        ar: "صفحات المنتجات أصبحت أسهل للمقارنة، وصفحة الدفع واضحة للتوصيل المحلي.",
      },
      rating: "5.0",
    },
    {
      name: {
        en: "Sara, Oran",
        fr: "Sara, Oran",
        ar: "سارة، وهران",
      },
      role: {
        en: "Daily whey buyer",
        fr: "Acheteuse whey quotidienne",
        ar: "مستخدمة واي يومية",
      },
      quote: {
        en: "The new arrivals and best sellers sections make the homepage feel much more useful on my phone.",
        fr: "Les nouveautés et les meilleures ventes rendent la page d’accueil bien plus utile sur téléphone.",
        ar: "قسم الوصولات الجديدة والأكثر مبيعًا جعل الصفحة الرئيسية أكثر فائدة على الهاتف.",
      },
      rating: "4.9",
    },
    {
      name: {
        en: "Nabil, Constantine",
        fr: "Nabil, Constantine",
        ar: "نبيل، قسنطينة",
      },
      role: {
        en: "Mass gainer customer",
        fr: "Client gainer",
        ar: "زبون جينر",
      },
      quote: {
        en: "The content feels more trustworthy now, especially the articles and the product breakdowns.",
        fr: "Le contenu paraît plus crédible maintenant, surtout les articles et les fiches produits.",
        ar: "المحتوى أصبح أكثر ثقة، خصوصًا المقالات وتقسيم المنتجات.",
      },
      rating: "4.8",
    },
  ];
  const heroStats = [
    {
      value: "48h",
      label: {
        en: "Delivery",
        fr: "Livraison",
        ar: "التوصيل",
      },
    },
    {
      value: "Paiement",
      label: {
        en: "Cash on delivery",
        fr: "Paiement à la livraison",
        ar: "الدفع عند الاستلام",
      },
    },
    {
      value: "8+",
      label: {
        en: "Products",
        fr: "Produits",
        ar: "منتجات",
      },
    },
  ];

    
  return (
    <>
      <section className="mx-auto mt-10 max-w-7xl px-4 pb-6 pt-4 sm:hidden mt-24">
        <div className="min-h-[200px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4 min-h-[400px]">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-[#f2e01d]/80 ">
              {currentCopy.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white pt-4 pb-2 text-center">
              {currentCopy.hero.title}
            </h1>
            {/* <p className="mt-4 text-sm leading-7 text-slate-300 pb-6">
              {currentCopy.hero.text}
            </p> */}
            <img
              src={gymguyPic}
              alt={getLocalized(promoSlides[0].title, language)}
              className="h-120 w-full object-cover rounded-xl mt-4"
            />
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                onClick={() => navigate("/products")}
                className="rounded-full bg-[#f2e01d] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
              >
                {currentCopy.hero.ctaShop}
              </button>
              <button
                onClick={() => {
                  setArticleSearch("");
                  navigate("/articles");
                }}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {currentCopy.hero.ctaArticles}
              </button>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#f2e01d]/20 bg-[#f2e01d]/10 px-4 py-3 text-sm font-semibold text-lime-100 transition hover:bg-[#f2e01d]/15"
            >
              {currentCopy.hero.ctaCheckout}
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["48h", "Delivery"],
              ["Paiement", "Cash"],
              ["24+", "Produits"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 p-3 text-center"
              >
                <div className="text-sm font-semibold text-white">{value}</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/40">
            <img
              src={promoSlides[0].image}
              alt={getLocalized(promoSlides[0].title, language)}
              className="h-48 w-full object-cover"
            />
            <div className="space-y-2 p-4">
              <h2 className="text-lg font-semibold text-white">
                {getLocalized(promoSlides[0].title, language)}
              </h2>
              <p className="text-sm leading-6 text-slate-300">
                {getLocalized(promoSlides[0].text, language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 hidden grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:grid sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={isRTL ? "max-w-2xl text-right" : "max-w-2xl"}
        >
          <span className="inline-flex rounded-full border border-[#f2e01d]/20 bg-[#f2e01d]/10 px-4 py-2 text-sm font-medium text-lime-100 backdrop-blur-xl">
            {currentCopy.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            {currentCopy.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            {currentCopy.hero.text}
          </p>
          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${isRTL ? "sm:justify-end" : ""}`}
          >
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center justify-center rounded-full bg-[#f2e01d] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200 sm:flex-1 lg:flex-none"
            >
              {currentCopy.hero.ctaShop}
            </button>
            <button
              onClick={() => {
                setArticleSearch("");
                navigate("/articles");
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:flex-1 lg:flex-none"
            >
              {currentCopy.hero.ctaArticles}
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="inline-flex items-center justify-center rounded-full border border-[#f2e01d]/20 bg-[#f2e01d]/10 px-6 py-3 text-sm font-semibold text-lime-100 transition hover:bg-[#f2e01d]/15 sm:flex-1 lg:flex-none"
            >
              {currentCopy.hero.ctaCheckout}
            </button>
          </div>
          <div className="mt-10 hidden gap-4 md:grid md:grid-cols-3">
            {heroStats.map((metric) => (
              <div
                key={metric.value}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              >
                <div className="text-2xl font-semibold text-white">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">
                  {getLocalized(metric.label, language)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 top-16 h-32 w-32 rounded-full bg-[#f2e01d]/20 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-5">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/40">
              <img
                src={promoSlides[0].image}
                alt={getLocalized(promoSlides[0].title, language)}
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="space-y-3 p-4 sm:p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-lime-100/70">
                  {getLocalized(promoSlides[0].title, language)}
                </p>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {getLocalized(promoSlides[0].title, language)}
                </h3>
                <p className="text-sm leading-6 text-slate-200">
                  {getLocalized(promoSlides[0].text, language)}
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {heroProducts.map((product) => (
                <div
                  key={product.slug}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 p-3"
                >
                  <img
                    src={product.image}
                    alt={getLocalized(product.name, language)}
                    className="h-28 w-full rounded-[1rem] object-cover"
                  />
                  <div className="mt-3 text-sm font-semibold text-white">
                    {getLocalized(product.name, language)}
                  </div>
                  <div className="mt-1 text-xs text-slate-300">
                    {getLocalized(product.highlight, language)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 md:grid-cols-3">
          {promoSlides.map((slide, index) => (
            <motion.div
              key={slide.id}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-4"
            >
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
                {index + 1}
              </div>
              <div className="mt-3 text-lg font-semibold text-white">
                {getLocalized(slide.title, language)}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-300">
                {getLocalized(slide.text, language)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow={currentCopy.sections.newArrivals}
          title={currentCopy.sections.newArrivalsTitle}
          description={currentCopy.sections.newArrivalsText}
        />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {newArrivalProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-4"
            >
              <img
                src={product.image}
                alt={getLocalized(product.name, language)}
                className="h-32 w-full rounded-[1rem] object-cover sm:h-40"
              />
              <div className="mt-3 space-y-1">
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[#f2e01d]/80">
                  {getLocalized(product.badge, language)}
                </div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {getLocalized(product.name, language)}
                </h3>
                <p className="text-xs text-slate-400 sm:text-sm">
                  {formatPrice(product.price, language)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow={currentCopy.sections.bestSellers}
          title={currentCopy.sections.bestSellers}
          description={currentCopy.sections.catalog}
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 xl:grid-cols-4 lg:mt-14">
          {bestSellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={language}
              onAdd={addToCart}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <SectionHeading
          eyebrow={currentCopy.sections.testimonials}
          title={currentCopy.sections.testimonialsTitle}
          description={currentCopy.sections.testimonialsText}
        />

        {/* Increased gap and changed to columns for a more modern 'masonry' feel if lengths vary */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={getLocalized(testimonial.name, language)}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#f2e01d]/30 hover:bg-white/[0.12]"
            >
              {/* Quote Icon - Adds visual interest */}
              <div className="absolute top-6 right-8 text-4xl font-serif text-[#f2e01d]/20 group-hover:text-[#f2e01d]/40 transition-colors">
                ”
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  {/* Star Badge - Refined styling */}
                  <div className="flex items-center gap-1 rounded-full bg-[#f2e01d]/10 px-2.5 py-0.5 text-xs font-bold tracking-wide text-[#f2e01d] border border-[#f2e01d]/20">
                    <span>{testimonial.rating}</span>
                    <span className="text-[10px]">★</span>
                  </div>
                </div>

                <blockquote className="mt-6">
                  <p className="text-base leading-relaxed text-slate-300 italic group-hover:text-white transition-colors">
                    “{getLocalized(testimonial.quote, language)}”
                  </p>
                </blockquote>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {/* Optional: Placeholder for an avatar if you add them later */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#f2e01d] to-emerald-500 p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#08111f] text-xs font-bold text-white">
                    {getLocalized(testimonial.name, language).charAt(0)}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {getLocalized(testimonial.name, language)}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {getLocalized(testimonial.role, language)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow={currentCopy.sections.spotlight}
          title={currentCopy.sections.spotlightTitle}
          description={currentCopy.sections.spotlightText}
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <motion.article
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="grid h-full gap-0 lg:grid-cols-[0.88fr_1.12fr]">
              <img
                src={spotlightProducts[0].image}
                alt={getLocalized(spotlightProducts[0].name, language)}
                className="h-60 w-full object-cover sm:h-72 lg:h-full"
              />
              <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#f2e01d]/70">
                    {getLocalized(spotlightProducts[0].badge, language)}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {getLocalized(spotlightProducts[0].name, language)}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                    {getLocalized(spotlightProducts[0].description, language)}
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3">
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      Protein
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {spotlightProducts[0].protein}g
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3">
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      Servings
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {spotlightProducts[0].servings}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3">
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {currentCopy.cart.subtotal}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {formatPrice(spotlightProducts[0].price, language)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/products")}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#f2e01d] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200 sm:w-auto"
                >
                  {currentCopy.labels.viewProducts}
                </button>
              </div>
            </div>
          </motion.article>
          <div className="grid gap-4">
            {spotlightProducts.slice(1).map((product) => (
              <CompactProductCard
                key={product.id}
                product={product}
                lang={language}
                onAdd={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow={currentCopy.sections.articles}
          title={currentCopy.articlesPanel.title}
          description={currentCopy.articlesPanel.subtitle}
          align={isRTL ? "right" : "center"}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4 lg:mt-12">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} lang={language} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <SectionHeading
          eyebrow={currentCopy.sections.faq}
          title={currentCopy.sections.faqTitle}
          description={currentCopy.sections.faqText}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Side: Sticky Info Panel */}
          <div className="lg:sticky lg:top-24 h-fit space-y-6">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-xl sm:p-10">
              {/* Decorative background glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 bg-[#f2e01d]/10 blur-[50px]" />

              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#f2e01d]">
                Buying guide
              </p>
              <h3 className="mt-6 text-3xl font-bold tracking-tight text-white xl:text-5xl">
                Answers that help you{" "}
                <span className="text-[#f2e01d]">buy faster</span>.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-slate-400">
                {currentCopy.sections.faqText}
              </p>

              {/* Payment Highlight Box */}
              <div className="mt-10 flex items-start gap-4 rounded-2xl border border-[#f2e01d]/20 bg-[#f2e01d]/5 p-5 transition-colors hover:bg-[#f2e01d]/10">
                <div className="flex-shrink-0 text-[#f2e01d]">
                  {/* Simple Credit Card Icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wide">
                    {currentCopy.checkout.paymentTitle}
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    {currentCopy.checkout.paymentText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: FAQ Grid */}
          <div className="grid gap-4 sm:grid-cols-1">
            {faqs.map((faq, index) => (
              <div
                key={getLocalized(faq.question, language)}
                className="group relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-2xl"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#f2e01d]/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px w-8 bg-white/10 group-hover:w-12 transition-all group-hover:bg-[#f2e01d]/50" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-lime-50 transition-colors">
                      {getLocalized(faq.question, language)}
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                      {getLocalized(faq.answer, language)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section: "The Float" */}
        <div className="mt-24 relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#0a0f18] p-12 text-center shadow-2xl">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(163,230,53,0.05)_0%,_transparent_70%)]" />

          <div className="relative z-10">
            <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              {currentCopy.sections.ctaTitle}
            </h3>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
              {currentCopy.sections.ctaText}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/products")}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#f2e01d] px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:bg-[#f2e01d] active:scale-95"
              >
                {currentCopy.labels.viewProducts}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
              >
                {currentCopy.labels.checkoutNow}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductsPage() {
  const { language, currentCopy, isRTL, searchTerm, setSearchTerm, addToCart } =
    useStore();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeGoal, setActiveGoal] = useState("all");
  const categoryOptions = useMemo(
    () => Array.from(new Set(products.map((product) => product.categoryKey))),
    [],
  );
  const goalOptions = useMemo(
    () => Array.from(new Set(products.map((product) => product.goalKey))),
    [],
  );
  const filteredProducts = useMemo(() => {
    const query = normalizeText(searchTerm);
    return products
      .filter(
        (product) =>
          !query ||
          normalizeText(
            [
              product.brand,
              ...Object.values(product.name),
              ...Object.values(product.description),
            ].join(" "),
          ).includes(query),
      )
      .filter(
        (product) =>
          (activeCategory === "all" ||
            product.categoryKey === activeCategory) &&
          (activeGoal === "all" || product.goalKey === activeGoal),
      );
  }, [activeCategory, activeGoal, searchTerm]);

  const getFilterLabel = (type, value) => {
    if (type === "category")
      return currentCopy.filters.categories[value] ?? value;
    if (type === "goal") return currentCopy.filters.goals[value] ?? value;
    return value;
  };

  const activeFilters = [
    activeCategory !== "all"
      ? { label: getFilterLabel("category", activeCategory), type: "category" }
      : null,
    activeGoal !== "all"
      ? { label: getFilterLabel("goal", activeGoal), type: "goal" }
      : null,
    searchTerm ? { label: searchTerm, type: "search" } : null,
  ].filter(Boolean);

  return (
    <div className="mx-auto mt-12 max-w-7xl px-6 pb-24 pt-10 lg:px-8">
      <SectionHeading
        eyebrow={currentCopy.sections.catalog}
        title={currentCopy.sections.catalog}
        description={currentCopy.filters.search}
        align={isRTL ? "right" : "center"}
      />
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={currentCopy.filters.search}
        className={`mt-10 w-full rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ${isRTL ? "text-right" : ""}`}
      />
      <div className="mt-6 space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f2e01d]/80">
          {currentCopy.filters.panelTitle}
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            {currentCopy.filters.sortBy}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === "all" ? "bg-[#f2e01d] text-slate-950" : "border border-white/15 bg-white/5 text-white hover:bg-white/10"}`}
            >
              {currentCopy.filters.all}
            </button>
            {categoryOptions.map((value) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === value ? "bg-[#f2e01d] text-slate-950" : "border border-white/15 bg-white/5 text-white hover:bg-white/10"}`}
              >
                {getFilterLabel("category", value)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            {currentCopy.filters.matchGoal}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveGoal("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeGoal === "all" ? "bg-[#f2e01d] text-slate-950" : "border border-white/15 bg-white/5 text-white hover:bg-white/10"}`}
            >
              {currentCopy.filters.all}
            </button>
            {goalOptions.map((value) => (
              <button
                key={value}
                onClick={() => setActiveGoal(value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeGoal === value ? "bg-[#f2e01d] text-slate-950" : "border border-white/15 bg-white/5 text-white hover:bg-white/10"}`}
              >
                {getFilterLabel("goal", value)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4 text-center">
            <div className="text-2xl font-semibold text-white">
              {filteredProducts.length}
            </div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
              {currentCopy.filters.results}
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4 text-center">
            <div className="text-2xl font-semibold text-white">
              {activeFilters.length}
            </div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
              {currentCopy.filters.active}
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4 text-center">
            <div className="text-2xl font-semibold text-white">
              {products.length}
            </div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
              {currentCopy.filters.total}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setActiveCategory("all");
            setActiveGoal("all");
            setSearchTerm("");
          }}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          {currentCopy.filters.reset}
        </button>
        {filteredProducts.length === 0 ? (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-5 text-sm text-slate-300">
            {currentCopy.filters.empty}
          </div>
        ) : null}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            lang={language}
            onAdd={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

function ArticlesPage() {
  const { language, currentCopy, isRTL } = useStore();
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
      <SectionHeading
        eyebrow={currentCopy.sections.articles}
        title={currentCopy.articlesPanel.title}
        description={currentCopy.articlesPanel.subtitle}
        align={isRTL ? "right" : "center"}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} lang={language} />
        ))}
      </div>
    </div>
  );
}

function ArticleDetailPage() {
  const { language, currentCopy, addToCart } = useStore();
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) return <Navigate to="/articles" replace />;
  const relatedProducts = article.relatedProducts
    .map((productSlug) =>
      products.find((product) => product.slug === productSlug),
    )
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 lg:px-8">
      <button
        onClick={() => navigate("/articles")}
        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        {currentCopy.articlesPanel.back}
      </button>
      <article className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
        <img
          src={article.heroImage}
          alt={getLocalized(article.title, language)}
          className="h-[22rem] w-full object-cover"
        />
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
            <span>{getLocalized(article.category, language)}</span>
            <span>{article.readingTime}</span>
            <span>{formatDate(article.publishedAt, language)}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {getLocalized(article.title, language)}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {getLocalized(article.excerpt, language)}
          </p>
          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <section
                key={getLocalized(section.heading, language)}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-white">
                  {getLocalized(section.heading, language)}
                </h2>
                <div className="space-y-4 text-base leading-8 text-slate-300">
                  {section.paragraphs[language].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
      <section className="mt-12">
        <SectionHeading
          eyebrow={currentCopy.labels.recommended}
          title={currentCopy.labels.recommended}
          description=""
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {relatedProducts.map((product) => (
            <CompactProductCard
              key={product.id}
              product={product}
              lang={language}
              onAdd={addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function CheckoutPage() {
  const { language, currentCopy, cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    wilaya: "Alger",
    commune: "",
    address: "",
    notes: "",
  });

  if (cart.length === 0 && !submitted)
    return (
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 lg:px-8">
        <SectionHeading
          eyebrow={currentCopy.nav.checkout}
          title={currentCopy.checkout.title}
          description={currentCopy.checkout.empty}
        />
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center text-slate-300 backdrop-blur-xl">
          <p>{currentCopy.checkout.empty}</p>
          <button
            onClick={() => navigate("/products")}
            className="mt-6 rounded-full bg-[#f2e01d] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
          >
            {currentCopy.labels.viewProducts}
          </button>
        </div>
      </div>
    );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cart.length === 0) return;
    setSubmitted(true);
    clearCart();
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
      <SectionHeading
        eyebrow={currentCopy.nav.checkout}
        title={currentCopy.checkout.title}
        description={currentCopy.checkout.subtitle}
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            {currentCopy.checkout.formTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["fullName", currentCopy.checkout.fields.fullName],
              ["phone", currentCopy.checkout.fields.phone],
              ["wilaya", currentCopy.checkout.fields.wilaya],
              ["commune", currentCopy.checkout.fields.commune],
            ].map(([fieldKey, label]) =>
              fieldKey === "wilaya" ? (
                <select
                  key={fieldKey}
                  value={form.wilaya}
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      wilaya: e.target.value,
                    }))
                  }
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white outline-none"
                >
                  {wilayas.map((wilaya) => (
                    <option key={wilaya} value={wilaya}>
                      {wilaya}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  key={fieldKey}
                  value={form[fieldKey]}
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      [fieldKey]: e.target.value,
                    }))
                  }
                  placeholder={label}
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none"
                />
              ),
            )}
          </div>
          <textarea
            value={form.address}
            onChange={(e) =>
              setForm((current) => ({ ...current, address: e.target.value }))
            }
            placeholder={currentCopy.checkout.fields.address}
            rows={4}
            className="mt-4 w-full rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none"
          />
          <textarea
            value={form.notes}
            onChange={(e) =>
              setForm((current) => ({ ...current, notes: e.target.value }))
            }
            placeholder={currentCopy.checkout.fields.notes}
            rows={3}
            className="mt-4 w-full rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none"
          />
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#f2e01d] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
          >
            {currentCopy.checkout.confirm}
          </button>
          {submitted ? (
            <div className="mt-5 rounded-[1.5rem] border border-[#f2e01d]/15 bg-[#f2e01d]/8 p-5 text-sm text-lime-100">
              {currentCopy.checkout.confirmed}
            </div>
          ) : null}
        </form>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">
              {currentCopy.checkout.orderTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
                >
                  <img
                    src={item.image}
                    alt={getLocalized(item.name, language)}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {getLocalized(item.name, language)}
                    </h4>
                    <p className="mt-1 text-sm text-slate-400">
                      {formatPrice(item.price, language)}{" "}
                      {currentCopy.cart.each}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-slate-300">
              <span>{currentCopy.cart.subtotal}</span>
              <span className="text-2xl font-semibold text-white">
                {formatPrice(cartTotal, language)}
              </span>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">
              {currentCopy.checkout.paymentTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {currentCopy.checkout.paymentText}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/products")}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {currentCopy.labels.continueShopping}
              </button>
              <button
                onClick={() => navigate("/articles")}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {currentCopy.labels.viewArticles}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StorefrontRoutes() {
  const [language, setLanguage] = useState("fr");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const currentCopy = copy[language];
  const isRTL = language === "ar";
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem)
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      return [...currentCart, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => setCart([]);

  const outletContext = {
    language,
    setLanguage,
    currentCopy,
    isRTL,
    searchTerm,
    setSearchTerm,
    cart,
    cartCount,
    cartTotal,
    cartOpen,
    setCartOpen,
    addToCart,
    updateQuantity,
    clearCart,
  };

  return (
    <StoreContext.Provider value={outletContext}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="articles/:slug" element={<ArticleDetailPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default function StorefrontApp() {
  return <StorefrontRoutes />;
}
