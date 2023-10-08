# News API routes

## Intro

An Event is simply something that happened. An Article is an article written about an event from news sources like BBC, CNN, etc. When you combine an event with its corresponding articles you get an EventDetail. Look at these JSONs first to understand all the news routes.

### Event Json

| Atrribute | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| uri       | string   | It's unique id                         |
| title     | string   | It's title                             |
| summary   | string   | 2 or 3 paragraphs about the event      |
| date      | string   | YYYY-MM-DD formatted date of the event |
| imageUrls | [string] | 3 urls of images of the event          |

#### Example

```json
{
    "uri": "eng-8876429",
    "title": "Ukraine's defence minister resigns after Zelenskiy removes him from post",
    "summary": "Oleksii Reznikov, whose ministry has been hit by corruption scandals, confirms in letter he is stepping down Ukraine's defence minister has submitted his resignation letter after Volodymyr Zelenskiy removed him from his post on Sunday night, in the biggest reshuffle by the president of his government team since Vladimir Putin's full-scale invasion. Oleksii Reznikov, whose ministry has been hit by corruption scandals, said he had written to the chair of Ukraine's parliament, Ruslan Stefanchuk, c",
    "date": "2023-09-04",
    "imageUrls": [
      "https://static.cnews.fr/sites/default/files/ukraine_1_64f58fde73e9f_0.jpeg",
      "https://media.breitbart.com/media/2023/09/GettyImages-1536747675-e1693924323825.jpg",
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HDMKFK6LTOE2P2JSHCZQVADW3A_size-normalized.jpg&w=1440"
    ]
},
```

### Article Json

| Atrribute     | Type   | Description                                                    |
| ------------- | ------ | -------------------------------------------------------------- |
| uri           | string | Unique id of the article                                       |
| url           | string | The link to the article                                        |
| title         | string | Title of the article                                           |
| body          | string | All content of the article                                     |
| date          | string | YYYY-MM-DD format of the date where the article was written    |
| time          | string | HH-MM-SS 24 format of time where the article was wirtter       |
| sourceName    | string | The name of the organization that wrote the article            |
| sourceLogoUrl | string | The url of the logo of the organization that wrote the article |

#### Example

```json
{
  "uri": "7681400647",
  "url": "https://punchng.com/au-voices-great-concern-over-deadly-libya-fighting",
  "title": "AU voices 'great concern' over deadly Libya fighting",
  "body": "The African Union on Thursday voiced \"great concern\" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts.\n Fifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported.\n AU Commission head Moussa Faki Mahamat \"is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded\n\", the pan-African body said in a statement.\n Faki \"urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation,\" it said.\n He also warned that there was \"no military solution to the Libyan crisis and that Libya's unity, peace, stability, and historic international status can only be regained by peaceful means\". This week's bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011.",
  "date": "2023-08-17",
  "time": "09:54:24",
  "sourceName": "Punch Newspapers",
  "sourceLogoUrl": "https://cdn.punchng.com/wp-content/uploads/2021/05/11134444/logo-white.png"
}
```

#### EventDetails Json

| Atrribute | Type       | Description                              |
| --------- | ---------- | ---------------------------------------- |
| event     | Event      | Event of the event hehe                  |
| articles  | [Articles] | List of articles written about the event |

