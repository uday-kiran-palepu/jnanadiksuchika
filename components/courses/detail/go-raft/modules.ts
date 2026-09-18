export type CurriculumModule = {
  id: string;
  number: string;
  numberClass: string;
  title: string;
  weeksBadge: string;
  weeksBadgeClass: string;
  telugu: string;
  exercises: string;
  lab: string;
  labClass: string;
  defaultOpen?: boolean;
  syllabus?: string[];
  labBox?: { title: string; repo: string; description: string; command: string };
  tags?: string[];
};

export const curriculumModules: Omit<CurriculumModule, "body">[] = [
  {
    id: "m01",
    number: "01",
    numberClass: "bg-primary text-on-primary",
    title: "Foundations of Distributed Failure & RPC Primitives",
    weeksBadge: "WEEKS 1–2",
    weeksBadgeClass: "bg-primary/10 text-primary",
    telugu:
      "తెలుగు కాన్సెప్ట్: నెట్‌వర్క్ అనిశ్చితి, అన్‌రిలయబుల్ లింక్స్ మరియు ల్యామ్‌పోర్ట్ క్లాక్స్",
    exercises: "4 Code Exercises",
    lab: "1 Live Linux Lab",
    labClass: "text-primary font-semibold",
    defaultOpen: true,
    syllabus: [
      "The 8 Fallacies of Distributed Computing through real Indian telecom and cloud outages.",
      "Building a robust net/rpc framework with custom binary serializer and idempotent replay buffers.",
      "At-Least-Once vs. At-Most-Once semantics in the face of lost ACKs and duplicated socket packets.",
      "Time, Clocks & Ordering: Why wall clocks lie (NTP drift) and how Lamport Vector Clocks preserve causality.",
    ],
    labBox: {
      title: "Lab 01 Milestone",
      repo: "/lab-rpc-vector",
      description:
        "You will construct an RPC client-server daemon from raw sockets that withstands 30% simulated packet loss and detects out-of-order execution using custom Vector Clocks.",
      command: "go test -race -v ./lab1/...",
    },
  },
  {
    id: "m02",
    number: "02",
    numberClass: "bg-surface-container text-on-surface",
    title: "Consensus & The Core Raft Protocol",
    weeksBadge: "WEEKS 3–4",
    weeksBadgeClass: "bg-secondary-container/15 text-secondary",
    telugu:
      "తెలుగు కాన్సెప్ట్: నాయకత్వ ఎన్నిక (Leader Election), హార్ట్‌బీట్స్ మరియు స్ప్లిట్ ఓట్స్ పరిష్కారం",
    exercises: "6 Code Exercises",
    lab: "Election Lab",
    labClass: "text-secondary font-semibold",
    tags: [
      "Leader Disconnection Failover",
      "Term Monotonicity",
      "Pre-Vote Extension (RFC Enhancement)",
    ],
  },
  {
    id: "m03",
    number: "03",
    numberClass: "bg-surface-container text-on-surface",
    title: "Safety, Partition Tolerance & Jepsen Stress Testing",
    weeksBadge: "WEEKS 5–6",
    weeksBadgeClass: "bg-primary/10 text-primary",
    telugu:
      "తెలుగు కాన్సెప్ట్: నెట్‌వర్క్ పార్టిషన్ సమయంలో సేఫ్టీ రూల్స్ మరియు లాగ్ రోల్‌బ్యాక్స్",
    exercises: "5 Code Exercises",
    lab: "Jepsen Netem Lab",
    labClass: "text-primary font-semibold",
    tags: [
      "Quorum Loss Protection",
      "Linearizability Invariants",
      "Phantom Reads Eradication",
    ],
  },
  {
    id: "m04",
    number: "04",
    numberClass: "bg-surface-container text-on-surface",
    title: "Log Compaction, WAL, & Persistent Storage Engines",
    weeksBadge: "WEEKS 7–8",
    weeksBadgeClass: "bg-secondary-container/15 text-secondary",
    telugu:
      "తెలుగు కాన్సెప్ట్: స్నాప్‌షాటింగ్, రైట్-అహెడ్ లాగ్ (WAL) మరియు డిస్క్ పర్సిస్టెన్స్",
    exercises: "4 Code Exercises",
    lab: "Disk Crash Recovery Lab",
    labClass: "text-secondary font-semibold",
    tags: [
      "LSM-Tree Key-Value Storage",
      "Zero-Copy Snapshot Streaming",
      "SIGKILL Durability Tests",
    ],
  },
  {
    id: "m05",
    number: "05",
    numberClass: "bg-primary/20 text-primary",
    title: "Capstone Project & Live Architectural Defense",
    weeksBadge: "WEEKS 9–10",
    weeksBadgeClass: "bg-secondary-container text-on-tertiary",
    telugu:
      "తెలుగు కాన్సెప్ట్: లైవ్ క్లస్టర్ డిఫెన్స్ మరియు స్టాఫ్ ఇంజనీర్ల కోడ్ రివ్యూ",
    exercises: "Production Project",
    lab: "1:1 Defense Gate",
    labClass: "text-secondary font-semibold",
    tags: [
      "Passing Grade: 0 Linearizability Violations",
      "45-min Architectural Interrogation",
    ],
  },
];

