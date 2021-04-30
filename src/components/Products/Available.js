import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableStrains.module.css';

const DUMMY_STRAINS = [
    {
      id: 'm1',
      name: 'RUNTZ',
      description: 'Hybrid',
      price: 22.99,
      thumbnail: "https://i.imgur.com/zfFZzH3.png"
    },
    {
      id: 'm2',
      name: 'BLUE DREAM',
      description: 'Sativa',
      price: 16.5,
      thumbnail: "https://i.imgur.com/5BloSm5.png"
    },
    {
      id: 'm3',
      name: 'GG4',
      description: 'Hybrid',
      price: 12.99,
      thumbnail: "https://i.imgur.com/yUga1X9.png"
    },
    {
      id: 'm4',
      name: 'GELATO',
      description: 'HYBRID',
      price: 18.99,
      thumbnail: "https://i.imgur.com/pRtaXeL.png"
    },
    {
      id: 'm5',
      name: 'WEDDING CAKE',
      description: 'SATIVA',
      price: 18.99,
      thumbnail: "https://i.imgur.com/jSn9UsA.png"
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
    thumbnail={strains.thumbnail}
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