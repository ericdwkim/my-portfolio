# React Concepts/Notes
useInView from react-intersection-observer hook is used to determine if an element is in the viewport; it returns an object containing `ref` (object) and `inView` (bool)
            `ref` --> a function to be applied to the DOM element you want to observe; an object containing a function?
            `inView` --> a boolean to indicate whether the observed elems are within the viewport based on the specified `threshold` value

useContext, createContext, context provider
     - these hooks are used to be able to pass around state changes within a viewport (?)
     - a context provider is defined that provides the state context; so instead of having to constantly pass around props to ensure correct state changes, it can just provide context or data through the component tree w/o having to pass props down manually at every level
     - a custom context variable is created via createContext hook which is then to be used by useContext which takes in a context object (the value returned from `React.createContext` aka `createContext` hook)
     - from a high level, these concepts/hooks allow for creating of custom contexts and passing of state changes to alleviate the pain of having to pass props down

reducer
     - essentially a useEffect for more complicated situations; will circle back on this concept later



# TailWindCSS Concepts/Notes
`dark` prefix for darkmode; `rem` is for "root element" unit size --> If the root element (<html>) has a font size of 16px (a common default), 1rem equals 16px. Therefore, 2rem would be 32px, 0.5rem would be 8px, etc.