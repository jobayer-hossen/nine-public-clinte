import React from "react";

const Blog = () => {
  return (
    <>
      {/* 4 question answer section */}
      <div className=" mt-5 mb-5  ">
        <div className="mx-auto gap-4 grid md:grid-cols-2 lg:w-[90%] lg:grid-cols-2 md:w-[30%] ">
          {/* 1 no answer */}
          <div className=" card w-full bg-lime-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">When should you use context API ?</h2>
              <p>
                When I need to pass props through multiple components I will use
                the context API. The context API works much like a data tower,
                which allows data to be accessed from a root component (from
                which the data is generated) to any component of the app.
              </p>
            </div>
          </div>
          {/*2 no  answer */}
          <div className="  card w-full bg-violet-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">What is a custom hook ?</h2>
              <p>
                A custom hook is a JavaScript function that starts with use and
                can call another hook. The main reason to write a custom hook is
                for code reusability. Custom hooks are used to perform complex
                tasks such as Fetching data, managing component state, handling
                events, and also dealing with dependencies can return data that
                the component needs, such as state variables, functions, or
                other objects.
              </p>
            </div>
          </div>
          {/* 3 no  answer */}
          <div className=" bg-cyan-100 card w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title">What is useRef ?</h2>
              <p>
                userRef Returns a mutable Ref object whose .current property is
                initialized with the passed argument (initialValue).useRef()
                creates a plain JavaScript object . The returned object will
                last for the entire lifetime of the component. Its familiar with
                refs primarily as a way to access the DOM.
              </p>
            </div>
          </div>
          {/* 4 no  answer */}
          <div className=" bg-emerald-100 card w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title">What is useMemo ?</h2>
              <p>
                useMemo is a React Hook that lets me cache the result of a
                calculation between re-renders. The basic purpose of the useMemo
                hook is related to the fact that we try to avoid the unnecessary
                re-rendering of components and props in our program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
