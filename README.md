# Machine learning and AI
## Python tutorials in tensorflow, huggingface examples, and research articles summarized.

Welcome to ML Readme, your comprehensive destination for insightful, hands-on tutorials and guides on machine learning, artificial intelligence, and related technologies. Our mission is to empower developers, data scientists, and enthusiasts to deepen their understanding of these cutting-edge fields and stay ahead in the rapidly evolving world of AI.

Whether you're a seasoned professional looking to refine your skills or a beginner eager to learn, our in-depth, step-by-step guides and real-world examples cater to a wide range of skill levels. From Python coding tutorials and research article summaries to explorations of popular AI frameworks and libraries, we strive to provide valuable, engaging content that helps you make the most of your learning journey.

At ML Readme, we believe in the power of knowledge sharing and community building. Join us as we demystify complex AI concepts, share practical tips and tricks, and help you unlock your full potential in the world of machine learning. Start exploring our blog today and let's grow together!

## Astro blog 
Source code for the website in the Astro framework.

## Statsig Integration
This project uses [Statsig](https://statsig.com/) for feature flagging and dynamic configuration. The integration is handled by a middleware that runs on the Vercel edge.

### Configuration
The Statsig integration requires the following environment variables to be set:
- `STATSIG_SERVER_API_KEY`: Your Statsig server secret key.
- `EXPERIMENTATION_CONFIG`: The Edge Config connection string from Vercel.
- `EXPERIMENTATION_CONFIG_ITEM_KEY`: The Edge Config item key from Vercel.

These variables should be set in your Vercel project settings. For local development, you can create a `.env.local` file in the root of the project and add the variables there.

### Usage
The middleware checks for the following feature flags:
- `show_new_header`: A feature gate to control the visibility of a new header.
- `banner_config`: A dynamic config to control the content of the banner.

These flags can be configured in the Statsig console. The values are passed to the Astro components via `Astro.locals`.