```json
{
  "event": {
    "uri": "eng-8843762",
    "title": "Ethiopia shaken by a new and growing rebellion in Amhara",
    "summary": "Two weeks after irregular militia fighters called the Fano seized several towns and cities in Amhara, Ethiopia's second-biggest region, the barricades have been cleared from the streets and an uneasy calm has been restored by the federal military. The fighting was the fiercest to grip Ethiopia since a November ceasefire ended the two-year conflict in the next-door region of Tigray.\n\nPrime Minister Abiy Ahmed had set his sights on welcoming back foreign investors and kickstarting the economy. Inst",
    "date": "2023-08-20",
    "imageUrls": [
      "https://static.cnews.fr/sites/default/files/ukraine_1_64f58fde73e9f_0.jpeg",
      "https://media.breitbart.com/media/2023/09/GettyImages-1536747675-e1693924323825.jpg",
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HDMKFK6LTOE2P2JSHCZQVADW3A_size-normalized.jpg&w=1440"
    ]
  },
  "articles": [
    {
      "uri": "7681400647",
      "url": "https://punchng.com/au-voices-great-concern-over-deadly-libya-fighting/",
      "title": "AU voices 'great concern' over deadly Libya fighting",
      "body": "The African Union on Thursday voiced \"great concern\" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts.\n\nFifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported.\n\nAU Commission head Moussa Faki Mahamat \"is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded\", the pan-African body said in a statement.\n\nFaki \"urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation,\" it said.\n\nHe also warned that there was \"no military solution to the Libyan crisis and that Libya's unity, peace, stability, and historic international status can only be regained by peaceful means\".\n\nThis week's bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011.",
      "date": "2023-08-17",
      "time": "09:54:24",
      "sourceName": "Punch Newspapers"
    },
    {
      "uri": "7681348346",
      "url": "https://www.zawya.com/en/press-release/africa-press-releases/statement-by-the-chairperson-of-the-african-union-commission-on-the-violent-developments-in-libya-yu3hbuq2",
      "title": "Statement by the Chairperson of the African Union Commission on the violent developments in Libya",
      "body": "The Chairperson of the African Union Commission, H.E. Moussa Faki Mahamat, is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded.\n\nHe urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities.\n\nThe Chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation.\n\nThe Chairperson of the Commission solemnly recalls that there is no military solution to the Libyan crisis and that Libya's unity, peace, stability and historic international status can only be regained by peaceful means.\n\nDistributed by APO Group on behalf of African Union (AU).",
      "date": "2023-08-17",
      "time": "09:13:07",
      "sourceName": "Zawya.com"
    },
    {
      "uri": "7681730620",
      "url": "https://english.news.cn/20230817/1cafb8dc89c942c5a19af77b039a4329/c.html",
      "title": "AU calls for immediate end to all hostilities in embattled Libya",
      "body": "ADDIS ABABA, Aug. 17 (Xinhua) -- Chairperson of the African Union (AU) Commission Moussa Faki on Thursday called for an immediate end to all hostilities in Libya.\n\nFaki in a press statement urged all stakeholders including military, political, and social actors in the North African country to put an immediate end to all hostilities.\n\nThe statement expressed great concern with the recent security situation in the Libyan capital of Tripoli which resulted in many lives lost and many others wounded.\n\n\"The chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation,\" read the statement. \"The AU commission chairperson solemnly recalls that there is no military solution to the Libyan crisis and that Libya's unity, peace, stability, and historic international status can only be regained by peaceful means.\"\n\nViolent clashes broke out in parts of Tripoli late Monday evening between the 444 Brigade and the Special Deterrence Force following the latter's reported arrest of a powerful 444 Brigade commander.\n\nA total of 55 people have been killed and 126 injured so far in the clashes that erupted in the Libyan capital.\n\nLibya has witnessed violence and insecurity since the fall of the late leader Muammar Gaddafi in 2011. ■",
      "date": "2023-08-17",
      "time": "14:17:56",
      "sourceName": "english.news.cn"
    },
    {
      "uri": "7681711650",
      "url": "https://www.thesouthafrican.com/news/au-expresses-grave-concern-over-escalating-libya-conflict-breaking-17-august-2023/",
      "title": "AU expresses grave concern over escalating Libya conflict",
      "body": "The United Nations has raised concern over the ongoing arbitrary arrests and sudden disappearance of politicians in Libya. Image by flickr.com\n\nThe African Union on Thursday voiced \"great concern\" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts.\n\nALSO READ: Libya worst armed clashes kill at least 55 people: Media\n\nFifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported.\n\nAU Commission head Moussa Faki Mahamat \"is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded\", the pan-African body said in a statement.\n\nALSO READ: Libya clashes kill two, forcing closure of civilian airport: Officials\n\nFaki \"urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation,\" it said.\n\nHe also warned that there was,\n\n\"No military solution to the Libyan crisis and that Libya's unity, peace, stability and historic international status can only be regained by peaceful means\".\n\nALSO READ: International oil companies to resume operation in Libya\n\nThis week's bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011.",
      "date": "2023-08-17",
      "time": "14:03:23",
      "sourceName": "The South African"
    },
    {
      "uri": "7681329471",
      "url": "https://www.socialnews.xyz/2023/08/17/statement-by-the-chairperson-of-the-african-union-commission-on-the-violent-developments-in-libya/",
      "title": "Statement by the Chairperson of the African Union Commission on the violent developments in Libya",
      "body": "He urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities.\n\nThe Chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation.\n\nThe Chairperson of the Commission solemnly recalls that there is no military solution to the Libyan crisis and that Libya's unity, peace, stability and historic international status can only be regained by peaceful means.",
      "date": "2023-08-17",
      "time": "09:01:19",
      "sourceName": "Social News XYZ"
    },
    {
      "uri": "7683332489",
      "url": "https://southafricatoday.net/africa-news/north-africa/libya/africa-statement-by-the-chairperson-of-the-african-union-commission-on-the-violent-developments-in-libya/",
      "title": "Africa: Statement By the Chairperson of the African Union Commission On the Violent Developments in Libya - South Africa Today - Africa",
      "body": "Addis Ababa -- The Chairperson of the African Union Commission, H.E. Moussa Faki Mahamat, is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded.\n\nHe urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities.\n\nThe Chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation.",
      "date": "2023-08-18",
      "time": "17:43:30",
      "sourceName": "South Africa Today"
    },
    {
      "uri": "7681717616",
      "url": "https://www.nampa.org/index.php?model=categories&function=display&id=22261041",
      "title": "AU calls for immediate end to all hostilities in embattled Libya",
      "body": "ADDIS ABABA, Aug. 17 (Xinhua) -- Chairperson of the African Union (AU) Commission Moussa Faki on Thursday called for an immediate end to all hostilities in Libya.\n\nFaki in a press statement urged all stakeholders including military, political, and social actors in the North African country to put an immediate end to all hostilities.\n\nThe statement expressed great concern with the recent security situation in the Libyan capital of Tripoli which resulted in many lives lost and many others wounded. < ...",
      "date": "2023-08-17",
      "time": "14:06:06",
      "sourceName": "nampa.org"
    },
    {
      "uri": "7681936487",
      "url": "https://thestreetjournal.org/au-voices-great-concern-over-deadly-libya-fighting/",
      "title": "AU Voices 'great Concern' Over Deadly Libya Fighting - The Street Journal",
      "body": "Court strikes out firearm charge against suspended CBN governor, Godwin Emefiele\n\nBy AFP 17 August 2023 | 4:09 pm The African Union on Thursday voiced \"great concern\" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts. Forces affiliated with the Tripoli-based Government of National Unity (GNU) deploy following two days of deadly clashes between two rival groups in Libya's capital, on August 16, 2023. - Gun battles between two leading armed groups in Tripoli have killed 27 people and wounded 106, a toll update from the Emergency Medicine Centre said on August 16. (Photo by Mahmud TURKIA / AFP) The African Union on Thursday voiced \"great concern\" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts. Fifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported. AU Commission head Moussa Faki Mahamat \"is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded\", the pan-African body said in a statement. Faki \"urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation,\" it said. He also warned that there was \"no military solution to the Libyan crisis and that Libya's unity, peace, stability and historic international status can only be regained by peaceful means\". This week's bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011. Latest NOW AI, which stands for Artificial Intelligence, is the ability of a digital computer or robot (computerized) to perform tasks commonly associated with intelligent beings. It is the science and engineering of making intelligent machines, that is a computer program carry out intelligent tasks that has to do with interacting with human beings. 26 mins ago The management of the University of Calabar (UNICAL) has suspended Cyril Ndifon, the embattled dean of the faculty of law accused of sexual harassment. The suspension was announced on Thursday in a letter signed by Gabriel Egbe, the varsity's registrar. Part of the letter stated: \"Please refer to our letter Ref UC/REG/DISC.45A dated August 14,... 32 mins ago Nigerian singer and songwriter, Azeez Adeshina Fashola, known as Naira Marley has joined the campaign against drug abuse in the country. The spokesperson for the National Drug Law Enforcement Agency (NDLEA), Femi Babafemi, disclosed this in a statement on Thursday. Babafemi said that Naira Marley was well received by the NDLEA Chairman/Chief Executive Officer (CEO),... 50 mins ago Kano State Government said it worried over the allegation of corrupt practice raised by Justice Flora Azinge of the election petition tribunal against undisclosed legal practitioners in the state. Justice Azinge presently leading a penal of state and federal house of assembly petition in Kano, had alleged that some senior lawyers in the state had... 56 mins ago The African Union on Thursday voiced \"great concern\" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts.",
      "date": "2023-08-17",
      "time": "17:16:07",
      "sourceName": "Breaking News"
    },
    {
      "uri": "7681789206",
      "url": "https://www.standardmedia.co.ke/africa/article/2001479537/au-calls-for-peace-in-libya",
      "title": "AU calls for cessation of hostilities in Libya",
      "body": "The African Union (AU) Commission has expressed concern over the ongoing violent clashes in Libya.\n\nIn a statement on Thursday, August 17, AU chairperson Moussa Faki called for the parties involved to end the hostility.\n\n\"Following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded. I urge all stakeholders and all military, political, and social actors to put an immediate end to all hostilities,\" Faki stated.\n\nThe chairperson further appealed to all peacekeeping bodies to work out solutions toward reconciliation in the conflict-hit country.\n\nFaki said that there could be no military solution to the problems in Libya, reiterating that peace, unity and stability, and international status can only be achieved through advocacy.\n\nThe statement follows a fierce fight that broke out in Libya on Monday that has left many dead and scores injured.\n\nThe fight broke out between the 444 Brigade that operates in Tripoli, where Prime Minister Abdul Hamid Mohammed Dbeibah heads a government, and the Special Deterrence Force.\n\nThe Special Deterrence Force, which controls the airport, arrested a senior commander from the 444 Brigade, Mahmoud Hamza as he attempted to travel on Monday at Tripoli airport.\n\nHamza, whose detention triggered violence, was later released on Tuesday evening.",
      "date": "2023-08-17",
      "time": "15:06:40",
      "sourceName": "Standard Digital News - Kenya"
    },
    {
      "uri": "7682054770",
      "url": "https://www.plenglish.com/news/2023/08/17/african-union-is-concerned-about-situation-in-libya/",
      "title": "African Union is concerned about situation in Libya",
      "body": "Through a press release, Mahamat urged the stakeholders and all military, political, and social actors to put an immediate end to the hostilities that, according to local sources, also wounded 146 people.\n\nIt recalled the urgent need to continue the ongoing efforts toward national reconciliation, and there is no military solution to the crisis in this country.\n\nThe document concluded that unity, peace, stability, and Libya's historic international status can only be restored through peaceful means.\n\nFighting erupted after members of the Special Deterrence Force decided to arrest Mahmoud Hamza, commander of the 444th Brigade, at Maitika airport as he was on his way to Misurata city to attend a graduation ceremony.",
      "date": "2023-08-17",
      "time": "19:22:19",
      "sourceName": "Agencia Informativa Latinamericana Prensa Latina"
    }
  ]
}
```

