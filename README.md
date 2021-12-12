## Bookmarks

* [Current Progress](https://reactrouter.com/docs/en/v6/getting-started/tutorial#index-routes)
* [Current Advanced Guides Progress](https://reactjs.org/docs/accessibility.html)
* [Revisit Later](https://reactjs.org/docs/lifting-state-up.html): Lifting State Up

---

### Main Concepts
* [Introducing JSX](#introducing-jsx)
* [Rendering Elements](#rendering-elements)
* [Components and Props](#components-and-props)
* [State and Lifecycle](#state-and-lifecycle)
* [Handling Events](#handling-events)
* [Conditional Rendering](#conditional-rendering)
* [Lists and Keys](#lists-and-keys)
* [Forms](#forms)
* [Lifting State Up](#lifting-state-up)
* [Composition vs Inheritance](#composition-vs-inheritance)
* [Thinking in React](#thinking-in-react)

### Advanced Guides

### Hooks

### React Router Dom

### [Further Study](#topics-to-research-more)

---

## [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
* **Elements:** JSX produces React "Elements"
* *Elements* are different than *Components* (Components are made up of Elements)
* You can put any valid JavaScript expression inside JSX curly braces
* It is best practice to wrap JSX in parentheses when splitting over multiple lines
* After [compilation](#topics-to-research-more), JSX elements become JavaScript function calls that evaluate to objects
* Element attributes can be specified within quotes or curly braces, but not both

---

## [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
* Rendering to the DOM is accomplished by `ReactDOM.render(element, rootNode)`
* React elements are immutable. To update an element you must create a new element and render it again

---

## [Components and Props](https://reactjs.org/docs/components-and-props.html)
* Components are like functions: they accept arguments in the form of "props" and return React Elements
* **Functional Components:** the simplest way to write a component is literally as a function:

```
const FunctionalComponent = (props) => <h1>This is a React Element</h1>
```

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
* `setState()` should be used to modify state. Directly assiging a value to `this.state.value = 'new value'` will not trigger a re-render of the component.
* Since this.props and this.state may be called asyncronously, a function should be passed to `setState()` for any value that relies on the previous version of the state

```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// or

this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```
* Parent and child components don't know about state. State is locally-owned, and any data derived from it must be passed down to child components. Data only flows down.

---

## [Handling Events](https://reactjs.org/docs/handling-events.html)
* With JSX you pass a function as the event handler, rather than a string. i.e. `onClick={handleEvent}` rather than `onclick="handleEvent()`
* You cannot return false to prevent default behavior
* React events are not the same as native events, they are [synthetic events](#topics-to-research-more)
* You shouldn't need to call `addEventListener` to a DOM element after it is created. Listeners can be provided when the element is rendered, typically as a method on the class:

```
<button onClick={this.handleClick}>
  {this.state.isToggleOn ? 'ON' : 'OFF'}
</button>
```
* To avoid having to bind class methods to the constructor, arrow functions can be used. The first method is considered [experimental](#topics-to-research-more), but is also the *recommended* syntax.

```
// This will work but is "experimental"
class BindToThis extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

// So will this, but it is not recommended
class BindToThis extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```
* If you want to pass parameters other than the React event to the handler, either of the following will work:

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

---

## [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
* Since JSX allows for any embedded expression, the `&&` operator can be used for conditionally including elements.
  * Be careful to avoid falsy expressions
* Ternary operators will also work in JSX

---

## [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
* If an array of JSX elements is included in the render function, each element will render:

```
let elementArray = [<h1>Element 1</h1>, <h1>Element 2</h1>];

ReactDOM.render(
  <div>{elementArray}</div>,
  document.getElementById('root')
);
```
* Whenever an array of elements is created, a unique key needs to be assigned to each element
* The best keys use a string that uniquely identifies a list item among its siblings. [Use of indexes is discouraged](#topics-to-research-more).
* Keys need only be unique amond siblings. The same keys maybe reused globally.
* Unlike all other attributes, keys are not passed to components. If the same value is needed in your component, it must be passed as a prop with a different name
* `map()` may be embedded directly in JSX. The resulting array will be rendered.

---

## [Forms](https://reactjs.org/docs/forms.html)
* **Controlled Components:** input form elements that are controlled by the React state
  * input onChange => updates state => updates input value
* In HTML, a `textarea` tag defines its text by its children. React uses a value attribute instead.
* In HTML, a `select` tag selects an option based on the `selected` attribute on a child option tag. React uses a value on the select tag instead. 
  * Multiple options can be selected at once
* To handle multiple controlled input elements, add a name attribute to each element and target it using `event.target.name`
* Specifying the value prop on a controlled component will lock it from being edited

---

## [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

---

## [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
* **Composition:** Passing children to components. Children are specified by placing JSX between component tags. They can be accessed within component using `props.children`
  * Custom "slots" can be defined by passing full components into the props of a parent component
  
```
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```
* Component inheritence hierarchies are never recommended (don't use components the way you might use other classes or objects)

---

## [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
1. **Begin with a Mockup:** Design the look and UI of your app first, before coding anything
2. **Break the UI into a Component Hierarchy::** Draw boxes around every component and subcomponent and give them names
3. **Build a Static Version in React:** Build a version of your app that isn't interactive. Build out the components and pass data with props *only*. Save state for later.
  * Build top-down or bottom-up
4. **Identify the Minimal (but complete) Representation of UI State:** Find the minimal set of mutable state that your app needs.
  *[DRY: Don't Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
5. **Identify Where Your State Should Live:** Which component owns the state?
6. **Add Inverse Data Flow** 

---

## [React Router](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
* [Nested Routes](https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes)
  * Outlets

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
* Research [synthetic events](https://reactjs.org/docs/events.html)
  * [See Here](https://reactjs.org/docs/handling-events.html)
* Research [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/)
  * [See Here](https://reactjs.org/docs/handling-events.html)
* Research the [negative impacts of using an index as a key](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) and [why keys are necessary](https://reactjs.org/docs/reconciliation.html#recursing-on-children)
  * [See Here](https://reactjs.org/docs/lists-and-keys.html#keys)
* Remember that ES6 computed property name syntax can be used to update object keys:

```
{
  object = {
    [variable] : value
  }
}
```
* Research [Formik](https://jaredpalmer.com/formik)