import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableStrains.module.css';

const DUMMY_STRAINS = [
    {
      id: 'm1',
      name: 'OG',
      description: 'SATIVA',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'HAZE',
      description: 'SATIVA',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'KUSH',
      description: 'INDICA',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'GELATO',
      description: 'HYBRID',
      price: 18.99,
    },
  ];

const AvailableStrains = () => {
    const strainsList = DUMMY_STRAINS.map((strains) =>  (
    <ProductItem 
    key={strains.id} 
    id={strains.id}
    name={strains.name} 
    description={strains.description} 
    price={strains.price}
    />
    ));
    
    return (
    <section className={classes.strains}>
        <Card>
        <ul>{strainsList}</ul>
        </Card>
    </section>
);
};
export default AvailableStrains;