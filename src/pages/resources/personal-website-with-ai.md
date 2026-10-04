---
layout: ../../layouts/ResourceLayout.astro
title: Make a personal website using AI
description: Plan, build and publish an Astro personal website with GitHub Codespaces and Copilot — no coding experience needed.
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

## Your two-hour route

<ol class="time-plan"><li><strong>0–30 minutes — Set up</strong> Create a GitHub account, repository, Codespace and Astro project.</li><li><strong>30–45 minutes — Plan</strong> Let Copilot ask questions about your site before it writes code.</li><li><strong>45–85 minutes — Build</strong> Create and personalise your page.</li><li><strong>85–105 minutes — Preview and check</strong> See it through your Codespace app link and run a production build.</li><li><strong>105–120 minutes — Publish</strong> Deploy with GitHub Pages and share your link.</li></ol>

<aside class="resource-callout"><h3>Helpful before the session</h3><p>If you can, create and verify your GitHub account before the session. Account verification and starting a Codespace can take a little while, so do not worry if publishing becomes a stretch goal rather than a finish-line task.</p></aside>

## 1. Set up GitHub and your project

GitHub is a place to store your project online. A **repository** is the project folder, including its history. If you do not have an account, visit [GitHub](https://github.com/signup), choose a username you are happy to share, and verify your email address.

GitHub Copilot has a free plan for many personal accounts. In Codespaces, sign in to GitHub and follow the Copilot prompt if you see one. If it is unavailable or you reach a limit, you can still follow the manual fallback below or ask a session helper.

1. On GitHub, select **New repository**.
2. Call it something like `my-personal-website`, choose **Public**, and leave the repository empty: do <strong>not</strong> tick **Add a README**, **Add .gitignore** or **Choose a licence**. Then select **Create repository**.
3. Select **Code** → **Codespaces** → **Create codespace on main**.

A **Codespace** is a development workspace running in the cloud. It opens a browser version of VS Code, so you do not need to install an editor today.

<aside class="resource-callout"><h3>Cannot create a Codespace?</h3><p>Check that you are using your own public repository and have remaining Codespaces usage. If the Codespaces tab is missing, blocked by a school or work account, or asks for billing you cannot use, pair with someone, ask a helper for a shared setup, or use VS Code on your own computer instead. You can still complete the same Astro steps locally.</p></aside>

In the Codespaces terminal, create the website with [Astro](https://astro.build/). Astro is a tool for building fast websites from small page and component files. Run the command below. In the setup wizard, choose the **minimal** template, choose **No** for TypeScript if you are new to coding, choose **Yes** to install dependencies, and choose **No** if it asks to initialise Git — your GitHub repository already has Git.

```bash
npm create astro@latest .
```

## 2. Plan before you build

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

<aside class="resource-callout build-next"><h3>Now tell Copilot to build your site</h3><p>Paste this exact message:</p>

```text
Implement the approved plan. Explain each change briefly as you make it. When the first version is ready, run the Astro development server and tell me when the browser preview link is available.
```

<p>Copilot should build the site and run it locally in the Codespace. Keep an eye out for a browser notification or a link in the terminal asking you to open the preview. Select it: this is the live version of your website while you work.</p></aside>

<aside class="resource-callout caution"><h3>About “allow all”</h3><p>After switching to Agent mode, use the permission-level picker beside the chat input and choose <strong>Allow all</strong> for this session if you want Copilot to edit files and run commands without repeatedly asking. Do not turn on global auto-approval: that applies to every workspace. Only use session-level Allow all in your own new Codespace, read changes before committing them, never put passwords or API keys in chat or files, and do not use it in an unfamiliar or sensitive project. A school or work-managed account may disable this option.</p></aside>

## 3. Make changes and watch them live

Once Copilot has built the first version and you have opened the preview link, keep it open in another browser tab. This is your **live preview**: save a change in Codespaces, then refresh the preview to see the result. Keep making small, deliberate changes — this is how the page becomes yours.

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

Your preview server stops when you close its terminal, stop the Codespace, or return another day. Your files are still safely in the repository: you only need to start the server again.

Open the terminal in your Codespace and run:

```bash
npm run dev -- --host 0.0.0.0
```

Codespaces should show a forwarded-port notification or turn the local URL into a link. Open that link to view your site. Astro normally uses port `4321`. If you do not see it, open the **Ports** tab and add port `4321`.

If the link still does not appear, check that the terminal command is still running and then use the **Ports** tab to open the address. [GitHub explains Codespaces port forwarding here.](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)

Before publishing, open a second terminal and run this check:

```bash
npm run build
```

If it reports an error, copy the error into Copilot Chat and ask: `Explain this Astro build error in plain English. Suggest the smallest fix, then wait for my approval.` A successful build gives you a much better chance of a successful deployment.

## 5. Publish with GitHub Pages

First, update `astro.config.mjs`, replacing `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub username and repository name. Your finished address will be `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. The `base` setting makes images and links work at that address.

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPOSITORY',
});
```

If you deliberately named the repository `YOUR-USERNAME.github.io`, it is a special profile-site address. Remove the `base` line in that case.

Before you create the deployment workflow or make your first commit, open your repository on GitHub in another browser tab. Go to **Settings** → **Pages**, then under **Build and deployment** choose **GitHub Actions** as the source. This prepares GitHub Pages to accept the deployment when you push your workflow.

Now create the deployment file in Codespaces. This is a set of instructions for GitHub Actions — a fresh online computer that will build and publish your site whenever you push an update.

1. In the left-hand **Explorer**, make sure you can see the top-level folder for your website.
2. Select the **New Folder** icon. Name the folder `.github` — include the full stop at the beginning.
3. Select the new `.github` folder, then select **New Folder** again. Name this folder `workflows`.
4. Select the new `workflows` folder, then select **New File**. Name the file `deploy.yml`.
5. Open `deploy.yml`, copy the entire block below, paste it into the empty file, then save with <kbd>Ctrl</kbd> + <kbd>S</kbd> (or <kbd>Cmd</kbd> + <kbd>S</kbd> on a Mac). Do not change the spacing at the start of the lines: YAML uses it to understand the workflow.

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

You do not need to memorise this code. It tells GitHub to:

- run when you push to the `main` branch (or when you start it manually);
- download your repository onto a temporary Linux computer;
- let Astro install dependencies, build the website, and upload the finished `dist` files;
- publish those files through GitHub Pages.

If you prefer Copilot to create the file, use this exact request instead: `Create the folders .github/workflows and the file .github/workflows/deploy.yml. Paste the GitHub Pages workflow from this activity exactly as written. Do not change any other files.` Check that the resulting file matches the block above before you continue.

Commit and push your files using the Source Control panel:

1. Select **Source Control** in the left sidebar and stage all changes using the **+** button.
2. Write a message such as `Publish my personal site`, then select **Commit**.
3. Select **Sync Changes** or **Push** when VS Code offers it.

On GitHub, open the **Actions** tab, wait for the workflow to finish, then follow its deployment link. This is the public address you can share. If the workflow fails, check first that **Settings** → **Pages** still shows **GitHub Actions** as its source.

[GitHub's Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) explains these steps and permissions.

## Keep going

<aside class="resource-callout"><h3>Before you share</h3><p>GitHub Pages makes this website public. Do not publish your phone number, home address, passwords, API keys or an email address you do not want strangers to find. Use your own images, or images you are allowed to reuse, and credit them where needed.</p></aside>

Your Codespace is a great place to start, but you can also work on your own computer. Download [Visual Studio Code](https://code.visualstudio.com/), clone this Astro repository, and sign in to GitHub Copilot. You can also use another agent-based AI, such as Codex. Whatever tool you use, keep the same habit: describe your idea, ask questions, review the plan, then build and check the result.
