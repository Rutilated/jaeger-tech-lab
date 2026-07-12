"use client";

import { useMemo, useState } from "react";

type Language = "en" | "zh";
type Category = "all" | "ta" | "embedded" | "interactive";

const projects = [
  {
    id: "01",
    category: "ta" as Category,
    status: "IN PROGRESS",
    title: { en: "Shader Study Log", zh: "Shader 学习日志" },
    description: {
      en: "A growing collection of material, lighting and VFX studies from a 12-month technical art transition.",
      zh: "记录 12 个月技术美术转型过程中的材质、光照与 VFX 练习。",
    },
    tags: ["SHADERS", "VFX", "REAL-TIME"],
    tone: "cyan",
  },
  {
    id: "02",
    category: "embedded" as Category,
    status: "PROTOTYPE",
    title: { en: "ESP32-C3 Remote Car", zh: "ESP32-C3 蓝牙遥控小车" },
    description: {
      en: "A four-motor prototype combining Bluetooth control, ultrasonic avoidance and PID speed regulation.",
      zh: "结合蓝牙控制、超声波避障与 PID 调速的四电机原型。",
    },
    tags: ["ESP32", "PID", "SENSORS"],
    tone: "blue",
  },
  {
    id: "03",
    category: "interactive" as Category,
    status: "EXPERIMENT",
    title: { en: "Multi-node Sensor Network", zh: "多节点感知网络" },
    description: {
      en: "ESP-NOW nodes combine vibration and radar sensing with a visual control interface and alerts.",
      zh: "通过 ESP-NOW 连接振动与雷达传感节点，并提供可视化控制和报警反馈。",
    },
    tags: ["ESP-NOW", "RADAR", "UI"],
    tone: "coral",
  },
  {
    id: "04",
    category: "embedded" as Category,
    status: "LAB BUILD",
    title: { en: "Zigbee Environment Link", zh: "Zigbee 环境监测链路" },
    description: {
      en: "A CC2530 coordinator-router system for serial control, device feedback and DHT11 telemetry.",
      zh: "基于 CC2530 协调器与路由器，实现串口控制、设备反馈和 DHT11 数据回传。",
    },
    tags: ["ZIGBEE", "CC2530", "IOT"],
    tone: "violet",
  },
];

