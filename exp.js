import { initJsPsych } from "jspsych";
import surveyText from "@jspsych/plugin-survey-text";
import surveyMultiChoice from "@jspsych/plugin-survey-multi-choice";
import htmlButtonResponse from "@jspsych/plugin-html-button-response";

const style = document.createElement("style");
style.innerHTML = `
  .jspsych-content {
    max-width: 80vw !important;
    width: 80% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
`;
document.head.appendChild(style);

const jsPsych = initJsPsych({
  show_progress_bar: true,
  on_finish: function () {
    //jsPsych.data.displayData();
  },
});

const welcome = {
  type: htmlButtonResponse, // jsPsychHtmlButtonResponse
  stimulus: `
  <h2>Informed Consent Form</h2>

  <div style="text-align:left">
  <h3>Study Title:</h3>
  <p>Large Language Models as Psychometric Tools</p>

  <h3>Principal Investigator:</h3>
  <p>
    Dr. Zhuang Qiu<br>
    Assistant Professor, City University of Macau<br>
    Email: <a href="mailto:zhuangqiu@cityu.edu.mo">zhuangqiu@cityu.edu.mo</a>
  </p>

  <h3>Purpose of the Study:</h3>
  <p>
    You are invited to participate in a research study that explores whether advanced language models (such as BERT) can be used to analyze individuals' written responses to open-ended questions. This research helps develop new psychometric tools beyond traditional multiple-choice questionnaires.
  </p>

  <h3>What Will Happen in the Study:</h3>
  <ul>
    <li>Complete a one-time online survey (~55 minutes).</li>
    <li>Respond to a standardized closed-ended personality questionnaire.</li>
    <li>Answer six open-ended questions about your personality, values, or behavior.</li>
    <li>Provide basic demographic data (e.g., gender).</li>
    <li>Consent to your responses being analyzed and processed using AI-based language models.</li>
    <li>You will be compensated appropriately upon full completion of the survey.</li>
  </ul>

  <h3>Duration of Participation:</h3>
  <p>Your participation will involve a single session, lasting approximately 55 minutes in total.</p>

  <h3>Risks and Benefits:</h3>
  <ul>
    <li><strong>Risks:</strong> This study does not present more than minimal risk. All responses are anonymous and cannot be traced to your identity.</li>
    <li><strong>Benefits:</strong> While there is no direct personal benefit, your responses will contribute to advancing knowledge around AI and psychological assessment and may inform the development of new tools for use in education or organizational settings.</li>
  </ul>

  <h3>Confidentiality:</h3>
  <ul>
    <li>All your responses will be recorded anonymously.</li>
    <li>No personally identifiable information will be collected.</li>
    <li>Your MTurk ID will be stored separately from your survey data and used only for compensation purposes.</li>
    <li>Data will be securely stored in encrypted files accessible only to the research team.</li>
    <li>Any data used in presentations or publications will be completely de-identified.</li>
  </ul>

  <h3>Voluntary Participation:</h3>
  <p>Your participation is entirely voluntary. You may withdraw from the study at any time.</p>

  <h3>Contact Information:</h3>
  <p>
    If you have any questions about the research study, your rights, or how your data will be used, please contact:<br>
    Dr. Qiu<br>
    Email: <a href="mailto:zhuangqiu@cityu.edu.mo">zhuangqiu@cityu.edu.mo</a>
  </p>

  <h3>Consent Statement:</h3>
  <p>Please read the following and indicate your agreement below:</p>
  <ul>
    <li>I have read the information provided above.</li>
    <li>I understand the purpose and procedures of the study.</li>
    <li>I understand that participation is voluntary, and I may withdraw at any time.</li>
    <li>I understand that my responses are anonymous and confidential.</li>
    <li>I agree to participate in this research study.</li>   
  </ul>
  </div>`,
  choices: ["Agree and Continue"],
};

const demographics_1 = {
  type: surveyMultiChoice, // jsPsychSurveyMultiChoice
  preamble:
    "<h2>Demographic Information</h2>Please provide the following demographic information:",
  questions: [
    {
      prompt: "What is your gender?",
      options: ["Male", "Female", "Non-binary"],
      required: true,
      horizontal: false,
      name: "gender",
    },
  ],
};

const demographics_2 = {
  type: surveyText, // jsPsychSurveyText
  preamble:
    "<h2>Demographic Information</h2>Please provide the following demographic information:",
  questions: [
    {
      prompt: "What is your age?",
      name: "age",
      required: true,
      rows: 1,
      columns: 20,
    },
  ],
};

const surveyChoiceInstruction = {
  type: htmlButtonResponse, // jsPsychHtmlButtonResponse
  stimulus: `<h2>Instructions</h2>
  <div style="text-align:left">
    This survey consists of two sessions:<br>
    <b>Session 1:</b><br>
    You will answer a series of multiple-choice questions about how you typically think, feel, and behave in everyday situations. This part will take approximately 15 minutes to complete.<br>
    <b>Session 2:</b><br>
    In this session, you will read six short scenarios and answer open-ended questions about each one. These scenarios are designed to prompt reflection on your thoughts, feelings, and everyday behavior.<br>
    For each scenario, please respond in your own words, as fully and thoughtfully as possible.
    We encourage you to write at least 100 words for each response.<br>
    There are no right or wrong answers—we are interested in your honest perspective. Take your time, and feel free to describe real-life experiences if relevant.<br><br>
    Please do not use the browser's back button, as this will exit the survey and your progress may be lost.<br>
    Click “Next” to begin.<br>
  </div>
    `,
  choices: ["Next"],
};