Understood Event, Article, and EventDetails? The routes will be easy to understand now!

> `GET` /api/v1/news

- Gives you a feed of events based on your country and interest category (eg: politics, sports ...). This info is obtained when the user signs up.
  - The request: ` curl -H "Authorization: Bearer <YOUR-TOKEN>" https://localhost:5000/api/v1/news`
  - The response: A list of Events.

```json
{
  "message": "success",
  "events": [
    {
      "uri": "eng-8876666",
      "title": "Exploded Russian drone fragments found in Romania",
      "summary": "Nato member state Romania said what appeared to be fragments of a Russian drone had been found on its territory.\n\nAngel Tilvar, the Romanian defence minister, told local news channel Antena 3 CNN that parts of what was most likely a drone were discovered in the eastern Tulcea county.\n\nThe area is part of the Danube delta, which forms a natural border between Romania and war-torn Ukraine.\n\n\"I confirm that in this area, pieces that may be of a drone were found,\" he said, adding that the pieces didn",
      "date": "2023-09-04",
      "imageUrls": [
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=155",
        "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2023/09/04/1693822052-droni-russi-romania.jpg?_=1693822052",
        "https://www.reuters.com/resizer/HaYgIHD2cqS4bDG4388nLi9LFdQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IN4V45CQP5JUHAXSXUIXLIUEEE.jpg"
      ]
    },
    {
      "uri": "eng-8876429",
      "title": "Ukraine's defence minister resigns after Zelenskiy removes him from post",
      "summary": "Oleksii Reznikov, whose ministry has been hit by corruption scandals, confirms in letter he is stepping down\n\nUkraine's defence minister has submitted his resignation letter after Volodymyr Zelenskiy removed him from his post on Sunday night, in the biggest reshuffle by the president of his government team since Vladimir Putin's full-scale invasion.\n\nOleksii Reznikov, whose ministry has been hit by corruption scandals, said he had written to the chair of Ukraine's parliament, Ruslan Stefanchuk, c",
      "date": "2023-09-04",
      "imageUrls": [
        "https://static.cnews.fr/sites/default/files/ukraine_1_64f58fde73e9f_0.jpeg",
        "https://media.breitbart.com/media/2023/09/GettyImages-1536747675-e1693924323825.jpg",
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HDMKFK6LTOE2P2JSHCZQVADW3A_size-normalized.jpg&w=1440"
      ]
    },
    ...
  ]
}

```

