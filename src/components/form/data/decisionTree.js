export default {
  formId: 1,
  firstNodeId: 1,
  intro: {
    title: "Welcome",
    description: "Please answer next questions"
  },
  form: [
    {
      questionId: 1,
      questionText: "Ai prezentat simptome?",
      type: "SINGLE_CHOICE",
      options: [
        {
          label: "Da",
          value: 1
        },
        {
          label: "Nu",
          value: 0,
          nextQuestionId: 4
        }
      ]
    },
    {
      questionId: 2,
      questionText: "De cand ai inceput sa ai simptome?",
      type: "DATE_PICKER"
    },
    {
      questionId: 3,
      questionText: "Ce temperatura ai avut?",
      type: "SINGLE_CHOICE",
      options: [
        {
          label: "37",
          value: 1
        },
        {
          label: "38",
          value: 2
        }
      ]
    },
    {
      questionId: 4,
      questionText: "Ești fumător/fumătoare? (inclusiv țigări electronice)",
      type: "SINGLE_CHOICE",
      options: [
        {
          label: "Da",
          value: 1
        },
        {
          label: "Nu",
          value: 0
        }
      ]
    },
    {
      questionId: 5,
      questionText: "Care este sexul tău?",
      type: "SINGLE_CHOICE",
      options: [
        {
          label: "Masculin",
          value: 1
        },
        {
          label: "Feminin",
          value: 2
        }
      ]
    },
    {
      questionId: 6,
      questionText: "Care este numele tau?",
      type: "INPUT",
      options: []
    },
    {
      questionId: 7,
      questionText: "Ce simptome ai?",
      type: "MULTIPLE_CHOICE",
      options: [
        {
          label: "Tuse",
          value: 0
        },
        {
          type: "OTHER",
          label: "Febra",
          value: 1
        },
        {
          type: "OTHER",
          label: "Altele",
          value: 2
        }
      ]
    },
    {
      questionId: 8,
      type: "FINAL",
      questionText: "Ce trebuie sa faci?",
      options: [
        {
          label: "Esti bine! Stai acasa!",
          value: 0
        },
        {
          label: "Suna medicul de familie! Dar stai acasa!",
          value: 1
        }
      ]
    }
  ]
};