const multiChoice = {
  type: surveyMultiChoice, // jsPsychSurveyMultiChoice
  preamble: `<h3>Session 1</h3><br>
    (about 15 minutes to complete)<br>
    <h4>Instruction: Please indicate how much you agree with each of the following statements.</h4>`,
  questions: [
    {
      prompt:
        "Before voting I thoroughly investigate the qualifications of all the candidates.",
      name: "SDS1",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am the life of the party.",
      name: "1E",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "It's not wise to tell your secrets.",
      name: "sd3m1",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I sympathize with others' feelings",
      name: "2A",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I get chores done right away.",
      name: "3C",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "I never hesitate to go out of my way to help someone in trouble.",
      name: "SDS2",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "People see me as a natural leader.",
      name: "sd3n1",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I like to get revenge on authorities.",
      name: "sd3p1",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I like to use clever manipulation to get my way.",
      name: "sd3m2",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I have frequent mood swings.",
      name: "4N",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "It is sometimes hard for me to go on with my work if I am not encouraged.",
      name: "SDS3",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I have never intensely disliked anyone.",
      name: "SDS4",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I hate being the center of attention.",
      name: "sd3n2",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I have a vivid imagination.",
      name: "5I",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "On occasion I have doubts about my ability to succeed in life.",
      name: "SDS5",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I avoid dangerous situations.",
      name: "sd3p2",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "Whatever it takes, you must get the important people on your side.",
      name: "sd3m3",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I sometimes feel resentful when I don't get my own way.",
      name: "SDS6",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "Many group activities tend to be dull without me.",
      name: "sd3n3",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I don't talk a lot.",
      name: "6E",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "Payback needs to be quick and nasty.",
      name: "sd3p3",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "Avoid direct conflict with others because they may be useful in the future.",
      name: "sd3m4",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am not interested in other people's problems.",
      name: "7A",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am always careful about my manner of dress.",
      name: "SDS7",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I often forget to put things back in their proper place.",
      name: "8C",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am relaxed most of the time.",
      name: "9N",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "My table manners at home are as good as when I eat out in a restaurant.",
      name: "SDS8",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am not interested in abstract ideas.",
      name: "10I",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I talk to a lot of different people at parties.",
      name: "11E",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "If I could get into a movie without paying and be sure I was not seen, I would probably do it.",
      name: "SDS9",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I feel others' emotions.",
      name: "12A",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I know that I am special because everyone keeps telling me so.",
      name: "sd3n4",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "On a few occasions, I have given up doing something because I thought too little of my ability.",
      name: "SDS10",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I like to gossip at times.",
      name: "SDS11",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I like order.",
      name: "13C",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I get upset easily.",
      name: "14N",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "People often say I'm out of control.",
      name: "sd3p4",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I have difficulty understanding abstract ideas.",
      name: "15I",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I Keep in the background.",
      name: "16E",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "It's wise to keep track of information that you can use against people later.",
      name: "sd3m5",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "There have been times when I felt like rebelling against people in authority even though I knew they were right.",
      name: "SDS12",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I like to get acquainted with important people.",
      name: "sd3n5",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am not really interested in others.",
      name: "17A",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "No matter who I'm talking to, I'm always a good listener.",
      name: "SDS13",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I make a mess of things.",
      name: "18C",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I seldom feel blue.",
      name: "19N",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: 'I can remember "playing sick" to get out of something.',
      name: "SDS14",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "There have been occasions when I took advantage of someone.",
      name: "SDS15",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I do not have a good imagination.",
      name: "20I",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "It's true that I can be mean to others.",
      name: "sd3p5",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I'm always willing to admit it when I make a mistake.",
      name: "SDS16",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I always try to practice what I preach.",
      name: "SDS17",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "You should wait for the right time to get back at people.",
      name: "sd3m6",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "I don't find it particularly difficult to get along with loud mouthed, obnoxious people.",
      name: "SDS18",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I sometimes try to get even rather than forgive and forget.",
      name: "SDS19",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I feel embarrassed if someone compliments me.",
      name: "sd3n6",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "People who mess with me always regret it.",
      name: "sd3p6",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "When I don't know something I don't at all mind admitting it.",
      name: "SDS20",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am always courteous, even to people who are disagreeable.",
      name: "SDS21",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "There are things you should hide from other people to preserve your reputation.",
      name: "sd3m7",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I have been compared to famous people.",
      name: "sd3n7",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I have never gotten into trouble with the law.",
      name: "sd3p7",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "Make sure your plans benefit yourself, not others.",
      name: "sd3m8",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "At times I have really insisted on having things my own way.",
      name: "SDS22",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "There have been occasions when I felt like smashing things.",
      name: "SDS23",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am an average person.",
      name: "sd3n8",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I enjoy having sex with people I hardly know.",
      name: "sd3p8",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "I would never think of letting someone else be punished for my wrong-doings.",
      name: "SDS24",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I never resent being asked to return a favor.",
      name: "SDS25",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "I have never been irked when people expressed ideas very different from my own.",
      name: "SDS26",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I never make a long trip without checking the safety of my car.",
      name: "SDS27",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "Most people can be manipulated.",
      name: "sd3m9",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "There have been times when I was quite jealous of the good fortune of others.",
      name: "SDS28",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I have almost never felt the urge to tell someone off.",
      name: "SDS29",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I am sometimes irritated by people who ask favors of me.",
      name: "SDS30",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I have never felt that I was punished without cause.",
      name: "SDS31",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "I sometimes think when people have a mistortune they only got what they deserved.",
      name: "SDS32",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt:
        "I have never deliberately said something that hurt someone's feelings.",
      name: "SDS33",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I insist on getting the respect I deserve.",
      name: "sd3n9",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
    {
      prompt: "I'll say anything to get what I want.",
      name: "sd3p9",
      options: [
        "Disagree Strongly",
        "Disagree",
        "Neither Agree nor Disagree",
        "Agree",
        "Agree Strongly",
      ],
      required: true,
      horizontal: false,
    },
  ],
};

const situation_intro = {
  type: htmlButtonResponse, // jsPsychHtmlButtonResponse
  stimulus: `<h3>Session 2</h3><br>
    (about 40 minutes to complete)<br>
    <h4>Instruction: </h4>
    <div style="text-align:left">
    Instruction: You will read six scenarios. After each scenario, answer the accompanying open-ended questions in your own words, using personal thoughts and real-life experiences when possible. Write a minimum of 100 words for each scenario. Do NOT use the browser's back button, as this will exit the survey and your progress may be lost.</div>
    `,
  choices: ["Next"],
};

// ======  ======
const machivQuestions = [
  {
    interpersonal_tactics: {
      machiv_clean_interpersonal_tactics_1: {
        subtrait: "Interpersonal Tactics",
        item: "Never tell anyone the real reason you did something unless it is useful to do so.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In everyday life, people sometimes choose not to share the true reasons behind their actions—perhaps to avoid conflict, protect relationships, or achieve a particular outcome. While this can be seen as pragmatic, it can also raise concerns about honesty and trust.<br><b>Questions:</b><br>Do you think it is justified to conceal the real reason behind your actions? Why?<br>How do you balance honesty with self-interest in situations that might provoke negative reactions?</div>`,
          id: "machiv_clean_interpersonal_tactics_1_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In a team discussion, you need to make a decision that is beneficial to the team. There are some complex reasons behind this decision. Some of the factors, if made public, may cause team members to hold different opinions, and may even have an impact on the cooperative atmosphere.<br><b>Questions:</b><br>Do you plan to conceal the real reasons to ensure the smooth progress of the decision-making process, or will you choose to be honest even if it may lead to disputes among colleagues? Why did you make such a choice?<br>How do you balance honesty with self-interest in situations that might provoke negative reactions?</div>`,
          id: "machiv_clean_interpersonal_tactics_1_specific",
        },
      },
      machiv_clean_interpersonal_tactics_2: {
        subtrait: "Interpersonal Tactics",
        item: "It is safest to assume that all people have a vicious streak and it will come out when they are given a chance.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People differ in how much they trust others. Some believe that most people are basically good, and that kindness and cooperation are natural. Others think that deep down, everyone has a darker side—and that if given the chance, people will act selfishly or even cruelly to get what they want.<br><b>Questions:</b><br>Do you believe that most people are basically good? Why?<br>To what extent do you trust people, or keep your guard up in daily life? Why?</div>`,
          id: "machiv_clean_interpersonal_tactics_2_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>A colleague of yours seems righteous and helpful. Some people say this colleague can be fully trusted, while others believe that everyone has a darker side that emerges under the right circumstances.<br><b>Question:</b><br>Do you think it's wiser to assume that everyone has a vicious streak, or to trust that this colleague will act benevolently unless proven otherwise? Why?<br>To what extent do you trust people or keep your guard up in daily life?</div>`,
          id: "machiv_clean_interpersonal_tactics_2_specific",
        },
      },
      machiv_clean_interpersonal_tactics_3: {
        subtrait: "Interpersonal Tactics",
        item: "It is wise to flatter important people.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In many professional or social situations, people may compliment or flatter those in positions of power—perhaps to build rapport, gain favor, or improve their own standing. While this can seem strategic, it also raises questions about sincerity and authenticity in relationships.<br><b>Questions:</b><br>Have you ever found yourself in a situation where flattering someone in power felt like the right thing to do? Why or why not? If so, what did you do, and how did it turn out?</div>`,
          id: "machiv_clean_interpersonal_tactics_3_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you are at a professional conference and have the opportunity to speak with a high-ranking executive in your industry. People may compliment or flatter those in positions of power—perhaps to build rapport, gain favor, or improve their own standing. While this can seem strategic, it also raises questions about sincerity and authenticity in relationships.<br><b>Questions:</b><br>Does flattering someone in power feel like the right thing to do? Why? What factors would you consider when deciding whether or not to offer compliments in this situation?</div>`,
          id: "machiv_clean_interpersonal_tactics_3_specific",
        },
      },
      machiv_clean_interpersonal_tactics_4: {
        subtrait: "Interpersonal Tactics",
        item: "It is possible to be good in all respects.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People often disagree about whether anyone can be truly good in all aspects of life. Some believe it's possible to live with complete honesty, fairness, and kindness. Others think that everyone, at some point, compromises their values or acts in self-interest.<br><b>Questions:</b><br>Do you think it's possible for someone to live with complete honesty, fairness, and kindness? Why or why not? How do you feel when someone appears morally upright but makes self-serving decisions behind the scenes?</div>`,
          id: "machiv_clean_interpersonal_tactics_4_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're working closely with someone who has a reputation for being kind, fair, and honest. Over time, you notice that they seem to maintain this image in public, but occasionally make decisions that benefit themselves at the expense of others—though nothing outright unethical. Some people say, “That's just how the world works.” Others feel disappointed or betrayed.<br><b>Questions:</b><br>How would you interpret that person's behavior? Do you think it's possible to be entirely good in real life, or do you believe everyone has to compromise sometimes?<br>How do you feel when someone appears morally upright but makes self-serving decisions behind the scenes?</div>`,
          id: "machiv_clean_interpersonal_tactics_4_specific",
        },
      },
      machiv_clean_interpersonal_tactics_5: {
        subtrait: "Interpersonal Tactics",
        item: "The best way to handle people is to tell them what they want to hear.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In many interactions, individuals may find themselves trying to navigate relationships by aligning their responses with what others want to hear. This approach can help avoid conflict, make others feel more comfortable, or strengthen bonds. However, it can also raise questions about the authenticity of such interactions and the potential consequences of not being fully honest in the process.<br><b>Questions:</b><br>Have you ever considered handling a situation by telling someone what they wanted to hear? Why or why not? If so, what was the context, what did you do, and how did it turn out?</div>`,
          id: "machiv_clean_interpersonal_tactics_5_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>During a team meeting, your supervisor asks for feedback on a project, but you know that providing honest, critical feedback might create tension. Instead, telling them what they want to hear can maintain harmony.<br><b>Questions:</b><br>How would you handle this situation, and what factors would influence the way you behave? Do you think it's more effective to tell people what they want to hear in a professional setting, or is it better to be direct and potentially cause friction?</div>`,
          id: "machiv_clean_interpersonal_tactics_5_specific",
        },
      },
      machiv_clean_interpersonal_tactics_6: {
        subtrait: "Interpersonal Tactics",
        item: "Anyone who completely trusts anyone else is asking for trouble.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Trust plays a significant role in both personal and professional relationships. Some believe that certain people can be completely trusted, and that placing full trust helps strengthen bonds. Others argue that doing so can leave you vulnerable to disappointment or betrayal, since no one can be fully known or relied upon.<br><b>Questions:</b><br>Is there anyone you completely trust, or do you think that trusting someone fully is asking for trouble? Why? Would you describe yourself as more of a trusting or a suspicious person? Why?</div>`,
          id: "machiv_clean_interpersonal_tactics_6_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you are dealing with a difficult situation and considering whether to confide in a friend you've known for a long time. You believe they may be able to offer helpful advice, but doing so would require you to share sensitive details that could be used against you if they were shared with others.<br><b>Questions:</b><br>Would you share the full details with this person? What factors would influence your decision? Would you describe yourself as more of a trusting or a suspicious person? Why?</div>`,
          id: "machiv_clean_interpersonal_tactics_6_specific",
        },
      },
    },
    morality: {
      machiv_clean_morality_7: {
        subtrait: "Morality",
        item: "All in all, it is better to be humble and honest than important and dishonest.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In many situations, people must navigate a balance between humility and ambition, and between honesty and self-promotion. Some prioritize personal success and recognition, even if it means presenting themselves in ways that aren't entirely truthful. Others choose to maintain humility and honesty, even if it costs them opportunities for advancement.<br><b>Questions:</b><br>Have you ever found yourself in a situation where you had to choose between being honest and being dishonest to achieve your ambition? Why or why not? If so, what did you do, and how did it turn out?</div>`,
          id: "machiv_clean_morality_7_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you are presenting at a professional event where you are one of several speakers. You have the option to emphasize your achievements and downplay any challenges you faced in order to enhance your image. Alternatively, you could also choose to provide a more modest and transparent account of your experience, acknowledging both successes and setbacks.<br><b>Questions:</b><br>How would you react in this situation, and why? What factors would influence your decision?</div>`,
          id: "machiv_clean_morality_7_specific",
        },
      },
      machiv_clean_morality_8: {
        subtrait: "Morality",
        item: "When you ask someone to do something for you, it is best to give the real reasons for wanting it rather than giving reasons which might carry more weight.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>When making a request of others, individuals often face the choice of being completely transparent about their reasons or providing justifications that might seem more convincing or persuasive. Some may believe that giving the real reasons for their request fosters honesty and strengthens relationships, while others may feel that providing more compelling reasons could increase the likelihood of the request being fulfilled.<br><b>Questions:</b><br>Have you ever faced a situation where you had to decide between giving your real reasons for a request and offering reasons that might be more persuasive? What did you choose to do, and why?</div>`,
          id: "machiv_clean_morality_8_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you need a colleague to assist you with a task at work. The real reason for your request is that you are overwhelmed with other responsibilities and need help. However, you know that emphasizing the urgency or importance of the task might make it seem more persuasive than it actually is. You must decide whether to be fully honest or to frame your request in a way that makes it more persuasive.<br><b>Questions:</b><br>What would you do in this situation, and why? How would you feel about your action?</div>`,
          id: "machiv_clean_morality_8_specific",
        },
      },
    },
    views_of_human_nature: {
      machiv_clean_views_of_human_nature_9: {
        subtrait: "Views of human nature",
        item: "Generally speaking, men won't work hard unless they're forced to do so.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People often differ in their views about what motivates others to work hard. Some believe that people are naturally self-driven and will put in effort because of pride, passion, or internal goals. Others think that people need external pressure—like deadlines, monitoring, or consequences—to stay motivated and productive.<br><b>Questions:</b><br>In your experience, what motivates people to work hard? Do you think most people are self-motivated, or do they need external pressure to perform well? Why?</div>`,
          id: "machiv_clean_views_of_human_nature_9_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're leading a team on a long-term project, and there's no fixed deadline and no serious consequences for delays. You're debating whether to assign team members a timeline and closely monitor their work, or to give them the freedom to work independently and trust that they'll stay motivated.<br><b>Questions:</b><br>What would you do in this situation, and why?<br>Do you think postponing tasks reflects a common tendency in people, or is it more about individual motivation?</div>`,
          id: "machiv_clean_views_of_human_nature_9_specific",
        },
      },
      machiv_clean_views_of_human_nature_10: {
        subtrait: "Views of human nature",
        item: "It is hard to get ahead without cutting corners here and there.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In many professional or personal situations, people may feel pressure to succeed quickly or stay ahead in a competitive environment. Some believe that cutting corners or using less-than-ideal practices is sometimes necessary to make progress, while others argue that success should always come through ethical behavior and adherence to standards.<br><b>Questions:</b><br>Do you think it's ever justifiable to cut corners in order to get ahead? Why or why not? Do you prefer to stay ahead by cutting corners, or do you prefer to stick to ethical behavior? Why?</div>`,
          id: "machiv_clean_views_of_human_nature_10_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>At your job, you notice a colleague who seems to thrive by skirting around certain rules to achieve results faster. They claim that cutting corners is just part of the game and that everyone does it.<br><b>Questions:</b><br>Do you think that cutting corners is essential to getting ahead? Why? Do you prefer to stay ahead by cutting corners, or do you prefer to stick to ethical behavior? Why?</div>`,
          id: "machiv_clean_views_of_human_nature_10_specific",
        },
      },
      machiv_clean_views_of_human_nature_11: {
        subtrait: "Views of human nature",
        item: "Most people are basically good and kind.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People differ in how they view human nature. Some believe that most people are fundamentally good and kind, while others believe that people are primarily self-interested and will take advantage of others if given the chance.<br><b>Questions:</b><br>Do you believe most people are good and kind, or do you tend to be more cautious or skeptical? Why? Has your view changed over time based on your personal experiences?</div>`,
          id: "machiv_clean_views_of_human_nature_11_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you've lost your wallet in a public place. It contains cash, your personal ID, and contact information. When you realize it's missing, you start to wonder: will someone find it and return it to you?<br><b>Questions:</b><br>How likely do you think it is that someone would return your wallet? Why?<br>Do you believe most people are good and kind, or do you tend to be more cautious or skeptical?</div>`,
          id: "machiv_clean_views_of_human_nature_11_specific",
        },
      },
      machiv_clean_views_of_human_nature_12: {
        subtrait: "Views of human nature",
        item: "Most people who get ahead in the world lead clean, moral lives.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People have different views about how success is achieved in the world. Some believe that those who rise to the top usually do so by working hard and acting with integrity. Others think that getting ahead often involves bending the rules, cutting corners, or acting in ways that aren't entirely moral.<br><b>Questions:</b><br>In your opinion, do most successful people achieve their status by leading honest and moral lives, or by doing whatever it takes to succeed? Why? Which would you choose: leading a moral life or doing whatever it takes to succeed?</div>`,
          id: "machiv_clean_views_of_human_nature_12_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine a coworker you know recently got a big promotion. Some colleagues say it's because of their hard work and strong ethics. Others believe the person got ahead by playing office politics—flattering supervisors, taking credit for others' work, and strategically avoiding blame. You've had a few neutral interactions with this person, so you're not entirely sure what to think.<br><b>Questions:</b><br>What is your first instinct about how they got ahead? Why?<br>When you see someone succeed, do you tend to assume it's due to merit or strategy?</div>`,
          id: "machiv_clean_views_of_human_nature_12_specific",
        },
      },
      machiv_clean_views_of_human_nature_13: {
        subtrait: "Views of human nature",
        item: "Most men are brave.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People differ in how they view human nature. Some believe that most people are brave—they stand up for what's right or show courage in difficult situations. Others believe that people generally avoid taking risks or stay silent when things get hard.<br><b>Questions:</b><br>Do you think most people are brave, or do they tend to avoid taking risks? When you think of bravery in everyday life, how often do you actually see it, and in what situations?</div>`,
          id: "machiv_clean_views_of_human_nature_13_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're in a public place—like a store or on the street—and someone is clearly being treated unfairly or harassed. A group of people nearby starts to watch, and you wonder whether anyone will actually step in to help.<br><b>Questions:</b><br>In that kind of situation, would you expect someone to step in and do something? Why or why not?<br>How often do you think people are willing to take risks to help others in public situations?</div>`,
          id: "machiv_clean_views_of_human_nature_13_specific",
        },
      },
      machiv_clean_views_of_human_nature_14: {
        subtrait: "Views of human nature",
        item: "Most people forget more easily the death of their parents than the loss of their property.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People differ in what they believe truly matters in life. Some think that relationships—like the bond with one's parents—are the most meaningful, and that emotional losses are the hardest to bear. Others believe that material losses, such as money or property, can cause deeper or longer-lasting pain, especially when they affect a person's stability or future.<br><b>Questions:</b><br>Which is harder for you to lose: a loved one or something of great material value? Why? Do you think people are more emotionally attached to people, or to what they own?</div>`,
          id: "machiv_clean_views_of_human_nature_14_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine two people you know recently experienced a loss. One lost a large amount of money or valuable property. The other lost a parent they were close to. A few months later, you notice that the person who lost their parent seems to be doing okay, while the one who lost their property still seems angry, anxious, or resentful. People around you start debating which kind of loss has a deeper impact.<br><b>Questions:</b><br>Do you think people are more emotionally attached to people, or to what they own? Which is harder for you to lose: a loved one or something of great material value? Why?</div>`,
          id: "machiv_clean_views_of_human_nature_14_specific",
        },
      },
    },
  },
];

