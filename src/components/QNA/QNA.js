import React from 'react';

const QNA = () => {
    return (
        <div>
            <h3>How react works?</h3>
            <p>First, JSX converted to JavaScript object. when the render method works and all those object converted tree of elements, its called virtual DOM, and show the on UI. When any data change on UI the render methode recall and get new virtual DOM, then compare this DOM to the old virtual DOM, and then set the data that is change on UI DOM. it's successful for diff algorithm.</p>

            <h3>Different between props and state</h3>
            <ul>
                <li>Props are read-only.	State changes can be asynchronous.</li>
                <li>Props are immutable.	State is mutable.</li>
                <li>Props allow you to pass data from one component to other components as an argument.	State holds information about the components.</li>
                <li>Props can be accessed by the child component.	State cannot be accessed by child components.</li>
            </ul>

            <h3>When to use useEffect?</h3>
            <ul>
                <li>useEffect() is for side-effects</li>
                <li>Dependencies argument</li>
                <li>Component lifecycle</li>
                <li>Side-effect cleanup</li>
                <li>Conclusion</li>
            </ul>
        </div>
    );
};

export default QNA;