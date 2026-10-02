import Image from "next/image";
import { ArrowUpRight, Mail, MessageSquareText, Phone } from "lucide-react";
import styles from "./Hero.module.css";

const PHONE_DISPLAY = "(330) 880-8254";
const PHONE_HREF = "+13308808254";
const EMAIL = "Sarah.Ross2008@gmail.com";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <header className={styles.brand}>
          <a href="/" className={styles.wordmark} aria-label="Sarah Ross Office Cleaning, LLC, home">
            <span className={styles.wmName}>Sarah Ross</span>
            <span className={styles.wmSub}>Office Cleaning, LLC</span>
          </a>
          <a href={`tel:${PHONE_HREF}`} className={styles.brandPhone} aria-label={`Call ${PHONE_DISPLAY}`}>
            <Phone size={18} strokeWidth={1.75} aria-hidden />
          </a>
        </header>

        <div className={styles.body}>
          <h1 id="hero-title" className={styles.title}>
            Cleaned by the owner.
            <span className={styles.titleBlue}> Every account, every visit.</span>
          </h1>

          <p className={styles.lede}>
            For over 25 years Sarah Ross has kept Mahoning Valley workplaces clean, from steel and
            energy to medical offices and trucking terminals. She builds the schedule around your
            building, then does the work herself.
          </p>

          <div className={styles.actions}>
            <a href={`tel:${PHONE_HREF}`} className={styles.call}>
              <Phone size={20} strokeWidth={1.75} aria-hidden />
              <span>
                Call <span className={styles.callNum}>{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a href={`sms:${PHONE_HREF}`} className={styles.text}>
              <MessageSquareText size={20} strokeWidth={1.75} aria-hidden />
              <span>Text for a free quote</span>
            </a>
          </div>

          <a href={`mailto:${EMAIL}`} className={styles.email}>
            <Mail size={16} strokeWidth={1.75} aria-hidden />
            <span>{EMAIL}</span>
          </a>
        </div>

        <dl className={styles.facts}>
          <div>
            <dt>In the valley</dt>
            <dd>25+ years</dd>
          </div>
          <div>
            <dt>Serving</dt>
            <dd>Trumbull &amp; Mahoning</dd>
          </div>
          <div>
            <dt>Supplies</dt>
            <dd>We bring them</dd>
          </div>
        </dl>
      </div>

      <div className={styles.field}>
        <nav className={styles.nav} aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href={`tel:${PHONE_HREF}`} className={styles.navPhone}>
            <span>{PHONE_DISPLAY}</span>
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
          </a>
        </nav>

        <div className={styles.stage}>
          <div className={styles.photo}>
            <Image
              src="/corridor.jpg"
              alt="A freshly cleaned office corridor with a polished floor"
              fill
              priority
              sizes="(max-width: 899px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
