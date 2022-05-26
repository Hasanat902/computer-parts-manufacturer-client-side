import React from 'react';

const Blogs = () => {
    return (
        <div >
            <h2 className='text-center text-3xl font-bold text-success'>Our Blogs</h2>
            <div className='my-5 shadow-lg p-5 border border-emerald-400'>
                <h2 className='text-xl font-bold mb-3'>Q1. How will you improve the performance of a React Application?</h2>
                <p className='text-gray-500'><span className='font-bold'>Answer: </span>React uses several clever techniques to minimize the number of costly DOM operations required to update the UI.Data immutability is not an architecture or design pattern, it’s an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow. Avoid Inline Function Definition in the Render Function. Avoid using Index as Key for map.Avoiding Props in Initial States.Spreading props on DOM elements.Use CSS Animations Instead of JS Animations.A CDN is a great way to deliver static content from your website or mobile application to your audience more quickly and efficiently.Before production deployment, you should check and analyze your application bundle to remove the plugins or modules that aren’t needed.</p>
            </div>
            <div className='my-5 shadow-lg p-5 border border-emerald-400'>
                <h2 className='text-xl font-bold mb-3'>Q2. What are the different ways to manage a state in a React application?</h2>
                <p className='text-gray-500'><span className='font-bold'>Answer: </span>Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day.Despite the fact that state management is a hard problem.There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks this method of state management has been drastically simplified.We often talk about React components as lego building blocks to build our applications, and I think that when people hear this, they somehow think this excludes the state aspect. The "secret" behind my personal solution to the state management problem is to think of how your application's state maps to the application's tree structure.Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.</p>
            </div>
            <div className='my-5 shadow-lg p-5 border border-emerald-400'>
                <h2 className='text-xl font-bold mb-3'>Q3. How does prototypical inheritance work?</h2>
                <p className='text-gray-500'><span className='font-bold'>Answer: </span>Simply prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length).</p>
            </div>
            <div className='my-5 shadow-lg p-5 border border-emerald-400'>
                <h2 className='text-xl font-bold mb-3'>Q4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='text-gray-500'><span className='font-bold'>Answer: </span>One should never update the state directly because, If you update it directly, calling the setState() afterward may just replace the update you made.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.You will lose control of the state across all components.Also If you try to update state directly then it won't re-render the component.Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.</p>
            </div>
            <div className='my-5 shadow-lg p-5 border border-emerald-400'>
                <h2 className='text-xl font-bold mb-3'>Q5. What is a unit test? Why should write unit tests?</h2>
                <p className='text-gray-500'><span className='font-bold'>Answer: </span>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.
                <br/>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.It simplifies the debugging process.Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</p>
            </div>
        </div>
    );
};

export default Blogs;