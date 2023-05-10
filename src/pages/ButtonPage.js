import { GoBell, GoAlert, GoDeviceMobile } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    // console.log('Click!!');
  };

  return (
    // underlying element
    <div className="App">

      <div>
        <Button success rounded outline onClick={handleClick} className='mb-5'>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline>Buy Now</Button>
      </div>
      <div>
        <Button warning>
          <GoAlert />
          Get Me There
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDeviceMobile />
          Read More
        </Button>
      </div>
      <div>
        <Button primary rounded>Read More</Button>
      </div>

    </div>
  );
}

export default ButtonPage;
