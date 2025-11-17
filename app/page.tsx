"use client";

import { color } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
    
const colors = {
  primary: "#ffffffff", // blue-800
  secondary: "#3bf0f6ff", // blue-500
  accent: "#10b981", // green-500
  background: "#000000ff", // blue-50    
  secondaryBackground: "#a1005eff", // blue-50
  card: "#008db8ff", // blue-50
  text: "#ffffffff", // gray-800
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const speed = 200; // pixels per second
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const screenWidth = window.innerWidth;
    const startPosition = -wrapper.offsetWidth; // Start off-screen on the left
    const endPosition = screenWidth; // End off-screen on the right
    const distance = endPosition - startPosition; // Total distance to travel
    const duration = distance / speed; // seconds

    wrapper.style.setProperty("--start-position", `${startPosition}px`);
    wrapper.style.setProperty("--distance", `${distance}px`);
    wrapper.style.animationDuration = `${duration}s`;
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  
const faqData = [
    {
      question: 'האתר עדיין בבניה?',
      answer: 'כן ;)',
    },
    {
      question: 'הא@@@@@ @@@@@@@@@ @@@@@ @@@@@@ @@@@@@ @@@@@ @@@@@@@@@@ @@@@@ @@@@',
      answer: 'כן ;) @@@@@ @@@@@@@ @@@@@@@@@ @@@@@@@@@@ @@@@@@@@@ @@@@@@ @@@@@ @@@@@@ @@@@@@@ @@@@@@@ @@@ @@',
    },
    {
      question: 'האתר עדיין בבניה?',
      answer: 'כן ;)',
    },
    {
      question: 'האתר עדיין בבניה?',
      answer: 'כן ;)',
    },
  ];

  const gamesButtons = [
    {
      name: 'SET SAIL',
      link: 'https://play.google.com/store/apps/details?id=com.TheSleepingFox.SetSail',
      icon: '/images/SetSailIcon.png',
      barcode: '/images/setsailbarcode.png'
    },
    {
      name: 'qb',
      link: 'https://play.google.com/store/apps/details?id=com.TheSleepingFox.qb',
      icon: '/images/qb2icon2.png',
      barcode: '/images/QBBarcode.png'
    }
  ]
 

  const learningCards = [
    {
      symbol:'🎮',
      header : 'פיתוח משחקים',
      subjects: [
            { title: "C#", description: "יסודות השפה וכתיבת קוד למשחקים." },
            { title: "Unity", description: "מנוע משחקים." },
            { title: "Rigidbody ופיזיקה", description: "תנועה, התנגשויות, כוחות, טריגרים." },
            { title: "UI/UX למשחקים", description: "תפריטים, HUD, ממשק נוח וברור לשחקן." },
            { title: "אפקטים (VFX) ושיידרים", description: "חלקיקים, פיצוצים, אש, עשן, סטייליזציה." },
            { title: "פיתוח למובייל", description: "שליטת מגע, אופטימיזציה, גדלי מסך ובנייה." },
      ]
    },
    {
      symbol:'🎬',
      header : 'אנימציה',
      subjects: [
            { title: "Blender", description: "תוכנה ליצירה בתלת־ממד." },
            { title: "מודלינג", description: "בניה של חפצים, דמויות, עולמות." },
            { title: "טקסטורות", description: "צביעה ומרקם של המודל." },
            { title: "פריסת UV", description: "פריסה דו מימדית של המודל והכנה לטקסטורות." },
            { title: "Rigging", description: "בניית שלד למודל, לאפשרות הנפשה." },
            { title: "הנפשה", description: "יצירת תנועה: הליכה, ריצה, הבעות פנים וכל מה שהופך דמות לחיה." },
          ]
    }
  ]

  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to handle click on an FAQ item
  const handleFaqClick = (index: number) => {    
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-50" style={{ backgroundColor: colors.background }} dir="rtl">
      
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-black shadow-md" dir="ltr">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <img src='./images/SmallIcon.png' className="w-10 h-10 "/>
            
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="min-h-screen px-6 flex flex-col justify-center" style={{ background: `linear-gradient(to bottom, ${colors.background}, ${colors.card})` }}>       
        <div className="flex items-center justify-center ">   
           <div className="max-w-4xl text-center">            
              <h2 className="text-5xl font-bold mb-6" style={{ color: colors.primary }}>
              חולמים לפתח משחק❓
              </h2>
              <p className="text-xl md:text-2xl mb-8 ml-2 mr-2" style={{ color: colors.text }}>
                לא יודעים מאיפה להתחיל❓ 
                <br></br>
                יש לכם רעיון אבל אין לכם את הכלים להפוך אותו למשחק אמיתי❓
              </p>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: colors.secondaryBackground }}
              >
               הנה ההזדמנות שלכם!
              </button>
            </div>           
            
        </div>

        <div ref={wrapperRef} className="run-wrapper">                    
            <div className="boy-run-animation md:opacity-100 pointer-events-none scale-[2]" />
        </div>
        
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 flex flex-col" style={{ background: `linear-gradient(to bottom, ${colors.card}, ${colors.background})` }}>
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-grow">
          <h2 className="text-6xl font-bold mb-8 text-right" style={{ color: colors.text }}>
          מי אני❓
          </h2>
          <div className="rounded-xl p-8 transition-shadow mb-[-140] pb-20" style={{
          backgroundColor: colors.background,
          boxShadow: `0 10px 15px -3px ${colors.text}40, 0 4px 6px -4px ${colors.primary}60`
          }}>
            <div className="text-lg leading-relaxed mb-4" style={{ color: colors.text }}>              
              <img src='./images/me.png' className="w-30 h-30 rounded-full float-left mr-4 mb-2"/>
              <div>
                <p>היי!</p>
                <br/>
                <p>
                  אני גל, אני מפתח משחקים ותלתיסט כבר יותר מעשור. עבדתי בסטודיואים לאנימציה וחברות
                  גיימינג בתפקידים שונים, לימדתי בקורסים לפיתוח משחקים לבוגרים ונוער ולא פחות חשוב:
                  אני Divine 3 ב-Dota 2.
                </p>
                <br/>
                <p>
                  היום אני יוצר את המשחקים שלי לבד, מהשלב הראשון ועד האחרון: מודלים, טקסטורות,
                  אנימציה, ריגים, שיידרים, אפקטים, וכמובן - קוד. הרבה קוד.
                </p>
                <br/>
                <p className="mb-18">
                  אם אתם רוצים ללמוד איך אפשר לבנות את המשחק שלכם, דברו איתי.<br />
                  <br/>
                 בנתיים אתם מוזמנים להוריד ולנסות את המשחקים שפיתחתי 
                 (Android)
                </p>
                </div>
            </div>  

            <div className="flex justify-center gap-2">
              {gamesButtons.map((item, index) => (
                <div className="gameContainer"
                  key={index}>
                <button
                  onClick={() => window.open(item.link, '_blank')}
                  // Added max-h-48 (or a different max height) to the button itself
                  // The w-40 class already sets a specific width.
                  className="gameButton"
                >
                  <span className="" dir="ltr">{item.name}</span>
                  <img src={item.icon} className="w-25 h-25 rounded" />
                </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* services Section */}
      <section id="services" className="py-20 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-12 text-right" style={{ color: colors.text }}>
            מה אני מציע❓
          </h2>
          <div className="gameContainer">
            <div className="gameButton" style={{ color: colors.text} }>
              <span className="text-lg leading-relaxed mb-4">
                <p className="mb-5">
                  ברגע שעובדים על משהו שאוהבים - לומדים הכי טוב, זה מה שאני מאמין.
                <b> כשיש את הלמה מוצאים את האיך.</b>
                </p>
                <p className="mb-5">
                אל תבינו אותי לא נכון. אפשר גם ללמוד מהרצאה ולשנן אותה שוב ושוב כמו תוכי.
  אבל כולנו שונים, לומדים בקצבים אחרים, וברגע שצריך לבנות משהו שלא הופיע בהרצאה… נתקעים. לפעמים אפילו שוכחים לגמרי מה היה שם.               
                </p>
                <p className="mb-5">                    
                    כשאני יוצר משהו משלי אני לא מעתיק ולא משחזר. אני בונה חיבורים אמיתיים במוח - כאלה שמחזיקים. השריר של העשייה מתחזק, כי אי-אפשר להרצות על הכל. בסופו של דבר, הילד צריך ללכת לבד.
                </p>
                <p className="mb-5">
                  בהתחלה זה לפעמים נראה גדול מדי, במיוחד בפיתוח משחקים עם כל התפקידים השונים.
                  זה יכול להוביל לקיפאון או לויתור בלי אפילו לנסות.
                </p>
                <p>
                  בשביל זה אני כאן,
                  אני רוצה ללוות אתכם ביצירת
                  <b> המשחק שלכם</b>.
                </p>
                <p>
                  אתם תיצרו, אני אכוון, אתם תלמדו תוך כדי עשייה בקצב
                  <b> שלכם </b>
                  ועל משהו שאתם אוהבים ורוצים.
                </p>
              </span>
            </div>
            </div>
          </div>
      </section>

      {/* syllabus Section */}
      <section id="syllabus" className="px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-12 text-right" style={{ color: colors.text }}>
            מה אפשר ללמוד❓
          </h2>
          <div className="gameContainer">
            <div className="gameButton" style={{ color: colors.text} }>
              <span className="text-lg leading-relaxed mb-4">
                <p className="mb-5">
                  הכנתי עבורכם רשימה של חלק מהדברים שאני יכול ללמד אתכם בפיתוח משחקים ואנימציה.
                </p>
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-18">         
            
            {learningCards.map((item, index)=>(
              <div key={index} className="rounded-xl p-8 transition-shadow" style={{ background: `linear-gradient(to bottom, ${colors.background}, ${colors.secondaryBackground})` }}>
                <li className="flex items-start gap-2 justify-center">
                <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center text-3xl" style={{ backgroundColor: colors.text }}>
                  {item.symbol}
                </div>
              </li>
              <li className="flex items-start gap-2 justify-center">
                  <h3 className="text-2xl font-bold mb-4 justify-center" style={{ color: colors.text }}>
                   {item.header}
                  </h3>
              </li>
              <ul className="space-y-3" style={{ color: colors.text }}>
                {item.subjects.map((subject, i)=>(
                  <li key= {i} className="flex items-start gap-2 justify-right">
                    <span style={{ color: colors.accent }}>✓</span>
                    <span><b>{subject.title}</b> - {subject.description}</span>
                  </li>
                ))}                
              </ul>
              </div>))}          
            
          </div>
        </div>
      </section>

      {/* FAQ section */ }
      <section id="faq" className="py-20 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-12" style={{ color: colors.text }}>
                         שאלות נפוצות❓
          </h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`gameContainer`}
                style={{
                  backgroundColor: colors.secondaryBackground
                }}
              >
                {/* Question Rectangle (Clickable) */}
                <button
                    className="gameButton w-full p-5 font-bold text-2xl flex items-center justify-start" 
                    onClick={() => handleFaqClick(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {/* Plus/Minus Icon */}
                    <span className="ml-5">
                      {openIndex === index ? '➖' : '➕'}
                    </span>

                    {/* Question Text */}
                    <span 
                      style={{
                        color: colors.text                
                      }}
                    >
                      {item.question}
                    </span>
                </button>

                {/* Answer (Conditionally visible) */}
                <div
                  id={`faq-answer-${index}`}
                  // Dynamic height for smooth collapse/expand (Tailwind/CSS trick)
                  style={{
                    maxHeight: openIndex === index ? '200px' : '0', // 200px is a safe max-height, adjust if answers are longer
                    background:  "black",
                    padding: 3,
                    fontSize: 18,
                    overflow: "hidden",
                    paddingBlockEnd: 0,
                    paddingBlockStart: 0,
                    borderEndEndRadius: 10,
                    borderEndStartRadius: 10,
                    borderStartEndRadius: 10,
                    borderStartStartRadius: 10
                  }}
                >
                  <p className="p-5 pt-0 text-right mr-5" style={{ color: colors.text }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative" style={{ background: `linear-gradient(to bottom, ${colors.background} 50%, ${colors.secondaryBackground} 200%)`  }}>
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" style={{ color: colors.primary }}>
            בואו נתחיל
        </h2>
        <p className="text-xl mb-8" style={{ color: colors.text }}>
            מעוניינים ללמוד אנימציה או פיתוח משחקים? בואו נדבר!
        </p>
        <a
          href="https://wa.me/9720545990093"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center gap-3 mx-auto inline-flex"
          style={{ backgroundColor: colors.accent }}
        >
          <span>💬</span>
          WhatsApp
        </a>
        </div>
        <img 
            src="/images/fall.png" 
            alt="Yoram" 
            className="mx-auto z-0 w-80 h-auto pointer-events-none" 
        />

      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-black border-t">
        <p style={{ color: colors.text }}>
          © {new Date().getFullYear()} גל מילון. כל הזכויות שמורות.
        </p>
      </footer>
    </div>
  );
}
