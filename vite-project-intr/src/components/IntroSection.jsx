 export default function IntroSection() {
     return (
         <section>
            <h1 className="centered">Добро пожаловать</h1>
            <h3 className="centered" style={{color: 'red'}}>Зачем зашли на сайт?</h3>
         </section>
    )
 }

// import React from "react";

// export default function IntroSection() {
//     return React.createElement('section',null,[ React.createElement('h1', {className: 'centered'}, 'Добро пожаловать'), 
//         React.createElement('h3',  {className: 'centered', style:{color: 'red'}} , 'Зачем зашли на сайт?')])
// }