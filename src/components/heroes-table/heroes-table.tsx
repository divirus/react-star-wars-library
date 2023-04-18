import { useSelector } from 'react-redux';

import { IPeopleSliceState } from '../../services/types';

import HeroCard from '../hero-card/hero-card';

import styles from './heroes-table.module.scss';

const HeroesTable: React.FC = () => {
  const { data } = useSelector((state: {people: IPeopleSliceState}) => state.people);

  return (
    <section id="heroes-table" className={styles.container}>
      {
        data?.map((hero: any, i: any) => (
          <HeroCard
            key={i}
            data={hero} 
          />
        ))
      }
    </section>
  )
}

export default HeroesTable;