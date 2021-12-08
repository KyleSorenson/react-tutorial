* ## [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
  * Elements: JSX produces React "Elements"
  * Elements are different than Components (Components are made up of Elements)
  * You can put any valid JavaScript expression inside JSX curly braces
  * It is best practice to wrap JSX in parentheses when splitting over multiple lines
  * After "compilation" <-- research further ***, JSX elements become JavaScript function calls that evalute to objects
  * Element attributes can be specified within quotes or curly braces, but not both

* ## [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
  * Rendering to the DOM is accomplished by "ReactDOM.render(element, rootNode)"
  * React elements are immutable. To update an element you must create a new element and render it again

* ## [Components and Props](https://reactjs.org/docs/components-and-props.html)
  * Components are like functions: they accept arguments in the form of "props" and return React Elements
  * Functional Components: the simplest way to write a component is literally as a function: `const FunctionalComponent = (props) => <h1>This is a React Element</h1>`
  * Class Components: ES6 classes can also be used to define components
  * The two forms are equivalent from React's point of view
  * React Elements an also represent React Components
  * Component names should start with a capital letter: React will interpret components with lowercase names as DOM tags
  * Don't be afraid to split components into smaller components
  * Components are your "palette." Having many reusable components will be useful in larger apps
  * Candidates for component extraction are UI elements that get used repeatedly and UI elements that are large and complex
  * A component can never modify its own props: they are read-only
  * All React components must act like pure functions