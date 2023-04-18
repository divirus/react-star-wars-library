import { ICharacter } from '../../services/types';

import styles from './hero-card.module.scss'

type HeroCardProps = {
    data: ICharacter;
  };

const HeroCard: React.FC<HeroCardProps> = ({
  data
}) => {
  return (
    <>
      <div className={styles.card_wrapper}>
        <div>NAME
          <p>{data.name}</p>
        </div>
        <div>AGE
          <p>{data.birth_year}</p>
        </div>
        <div>RACE
          <p>{data.species}</p>
        </div>
      </div>
    </>
  )
}
    
export default HeroCard;