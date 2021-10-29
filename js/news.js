const news = [
  {
    title: "Taskflow @ IXPUG 2021",
    image_src: "images/ixpug-logo.jpeg",
    image_url: "https://www.ixpug.org/ixpug-2021",
    content: `We are presenting <q><a href="https://www.ixpug.org/ixpug-2021">A General-Purpose Parallel and Heterogeneous Task Programming System Using Modern C++</a></q> in the 2021 Intel Extreme Performance Users Group (IXPUG).`,
    footer: "Last updated on 2021/10/15"
  },
  {
    title: "Taskflow @ CppCon 2021",
    image_src: "images/cppcon.png",
    image_url: "https://cppcon.org/",
    content: `We are presenting <q><a href="https://cppcon2021.sched.com/event/nvAk?iframe=no">cudaFlow: A Modern C++ Programming Model for GPU Task Graph Parallelism</a></q> in the 2021 C++ Conference (CppCon).`,
    footer: "Last updated on 2021/10/10"
  },
  {
    title: "Taskflow accepted by IEEE TPDS",
    image_src: "images/tpds.png",
    image_url: "https://tsung-wei-huang.github.io/papers/tpds21-taskflow.pdf",
    content: `Taskflow is accepted by IEEE Transactions on Parallel and Distributed Systems (TPDS)! Please check out the <a href="https://tsung-wei-huang.github.io/papers/tpds21-taskflow.pdf">paper</a>.`,
    footer: "Last updated on 2021/08/06"
  },
  {
    title: "Taskflow v3.2 released",
    image_src: "images/release.png",
    image_url: "https://taskflow.github.io/taskflow/Releases.html",
    content: `We have release Taskflow v3.2! This release introduces many GPU algorithms atop cudaFlow. Please check out the <a href="https://taskflow.github.io/taskflow/release-3-2-0.html">release notes</a>.`,
    footer: "Last updated on 2021/07/29"
  },
  {
    title: "Taskflow received NSF Grant",
    image_src: "images/nsf.png",
    image_url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2126672",
    content: `Thank you, NSF, for supporting Taskflow with a research Grant to advance VLSI CAD applications!`,
    footer: "Last updated on 2021/07/21"
  },
  {
    title: "Taskflow received NumFOCUS Grant",
    image_src: "images/NumFocus.png",
    image_url: "https://numfocus.org/sponsored-projects/affiliated-projects",
    content: `Thank you, NumFOCUS, for supporting Taskflow with Small Development Grant (2021-r1)! We will continue to promote open-source software for scientific research.`,
    footer: "Last updated on 2021/05/24"
  },
  {
    title: "Taskflow @ EuroPar 2021",
    image_src: "images/europar-2021-logo.png",
    image_url: "https://2021.euro-par.org/",
    content: `We are presenting our GPU tasking interface and algorithm at the 2021 Euro-Par Conference! Please check out our presentation, <q>Efficient GPU Computation using Task Graph Parallelism</q>, in the main program.`,
    footer: "Last updated on 2021/04/30"
  },
  {
    title: "Taskflow @ C++Now 2021",
    image_src: "images/cppnow-logo.png",
    image_url: "https://cppnow.org/announcements/2022/12/announcing-cpp-now-2021/",
    content: `We are presenting Taskflow at the C++Now Conference online on 5/7/21! Please check out our presentation, <q><a href="https://sched.co/hhlb">Taskflow: A Lightweight Heterogeneous Task Graph Programming System with Control Flow</a></q>.`,
    footer: "Last updated on 2021/04/14"
  },
  {
    title: "Taskflow v3.1 released",
    image_src: "images/release.png",
    image_url: "https://taskflow.github.io/taskflow/Releases.html",
    content: `We have release Taskflow v3.1! This release introduces a new syclFlow model to program SYCL kernels using task graph parallelism. Please check out the <a href="https://taskflow.github.io/taskflow/release-3-1-0.html">release notes</a>.`,
    footer: "Last updated on 2021/04/14"
  },
  {
    title: "Taskflow joins NumFocus",
    image_src: "images/NumFocus.png",
    image_url: "https://numfocus.org/sponsored-projects/affiliated-projects",
    content: `Taskflow joins NumFocus as an affiliated project! We will continue to promote open practices in research, data, and scientific computing with NumFocus.`,
    footer: "Last updated on 2021/02/07"
  },
  {
    title: "Taskflow v3.0 released",
    image_src: "images/release.png",
    image_url: "https://taskflow.github.io/taskflow/Releases.html",
    content: `We have release Taskflow v3.0! This new release largely enhanced the core functionalities and heterogeneous tasking! Please check out the <a href="https://taskflow.github.io/taskflow/release-3-0-0.html">release notes</a>.`,
    footer: "Last updated on 2021/01/01"
  },
  {
    title: "Taskflow @ ICPADS 2020",
    image_src: "images/icpads.png",
    image_url: "https://icpads2020.comp.polyu.edu.hk/",
    content: `Our work-stealing scheduling algorithm, <q>An Efficient Work-stealing Scheduler for Task Dependency Graph</q>, is accepted by 2020 IEEE International Conference on Parallel and Distributed Systems (ICPADS).`,
    footer: "Last updated on 2020/10/11"
  },
  {
    title: "Taskflow @ ICCAD 2020",
    image_src: "images/2020_ICCAD-logo.jpg",
    image_url: "https://iccad.com/",
    content: `We will share our experience of using Taskflow to parallelize CAD in the tutorial session <q><a href="https://iccad.com/event_details?id=305-12-D">GPU Acceleration in CAD: Opportunities and Challenges</a></q> at the 2020 IEEE/ACM International Conference on Computer-aided Design (ICCAD)!`,
    footer: "Last updated on 2020/10/01"
  },
  {
    title: "Taskflow @ WOSET 2020",
    image_src: "images/woset20.png",
    image_url: "https://woset-workshop.github.io/",
    content: `We are presenting Taskflow at the 2020 Workshop of Open-source EDA Technology (WOSET) co-located with the International Conference on Computer-aided Design (ICCAD)!`,
    footer: "Last updated on 2020/10/01"
  },
  {
    title: "Taskflow @ MUC++ 2020",
    image_src: "images/mucpp-meetup.jpeg",
    image_url: "https://www.meetup.com/MUCplusplus/events/273223910/",
    content: `We are presenting Taskflow to the C++ group at München, Germany. Please join the event, <q><a href="https://www.meetup.com/MUCplusplus/events/273223910/">Taskflow: A General-purpose Parallel and Heterogeneous Task Programming System</a></q>, on Thu, Oct 22, 7:00 PM GMT+2.`,
    footer: "Last updated on 2020/09/25"
  },
  {
    title: "Taskflow @ CIE/USA-GNYC 2020",
    image_src: "images/CIE-USA-GNYC-20.jpg",
    image_url: "https://www.cieusa-gnyc.org/new2019/2020-convention/",
    content: `We are presenting Taskflow at the CIE/USA-GNYU Annual Convention (virtual conference). Please join the event, <q><a href="https://www.cieusa-gnyc.org/new2019/2020-convention-tsung-wei-huang/">A General-purpose Parallel and Heterogeneous Task Programming System at Scale</a></q>, on Sunday, Oct 18, 2:20-3:50 PM EST.`,
    footer: "Last updated on 2020/09/21"
  },
  {
    title: "Taskflow @ Barcelona C++ 2020",
    image_src: "images/barcelona-cppmeetup.jpeg",
    image_url: "https://www.meetup.com/C-Programmer-Meetup/events/273434145/",
    content: `We are presenting Taskflow to the C++ group at Barcelona, Spain. Please join the event, <q><a href="https://www.meetup.com/C-Programmer-Meetup/events/273434145/">Taskflow: Parallel and Heterogeneous Task Programming in C++</a></q>, on Wed, Oct 14, 7:00 PM GMT+2.`,
    footer: "Last updated on 2020/09/20"
  },
  {
    title: "Taskflow @ Cpp-India 2020",
    image_src: "images/cpp-india-20.jpg",
    image_url: "https://www.cppindia.co.in/",
    content: `We are presenting Taskflow to the C++ group in India (Cpp-India). Please join the event, <q><a href="https://www.cppindia.co.in/TechTalk/2020/">Parallel Programming in Modern C++</a></q>, on Sat, Oct 10, 11:30 AM, IST.`,
    footer: "Last updated on 2020/09/21"
  },
  {
    title: "Taskflow won the Champion of 2020 HPEC Graph Challenge",
    image_src: "images/hpec-gc20.png",
    image_url: "http://graphchallenge.mit.edu/champions",
    content: `Our Taskflow-powered machine learning algorithm, <q><i>A Novel Inference Algorithm for Large Sparse Neural Network using Task Graph Parallelism,</i></q> is placed on the <a href="http://graphchallenge.mit.edu/champions">Champions</a> of the 2020 IEEE/MIT/Amazon HPEC Graph Challenge.`,
    footer: "Last updated on 2020/08/25"
  },
  {
    title: "Taskflow @ CppCon 2020",
    image_src: "images/cppcon.png",
    image_url: "https://cppcon.org/",
    content: `We are glad Taskflow is accepted by the official 2020 C++ conference as a regular presentation! The presentation title is <q><a href="https://sched.co/e79y">Taskflow: A General-purpose Parallel and Heterogeneous Task Programming System using Modern C++</a></q>.`,
    footer: "Last updated on 2020/08/12"
  },
  {
    title: "Taskflow @ VLSI-DAT 2020",
    image_src: "images/vlsidat-logo.png",
    image_url: "https://expo.itri.org.tw/2020VLSIDAT",
    content: `We gave an invited talk, <q><i>Programming Systems for Parallelizing VLSI CAD and Beyond</i></q>, at the special session of the 2020 VLSI-DAT symposium.`,
    footer: "Last updated on 2020/08/01"
  },
  {
    title: "Taskflow @ ORNL 2020",
    image_src: "images/ornl.png",
    image_url: "https://www.ornl.gov/group/ft",
    content: `We visited the Future Technology Group at Oak Ridge National Lab and presented Taskflow to ORNL researchers. The presentation slide is available <a href="https://tsung-wei-huang.github.io/talk/ornl-20.pdf">here</a>.`,
    footer: "Last updated on 2020/05/01"
  },
  {
    title: "Taskflow Won Software Award @ ACM MM 2019",
    image_src: "images/2019_ACMMM-logo.png",
    image_url: "https://2019.acmmm.org/",
    content: `Taskflow received the Second Prize in the <i>Open Source Software Competition</i> at the 2019 ACM Multimedia Conference! We are grateful for all the effort made by  users and contributors.`,
    footer: "Last updated on 2019/10/30"
  },
  {
    title: "Taskflow @ IPDPS 2019",
    image_src: "images/ipdps-2019-logo.jpg",
    image_url: "https://www.ipdps.org/ipdps2019/2019-advance-program.html",
    content: `We presented Taskflow at the 2019 IEEE International Parallel and Distributed Processing Symposium (Session 23: Programming Languages).`,
    footer: "Last updated on 2019/06/01"
  }
]

