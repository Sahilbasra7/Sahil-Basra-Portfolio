/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useResponsive } from '../hooks/useResponsive';

function Contact() {
  const { isMobile, isTablet } = useResponsive();
  const [form, setForm] = useState({
    name: '',
    email: '',
    purpose: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // 🔑 Clear error for this field when user fixes input
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Enter a valid email';

    if (!form.purpose) newErrors.purpose = 'Please select a purpose';
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Submit to FormSubmit.co
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('purpose', form.purpose);
        formData.append('message', form.message);
        formData.append('_subject', `Portfolio Contact: ${form.purpose}`);
        formData.append('_captcha', 'false'); // Disable captcha, set to 'true' if you want captcha
        formData.append('_template', 'table'); // Use table format for better email readability

        const response = await fetch('https://formsubmit.co/basrasahil32@gmail.com', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setSuccess(true);
          setForm({ name: '', email: '', purpose: '', message: '' });

          setTimeout(() => {
            setSuccess(false);
            setIsSubmitting(false);
          }, 4000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ submit: 'Failed to send message. Please try again.' });
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const getStyles = () => ({
    section: {
      padding: isMobile ? '24px 20px 40px' : '32px 40px 120px',
      maxWidth: '900px',
      minHeight: isMobile ? 'auto' : '100vh',
      scrollMarginTop: isMobile ? '80px' : '0px',
      paddingTop: isMobile ? '24px' : '100px',
    },
    heading: {
      fontSize: isMobile ? '42px' : isTablet ? '60px' : '76px',
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: '-1px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    card: {
      padding: isMobile ? '20px' : '24px',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'box-shadow 0.25s ease, transform 0.25s ease',
    },
    subHeading: {
      fontSize: isMobile ? '16px' : '18px',
      opacity: 0.65,
      marginBottom: isMobile ? '20px' : '24px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '20px' : '24px',
    },
    row: {
      display: 'flex',
      gap: isMobile ? '12px' : '20px',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    input: {
      width: '100%',
      padding: isMobile ? '14px 16px' : '16px 18px',
      background: '#2a2a2a',
      border: 'none',
      borderRadius: '10px',
      color: '#fff',
      fontSize: isMobile ? '13px' : '14px',
      outline: 'none',
      transition: 'border 0.2s ease, background 0.2s ease',
    },
    button: {
      marginTop: '8px',
      padding: isMobile ? '14px' : '16px',
      borderRadius: '12px',
      border: 'none',
      background: '#f07c4a',
      color: '#fff',
      fontSize: isMobile ? '15px' : '16px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    error: {
      minHeight: '16px',
      fontSize: isMobile ? '11px' : '12px',
      color: '#ff6b6b',
      marginTop: '4px',
    },
    success: {
      marginBottom: '20px',
      padding: '12px 16px',
      borderRadius: '10px',
      background: 'rgba(46, 204, 113, 0.15)',
      color: '#2ecc71',
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: 500,
    },
    successBox: {
      minHeight: isMobile ? '220px' : '280px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    successIcon: {
      fontSize: isMobile ? '32px' : '36px',
      marginBottom: '12px',
    },
    successText: {
      fontSize: isMobile ? '15px' : '16px',
      opacity: 0.8,
    },
  });

  const styles = getStyles();

  return (
    <section id="contact" style={styles.section}>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.heading}
      >
        CONTACT
      </motion.h2>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(0,0,0,0.35)' }}                 
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 220 }}
        style={styles.card}
      >
        {!success && (
          <p style={styles.subHeading}>Let’s work together</p>
        )}

        {success ? (
          <motion.div
            style={styles.successBox}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              style={styles.successIcon}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              ✅
            </motion.div>

            <motion.p
              style={styles.successText}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              Your message has been sent successfully!
            </motion.p>
          </motion.div>
        ) : (
          <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.row}>
            <div style={styles.field}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  border: errors.name ? '1px solid #ff6b6b' : '1px solid transparent',
                }}
                placeholder="Your Name"
              />
              <span style={styles.error}>{errors.name || ' '}</span>
            </div>

            <div style={styles.field}>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  border: errors.email ? '1px solid #ff6b6b' : '1px solid transparent',
                }}
                placeholder="your@email.com"
              />
              <span style={styles.error}>{errors.email || ' '}</span>
            </div>
          </div>

          <div style={styles.field}>
            <select
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              style={{
                ...styles.input,
                border: errors.purpose ? '1px solid #ff6b6b' : '1px solid transparent',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 16px center',
                backgroundSize: '20px',
                paddingRight: '44px',
              }}
            >
              <option value="">Select Purpose</option>
              <option>Automation Testing</option>
              <option>QA Consulting</option>
              <option>Freelance Project</option>
              <option>Full-time Opportunity</option>
            </select>
            <span style={styles.error}>{errors.purpose || ' '}</span>
          </div>

          <div style={styles.field}>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              style={{
                ...styles.input,
                height: '140px',
                resize: 'vertical',
                border: errors.message ? '1px solid #ff6b6b' : '1px solid transparent',
              }}
              placeholder="Message"
            />
            <span style={styles.error}>{errors.message || ' '}</span>
          </div>

          {errors.submit && (
            <div style={{ color: '#ff6b6b', fontSize: '14px', textAlign: 'center' }}>
              {errors.submit}
            </div>
          )}

          <button
            style={{
              ...styles.button,
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
        )}
      </motion.div>
      <style>{`
        button:not(:disabled):hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}

export default Contact;