> `GET` /api/v1/news/:id

- Gives you the EventDetail from an eventUri
  - The request: `curl -H "Authorization: Bearer <YOUR-TOKEN>" https://localhost:5000/api/v1/news/<eventUri>`
  - The response: An EventDetail consisting of articles written about it.

```json
{
  "message": "Successfully got event detail",
  "event": {
    "uri": "eng-8843762",
    "title": "Ethiopia shaken by a new and growing rebellion in Amhara",
    "summary": "Two weeks after irregular militia fighters called the Fano seized several towns and cities in Amhara, Ethiopia's second-biggest region, the barricades have been cleared from the streets and an uneasy calm has been restored by the federal military. The fighting was the fiercest to grip Ethiopia since a November ceasefire ended the two-year conflict in the next-door region of Tigray.\n\nPrime Minister Abiy Ahmed had set his sights on welcoming back foreign investors and kickstarting the economy. Inst",
    "date": "2023-08-20",
    "imageUrls": [
      "https://static.cnews.fr/sites/default/files/ukraine_1_64f58fde73e9f_0.jpeg",
      "https://media.breitbart.com/media/2023/09/GettyImages-1536747675-e1693924323825.jpg",
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HDMKFK6LTOE2P2JSHCZQVADW3A_size-normalized.jpg&w=1440"
    ]
  },
  "articles": [
    {
      "uri": "7681400647",
      "url": "https://punchng.com/au-voices-great-concern-over-deadly-libya-fighting/",
      "title": "AU voices 'great concern' over deadly Libya fighting",
      "body": "The African Union on Thursday voiced \"great concern\" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts.\n\nFifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported.\n\nAU Commission head Moussa Faki Mahamat \"is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded\", the pan-African body said in a statement.\n\nFaki \"urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation,\" it said.\n\nHe also warned that there was \"no military solution to the Libyan crisis and that Libya's unity, peace, stability, and historic international status can only be regained by peaceful means\".\n\nThis week's bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011.",
      "date": "2023-08-17",
      "time": "09:54:24",
      "sourceName": "Punch Newspapers",
      "sourceLogoUrl": "https://cdn.punchng.com/wp-content/uploads/2021/05/11134444/logo-white.png"
    },
    {
      "uri": "7681348346",
      "url": "https://www.zawya.com/en/press-release/africa-press-releases/statement-by-the-chairperson-of-the-african-union-commission-on-the-violent-developments-in-libya-yu3hbuq2",
      "title": "Statement by the Chairperson of the African Union Commission on the violent developments in Libya",
      "body": "The Chairperson of the African Union Commission, H.E. Moussa Faki Mahamat, is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded.\n\nHe urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities.\n\nThe Chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation.\n\nThe Chairperson of the Commission solemnly recalls that there is no military solution to the Libyan crisis and that Libya's unity, peace, stability and historic international status can only be regained by peaceful means.\n\nDistributed by APO Group on behalf of African Union (AU).",
      "date": "2023-08-17",
      "time": "09:13:07",
      "sourceName": "Zawya.com",
      "sourceLogoUrl": "https://cdn.punchng.com/wp-content/uploads/2021/05/11134444/logo-white.png",
    },
    ...

  ]
}
```

