import { useEffect, useState } from 'react';
import { DataStore, Predicates } from 'aws-amplify';
import { Drink } from './models';
import { NavBar, HeroLayout4, ActionCard, MarketingFooter, HomeCard, ActionCardCollection } from './ui-components';

function App() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const drinks = await DataStore.query(Drink, Predicates.ALL, {
        page: 0,
        limit: 10
      });
      console.log(drinks)
      setDrinks(drinks)
    }
    fetchData();
  }, [Drink]);

  return (
    <>
      <NavBar width={'100%'} />
      {/* <HeroLayout4 width={'100%'} /> */}
      {/* <div className="grid m-32 grid-cols-3 gap-20">
        {drinks.map((drink, i) => <ActionCard key={i} drink={drink} thumbnailHeight={'250px'} />)}
      </div> */}

      <ActionCardCollection />


      <MarketingFooter width={'100%'} />
    </>
  );
}

export default App;