const npiQuestions = [
  {
    factor1_grandioseexhibitionism: {
      npi_clean_factor1_grandioseexhibitionism_1: {
        subtrait: "Factor1_GrandioseExhibitionism",
        item: "I know that I am good because everybody keeps telling me so.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine that throughout your life, you have received compliments from various people around you family, friends, and colleagues telling you how good, talented, or capable you are.<br><b>Questions:</b><br>Is this the case in your life? How do you usually feel and respond when you receive compliments? Why?</div>`,
          id: "npi_clean_factor1_grandioseexhibitionism_1_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're at a team meeting, and your teammates compliment you on a recent project, praising your ideas and the impact your contribution has had.<br><b>Questions:</b><br>How often do you receive compliments like this? How do you usually feel and respond when you receive compliments? Why?</div>`,
          id: "npi_clean_factor1_grandioseexhibitionism_1_specific",
        },
      },
      npi_clean_factor1_grandioseexhibitionism_2: {
        subtrait: "Factor1_GrandioseExhibitionism",
        item: "I like to be the center of attention.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you are attending a social gathering such as a party, a wedding, or a networking event where you don't know everyone in the room. Some people take the spotlight naturally, telling stories, cracking jokes, or drawing people into conversation, while others stay more in the background, participating quietly or speaking only when spoken to.<br><b>Questions:</b><br>In such a setting, how do you usually behave? Do you find yourself enjoying being the center of attention in these situations, or do you prefer to stay in the background? Why?</div>`,
          id: "npi_clean_factor1_grandioseexhibitionism_2_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're attending a friend's birthday dinner at a restaurant. Partway through the evening, the host suggests that everyone go around the table and share a funny or memorable story involving the birthday person. Some people attract others' attention by sharing vivid anecdotes, while some stay quiet or keep their stories short.<br><b>Questions:</b><br>Assume that you have many vivid memories of these stories, and you know how to tell the story well. Would you feel eager or hesitant to share your story? If you did share, would you try to keep it brief or make it especially entertaining? How do you usually feel when you become the center of attention in situations like this?</div>`,
          id: "npi_clean_factor1_grandioseexhibitionism_2_specific",
        },
      },
      npi_clean_factor1_grandioseexhibitionism_3: {
        subtrait: "Factor1_GrandioseExhibitionism",
        item: "I am apt to show off if I get the chance.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People differ in how they present themselves to others. Some enjoy drawing attention to their accomplishments, skills, or experiences, while others prefer to stay more modest, even when they have impressive things to share.<br><b>Questions:</b><br>Do you feel comfortable showing off your successes or talents when the opportunity arises? Why or why not? How important is it to you that others notice your achievements?</div>`,
          id: "npi_clean_factor1_grandioseexhibitionism_3_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're at a social event, and someone nearby is talking about a skill you happen to excel at like a language you speak fluently, a musical instrument you play, or a trip you've taken. The people in the group seem interested and impressed by the topic.<br><b>Questions:</b><br>How would you go about joining the conversation would you try to make your experience stand out, or would you keep it low-key? How important is it to you that others notice your achievements?</div>`,
          id: "npi_clean_factor1_grandioseexhibitionism_3_specific",
        },
      },
    },
    factor2_leadershipauthority: {
      npi_clean_factor2_leadershipauthority_4: {
        subtrait: "Factor2_LeadershipAuthority",
        item: "I like having authority over people.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In many areas of life work, school, or social settings people find themselves in different roles. Some naturally prefer to lead, take charge, or make decisions, while others are more comfortable contributing as part of a team and following instructions from others.<br><b>Questions:</b><br>In general, do you prefer to be the one giving directions or the one receiving them? Why? How do you feel when someone else is in charge of a group or project you're part of?</div>`,
          id: "npi_clean_factor2_leadershipauthority_4_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you've joined a volunteer group working on a community project. The group needs someone to take the lead in organizing tasks and coordinating team members. No one has stepped up yet, and the team is looking around to see who might take charge.<br><b>Questions:</b><br>In a situation like this, would you feel motivated to take on the leadership role? Why or why not? If someone else volunteers to lead, how would you feel about following their direction?</div>`,
          id: "npi_clean_factor2_leadershipauthority_4_specific",
        },
      },
      npi_clean_factor2_leadershipauthority_5: {
        subtrait: "Factor2_LeadershipAuthority",
        item: "I am going to be a great person.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People hold different beliefs about their future. Some feel confident that they're destined for something great, while others have hopes but see success as something to work toward with uncertainty.<br><b>Questions:</b><br>Do you believe you are on a path to becoming a great person? Why or why not? How do you define success for yourself, and how confident are you that you'll achieve it?</div>`,
          id: "npi_clean_factor2_leadershipauthority_5_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're at a career development event, and the speaker asks everyone to write down where they see themselves 10 years from now. Some people write confidently about becoming leaders or doing something extraordinary. Others express hopes for steady progress or reaching meaningful personal goals.<br><b>Questions:</b><br>Do you believe you are on a path to becoming a great person? Why or why not? How do you define success for yourself, and how confident are you that you'll achieve it?</div>`,
          id: "npi_clean_factor2_leadershipauthority_5_specific",
        },
      },
    },
    factor3_entitlementexploitativeness: {
      npi_clean_factor3_entitlementexploitativeness_6: {
        subtrait: "Factor3_EntitlementExploitativeness",
        item: "I insist upon getting the respect that is due me.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In social or professional settings, people often have different expectations about how others should treat them. Some individuals believe it's important to actively assert themselves and ensure they're treated with the respect they deserve, while others feel that respect should be earned gradually through actions and character.<br><b>Questions:</b><br>Do you think it's important to make sure others respect you, or do you feel that respect should come naturally over time? Why? How do you usually respond when you feel you're not being treated with the level of respect you deserve?</div>`,
          id: "npi_clean_factor3_entitlementexploitativeness_6_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you've been working hard on a group project at work. During a team meeting, you share your ideas, but some team members seem to dismiss your suggestions. The group later adopts someone else's idea without acknowledging your contribution.<br><b>Questions:</b><br>Would you feel the need to assert your contribution and demand recognition, or would you let it go? Why?<br>In general, how do you deal with situations where you feel your input or effort isn't respected?</div>`,
          id: "npi_clean_factor3_entitlementexploitativeness_6_specific",
        },
      },
      npi_clean_factor3_entitlementexploitativeness_7: {
        subtrait: "Factor3_EntitlementExploitativeness",
        item: "I expect a great deal from other people.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In relationships whether with friends, colleagues, or partners people differ in how they balance what they expect from others and what they are willing to do for others. Some people believe others should meet high standards or give them a lot of attention or support. Others focus more on what they can offer or contribute to those around them.<br><b>Questions:</b><br>In your relationships, do you tend to focus on what others can offer, or do you focus more on what you can give? Why? How do you feel when someone helps others or does things for others without expecting anything in return?</div>`,
          id: "npi_clean_factor3_entitlementexploitativeness_7_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you've spent time helping a colleague giving advice, offering support, and checking in regularly. Now, you're the one going through a difficult time.<br><b>Questions:</b><br>Do you expect that colleague to offer the same level of support in return? Why or why not?<br>How do you feel when someone helps others or does things for others without expecting anything in return?</div>`,
          id: "npi_clean_factor3_entitlementexploitativeness_7_specific",
        },
      },
    },
    factor0_na: {
      npi_clean_factor0_na_8: {
        subtrait: "Factor0_NA",
        item: "I think I am a special person.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People often think about how they compare to others in various areas of life such as talents, personality, or general worth. Some people see themselves as exceptional in certain ways, while others view themselves as about the same as most people.<br><b>Questions:</b><br>In your own view, how do you compare to most people in terms of your abilities, personality, or overall value? Do you consider yourself to be a particularly special person? Why or why not?</div>`,
          id: "npi_clean_factor0_na_8_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're being introduced to a new group of colleagues. As everyone gets to know each other, people casually talk about their backgrounds, accomplishments, or interests. You start to form an understanding about each other's talents, personality, or general worth. You also have your notable achievements and unique experiences.<br><b>Questions:</b><br>When meeting new people, do you usually think of yourself as someone who is different or special compared to them? If others treat you as just an average person, how does that make you feel?</div>`,
          id: "npi_clean_factor0_na_8_specific",
        },
      },
      npi_clean_factor0_na_9: {
        subtrait: "Factor0_NA",
        item: "Everybody likes to hear my stories.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In conversations with others whether among friends, colleagues, or acquaintances people often share stories from their lives. Some believe others genuinely enjoy hearing their stories, while others feel that people listen politely but may not be particularly excited or uninterested either way.<br><b>Questions:</b><br>When you share stories about your experiences in social settings, how do people usually respond? Do you believe others enjoy hearing what you have to say, or do you think their reactions are more neutral? Why?</div>`,
          id: "npi_clean_factor0_na_9_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're out with a small group of friends, and a topic comes up that reminds you of something funny or interesting that happened to you. You decide to share the story. As you're speaking, people are listening quietly some nodding and some chuckling.<br><b>Questions:</b><br>Do you believe people enjoy hearing what you have to say, or do you think their reactions are more neutral? Why? When you share stories about your experiences in social settings, how do people usually respond?</div>`,
          id: "npi_clean_factor0_na_9_specific",
        },
      },
      npi_clean_factor0_na_10: {
        subtrait: "Factor0_NA",
        item: "I am more capable than other people.",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In both personal and professional life, people often compare their abilities with others. Some see themselves as more capable than people around them, while others believe there is a lot they can learn from others.<br><b>Questions:</b><br>How do you usually think about your abilities compared to others in your field or social circle? Do you often find yourself learning from others, or do you generally feel confident relying on your own skills and judgment? Why?</div>`,
          id: "npi_clean_factor0_na_10_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're solving a problem with a few colleagues. One of them suggests an approach that's different from what you were planning. You believe your solution will work well, but theirs sounds reasonable too.<br><b>Questions:</b><br>In moments like this, do you see yourself as more capable than others, or do you actively consider what you might learn from their perspective? How important is it to you to show that your way is the best?</div>`,
          id: "npi_clean_factor0_na_10_specific",
        },
      },
    },
  },
];

