# JSX
    1. JSX = HTML ke ander JS , JSX me HTML k keywords ko camelcase+extra me likhte h to avoid naming conflicts with JS keywords [JS k keywords as it is hi rhnge usme koi changes nahi hai].
    2. In react components are of 2 type -- class based & function based , now majorly function based component is used. Bebble compiles JSX without the help from react
    3. In react we mainly write JSX inside the paranthesis () of return statment of function based component. [we used () here bcoz JS automatically semicolon daal deta h which might/can raise error]
    4. React k ander ager hum JSX use kr rhe h to hame bus ek hi element return krna hai. If multiple use krna h to yato <div> k ander sabko wrap kardo yato JSX fragement <> --- </> k ander wrap krdo
    5. to insert JS in HTML place it inside {} without quotation ; Generally* JS k ander HTML daloge to wah HTML parse nahi hoga & as-it-is show hoga with tag [* - dangerous set inner html]

# Props
    0. module banate time yato extension .mjs rkh ya fir json file k config m kuch changes krne padnge
    1. Function/Child k ander props ko change mat krna it should be read-only
    2. PropTypes React core ka part nahi hai (React 15 se hata diya gaya tha), ab ise alag se install krke import krna pdta hai. 
    3. PropTypes -- Used for typechecking + set required condition , defaultProps -- used to provide default value

# Componet
    1. Component should be Cap-Case , 

# OTHER
    1. PC : http://localhost:3000 , Mobile : http://192.168.0.101:3000
    2. setting > emet > include language -- to get HTML suggestion in JS add (javascript,javascriptreact) here
    3. When we give our app to some we don't give then node-module folder bcoz it is too heavy + it can be recreated using cmd npm install & (package & package-lock) hence we keep this in git ignore
    4. self-closing tag k last m / laga dena <--content--/> , dhyan rkhna about changes in HTML keywords name
    5. 'public' folder contains files that are public available when the project is build hence sensitive chize mt daalna
    6. npm run : for development ,  npm run build : for production

# OTHER-2