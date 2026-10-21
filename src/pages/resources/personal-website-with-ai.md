---
layout: ../../layouts/ResourceLayout.astro
title: Make a personal website using AI
description: Plan, build and publish an Astro personal website with GitHub Codespaces and Copilot — no coding experience needed.
objectives:
  - Set up GitHub Codespaces for my project
  - Asked an Agent to create my personal website
  - Seen the website by asking my Agent to create a preview
  - Deployed my Website to GitHub Pages using my Agent
---

<div class="activity-meta" aria-label="Activity details"><span>2 hours</span><span>Beginner friendly</span><span>Bring a laptop</span></div>

<aside class="resource-callout walkthrough"><h3>Stuck? Watch the full walkthrough</h3><p>This video takes you through the activity from start to finish. Pause it whenever you want to try a step yourself.</p><div class="video-embed"><iframe src="https://www.youtube.com/embed/Q05T29y2ZMw?si=7eg3EnU3U79S4KOH" title="Full walkthrough: make a personal website using AI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></aside>

## What you will make

By the end, you will have a one-page website that introduces you, your interests or your work — and a link you can share. You will use AI as a thinking partner: first to ask good questions, then to help you build.

## Learning objectives

You will be able to:

1. Explain what GitHub, a repository and a Codespace are.
2. Use Copilot Plan mode to turn an idea into a clear website brief.
3. Create and personalise a simple website with Astro components and CSS.
4. Preview a website from a Codespace and publish it with GitHub Pages.

### Helpful before the session

If you can, create and verify your GitHub account before the session. Account verification and starting a Codespace can take a little while, so do not worry if publishing becomes a stretch goal rather than a finish-line task.

Green boxes explain useful concepts; red boxes contain warnings or help when something goes wrong. Select a box heading to open or close it.

## 1. Set up GitHub and your project

### Create a new repository on GitHub

Your project needs a home, and on GitHub that home is called a **repository**. Let's make one now, because everything else in this activity happens inside it.

