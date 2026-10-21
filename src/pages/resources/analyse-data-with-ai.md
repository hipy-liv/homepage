---
layout: ../../layouts/ResourceLayout.astro
title: Analyse Your Data Using AI
description: Explore, visualise and analyse your data using AI - no statistical experience required; no coding needed. Only your data and your questions!
objectives:
  - Set up GitHub Codespaces and add my data
  - Explored my data with charts
  - Analysed my data with AI
  - Built an interactive Streamlit dashboard
---

<div class="activity-meta" aria-label="Activity details"><span>2 hours</span><span>Beginner friendly</span><span>Bring a laptop</span></div>

## What you will make

By the end of this session, you'll have loaded a dataset into a cloud workspace, had a poke around with a few charts, asked an AI to run some analysis, and turned the results into a dashboard you can share with other people. You'll do all of it by describing what you want in plain English, and the AI will write the code for you.

## Learning objectives

You will be able to:

1. Explain what GitHub, a repository and a CodeSpace are.
2. Use GitHub Copilot to read your data from a file and explore the data via visualisations.
3. Use Copilot to analyse the data using some simple (and not so simple!) analysis techniques.
4. Create an interactive data dashboard to present your findings for others to use with Streamlit.

### Helpful before the session

If you get the chance, set up and verify your GitHub account before the session. Verification and starting a Codespace can both take a few minutes, so don't worry if you're still getting yourself sorted when we begin.

Got a dataset you'd like to dig into? Bring it along, and section 2 shows you how to get it into your Codespace. Don't worry if you've never touched statistics or code. Asking good questions is the whole skill here, and that's something you already know how to do.

## 1. Set up GitHub and your project

### Create a new repository on GitHub

Your project needs a home, and on GitHub that home is called a **repository**. Let's make one now, because everything else in this activity happens inside it.

