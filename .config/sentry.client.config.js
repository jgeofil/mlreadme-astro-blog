import * as Sentry from "@sentry/astro";

Sentry.init({
    dsn: "https://058652f9e30c584abc9a52d895a1fea6@o4508072521236480.ingest.us.sentry.io/4508458641129472",

    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],

    environment: import.meta.env.VERCEL_ENV || "development",

    // Define how likely traces are sampled. Adjust this value in production,
    // or use tracesSampler for greater control.
    tracesSampleRate: 1.0,

    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // If the entire session is not sampled, use the below sample rate to sample
    // sessions when an error occurs.
    replaysOnErrorSampleRate: 1.0,
});