const srpQuestions = [
  {
    factor1_interpersonalmanipulation: {
      srp_clean_factor1_interpersonalmanipulation_1: {
        subtrait: "Factor1_InterpersonalManipulation",
        item: "Pretend to be someone else to get something",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>In some situations, people may pretend to be someone else or adopt a false persona in order to gain an advantage—whether in social settings, job interviews, or negotiations. This can influence how others see them, often without others realizing the deception.<br><b>Questions:</b><br>Have you ever pretended to be someone else or presented yourself differently to gain something? Why or why not? If yes, what happened, and how did you feel about it afterward?</div>`,
          id: "srp_clean_factor1_interpersonalmanipulation_1_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>You're at a social event and hear someone talking about an exciting opportunity that could lead to a rewarding collaboration. You're interested in joining, but you feel like you might not stand out as much since you don't have the exact background they're looking for. You think about adjusting how you present yourself, perhaps highlighting certain experiences or skills that are a bit stretched from the truth.<br><b>Questions:</b> Would you take this approach to make yourself seem more appealing, or would you choose to stay fully honest, even if it means missing out on the opportunity? Why? Have you ever pretended to be someone else or presented yourself differently to gain something? If yes, what happened?</div>`,
          id: "srp_clean_factor1_interpersonalmanipulation_1_specific",
        },
      },
      srp_clean_factor1_interpersonalmanipulation_2: {
        subtrait: "Factor1_InterpersonalManipulation",
        item: "People are naive/people are suckers, easy to fool",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People have different views about human nature. Some believe that most people are thoughtful and cautious, while others think many people are easily misled or manipulated. These beliefs can influence how we choose to interact with others—whether we feel the need to be honest or whether we feel justified in using certain strategies to get what we want.<br><b>Question:</b><br>In your opinion, are people generally easy or difficult to fool? Why? How does this belief influence the way you interact with others?</div>`,
          id: "srp_clean_factor1_interpersonalmanipulation_2_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're working with a colleague on a group project. You notice that this colleague tends to believe everything they're told without questioning it. They don't check facts, take suggestions at face value, and rarely push back.<br><b>Questions:</b><br>Do you see this colleague as trusting, naive, or something else? Why?<br>Would you feel tempted to give this colleague more tedious tasks or withhold certain information? Why or why not?</div>`,
          id: "srp_clean_factor1_interpersonalmanipulation_2_specific",
        },
      },
      srp_clean_factor1_interpersonalmanipulation_3: {
        subtrait: "Factor1_InterpersonalManipulation",
        item: "Get things by saying what is expected to be heard/get by tell people what they want",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Some people choose to speak honestly, even if their message is difficult or unpopular. Others prefer to say what people want to hear—whether to avoid conflict, gain approval, or influence someone's behavior. These choices often reflect how we balance authenticity and social effectiveness.<br><b>Questions:</b><br>How do you usually handle situations where saying the “right thing” could help you get something you want?<br>Have you ever chosen to say what someone wanted to hear, even if it wasn't exactly how you felt? Why?</div>`,
          id: "srp_clean_factor1_interpersonalmanipulation_3_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're in a meeting or an interview where you really want a specific outcome—like a job, a favor, or an opportunity. You realize that the person in charge has strong opinions and that you could improve your chances by agreeing with them or telling them exactly what they want to hear, even if it's not entirely what you believe.<br><b>Questions:</b><br>What would you be most likely to do in that situation, and why?<br>How do you feel about saying things you don't fully believe in order to achieve a goal?</div>`,
          id: "srp_clean_factor1_interpersonalmanipulation_3_specific",
        },
      },
    },
    factor1_callousaffect: {
      srp_clean_factor1_callousaffect_4: {
        subtrait: "Factor1_CallousAffect",
        item: "I like watching fights/like to see fist fights",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People differ in how they react to conflict or violence. Some feel discomfort or distress when witnessing a physical fight, while others may find it exciting or entertaining. These reactions can be shaped by personal experiences, emotional sensitivity, or beliefs about strength and justice.<br><b>Questions:</b><br>How do you typically feel when you see a physical fight— in real life, online, or in movies? Do you tend to enjoy or dislike conflict and violence? Why?</div>`,
          id: "srp_clean_factor1_callousaffect_4_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're walking through a school hallway or a public place and suddenly see two people getting into a fist fight. A crowd begins to gather.<br><b>Questions:</b><br>What would you be most likely to do in that moment, and why?<br>How do you think you'd feel while watching this? Would it be upsetting, exciting, or something else?</div>`,
          id: "srp_clean_factor1_callousaffect_4_specific",
        },
      },
      srp_clean_factor1_callousaffect_5: {
        subtrait: "Factor1_CallousAffect",
        item: "I am attracted to violent sports/movies",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People vary in the kinds of entertainment they enjoy. Some are drawn to action-packed sports or movies that feature intense competition, violence, or combat. Others prefer entertainment that's more peaceful or emotionally nuanced. These preferences may reflect how we process emotions, excitement, or conflict.<br><b>Questions:</b><br>In daily life, do you enjoy watching intense shows like boxing, combat sports, or bullfighting? If so, what do you find appealing about them? If not, why do you tend to avoid them? How do you feel about watching violent movies or shows when you are with friends?</div>`,
          id: "srp_clean_factor1_callousaffect_5_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>You're chatting with friends about popular TV shows, and someone brings up a highly anticipated boxing match or combat event. The group starts sharing opinions. Some people say they love these shows—they enjoy the tension, the adrenaline, and the thrill of watching people push their limits. Others say they find them too violent or unsettling, or they simply prefer more thoughtful, peaceful kinds of entertainment.<br><b>Question:</b><br>In daily life, do you enjoy watching intense shows like boxing, combat sports, or bullfighting? If so, what do you find appealing about them? If not, why do you tend to avoid them? How do you feel about watching violent movies or shows when you are with friends?</div>`,
          id: "srp_clean_factor1_callousaffect_5_specific",
        },
      },
      srp_clean_factor1_callousaffect_6: {
        subtrait: "Factor1_CallousAffect",
        item: "I leave friends that I no longer need/dumps friends don't need",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People form and maintain friendships for different reasons. Some value long-term emotional connection and loyalty, while others focus more on mutual benefit or shared goals. Over time, some friendships may fade or end, especially when the original purpose or connection changes.<br><b>Questions:</b><br>Which do you consider more important in a friendship: loyalty or usefulness? Why?<br>What usually leads you to end a friendship or drift away from someone you once spent time with?</div>`,
          id: "srp_clean_factor1_callousaffect_6_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>You haven't spoken to your childhood friend in a long time. You were once very close, but over the years, you both moved to different places for school and work. Recently, he reached out to chat. His life hasn't been going well, while you're now busy building a successful career. You sense that he might be hoping for your help, even though he likely can't offer anything in return.<br><b>Questions:</b><br>Would you try to reconnect and offer help, or would you distance yourself and move on, seeing it as a natural change in relationships? Why?<br>When a friendship starts to fade or shift, how do you decide whether to let it go or maintain the connection?</div>`,
          id: "srp_clean_factor1_callousaffect_6_specific",
        },
      },
    },
    factor2_erraticlifestyle: {
      srp_clean_factor2_erraticlifestyle_7: {
        subtrait: "Factor2_ErraticLifestyle",
        item: "I am rebellious/I'm rebellious person",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People differ in how they respond to rules, expectations, or authority. Some prefer to follow guidelines and avoid conflict, while others feel the need to challenge restrictions, speak out, or resist being controlled—especially when they feel the rules are unfair or unnecessary.<br><b>Questions:</b><br>How do you usually feel when someone in authority tells you what to do?<br>Can you think of a time when you chose to break a rule or go against expectations? If so, what led to that decision?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_7_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're in a work or school setting where a new rule or policy has just been introduced. You strongly disagree with it—you think it's unnecessary and limiting.<br><b>Questions:</b><br>How would you respond in that situation? Would you go along with the rule, speak out against it, or break it? Why?<br>How do you usually decide whether to follow or challenge rules?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_7_specific",
        },
      },
      srp_clean_factor2_erraticlifestyle_8: {
        subtrait: "Factor2_ErraticLifestyle",
        item: "Danger excites me/I've often done dangerous things just for the thrill of it",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People vary in how they respond to risk and danger. Some prefer to avoid risky situations and feel anxious when facing uncertainty. Others are drawn to thrilling experiences and enjoy the rush that comes with pushing limits—whether through extreme sports, risky decisions, or daring behavior.<br><b>Questions:</b><br>How do you usually feel in situations that involve risk, uncertainty, or potential danger?<br>Can you recall a time when you did something risky or dangerous mostly for the excitement? How did you feel afterwards?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_8_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're on a weekend trip with friends, and someone suggests doing something risky for fun—like jumping from a high cliff into a river, exploring a dangerous trail without proper gear, or racing cars on an empty road. Some people in the group are excited, others are hesitant or worried about safety.<br><b>Questions:</b><br>Would you want to join in or hold back? Why?<br>What factors would influence your decision—such as the thrill, the risk, peer pressure, or your own comfort level?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_8_specific",
        },
      },
      srp_clean_factor2_erraticlifestyle_9: {
        subtrait: "Factor2_ErraticLifestyle",
        item: "I enjoy doing daring things/enjoy doing wild things",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Some people are drawn to experiences that feel bold, unpredictable, or a little wild. They might enjoy spontaneous adventures, breaking routines, or doing things that others see as unconventional or daring. Others prefer to stay within familiar boundaries and avoid chaotic or unexpected situations.<br><b>Questions:</b><br>How do you feel about doing things that are wild, bold, or out of the ordinary?<br>Can you think of a time when you did something daring or spontaneous just for the experience? If so, how did you feel about it afterward?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_9_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you are given the opportunity to participate in a spontaneous activity, such as a surprise road trip or an adventurous event with no detailed plan. The activity promises to be thrilling but comes with uncertainty.<br><b>Questions:</b><br>Would you join in, suggest something different, or hold back? Why?<br>How do you usually decide whether to go along with something that feels bold or spontaneous?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_9_specific",
        },
      },
      srp_clean_factor2_erraticlifestyle_10: {
        subtrait: "Factor2_ErraticLifestyle",
        item: "I don't follow rules/rarely follow rules",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People vary in how they relate to rules and expectations. Some believe rules are important for keeping order and fairness, while others feel that rules are often limiting, unnecessary, or meant to be bent. These attitudes can affect how we behave in everyday situations—from school and work to social settings.<br><b>Questions:</b><br>How do you usually feel about following rules or guidelines in daily life?<br>Have there been times when you chose not to follow a rule? If so, what led to that decision, and how did you feel about it afterward?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_10_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're on an outdoor adventure with a group of friends. The organizer has set several rules—everyone must wear safety gear, stay within a designated area, and follow a specific route. Some people feel that these rules limit their freedom, especially once you're deep into the activity and there's no one else around to enforce them.<br><b>Question:</b><br>Would you stick to the rules to maintain safety and order, or would you feel it's okay to occasionally bend the rules for the sake of freedom and enjoyment? Why? How do you usually feel about following rules or guidelines in daily life?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_10_specific",
        },
      },
      srp_clean_factor2_erraticlifestyle_11: {
        subtrait: "Factor2_ErraticLifestyle",
        item: "I have sex with strangers/sex with people barely know",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People have different views about intimacy and relationships. Some prefer to build strong emotional connections before being physically intimate, while others are more open to casual experiences, even with people they've just met. These preferences can reflect personality, values, or lifestyle.<br><b>Questions:</b><br>How do you usually approach new relationships or sexual encounters—do you prefer to take time, or are you open to more spontaneous experiences? Have you ever had a sexual encounter with someone you barely knew? If so, what led to that decision, and how did you feel about it afterward?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_11_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're at a party or social event and meet someone you feel attracted to. You hit it off quickly—there's strong chemistry and shared excitement. The person expresses interest in going home with you, even though you've only just met.<br><b>Questions:</b><br>What would you be most likely to do in that situation, and why?<br>How do you usually decide whether to pursue physical intimacy with someone new?</div>`,
          id: "srp_clean_factor2_erraticlifestyle_11_specific",
        },
      },
    },
    factor2_criminaltendencies: {
      srp_clean_factor2_criminaltendencies_12: {
        subtrait: "Factor2_CriminalTendencies",
        item: "Sometimes I carry weapons for protection/sometimes carry weapons",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People differ in how they think about personal safety. Some trust that their environment is generally safe, while others carry items like pepper spray, pocketknives, or other weapons just in case.<br><b>Questions:</b><br>Have you ever felt the need to carry a weapon for protection? If so, in what situations? How do you usually decide whether to carry something for protection?</div>`,
          id: "srp_clean_factor2_criminaltendencies_12_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're going to a part of town or an event where you don't feel entirely safe. You know some people carry items like pepper spray, pocketknives, or other weapons just in case. Others rely on staying alert, moving in groups, or avoiding risky places altogether.<br><b>Questions:</b><br>Have you ever felt the need to carry a weapon for protection? If so, in what situations? How do you usually decide whether to carry something for protection?</div>`,
          id: "srp_clean_factor2_criminaltendencies_12_specific",
        },
      },
      srp_clean_factor2_criminaltendencies_13: {
        subtrait: "Factor2_CriminalTendencies",
        item: "I threaten to get money/threaten people to get money",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>People deal with financial stress and personal goals in different ways. Some look for help, negotiate, or work through challenges, while others may resort to more forceful or confrontational approaches—such as threats or pressure—to get what they want.<br><b>Questions:</b><br>How do you usually handle situations where you're under pressure and need something urgently from someone else?<br>Have you ever been tempted to use threats or pressure to get something you wanted, like money or help? If so, what happened?</div>`,
          id: "srp_clean_factor2_criminaltendencies_13_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Imagine you're under serious financial pressure, and the stress of debt is affecting your daily life. One day, you realize you could pressure someone—perhaps someone who feels guilty toward you—into giving you the money you need, either through subtle manipulation or direct threats.<br><b>Questions:</b><br>Would you consider going through with that strategy, or would you choose another way to handle your situation? Why?<br>How do you view the use of intimidation or pressure when you're desperate?</div>`,
          id: "srp_clean_factor2_criminaltendencies_13_specific",
        },
      },
      srp_clean_factor2_criminaltendencies_14: {
        subtrait: "Factor2_CriminalTendencies",
        item: "I tried to hit someone with a car/tried to hit people with vehicle",
        broad: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>Everyone experiences anger or frustration at times, especially in high-stress situations like driving or dealing with road conflict. While some people express their anger through words or withdrawal, others may feel urges to act out physically or aggressively.<br><b>Question:</b><br>Have you ever felt the urge to do something physically aggressive—like using your vehicle to scare or retaliate against someone on the road? If so, what happened? How did you feel about it afterward?</div>`,
          id: "srp_clean_factor2_criminaltendencies_14_broad",
        },
        specific: {
          prompt_question: `<div style="text-align:left"><br><b>Situation:</b><br>One day, you're stuck in traffic on your way home. A driver suddenly cuts in front of you, almost forcing you off the road. You feel shocked and angry. Some people might honk, yell, or ignore it. Others may feel tempted to retaliate—by speeding up, tailgating, or even swerving toward the other driver.<br><b>Questions:</b><br>What would you be most likely to do in that kind of situation, and why? Have you ever felt the urge to do something physically aggressive—like using your vehicle to scare or retaliate against someone on the road?</div>`,
          id: "srp_clean_factor2_criminaltendencies_14_specific",
        },
      },
    },
  },
];

