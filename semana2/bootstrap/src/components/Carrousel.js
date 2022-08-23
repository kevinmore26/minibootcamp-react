import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://dynamic-yield.linio.com//api/scripts/8767678/images/1108c022b6bd8__linio_falabella_on_bb2_ext.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://dynamic-yield.linio.com//api/scripts/8767678/images/23c587e84f38d__linio_falabella_on_bb3_ext.jpg"
          alt="Second slide"
        />
         
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dynamic-yield.linio.com//api/scripts/8767678/images/4fb2e83bb07d__linio_falabella_on_bb4_ext.jpg"
          alt="Third slide"
        />
         
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;