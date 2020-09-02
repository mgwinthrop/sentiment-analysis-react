import React, { useReducer, createContext } from "react";

export const QuestionContext = createContext();

const initialState = {
  questions: [{}],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        questions: [...state.questions, action.payload]
      };
    case "EDIT_QUESTION":
      return {
        questions: state.questions.filter(
          question => question.id !== action.payload
        )
      };
    
    default:
      throw new Error();
  }
};

export const ContactContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuestionContext.Provider value={[state, dispatch]}>
      {props.children}
    </QuestionContext.Provider>
  );
};