// ======  ======
//
function sampleTwoDifferentSubtraits(questionArray) {
  const allItems = [];
  for (const group of questionArray) {
    for (const key in group) {
      for (const itemKey in group[key]) {
        const item = group[key][itemKey];
        allItems.push({
          subtrait: item.subtrait,
          broad: item.broad,
          specific: item.specific,
        });
      }
    }
  }
  const first = jsPsych.randomization.sampleWithoutReplacement(allItems, 1)[0];
  const rest = allItems.filter((q) => q.subtrait !== first.subtrait);
  const second = jsPsych.randomization.sampleWithoutReplacement(rest, 1)[0];
  return [first, second];
}

const machivSample = sampleTwoDifferentSubtraits(machivQuestions);
const npiSample = sampleTwoDifferentSubtraits(npiQuestions);
const srpSample = sampleTwoDifferentSubtraits(srpQuestions);

function createSitu(question, displayId, dataId) {
  return {
    type: surveyText,
    questions: [
      {
        prompt: `<h1>Situation ${displayId}</h1><p>${question}</p>`,
        rows: 50,
        columns: 150,
        required: true,
        name: dataId,
      },
    ],
    on_load: function () {
      const textarea = document.querySelector(
        `textarea[data-name="${dataId}"]`
      );
      window.keyboardEvents = [];
      if (textarea) {
        const saved = localStorage.getItem("draft_" + dataId);
        if (saved) textarea.value = saved;
        textarea.addEventListener("input", function () {
          localStorage.setItem("draft_" + dataId, textarea.value);
        });
        textarea.addEventListener("keydown", function (event) {
          const keyEvent = {
            key: event.key,
            code: event.code,
            time: jsPsych.getTotalTime(),
          };
          window.keyboardEvents.push(keyEvent);
        });
      }
    },
    on_finish: function (data) {
      const response = data.response[dataId] || "";
      const wordCount = response.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount < 100) {
        alert("Please write at least 100 words.");
        data.valid = false;
      } else {
        data.valid = true;
        localStorage.removeItem("draft_" + dataId);
      }
      data.keyboardEvents = window.keyboardEvents;
    },
  };
}