export const moduleBodies: Record<string, string> = {
  m02:
    "Implement Raft's three-state finite state machine (Follower, Candidate, Leader). Write timer randomization routines, the RequestVote RPC, election terms, split vote handling, and heartbeat multiplexing over Go channels.",
  m03:
    "Implement Raft's AppendEntries consistency check, uncommitted entry rollbacks, matchIndex and nextIndex progression. Subject your cluster to dynamic network partitions using Linux traffic control (tc/netem).",
  m04:
    "Logs cannot grow infinitely. Master memory compaction via periodic state snapshotting, stream InstallSnapshot RPCs to lagging replicas, and implement persistent disk syncing (fsync) to survive hard node power-offs.",
  m05:
    "Deploy your finished 5-node distributed store on Big Switch bare-metal nodes. While our automated chaos generator injects packet drops and kills nodes at random, defend your latency percentiles and consensus safety live before our faculty panel.",
};

export const courseFaqs = [
  {
    q: "Can I follow this course if I primarily write Java or C++ instead of Go?",
    a:
      'Yes. While the code exercises and starter frameworks are written in Go 1.22+, the underlying concepts (RPC semantics, goroutines, mutex locks, and distributed state machines) map directly to C++ std::thread or Java virtual threads. We provide an accelerated 2-day "Go for Systems Engineers" transition guide before Module 01 starts.',
  },
  {
    q: "How are the Telugu mental models blended with English technical jargon?",
    a:
      "All code identifiers, variable names, compiler errors, and RFC specifications remain in pure standard English. Telugu is applied as an intuitive pedagogical amplifier to break down difficult abstract concepts—such as explaining distributed consensus through village council (పంచాయతీ) quorum analogies, or comparing vector clocks to sequential lineage records.",
  },
  {
    q: "What happens if my capstone project fails the Jepsen chaos testbench during defense?",
    a:
      "Failure during defense is normal in distributed systems! You will receive a detailed automated linearizability report from Porcupine pinpointing the exact cycle where safety broke. You are granted two free re-defense cycles within 60 days to fix your term checks or log rollbacks and present again without extra fees.",
  },
  {
    q: "How does the Free Diagnostic Tier work?",
    a:
      "Module 01 is open for complete self-guided access immediately. You get to build the net/rpc test suite, examine the lecture recordings, and run the starter testbench before finalizing tuition payment.",
  },
  {
    q: "What bare-metal hardware access is provided?",
    a:
      "Every enrolled station receives 40 dedicated lab hours on Big Switch bare-metal nodes situated in our Hyderabad datacenter. Each participant is provisioned 5 isolated Linux nodes connected via dedicated VLAN with sudo access to run kernel-level network emulation (tc/netem).",
  },
];
