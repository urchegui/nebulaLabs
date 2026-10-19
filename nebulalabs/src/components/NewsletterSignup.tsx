// Integration point for the research newsletter (behind FLAGS.showNewsletter, off).
// Requirements when the tool is chosen [DATO: newsletter provider]:
//  - double opt-in handled by the provider (confirmation email before subscribing)
//  - unticked consent checkbox + first-layer privacy info, like the contact form
//  - copy in i18n (research.newsletter.*) and the provider domain added to the CSP
// Until then it renders nothing: the old "Notify me" form never stored emails.
export default function NewsletterSignup() {
  return null;
}
