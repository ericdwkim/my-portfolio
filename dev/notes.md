## React Concepts/Notes
useInView from `react-intersection-observer` hook ; used to determine if an element is in the `viewport`; it returns an object containing `ref` (object) and `inView` (bool)
            `ref` --> a function to be applied to the DOM element you want to observe; an object containing a function?
            `inView` --> a boolean to indicate whether the observed elems are within the viewport based on the specified `threshold` value

useContext, createContext, context provider
     - these hooks are used to be able to pass around state changes within a viewport (?)
     - a context provider is defined that provides the state context; so instead of having to constantly pass around props to ensure correct state changes, it can just provide context or data through the component tree w/o having to pass props down manually at every level
     - a custom context variable is created via createContext hook which is then to be used by useContext which takes in a context object (the value returned from `React.createContext` aka `createContext` hook)
     - from a high level, these concepts/hooks allow for creating of custom contexts and passing of state changes to alleviate the pain of having to pass props down

reducer
     - essentially a useEffect for more complicated situations; will circle back on this concept later

useState
    - this built-in react hook allows one to define a default state `useState(someDefaultState)` and monitor changes to the state or value `activeSection` ("Home", "About", etc... a string dtype) or `timeOfLastClick` (a number dtype) through its generated setter functions `setActiveSection` and `setTimeOfLastClick`.
    
```
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
```

useEffect
    - a built-in React hook used to monitor state or prop changes to induce appropriate changes, such as DOM changes or UI changes. 

For example, in hooks.ts, it is used in the custom `useSectioninView` hook to update the `sectionName` prop (?) depending on which section is in the viewport. Intuitively, this makes sense bc/ we want users to be able to click on "About" section and for the UI to update accordingly and scroll automatically to that section. 

```
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

```
The syntax is essentially:

```
useEffect(() => {

if (some conditional expression) is true ... {
 //then execute this function or logic inside here}
}, [depending on any dependencie listed in here which can be a bool, an int, a function, a prop])
```


## TailWindCSS Concepts/Notes
`dark` prefix for darkmode; `rem` is for "root element" unit size --> If the root element (<html>) has a font size of 16px (a common default), 1rem equals 16px. Therefore, 2rem would be 32px, 0.5rem would be 8px, etc.