> `GET` /api/v1/news/search?q=searchphrase

- Gives you the a list of events from a search query
  - The request: `curl -H "Authorization: Bearer <YOUR-TOKEN>" https://localhost:5000/api/v1/news/search?q=<SEARCH PHRASE>`
  - The response: A List Of Events

```json
{
  "message": "Successfully searched for topic",
  "query": "the search query",
  "events": [
    {
      "uri": "eng-8876666",
      "title": "Exploded Russian drone fragments found in Romania",
      "summary": "Nato member state Romania said what appeared to be fragments of a Russian drone had been found on its territory.\n\nAngel Tilvar, the Romanian defence minister, told local news channel Antena 3 CNN that parts of what was most likely a drone were discovered in the eastern Tulcea county.\n\nThe area is part of the Danube delta, which forms a natural border between Romania and war-torn Ukraine.\n\n\"I confirm that in this area, pieces that may be of a drone were found,\" he said, adding that the pieces didn",
      "date": "2023-09-04",
      "imageUrls": [
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=155",
        "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2023/09/04/1693822052-droni-russi-romania.jpg?_=1693822052",
        "https://www.reuters.com/resizer/HaYgIHD2cqS4bDG4388nLi9LFdQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IN4V45CQP5JUHAXSXUIXLIUEEE.jpg"
      ]
    },
    {
      "uri": "eng-8876429",
      "title": "Ukraine's defence minister resigns after Zelenskiy removes him from post",
      "summary": "Oleksii Reznikov, whose ministry has been hit by corruption scandals, confirms in letter he is stepping down\n\nUkraine's defence minister has submitted his resignation letter after Volodymyr Zelenskiy removed him from his post on Sunday night, in the biggest reshuffle by the president of his government team since Vladimir Putin's full-scale invasion.\n\nOleksii Reznikov, whose ministry has been hit by corruption scandals, said he had written to the chair of Ukraine's parliament, Ruslan Stefanchuk, c",
      "date": "2023-09-04",
      "imageUrls": [
        "https://static.cnews.fr/sites/default/files/ukraine_1_64f58fde73e9f_0.jpeg",
        "https://media.breitbart.com/media/2023/09/GettyImages-1536747675-e1693924323825.jpg",
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HDMKFK6LTOE2P2JSHCZQVADW3A_size-normalized.jpg&w=1440"
      ]
    }
  ]
}
```

