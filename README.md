## [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
* **Elements:** JSX produces React "Elements"
* Elements are different than Components (Components are made up of Elements)
* You can put any valid JavaScript expression inside JSX curly braces
* It is best practice to wrap JSX in parentheses when splitting over multiple lines
* After [compilation](#topics-to-research-more), JSX elements become JavaScript function calls that evaluate to objects
* Element attributes can be specified within quotes or curly braces, but not both

---

## [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
* Rendering to the DOM is accomplished by "ReactDOM.render(element, rootNode)"
* React elements are immutable. To update an element you must create a new element and render it again

---

## [Components and Props](https://reactjs.org/docs/components-and-props.html)
* Components are like functions: they accept arguments in the form of "props" and return React Elements
* **Functional Components:** the simplest way to write a component is literally as a function:
  * `const FunctionalComponent = (props) => <h1>This is a React Element</h1>`
* **Class Components:** ES6 classes can also be used to define components
* The two forms are equivalent from React's point of view
* React Elements an also represent React Components
* Component names should start with a capital letter: React will interpret components with lowercase names as DOM tags
* Don't be afraid to split components into smaller components
* Components are your "palette." Having many reusable components will be useful in larger apps
* Candidates for component extraction are UI elements that get used repeatedly and UI elements that are large and complex
* A component can never modify its own props: they are read-only
* **All React components must act like pure functions**

---

## [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* State is similar to props, but controlled by the component
* Steps for converting a function to a class:
  1. Create an ES6 class with the same name that extends React.Component
  2. Add an empty method to it called render()
  3. Move the bdy of the function into the render() method
  4. Replace props with this.props in the render body
  5. Delete original function declaration
* [Class components have special access to local state and lifecycle methods](#topics-to-research-more)
* Steps to add state to a class:
  1. Replace this.props.xxx with this.state.xxx
  2. Add a class constructor that assigns the initial state
* When a component is rendered, it is called "mounting" in React
* When a component is removed, it is called "unmounting" in React
* `componentDidMount()` runs after the component has been rendered to the DOM
* `componentWillUnmount()` runs immediately before the component is removed from the DOM
* [Functions should be called at speciic times relative to the component's lifecycle](#topics-to-research-more)

---

## Topics to Research More
* Compilation
  * [See Here](https://reactjs.org/docs/introducing-jsx.html#jsx-is-an-expression-too)
* Why the single instantiation of class components allows them to use features like local state and life cycle methods.
  * [See Here](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
* Study [this section](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) in more depth.
  * Learn about `setInterval()` and `clearInterval()` functions
  * Review the following code:

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

