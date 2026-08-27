/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  readonly TURNSTILE_SECRET_KEY: string;
  readonly RESEND_KEY: string;
  readonly CONTACT_TO_EMAIL: string;
  readonly CONTACT_FROM_EMAIL: string;
  readonly USE_MOCK_CONTENT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/** Injected by Turnstile's widget script. */
interface Window {
  turnstile?: {
    reset: (widgetId?: string) => void;
    render: (container: string | HTMLElement, options: unknown) => string;
  };
}
