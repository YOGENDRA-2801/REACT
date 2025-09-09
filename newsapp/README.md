# Class Component
    1. state -- tarika different hai , change krne ka tarika different hai , different from usestate
    2. props 
    3. constructor
    4. readonly data -- props , changing data -- state
    5. jaise usestate ko hum directly set nahi krte the setState() use krke krte the wese hi yaha bhi krne ka 

# Property File
    1. Here instead of application.properties we use .env file , .env file project root pe banti hai.
    2. Sirf REACT_APP_ prefix wale variables React ke andar accessible hote hain. Restart app before use
    3. .env.development for development mode , .env for all environment , .env.production for production build

# SAWAAL
    1. ComponentDidMount -- 
    2. Class component k ander constructor kya kaam kr rha hai ? , hatane p bhi error nhi ? , use bhi class-properties hi ho rhi h , init krne k liye mene usko param m bhi nahi rkh 
    3. constructor ka kaam kya hai , kaha use kre , relevance as per v19
    4. array.map() in jsx
    5. col-md-4
    6. state ko constructor k ander ku dala
    7. Different component load hone per constructor bhi dubara call hota hai ? 

# LIFECYCLE METHOD
    1. componentDidMount()
        1.1 <News key="general" .../> :- key pass taki multiple news component ko uniquely identify kr sake nahi-to same component dekh k yah didMount usko load hi nai karega
    2. render() 

# JSX 
    1. key = newsUrl => given array made from json data me article ko uniquely identify krne k liye kuch aur relevant tha nahi hence newsUrl use kiya

# JS

# LFM
    1. React mein UI (user interface) sirf tab update hota hai jab component ka state ya props badalta hai. 
    2. setState() is asynchronous method, when this.setState() is called too React state ko turant (immediately) update nahi karta. Woh is update ko schedule kar deta hai aur aapke function ka baaki code aage execute karne lagta hai.
    3. this.props.xyz hamesha latest value dikhata hai, jabki this.xyz = props.xyz constructor me assign karne ke baad static ho jata hai.
    4. If API ki limit khtm ho gayi to wah news article nahi dega hence array khalu rh jayega hence length property undefined show hogi