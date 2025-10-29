# Class Component
    1. state in class based component -- Declaration: object ki form mein constructor ke andar; Change: setter method ka use krke ; "this" keyword extensively use hota hai yaha
    2. state in function based component -- Declaration: useState hook use krke; Change: setter method ka use krke ; "this" keyword not required here
    3. props -- Props (Properties) woh data hota hai jo parent component se child component ko pass kiya jaata hai. 
    4. readonly data -- props , changing data -- state

# Property File
    1. Here instead of application.properties we use .env file , .env file project root pe banti hai.
    2. Sirf REACT_APP_ prefix wale variables React ke andar accessible hote hain. Restart app before use
    3. .env.development for development mode , .env for all environment , .env.production for production build

# LIFECYCLE METHOD 
    => ONLY USED IN CLASS BASED COMPONENT ; FUNCTION BASED COMPONENT ME USE NAHI HOTE 
    # Mounting Phase
        1. constructor() OR constructor(props)
            1.1 Component create hote hi sabse pehle call hota hai. Iska use state initialize karne aur event handlers ko bind karne ke liye hota hai.
            1.2 first statment inside constructor should be super() or this() and if constructor(args) has args then they should also have same args
            1.3 Avoid: API calls, side effects ; Kaam: State initialize, event binding (yah event binding is nt rqrd when using arrow function) ; har component ka apna constructor hota hai
        2. static getDerivedStateFromProps(props, state) -- Rarely used
            2.1 render() se theek pehle call hota hai. Yeh props ke change ke basis par state ko update karta hai. Bahut kam use hota hai.
            2.2 Kaam: Props se state update (rare use) ; Kab: Render se pehle (har baar)
        3. render()
            3.1 Yeh component ka UI define karta hai (JSX return karta hai).
            3.2 Pure hona chahiye: No setState, no side effects ; Kab: Component display hone se pehle
        4. componentDidMount() -- API calls
            4.1 Component ke DOM mein successfully render hone ke baad call hota hai. Yahan aap API calls (data fetching), subscriptions set up kar sakte hain, ya DOM ko manually access kar sakte hain.
            4.2 <News key="general" .../> :- key pass taki multiple news component ko uniquely identify kr sake nahi-to same component dekh k yah didMount usko load hi nai karega
            4.3 Best for: Data fetching ; Kab: Component DOM mein add hone ke baad ; Kaam: API calls, subscriptions, timers
    # Updating Phase
        1. static getDerivedStateFromProps() -- Rarely used
            1.1 State ya props update hone par render() se pehle phir se call hota hai.
        2. shouldComponentUpdate(nextProps, nextState) -- Prevent unnecessary renders
            2.1 Yeh method true ya false return karta hai, jo decide karta hai ki component ko re-render karna hai ya nahi.
            2.2 Kaam: Performance optimization ; Return: true (re-render) ya false (skip)
        3. render()
            3.1 Updated props/state ke saath component ko re-render karta hai.
        4. getSnapshotBeforeUpdate(prevProps, prevState) -- Rarely used
            4.1 DOM ki current values (e.g., scroll position) ko capture kar sakte hain.
            4.2 Kab: after render() but DOM update ; Kaam: DOM info capture (scroll position, etc.)
        5. componentDidUpdate(prevProps, prevState, snapshot) -- Side effects on change
            5.1 Component ke re-render hone aur DOM update hone ke baad call hota hai. Yahan aap API calls ya side effects perform kar sakte hain, but usually prevProps aur prevState se compare karne ke baad.
            5.2 Kaam: Side effects, API calls on change ; Warning: setState mein condition lagao (infinite loop se bachne ke liye) ; Kab: Re-render ke baad
    # Unmounting Phase
        1. componentWillUnmount() -- Cleanup
            1.1 Component ke DOM se hataye jaane se theek pehle call hota hai. Yahan aap cleanup karte hain, jaise ki timers, network requests, ya event listeners ko remove karna.

# JSX 
    1. key = newsUrl => given array made from json data me article ko uniquely identify krne k liye kuch aur relevant tha nahi hence newsUrl use kiya
    2. array.map() in jsx

