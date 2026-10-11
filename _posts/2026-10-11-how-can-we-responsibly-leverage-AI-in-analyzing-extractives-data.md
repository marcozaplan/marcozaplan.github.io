---
title: How can we responsibly leverage AI in analyzing extractives data?
date: 2026-10-11
description: AI use in the extractives is on the rise. How can maximize its use while mitigating the risks?
tags: [extractives, open data, AI]
---

![During the Peer Learning Day of the EITI Global Conference 2026 in Brussels, Belgium last 7 October 2026.](/assets/images/blog/eiti-presentation.jpg)

Last October 7, I had the opportunity to speak at a session during the EITI Global Conference Peer Learning Day. I talked about how we can further facilitate the use of EITI data with the help of AI. I started by asking our participants to raise their hand if they’ve used AI particularly LLM tools in their work and the results were encouraging. 

**Why an AI tool?**

Through the years, EITI has become one of the richest repositories of extractives data. And so the more important question now has become how we can further increase the use of these data that are often too technical for average citizens or are located in siloed repositories or in formats that are difficult to analyze.

This is where AI can come in which promises to make parts of our data work more efficient. With AI and large language models or LLMs such as ChatGPT and Claude, we can easily analyze EITI data and effectively lower the barriers for nontechnical people. 

**What is EIDAn and how was it built?**

So as an experiment, I developed a tool called Extractive Industries Data Analyst or EIDAn for short which is essentially an AI-powered dashboard that allows us to generate summary reports and ask follow-up questions about our data. 

<div class="gallery">
  <img src="/assets/images/blog/eidan-revenue1.png" alt="EIDAn Revenue Explorer">
  <img src="/assets/images/blog/eidan-validation1.png" alt="EIDAn Validation Explorer">
  <img src="/assets/images/blog/eidan-aireport.png" alt="EIDAn AI summary report generator">
  <img src="/assets/images/blog/eidan-aidata.png" alt="EIDAn statistics supplied to the model">
  <img src="/assets/images/blog/eidan-followup.png" alt="EIDAn follow up question to the summary report">
</div>

EIDAn currently has two pages which are the Revenue Explorer and the Validation Explorer. It allows the user to filter by country, company, government agency, revenue stream, and years. It also has data visualizations. A user can ask it to generate an AI summary report of the current dataset in multiple languages. It takes about 10-15 seconds to generate a single report and costs around 5 cents USD. A user can then ask a follow-up question, like which reforms should the MSG prioritize, and it gives a short response which costs about one US cent. The tool also gives a glimpse of the statistics used by the model to generate its report. This is to make sure that the answers are traceable.

A user could just upload their dataset to tools like ChatGPT and analyze their data from there. But the difference with using EIDAn is the source. ChatGPT and other LLM tools draws on everything it has read and on whatever it finds in the internet. In EIDAn, every number comes straight from the EITI API or data repository. EIDan also has a built-in protocol wherein it explicitly says it does not have enough data to answer a question instead of guessing or hallucinating.

In building AI-tools, I believe that it is important to be transparent about how the tool looks on the inside to build trust among users. Again, EIDAn is built exclusively on EITI data using EITI’s API which helps address the concern around hallucination which AI is very prone to when it doesn’t have the data to answer the question it is asked. It uses Claude’s Sonnet model to generate the report primarily for cost reasons. 

**What about the risks in using AI and how can we do better?**

While the use of AI comes with some benefits, it also comes with a few risks. At the top of my mind is the concern around AI replacing humans which I personally think is not the case and should not be the case. As it is, LLMs like ChatGPT are still not capable of replacing human creativity and critical thinking. I believe that AI should only be used to make parts of our work more efficient such as collecting, cleaning, summarizing, and visualizing data which from my experience at the Philippine EITI Secretariat many years ago can take hours if not days when done manually. The time, energy, and resources we save can be reallocated for things like stakeholder outreach and policy reforms. 

Also worth highlighting is the risk of AI giving wrong and/or biased answers which is why in implementing AI tools like chatbots, high-quality open data is very important. Because at the heart of AI governance is actually open data governance. For EITI countries who want to use AI tools on their data, we need to:

1. Revisit our open data policies to first make sure that our datasets are of good quality and machine-readable. There is this saying in AI that goes like garbage in, garbage out. When data is poor, so will the responses be. 
2. Be proactive and adapt principles to govern how we use it to harness the full potential of AI and mitigate the risks. Chief among these principles is transparency. We need to be able to explain to our stakeholders what goes into our AI tools. Answers should also be traceable. 
3. Put in place accountability mechanisms meaning there should still be human ownership and oversight within the Secretariat or MSG to check AI’s outputs especially in high-stake scenarios in the future.

**Moving forward**

As we use AI more and more with EITI data, I hope that we as a community go back to basics and make sure our EITI data is of high quality and in open formats. Lastly, that we adapt governance principles that ensure AI is used responsibly.
