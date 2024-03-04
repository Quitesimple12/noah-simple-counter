import React, { useState, useEffect } from "react";

function Timer() {
  const [timer1, setTimer1] = useState(0);
  const [timer2, setTimer2] = useState(0);
  const [timer3, setTimer3] = useState(0);
  const [timer4, setTimer4] = useState(0);
  const [timer5, setTimer5] = useState(0);
  const [timer6, setTimer6] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer1(prevSlot => (prevSlot + 1) % 10);
      if (timer1 === 9) {
        setTimer2(prevSlot => (prevSlot + 1) % 10);
        if (timer2 === 9) {
          setTimer3(prevSlot => (prevSlot + 1) % 10);
          if (timer3 === 9) {
            setTimer4(prevSlot => (prevSlot + 1) % 10);
            if (timer4 === 9) {
              setTimer5(prevSlot => (prevSlot + 1) % 10);
              if (timer5 === 9) {
                setTimer6(prevSlot => (prevSlot + 1) % 10);
              }
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer1, timer2, timer3, timer4, timer5, timer6]);

  // Wrap the JSX inside a container element and return it
  return (
    <div className="row">
      <div className="col">
        <SmallCard counter={timer6} />
      </div>
      <div className="col">
        <SmallCard counter={timer5} />
      </div>
      <div className="col">
        <SmallCard counter={timer4} />
      </div>
      <div className="col">
        <SmallCard counter={timer3} />
      </div>
      <div className="col">
        <SmallCard counter={timer2} />
      </div>
      <div className="col">
        <SmallCard counter={timer1} />
      </div>
    </div>
  );
}

function SmallCard({ counter }) {
  return (
    <div className="card text-center bg-secondary" style={{ width: 100, height: 120 }}>
      <div className="card-body" style={{fontSize: "75px"}}>{counter}</div>
    </div>
  );
}

function Background() {
  return (
    <div className="card text-center bg-dark" style={{ height: 150 }}>
      <div className="card-body">
        <Timer />
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Background />
    </div>
  );
};

export default Home;