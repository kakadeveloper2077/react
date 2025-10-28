import Title from "./Title";  // importação de um arquivo pra outro.

function App (){   /* nesse componente funcional usamos o '()' e as <div> para fazer retorno de dois ou mais componentes iguais ou não num mesmo componente 
                   nesse caso são 3 componentes iguais. essa ideia de você usar mais um compente no mesmo lugar se aplica junto dos elementos do html.*/
  return (
    <div>
      <Title/>
      <p><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit 
        sit nesciunt maxime minima tenetur? Cupiditate rem atque repellat delectus soluta id nostrum minima 
        ad quos aspernatur, dolorum debitis, iusto officia!</span><span>Repellendus asperiores alias nobis vitae. 
          Quos voluptas amet velit nisi nesciunt a molestiae, consequatur quod quidem, deserunt tenetur, 
          perferendis vel odit ipsam quaerat hic ullam dicta maxime aut porro possimus.</span></p>
      <Title/>
      <p><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit 
        sit nesciunt maxime minima tenetur? Cupiditate rem atque repellat delectus soluta id nostrum minima 
        ad quos aspernatur, dolorum debitis, iusto officia!</span><span>Repellendus asperiores alias nobis vitae. 
          Quos voluptas amet velit nisi nesciunt a molestiae, consequatur quod quidem, deserunt tenetur, 
          perferendis vel odit ipsam quaerat hic ullam dicta maxime aut porro possimus.</span></p>
      <Title/>
      <p><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit 
        sit nesciunt maxime minima tenetur? Cupiditate rem atque repellat delectus soluta id nostrum minima 
        ad quos aspernatur, dolorum debitis, iusto officia!</span><span>Repellendus asperiores alias nobis vitae. 
          Quos voluptas amet velit nisi nesciunt a molestiae, consequatur quod quidem, deserunt tenetur, 
          perferendis vel odit ipsam quaerat hic ullam dicta maxime aut porro possimus.</span></p>
    </div>
  )
}

export default App;