function createSituLoop(situ) {
  return {
    timeline: [situ],
    loop_function: function () {
      const data = jsPsych.data.get().last(1).values()[0];
      return !data.valid;
    },
  };
}

// Situations with display IDs and data IDs
const situ_1 = createSitu(
  machivSample[0].broad.prompt_question,
  1,
  machivSample[0].broad.id
);
const situ_2 = createSitu(
  machivSample[1].specific.prompt_question,
  2,
  machivSample[1].specific.id
);
const situ_3 = createSitu(
  npiSample[0].broad.prompt_question,
  3,
  npiSample[0].broad.id
);
const situ_4 = createSitu(
  npiSample[1].specific.prompt_question,
  4,
  npiSample[1].specific.id
);
const situ_5 = createSitu(
  srpSample[0].broad.prompt_question,
  5,
  srpSample[0].broad.id
);
const situ_6 = createSitu(
  srpSample[1].specific.prompt_question,
  6,
  srpSample[1].specific.id
);

const situ_1_loop = createSituLoop(situ_1);
const situ_2_loop = createSituLoop(situ_2);
const situ_3_loop = createSituLoop(situ_3);
const situ_4_loop = createSituLoop(situ_4);
const situ_5_loop = createSituLoop(situ_5);
const situ_6_loop = createSituLoop(situ_6);

