import * as Sentry from "@sentry/astro";
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
    dsn: "https://058652f9e30c584abc9a52d895a1fea6@o4508072521236480.ingest.us.sentry.io/4508458641129472",
    integrations: [
        // Add our Profiling integration
        nodeProfilingIntegration(),
    ],

    // Define how likely traces are sampled. Adjust this value in production,
    // or use tracesSampler for greater control.
    tracesSampleRate: 1.0,

    // Set sampling rate for profiling
    // This is relative to tracesSampleRate
    profilesSampleRate: 1.0
});
