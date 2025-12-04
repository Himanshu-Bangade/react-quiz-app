// src/data/questions.js
const QUESTIONS = [
  {
  id: "programming",
  title: "Programming",
  description: "Simple + Medium level programming questions.",
  questions: [
    {
      id: "p1",
      question: "Which data type is used to store text values?",
      options: ["String", "Number", "Boolean", "Array"],
      correctIndex: 0
    },
    {
      id: "p2",
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["//", "#", "/* */", "<!-- -->"],
      correctIndex: 0
    },
    {
      id: "p3",
      question: "Which of the following is NOT a primitive type in JavaScript?",
      options: ["String", "Number", "Boolean", "Object"],
      correctIndex: 3
    },
    {
      id: "p4",
      question: "Which keyword is used to declare a block-scoped variable?",
      options: ["var", "let", "int", "define"],
      correctIndex: 1
    },
    {
      id: "p5",
      question: "What will console.log(typeof true) return?",
      options: ["boolean", "string", "number", "object"],
      correctIndex: 0
    },
    {
      id: "p6",
      question: "Which operator compares both value and type?",
      options: ["==", "=", "===", "!="],
      correctIndex: 2
    },
    {
      id: "p7",
      question: "Which method adds an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "slice()"],
      correctIndex: 0
    },
    {
      id: "p8",
      question: "What does JSON stand for?",
      options: [
        "JavaScript Object Notation",
        "Java Standard Object Name",
        "Joined Script Output Node",
        "Java Serial Object Number"
      ],
      correctIndex: 0
    },
    {
      id: "p9",
      question: "Which array method creates a new array?",
      options: ["map()", "push()", "pop()", "splice()"],
      correctIndex: 0
    },
    {
      id: "p10",
      question: "What will 5 + '5' result in?",
      options: ["10", "55", "NaN", "Error"],
      correctIndex: 1
    }
  ]
},


  {
    id: "os",
    title: "Operating System",
    description: "OS principles & basic questions.",
    questions: [
      {
        id: "os1",
        question: "What is a mutex used for?",
        options: ["Counting processes","Mutual exclusion for shared resources","Memory allocation","Device driver"],
        correctIndex: 1
      },
      {
        id: "os2",
        question: "Which scheduling algorithm gives shortest average waiting time?",
        options: ["FCFS","Round Robin","Shortest Job First","Priority scheduling"],
        correctIndex: 2
      },
      {
        id: "os3",
        question: "What is virtual memory?",
        options: ["Memory on CPU","Use of disk to extend RAM","Cache memory","GPU memory"],
        correctIndex: 1
      },
      {
        id: "os4",
        question: "Which condition is required for a deadlock?",
        options: ["Mutual exclusion, Hold and wait, No preemption, Circular wait","Only mutual exclusion","Only circular wait","Preemption"],
        correctIndex: 0
      },
      {
        id: "os5",
        question: "A page fault occurs when:",
        options: ["CPU overheats","Process requests a page not in physical memory","Memory is full","Disk failure"],
        correctIndex: 1
      },
      {
        id: "os6",
        question: "What is context switching?",
        options: ["Switching user accounts","Switching CPU from one process to another","Switching disks","Changing filesystem"],
        correctIndex: 1
      },
      {
        id: "os7",
        question: "Which of these is NOT a type of CPU scheduler?",
        options: ["Long-term","Medium-term","Short-term","Hyper-term"],
        correctIndex: 3
      },
      {
        id: "os8",
        question: "Paging helps to:",
        options: ["Avoid external fragmentation","Eliminate internal fragmentation entirely","Speed up CPU","Replace disk"],
        correctIndex: 0
      },
      {
        id: "os9",
        question: "What is Thrashing?",
        options: ["Disk fault","Excessive paging causing low CPU utilization","Buffer overflow","High network usage"],
        correctIndex: 1
      },
      {
        id: "os10",
        question: "Which layer of OS handles networking?",
        options: ["File system layer","Network layer or network stack","Application layer","Presentation layer"],
        correctIndex: 1
      }
    ]
  },

  {
    id: "system-design",
    title: "System Design",
    description: "Basic system design & architecture concepts.",
    questions: [
      {
        id: "sd1",
        question: "What does CAP theorem state?",
        options: ["Consistency, Availability, Partition tolerance — can have all three","Consistency, Availability, Partition tolerance — a system can only choose two","Cost, Availability, Performance","Cache, API, Partition"],
        correctIndex: 1
      },
      {
        id: "sd2",
        question: "What is a CDN used for?",
        options: ["Sorting data","Distributing content close to users","Compressing images","Database replication"],
        correctIndex: 1
      },
      {
        id: "sd3",
        question: "What benefit does sharding provide?",
        options: ["Single point of failure","Horizontal scaling by splitting data","Faster CPU","Better encryption"],
        correctIndex: 1
      },
      {
        id: "sd4",
        question: "What is load balancing?",
        options: ["Balance books","Distribute traffic across servers","Compress payloads","Encrypt traffic"],
        correctIndex: 1
      },
      {
        id: "sd5",
        question: "Which storage suits high read, low write frequently served static content?",
        options: ["Relational DB","Object storage or CDN","In-memory cache only","Local disk only"],
        correctIndex: 1
      },
      {
        id: "sd6",
        question: "What is eventual consistency?",
        options: ["Immediate consistency","System will be consistent eventually after updates propagate","Never consistent","Only caching concept"],
        correctIndex: 1
      },
      {
        id: "sd7",
        question: "What is a message queue used for?",
        options: ["Synchronous function calls","Asynchronous communication between components","Database indexing","Frontend rendering"],
        correctIndex: 1
      },
      {
        id: "sd8",
        question: "What is hot-warm-cold storage?",
        options: ["Color coding for servers","Tiers of storage for frequency of access","Cache levels","Network types"],
        correctIndex: 1
      },
      {
        id: "sd9",
        question: "What does 'scale horizontally' mean?",
        options: ["Add more CPU cores","Add more servers/nodes","Use bigger disks","Upgrade RAM"],
        correctIndex: 1
      },
      {
        id: "sd10",
        question: "What is backpressure in distributed systems?",
        options: ["Pressure sensors","Flow control when consumers are slower than producers","Better compression","Faster networks"],
        correctIndex: 1
      }
    ]
  },

  {
    id: "dsa",
    title: "DSA",
    description: "Data structures and algorithms.",
    questions: [
      {
        id: "d1",
        question: "Which data structure uses FIFO order?",
        options: ["Stack","Queue","Tree","Graph"],
        correctIndex: 1
      },
      {
        id: "d2",
        question: "What is the best-case time complexity of binary search?",
        options: ["O(n)","O(log n)","O(n log n)","O(1)"],
        correctIndex: 3
      },
      {
        id: "d3",
        question: "Which structure is best for LIFO?",
        options: ["Queue","Stack","Heap","HashMap"],
        correctIndex: 1
      },
      {
        id: "d4",
        question: "Which algorithm finds shortest path on weighted graphs (no negative weights)?",
        options: ["DFS","Dijkstra","Kruskal","Prim"],
        correctIndex: 1
      },
      {
        id: "d5",
        question: "What is hashing used for?",
        options: ["Sorting","Fast lookup by key","Visualizing graph","Compression"],
        correctIndex: 1
      },
      {
        id: "d6",
        question: "Which traversal is used to get increasing order from BST?",
        options: ["Pre-order","Post-order","In-order","Level-order"],
        correctIndex: 2
      },
      {
        id: "d7",
        question: "What is amortized analysis?",
        options: ["Instant runtime","Average runtime over sequences of operations","Worst-case only","Memory analysis"],
        correctIndex: 1
      },
      {
        id: "d8",
        question: "What is a heap typically used for?",
        options: ["Priority queue","Hashing","Sorting arrays","Network routing"],
        correctIndex: 0
      },
      {
        id: "d9",
        question: "Which is stable sorting algorithm?",
        options: ["Selection Sort","QuickSort","Merge Sort","Heap Sort"],
        correctIndex: 2
      },
      {
        id: "d10",
        question: "Which structure would you use to implement BFS?",
        options: ["Stack","Queue","Priority Queue","Array"],
        correctIndex: 1
      }
    ]
  },

  {
    id: "networking",
    title: "Networking",
    description: "Basic networking concepts.",
    questions: [
      {
        id: "n1",
        question: "What does TCP provide that UDP doesn't?",
        options: ["Connectionless communication","Reliable delivery & ordering","Broadcasting","Lower overhead"],
        correctIndex: 1
      },
      {
        id: "n2",
        question: "What is the standard port for HTTPS?",
        options: ["80","21","443","25"],
        correctIndex: 2
      },
      {
        id: "n3",
        question: "What is DNS used for?",
        options: ["Encrypting packets","Mapping domain names to IPs","Routing protocols","File transfer"],
        correctIndex: 1
      },
      {
        id: "n4",
        question: "What is a subnet mask used for?",
        options: ["Encrypting a subnet","Dividing IP network into subnets","Change MAC addresses","Firewall rules"],
        correctIndex: 1
      },
      {
        id: "n5",
        question: "Which layer in OSI is responsible for routing?",
        options: ["Transport","Network","Data Link","Application"],
        correctIndex: 1
      },
      {
        id: "n6",
        question: "What is ARP used for?",
        options: ["Convert hostnames to IPs","Map IP to MAC addresses","Port scanning","Packet sniffing"],
        correctIndex: 1
      },
      {
        id: "n7",
        question: "What does NAT do?",
        options: ["Name resolution","Network address translation between private and public IPs","Increase bandwidth","Encrypt data"],
        correctIndex: 1
      },
      {
        id: "n8",
        question: "What is latency?",
        options: ["Bandwidth","Delay between request and response","Packet loss","Encryption strength"],
        correctIndex: 1
      },
      {
        id: "n9",
        question: "Which protocol is used to transfer files securely?",
        options: ["FTP","HTTP","SFTP","SMTP"],
        correctIndex: 2
      },
      {
        id: "n10",
        question: "What is a firewall primarily used for?",
        options: ["Power management","Security & access control between networks","Improving latency","Compressing data"],
        correctIndex: 1
      }
    ]
  }
];

export default QUESTIONS;
