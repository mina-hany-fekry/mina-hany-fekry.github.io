// ==============================================================================
// Mina Hany Fekry — Bilingual Portfolio Application Engine (v4.1)
// AI-Driven Solutions & Power BI Specialist
// ==============================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------------------------------
  // 1. Bilingual Translations Dictionary (Arabic & English)
  // ----------------------------------------------------------------------------
  const translations = {
    ar: {
      pageTitle: "مينا هانى فكرى — بناء الحلول الرقمية بالذكاء الاصطناعي وذكاء الأعمال Power BI",
      pageDesc: "الملف المهني لمينا هانى فكرى - متخصص إدارة العمليات وبناء التطبيقات الرقمية بالذكاء الاصطناعي، وتحليل بيانات الأعمال Power BI.",
      brandName: "مينا هانى فكرى",
      brandRole: "بناء الحلول بالذكاء الاصطناعي • Power BI",
      navEcosystem: "المنظومة المتكاملة",
      navProjects: "المشاريع البارزة",
      navModeling: "تحليل البيانات وDAX",
      navSkills: "المهارات والذكاء الاصطناعي",
      navContact: "تواصل معي",
      navDownloadCv: "تحميل السيرة الذاتية (CV)",
      navCaseStudiesBtn: "استعراض المشاريع",
      heroStatus: "متاح للأدوار الاستراتيجية ومشاريع التحول الرقمي",
      heroName: "مينا هانى فكرى",
      heroHeadlineSecondary: "خبير بناء الحلول بالذكاء الاصطناعي و Power BI",
      heroRole: "بناء الأنظمة بالذكاء الاصطناعي • أتمتة العمليات التشغيلية • ذكاء الأعمال Power BI",
      heroAiStatement: "منهجية العمل والابتكار: لست مهندس برمجيات تقليدياً؛ بل أقوم بابتكار وبناء وبرمجة هذه الحلول والأنظمة المتكاملة بالكامل عن طريق توظيف أدوات ونماذج الذكاء الاصطناعي (AI-Driven Development)، لتحويل خبرتي العميقة في إدارة العمليات والمبيعات إلى تطبيقات واقعية ملموسة.",
      heroIntro: "أقوم بتصميم وتنفيذ حلول رقمية متكاملة من البداية للنهاية عبر الذكاء الاصطناعي: من بوابات الويب السريعة وتطبيقات أندرويد الميدانية، إلى خطوط ربط البيانات بـ Google Sheets، ولوحات تحكم Power BI التنفيذية القائمة على النموذج النجمي (Star Schema) وصيغ DAX المتقدمة.",
      heroTagAiBuild: "بناء الأنظمة بالذكاء الاصطناعي",
      heroTagWeb: "بوابات الويب التشغيلية",
      heroTagAndroid: "تطبيقات أندرويد الميدانية",
      heroTagPbi: "تحليلات Power BI و DAX",
      heroCtaProjects: "استكشاف المشاريع الحية",
      heroCtaCv: "تحميل السيرة الذاتية الرسمية (PDF)",
      heroCtaContact: "تواصل معي مباشرة",
      profileTitle: "مينا هانى فكرى",
      profileRole: "بناء الحلول بالذكاء الاصطناعي وPower BI",
      profileDownloadResume: "تحميل السيرة الذاتية الرسمية (PDF)",
      trustTitle: "سرية البيانات المؤسسية والنزاهة الرقمية",
      trustBadge: "متوافق مع معايير NDA",
      trustDesc: "جميع الأنظمة المعروضة تمثل بنيات حقيقية في قطاع إدارة العضويات والمبيعات. تم استبدال الهويات الفعلية والأرقام الحساسة ببيانات وهمية متناسقة للحفاظ على السرية التامة للمؤسسات.",
      trustTag: "بيانات وهمية ونموذج نجمي محمي",
      ecoOverline: "الهندسة المعمارية والتكامل",
      ecoTitle: "المنظومة الرقمية الشاملة",
      ecoSubtitle: "لا تعمل التطبيقات البرمجية في جزر منعزلة. توضح هذه الخريطة كيف تتكامل بوابة الويب، وتطبيق أندرويد الميداني، والـ Webhooks السحابية لـ Google Sheets، ومنظومة التنبيهات الآلية، مع لوحات تحكم Power BI المركزية.",
      ecoNode1Layer: "طبقة العمليات التشغيلية",
      ecoNode1Title: "بوابة الويب لإدارة العمليات",
      ecoNode1Desc: "مركز القيادة اليومي لإدارة المشتركين، وحساب الرسوم والتجديدات، وتصنيف العملاء المحتملين بالذكاء الاصطناعي لتحفيز مسؤولي المبيعات.",
      ecoNode1Badge: "تصنيف العملاء بالـ AI",
      ecoNode1Platform: "منصة الويب",
      ecoNode2Layer: "تطبيقات الموبايل والأتمتة السحابية",
      ecoNode2Title: "تطبيق العمليات والتنبيهات المؤتمتة",
      ecoNode2Desc: "تطبيق ميداني يربط الفروع بـ Google Sheets عبر Webhooks لحظية، مع فحص دوري يومي يرسل إشعارات تحذيرية ورسائل بريد إلكتروني للإدارة بالأندية التي لم ترسل تقريرها.",
      ecoNode2Badge: "Webhooks وتنبيهات يومية",
      ecoNode2Platform: "أندرويد + سحابة جوجل",
      ecoNode3Layer: "طبقة الذكاء والتحليلات التنفيذية",
      ecoNode3Title: "مركز تحليلات القيادة العليا",
      ecoNode3Desc: "سحب البيانات المباشر من Google Sheets إلى نموذج نجمي (Star Schema) يقدم مؤشرات الأداء الحيوية: معدلات التجديد والانسحاب، والإيرادات الشهرية، ومستهدفات الفروع.",
      ecoNode3Badge: "نموذج نجمي ومعادلات DAX",
      ecoNode3Platform: "Power BI",
      projOverline: "دراسات الحالة والأنظمة الحية",
      projTitle: "أبرز المشاريع الإنتاجية المكتملة",
      filterAll: "كل المشاريع",
      filterWeb: "الويب والذكاء الاصطناعي",
      filterAndroid: "تطبيقات أندرويد",
      filterPbi: "Power BI",
      p1Category: "تطبيقات الويب والذكاء الاصطناعي",
      p1Badge: "نظام مؤسسي",
      p1Title: "بوابة إدارة العضويات والمبيعات الذكية",
      p1Desc: "منظومة متكاملة لإدارة دورة حياة العضويات، ومطابقة الرسوم، وأتمتة تصنيف العملاء وتجديد الاشتراكات عبر الفروع.",
      p1Preview: "انقر لاستعراض شاشات النظام الحية",
      p1ViewsCount: "6 شاشات ويب",
      p1Chip0: "1. البوابة",
      p1Chip1: "2. الحاسبة",
      p1Chip2: "3. المقابلات",
      p1Chip3: "4. الصلاحيات",
      p1Chip4: "5. الإيرادات",
      p1Chip5: "6. الكروت",
      p1Impact: "الأثر التشغيلي المحقق",
      p1Metric1Val: "+38%",
      p1Metric1Lbl: "سرعة استجابة المبيعات",
      p1Metric2Val: "+24%",
      p1Metric2Lbl: "التزام بتجديد الاشتراكات",
      p1Btn: "استعراض دراسة الحالة والشاشات",
      p2Category: "تطبيقات أندرويد والأتمتة",
      p2Badge: "عمليات ميدانية",
      p2Title: "تطبيق العمليات الميدانية ومنظومة التنبيهات",
      p2Desc: "تطبيق موبايل يربط الفروع بـ Google Sheets عبر Webhooks، مع إشعارات Push ورسائل بريد إلكتروني تلقائية للفروع المتأخرة.",
      p2Preview: "انقر لاستعراض شاشات التطبيق والتنبيهات",
      p2ViewsCount: "6 شاشات موبايل",
      p2Chip0: "1. الرئيسية",
      p2Chip1: "2. إدخال التقرير",
      p2Chip2: "3. متابعة الأداء",
      p2Chip3: "4. تنبيه Push",
      p2Chip4: "5. إيميل الإدارة",
      p2Chip5: "6. خطة العمل",
      p2Impact: "الأثر التشغيلي المحقق",
      p2Metric1Val: "100%",
      p2Metric1Lbl: "التزام الفروع بالتقارير",
      p2Metric2Val: "0 دقيقة",
      p2Metric2Lbl: "متابعات هاتفية يدوية",
      p2Btn: "استعراض دراسة الحالة والشاشات",
      p3Category: "Power BI ونمذجة البيانات",
      p3Badge: "ذكاء أعمال تنفيذي",
      p3Title: "لوحة تحليلات المبيعات ودورة حياة العضويات",
      p3Desc: "نموذج بيانات نجمي يحلل ملايين المعاملات إلى مؤشرات أداء تنفيذية، ومعدلات بقاء الأعضاء، وقياس مستهدفات الفروع.",
      p3Preview: "انقر لاستعراض شاشات الداشبورد التفاعلية",
      p3ViewsCount: "3 شاشات تحليلية",
      p3Chip0: "1. المبيعات",
      p3Chip1: "2. شجرة الأسباب",
      p3Chip2: "3. المستهدفات",
      p3Impact: "الأثر التشغيلي المحقق",
      p3Metric1Val: "85%",
      p3Metric1Lbl: "تسريع اتخاذ القرار",
      p3Metric2Val: "100%",
      p3Metric2Lbl: "شفافية قياس التارجت",
      p3Btn: "استعراض دراسة الحالة والشاشات",
      modelOverline: "الهندسة المعمارية لـ Power BI",
      modelTitle: "النموذج النجمي (Star Schema) وصيغ DAX",
      modelSubtitle: "يبدأ أي نظام ذكاء أعمال ناجح بنمذجة بيانات هندسية محكمة. إليك الهيكل البعدي ونماذج من المقاييس الحسابية التي تشغل لوحة المؤشرات.",
      modelSchemaTitle: "هيكل النموذج النجمي (Star Schema)",
      modelSchemaBadge: "علاقات 1 إلى متعدد",
      modelFactTitle: "جدول الحقائق المركزي (Fact Table)",
      dimMembers: "بيانات الأعضاء وفئاتهم",
      dimPlans: "أنواع الباقات والأسعار",
      dimAgents: "مسؤولو المبيعات والمستهدفات",
      dimDate: "جدول التواريخ ومقارنات الفترات",
      modelDaxTitle: "معادلات DAX الإنتاجية",
      daxTab1: "نمو الإيرادات (MoM)",
      daxTab2: "معدل التجديد %",
      daxTab3: "تحقيق المستهدف %",
      skillsOverline: "القدرات والخبرات العملية",
      skillsTitle: "المصفوفة التقنية وبناء الحلول بالذكاء الاصطناعي",
      skillCol1Title: "تطوير الويب بالـ AI",
      skillCol1Item1: "بناء الواجهات بنماذج الذكاء الاصطناعي",
      skillCol1Item2: "تطوير واجهات React & Next.js",
      skillCol1Item3: "برمجة مسارات Python & FastAPI",
      skillCol1Item4: "هندسة الأوامر المتقدمة (Prompts)",
      skillCol2Title: "تطبيقات الموبايل بالـ AI",
      skillCol2Item1: "بناء تطبيقات أندرويد عبر الذكاء الاصطناعي",
      skillCol2Item2: "تطبيقات Kotlin وهيكل MVVM",
      skillCol2Item3: "مزامنة Webhooks السحابية",
      skillCol2Item4: "أنظمة التنبيهات الميدانية المؤتمتة",
      skillCol3Title: "أتمتة الذكاء الاصطناعي",
      skillCol3Item1: "توظيف واجهات LLM APIs المتقدمة",
      skillCol3Item2: "محركات تصنيف العملاء المحتملين بالـ AI",
      skillCol3Item3: "وكلاء المساعدة الذكية (Concierge Agents)",
      skillCol3Item4: "توليد عروض التجديد المخصصة تلقائياً",
      skillCol4Title: "ذكاء الأعمال والتحليلات",
      skillCol4Item1: "Microsoft Power BI & Service",
      skillCol4Item2: "النموذج النجمي (Star Schema) البعدي",
      skillCol4Item3: "معادلات DAX وحسابات Time Intelligence",
      skillCol4Item4: "أمن البيانات المتقدم (Dynamic RLS)",
      contactOverline: "قنوات الاتصال المباشرة",
      contactTitle: "ابدأ التواصل الآن",
      contactSubtitle: "متاح للأدوار الاستشارية والتشغيلية، وبناء الحلول الرقمية بالذكاء الاصطناعي، وتطوير لوحات Power BI المؤسسية المتقدمة.",
      contactEmailChannel: "البريد الإلكتروني المباشر",
      contactEmailTitle: "إرسال رسالة بريد",
      contactEmailBtn: "مراسلة فورية",
      contactPhoneChannel: "الهاتف وواتساب",
      contactPhoneTitle: "اتصال ومراسلة",
      contactPhoneCallBtn: "اتصال",
      contactPhoneWaBtn: "واتساب",
      contactLinkedinChannel: "الشبكة المهنية",
      contactLinkedinTitle: "حساب LinkedIn",
      contactLinkedinBtn: "زيارة الحساب",
      contactCvChannel: "الملف المهني الرسمي",
      contactCvTitle: "السيرة الذاتية (CV)",
      contactCvBtn: "تحميل الـ CV (PDF)",
      footerCopy: "© 2026 مينا هانى فكرى. جميع الحقوق محفوظة. صُمم وفقاً لمعايير السرية المؤسسية.",
      modalNdaFooter: "بيانات وهمية متوافقة مع معايير السرية NDA",
      modalCloseWindow: "إغلاق النافذة",
      lightboxOpenFull: "فتح بالحجم الأصلي",
      lightboxTitle: "عرض عالي الدقة",
      enlargeBtnTxt: "تكبير الصورة",
      clickToEnlargeTxt: "انقر للتكبير بالحجم الكامل"
    },
    en: {
      pageTitle: "Mina Hany Fekry — AI-Powered Solutions & Power BI Specialist",
      pageDesc: "Portfolio of Mina Hany Fekry - Building end-to-end digital solutions and operational apps powered by Generative AI and Power BI analytics.",
      brandName: "Mina Hany Fekry",
      brandRole: "AI-Powered Solutions • Power BI",
      navEcosystem: "The Ecosystem",
      navProjects: "Featured Projects",
      navModeling: "BI & Modeling",
      navSkills: "AI & Technical Skills",
      navContact: "Contact",
      navDownloadCv: "Download CV",
      navCaseStudiesBtn: "Case Studies",
      heroStatus: "Available for Strategic Roles & High-Impact Projects",
      heroName: "Mina Hany Fekry",
      heroHeadlineSecondary: "AI-Powered Solutions Creator & Power BI Specialist",
      heroRole: "AI-Driven Solutions • Business Operations Automation • Power BI Analytics",
      heroAiStatement: "Methodology & Approach: Not a traditional software engineer — I create, architect, and deliver these production solutions entirely through modern Artificial Intelligence (AI-Driven Development), bridging real-world operational domain knowledge with functional software.",
      heroIntro: "I create end-to-end digital solutions powered by modern AI: from responsive Web Portals and native Android apps, to Google Sheets webhook sync and executive Power BI dashboards built on Star Schema modeling and advanced DAX.",
      heroTagAiBuild: "AI-Driven System Building",
      heroTagWeb: "Operational Web Portals",
      heroTagAndroid: "Field Android Apps",
      heroTagPbi: "Power BI & DAX Analytics",
      heroCtaProjects: "Explore Featured Projects",
      heroCtaCv: "Download Official CV (PDF)",
      heroCtaContact: "Get in Touch",
      profileTitle: "Mina Hany Fekry",
      profileRole: "AI-Powered Solutions & Power BI Specialist",
      profileDownloadResume: "Download Official Resume (PDF)",
      trustTitle: "Enterprise Confidentiality & Data Integrity",
      trustBadge: "NDA-Compliant",
      trustDesc: "All presented systems reflect live enterprise architectures in the Memberships & Sales domain. Real client identities and internal numbers are replaced with synthetic data & scaled metrics to preserve strict confidentiality.",
      trustTag: "Masked Data & Star Schema",
      ecoOverline: "Architecture & Synergy",
      ecoTitle: "The Complete Digital Ecosystem",
      ecoSubtitle: "Software applications should never exist in silos. Here is how the Web Portal, Native Android App, Google Sheets Webhooks, Automated Alert Triggers, and Power BI Hub interconnect to automate enterprise operations.",
      ecoNode1Layer: "Operational Layer",
      ecoNode1Title: "Smart Web Operations Portal",
      ecoNode1Desc: "Central management hub handling member onboarding, subscription states, and AI-assisted lead scoring to automate sales follow-ups.",
      ecoNode1Badge: "AI Lead Scoring",
      ecoNode1Platform: "Web Platform",
      ecoNode2Layer: "Mobile & Automation Pipeline",
      ecoNode2Title: "Mobile Ops & Alert Automation",
      ecoNode2Desc: "Field app synchronizing daily reports to Google Sheets via webhooks. Includes daily cron monitoring with instant Push Warnings & Admin Email Alerts for missing reports.",
      ecoNode2Badge: "Webhooks & Daily Alerts",
      ecoNode2Platform: "Android + Google Cloud",
      ecoNode3Layer: "Intelligence Layer",
      ecoNode3Title: "Executive Analytics Hub",
      ecoNode3Desc: "Direct ingestion from Google Sheets into a dimensional Star Schema delivering real-time KPIs: Churn vs. Retention, MRR growth, and branch quota tracking.",
      ecoNode3Badge: "Star Schema & DAX",
      ecoNode3Platform: "Power BI",
      projOverline: "Case Studies & Showcase",
      projTitle: "Featured Production Systems",
      filterAll: "All Projects",
      filterWeb: "Web & AI",
      filterAndroid: "Android",
      filterPbi: "Power BI",
      p1Category: "Web Application & AI",
      p1Badge: "Enterprise",
      p1Title: "Smart Membership & Sales Management Portal",
      p1Desc: "Full-lifecycle subscription management platform with automated lead qualification, member onboarding, and AI personalized outreach.",
      p1Preview: "Explore 6 Production Web Views",
      p1ViewsCount: "6 Web Views",
      p1Chip0: "1. Portal",
      p1Chip1: "2. Calculator",
      p1Chip2: "3. Funnel",
      p1Chip3: "4. RBAC",
      p1Chip4: "5. Revenue",
      p1Chip5: "6. Cards",
      p1Impact: "Proven Impact",
      p1Metric1Val: "+38%",
      p1Metric1Lbl: "Faster Lead Response",
      p1Metric2Val: "+24%",
      p1Metric2Lbl: "On-Time Renewals",
      p1Btn: "Read Case Study & Views",
      p2Category: "Native Android & Automation",
      p2Badge: "Mobile Ops",
      p2Title: "Operations App & Automated Alert Suite",
      p2Desc: "Branch management mobile app with daily Google Sheets webhook sync, work plan attendance, and automated missing report alerts.",
      p2Preview: "Explore 6 Production Screens & Alerts",
      p2ViewsCount: "6 Mobile Views",
      p2Chip0: "1. Home",
      p2Chip1: "2. Daily Entry",
      p2Chip2: "3. Live Ops",
      p2Chip3: "4. Push Alert",
      p2Chip4: "5. Admin Mail",
      p2Chip5: "6. Work Plan",
      p2Impact: "Proven Impact",
      p2Metric1Val: "100%",
      p2Metric1Lbl: "Daily Compliance",
      p2Metric2Val: "0 min",
      p2Metric2Lbl: "Manual Follow-ups",
      p2Btn: "Read Case Study & Views",
      p3Category: "Power BI & Modeling",
      p3Badge: "Executive BI",
      p3Title: "Executive Membership & Sales Analytics",
      p3Desc: "Star Schema dimensional data model transforming raw transaction streams into executive KPI scorecards, churn cohorts, and quota attainment reports.",
      p3Preview: "Click to Explore 3 Interactive Dashboards",
      p3ViewsCount: "3 Dashboards",
      p3Chip0: "1. Sales",
      p3Chip1: "2. Root Cause",
      p3Chip2: "3. Targets",
      p3Impact: "Proven Impact",
      p3Metric1Val: "85%",
      p3Metric1Lbl: "Faster Turnaround",
      p3Metric2Val: "100%",
      p3Metric2Lbl: "Quota Transparency",
      p3Btn: "Read Case Study & Views",
      modelOverline: "Power BI Engineering Deep Dive",
      modelTitle: "Star Schema Architecture & DAX Formulas",
      modelSubtitle: "A successful Business Intelligence solution starts with rock-solid data engineering. Here is the dimensional architecture and sample business measures powering the analytics.",
      modelSchemaTitle: "Star Schema Architecture",
      modelSchemaBadge: "1-to-Many Relationships",
      modelFactTitle: "Central Fact Table",
      dimMembers: "Demographics, join cohorts, status",
      dimPlans: "Tiers (Silver/Gold/Plat), base pricing",
      dimAgents: "Reps, monthly quotas, branches",
      dimDate: "Time intelligence, MoM, YoY",
      modelDaxTitle: "Production DAX Calculations",
      daxTab1: "MoM Growth",
      daxTab2: "Renewal Rate",
      daxTab3: "Quota Attainment",
      skillsOverline: "Capabilities Matrix",
      skillsTitle: "Technical Capabilities & AI-Driven Building",
      skillCol1Title: "AI-Driven Web Building",
      skillCol1Item1: "AI-Assisted Full-Stack Development",
      skillCol1Item2: "React & Next.js UI Prototyping",
      skillCol1Item3: "Python & FastAPI Logic with AI",
      skillCol1Item4: "Advanced Prompt Engineering",
      skillCol2Title: "AI-Driven Mobile Apps",
      skillCol2Item1: "Android App Generation via AI",
      skillCol2Item2: "Kotlin & Clean MVVM Architecture",
      skillCol2Item3: "Real-Time Webhook Cloud Sync",
      skillCol2Item4: "Automated Push & Email Alert Cron",
      skillCol3Title: "AI Agents & Automation",
      skillCol3Item1: "LLM API Integration & Orchestration",
      skillCol3Item2: "AI Lead Scoring & Prioritization",
      skillCol3Item3: "Conversational Concierge Agents",
      skillCol3Item4: "Automated Proposal Generation",
      skillCol4Title: "BI & Business Intelligence",
      skillCol4Item1: "Microsoft Power BI & Service",
      skillCol4Item2: "Dimensional Star Schema Design",
      skillCol4Item3: "Complex DAX & Time Intelligence",
      skillCol4Item4: "Dynamic Row-Level Security (RLS)",
      contactOverline: "Direct Communication",
      contactTitle: "Get in Touch",
      contactSubtitle: "Available for strategic roles, enterprise consulting, AI-driven solutions, and executive Business Intelligence implementations.",
      contactEmailChannel: "Email Channel",
      contactEmailTitle: "Direct Email",
      contactEmailBtn: "Send Email",
      contactPhoneChannel: "Direct Mobile & WA",
      contactPhoneTitle: "Phone & WhatsApp",
      contactPhoneCallBtn: "Call",
      contactPhoneWaBtn: "WhatsApp",
      contactLinkedinChannel: "Professional Network",
      contactLinkedinTitle: "LinkedIn Profile",
      contactLinkedinBtn: "Visit LinkedIn",
      contactCvChannel: "Official Resume",
      contactCvTitle: "Curriculum Vitae",
      contactCvBtn: "Download CV (PDF)",
      footerCopy: "© 2026 Mina Hany Fekry. All rights reserved. Designed with NDA confidentiality standards.",
      modalNdaFooter: "Masked Synthetic Data • NDA-Compliant",
      modalCloseWindow: "Close Window",
      lightboxOpenFull: "Open Full Size",
      lightboxTitle: "High-Resolution Screenshot Preview",
      enlargeBtnTxt: "Enlarge Image",
      clickToEnlargeTxt: "Click to Enlarge Full Resolution"
    }
  };

  // ----------------------------------------------------------------------------
  // 2. Case Studies Data Store (English & Arabic)
  // ----------------------------------------------------------------------------
  const caseStudiesData = {
    en: {
      web: {
        category: "Web Application & AI Automation",
        title: "Smart Membership & Sales Management Portal",
        summaryTitle: "Executive Summary",
        summaryText: "An enterprise operations portal built via AI-assisted engineering to automate membership lifecycles, accelerate sales lead conversions, and manage subscription states across multi-tier branch networks.",
        challengeTitle: "The Challenge",
        challengeText: "Sales agents manually qualified leads from multiple ad sources, resulting in a 4+ hour lag in response time and lost membership deals.",
        solutionTitle: "The Solution",
        solutionText: "Integrated an AI lead scoring engine that evaluates intent and routes prospects instantly, coupled with automated 1-click renewal invoicing.",
        galleryHeader: "Enterprise Web Operations (5 Production Views)",
        galleryBadge: "Click any view or tap enlarge",
        views: [
          {
            tab: "1. Portal Hub",
            title: "1. Portal Hub (Operations Launchpad)",
            img: "assets/images/web_clean/web_portal_hub_clean.png",
            desc: "Central Management Hub: Operations launchpad for new memberships, revenue tracking, card delivery logistics, and operational oversight."
          },
          {
            tab: "2. Renewal Calculator",
            title: "2. Transactions & Renewal Calculator",
            img: "assets/images/web_clean/web_transactions_calc_clean.png",
            desc: "Transactions & Renewal Calculator: Interactive fee calculation for renewals, member additions, and employee membership discounts."
          },
          {
            tab: "3. Interviews Matrix",
            title: "3. Member Interviews Funnel Matrix",
            img: "assets/images/web_clean/web_interviews_funnel_clean.png",
            desc: "Member Interviews Matrix: Status breakdown and acceptance funnel across all 12 branches with waffle grid tracking."
          },
          {
            tab: "4. RBAC Admin",
            title: "4. RBAC & User Administration",
            img: "assets/images/web_clean/web_admin_rbac_clean.png",
            desc: "RBAC & User Administration: Role-based access control directory managing granular permissions across regional, corporate, sales, and cards modules."
          },
          {
            tab: "5. Cards Delivery",
            title: "5. Cards Delivery Logistics",
            img: "assets/images/web_clean/web_cards_delivery_clean.png",
            desc: "Cards Delivery Logistics: Real-time fulfillment scorecard comparing membership renewals against physical card receipts across all branches."
          }
        ],
        aiTitle: "AI Workflows & Integration",
        aiItems: [
          {
            bold: "Intelligent Lead Scoring: ",
            text: "Categorizes incoming inquiries (Hot/Warm/Cold) using structured evaluation based on historical conversion attributes."
          },
          {
            bold: "Personalized Outreach Drafter: ",
            text: "Dynamically compiles customized renewal proposals tailored to member frequency and preferred tier options."
          }
        ],
        impactTitle: "Quantifiable Results (NDA Protected)",
        impactMetrics: [
          { val: "+38%", lbl: "Faster Outreach" },
          { val: "+24%", lbl: "On-Time Renewals" },
          { val: "15+ hrs", lbl: "Saved Weekly/Agent" }
        ]
      },
      android: {
        category: "Native Mobile & Automation Pipeline",
        title: "Branch Operations & Automated Alert Suite (Android + Google Cloud)",
        summaryTitle: "Executive Summary",
        summaryText: "A field-ready Android application created through AI-accelerated development, automating multi-branch operations, staff work plan attendance, and daily reporting. Integrates an end-to-end cloud pipeline: daily reports sync to Google Sheets via webhooks, and an automated monitoring cron checks submissions every evening to trigger Push Warnings and dispatch Gmail Status Alerts to executives for missing branches.",
        challengeTitle: "The Challenge",
        challengeText: "Branches delayed submitting daily revenue reports, forcing managers to make dozens of follow-up phone calls with zero centralized visibility until late at night.",
        solutionTitle: "The Solution",
        solutionText: "Streamlined mobile input synced via Google Apps Script webhooks, coupled with automatic cron alerts (push + email) notifying managers immediately of delinquent clubs.",
        galleryHeader: "Interactive Production Screens (6 Key Modules)",
        galleryBadge: "100% Anonymized & Cleaned",
        views: [
          {
            tab: "1. Home (Portal Hub)",
            title: "1. Home Screen (Portal Hub)",
            img: "assets/images/app_clean/app_home_portal.jpg",
            desc: "Home Screen (Portal Hub): Quick Actions hub providing access to Daily Reports, Branch network, Employee Memberships, Membership Actions, Pricing, and Work Plan."
          },
          {
            tab: "2. Daily Entry",
            title: "2. Daily Entry Submission Portal",
            img: "assets/images/app_clean/app_daily_entry.jpg",
            desc: "Daily Entry Portal: Area Manager submission interface syncing operational daily figures directly with Google Sheets."
          },
          {
            tab: "3. Live Ops",
            title: "3. Live Performance Operations",
            img: "assets/images/app_clean/app_live_perf_clean.png",
            desc: "Live Performance Dashboard: Real-time revenue tracking ($229,000 USD), interviews, card issuance metrics, and regional branch progress bars."
          },
          {
            tab: "4. Missing Alert",
            title: "4. Missing Daily Report Alert (Push)",
            img: "assets/images/app_clean/app_notification_clean.png",
            desc: "Automated Daily Alert: Push notification warning listing branches that failed to submit their daily report by cutoff."
          },
          {
            tab: "5. Admin Email",
            title: "5. Delinquent Clubs Admin Email Alert",
            img: "assets/images/app_clean/app_alert_email_clean.png",
            desc: "Admin Automated Email: Direct Gmail alert received by General Manager/Admin listing non-submitting clubs with link to master Google Sheet."
          },
          {
            tab: "6. Work Plan",
            title: "6. Staff Work Plan & Duty Roster",
            img: "assets/images/app_clean/app_workplan_clean.png",
            desc: "Operating Schedule (Work Plan): Frontline staff roster with duty attendance checkboxes, realistic generic names, and one-tap Excel & PDF report exports."
          }
        ],
        pipelineTitle: "End-to-End Automation Pipeline",
        pipelineSteps: [
          {
            step: "1. Daily Mobile Input",
            detail: "Branch staff submit revenue, arrivals, and renewals in the Android app."
          },
          {
            step: "2. Webhook & Google Sheets",
            detail: "Instant webhook sync to master Google Sheets; daily monitoring cron checks missing clubs."
          },
          {
            step: "3. Automated Alerts & BI",
            detail: "Fires push warnings to phones, emails admin delinquent lists, and feeds Power BI dashboards."
          }
        ],
        impactTitle: "Quantifiable Results (NDA Protected)",
        impactMetrics: [
          { val: "100%", lbl: "Daily Report Compliance" },
          { val: "0 min", lbl: "Manual Follow-up Calls" },
          { val: "Real-time", lbl: "Power BI Ingestion" }
        ]
      },
      powerbi: {
        category: "Business Intelligence & Data Modeling",
        title: "Executive Membership Lifecycle & Sales Analytics (Power BI)",
        summaryTitle: "Executive Summary",
        summaryText: "An executive-level Power BI reporting solution delivering real-time clarity on Churn vs. Retention, Monthly Recurring Revenue (MRR), and sales quota achievement across multi-tier branch networks.",
        challengeTitle: "The Challenge",
        challengeText: "Leadership lacked unified cross-branch visibility. Monthly reports took 10+ days to consolidate in static spreadsheets with no ability to drill down.",
        solutionTitle: "The Solution",
        solutionText: "Engineered a Star Schema data model in Power BI with complex DAX measures and automated scheduled refreshes from the Google Sheets backend.",
        galleryHeader: "Interactive Dashboard Gallery (3 Production Views)",
        galleryBadge: "100% Anonymized & Cleaned",
        views: [
          {
            tab: "1. Sales Overview",
            title: "1. Executive Sales Overview",
            img: "assets/images/powerbi_dashboard_1_clean.png",
            desc: "Executive Sales Overview: Regional KPIs, Membership counts by 12 branches, and Direct vs Digital revenue distribution."
          },
          {
            tab: "2. Root Cause Tree",
            title: "2. AI Decomposition Root Cause Tree",
            img: "assets/images/powerbi_dashboard_2_clean.png",
            desc: "AI Decomposition Tree: Root-cause analysis tracing revenue across Years, Divisions (Sales vs Membership), Regions, and Branch units."
          },
          {
            tab: "3. Targets Attainment",
            title: "3. Packages & Quota Targets",
            img: "assets/images/powerbi_dashboard_3_clean.png",
            desc: "Package Distribution & Target Attainment: Silver/Gold/Plat package split, annual target progress gauge, and branch totals."
          }
        ],
        impactTitle: "Quantifiable Results (NDA Protected)",
        impactMetrics: [
          { val: "85%", lbl: "Faster Turnaround" },
          { val: "100%", lbl: "Quota Transparency" },
          { val: "12+", lbl: "Branches Unified" }
        ]
      }
    },
    ar: {
      web: {
        category: "تطبيقات الويب وأتمتة الذكاء الاصطناعي",
        title: "بوابة إدارة العضويات والمبيعات الذكية",
        summaryTitle: "الملخص التنفيذي",
        summaryText: "بوابة عمليات مؤسسية متكاملة مطورة عبر الذكاء الاصطناعي لأتمتة دورة حياة العضويات، وتسريع تحويل العملاء المحتملين، وإدارة حالات الاشتراكات عبر شبكة فروع متعددة المستويات.",
        challengeTitle: "التحدي التشغيلي",
        challengeText: "كان مسؤولو المبيعات يفرزون العملاء يدوياً من قنوات إعلانية متعددة، مما أدى لتأخير الاستجابة لأكثر من 4 ساعات وفقدان فرص اشتراكات ثمينة.",
        solutionTitle: "الحل بالذكاء الاصطناعي",
        solutionText: "تطوير محرك ذكاء اصطناعي لتقييم وتصنيف العملاء وتوزيعهم فورياً، مع أتمتة حساب وتجديد الاشتراكات بنقرة واحدة.",
        galleryHeader: "شاشات العمليات المؤسسية (5 شاشات إنتاجية حية)",
        galleryBadge: "انقر على أي شاشة أو اضغط تكبير",
        views: [
          {
            tab: "١. البوابة الرئيسية",
            title: "١. البوابة الرئيسية (مركز إطلاق العمليات)",
            img: "assets/images/web_clean/web_portal_hub_clean.png",
            desc: "بوابة الإدارة المركزية: لوحة إطلاق العمليات للعضويات الجديدة، ومتابعة الإيرادات، ولوجستيات تسليم الكروت، والرقابة التشغيلية."
          },
          {
            tab: "٢. حاسبة التجديد",
            title: "٢. حاسبة المعاملات والاشتراكات",
            img: "assets/images/web_clean/web_transactions_calc_clean.png",
            desc: "حاسبة الرسوم التفاعلية لاشتراكات التجديد، وإضافة أفراد الأسرة، وخصومات عضويات الموظفين بدقة متناهية."
          },
          {
            tab: "٣. مصفوفة المقابلات",
            title: "٣. مصفوفة المقابلات الشخصية والقبول",
            img: "assets/images/web_clean/web_interviews_funnel_clean.png",
            desc: "متابعة مراحل المقابلات الشخصية للأعضاء الجدد ومعدلات القبول موزعة على الـ 12 فرعاً بشبكة تقييم لحظية."
          },
          {
            tab: "٤. إدارة الصلاحيات",
            title: "٤. إدارة صلاحيات المستخدمين والأمان (RBAC)",
            img: "assets/images/web_clean/web_admin_rbac_clean.png",
            desc: "نظام متقدم للتحكم في صلاحيات المستخدمين حسب الأدوار الوظيفية عبر الفروع، المبيعات، والإدارة المالية."
          },
          {
            tab: "٥. تسليم الكروت",
            title: "٥. لوجستيات تسليم الكروت الذكية",
            img: "assets/images/web_clean/web_cards_delivery_clean.png",
            desc: "متابعة سلاسل تسليم الكروت المطبوعة ومطابقتها مع إيصالات السداد عبر كافة الفروع التشغيلية لمنع أي تأخير."
          }
        ],
        aiTitle: "مسارات عمل الذكاء الاصطناعي والتكامل",
        aiItems: [
          {
            bold: "تصنيف العملاء الذكي (AI Scoring): ",
            text: "تقييم فوري لجدية العميل وتحديد أولويات المتابعة بناءً على بيانات التحويل السابقة."
          },
          {
            bold: "صياغة عروض التواصل المخصصة: ",
            text: "توليد مقترحات تجديد وعروض مخصصة لكل عضو بحسب سجل نشاطه وباقته المفضلة."
          }
        ],
        impactTitle: "الأثر التشغيلي المحقق (بيانات محمية)",
        impactMetrics: [
          { val: "+38%", lbl: "سرعة الاستجابة" },
          { val: "+24%", lbl: "التزام التجديد" },
          { val: "15+ ساعة", lbl: "وفر أسبوعي/موظف" }
        ]
      },
      android: {
        category: "تطبيقات الموبايل الأصلية ومنظومة الأتمتة السحابية",
        title: "تطبيق العمليات الميدانية ومنظومة التنبيهات المؤتمتة (Android + Google Cloud)",
        summaryTitle: "الملخص التنفيذي",
        summaryText: "تطبيق أندرويد متكامل مطور عبر الذكاء الاصطناعي لإدارة العمليات اليومية في الفروع، ومتابعة خطط عمل وحضور الموظفين، وإرسال التقارير اليومية إلى Google Sheets عبر Webhooks. تشمل المنظومة نظام رقابة يومي يفحص التقارير تلقائياً ويرسل تنبيهات Push للهواتف وإيميلات فورية للإدارة بالأندية التي لم ترسل تقريرها.",
        challengeTitle: "التحدي التشغيلي",
        challengeText: "كانت بعض الفروع تتأخر في إرسال تقرير الإيرادات والتشغيل اليومي، مما يضطر المديرين لإجراء مكالمات مستمرة وتأخر اتخاذ القرار حتى ساعات متأخرة.",
        solutionTitle: "الحل بالذكاء الاصطناعي والأتمتة",
        solutionText: "إدخال سريع ومبسط للبيانات عبر الموبايل مع مزامنة لحظية مع Google Sheets، وجدولة تنبيهات ذكية ترسل إشعارات ورسائل بريد إلكتروني تلقائية بالفروع المتأخرة.",
        galleryHeader: "الشاشات الميدانية التفاعلية (6 وحدات تشغيلية)",
        galleryBadge: "بيانات وهمية 100% مطابقة لمعايير NDA",
        views: [
          {
            tab: "١. الرئيسية",
            title: "١. الشاشة الرئيسية للعمليات (Portal Hub)",
            img: "assets/images/app_clean/app_home_portal.jpg",
            desc: "لوحة التحكم السريع: وصول مباشر للتقارير اليومية، شبكة الفروع، عضويات الموظفين، المعاملات، الأسعار، وخطة العمل."
          },
          {
            tab: "٢. إدخال التقرير",
            title: "٢. بوابة إدخال التقرير اليومي",
            img: "assets/images/app_clean/app_daily_entry.jpg",
            desc: "واجهة إدخال مبسطة لمديري المناطق لرفع أرقام التشغيل والإيرادات فوراً ومزامنتها لحظياً مع جداول البيانات."
          },
          {
            tab: "٣. متابعة الأداء",
            title: "٣. لوحة متابعة الأداء اللحظي",
            img: "assets/images/app_clean/app_live_perf_clean.png",
            desc: "متابعة مباشرة للإيرادات (229,000 دولار)، المقابلات، الكروت الصادرة، ونسب إنجاز الفروع على مستوى الجمهورية."
          },
          {
            tab: "٤. تنبيه Push",
            title: "٤. تنبيه تأخر التقرير (Push Notification)",
            img: "assets/images/app_clean/app_notification_clean.png",
            desc: "إشعار تحذيري تلقائي على هاتف المسؤول يحدد بدقة الأندية والفروع التي لم تسجل تقريرها اليومي بحلول الموعد المحدد."
          },
          {
            tab: "٥. إيميل الإدارة",
            title: "٥. بريد إلكتروني تلقائي للإدارة التنفيذية",
            img: "assets/images/app_clean/app_alert_email_clean.png",
            desc: "تقرير تنبيهي فوري يصل لبريد المدير العام وقائد العمليات بقائمة الأندية المتأخرة مع رابط مباشر لجدول البيانات السحابي."
          },
          {
            tab: "٦. خطة العمل",
            title: "٦. جدول خطة العمل وحضور الموظفين",
            img: "assets/images/app_clean/app_workplan_clean.png",
            desc: "متابعة ورديات العمل وأداء الموظفين بأسماء واقعية، مع إمكانية تصدير التقرير بضغطة واحدة إلى PDF وExcel."
          }
        ],
        pipelineTitle: "مسار الأتمتة الشامل (Cloud Pipeline)",
        pipelineSteps: [
          {
            step: "١. الإدخال الميداني من الموبايل",
            detail: "يقوم مسؤولو الفروع بتسجيل الإيرادات، الحضور، وتجديدات اليوم مباشرة من التطبيق."
          },
          {
            step: "٢. المزامنة والرقابة السحابية",
            detail: "مزامنة فورية مع جداول Google Sheets، مع فحص آلي للموعد النهائي وإحصاء الفروع المتأخرة."
          },
          {
            step: "٣. التنبيهات الفورية وتغذية BI",
            detail: "إطلاق تنبيهات للموبايل وإيميل للإدارة، وتغذية داشبورد Power BI بالأرقام الحية لحظياً."
          }
        ],
        impactTitle: "الأثر التشغيلي المحقق (بيانات محمية)",
        impactMetrics: [
          { val: "100%", lbl: "التزام بالتقارير اليومية" },
          { val: "0 دقيقة", lbl: "متابعات هاتفية يدوية" },
          { val: "تحديث لحظي", lbl: "تغذية لوحات Power BI" }
        ]
      },
      powerbi: {
        category: "ذكاء الأعمال ونمذجة البيانات المتقدمة",
        title: "لوحة تحليلات المبيعات ودورة حياة العضويات التنفيذية (Power BI)",
        summaryTitle: "الملخص التنفيذي",
        summaryText: "حل تحليلي تنفيذي متقدم على منصة Power BI يوفر رؤية شاملة لمعدلات التجديد والانسحاب، والإيرادات الشهرية المتكررة، ونسب تحقيق المستهدفات البيعية عبر الفروع.",
        challengeTitle: "التحدي التشغيلي",
        challengeText: "غياب الرؤية المركزية الموحدة لدى الإدارة التنفيذية، واستغراق التقارير الشهرية أكثر من 10 أيام لتجميعها في جداول إكسيل دون إمكانية التحليل التفصيلي.",
        solutionTitle: "الحل الهندسي",
        solutionText: "تصميم نموذج بيانات نجمي (Star Schema) مع صياغة معادلات DAX متقدمة وأتمتة التحديث الدوري مباشرة من قاعدة بيانات Google Sheets.",
        galleryHeader: "معرض اللوحات التحليلية التفاعلية (3 شاشات)",
        galleryBadge: "بيانات وهمية 100% متوافقة مع معايير السرية",
        views: [
          {
            tab: "١. مؤشرات المبيعات",
            title: "١. لوحة مؤشرات المبيعات التنفيذية",
            img: "assets/images/powerbi_dashboard_1_clean.png",
            desc: "المؤشرات الإقليمية، أعداد الأعضاء عبر الـ 12 فرعاً، وتوزيع الإيرادات بين البيع المباشر والرقمي."
          },
          {
            tab: "٢. شجرة الأسباب",
            title: "٢. شجرة تحليل الأسباب الجذرية (AI Tree)",
            img: "assets/images/powerbi_dashboard_2_clean.png",
            desc: "تحليل تفصيلي بالذكاء الاصطناعي لتقصي مصادر الإيرادات عبر السنوات، القطاعات، الأقاليم، والفروع."
          },
          {
            tab: "٣. باقات العضوية",
            title: "٣. باقات العضوية ومستهدفات البيع",
            img: "assets/images/powerbi_dashboard_3_clean.png",
            desc: "توزيع الاشتراكات (فضية/ذهبية/بلاتينية)، ومؤشرات قياس تحقيق التارجت السنوي وإجمالي مبيعات الفروع."
          }
        ],
        impactTitle: "الأثر التشغيلي المحقق (بيانات محمية)",
        impactMetrics: [
          { val: "85%", lbl: "تسريع إعداد التقارير" },
          { val: "100%", lbl: "شفافية قياس المستهدفات" },
          { val: "12 فرعاً", lbl: "في لوحة موحدة" }
        ]
      }
    }
  };

  // ----------------------------------------------------------------------------
  // 3. Language Switcher Engine
  // ----------------------------------------------------------------------------
  const langToggleBtn = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  const htmlElement = document.documentElement;

  let currentLang = localStorage.getItem('portfolio-lang') || 'ar';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Button shows the OTHER language to switch to
    if (langLabel) {
      langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    // Apply translations to all DOM elements with data-i18n
    const dict = translations[lang] || translations.ar;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update page title and description
    const pageTitle = document.getElementById('pageTitle');
    const pageDesc = document.getElementById('pageDesc');
    if (pageTitle && dict.pageTitle) pageTitle.textContent = dict.pageTitle;
    if (pageDesc && dict.pageDesc) pageDesc.setAttribute('content', dict.pageDesc);

    // If modal is open, re-render it with the new language
    if (currentActiveStudyKey && modal && !modal.classList.contains('hidden')) {
      openModal(currentActiveStudyKey, currentActiveViewIndex);
    }

    // Re-initialize lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(newLang);
    });
  }

  // ----------------------------------------------------------------------------
  // 4. Dark / Light Theme Manager
  // ----------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggle');

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
  } else {
    htmlElement.classList.add('dark');
    htmlElement.classList.remove('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        localStorage.setItem('portfolio-theme', 'light');
      } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        localStorage.setItem('portfolio-theme', 'dark');
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 5. Project Category Filter Tabs
  // ----------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ----------------------------------------------------------------------------
  // 6. Interactive DAX Code Switcher
  // ----------------------------------------------------------------------------
  const daxSnippets = {
    revenue: `// Calculating Month-over-Month Revenue Growth %
Total Net Revenue = 
SUM(Fact_Subscriptions[Net_Amount])

Revenue Prior Month = 
CALCULATE(
    [Total Net Revenue],
    DATEADD(Dim_Date[Date], -1, MONTH)
)

MoM Revenue Growth % = 
DIVIDE(
    [Total Net Revenue] - [Revenue Prior Month],
    [Revenue Prior Month],
    0
)`,
    retention: `// Measuring Renewal Rate % across Expiration Windows
Active Members Count = 
CALCULATE(
    DISTINCTCOUNT(Fact_Subscriptions[Member_ID]),
    FILTER(
        Fact_Subscriptions,
        Fact_Subscriptions[Expiry_Date] >= TODAY()
    )
)

Renewal Rate % = 
VAR RenewedCount = 
    CALCULATE(
        DISTINCTCOUNT(Fact_Subscriptions[Member_ID]),
        Fact_Subscriptions[Transaction_Type] = "Renewal"
    )
VAR ExpiredEligibleCount = 
    CALCULATE(
        DISTINCTCOUNT(Fact_Subscriptions[Member_ID]),
        Fact_Subscriptions[Expiry_Date] <= TODAY()
    )
RETURN
    DIVIDE(RenewedCount, ExpiredEligibleCount, 0)`,
    quota: `// Evaluating Sales Rep Attainment Against Targets
Sales Rep Actual Sales = 
SUM(Fact_Subscriptions[Net_Amount])

Monthly Target Quota = 
SELECTEDVALUE(Dim_Sales_Agents[Quota_Monthly], 0)

Quota Attainment % = 
DIVIDE(
    [Sales Rep Actual Sales],
    [Monthly Target Quota],
    0
)`
  };

  const daxTabs = document.querySelectorAll('.dax-tab-btn');
  const daxCodeElement = document.getElementById('daxCode')?.querySelector('code');

  daxTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      daxTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const daxKey = tab.getAttribute('data-dax');
      if (daxCodeElement) {
        daxCodeElement.textContent = daxSnippets[daxKey] || '';
      }
    });
  });

  // ----------------------------------------------------------------------------
  // 7. Lightbox Modal Engine
  // ----------------------------------------------------------------------------
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxDownload = document.getElementById('lightboxDownload');
  const closeLightboxBtn = document.getElementById('closeLightbox');

  function openLightbox(src, title, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxTitle) lightboxTitle.textContent = title || (currentLang === 'ar' ? 'عرض عالي الدقة' : 'High-Resolution View');
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    if (lightboxDownload) lightboxDownload.href = src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
  }

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('#closeLightbox')) {
        closeLightbox();
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 8. Case Study Modal Engine
  // ----------------------------------------------------------------------------
  const modal = document.getElementById('caseStudyModal');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeModalBtn = document.getElementById('closeModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  let currentActiveStudyKey = null;
  let currentActiveViewIndex = 0;

  function renderModalBody(study, viewIndex) {
    const dict = translations[currentLang] || translations.ar;

    // Build View Tabs HTML
    const tabsHtml = study.views.map((v, idx) => {
      const isActive = idx === viewIndex;
      const activeClass = isActive 
        ? (study === caseStudiesData[currentLang].web ? 'active bg-slate-800 dark:bg-slate-800 border-cyan-500 text-cyan-400 font-bold' : (study === caseStudiesData[currentLang].android ? 'active bg-slate-800 dark:bg-slate-800 border-emerald-500 text-emerald-400 font-bold' : 'active bg-slate-800 dark:bg-slate-800 border-amber-500 text-amber-400 font-bold'))
        : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800';
      return `<button class="modal-view-tab p-2.5 rounded-lg border text-xs font-mono transition-all text-center ${activeClass}" data-view-idx="${idx}">${v.tab}</button>`;
    }).join('');

    // Active View Data
    const activeView = study.views[viewIndex] || study.views[0];

    // Build AI or Pipeline Section if present
    let extraSectionHtml = '';
    if (study.aiItems) {
      const aiItemsHtml = study.aiItems.map(item => `
        <li class="flex items-start gap-2">
          <span class="text-indigo-500 dark:text-indigo-400 mt-0.5 font-bold">•</span>
          <span><strong>${item.bold}</strong>${item.text}</span>
        </li>
      `).join('');
      extraSectionHtml = `
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">${study.aiTitle}</h4>
          <ul class="mt-2.5 space-y-2 text-xs text-slate-700 dark:text-slate-300">
            ${aiItemsHtml}
          </ul>
        </div>
      `;
    } else if (study.pipelineSteps) {
      const pipelineStepsHtml = study.pipelineSteps.map(step => `
        <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <strong class="text-slate-900 dark:text-white block mb-1 text-xs font-bold">${step.step}</strong>
          <p class="text-slate-600 dark:text-slate-400 text-xs">${step.detail}</p>
        </div>
      `).join('');
      extraSectionHtml = `
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-emerald-500/30 space-y-2.5">
          <h5 class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-mono">
            <i data-lucide="git-merge" class="w-4 h-4"></i>
            <span>${study.pipelineTitle}</span>
          </h5>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            ${pipelineStepsHtml}
          </div>
        </div>
      `;
    }

    // Build Metrics HTML
    const metricsHtml = study.impactMetrics.map(m => `
      <div>
        <div class="text-lg font-bold text-cyan-600 dark:text-cyan-400">${m.val}</div>
        <div class="text-[10px] text-slate-500 dark:text-slate-400">${m.lbl}</div>
      </div>
    `).join('');

    return `
      <div class="space-y-6">
        <!-- Executive Summary -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">${study.summaryTitle}</h4>
          <p class="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${study.summaryText}</p>
        </div>

        <!-- Challenge & Solution Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h5 class="text-xs font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
              <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-500"></i> ${study.challengeTitle}
            </h5>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${study.challengeText}</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h5 class="text-xs font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
              <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-500"></i> ${study.solutionTitle}
            </h5>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${study.solutionText}</p>
          </div>
        </div>

        <!-- Interactive Production Screen Viewer -->
        <div class="rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 space-y-3.5 shadow-sm">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 font-mono">
              <i data-lucide="layout" class="w-4 h-4 text-cyan-600 dark:text-cyan-400"></i>
              <span>${study.galleryHeader}</span>
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
              ${study.galleryBadge}
            </span>
          </div>

          <!-- View Selector Tabs -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5" id="modalViewTabs">
            ${tabsHtml}
          </div>

          <!-- Active Screen Display Box -->
          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 relative bg-slate-100 dark:bg-slate-900 shadow-inner flex flex-col items-center">
            <div class="relative w-full flex justify-center py-3 cursor-zoom-in group/activeImg" id="modalActiveImgWrapper" title="${dict.clickToEnlargeTxt}">
              <img id="modalActiveImg" src="${activeView.img}" alt="${activeView.title}" class="w-full h-auto max-h-[460px] object-contain transition-all duration-300">
              <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/activeImg:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span class="px-3.5 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-semibold border border-cyan-500/40 flex items-center gap-1.5 shadow-xl">
                  <i data-lucide="maximize-2" class="w-4 h-4 text-cyan-400"></i>
                  <span>${dict.clickToEnlargeTxt}</span>
                </span>
              </div>
            </div>

            <!-- View Caption & Direct Enlarge Button -->
            <div class="w-full p-3 bg-white dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
              <p id="modalActiveDesc" class="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                ${activeView.desc}
              </p>
              <button id="modalZoomBtn" class="shrink-0 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors">
                <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i>
                <span>${dict.enlargeBtnTxt}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Extra AI or Pipeline Section -->
        ${extraSectionHtml}

        <!-- Quantifiable Impact -->
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
          <h4 class="text-xs font-bold text-slate-900 dark:text-white mb-2 font-mono">${study.impactTitle}</h4>
          <div class="grid grid-cols-3 gap-2 text-center">
            ${metricsHtml}
          </div>
        </div>
      </div>
    `;
  }

  function openModal(studyKey, viewIndex = 0) {
    const studyDict = caseStudiesData[currentLang] || caseStudiesData.ar;
    const study = studyDict[studyKey];
    if (!study) return;

    currentActiveStudyKey = studyKey;
    currentActiveViewIndex = parseInt(viewIndex, 10) || 0;

    modalCategory.textContent = study.category;
    modalTitle.textContent = study.title;
    modalBody.innerHTML = renderModalBody(study, currentActiveViewIndex);
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    if (window.lucide) {
      window.lucide.createIcons();
    }

    attachModalTabHandlers(study);
  }

  function attachModalTabHandlers(study) {
    const viewTabs = modalBody.querySelectorAll('.modal-view-tab');
    const modalActiveImg = modalBody.querySelector('#modalActiveImg');
    const modalActiveDesc = modalBody.querySelector('#modalActiveDesc');
    const modalActiveImgWrapper = modalBody.querySelector('#modalActiveImgWrapper');
    const modalZoomBtn = modalBody.querySelector('#modalZoomBtn');

    viewTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.getAttribute('data-view-idx'), 10) || 0;
        currentActiveViewIndex = idx;
        const targetView = study.views[idx];
        if (!targetView) return;

        // Update active tab styles
        viewTabs.forEach(t => {
          t.classList.remove('active', 'border-cyan-500', 'border-emerald-500', 'border-amber-500', 'text-cyan-400', 'text-emerald-400', 'text-amber-400', 'font-bold', 'bg-slate-800');
          t.classList.add('bg-slate-100', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800', 'text-slate-600', 'dark:text-slate-400');
        });
        tab.classList.remove('bg-slate-100', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800', 'text-slate-600', 'dark:text-slate-400');
        tab.classList.add('active', 'bg-slate-800', 'border-cyan-500', 'text-cyan-400', 'font-bold');

        // Update active image and description
        if (modalActiveImg) modalActiveImg.src = targetView.img;
        if (modalActiveDesc) modalActiveDesc.textContent = targetView.desc;
      });
    });

    // Enlarge Handlers
    function triggerEnlarge() {
      const currentView = study.views[currentActiveViewIndex] || study.views[0];
      openLightbox(currentView.img, currentView.title, currentView.desc);
    }

    if (modalActiveImgWrapper) {
      modalActiveImgWrapper.addEventListener('click', triggerEnlarge);
    }
    if (modalZoomBtn) {
      modalZoomBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerEnlarge();
      });
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    currentActiveStudyKey = null;
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 9. Delegated Click Listener for ALL .open-case-study Triggers
  // ----------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-case-study');
    if (trigger) {
      e.preventDefault();
      const studyKey = trigger.getAttribute('data-study');
      const viewIndex = trigger.getAttribute('data-view') || 0;
      if (studyKey) {
        openModal(studyKey, viewIndex);
      }
    }
  });

  // ----------------------------------------------------------------------------
  // 10. Global Keyboard ESC Key Handler
  // ----------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && !lightbox.classList.contains('hidden')) {
        closeLightbox();
      } else if (modal && !modal.classList.contains('hidden')) {
        closeModal();
      }
    }
  });

  // ----------------------------------------------------------------------------
  // 11. Initial Application Setup
  // ----------------------------------------------------------------------------
  setLanguage(currentLang);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  console.log("Mina Hany Fekry AI-Powered Portfolio initialized successfully (v4.1).");
});
