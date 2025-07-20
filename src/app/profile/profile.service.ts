import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'APPLY : Job Application Site with WhatsApp Integration',
      desc: 'Apply is a web page used for connecting job seekers to small job providers (like shops, hotels etc.) using Whatsapp.',
      livedemo: 'https://hkverma56.github.io/Apply/',
      githurl: 'https://github.com/HKVerma56/Apply',
      mediumlink: '',
      imgUrl: 'assets/images/Apply.png',
      tech: 'HTML, CSS, JavaScript, Whatsapp API'
    },

    {
      id: 2,
      title: 'ZOO-Management-FIle_Structure-Primary-Indexing',
      desc: 'This is a zoo management website front end. Designed using html and css. It has the php codes for back end. It uses Simple Indexing for data operation using File Structure.',
      livedemo: 'https://github.com/HKVerma56/ZOO-Management-FIle_Structure-Primary-Indexing',
      githurl: 'https://github.com/HKVerma56/ZOO-Management-FIle_Structure-Primary-Indexing',
      mediumlink: '',
      imgUrl: 'assets/images/Zoo.png',
      tech: 'HTML, CSS, JavaScript, Filestructure'
    },


    {
      id: 3,
      title: 'MongoUtility: C# Class Library for MongoDB Operations',
      desc: 'A reusable C# class library for basic and advanced MongoDB operations, including single/bulk insert, find, update, delete, and aggregate. Easily integrate this utility into any C# project.',
      livedemo: 'https://github.com/HKVerma56/Mongo',
      githurl: 'https://github.com/HKVerma56/Mongo',
      mediumlink: '',
      imgUrl: 'assets/images/Mongo.png',
      tech: '.net, C#, MongoDB, Class Library'
    },

    // {
    //   id: 4,
    //   title: 'Multiroom Chat Application in Node JS',
    //   desc: '',
    //   livedemo: 'https://chatapp-using-node.herokuapp.com/',
    //   githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
    //   mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
    //   imgUrl: 'assets/images/z23.png',
    //   tech: 'Node JS,Socket IO'
    // },


    // {
    //   id: 5,
    //   title: 'Integrate Medium Blogs on your React App',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
    //   githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
    //   mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
    //   imgUrl: 'assets/images/z4.png',
    //   tech: 'React JS'
    // },



    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON'
    // },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },



    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  about2 = `Software Developer with 2+ years of experience .
  Skilled software developer with experience in resolving critical production issues.
  Proficient in C#, Python, .NET, Angular, and cloud platforms.
  Strong track record in leading build cycles, team collaboration, and delivering solutions that enhance customer experiences.`

  about = "I am a dedicated and curious developer who thrives on solving real-world problems through clean, efficient code. I continuously seek to learn, adapt, and contribute meaningfully to every project I work on."
  resumeurl = "https://docs.google.com/document/d/12ypzF_TavmsK2drdS9UszutPVCiblhNk/edit?usp=sharing&ouid=109786583287629487414&rtpof=true&sd=true"

  skillsData: any = [
    {
      'id': '1',
      'skill': '.NET , C#',
      'progress': '65%'
    },
    {
      'id': '2',
      'skill': 'ANGULAR , TYPESCRIPT',
      'progress': '20%'
    },
    {
      'id': '3',
      'skill': 'DOCKER , KUBERNETES',
      'progress': '40%'
    },
    {
      'id': '4',
      'skill': 'SQL , MONOGODB , REDIS',
      'progress': '45%'
    },
    {
      'id': '5',
      'skill': 'HTML , CSS , JAVASCRIPT',
      'progress': '25%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '30%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    // {
    //   id: 4,
    //   company: 'Crest Data System',
    //   location: 'Ahmedabad',
    //   timeline: 'Aug 2021 to Present',
    //   role: 'Software Developer',
    //   work: 'Working as a full stack developer .Responsible for handling the UI in React and Managing the api calls in python Flask.'

    // },
    // {
    //   id: 3,
    //   company: 'Indianic Info Tech',
    //   location: 'Ahmedabad',
    //   timeline: 'Feb 2021 to June 2021',
    //   role: 'Software Developer',
    //   work: `Technologies : Angular , Node JS , MongoDB .
    //   Worked on the web application built in Angular for different business and Campaigns .
    //   Contributed on developing the admin dashboard with different charts and insights for the application.`
    // },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

    {
      id: 1,
      company: '42Gears Mobility Systems',
      location: 'BANGALORE',
      timeline: 'June 2023 - Present',
      role: 'SDE I',
      work: `Technologies : .Net, C# ,Kubernetes, Docker, SQL, Kafka, MongoDB .

Addressed high-priority issues to ensure production stability, resolving critical incidents swiftly for optimal system performance.

Led build cycles, reducing HF deployment time from weeks to days, significantly improving release efficiency and minimizing downtime.

Collaborated with QA and contributed to AI-driven features like script generation, enhancing product quality and user experience.
  `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'LinkedIn',
      description: '',
      img: 'assets/images/Linkedin.png',
      url: 'https://www.linkedin.com/in/harshit-kant-verma/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Github.png',
      url: 'https://github.com/HKVerma56'
    },
    {
      id:1,
      title: 'Leetcode',
      description: '',
      img: 'assets/images/Leetcode.png',
      url: 'https://leetcode.com/u/harshitkant56/'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
