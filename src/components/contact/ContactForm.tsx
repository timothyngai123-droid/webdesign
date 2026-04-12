'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

interface FormData {
  name: string;
  email: string;
  business: string;
  businessType: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business: '',
    businessType: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with EmailJS, Resend, or a serverless API route
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass =
    'w-full rounded-lg px-4 py-3.5 text-sm focus:outline-none transition-colors';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="text-sm mb-2 block" style={{ color: '#A1A1AA' }}>
          Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: '#111113',
            border: '1px solid #1F1F23',
            color: '#FAFAFA',
          }}
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="text-sm mb-2 block" style={{ color: '#A1A1AA' }}>
          Email
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: '#111113',
            border: '1px solid #1F1F23',
            color: '#FAFAFA',
          }}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="text-sm mb-2 block" style={{ color: '#A1A1AA' }}>
          Business Name
        </label>
        <input
          type="text"
          value={formData.business}
          onChange={(e) => handleChange('business', e.target.value)}
          className={inputClass}
          style={{
            backgroundColor: '#111113',
            border: '1px solid #1F1F23',
            color: '#FAFAFA',
          }}
          placeholder="Your business name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="text-sm mb-2 block" style={{ color: '#A1A1AA' }}>
            Business Type
          </label>
          <select
            value={formData.businessType}
            onChange={(e) => handleChange('businessType', e.target.value)}
            className={inputClass}
            style={{
              backgroundColor: '#111113',
              border: '1px solid #1F1F23',
              color: formData.businessType ? '#FAFAFA' : '#555',
            }}
          >
            <option value="">Select type</option>
            <option value="restaurant">Restaurant</option>
            <option value="trades">Trades &amp; Services</option>
            <option value="retail">Retail</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="text-sm mb-2 block" style={{ color: '#A1A1AA' }}>
            Project Budget
          </label>
          <select
            value={formData.budget}
            onChange={(e) => handleChange('budget', e.target.value)}
            className={inputClass}
            style={{
              backgroundColor: '#111113',
              border: '1px solid #1F1F23',
              color: formData.budget ? '#FAFAFA' : '#555',
            }}
          >
            <option value="">Select budget</option>
            <option value="2k-5k">&pound;2k &ndash; &pound;5k</option>
            <option value="5k-10k">&pound;5k &ndash; &pound;10k</option>
            <option value="10k+">&pound;10k+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm mb-2 block" style={{ color: '#A1A1AA' }}>
          Message
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`${inputClass} resize-none`}
          style={{
            backgroundColor: '#111113',
            border: '1px solid #1F1F23',
            color: '#FAFAFA',
          }}
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="mt-2">
        <MagneticButton variant="primary" type="submit">
          Send Message &rarr;
        </MagneticButton>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm mt-2"
            style={{ color: '#4ade80' }}
          >
            Message sent successfully! I&apos;ll get back to you within 24
            hours.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
