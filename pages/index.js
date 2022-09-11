import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import InfoCard from "../components/InfoCard"

export default function Home() {

  var nameArr = ["Varun Nagapurkar", "Daniel Vaynberg", "Daniel Lyadov", "Nabil Abdullahi", "Anna Winkel", "Katie Townsend", "Tae Jin Lee"];
  var titleArr = [ "Co-President", "Co-President", "Co-President", "Vice President", "Meetings and Activities Director", "Digital Media Manager", "Content Director"];
  var descriptionArr = ["Hey! My name is Varun and I'm one of the SIC co-presidents this year! I'm interested in Fintech and computer science along with investing strategies and day trading. Outside of school, I compete in DECA and am the varsity swim captain. I love listening to music and spending time outdoors. Can&#39;t wait to have a great first year!", "Hey everybody, my name is Daniel Vaynberg and I am one of your SIC co-presidents. I am incredibly interested in the field of finance. On top of the Stocks & Investing Club, I compete in DECA and BPA and am the captain of the Swim & Dive team. In my spare time I love to alpine ski and do watersports, and I can’t wait for a great first year!",  "Hi! My name is Daniel lyadov, and I will be a co-president of the SIC this year. I play soccer for the varsity team and am currently applying to college to go into law! I’m excited to meet the new members of the club and participate in the competition!", "I love to play basketball and soccer. I’m a junior and I interested in investing. Something I’m excited for this season is meeting all our new members!", "I am interested in business, cars, baking, and travel. My hobbies are trap and skeet shooting, DECA, volunteering, hanging out with friends, and running my business. I am excited to learn more about cryptocurrency and blockchain.", "I love to spend time with friends, play and coach volleyball, and listen to music. I’m excited to meet new people and be involved in something new for my senior year.", "I like anything to do with the economy and trying to figure out what will happen in the future based off it. I also like to snowboard, skateboard, swim, and work out. Excited to share my knowledge on the topic"];

  var childrenArr = [];
  var childrenArrTwo = [];


  for(var x = 0; x < 3; x++) {
    childrenArr.push(<InfoCard title={nameArr[x]} subtitle={titleArr[x]} description={descriptionArr[x]} />);
  }


  for(var x = 3; x < nameArr.length; x++) {
    childrenArrTwo.push(<InfoCard title={nameArr[x]} subtitle={titleArr[x]} description={descriptionArr[x]} />);
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Stocks and Investing Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>

      <main className={styles.main}>
          <h1 className={styles.title}>
            Wayzata Stocks & Investing Club
          </h1>
          <br />
          <br />
          <a href="https://docs.google.com/forms/d/1kn6M-43CxOu1jQVRCP3dt3GRh_qzDc-KfWolZJbpSio/edit#responses" className="signUpButtonTextAlt"> Join us </a>
      </main>
      <svg version="1.1" width="1080" height="280" preserveAspectRatio="none" viewBox="0 0 1080 280" style={{width: "100%", position: "absolute", left: "0px"}}>
    <g mask="url(&quot;#SvgjsMask1102&quot;)" fill="none">
        <rect width="1080" height="280" x="0" y="0" fill="rgba(20, 48, 93, 0)"></rect>
        <path d="M 0,27 C 72,56 216,157.6 360,172 C 504,186.4 576,98 720,99 C 864,100 1008,161.4 1080,177L1080 280L0 280z" fill="rgba(237,176,26,255)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1102">
            <rect width="1080" height="280" fill="#ffffff"></rect>
        </mask>
    </defs>
</svg>

      <div className="pageTwo"> 
        <div className="pageContainer">
          <div className="leftContainer">
            <div className="pageTitle"> Our Mission</div>
            <div className="pageTextBig"> Stocks don &#39; t have to be difficult. </div>
            <div className="pageText"> Investing is often inaccessible. Technical jargon and lack of education on the subject create barriers to entry, with more than half of the country having no investment in the stock market at all. <br /> <br /> At Wayzata SIC, we aim to provide an accessible pathway for students to enter the field of stocks and investing. We offer a series of lectures that teach students everything from investment strategies and market trends, to how to read market indicators and how to create a balanced portfolio. We want teach our generation not just how to invest, but how to invest well. </div>
            <br />
            <div className="pageText bold"> We look forward to seeing you. <a href="https://docs.google.com/forms/d/1kn6M-43CxOu1jQVRCP3dt3GRh_qzDc-KfWolZJbpSio/edit#responses" className="signUpButtonText"> Join us </a> </div>
          </div>
          <div className="pageImage"> <img className="pageImageImage" src="/stock.png" /> </div>
        </div>
      </div>
      <svg version="1.1" width="1080" height="280" preserveAspectRatio="none" viewBox="0 0 1080 280" style={{width: "100%", marginTop: "-1px", position: "absolute", left: "0px", transform: "rotate(180deg)"}}>
    <g mask="url(&quot;#SvgjsMask1102&quot;)" fill="none">
        <rect width="1080" height="280" x="0" y="0" fill="rgba(20, 48, 93, 0)"></rect>
        <path d="M 0,27 C 72,56 216,157.6 360,172 C 504,186.4 576,98 720,99 C 864,100 1008,161.4 1080,177L1080 280L0 280z" fill="rgba(237,176,26,255)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1102">
            <rect width="1080" height="280" fill="#ffffff"></rect>
        </mask>
    </defs>
</svg>

    <div className="pageThree">
      <div className="pageTitle"> Meet the Team</div>
      <div className="pageBox"> 
        {childrenArr}
      </div>
      <div className="pageBox"> 
        {childrenArrTwo}
      </div>
      <div className="pageFour">
        <div className="pageTitle pageFourTitle"> Our Sponsors </div>
        <div className="pageBox"> 
          <div className="infocardSpecial"> 
            <div className="infoTitle"> Muntaha Issa Agency </div>
            <img className="sponsor-image" src="/sponsor.png" />
          </div>
        </div>
      </div>
    </div>

    


    </div>
  )
}
