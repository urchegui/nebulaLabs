import type legalEs from './legal.es';
import type { LegalSection } from './legal.es';

// Legal texts (EN). Own wording, DRAFT pending legal review. Same shape as legal.es.ts.
const legalEn: typeof legalEs = {
  legalNotice: {
    title: 'Legal notice and terms of use',
    intro:
      'This legal notice governs access to and use of the website {{site}}, in compliance with article 10 of Spanish Law 34/2002 on information society services and electronic commerce (LSSI-CE).',
    sections: [
      {
        title: '1. Website owner',
        paragraphs: [
          'Company name: {{companyName}}.',
          'Tax ID (NIF): {{taxId}}.',
          'Registered office: {{address}}.',
          'Contact email: {{email}}.',
          'Registry details: {{registry}}.',
        ],
      },
      {
        title: '2. Purpose',
        paragraphs: [
          'The website provides information about {{companyName}} ("Nebula Labs"), its services, its products and its research activity, and allows you to contact the company through a form.',
        ],
      },
      {
        id: 'terms',
        title: '3. Terms of use',
        paragraphs: [
          'Access to the website is free and requires no registration. By browsing it you accept these terms of use. If you do not agree with them, please do not use the website.',
          'You agree to use the website lawfully, in good faith and without harming its systems or the rights of Nebula Labs or third parties. In particular, you may not introduce malicious code, attempt to access non-public areas or use the contact form to send unsolicited commercial communications or unlawful content.',
          'The contents of the website are for information purposes only. They are not a binding offer or professional advice. Any service provided or product used from Nebula Labs is governed by the contract or specific terms agreed in each case.',
          'Nebula Labs may change the contents of the website and these terms at any time. The version in force is the one published on this page.',
        ],
      },
      {
        title: '4. Intellectual and industrial property',
        paragraphs: [
          'The contents of the website (texts, design, logos, trademarks, code and other elements) are owned by Nebula Labs or used with the authorization of their owners. They may not be reproduced, distributed, publicly communicated or transformed without prior written authorization, except for the personal and private use needed to browse the website.',
          'Software that Nebula Labs publishes as open source is governed by the license stated in each repository. For example, the Systematic-Literature-Review repository is distributed under the AGPL-3.0 license. The previous paragraph does not limit the rights granted by those licenses.',
        ],
      },
      {
        title: '5. Liability',
        paragraphs: [
          'Nebula Labs strives to keep the information on the website accurate and up to date, but does not guarantee that it is free of errors or that the website will be available without interruption. To the extent permitted by law, Nebula Labs is not liable for damages arising from the use of the website, technical interruptions or harmful elements introduced by third parties despite the security measures in place.',
        ],
      },
      {
        title: '6. Links to third-party websites',
        paragraphs: [
          'The website may include links to third-party websites, such as social media profiles or code repositories. Nebula Labs does not control those websites and is not responsible for their contents or privacy policies. A link does not imply any relationship with its owner or endorsement of its contents.',
        ],
      },
      {
        title: '7. Data protection and cookies',
        paragraphs: [
          'The processing of the personal data you provide is explained in the privacy policy. The use of cookies is explained in the cookie policy.',
        ],
      },
      {
        title: '8. Governing law and jurisdiction',
        paragraphs: [
          'This legal notice is governed by Spanish law. For any dispute, the parties submit to {{jurisdiction}}, without prejudice to the rights that consumer protection law grants to consumers.',
        ],
      },
    ] as LegalSection[],
  },
  privacy: {
    title: 'Privacy policy',
    intro:
      'This policy explains what personal data we process on {{site}}, why, on what legal basis, for how long and how you can exercise your rights, under Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
    sections: [
      {
        title: '1. Data controller',
        paragraphs: [
          'Controller: {{companyName}}, tax ID {{taxId}}, registered office at {{address}}.',
          'Contact: {{email}}.',
          'Data protection contact: {{privacyContact}}, at {{email}}.',
        ],
      },
      {
        title: '2. What data we process',
        paragraphs: [
          'Contact form: name, email, organization (optional), type of need, subject and message, the section of the website you write from, and your acceptance of this policy with its date.',
          'Analytics, only if you accept it: Google Analytics 4 cookie identifiers, pages visited, browsing events, device and browser type, and approximate location.',
          'Server logs: IP address, date and time, requested page and browser, generated automatically by the server on every visit.',
          'We do not ask for special categories of data. Please do not include them in your messages.',
        ],
      },
      {
        title: '3. Purposes and legal basis',
        paragraphs: [
          'Answering your contact request and, where applicable, preparing a proposal. Legal basis: your consent, given by ticking the form checkbox (art. 6(1)(a) GDPR), and, if the request leads to a contract, pre-contractual measures (art. 6(1)(b) GDPR).',
          'Measuring the use of the website with Google Analytics 4. Legal basis: your consent through the cookie panel (art. 6(1)(a) GDPR and art. 22.2 LSSI-CE). Without consent, Google Analytics is not loaded.',
          'Ensuring the security and operation of the website through server logs. Legal basis: legitimate interest in protecting the website (art. 6(1)(f) GDPR).',
          'We do not make automated decisions or build profiles with legal effects on you.',
        ],
      },
      {
        title: '4. Retention period',
        paragraphs: [
          'Contact data: as long as needed to answer your request and, if no business relationship starts, 12 months at most. After that, the data will be kept blocked during the limitation periods of any legal liabilities, available only to courts and competent authorities. [DATO: confirm period with the legal advisor]',
          'Analytics data: the retention period configured in Google Analytics 4. [DATO: retention period configured in GA4]',
          'Server logs: [DATO: server log retention period].',
        ],
      },
      {
        title: '5. Recipients and processors',
        paragraphs: [
          'We do not share your data with third parties unless legally required. To provide the service, the following providers access it as data processors:',
          'Web3Forms: receiving the contact form and forwarding it to our email. {{web3forms}}',
          'Google Ireland Ltd.: corporate email (Google Workspace), where we receive messages, and Google Analytics 4, only with your consent.',
          'Web hosting: {{hosting}}.',
        ],
      },
      {
        title: '6. International transfers',
        paragraphs: [
          'Google may process data outside the European Economic Area, in particular in the United States. These transfers rely on the EU-US Data Privacy Framework and on the standard contractual clauses approved by the European Commission.',
          'Web3Forms: {{web3forms}}',
        ],
      },
      {
        title: '7. Your rights',
        paragraphs: [
          'You can exercise your rights of access, rectification, erasure, objection, restriction of processing and portability, and withdraw your consent at any time, by writing to {{email}} with the subject "Data protection". If we have reasonable doubts about your identity, we may ask for additional information to confirm it.',
          'Withdrawing consent does not affect the lawfulness of prior processing. You can withdraw your analytics consent from "Cookie settings" in the footer.',
          'If you believe we have not handled your rights properly, you can file a complaint with the Spanish Data Protection Agency (www.aepd.es).',
        ],
      },
      {
        title: '8. Minors',
        paragraphs: [
          'This website is not aimed at children under 14. If you are under that age, please do not provide us with personal data.',
        ],
      },
      {
        title: '9. Security',
        paragraphs: [
          'We apply technical and organizational measures appropriate to the risk, such as encrypted communications (HTTPS) and restricted access to systems, to protect your data against loss, unauthorized access or alteration.',
        ],
      },
      {
        title: '10. Changes to this policy',
        paragraphs: [
          'We may update this policy to reflect legal changes or changes in our processing. The version in force is the one published on this page, with its last updated date.',
        ],
      },
    ] as LegalSection[],
  },
  cookies: {
    title: 'Cookie policy',
    intro:
      'This policy explains which cookies {{site}} uses, what they are for and how you can accept, reject or withdraw your consent, in line with article 22.2 of the LSSI-CE and the cookie guidance of the Spanish Data Protection Agency.',
    sections: [
      {
        title: '1. What cookies are',
        paragraphs: [
          'Cookies are small files that a website stores in your browser to remember information about your visit. They can be first-party (set by the website owner) or third-party, and technical (needed for the website to work) or of other types, such as analytics.',
        ],
      },
      {
        title: '2. Cookies we use',
        paragraphs: [
          'Technical: they store your cookie choice. They are necessary and do not require consent.',
          'Analytics: Google Analytics 4 cookies let us understand, in aggregate, how the website is used. They are only set if you accept them.',
          'We do not use advertising cookies or tracking for advertising purposes. Fonts are served from our own server.',
        ],
      },
    ] as LegalSection[],
    tableTitle: '3. Cookie details',
    afterTable: [
      {
        title: '4. How to accept, reject or withdraw consent',
        paragraphs: [
          'On your first visit we show a notice where you can accept, reject or configure non-technical cookies. You can change your choice at any time with the "Cookie settings" button on this page or in the footer. If you withdraw consent, we delete the analytics cookies from your browser.',
          'You can also block or delete cookies from your browser settings. If you block technical cookies, we will ask for your choice again on every visit.',
          'Your choice is kept for {{days}} days. After that period, or if we change this policy, we will ask for your consent again.',
        ],
      },
      {
        title: '5. International transfers',
        paragraphs: [
          'Google Analytics cookies may involve data transfers to the United States, as explained in the privacy policy.',
        ],
      },
      {
        title: '6. Updates',
        paragraphs: [
          'We may update this policy if the cookies we use change. The version in force is the one published on this page.',
        ],
      },
    ] as LegalSection[],
    table: {
      name: 'Cookie',
      provider: 'Provider',
      party: 'Type',
      category: 'Category',
      purpose: 'Description',
      duration: 'Duration',
      parties: { first: 'First-party', third: 'Third-party' },
      categories: { necessary: 'Technical', analytics: 'Analytics' },
      purposes: {
        consent: 'Stores your cookie choice and the accepted policy version.',
        gaUser: 'Distinguishes users anonymously to produce statistics.',
        gaSession: 'Keeps the session state for statistics.',
      },
      durations: {
        days: '{{days}} days',
        twoYears: '2 years',
      },
    },
  },
};

export default legalEn;
