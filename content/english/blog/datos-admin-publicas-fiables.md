---
title: "Is government data always reliable?"
meta_title: "Is government data always reliable?"
description: "In this post I am going to tell you a short anecdote that happened to me recently."
date: 2024-08-10T00:00:00.000Z
image: "/images/image-placeholder.png"
categories: ["Data", "Anecdote"]
author: "Mireia Camacho"
tags: ["data sources", "public administration"]
draft: false
---

In this post I am going to tell you a short anecdote that happened to me recently. Even so, we have to go back to 2020 to find its beginning.

In 2020, the lockdown brought many neighbourhoods closer and encouraged residents to ‘make a community’. It was around that time that many agreed to hang a banner on their balcony with the slogan ‘Enough is enough! For a safe Mataró’ *(Mataró is the name of my city)*.

The truth is that for quite a few years now, the main topic of conversation among neighbours has focused on security. ‘Don't you know who was mugged the other day?’, “X got his mobile phone stolen again”, “The guy who works at Z a place had his car set on fire in the car park in A area”.... These kinds of comments were becoming more and more common, but at the time I was too busy trying to get my TFG done. 

The stress of the TFG took its toll on me during the confinement and when it was revoked I turned exercising and going for walks into my new hobby. That's when I started paying attention to the famous banners. 

Social media played a key role, because it was social media that allowed me to see the *pseudo-*discussion between neighbours who said they noticed that crimes had gone up in recent years and those who said it was a perception because we were now bored at home and more aware of what was going on around us.

Who was right? Were those really perceptions? At the beginning of 2021 I decided to make a *request to access public information* and literally asked for "data on reports in Mataró from 2015 to 2020, by type of crime, detailed by neighbourhood and with the sex and age of the person reported". So far so good, let's see what we could get from this data.

The excel arrived within a month. Doing a quick analysis, I saw that between 2015 and 2019 there was an average of 2,200 complaints per year, with the exception of 2020, where the numbers shot up to 3,700 reports. What was going on here? I was quite surprised to see that almost half of the 2020 reports were due to *(drum roll)* reports made against people who had skipped lockdown! Taking out that excess, the reality of the 2020 data was pretty much the same as in previous years.

Lucky or not (more lucky than unlucky, I'll tell you), perfectionism knocked on my door and I decided that this project was going to be put on *stand by* because I didn't have enough programming skills to produce the data journalism article the way I wanted. And there it was parked until 2022, when I decided to take it up again and ask for the 2021 data with the same variables and the same description. 

There was nothing too remarkable in the new file I received: this time, according to the data, there had been 2,600 reports in 2021. Slightly more than in previous years, but for a city of 130,000 inhabitants that rate seemed to be within the normal range.

Again, due to life's circumstances, I left the project on the back burner and it is only now, in 2024, that I have taken up again what I had left behind.

In order to keep the immediacy factor, I asked again for the updated data from 2020 to 2023. I asked for the data for 2020 and 2021 even though I already had it, in order to be able to check, for example, if the name of any type of crime had changed or if the numbers were very different. I didn't have to lift a finger to realise that **the data was completely different**.

How far behind the ‘skyrocketing’ 3,700 reports in 2020 in the previous dataset were that the updated data showed that in 2020 there had been 7,500 reports and the fines from the confinement were no longer included. On top of that, **the trend was rising year on year at a much more significant rate** than what was shown in the other dataset. While in the previous data we had a difference of tens or hundreds of reports from year to year, in the new data there was a clear upward trend that was growing by hundreds or thousands.

The only difference in the new dataset was that here I had been given the data in two separate excel tabs: one with the crimes in each neighbourhood and the other tab with the profile of the reported people. Without any possibility of joining one data with the other as I had in the previous dataset. 

My first reaction was to think that they had given me the wrong data, because out of the 3 times I had asked for it, 2 of them matched and one didn't. That same afternoon I went to visit the Mossos d'Esquadra and they told me they didn't know anything about it, but that the numbers that matched the most for them were those of the last dataset. 

*Special mention should be made of the sentence I was told: ‘We have just started the shift and we have made 14 reports, it is impossible that in a year you only get 2,000 reports’.*  

Knowing then that the data that was *wrong* was the old one, I made another request with the reports from 2016 to 2023, asking explicitly that the data of the reported people should not be in a separate table. 

To my surprise (or at this point to nobody's surprise), a new dataset arrived **completely different from the previous ones**. Now the average number of reports was not around the 2,000 per year of the first dataset or the 8,000 of the second. Now I was faced with data that said there were 1,500 reports on average every year.

At least this time the profile of those reported was in the same row as the offences for which they had been reported. They had also added the column ‘Origin’, even though I had not explicitly asked for it. 

By now the more astute of you will have realised what was going on. A nice man from the Conselleria d'Interior had to explain it to me over the phone after I had made a complaint asking for explanations.

It turns out that in their logic there is no such thing as a dataset with NAs. If a row has any NAs, they remove it from the dataset before giving it to you. So, the **solution of the mystery** is that the first dataset only contained the reports in which the sex and age of the reported people were known, and the last one had to fulfil the variables *Sex*, *Age* and also *Origin*. That is why there were fewer rows. 

In the one with an average of 8,000 reports per year, as they had separated the information into two tabs, the number of reports had not been affected too much and, as the Mossos said, it is the one that is closest to reality (although the open data of the Mossos shows higher numbers, possibly they have also applied another filter and have sent me only the cases in which the neighbourhood of the crime is known).

So, to answer the question in the title ‘Are public administrations’ data reliable? *It depends*. After all, the data they sent me was correct. The *error* was that it was **incomplete**. If I had asked for it explicitly with the NAs, would they have sent it to me complete? I have yet to check that, but I hope so. Have they created a certain degree of mistrust? Yes, there's no reason to deny it. But I don't want to think that the public officer who sent me the data did it with bad intentions either; perhaps an informative note about the NAs could have solved the misunderstanding and saved me a lot of time.

From now on, we will have to do our work better: we will have to write more detailed requests and check the data by other means. Especially because very few of them come with documentation or metadata, so the conclusions of the analyses often come from our assumptions of what the data represent, which should not happen. 

What is really important is to know the context of what we want to cover and to see if the data is reflecting reality, and if it is not, to look for what is going on. That is the job of a data analyst or a data journalist and here we want to do our job well!