1. Log in to [GitHub](https://github.com), creating a free account first if you need one.
2. Select **New repository**.

![GitHub’s new repository form.](/images/resources/personal-website-with-ai/make_new_repo.png)

3. Give it a name like `my-personal-website`, choose **Public**, and leave it empty. Do not tick **Add a README**, **Add .gitignore** or **Choose a licence**. Then select **Create repository**.

4. On your new repository's page, select **Code**, then the **Codespaces** tab, then **Create codespace on main**.

![GitHub’s Codespaces tab showing the option to create a new Codespace.](/images/resources/personal-website-with-ai/make_new_codespace.png)

That opens a **Codespace**: a development workspace running in the cloud, so nothing is installed on your own computer. It opens a browser version of VS Code, so you don't need to install an editor today. The first one can take a minute or two to start.

### Work inside your repository

Your Codespace opens with your repository already loaded, and everything you make from here is saved in it:

- The **Explorer** (files icon in the left sidebar) shows the files in your repository.
- **Copilot Chat** (the chat icon) is where you'll type your prompts.
- The **Source Control** panel (branch icon) is where you'll save your changes back to GitHub at the end.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What are Git and GitHub?</span></summary><p><strong>Git</strong> records changes to your project files, so you can see what changed and return to an earlier version. A <strong>commit</strong> is a saved checkpoint with a short message describing the changes. <strong>GitHub</strong> stores Git projects online and helps people work together. A <strong>repository</strong> holds your project files and their history. To <strong>push</strong> means to send your saved commits to GitHub.</p></details>

GitHub Copilot is an AI "agent" that can help us write code. There's a free plan for most personal accounts, and students and academic staff can get higher limits with GitHub Pro. We'll do all our work in the CodeSpace you just opened, which keeps your project off your own computer. If Copilot is unavailable or you reach a limit, you can still follow the manual fallback below or ask a session helper.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What is an "AI Agent"?</span></summary><p>An <strong>AI Agent</strong> is simply a Large Language Model (LLM) equipped with the ability to interact with external tools on our behalf. These "tools" can range from searching the web; to running code for us. Importantly, since we are giving AI the ability to run arbitrary commands on a computer, we want to make sure this computer is isolated to control what access it has to files and folders. This is why we are using CodeSpaces!</p></details>

Copilot will often ask before it runs a command or opens a browser window. That's normal: it isn't allowed to do certain steps on its own, for safety.

<details class="resource-callout caution"><summary><span class="callout-label">Warning or troubleshooting</span><span class="callout-title">Cannot create a Codespace?</span></summary><p>Check that you are using your own public repository and have remaining Codespaces usage. If the Codespaces tab is missing, blocked by a school or work account, or asks for billing you cannot use, pair with someone, ask a helper for a shared setup, or use VS Code on your own computer instead. You can still complete the same steps locally.</p></details>

Now ask Copilot to set up [Astro](https://astro.build/), the tool your website will be built with. Paste this into Copilot Chat:

```text
Set up a new Astro project in this workspace using the minimal template. Choose No for TypeScript, Yes to install dependencies, and No to initialise Git, because this repository already uses Git. Explain what you are doing as you go, then tell me when the project is ready.
```

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What is Astro?</span></summary><p><strong>Astro</strong> is a tool for building websites. A <strong>page</strong> is what someone sees at a website address. A <strong>component</strong> is a reusable part of a page, such as a header or a project card. Astro combines these files into a website you can publish. <strong>HTML</strong> gives the content its structure, while <strong>CSS</strong> controls how it looks, including colours, spacing and fonts.</p></details>

<details class="resource-callout caution"><summary><span class="callout-label">Warning or troubleshooting</span><span class="callout-title">About “allow all”</span></summary><p>After switching to Agent mode, use the permission-level picker beside the chat input and choose <strong>Allow all</strong> for this session if you want Copilot to edit files and run commands without repeatedly asking. Do not turn on global auto-approval: that applies to every workspace. Only use session-level Allow all in your own new Codespace, read changes before committing them, never put passwords or API keys in chat or files, and do not use it in an unfamiliar or sensitive project. A school or work-managed account may disable this option.</p></details>

## 2. Plan before you build

Before Copilot writes any code, let's decide what your site should say and how it should look. A little design vocabulary helps, because it lets you describe the layout you want.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What is layout? Useful design terms</span></summary><p><strong>Layout</strong> is how you arrange words, images and other elements on a page. It helps visitors understand what matters and where to go next. These terms can help you describe the design you want:</p><ul><li>A <strong>hero section</strong> is the prominent introduction near the top of a page. It often combines a headline, a short introduction and an image.</li><li>A <strong>call to action (CTA)</strong> — sometimes described as a “call to arms” — invites visitors to take a next step, such as “View my projects” or “Get in touch”. Give it a clear label and use a link or button that matches what it does.</li><li><strong>Visual hierarchy</strong> means making the most important information stand out through size, weight, colour and position.</li><li><strong>White space</strong> is the breathing room between elements. It can be any colour and makes a page easier to read.</li><li>A <strong>grid</strong> arranges content into rows and columns. <strong>Cards</strong> group related information, such as a project image, title and description.</li><li><strong>Alignment</strong> lines up elements along a shared edge. Consistent spacing and alignment make a page feel organised.</li><li><strong>Responsive design</strong> lets the layout adapt to the screen: for example, three columns of project cards on a laptop can become one column on a phone.</li></ul><p>Try asking Copilot: “Create a hero section with a short introduction and a clear call to action linking to my projects. Use plenty of white space and stack the project cards on small screens.”</p></details>

Open the Copilot Chat view. Select **Plan** in the mode picker, or start your message with `/plan`. Plan mode should research and ask questions, but not change your files until you have reviewed the plan. [Read GitHub's guide to planning with agents.](https://code.visualstudio.com/docs/agents/run/planning)

Paste this prompt, then answer Copilot's questions in your own words:

```text
/plan I want a one-page personal website. Before suggesting files or code, ask me explicit questions, one at a time, about:
- my name and what the website is for
- who I want to reach
- the sections and words I want on the page
- the personality and tone
- colours, type and visual style
- accessibility needs
- websites or images I like

After I answer, give me a short plan for an Astro website. Include the Astro pages and components you would create, the content structure, and how we will test it. Do not edit anything until I approve the plan.
```

Read the plan. Change anything that does not feel like you. When you are happy, select **Start Implementation** or switch to **Agent** mode.

### Now tell Copilot to build your site

Paste this exact message:

```text
Implement the approved plan. Explain each change briefly as you make it. When the first version is ready, run the Astro development server and tell me when the browser preview link is available.
```

Copilot should build the site and run it locally in the Codespace. Keep an eye out for a browser notification or a link in the terminal asking you to open the preview. Select it: this is the live version of your website while you work.

## 3. Make changes and watch them live

Once Copilot has built the first version and you have opened the preview link, keep it open in another browser tab. This is your **live preview**: save a change in Codespaces, then refresh the preview to see the result. Keep making small, deliberate changes — this is how the page becomes yours. It helps to know the names designers use for the parts of a page, so you can tell Copilot exactly what to change.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What are website elements?</span></summary><p>A page is made from parts with different jobs:</p><ul><li>The <strong>header</strong> sits near the top and usually introduces the site or contains its name.</li><li><strong>Navigation</strong> provides links to other pages or sections.</li><li>The <strong>main content</strong> contains what visitors came to read or do, organised into sections such as an introduction, interests and projects.</li><li><strong>Headings</strong> describe those sections and help people find their way around.</li><li>The <strong>footer</strong> sits near the bottom and often contains contact links or credits.</li><li><strong>Links</strong> take people somewhere; <strong>buttons</strong> perform an action, such as opening a menu.</li></ul><p>You can use these names when asking Copilot to change a particular part of your page.</p></details>

Start with the content. Tell Copilot what is true about you, rather than accepting placeholder text:

```text
Update the content on my home page using these details: [write your name, introduction, interests, projects and links here]. Keep the writing friendly and clear. Show me a summary of the wording before you edit it.
```

Then make it look more like your own site:

```text
Give my website a [playful / calm / bold / professional] visual style. Suggest a colour palette and typography direction first. After I choose, update the CSS while keeping the page easy to read and accessible.
```

```text
Add a clearly labelled section for [a project / my favourite things / a short biography / ways to contact me]. Keep the page to one screenful at a time and use a heading that makes sense.
```

```text
I have just made a change. Tell me what I should look for in the live preview, then wait while I check it.
```

```text
Check this page on a narrow phone screen. Describe what needs improving, then make only the changes I approve.
```

```text
Review the images and links for accessibility. Add useful alt text, but leave decorative images with empty alt text.
```

```text
Explain `src/pages/index.astro` and the CSS in plain English. Point out three small changes I can safely try myself.
```

<details><summary>No Copilot? Start manually</summary><p>After Astro has been created, replace the contents of <code>src/pages/index.astro</code> with this starter. Change the words, colours and links one small piece at a time.</p>

```astro
---
const name = 'Your name';
---

<html lang="en">
  <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /><title>{name}'s website</title></head>
  <body>
    <main>
      <p>HELLO, I’M</p>
      <h1>{name}</h1>
      <p>I’m learning how to make websites with Astro.</p>
      <h2>Things I enjoy</h2>
      <ul><li>Something you like</li><li>Something you are learning</li></ul>
      <p><a href="https://github.com/">Find me on GitHub</a></p>
    </main>
  </body>
</html>

<style>
  body { margin: 0; background: #f5f0e7; color: #12110f; font: 18px/1.5 system-ui, sans-serif; }
  main { width: min(680px, calc(100% - 48px)); margin: 0 auto; padding: 96px 0; }
  h1 { font-size: clamp(3rem, 12vw, 7rem); line-height: .9; margin: 0 0 24px; }
  a { color: inherit; font-weight: 700; }
</style>
```
</details>

## 4. Need to start the preview again?

Your preview server stops when you close its terminal, stop the Codespace, or return another day. Your files are still safely in the repository: you only need to start the server again. Ask Copilot:

```text
Start the Astro development server for this project and tell me when the browser preview link is ready.
```

Codespaces should show a forwarded-port notification or turn the local URL into a link. Open that link to view your site. Astro normally uses port `4321`. If you don't see it, open the **Ports** tab and add port `4321`.

If the link still doesn't appear, check that the server is still running, then use the **Ports** tab to open the address. [GitHub explains Codespaces port forwarding here.](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)

Before publishing, ask Copilot to check that the site builds:

```text
Run a production build of this Astro site and tell me whether it succeeds. If it reports an error, explain it in plain English and suggest the smallest fix, then wait for my approval.
```

A successful build gives you a much better chance of a successful deployment.

## 5. Publish with GitHub Pages

Use Copilot to deploy your site. Paste this exact message:

```text
Set up GitHub Pages deployment for my Astro site. First, update astro.config.mjs with the correct site and base values for my repository. Then create the file .github/workflows/deploy.yml with a GitHub Actions workflow that builds and deploys my Astro site to GitHub Pages on push to main. Use the official withastro/action@v6 for building and actions/deploy-pages@v5 for deployment. Do not push the changes yet - wait for my approval and explain what you will do before making any changes.
```

Copilot should:
- Update `astro.config.mjs` with your GitHub username and repository name
- Create `.github/workflows/deploy.yml` with the deployment workflow
- Explain each change before making it

<details class="resource-callout caution"><summary><span class="callout-label">Warning or troubleshooting</span><span class="callout-title">If Copilot cannot push for you</span></summary><p>After approving the changes, Copilot may not be able to push to GitHub. If so, complete these steps manually:</p>

<ol>
<li>In Codespaces, open the <strong>Source Control</strong> panel (git icon in the left sidebar)</li>
<li>Stage all changes using the <strong>+</strong> button</li>
<li>Write a commit message like <code>Publish my personal site</code></li>
<li>Select <strong>Commit</strong></li>
<li>Select <strong>Sync Changes</strong> or <strong>Push</strong></li>
</ol>

<p>If you see a permission error, you may need to run <code>git push origin main</code> in the terminal.</p>
</details>

Before deploying, open your repository on GitHub in another browser tab. Go to **Settings** → **Pages**, then under **Build and deployment** choose **GitHub Actions** as the source. This prepares GitHub Pages to accept the deployment.

Once your changes are pushed, open the **Actions** tab on GitHub, wait for the workflow to finish, then follow its deployment link. This is your public website address you can share.

If the workflow fails, check that **Settings** → **Pages** still shows **GitHub Actions** as its source. You can also ask Copilot: `Explain why my GitHub Pages deployment failed and suggest the smallest fix.`

<details><summary>Prefer to do it manually?</summary>

Update `astro.config.mjs` with your GitHub username and repository name:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPOSITORY',
});
```

If your repository is named `YOUR-USERNAME.github.io`, remove the `base` line.

Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy Astro site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out files
        uses: actions/checkout@v7
      - name: Build and upload site
        uses: withastro/action@v6
  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v5
```

Then commit and push using the Source Control panel.
</details>

[GitHub's Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) explains these steps and permissions.

## Keep going

<details class="resource-callout caution"><summary><span class="callout-label">Warning or troubleshooting</span><span class="callout-title">Before you share</span></summary><p>GitHub Pages makes this website public. Do not publish your phone number, home address, passwords, API keys or an email address you do not want strangers to find. Use your own images, or images you are allowed to reuse, and credit them where needed.</p></details>

Your Codespace is a great place to start, but you can also work on your own computer. Download [Visual Studio Code](https://code.visualstudio.com/), clone this Astro repository, and sign in to GitHub Copilot. You can also use another agent-based AI, such as Codex. Whatever tool you use, keep the same habit: describe your idea, ask questions, review the plan, then build and check the result.

## Using AI thoughtfully: people and the environment

AI can help more people build a website and express their ideas. Your choices about privacy, accessibility and the content you publish still affect other people.

### Social impacts and what we can do

AI tools can support learning, but they also raise questions about privacy, bias, unequal access and becoming dependent on answers we do not understand. These are central concerns in [UNESCO’s guidance on generative AI in education and research](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research).

- **Protect privacy.** Use public practice data and invented examples; do not upload personal or confidential information. Check what your tool stores and how it uses your inputs.
- **Build for different people.** Check keyboard navigation, readable contrast and useful image descriptions. Try your site on a small screen and ask someone else to use it; an AI claim that a page is accessible is not a substitute for checking.
- **Take responsibility for published content.** Check facts and links, avoid stereotypes, and use images and text you have permission to share. Credit sources and explain where AI helped.
- **Keep learning and include others.** Ask for explanations and try a small change yourself. Share what you learn, offer the manual alternatives in this guide and avoid making a paid AI subscription a requirement for taking part.

### Environmental impacts and what we can do

Training and running AI models use electricity. Their infrastructure also uses water and materials, and creates emissions and electronic waste; [UNEP describes these impacts across the AI lifecycle](https://wedocs.unep.org/handle/20.500.11822/46288). The impact of an individual request varies with the model, task and infrastructure; a single footprint figure would not reliably describe this activity.

These practical choices can help limit unnecessary computing:

- **Use AI where it helps.** A direct edit, documentation lookup or existing script may be enough for a simple task.
- **Keep requests focused.** Give the relevant context, ask for a small change and review it before requesting more. Set a clear stopping point for an agent so it does not keep retrying or generating alternatives without a purpose.
- **Reuse useful work.** Save working code and explanations rather than repeatedly generating them. Choose a smaller model when it can do the job reliably; check the result.
- **Close unused cloud workspaces.** Stop your Codespace or other cloud session when you finish, and keep using your existing computer where it meets your needs.

Individual choices are only part of the picture; providers and institutions also need to measure and reduce energy, water and material use. When you have a choice, look for published environmental reporting rather than assuming a service is sustainable.

**Before you finish:** identify one social risk and one environmental impact in your project. What change could you make to reduce each?