const copy = {
  en: {
    nav: ["WORK", "LAB LOG", "ABOUT"],
    kicker: "PORTFOLIO SYSTEM / ONLINE",
    titleA: "BETWEEN",
    titleB: "ART",
    titleC: "SYSTEMS",
    subtitle: "Technical Artist in Training · Real-time Graphics · VR · Interactive Systems",
    primary: "EXPLORE PROJECTS",
    secondary: "VIEW LAB LOG",
    learning: "CURRENTLY LEARNING: SHADERS & VFX",
    selected: "SELECTED PROJECTS",
    selectedBody: "Experiments where visual thinking meets engineering systems.",
    filters: { all: "ALL", ta: "TECH ART", embedded: "EMBEDDED", interactive: "INTERACTIVE" },
    labTitle: "THE LEARNING LOOP",
    labBody: "Small, visible outputs every week — concept, experiment, deliverable, reflection.",
    weeks: [
      ["WEEK 01", "LIGHT & NORMALS", "FOUNDATION"],
      ["WEEK 02", "MATERIAL LANGUAGE", "UP NEXT"],
      ["WEEK 03", "SHADER GRAPH", "PLANNED"],
      ["WEEK 04", "REAL-TIME VFX", "PLANNED"],
    ],
    aboutLabel: "ABOUT / 03",
    aboutTitle: "FROM CONTROL SYSTEMS TO REAL-TIME ART.",
    aboutBody:
      "I’m Jaeger, an automation student moving toward technical art. My work connects code, hardware and visual interaction — with a long-term focus on VR and real-time experiences.",
    disciplines: ["AUTOMATION", "REAL-TIME GRAPHICS", "INTERACTIVE SYSTEMS", "VR / XR"],
    contactLabel: "NEXT CONNECTION",
    contactTitle: "LET’S BUILD SOMETHING THAT FEELS ALIVE.",
    contactBody: "Contact and social links will be connected before the public launch.",
    contactButton: "PROJECT INDEX",
  },
  zh: {
    nav: ["作品", "实验日志", "关于"],
    kicker: "个人作品集系统 / 在线",
    titleA: "游走于",
    titleB: "艺术",
    titleC: "系统之间",
    subtitle: "技术美术学习者 · 实时图形 · VR · 交互系统",
    primary: "查看项目",
    secondary: "查看实验日志",
    learning: "当前学习：SHADERS 与 VFX",
    selected: "精选项目",
    selectedBody: "让视觉思维与工程系统相遇的实验记录。",
    filters: { all: "全部", ta: "技术美术", embedded: "嵌入式", interactive: "交互" },
    labTitle: "持续学习循环",
    labBody: "每周完成一个可见的小成果：概念、实验、交付物与复盘。",
    weeks: [
      ["第 01 周", "光照与法线", "基础"],
      ["第 02 周", "材质语言", "下一步"],
      ["第 03 周", "SHADER GRAPH", "计划中"],
      ["第 04 周", "实时 VFX", "计划中"],
    ],
    aboutLabel: "关于 / 03",
    aboutTitle: "从控制系统走向实时艺术。",
    aboutBody:
      "我是 Jaeger，一名正在转向技术美术的自动化专业学生。我的项目连接代码、硬件与视觉交互，长期方向是 VR 和实时体验。",
    disciplines: ["自动化", "实时图形", "交互系统", "VR / XR"],
    contactLabel: "建立连接",
    contactTitle: "一起做点有生命力的东西。",
    contactBody: "正式发布前将在这里接入邮箱和社交主页。",
    contactButton: "返回项目",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [filter, setFilter] = useState<Category>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === "all" || project.category === filter),
    [filter],
  );
  const filterKeys: Category[] = ["all", "ta", "embedded", "interactive"];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jaeger Tech Lab home">
          <span>JAEGER</span><i>//</i><small>TECH LAB</small>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
          <a href="#lab" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <button className="language-switch" onClick={() => setLanguage(language === "en" ? "zh" : "en")} aria-label="Switch language">
            {language === "en" ? "中文" : "EN"}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="hero-index" aria-hidden="true"><b>01</b><span /><span /><span /></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="signal-dot" />{t.kicker}</div>
          <h1>
            <span>{t.titleA}</span>
            <span>{t.titleB} <em>&amp;</em> {t.titleC}</span>
          </h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">{t.primary}<span>↘</span></a>
            <a className="button button-secondary" href="#lab">{t.secondary}<span>→</span></a>
          </div>
          <div className="learning-status"><span className="status-core" />{t.learning}<i /></div>
        </div>

        <div className="mascot-zone" aria-label="Virtual lab assistant illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="mascot-label top"><span>AVATAR_01</span><b>ONLINE</b></div>
          <img src="/mascot-production.png" alt="Original anime virtual laboratory assistant inside a hologram capsule" />
          <div className="mascot-label bottom"><span>SYNC RATE</span><b>98.7%</b></div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="projects section-shell" id="work">
        <div className="section-heading">
          <div><span className="section-number">02</span><p>{t.selected}</p></div>
          <h2>{t.selectedBody}</h2>
        </div>
        <div className="filter-bar" role="group" aria-label="Project filters">
          {filterKeys.map((key) => (
            <button key={key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>{t.filters[key]}</button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.id}>
              <div className="card-top"><span>{project.id} / 04</span><b>{project.status}</b></div>
              <div className="project-visual" aria-hidden="true">
                <span className="visual-axis x" /><span className="visual-axis y" />
                <i /><i /><i />
              </div>
              <h3>{project.title[language]}</h3>
              <p>{project.description[language]}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="card-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-section" id="lab">
        <div className="section-shell lab-inner">
          <div className="lab-intro">
            <span className="section-number">LAB LOG / 12 MONTHS</span>
            <h2>{t.labTitle}</h2>
            <p>{t.labBody}</p>
            <div className="loop-graphic" aria-hidden="true"><span>LEARN</span><i>→</i><span>BUILD</span><i>→</i><span>REFLECT</span></div>
          </div>
          <div className="week-list">
            {t.weeks.map((week, index) => (
              <article key={week[0]} className={index === 0 ? "current" : ""}>
                <span>{week[0]}</span><h3>{week[1]}</h3><b>{week[2]}</b><i>→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-panel">
          <div className="about-copy">
            <span className="section-number">{t.aboutLabel}</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutBody}</p>
          </div>
          <div className="discipline-grid">
            {t.disciplines.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b></div>)}
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-card">
          <span className="section-number">{t.contactLabel}</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <a className="button button-primary" href="#work">{t.contactButton}<span>↑</span></a>
        </div>
      </section>

      <footer><span>JAEGER // TECH LAB</span><p>ART × SYSTEMS × CURIOSITY</p><b>© 2026</b></footer>
    </main>
  );
}
