
import InNavbar from '../../components/InNavbar'
import Gallery from './Gallery'
import ArticleView from './ArticleView'
import { useState } from 'react'
import SideBar from './SideBar'

const EventPage = () => {
  const eventDetail = {
    uri: 'eng-8843762',
    title: 'Ethiopia shaken by a new and growing rebellion in Amhara',
    summary:
      "Two weeks after irregular militia fighters called the Fano seized several towns and cities in Amhara, Ethiopia's second-biggest region, the barricades have been cleared from the streets and an uneasy calm has been restored by the federal military. The fighting was the fiercest to grip Ethiopia since a November ceasefire ended the two-year conflict in the next-door region of Tigray.  'Prime Minister Abiy Ahmed had set his sights on welcoming back foreign investors and kickstarting the economy. Inst",
    date: '2023-08-20',
    imageUrls: [
      'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
    ],

    articles: [
      {
        uri: '7681400647',
        url: 'https://punchng.com/au-voices-great-concern-over-deadly-libya-fighting/',
        title: "AU voices 'great concern' over deadly Libya fighting",
        body: 'The African Union on Thursday voiced "great concern" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts. Fifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported. AU Commission head Moussa Faki Mahamat "is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded", the pan-African body said in a statement. Faki "urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation," it said. He also warned that there was "no military solution to the Libyan crisis and that Libya\'s unity, peace, stability, and historic international status can only be regained by peaceful means". This week\'s bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011.',
        date: '2023-08-17',
        time: '09:54:24',
        sourceName: 'Punch Newspapers',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7681348346',
        url: 'https://www.zawya.com/en/press-release/africa-press-releases/statement-by-the-chairperson-of-the-african-union-commission-on-the-violent-developments-in-libya-yu3hbuq2',
        title:
          'Statement by the Chairperson of the African Union Commission on the violent developments in Libya',
        body:
          'The Chairperson of the African Union Commission, H.E. Moussa Faki Mahamat, is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded.\n' +
          'He urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities.\n' +
          'The Chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation.\n' +
          "The Chairperson of the Commission solemnly recalls that there is no military solution to the Libyan crisis and that Libya's unity, peace, stability and historic international status can only be regained by peaceful means.\n" +
          'Distributed by APO Group on behalf of African Union (AU).',
        date: '2023-08-17',
        time: '09:13:07',
        sourceName: 'Zawya.com',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7681730620',
        url: 'https://english.news.cn/20230817/1cafb8dc89c942c5a19af77b039a4329/c.html',
        title:
          'AU calls for immediate end to all hostilities in embattled Libya',
        body:
          'ADDIS ABABA, Aug. 17 (Xinhua) -- Chairperson of the African Union (AU) Commission Moussa Faki on Thursday called for an immediate end to all hostilities in Libya.\n' +
          'Faki in a press statement urged all stakeholders including military, political, and social actors in the North African country to put an immediate end to all hostilities.\n' +
          'The statement expressed great concern with the recent security situation in the Libyan capital of Tripoli which resulted in many lives lost and many others wounded.\n' +
          `"The chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation," read the statement. "The AU commission chairperson solemnly recalls that there is no military solution to the Libyan crisis and that Libya's unity, peace, stability, and historic international status can only be regained by peaceful means."\n` +
          "Violent clashes broke out in parts of Tripoli late Monday evening between the 444 Brigade and the Special Deterrence Force following the latter's reported arrest of a powerful 444 Brigade commander.\n" +
          'A total of 55 people have been killed and 126 injured so far in the clashes that erupted in the Libyan capital.\n' +
          'Libya has witnessed violence and insecurity since the fall of the late leader Muammar Gaddafi in 2011. ■',
        date: '2023-08-17',
        time: '14:17:56',
        sourceName: 'english.news.cn',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7681711650',
        url: 'https://www.thesouthafrican.com/news/au-expresses-grave-concern-over-escalating-libya-conflict-breaking-17-august-2023/',
        title: 'AU expresses grave concern over escalating Libya conflict',
        body:
          'The United Nations has raised concern over the ongoing arbitrary arrests and sudden disappearance of politicians in Libya. Image by flickr.com\n' +
          'The African Union on Thursday voiced "great concern" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts.\n' +
          'ALSO READ: Libya worst armed clashes kill at least 55 people: Media Fifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported.\n' +
          'AU Commission head Moussa Faki Mahamat "is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded", the pan-African body said in a statement.\n' +
          'ALSO READ: Libya clashes kill two, forcing closure of civilian airport: Officials\n' +
          'Faki "urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation," it said.\n' +
          'He also warned that there was,\n' +
          `"No military solution to the Libyan crisis and that Libya's unity, peace, stability and historic international status can only be regained by peaceful means".\n` +
          'ALSO READ: International oil companies to resume operation in Libya\n' +
          "This week's bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011.",
        date: '2023-08-17',
        time: '14:03:23',
        sourceName: 'The South African',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7681329471',
        url: 'https://www.socialnews.xyz/2023/08/17/statement-by-the-chairperson-of-the-african-union-commission-on-the-violent-developments-in-libya/',
        title:
          'Statement by the Chairperson of the African Union Commission on the violent developments in Libya',
        body:
          'He urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities.\n' +
          'The Chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation.\n' +
          "The Chairperson of the Commission solemnly recalls that there is no military solution to the Libyan crisis and that Libya's unity, peace, stability and historic international status can only be regained by peaceful means.",
        date: '2023-08-17',
        time: '09:01:19',
        sourceName: 'Social News XYZ',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7683332489',
        url: 'https://southafricatoday.net/africa-news/north-africa/libya/africa-statement-by-the-chairperson-of-the-african-union-commission-on-the-violent-developments-in-libya/',
        title:
          'Africa: Statement By the Chairperson of the African Union Commission On the Violent Developments in Libya - South Africa Today - Africa',
        body:
          'Addis Ababa -- The Chairperson of the African Union Commission, H.E. Moussa Faki Mahamat, is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded.\n' +
          'He urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities.\n' +
          'The Chairperson reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation.',
        date: '2023-08-18',
        time: '17:43:30',
        sourceName: 'South Africa Today',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7681717616',
        url: 'https://www.nampa.org/index.php?model=categories&function=display&id=22261041',
        title:
          'AU calls for immediate end to all hostilities in embattled Libya',
        body:
          'ADDIS ABABA, Aug. 17 (Xinhua) -- Chairperson of the African Union (AU) Commission Moussa Faki on Thursday called for an immediate end to all hostilities in Libya.\n' +
          'Faki in a press statement urged all stakeholders including military, political, and social actors in the North African country to put an immediate end to all hostilities.\n' +
          'The statement expressed great concern with the recent security situation in the Libyan capital of Tripoli which resulted in many lives lost and many others wounded. < ...',
        date: '2023-08-17',
        time: '14:06:06',
        sourceName: 'nampa.org',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7681936487',
        url: 'https://thestreetjournal.org/au-voices-great-concern-over-deadly-libya-fighting/',
        title:
          "AU Voices 'great Concern' Over Deadly Libya Fighting - The Street Journal",
        body: 'By AFP 17 August 2023 | 4:09 pm The African Union on Thursday voiced "great concern" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts. Forces affiliated with the Tripoli-based Government of National Unity (GNU) deploy following two days of deadly clashes between two rival groups in Libya\'s capital, on August 16, 2023. - Gun battles between two leading armed groups in Tripoli have killed 27 people and wounded 106, a toll update from the Emergency Medicine Centre said on August 16. (Photo by Mahmud TURKIA / AFP) The African Union on Thursday voiced "great concern" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts. Fifty-five people have been killed and 146 wounded in the worst clashes in the capital Tripoli in a year which erupted on Monday night, Libyan media reported. AU Commission head Moussa Faki Mahamat "is following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded", the pan-African body said in a statement. Faki "urges all stakeholders and all military, political and social actors to put an immediate end to all hostilities... (and) reminds all stakeholders of the imperative need to pursue ongoing efforts towards national reconciliation," it said. He also warned that there was "no military solution to the Libyan crisis and that Libya\'s unity, peace, stability and historic international status can only be regained by peaceful means". This week\'s bout of fighting pitted two of the myriad of militias that have vied for power since the NATO-backed revolt that toppled longtime dictator Moamer Kadhafi in 2011. Latest NOW AI, which stands for Artificial Intelligence, is the ability of a digital computer or robot (computerized) to perform tasks commonly associated with intelligent beings. It is the science and engineering of making intelligent machines, that is a computer program carry out intelligent tasks that has to do with interacting with human beings. 26 mins ago The management of the University of Calabar (UNICAL) has suspended Cyril Ndifon, the embattled dean of the faculty of law accused of sexual harassment. The suspension was announced on Thursday in a letter signed by Gabriel Egbe, the varsity\'s registrar. Part of the letter stated: "Please refer to our letter Ref UC/REG/DISC.45A dated August 14,... 32 mins ago Nigerian singer and songwriter, Azeez Adeshina Fashola, known as Naira Marley has joined the campaign against drug abuse in the country. The spokesperson for the National Drug Law Enforcement Agency (NDLEA), Femi Babafemi, disclosed this in a statement on Thursday. Babafemi said that Naira Marley was well received by the NDLEA Chairman/Chief Executive Officer (CEO),... 50 mins ago Kano State Government said it worried over the allegation of corrupt practice raised by Justice Flora Azinge of the election petition tribunal against undisclosed legal practitioners in the state. Justice Azinge presently leading a penal of state and federal house of assembly petition in Kano, had alleged that some senior lawyers in the state had... 56 mins ago The African Union on Thursday voiced "great concern" about the flare-up of deadly fighting in Libya this week, calling for an immediate end to hostilities and for the pursuit of reconciliation efforts.", \'Court strikes out firearm charge against suspended CBN governor, Godwin Emefiele',
        date: '2023-08-17',
        time: '17:16:07',
        sourceName: 'Breaking News',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7681789206',
        url: 'https://www.standardmedia.co.ke/africa/article/2001479537/au-calls-for-peace-in-libya',
        title: 'AU calls for cessation of hostilities in Libya',
        body: 'The African Union (AU) Commission has expressed concern over the ongoing violent clashes in Libya. In a statement on Thursday, August 17, AU chairperson Moussa Faki called for the parties involved to end the hostility. "Following with great concern the developments of the security situation in Tripoli, which have resulted in the loss of many lives and many more wounded. I urge all stakeholders and all military, political, and social actors to put an immediate end to all hostilities," Faki stated. The chairperson further appealed to all peacekeeping bodies to work out solutions toward reconciliation in the conflict-hit country.Faki said that there could be no military solution to the problems in Libya, reiterating that peace, unity and stability, and international status can only be achieved through advocacy. The statement follows a fierce fight that broke out in Libya on Monday that has left many dead and scores injured. The fight broke out between the 444 Brigade that operates in Tripoli, where Prime Minister Abdul Hamid Mohammed Dbeibah heads a government, and the Special Deterrence Force. The Special Deterrence Force, which controls the airport, arrested a senior commander from the 444 Brigade, Mahmoud Hamza as he attempted to travel on Monday at Tripoli airport. Hamza, whose detention triggered violence, was later released on Tuesday evening.',
        date: '2023-08-17',
        time: '15:06:40',
        sourceName: 'Standard Digital News - Kenya',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
      {
        uri: '7682054770',
        url: 'https://www.plenglish.com/news/2023/08/17/african-union-is-concerned-about-situation-in-libya/',
        title: 'African Union is concerned about situation in Libya',
        body: "Through a press release, Mahamat urged the stakeholders and all military, political, and social actors to put an immediate end to the hostilities that, according to local sources, also wounded 146 people. It recalled the urgent need to continue the ongoing efforts toward national reconciliation, and there is no military solution to the crisis in this country. The document concluded that unity, peace, stability, and Libya's historic international status can only be restored through peaceful means. Fighting erupted after members of the Special Deterrence Force decided to arrest Mahmoud Hamza, commander of the 444th Brigade, at Maitika airport as he was on his way to Misurata city to attend a graduation ceremony.",
        date: '2023-08-17',
        time: '19:22:19',
        sourceName: 'Agencia Informativa Latinamericana Prensa Latina',
        sourceLogoUrl:
          'https://africanarguments.org/wp-content/uploads/2023/08/Ethiopia-PM-Abiy-Ahmed-Ali-Awash-Arba-28-Jan-2023.jpg',
      },
    ],
  }

  const [articleIndex, setArticleIndex] = useState(0)

  return (
    <>
      <InNavbar />
      <main className='py-12'>
        <div className='px-[2rem]'>
          <div className='max-w-[1200px] m-auto'>
            {/* intro  */}
            <div className='flex flex-col gap-3'>
              <h2 className='text-4xl font-semibold'>{eventDetail.title}</h2>
              <p>{eventDetail.summary}</p>
            </div>
            <div className=' py-12 '>
              <Gallery imageUrls={eventDetail.imageUrls} />
            </div>

            <ArticleView
              articleIndex={articleIndex}
              articles={eventDetail.articles}
              onSelectArticle={(i) => setArticleIndex(i)}
            />
          </div>
        </div>
      </main>
    </>
  )
}







export default EventPage