# Hooks
    => Functions jo functional components mein state aur lifecycle features use karne dete hain
    => Hooks ko sirf functional component ke top level par ya custom hooks ke andar hi call kiya ja sakta hai. Aap unhe loops, conditions (if statements), ya nested functions ke andar call nahi kar sakte.
    => Hooks ko sirf React functional components ya custom Hooks mein hi call kiya ja sakta hai. Unhe normal JavaScript functions mein call nahi kiya ja sakta.
    1. useState --]] const [state, setState] = useState(initialValue);
        1.1 Yeh aapke component mein ek state variable declare karta hai. Jab state badalti hai, toh component automatically re-render (update) ho jaata hai. 
        1.2 Usecase: User input track karna, kisi element ko hide/show karna, ya counter value store karna.
    2. useEffect --]] useEffect(() => { /* Side effect code */ }, [dependencyArray]);
        2.1 Side effects handle karne ke liye use hota hai. Side effects woh operations hote hain jo component ke render hone ke baad hote hain, jaise: data fetching, subscriptions, ya manually DOM ko change karna.
        2.2 Usecase: API se data fetch karna, timer set karna, ya event listeners add karna.
    3. useContext --]] const value = useContext(MyContext);
        3.1 Yeh hook aapko component tree mein kisi bhi level par context se data read karne ki facility deta hai, bina props ko har level par pass kiye.
        3.2 Usecase: Current user theme (light/dark) ya user authentication status ko access karna.
    4. useRef --]] const countRef = useRef(0);
        4.1 Yeh hook ek mutable reference object create karta hai jiska .current property persist (barkaraar) rehta hai across renders. Usecase: Input field par focus set karna ya koi counter value store karna jo UI mein dikhti nahi hai.
        4.2 Iska primary use DOM elements ko directly access karna ya koi aisi value store karna hai jo change ho sakti hai, lekin uske change hone par component ko re-render nahi hona chahiye. 
    5. useReducer --]] const [state, dispatch] = useReducer(reducer-function, initialState);
        7.1 Yeh useState ka ek alternative hai complex state logic ko handle karne ke liye, khaaskar jab state updates kisi specific logic (yaani reducer function) par depend karte hain.
        7.2 Usecase: Complex forms ya ek se zyada related state values ko manage karna. Yeh (state, action) => newState pattern ko follow karta hai, jise Redux se inspired maana jaata hai.
    6. useMemo --]] const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        6.1 Expensive calculations (lambe ya mushkil calculations) ke result ko cache (store) karne ke liye hota hai, taaki woh calculation har baar component re-render hone par baar-baar na ho.
        6.2 Yeh ek stored value (ya result) return karta hai. Jab tak uski dependencies / param-value change nahi hoti, tab tak yeh component re-render hone par bhi purani stored value hi deta hai.
        6.3 Usecase: Kisi child compo ko koi value(prop) pass karna, jisse us child compo ka unnecessary re-render ruk jaye. Kisi bade array(list) ko filter ya sort karna, complex math ka const result storage.
    7. useCallback --]] const memoizedCallback = useCallback(() => {doSomething(a, b);}, [a, b]);
        7.1 useCallback hook ka istemaal functions ko memoize (store) karne ke liye hota hai. Yeh har render par ek naya function banane se rokta hai. 
        7.2 Yeh ek memoized version of the callback function return karta hai. Function sirf tabhi recreate hota hai jab uski dependencies (dependency array mein di gayi values) change hoti hain.

# LFM
    1. React mein UI (user interface) sirf tab update hota hai jab component ka state ya props badalta hai. 
    2. setState() is asynchronous method, when this.setState() is called too React state ko turant (immediately) update nahi karta. Woh is update ko schedule kar deta hai aur aapke function ka baaki code aage execute karne lagta hai.
    3. this.props.xyz hamesha latest value dikhata hai, jabki this.xyz = props.xyz constructor me assign karne ke baad static ho jata hai.
    4. If API ki limit khtm ho gayi to wah news article nahi dega hence array khalu rh jayega hence length property undefined show hogi

# Work
    1. Different category per navigate krne per loader nahi show ho rha
    2. Article khtm hone per bhi last me loader aa rha hai 