import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Info from './Components/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <Info 
        object="A results-driven and enthusiastic IT professional with over 3 years of experience as a technical support engineer and one and a half years as an application support engineer. Supporting service cloud applications for enterprise and essential clients. Proven track record of reducing support tickets through proactive problem management and user training."
        contact={
          <>
            Phone: +91-9891228089<br />
            Email: sanjeevk209488@gmail.com<br />
            Location: NOIDA UP
          </>
        }
        skills={
          <>
            Cloud Platform: AWS<br />
            Operating System: Linux, Windows, and MacOS<br />
            Ticketing Tool: Freshdesk, Autotask<br />
            Bug Tracking: Jira, Postman<br />
            CRM: Zoho<br />
            Database: SQL<br />
            Monitoring: Kibana<br />
            Web Tools: HTML, CSS, JavaScript
          </>
        }
        experience={
          <>
            <h1>PSC Biotech India LLP - Remote November 2022 – April 2024</h1>
            <p id='head'>Application Support Engineer</p>
            <p>
              Utilizing the Freshdesk ticketing tool and ACE (Production, Sandbox, and Validation) instances to address client requests and inquiries.<br />
              Delivering software or technical support services, usually within a clearly outlined, moderately complex project as per standard operating procedures.<br />
              Experienced in creating and managing dashboards to monitor and display key metrics.<br />
              Experienced in utilizing Postman for API endpoint testing and debugging.<br />
              Proficient in debugging complex software applications to identify and resolve issues efficiently.<br />
              Experienced in leading and participating in Agile ceremonies such as daily stand-ups, sprint planning, and retrospectives.<br />
              Collaborating with cross-functional teams to swiftly diagnose and resolve critical system issues, minimizing operational downtime.<br />
              Experienced in modifying and testing front-end code directly within the browser.<br />
              Utilizing Kibana for real-time data analysis enables prompt decision-making and issue resolution.<br />
              Linked Kibana with Elasticsearch to visualize and analyze large datasets, improving data accessibility.<br />
              Adding knowledge base articles to empower support engineers and customers with relevant information.<br />
              Achieving a 95% customer satisfaction rating by effectively resolving 80% of issues through proficient user assistance.
            </p>
            <h1>Aycom Business Solution Pvt Ltd - New Delhi September 2021 – November 2022 </h1>
            <p id='head'>Technical Support Engineer</p>
            <p>
              Utilized Autotask, a Graphic User Interface, as a ticketing tool service to streamline the ticket management process.<br />
              Surpassed productivity and quality benchmarks set by the department, including metrics such as call volume, call duration, quality scores, and sales.<br />
              Escalated support desk tickets to Level 3 support in critical situations or after exhaustive efforts on a single ticket.<br />
              Implemented Logic Monitor server for monitoring instances, ensuring adherence to predefined logic. Any instance deviating from the logic triggers alerts on the dashboard.
            </p>
            <h1>Relied Consultancy Services Pvt Ltd - Noida June 2019 – May 2021</h1>
            <p id='head'>Technical Support Engineer</p>
            <p>
              Provided tier I and tier II troubleshooting support for software and hardware issues related to IPTV, VoIP, and IP-DSL over the telephone.<br />
              Resolved wired and wireless internet connection, email, browser, and home networking issues on both Mac OS and Windows platforms.<br />
              Maintained a high level of customer satisfaction in a dynamic call center setting.<br />
              Assumed responsibility for escalations and conducted advanced troubleshooting to achieve swift and effective resolutions.
            </p>
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default App;
