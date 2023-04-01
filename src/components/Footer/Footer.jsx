import React from "react";

const Footer = () => {
  return (
    <div className="p-16 border-t-4 border-indigo-600">
      <h3 className="text-center mb-7 font-bold">React's Questions</h3>
      <div className="space-y-4">
        <p className="font-bold underline">Q.1: What is the defference between props and state?</p>
        <p>
          Ans1: Props are read-only and used for passing data from parent to
          child components, while state is mutable and used for managing data
          that can change within a component.
        </p>

        <p className="font-bold underline">Q.1: How does work useState?</p>
        <p>
          Ans1: useState is a Hook that allows functional components to have
          state variables. It takes an initial value and returns an array with
          the current state value and a function to update it. When the state is
          updated, the component re-renders with the new state value.
        </p>

        <p className="font-bold underline">Q.1: What is the useEffect's works besides data loading?</p>
        <p>
          Ans1: useEffect is a Hook in React that allows a functional component
          to perform side effects. Besides data loading, useEffect can be used
          to perform actions such as updating the title of the document, setting
          up event listeners, or cleaning up resources when the component
          unmounts. It runs after the component is rendered and after every
          update, unless specified otherwise.
        </p>

        <p className="font-bold underline">Q.1: How does react work?</p>
        <p>
          Ans1: React creates a virtual representation of the UI, known as the
          virtual DOM. It updates only the parts that have changed, reducing
          unnecessary DOM manipulation. React components are modular, reusable,
          and manage their internal state using props and state.
        </p>
      </div>
    </div>
  );
};

export default Footer;