> `GET` /api/v1/news/compare/

_Not Implemeted Yet but hypotetically this is how we intend it to behave_

- Gives you the a list of events from a search query
  - The request: curl -X POST -H "Authorization: Bearer <YOUR-TOKEN>" -H "Content-Type: application/json" -d '{
    "article1": {... a json with attributes title, body, date, time and sourceName},
    "article2": {... a json with attributes title, body, date, time and sourceName},
    }' "https://localhost:5000/api/v1/news/compare"
  - The response: A comparison of the 2 articles.

The request body should pass the articles that need to be compared as follows;
```json
{
  "article1": {
    "url": "https://punchng.com/au-voices-great-concern-over-deadly-libya-fighting",
    "title": "AU voices 'great concern' over deadly Libya fighting",
    "body": "The African Union on Thursday voiced \"great concern\" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts.\n Fifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported.\n AU Commission head Moussa Faki Mahamat \"is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded\n\", the pan-African body said in a statement.\n Faki \"urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation,\" it said.\n He also warned that there was \"no military solution to the Libyan crisis and that Libya's unity, peace, stability, and historic international status can only be regained by peaceful means\". This week's bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011.",
    "date": "2023-08-17",
    "time": "09:54:24",
    "sourceName": "Punch Newspapers"
  },
  "article2": {
    "url": "https://www.reuters.com/article/us-libya-au-idUKTRE76060Z20110701",
    "title": "African Union leaders offered on Friday to host talks between the Libyan government and rebels on a ceasefire",
    "body": "African Union leaders offered on Friday to host talks between the Libyan government and rebels on a ceasefire and transition to democratic government, but left open whether there was any future role for Muammar Gaddafi.  The proposal was presented to representatives of Gaddafi and rebels attending a summit of the 53-nation grouping in the central African state of Equatorial Guinea. \"We will very soon launch talks in Addis\", South African President Jacob Zuma told reporters, referring to the Ethiopian capital where the AU is headquartered.  There was no immediate reaction from either side to the offer, which according to a copy seen by Reuters, would aim to establish a consensual and inclusive transition via an interim government and elections.  Mahamadou Issoufou, president of Libya’s neighbor Niger, said nations at the summit had been requested not to act on arrest warrants issued earlier this week by the International Criminal Court against Gaddafi, his son and his spy chief. However Issoufou did not say who had made the request or whether African leaders had agreed to the demand, which would leave open the possibility of Gaddafi seeking refuge on the continent.",
    "date": "2023-13-17",
    "time": "07:24:24",
    "sourceName": "Reuters"
  }
}
```

