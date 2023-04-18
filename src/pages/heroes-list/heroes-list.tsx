import HeroesTable from '../../components/heroes-table/heroes-table';

import styles from './heroes-list.module.scss';

const HeroesList: React.FC = () => {
  return (
    <div className={styles.list_wrapper}>
      <HeroesTable />
    </div>
  )
}
  
export default HeroesList;