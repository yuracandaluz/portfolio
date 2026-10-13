import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'
import type { Bilingual } from '../i18n/LanguageContext'

type FormValues = { name: string; email: string; message: string }
type Status = 'idle' | 'sending' | 'success' | 'error'

const socials = [
  { label: 'E-mail', href: 'mailto:yurajyanay@gmail.com', icon: <FiMail /> },
  { label: 'WhatsApp', href: 'https://wa.me/5531996636868', icon: <FaWhatsapp /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yurajyanay', icon: <FaLinkedinIn /> },
  { label: 'GitHub', href: 'https://github.com/yuracandaluz', icon: <FaGithub /> },
]

const t: Record<string, Bilingual> = {
  title: { pt: 'Contato', en: 'Contact' },
  intro: {
    pt: 'Vamos conversar? Me chame por um dos canais abaixo ou envie uma mensagem pelo formulário.',
    en: "Let's talk! Reach out through any channel below or send a message using the form.",
  },
  name: { pt: 'Nome', en: 'Name' },
  email: { pt: 'E-mail', en: 'Email' },
  message: { pt: 'Mensagem', en: 'Message' },
  send: { pt: 'Enviar mensagem', en: 'Send message' },
  sending: { pt: 'Enviando...', en: 'Sending...' },
  success: { pt: 'Mensagem enviada! Obrigada pelo contato.', en: 'Message sent! Thank you for reaching out.' },
  error: { pt: 'Não foi possível enviar. Tente novamente ou use um dos ícones acima.', en: 'Could not send. Please try again or use one of the icons above.' },
  required: { pt: 'Campo obrigatório', en: 'Required field' },
  invalidEmail: { pt: 'E-mail inválido', en: 'Invalid email' },
  shortMessage: { pt: 'Escreva pelo menos 10 caracteres', en: 'Write at least 10 characters' },
}

export default function Contact() {
  const { lang } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: data.name, email: data.email, message: data.message },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <h1 className="title">{t.title[lang]}</h1>
      <p className="contact-intro">{t.intro[lang]}</p>

      <ul className="contact-icons">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
              {s.icon}
            </a>
          </li>
        ))}
      </ul>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          {t.name[lang]}
          <input type="text" {...register('name', { required: t.required[lang] })} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </label>

        <label>
          {t.email[lang]}
          <input
            type="email"
            {...register('email', {
              required: t.required[lang],
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.invalidEmail[lang] },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>

        <label>
          {t.message[lang]}
          <textarea
            rows={6}
            {...register('message', {
              required: t.required[lang],
              minLength: { value: 10, message: t.shortMessage[lang] },
            })}
          />
          {errors.message && <span className="error">{errors.message.message}</span>}
        </label>

        <button type="submit" className="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.sending[lang] : t.send[lang]}
        </button>

        {status === 'success' && <p className="feedback">{t.success[lang]}</p>}
        {status === 'error' && <p className="feedback error">{t.error[lang]}</p>}
      </form>
    </>
  )
}
