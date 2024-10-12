import styles from './contact.module.css';

const Contact = () => {
  return (
    <div id="Contact">
      <section className={styles['contact-section']}>
        <div className={styles['contact-container']}>
          <div className={styles['map-container']}>
            <iframe
              width="100%"
              height="100%"
              className={styles['map-iframe']}
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6601071439195!2d67.0330513744302!3d24.875455744659195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5d2407bf3f%3A0x869d5ecf2b45f202!2sMuhammad%20Ali%20Habib%20Rd%2C%20Catholic%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1724351317505!5m2!1sen!2s"
              style={{ filter: 'contrast(1.2) opacity(0.4)' }}
            />
            <div className={styles['address-card']}>
              <div>
                <h2 className={styles['contact-info-heading']}>ADDRESS</h2>
                <p>Muhammad Ali Habib Road, Karachi.</p>
              </div>
              <div>
                <h2 className={styles['contact-info-heading']}>EMAIL</h2>
                <a href="mailto:NineteenTech@gmail.com" className={styles['email-link']}>
                  NineteenTech@gmail.com
                </a>
                <h2 className={styles['contact-info-heading']}>PHONE</h2>
                <p>0333-XXXXXXX</p>
              </div>
            </div>
          </div>
          <div className={styles['form-container']}>
            <h2 className={styles['form-title']}>Contact</h2>
            <p className={styles['form-description']}>Feel Free to Contact</p>
            <div className={styles['form-group']}>
              <label htmlFor="name" className={styles['form-label']}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles['form-input']}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="email" className={styles['form-label']}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles['form-input']}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="message" className={styles['form-label']}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles['form-textarea']}
              />
            </div>
            <button className={styles['submit-button']}>Send Message</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