1. Log in to [GitHub](https://github.com), creating a free account first if you need one.
2. Select **New repository**.

![GitHub’s new repository form.](/images/resources/analyse-data-with-ai/make_new_repo.png)

3. Give it a name like `my-data-analysis`, choose **Public**, and leave it empty. Do not tick **Add a README**, **Add .gitignore** or **Choose a licence**. Then select **Create repository**.

4. On your new repository's page, select **Code**, then the **Codespaces** tab, then **Create codespace on main**.

![GitHub’s Codespaces tab showing the option to create a new Codespace.](/images/resources/analyse-data-with-ai/make_new_codespace.png)

That opens a **Codespace**: a development workspace running in the cloud, so nothing is installed on your own computer. The first one can take a minute or two to start.

### Work inside your repository

Your Codespace opens with your repository already loaded, and everything you make from here is saved in it:

- The **Explorer** (files icon in the left sidebar) shows the files in your repository.
- **Copilot Chat** (the chat icon) is where you'll type your prompts.
- The **Source Control** panel (branch icon) is where you'll save your changes back to GitHub at the end.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What are Git and GitHub?</span></summary><p><strong>Git</strong> records changes to your project files, so you can see what changed and return to an earlier version. It achieves this by storing changes to code, known as <strong>commits</strong>. <strong>Commits</strong> can be thought of as saved checkpoints with a short message describing the changes. A <strong>repository</strong> holds all of the commits in the history of a project, allowing you to "go back in time" in case you break your code somehow. <strong>GitHub</strong> is a website that allows us to store and share repositories online, as well as host some project management tools to allow teams to work together on codebases. To <strong>push</strong> a commit means to send it to GitHub, allowing others to use and see it.</p></details>

GitHub Copilot is an AI "agent" that can help us write code. There's a free plan for most personal accounts, and students and academic staff can get higher limits with GitHub Pro. We'll do all our work in the CodeSpace you just opened, which keeps your project off your own computer.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What is an "AI Agent"?</span></summary><p>An <strong>AI Agent</strong> is simply a Large Language Model (LLM) equipped with the ability to interact with external tools on our behalf. These "tools" can range from searching the web; to running code for us. Importantly, since we are giving AI the ability to run arbitrary commands on a computer, we want to make sure this computer is isolated to control what access it has to files and folders. This is why we are using CodeSpaces!</p></details>

Copilot will often ask before it runs a command or opens a browser window. That's normal: it isn't allowed to do certain steps on its own, for safety.

<details class="resource-callout caution"><summary><span class="callout-label">Warning or troubleshooting</span><span class="callout-title">About “allow all”</span></summary><p>After switching to Agent mode, use the permission-level picker beside the chat input and choose <strong>Allow all</strong> for this session if you want Copilot to edit files and run commands without repeatedly asking. Do not turn on global auto-approval: that applies to every workspace. Only use session-level Allow all in your own new Codespace, read changes before committing them, never put passwords or API keys in chat or files, and do not use it in an unfamiliar or sensitive project. A school or work-managed account may disable this option.</p></details>

## 2. Load your data and take a first look

First things first: let's get some data into your Codespace and find out what's actually in it. You won't write a single line of code. You'll just describe what you want and let the agent do the work.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">Asking questions that work</span></summary><p>An AI agent gives you its best answers when you tell it what you want to <em>understand</em>, not just what to run. A few principles go a long way:</p><ul><li><strong>Be clear.</strong> Name the exact file and the columns you mean, such as <code>data.csv</code> or the <code>body_mass_g</code> column.</li><li><strong>Say what you want to find out.</strong> "Does body mass differ between species?" gets you much further than "analyse this data".</li><li><strong>Use expert terminology.</strong> Terms like <em>t-test</em>, <em>linear model</em>, <em>correlation</em> or <em>cluster</em> point the AI straight at the technique you want. You don't need to understand the maths; if you don't know the term, describe your question and ask which method fits.</li><li><strong>Ask for explanations.</strong> Ask what the result means in plain English, and why that method was chosen.</li><li><strong>Ask it to check its own work.</strong> "How would you know if this is wrong?" or "what assumptions does this method make?"</li><li><strong>Go one step at a time.</strong> Read each reply before writing the next prompt, and ask again if something's unclear. That isn't failing; it's how this is meant to work.</li></ul></details>

### Choose a file

Got a dataset in mind? It can be an Excel spreadsheet (`.xlsx`) or a **CSV** file. If you're not sure of the difference, the box below explains both.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What are CSV and Excel files?</span></summary><p>An <strong>Excel</strong> file (usually <code>.xlsx</code>) is a spreadsheet: rows and columns, plus formatting, formulas and often several sheets. A <strong>CSV</strong> (comma-separated values) file is a plain text table with the same rows and columns, but no formatting, no formulas and only one sheet. Either one works for this activity.</p><p>In both cases, each <strong>row</strong> is one record: one person, place or measurement. Each <strong>column</strong> is one <strong>variable</strong> you've measured, such as age, species or price. The values can be numbers, text (called <strong>categories</strong>) or dates.</p></details>

Already got your data? Keep it as an Excel file, or open it in Excel or Google Sheets and use **File → Save as** (or **Download**) to save a **CSV** copy. No data of your own? No problem. Grab this little practice dataset instead:

- [Palmer Penguins CSV](https://raw.githubusercontent.com/allisonhorst/palmerpenguins/main/inst/extdata/penguins.csv): measurements of penguins from three islands. It's a firm favourite for learning, and it loads in a moment.

Open the link, then save the file to your computer with **File → Save as** (or right-click and choose **Save link as**).

<details class="resource-callout caution"><summary><span class="callout-label">Warning or troubleshooting</span><span class="callout-title">Keep your data safe</span></summary><p>Only upload data you're allowed to use. Leave out anything confidential or identifying, such as names, addresses, medical records or private client data. Not sure? Use the sample dataset instead, or delete the sensitive columns first. And never paste passwords or API keys into the chat.</p></details>

### Add the file to your Codespace

Now pop the file into your Codespace:

1. Open the **Explorer** panel in your Codespace (the files icon at the top of the left sidebar).
2. Drag your file onto the list of files, or right-click in the panel and choose **Upload**.
3. Right-click the file, choose **Rename**, and give it a simple name: `data.csv`, or `data.xlsx` if it's an Excel spreadsheet.

### Ask Copilot to read it

Open Copilot Chat and paste this in:

```text
There is a data file called data.csv in this workspace. Install any packages you need, then read the file and tell me, in plain English:
- how many rows and columns it has
- what each column appears to contain
- any missing values or anything that looks odd
- three interesting questions I could ask of this data

Do not run any analysis yet.
```

If you uploaded an Excel file, write `data.xlsx` in place of `data.csv`.

Have a read of what comes back before you move on. If a column or a word doesn't make sense, just ask:

```text
Explain the columns again as if I have never worked with data before. Use one example row.
```

<details><summary>No Copilot? Start manually</summary><p>If you'd rather do it yourself, install the tools and load the file straight from the terminal:</p>

```bash
pip install pandas matplotlib streamlit openpyxl
```

```python
import pandas as pd

df = pd.read_csv('data.csv')     # or pd.read_excel('data.xlsx')
print(df.shape)      # how many rows and columns
print(df.head())     # the first few rows
print(df.describe()) # a summary of the numbers
```
</details>

## 3. Explore your data with charts

Charts are the fastest way to get a feel for a dataset. Ask Copilot to build them, and to tell you what they mean.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">Which chart should I use?</span></summary><p>The chart you want depends on the question you're asking:</p><ul><li>A <strong>histogram</strong> shows how one number is spread out, such as heights or prices.</li><li>A <strong>bar chart</strong> compares categories, such as the count of each species or sales per region.</li><li>A <strong>line chart</strong> shows how something changes over time.</li><li>A <strong>scatter plot</strong> shows whether two numbers move together.</li><li>A <strong>box plot</strong> compares the spread of one number across different groups.</li></ul><p>Don't feel you have to memorise any of this. Just ask Copilot: "Which chart would suit this column, and why?"</p></details>

Try prompts like these, swapping in your own column names:

```text
Create a histogram showing how <column name> is distributed. Save it as a PNG file I can open, then explain in plain English what the chart shows and anything unusual about it.
```

```text
Choose three charts that would help a beginner understand this dataset. Tell me why you chose each type of chart, then create them and save each one as a PNG file.
```

```text
Compare <a group column> across <a number column> using a box plot, or a bar chart with error bars. Tell me what stands out, and what I should be careful about.
```

Copilot will install whatever charting tools it needs and save the images into your workspace. Open them from the **Explorer** panel. If a chart looks wrong, or comes out empty, just tell it:

```text
That chart is empty. Work out why, fix it, and explain what went wrong.
```

Then nudge the AI to be honest about its own work:

```text
If you were checking this chart for mistakes, what would you look at first?
```

## 4. Analyse your data

Charts are lovely, but let's go a bit deeper. Start with some simple summaries, then let the AI stretch its legs on something more ambitious, including building a small model of its own.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What the numbers mean</span></summary><p><strong>Summary statistics</strong> describe a column with a few numbers: the <strong>mean</strong> (average), the <strong>median</strong> (the middle value) and the <strong>spread</strong> (how far the values sit from the middle). A <strong>correlation</strong> measures whether two numbers tend to move together. Remember: <strong>a relationship is not proof of cause</strong>. Ice cream sales and sunburn rise together, but ice cream doesn't cause sunburn. Whenever the AI hands you a number, ask it to explain.</p></details>

```text
Give me a table of summary statistics for every numeric column: count, mean, median, standard deviation and the quartiles. Under each one, add a single sentence in plain English explaining what the numbers mean.
```

```text
Use Pearson correlation to find which pairs of numeric columns move together. Show me the strongest ones, then explain why a correlation is not the same as cause and effect.
```

```text
Run a t-test to check whether <a number column> really differs between the two groups in <a group column>. If there are more than two groups, use an ANOVA instead. Explain the p-value in plain English, and be honest about what it does and doesn't tell me.
```

Ready for something more ambitious?

```text
Using this data, fit a linear regression to predict <column name>. Tell me which columns you used, report R² and the typical error, and check how well it works on data it hasn't seen, using a train/test split. If <column name> is a category rather than a number, use logistic regression instead. Keep the explanation beginner-friendly and be honest about the limits.
```

```text
Use k-means clustering to group the rows by their numeric columns. Tell me how many clusters you chose and why, then describe what each group has in common in plain English.
```

And finally, get the AI to be critical of its own work:

```text
List the assumptions behind the methods you used, such as normality, independence or a linear relationship. Which of them might this data break, and what should I check before trusting the results?
```

## 5. Build an interactive dashboard with Streamlit

A dashboard lets other people explore your findings without reading a line of code. Streamlit takes a short Python script and turns it into an interactive web page, complete with dropdowns, filters and charts.

<details class="resource-callout information"><summary><span class="callout-label">Useful background</span><span class="callout-title">What is Streamlit?</span></summary><p><strong>Streamlit</strong> is a Python tool that turns a script into an interactive web app. Rather than a fixed report, whoever's looking can pick a group from a dropdown, drag a slider or switch between charts, and the page updates on the spot. It's one of the quickest ways to share data work, and all you have to do is describe the page you want.</p></details>

```text
Create a Streamlit app called app.py that presents the findings from this dataset. Include:
- a short, friendly introduction to the data
- one filter or dropdown the viewer can change
- at least two charts that respond to that filter
- a few key numbers

Keep it simple, explain each part briefly, and make sure it runs.
```

Now ask Copilot to start the app and to tell you when the preview link is ready. Streamlit runs on port `8501`, and Codespaces will offer to open it for you. Keep that link open in another tab: change the app, refresh, and watch it update.

Then keep improving it:

```text
Change the dashboard so that <what you want>. Explain what you changed and how it affects the page.
```

```text
The dashboard is confusing for someone who has never seen this data. Make it clearer, and tell me what you improved.
```

### Starting the dashboard again

Your dashboard stops running when you close its terminal or shut the Codespace, but don't worry: your files are perfectly safe. Ask Copilot to start it up again, or run this yourself in the terminal:

```bash
python -m streamlit run app.py
```

If the preview link doesn't show up, open the **Ports** tab, add port `8501`, and open the forwarded address. [GitHub explains Codespaces port forwarding here.](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)

## Keep going

Time to save your work. Open the **Source Control** panel (the branch icon in the left sidebar), stage your changes, write a short message and select **Commit**, then **Sync Changes**. That way your data, charts and `app.py` all live safely in your repository.

<details class="resource-callout caution"><summary><span class="callout-label">Warning or troubleshooting</span><span class="callout-title">Before you share</span></summary><p>Your dashboard might contain the data you uploaded, so give it a once-over before you share it. Don't publish anything confidential or personal, and credit any data or images you didn't make yourself.</p></details>

If you fancy carrying on, here are a few ideas:

- Add a second file or more rows, and ask the AI to compare the two.
- Ask for a different kind of model, then for a plain-English comparison of the two.
- Deploy your Streamlit app so it has a public link you can share.
- Ask Copilot to write a short summary of your findings that you can paste into a report.

Whatever you do next, keep the same habit: say what you want, ask the AI to explain and to check its own work, and never trust a number you don't understand.

## Using AI thoughtfully: people and the environment

AI can make data analysis more approachable, but a convincing chart or explanation can still be wrong. Your choices about data, checking results and sharing findings affect other people.

### Social impacts and what we can do

AI tools can support learning, but they also raise questions about privacy, bias, unequal access and becoming dependent on answers we do not understand. These are central concerns in [UNESCO’s guidance on generative AI in education and research](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research).

- **Protect privacy.** Use public practice data and invented examples; do not upload personal or confidential information. Check what your tool stores and how it uses your inputs.
- **Check who your data represents.** Missing groups and biased measurements can produce unfair conclusions. Check missing values and results across relevant groups; explain uncertainty and avoid treating a practice model as a tool for decisions about people.
- **Keep the analysis reviewable.** Save the code, record which tools you used and check key calculations independently. Explain where AI helped; ask a knowledgeable person to review consequential findings.
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
