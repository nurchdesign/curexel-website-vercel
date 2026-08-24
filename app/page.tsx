import Image from "next/image";

const applications = [
  ["Pediatric & adults vaccine", "application-vaccine.svg"], ["Pain management", "application-pain.svg"], ["Growth hormones", "application-growth.svg"], ["In-vitro fertilization (IVF)", "application-ivf.svg"], ["Diabetes", "application-diabetes.svg"],
];
const milestones = [["June 2021", "Curexel secured core and follow-up IP patents"], ["November 2021", "Won NIH–Prayas and Startup India grants"], ["June 2022", "Locked in LOIs with leading clinics and labs"], ["November 2025", "Joined top regulatory accelerators, and opened its CDSCO Class B approval doors"]];
const partners = ["asset-06.png", "asset-07.png", "asset-09.png", "asset-14.png", "asset-17.png"];
const press = [["asset-15.png", "Medical Healthcare Innovation Awards, Chennai 2024", "September 2024"], ["asset-12.png", "Ramaiah Evolute Star Startup Award", "October 2024"], ["asset-17.png", "Global Bio India 2024, Delhi", "October 2024"]];
const team = [["asset-05.png", "Shreyas N J", "Founder @ Curexel Technologies"], ["asset-10.png", "Vasudha Narasimha Swamy", "CEO, Founder @ Curexel Technologies"], ["asset-08.png", "Kedar Badnikar", "Founder @ Curexel Technologies"]];
const asset = (name: string) => `/figma/updated/${name}`;

export default function Home() {
  return <main>
    <header className="site-header">
      <a href="#top" className="logo"><Image src={asset("asset-02.png")} alt="Curexel" width={168} height={76} priority /></a>
      <nav>
        <a href="#applications">Applications</a>
        <a href="#story">Our Story</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact Us</a>
        <a className="button compact" href="#book">Book a Demo</a>
      </nav>
    </header>
    <section className="hero" id="top"><Image src={asset("asset-01.jpeg")} alt="Clinician caring for a child" fill priority className="hero-photo" sizes="100vw" /><div className="hero-card"><h1>Make Every Injection <em>Painless</em></h1><p className="lead">Our advanced drug delivery systems delivers medicine without the sting — gentle, precise, and safe for all ages.</p><p>Every year, 24 billion injections cause fear and skipped treatments. We’re changing that — one painless shot at a time.</p><a className="button" href="#book">Book a Demo</a></div></section>
    <div className="clinical"><strong>Clinical Stage:</strong> CDSCO Class B dossier in progress</div>
    <section className="section applications" id="applications"><h2>Applications</h2><div className="app-grid">{applications.map(([name, icon], index) => <article className={index % 2 === 0 ? "accent" : ""} key={name}><Image src={asset(icon)} alt="" width={60} height={60} /><h3>{name}</h3></article>)}</div></section>
    <section className="section story" id="story"><div className="copy"><h2>Born at IISc. Built to end needle fear.</h2><p>Curexel began in Bengaluru inside a collaborative lab at the Indian Institute of Science. A small team of biomedical engineers noticed one truth: fear of pain keeps millions from routine care. We focused on one problem and designed a device that reimagines how drugs and diagnostics enter the body.</p></div><div className="mission"><span>“</span><div><h3>Our Mission</h3><p>To eliminate needle pain and anxiety from healthcare — vaccination, IV and cannulation into a gentle, effortless experience. Injections that are pain-free, clinically efficient, and affordable for all.</p></div></div><div className="journey"><h3>Our Journey</h3>{milestones.map(([date, text]) => <div className="milestone" key={date}><time>{date}</time><i /><p>{text}</p></div>)}</div></section>
    <section className="section partners"><h2>We are Supported By</h2><div>{partners.map((name) => <Image src={asset(name)} alt="Partner organization" width={150} height={70} key={name} />)}</div></section>
    <section className="section press" id="press"><div className="copy"><h2>Recognition &amp; Press</h2><p>Selected recognition: NDHI–Prayas, Startup India grants, regulatory accelerators — moving from concept to clinical launch in record time.</p></div><div className="three-grid">{press.map(([image, title, date]) => <article key={title}><Image src={asset(image)} alt="" width={334} height={314} /><span>{date}</span><h3>{title}</h3><p>Recognized for innovative healthcare technology solutions.</p></article>)}</div></section>
    <section className="section team" id="team"><div className="copy"><h2>Our Team</h2><p>Curexel Technologies was founded in 2023. Behind Curexel is a diverse and passionate team of healthcare professionals, designers, and innovators. Together, we blend medical insight with user-focused design to build solutions that heal without hurting.</p></div><div className="three-grid">{team.map(([image, name, role]) => <article key={name}><Image src={asset(image)} alt={name} width={334} height={314} /><h3>{name}</h3><p>{role}</p></article>)}</div></section>
    <section className="contact" id="contact"><div className="contact-image"><Image src={asset("asset-20.png")} alt="Curexel healthcare professional" fill sizes="(max-width: 800px) 100vw, 626px" /></div><div><h2>Contact Us</h2><p><strong>Address:</strong> 11/A, 5th Main, 2nd Cross, Pramoda Layout, Nayanadahalli, Bengaluru – 560039</p><p><strong>Email:</strong> info@curexel.com</p><a className="button" href="https://wa.me/919876543210">Connect with Us</a></div></section>
    <section className="section book" id="book"><div className="copy"><h2>Ready to see it? Book a demo.</h2><p>See the device in a clinical setting and discuss integration with your healthcare facility.</p></div><a className="button" href="mailto:info@curexel.com?subject=Book%20a%20Curexel%20demo">Book a Demo</a></section>
    <footer><div><h2>Curexel Technologies<br />Pvt Ltd</h2><p>Eliminating needle pain and anxiety from healthcare.</p></div><div><h3>Quick Links</h3><a className="button compact" href="#book">Book a Demo</a><a href="#applications">Applications</a><a href="#story">Our Story</a><a href="#press">Awards &amp; Recognition</a><a href="#team">Our Team</a><a href="#contact">Contact</a></div><div><h3>Contact</h3><p>11/A, 5th Main, 2nd Cross, Pramoda Layout, Nayanadahalli, Bengaluru – 560039</p><a href="mailto:info@curexel.com">info@curexel.com</a><p className="social">in ◎ ◌</p></div><small>© Curexel Technologies Pvt Ltd 2025. All rights reserved.</small></footer>
  </main>;
}