Sample Response looks like this:
*response body*
```json
{
  "message": "Successfully compared articles.",
  "comparison": [
    {
      "source": "Standard Digital News - Kenya",
      "content": [
        {
          "conflicts": "false",
          "n": "1",
          "sentence": "The African Union (AU) Commission has expressed concern over the ongoing violent clashes in Libya."
        },
        {
          "conflicts": "false",
          "n": "2",
          "sentence": "In a statement on Thursday, August 17, AU chairperson Moussa Faki called for the parties involved to end the hostility."
        },
        {
          "conflicts": "false",
          "n": "3",
          "sentence": "\"Following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded. I urge all stakeholders and all military, political, and social actors to put an immediate end to all hostilities,\" Faki stated."
        },
        {
          "conflicts": "false",
          "n": "4",
          "sentence": "The chairperson further appealed to all peacekeeping bodies to work out solutions toward reconciliation in the conflict-hit country."
        },
        {
          "conflicts": "false",
          "n": "5",
          "sentence": "Faki said that there could be no military solution to the problems in Libya, reiterating that peace, unity and stability, and international status can only be achieved through advocacy."
        },
        {
          "conflicts": "false",
          "n": "6",
          "sentence": "The statement follows a fierce fight that broke out in Libya on Monday that has left many dead and scores injured."
        },
        {
          "conflicts": "false",
          "n": "7",
          "sentence": "The fight broke out between the 444 Brigade that operates in Tripoli, where Prime Minister Abdul Hamid Mohammed Dbeibah heads a government, and the Special Deterrence Force."
        },
        {
          "conflicts": "false",
          "n": "8",
          "sentence": "The Special Deterrence Force, which controls the airport, arrested a senior commander from the 444 Brigade, Mahmoud Hamza as he attempted to travel on Monday at Tripoli airport."
        },
        {
          "conflicts": "false",
          "n": "9",
          "sentence": "Hamza, whose detention triggered violence, was later released on Tuesday evening."
        }
      ]
    },
    {
      "source": "Agencia Informativa Latinamericana Prensa Latina",
      "content": [
        {
          "conflicts": "false",
          "n": "1",
          "sentence": "Through a press release, Mahamat urged the stakeholders and all military, political, and social actors to put an immediate end to the hostilities that, according to local sources, also wounded 146 people."
        },
        {
          "conflicts": "false",
          "n": "2",
          "sentence": "It recalled the urgent need to continue the ongoing efforts toward national reconciliation, and there is no military solution to the crisis in this country."
        },
        {
          "conflicts": "false",
          "n": "3",
          "sentence": "The document concluded that unity, peace, stability, and Libya's historic international status can only be restored through peaceful means."
        },
        {
          "conflicts": "false",
          "n": "4",
          "sentence": "Fighting erupted after members of the Special Deterrence Force decided to arrest Mahmoud Hamza, commander of the 444th Brigade, at Maitika airport as he was on his way to Misurata city to attend a graduation ceremony."
        },
        {
          "conflicts": "maybe",
          "n": "5",
          "sentence": ""
        },
        {
          "conflicts": "maybe",
          "n": "6",
          "sentence": ""
        },
        {
          "conflicts": "maybe",
          "n": "7",
          "sentence": ""
        }
      ]
    }
  ]
}
```
