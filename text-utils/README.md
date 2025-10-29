# JSX
    1. JSX = HTML ke ander JS , JSX me HTML k keywords ko camelcase+extra me likhte h to avoid naming conflicts with JS keywords [JS k keywords as it is hi rhnge usme koi changes nahi hai].
    2. In react components are of 2 type -- class based & function based , now majorly function based component is used. Bebble compiles JSX without the help from react
    3. In react we mainly write JSX inside the paranthesis () of return statment of function based component. [we used () here bcoz JS automatically semicolon daal deta h which might/can raise error]
    4. React k ander ager hum JSX use kr rhe h to hame bus ek hi element return krna hai. If multiple use krna h to yato <div> k ander sabko wrap kardo yato JSX fragement <> --- </> k ander wrap krdo
    5. to insert JS in HTML place it inside {} without quotation ; Generally* JS k ander HTML daloge to wah HTML parse nahi hoga & as-it-is show hoga with tag [* - dangerous hence set using inner html]

# Props
    0. module banate time yato extension .mjs rkh ya fir json file k config m kuch changes krne padnge
    1. Props (properties) are read-only data passed from parent to child components
    2. PropTypes provide runtime type checking for props in "development mode" 
    3. Default props provide fallback values when props aren't passed from parent components.
    4. As per v19 propTypes and defaultProps will be silently ignored 
    5. Use TS for typechecking+requiredValue & default params ( in curly braces {--data--} ) for fallback value

# Componet
    1. Component should be Cap-Case  

# OTHER
    1. PC : http://localhost:3000 , Mobile : http://192.168.0.103:3000
    2. setting > emet > include language -- to get HTML suggestion in JS add (javascript,javascriptreact) here
    3. When we give our app to some we don't give them node-module folder bcoz it is too heavy + it can be recreated using cmd npm install & (package & package-lock) hence we keep this in git ignore
    4. self-closing tag k last m / laga dena <--content--/> , dhyan rkhna about changes in HTML keywords name
    5. 'public' folder contains files that are public available when the project is build hence sensitive chize mt daalna
    6. npm run : for development ,  npm run build : for production

# state
    0. ( a1 || a2 ) => 
            if a1 is true it will return a1 else it will return a2
            inside "if" conditional-block ( a1 || a2 ) => executes statement-block ager anyone is true 
            false value => false , 0 , -0 , 0n , "" ,  null , undefined , NaN
    1. State = component memory that causes re-renders when changed ; useState() = React Hook hai jo func component me state crt krne ke liye use hota h.
    2. const [stateVariable, setStateVariable] = useState(initialValue) ; Never mutate directly + updates are "asynchronous" + Use func updates for prev state
    3. stateVariable → current state value ; setStateVariable → function jo state ko update karega ; initialValue → state ki starting value
    4. [stateVariable, setStateVariable] -- array destructuring → ek hi line me array ke elements ko variables me todh ke rakh lo. array of 2 variable
    5. Bootstrap Alert Types: Danger/Error , Info , Success , Warning , ...

# hooks
    1. \s (whitespace character) sabhi types ke whitespace ko match karta hai: " ", "\t"-tab, "\n"-newline ,...
    2. Feature          - <a>              ,  <Link>                    , <NavLink>
       Page reload      - Yes (slow)       ,  No (fast)                 , No (fast)
       State preserve   - Lost             ,  Yes                       , Yes
       Active detection - Manual           ,  Manual                    , Automatic
       Usage            - External links   ,  Internal navigation       , Navbar/menu items
       Styling active   - Manual JS        ,  Manual condition          , Built-in isActive
    3. style syntax me 2 baar {{---}} use hote ; In React JSX: JavaScript object ke form me style pass karte hai, string nahi.
	JSX ke andar jo bhi {} likhte ho wo JS exp hota h. Aur style prop React me ek object expect karta h. 
	Outer {} → JSX me JavaScript expression likhne ke liye. Inner {} → Actual object literal jo CSS properties rakhta hai.
    4. href="#" => Page ke top id pe scroll hota, Page reload nhi hota, Placeholder link (jab actual link nhi h)
       to="#" => Kuch nahi hota (invalid route) , Console mein warning aa sakti hai  
       Agar link ki zaroorat nahi, toh <button> use karo, href="#" mat karo! ✅

# OTP
    0. backgroundColor ko bootstrap wali property doge to wah kaam nahi krga bcoz CSS को actual color values चाहिए।
    1. true1 && tru2 && true3 = true3 ; false1 && any && any = false1 ; true1 && false2 && any = false2
    2. null return kr skte ho but null p koi operation nahi kr skte 
    3. Google Search Console => Free service offered by Google that helps you monitor performance , Indexing and Coverage , Site Health and Usability , Special Enhancements Reports

# Router
    1. Set-up :- npm install react-router-dom -->> import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'; 
    2. Router - (jo compo prmnt show krne h) > Routes > Route - <Route path="-" element={-} /> -->> <a href> chng to <Link to>
    3. use 'exact' before 'path' in <Route> to disable partial matching (like user/about -- will goto user due to partial matching)
    