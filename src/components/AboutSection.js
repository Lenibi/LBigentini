import React from 'react';

const AboutSection = ({ avatar }) => {
  return (
    <section id="About" className="section1">
      <div className="section1picture">
        <img src={avatar} alt="Logo" />
      </div>
      <div className="section1text">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem fringilla ut morbi tincidunt 
          augue. Leo vel orci porta non pulvinar. Convallis convallis tellus id interdum velit laoreet id donec. 
          Et leo duis ut diam quam. Turpis tincidunt id aliquet risus feugiat in ante metus. Suspendisse potenti 
          nullam ac tortor vitae purus faucibus ornare suspendisse. Mi eget mauris pharetra et ultrices neque. 
          Nisl vel pretium lectus quam id leo in vitae turpis. Ac felis donec et odio pellentesque diam volutpat.
          Urna nec tincidunt praesent semper feugiat nibh sed. Adipiscing at in tellus integer. Etiam tempor 
          orci eu lobortis elementum nibh tellus molestie nunc. Sed id semper risus in hendrerit. Mi proin sed 
          libero enim sed faucibus. Massa tempor nec feugiat nisl pretium fusce id.
        </p>
        <a href="/page"><button>Learn More</button></a>
      </div>
    </section>
  );
}

export default AboutSection;
