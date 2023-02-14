const testData = [
  {
    question: "What is an agent's percept sequence?",
    answers: {
      A: "A map of the environment.",
      B: "A theoretical representation of an agent's behaviour.",
      C: "The complete history of everything an agent has perceived.",
      D: "The agent's program that controls its behaviour.",
    },
    correct_answer: "C",
    subject: "AI and Machine Learning",
  },
  {
    question:
      "What is the difference between an agent function and an agent program?",
    answers: {
      A: "The agent function is a concrete implementation of the agent program, whereas the agent program is a theoretical representation of an agent's behavior.",
      B: "The agent function is a theoretical representation that maps percept sequences to actions, whereas the agent program is a concrete implementation of the agent function.",
      C: "The agent function is a list of all the actions an agent can perform, whereas the agent program is a map of the environment.",
      D: "There is no difference between the agent function and agent program.",
    },
    correct_answer: "B",
    subject: "AI and Machine Learning",
  },
  {
    question: "What is a rational agent?",
    answers: {
      A: "An agent that does the right thing.",
      B: "An agent that relies on its prior knowledge of the environment.",
      C: "An agent that performs a set of predefined actions.",
      D: "An agent that blindly follows a performance measure.",
    },
    correct_answer: "A",
    subject: "AI and Machine Learning",
  },
  {
    question: "What is a performance measure?",
    answers: {
      A: "A measure of how efficient an agent's program is.",
      B: "A measure of how many actions an agent can perform.",
      C: "A measure of how desirable an agent's behavior is.",
      D: "A measure of how complex an agent's environment is.",
    },
    correct_answer: "C",
    subject: "AI and Machine Learning",
  },
  {
    question:
      "According to the notes, why is it better to specify the performance measure in terms of the environment state rather than the agent's behavior?",
    answers: {
      A: "Because it is easier to change the environment state than the agent's behavior.",
      B: "Because the agent's behavior is constantly changing, whereas the environment state is relatively stable.",
      C: "Because the agent's behavior is a theoretical representation, whereas the environment state is concrete.",
      D: "Because the performance measure is irrelevant to the agent's behavior.",
    },
    correct_answer: "B",
    subject: "AI and Machine Learning",
  },
  {
    question: "What factors determine what is rational for an agent?",
    answers: {
      A: "The performance measure, the environment state, the agent's prior knowledge, and the agent's percept sequence.",
      B: "The agent's behavior, the agent's program, the agent's percepts, and the agent's actuators.",
      C: "The agent's environment, the agent's sensors, the agent's learning algorithm, and the agent's memory.",
      D: "The agent's designer, the agent's environment, the agent's sensors, and the agent's actuators.",
    },
    correct_answer: "A",
    subject: "AI and Machine Learning",
  },
  {
    question: "What is a task environment in the context of AI agents?",
    answers: {
      A: "The physical computing device on which the agent runs.",
      B: "The set of internal rules that govern the agent's behavior.",
      C: "The problem that the agent is trying to solve.",
      D: "The set of possible actions the agent can take.",
    },
    correct_answer: "C",
    subject: "AI and Machine Learning",
  },
  {
    question: "What does the 'PEAS' description capture?",
    answers: {
      A: "The performance measure, the environment, and the agent's architecture.",
      B: "The performance measure, the environment, and the agent's actuators.",
      C: "The performance measure, the environment, and the agent's sensors.",
      D: "The performance measure, the environment, and the agent's program.",
    },
    correct_answer: "D",
    subject: "AI and Machine Learning",
  },
  {
    question:
      "What are the dimensions along which task environments can be categorized?",
    answers: {
      A: "Observable vs. non-observable, single-agent vs. multi-agent, and static vs. dynamic.",
      B: "Fully observable vs. partially observable, single-agent vs. multi-agent, deterministic vs. non-deterministic, and others.",
      C: "Known vs. unknown, discrete vs. continuous, and cooperative vs. competitive.",
      D: "Fully observable vs. partially observable, deterministic vs. non-deterministic, and episodic vs. sequential.",
    },
    correct_answer: "B",
    subject: "AI and Machine Learning",
  },
  {
    question: "What is the agent architecture?",
    answers: {
      A: "The physical computing device on which the agent runs.",
      B: "The set of internal rules that govern the agent's behavior.",
      C: "The problem that the agent is trying to solve.",
      D: "The physical computing device with sensors and actuators on which the agent runs.",
    },
    correct_answer: "D",
    subject: "AI and Machine Learning",
  },
  {
    question:
      "What are the basic kinds of agent programs identified in the textbook?",
    answers: {
      A: "Simple reflex agents, hierarchical agents, and rule-based agents.",
      B: "Simple reflex agents, model-based reflex agents, goal-based agents, and utility agents.",
      C: "Intelligent agents, rule-based agents, and hierarchical agents.",
      D: "Intelligent agents, model-based reflex agents, and goal-based agents.",
    },
    correct_answer: "B",
    subject: "AI and Machine Learning",
  },
  {
    question: "How does a simple reflex agent select actions?",
    answers: {
      A: "Based on the current percept, ignoring any prior percepts.",
      B: "By maintaining an internal representation of the parts of the world it can't perceive.",
      C: "By setting goals and selecting actions to achieve those goals.",
      D: "By calculating a utility function based on the current percept.",
    },
    correct_answer: "A",
    subject: "AI and Machine Learning",
  },
  {
    question:
      "What is the difference between a simple reflex agent and a model-based reflex agent?",
    answers: {
      A: "A simple reflex agent does not maintain an internal state, while a model-based reflex agent does.",
      B: "A simple reflex agent can handle partially observable environments, while a model-based reflex agent cannot.",
      C: "A simple reflex agent can handle dynamic environments, while a model-based reflex agent cannot.",
      D: "A simple reflex agent requires a transition model and a sensor model, while a model-based reflex agent only requires a sensor model.",
    },
    correct_answer: "A",
    subject: "AI and Machine Learning",
  },
];

module.exports = testData;
