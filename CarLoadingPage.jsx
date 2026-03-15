import { useEffect, useState } from "react";

export default function CarLoadingPage() {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setCars([
        { id: 1, model: "Toyota Camry", price: 12000 },
        { id: 2, model: "Honda Civic", price: 9000 },
        { id: 3, model: "Nissan Altima", price: 15000 },
        { id: 4, model: "Ford Focus", price: 7000 },
        { id: 5, model: "Hyundai Elantra", price: 11000 },
        { id: 6, model: "Mazda 3", price: 13000 },
        { id: 7, model: "Kia Optima", price: 14000 },
        { id: 8, model: "Volkswagen Jetta", price: 16000 },
        { id: 9, model: "Subaru Impreza", price: 18000 },
        { id: 10, model: "Chevy Malibu", price: 20000 },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="car-page">
      {loading ? (
        <div className="loading-wrapper">
          <div className="loading-bar">
            <div className="loading-fill" />
          </div>
          <p className="loading-text">Searching cars $5,000 – $25,000...</p>
        </div>
      ) : (
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <h3>{car.model}</h3>
              <p className="price">${car.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