const feedback = {
  type: surveyText,
  questions: [
    {
      prompt: `<h1>Feedback</h1><div style="text-align:left"><p>You're almost done! Please leave any thoughts you have here. Were any instructions unclear? Did you find any questions confusing? All feedback is welcome!</p></div>`,
      rows: 50,
      columns: 150,
      required: false,
      name: "feedback",
    },
  ],
  on_load: function () {
    const textarea = document.querySelector(`textarea[data-name="feedback"]`);
    window.keyboardEvents = [];
    if (textarea) {
      textarea.addEventListener("keydown", function (event) {
        const keyEvent = {
          key: event.key,
          code: event.code,
          time: jsPsych.getTotalTime(),
        };
        window.keyboardEvents.push(keyEvent);
      });
    }
  },
  on_finish: function (data) {
    data.keyboardEvents = window.keyboardEvents;
  },
};

function generateConfirmationCode(length = 8) {
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, (dec) => dec.toString(36))
    .join("")
    .slice(0, length)
    .toUpperCase();
}

let confirmationCode = generateConfirmationCode();

const end = {
  type: htmlButtonResponse, // jsPsychHtmlButtonResponse
  stimulus: () => `<h1>Thank you for your participation.</h1>
    <p>Your confirmation code is: <b style="font-size:1.5em">${confirmationCode}</b></p>
    <p>Please copy and submit this code to Amazon MTurk to receive your reward.</p>`,
  choices: ["Finish"],
  on_finish: function () {
    jsPsych.data.addProperties({ confirmationCode });
  }
};

const timeline = [
  welcome,
  demographics_1,
  demographics_2,
  surveyChoiceInstruction,
  multiChoice,
  situation_intro,
  situ_1_loop,
  situ_2_loop,
  situ_3_loop,
  situ_4_loop,
  situ_5_loop,
  situ_6_loop,
  feedback,
  end,
];

jsPsych.run(timeline);
